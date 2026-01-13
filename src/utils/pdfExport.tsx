import { pdf } from '@react-pdf/renderer';
import { InstallationGuidePDF } from '../components/pdf/InstallationGuidePDF';
import type { ConfiguratorState } from '../components/types';

export const exportToPDF = async (configState: ConfiguratorState): Promise<void> => {
  try {
    // Create timestamp
    const now = new Date();
    const timestamp = now.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    });

    // Generate PDF
    const doc = <InstallationGuidePDF state={configState} createdAt={timestamp} />;
    const pdfBlob = await pdf(doc).toBlob();
    
    // Create download link
    const url = URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.href = url;
    
    // Generate filename
    const filename = `LED-Wall-Installation-Guide-${configState.displayConfig.modelName}-${now.getTime()}.pdf`;
    link.download = filename;
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up
    URL.revokeObjectURL(url);
    
    console.log('PDF exported successfully:', filename);
  } catch (error) {
    console.error('Error exporting PDF:', error);
    throw error;
  }
};

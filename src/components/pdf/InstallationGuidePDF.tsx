import React from 'react';
import { 
  Document, 
  Page, 
  Text, 
  View, 
  StyleSheet, 
  Font
} from '@react-pdf/renderer';
import type { ConfiguratorState } from '../types';

// Register fonts (using built-in fonts for now)
Font.register({
  family: 'Helvetica',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf'
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#1f2937',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#374151',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1f2937',
    borderBottom: '1pt solid #e5e7eb',
    paddingBottom: 4,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  label: {
    width: 120,
    fontWeight: 'bold',
    color: '#4b5563',
  },
  value: {
    flex: 1,
    color: '#1f2937',
  },
  warningBox: {
    backgroundColor: '#fef3c7',
    border: '1pt solid #f59e0b',
    borderRadius: 4,
    padding: 12,
    marginBottom: 20,
  },
  warningTitle: {
    fontWeight: 'bold',
    color: '#92400e',
    marginBottom: 4,
  },
  warningText: {
    color: '#78350f',
    fontSize: 11,
  },
  diagram: {
    border: '1pt solid #d1d5db',
    borderRadius: 4,
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#f9fafb',
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    left: 40,
    right: 40,
    fontSize: 10,
    color: '#6b7280',
    borderTop: '1pt solid #e5e7eb',
    paddingTop: 8,
  },
  table: {
    marginBottom: 15,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottom: '1pt solid #e5e7eb',
  },
  tableHeader: {
    fontWeight: 'bold',
    backgroundColor: '#f3f4f6',
  },
  tableCell: {
    flex: 1,
    padding: 6,
    borderRight: '1pt solid #e5e7eb',
  },
  tableCellLast: {
    flex: 1,
    padding: 6,
  },
});

interface InstallationGuidePDFProps {
  state: ConfiguratorState;
  createdAt: string;
}

export const InstallationGuidePDF: React.FC<InstallationGuidePDFProps> = ({ 
  state, 
  createdAt 
}) => {
  const { wallConfig, displayConfig } = state;
  
  // Calculate actual LED dimensions
  const actualLEDWidth = displayConfig.modulesHorizontal * displayConfig.ledModule.width;
  const actualLEDHeight = displayConfig.modulesVertical * displayConfig.ledModule.height;
  const remainingWidth = wallConfig.width - actualLEDWidth;
  
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <Text style={styles.title}>LED Wall Installation Guide</Text>
        <Text style={styles.subtitle}>{displayConfig.modelName} Configuration</Text>
        
        {/* Project Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Project Information</Text>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Created Date:</Text>
            <Text style={styles.value}>{createdAt}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Project Type:</Text>
            <Text style={styles.value}>{wallConfig.setup === 'indoor' ? 'Indoor' : 'Outdoor'} LED Display</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>LED Model:</Text>
            <Text style={styles.value}>{displayConfig.modelName}</Text>
          </View>
        </View>

        {/* Wall Configuration */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Wall Configuration</Text>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Wall Dimensions:</Text>
            <Text style={styles.value}>{wallConfig.width}m × {wallConfig.height}m</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Total Wall Area:</Text>
            <Text style={styles.value}>{(wallConfig.width * wallConfig.height).toFixed(2)}m²</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Measurement Unit:</Text>
            <Text style={styles.value}>{wallConfig.unit}</Text>
          </View>
        </View>

        {/* LED Display Configuration */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>LED Display Configuration</Text>
          <View style={styles.infoRow}>
            <Text style={styles.label}>LED Dimensions:</Text>
            <Text style={styles.value}>{actualLEDWidth.toFixed(2)}m × {actualLEDHeight.toFixed(2)}m</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Display Area:</Text>
            <Text style={styles.value}>{(actualLEDWidth * actualLEDHeight).toFixed(2)}m²</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Total Resolution:</Text>
            <Text style={styles.value}>
              {displayConfig.modulesHorizontal * displayConfig.ledModule.resolution.width} × 
              {displayConfig.modulesVertical * displayConfig.ledModule.resolution.height} pixels
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Aspect Ratio:</Text>
            <Text style={styles.value}>
              {displayConfig.modulesHorizontal * displayConfig.ledModule.resolution.width} : 
              {displayConfig.modulesVertical * displayConfig.ledModule.resolution.height}
            </Text>
          </View>
        </View>

        {/* Module Requirements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Module Requirements</Text>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={styles.tableCell}>Specification</Text>
              <Text style={styles.tableCell}>Value</Text>
              <Text style={styles.tableCellLast}>Unit</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Modules Horizontal</Text>
              <Text style={styles.tableCell}>{displayConfig.modulesHorizontal}</Text>
              <Text style={styles.tableCellLast}>pieces</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Modules Vertical</Text>
              <Text style={styles.tableCell}>{displayConfig.modulesVertical}</Text>
              <Text style={styles.tableCellLast}>pieces</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Total Modules</Text>
              <Text style={styles.tableCell}>{displayConfig.totalModules}</Text>
              <Text style={styles.tableCellLast}>pieces</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Module Width</Text>
              <Text style={styles.tableCell}>{displayConfig.ledModule.width}</Text>
              <Text style={styles.tableCellLast}>meters</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Module Height</Text>
              <Text style={styles.tableCell}>{displayConfig.ledModule.height}</Text>
              <Text style={styles.tableCellLast}>meters</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Module Resolution</Text>
              <Text style={styles.tableCell}>
                {displayConfig.ledModule.resolution.width} × {displayConfig.ledModule.resolution.height}
              </Text>
              <Text style={styles.tableCellLast}>pixels</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Pixel Pitch</Text>
              <Text style={styles.tableCell}>-</Text>
              <Text style={styles.tableCellLast}>mm</Text>
            </View>
          </View>
        </View>

        {/* Installation Layout */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Installation Layout</Text>
          <View style={styles.diagram}>
            <Text style={{ marginBottom: 10, textAlign: 'center' }}>Wall Layout Diagram</Text>
            
            {/* Simple ASCII-style layout representation */}
            <View style={{ 
              border: '2pt solid #374151',
              width: 200,
              height: 150,
              position: 'relative',
              margin: '0 auto',
              backgroundColor: '#f3f4f6'
            }}>
              {/* Wall boundary */}
              <Text style={{ 
                position: 'absolute', 
                top: -15, 
                left: 0, 
                fontSize: 10,
                color: '#6b7280'
              }}>
                Wall: {wallConfig.width}m × {wallConfig.height}m
              </Text>
              
              {/* LED display area */}
              <View style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                border: '1pt solid #059669',
                backgroundColor: '#d1fae5',
                width: 120,
                height: 90,
              }}>
                <Text style={{ 
                  position: 'absolute', 
                  top: -15, 
                  left: 0, 
                  fontSize: 8,
                  color: '#059669'
                }}>
                  LED: {actualLEDWidth.toFixed(1)}m × {actualLEDHeight.toFixed(1)}m
                </Text>
                <Text style={{ 
                  position: 'absolute', 
                  top: '50%', 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)',
                  fontSize: 8,
                  textAlign: 'center',
                  color: '#059669'
                }}>
                  {displayConfig.modulesHorizontal} × {displayConfig.modulesVertical}
                  {'\n'}
                  Modules
                </Text>
              </View>
              
              {/* Remaining space indicators */}
              {remainingWidth > 0.1 && (
                <Text style={{ 
                  position: 'absolute', 
                  bottom: -15, 
                  right: 0, 
                  fontSize: 8,
                  color: '#f59e0b'
                }}>
                  Remaining: {remainingWidth.toFixed(1)}m
                </Text>
              )}
            </View>
          </View>
        </View>

        {/* Installation Notes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Installation Guidelines</Text>
          
          <View style={styles.warningBox}>
            <Text style={styles.warningTitle}>⚠️ Important Safety Notes</Text>
            <Text style={styles.warningText}>
              • Ensure proper structural support for the LED wall weight{'\n'}
              • Follow manufacturer's installation guidelines{'\n'}
              • Allow adequate ventilation for heat dissipation{'\n'}
              • Use certified mounting hardware and cables{'\n'}
              • Consider access for maintenance and servicing
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Mounting Type:</Text>
            <Text style={styles.value}>Wall-mounted with fixed brackets</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Power Requirements:</Text>
            <Text style={styles.value}>Consult manufacturer specifications</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Maintenance Access:</Text>
            <Text style={styles.value}>Front/rear access recommended</Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>
            Generated by LED Wall Configurator | Created: {createdAt} | 
            This document is for installation planning purposes only.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

import React from 'react';
import { UnitSwitcher } from '../sidebar/UnitSwitcher';
import { WallConfigurationSection } from '../sidebar/WallConfigurationSection';
import { DisplayConfigurationSection } from '../sidebar/DisplayConfigurationSection';
import { ContentConfigurationSection } from '../sidebar/ContentConfigurationSection';
import { Button } from '../common/Button';
import { exportToPDF } from '../../utils/pdfExport';
import type { ConfiguratorState } from '../types';

interface SidebarProps {
  state: ConfiguratorState;
  updateWallConfig: (updates: any) => void;
  updateDisplayConfig: (updates: any) => void;
  updateContentConfig: (updates: any) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  state,
  updateWallConfig,
  updateDisplayConfig,
  updateContentConfig,
}) => {
  const handleExportPDF = async () => {
    try {
      await exportToPDF(state);
    } catch (error) {
      console.error('Failed to export PDF:', error);
    }
  };

  return (
    <aside className="w-full lg:w-80 min-w-0 bg-gray-50 border-r border-gray-200 overflow-y-auto">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        {/* PDF Export Button */}
        <Button onClick={handleExportPDF} className="w-full">
          📄 Export Installation Guide
        </Button>
        <UnitSwitcher
          unit={state.wallConfig.unit}
          onChange={(unit) => updateWallConfig({ unit })}
        />

        <WallConfigurationSection
          wallConfig={state.wallConfig}
          onChange={updateWallConfig}
        />

        <DisplayConfigurationSection
          displayConfig={state.displayConfig}
          onChange={updateDisplayConfig}
        />

        <ContentConfigurationSection
          contentConfig={state.contentConfig}
          onChange={updateContentConfig}
        />
      </div>
    </aside>
  );
};

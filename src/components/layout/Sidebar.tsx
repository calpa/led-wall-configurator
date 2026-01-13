import React from 'react';
import { UnitSwitcher } from '../sidebar/UnitSwitcher';
import { WallConfigurationSection } from '../sidebar/WallConfigurationSection';
import { DisplayConfigurationSection } from '../sidebar/DisplayConfigurationSection';
import { ContentConfigurationSection } from '../sidebar/ContentConfigurationSection';
import { Button } from '../common/Button';
import type { ConfiguratorState } from '../types';

interface SidebarProps {
  state: ConfiguratorState;
  updateWallConfig: (updates: any) => void;
  updateDisplayConfig: (updates: any) => void;
  updateContentConfig: (updates: any) => void;
  fitToWall: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  state,
  updateWallConfig,
  updateDisplayConfig,
  updateContentConfig,
  fitToWall,
}) => {
  const handleContactUs = () => {
    console.log('Contact Us clicked');
  };

  const handleExportToPDF = () => {
    console.log('Export to PDF clicked');
  };

  return (
    <aside className="w-full lg:w-80 min-w-0 bg-gray-50 border-r border-gray-200 overflow-y-auto">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
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
          wallConfig={state.wallConfig}
          onChange={updateDisplayConfig}
          onFitToWall={fitToWall}
        />

        <ContentConfigurationSection
          contentConfig={state.contentConfig}
          onChange={updateContentConfig}
        />

        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 pt-4 border-t border-gray-200">
          <Button variant="secondary" onClick={handleContactUs} className="w-full sm:w-auto">
            Contact Us
          </Button>
          <Button variant="danger" onClick={handleExportToPDF} className="w-full sm:w-auto">
            Export to PDF
          </Button>
        </div>
      </div>
    </aside>
  );
};

import React from 'react';
import { SectionCard } from '../common/SectionCard';
import { RadioButtonGroup } from '../common/RadioButtonGroup';
import { Button } from '../common/Button';
import type { DisplayConfig, Resolution } from '../types';
import {
  calculateResolution,
  calculateDisplayArea,
  formatResolution,
  formatDisplayArea,
} from '../../utils/calculations';

interface DisplayConfigurationSectionProps {
  displayConfig: DisplayConfig;
  onChange: (updates: Partial<DisplayConfig>) => void;
  onFitToWall: () => void;
}

export const DisplayConfigurationSection: React.FC<DisplayConfigurationSectionProps> = ({
  displayConfig,
  onChange,
  onFitToWall,
}) => {
  const handleResolutionChange = (resolution: string) => {
    onChange({ resolution: resolution as Resolution });
  };

  const resolutionOptions = [
    { value: 'FHD' as Resolution, label: 'FHD' },
    { value: 'UHD' as Resolution, label: 'UHD' },
  ];

  const resolution = calculateResolution(displayConfig);
  const displayArea = calculateDisplayArea(displayConfig.ledModule.displayArea, displayConfig.totalModules);

  return (
    <SectionCard title="Display Configuration">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Model Name
          </label>
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              value={displayConfig.modelName}
              onChange={(e) => onChange({ modelName: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button className="text-blue-600 hover:text-blue-800 text-xs font-medium text-left whitespace-nowrap">
              Select Model →
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            LED Module Dimensions
          </label>
          <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
            {displayConfig.ledModule.width}m × {displayConfig.ledModule.height}m
            <div className="text-xs text-gray-500 mt-1">
              Resolution: {displayConfig.ledModule.resolution.width} × {displayConfig.ledModule.resolution.height}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            LED Modules Required
          </label>
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center">
              <div className="text-lg font-semibold text-blue-600">
                {displayConfig.modulesHorizontal}
              </div>
              <div className="text-xs text-gray-500">Horizontal</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-blue-600">
                {displayConfig.modulesVertical}
              </div>
              <div className="text-xs text-gray-500">Vertical</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-green-600">
                {displayConfig.totalModules}
              </div>
              <div className="text-xs text-gray-500">Total</div>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Resolution
          </label>
          <RadioButtonGroup
            options={resolutionOptions}
            value={displayConfig.resolution}
            onChange={handleResolutionChange}
            name="resolution"
          />
          <div className="mt-2 text-sm text-gray-600">
            Total Resolution: {formatResolution(resolution)}
          </div>
        </div>

        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="text-sm">
            <div className="font-medium text-blue-900">Display Area: {formatDisplayArea(displayArea)}</div>
            <div className="text-blue-700 text-xs mt-1">
              Diagonal: {displayConfig.ledModule.diagonal}" per module
            </div>
          </div>
        </div>

        <Button onClick={onFitToWall} className="w-full">
          Fit to Wall
        </Button>
      </div>
    </SectionCard>
  );
};

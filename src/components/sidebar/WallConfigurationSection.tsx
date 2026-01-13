import React from 'react';
import { SectionCard } from '../common/SectionCard';
import { NumberInputWithStepper } from '../common/NumberInputWithStepper';
import { ToggleButtonGroup } from '../common/ToggleButtonGroup';
import type { WallConfig, WallSetup } from '../types';

interface WallConfigurationSectionProps {
  wallConfig: WallConfig;
  onChange: (updates: Partial<WallConfig>) => void;
}

export const WallConfigurationSection: React.FC<WallConfigurationSectionProps> = ({
  wallConfig,
  onChange,
}) => {
  const handleSetupChange = (setup: string) => {
    onChange({ setup: setup as WallSetup });
  };

  const setupOptions = [
    { value: 'indoor' as WallSetup, label: 'Indoor' },
    { value: 'outdoor' as WallSetup, label: 'Outdoor' },
  ];

  const getUnitLabel = () => {
    return wallConfig.unit === 'meter' ? 'm' : 'ft';
  };

  return (
    <SectionCard title="Wall Configuration">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Wall Setup
          </label>
          <ToggleButtonGroup
            options={setupOptions}
            value={wallConfig.setup}
            onChange={handleSetupChange}
          />
        </div>

        <NumberInputWithStepper
          label="Wall Width"
          value={wallConfig.width}
          onChange={(value) => onChange({ width: value })}
          min={1}
          max={50}
          unit={getUnitLabel()}
        />

        <NumberInputWithStepper
          label="Wall Height"
          value={wallConfig.height}
          onChange={(value) => onChange({ height: value })}
          min={1}
          max={20}
          unit={getUnitLabel()}
        />
      </div>
    </SectionCard>
  );
};

import React from 'react';
import { ToggleButtonGroup } from '../common/ToggleButtonGroup';
import type { Unit } from '../types';

interface UnitSwitcherProps {
  unit: Unit;
  onChange: (unit: Unit) => void;
}

export const UnitSwitcher: React.FC<UnitSwitcherProps> = ({ unit, onChange }) => {
  const options = [
    { value: 'meter' as Unit, label: 'Meter' },
    { value: 'feet' as Unit, label: 'Feet' },
  ];

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Unit
      </label>
      <ToggleButtonGroup
        options={options}
        value={unit}
        onChange={(value) => onChange(value as Unit)}
      />
    </div>
  );
};

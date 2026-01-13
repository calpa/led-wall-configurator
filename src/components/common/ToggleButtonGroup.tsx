import React from 'react';

interface ToggleButtonGroupProps {
  options: Array<{
    value: string;
    label: string;
  }>;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({
  options,
  value,
  onChange,
  className = '',
}) => {
  return (
    <div className={`inline-flex rounded-lg border border-gray-200 bg-gray-100 p-1 shadow-sm ${className}`}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ease-in-out transform ${
            value === option.value
              ? 'bg-white text-gray-900 shadow-sm scale-105'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:scale-105 active:scale-95'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

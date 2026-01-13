import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-gray-900">LED Wall Configurator</h1>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span>Configuration Tool</span>
        </div>
      </div>
    </header>
  );
};

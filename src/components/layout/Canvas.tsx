import React from 'react';
import { LedWallPreview } from '../canvas/LedWallPreview';
import type { ConfiguratorState } from '../types';

interface CanvasProps {
  state: ConfiguratorState;
}

export const Canvas: React.FC<CanvasProps> = ({
  state,
}) => {
  return (
    <main className="flex-1 bg-gray-100 relative overflow-hidden">
      <div className="flex items-center justify-center h-full p-8">
        <LedWallPreview
          state={state}
        />
      </div>
    </main>
  );
};

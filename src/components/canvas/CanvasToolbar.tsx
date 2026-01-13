import React from 'react';
import { Button } from '../common/Button';

interface CanvasToolbarProps {
  isBlueprintMode: boolean;
  onToggleBlueprint: () => void;
  onReset: () => void;
}

export const CanvasToolbar: React.FC<CanvasToolbarProps> = ({
  isBlueprintMode,
  onToggleBlueprint,
  onReset,
}) => {
  return (
    <div className="absolute top-4 right-4 flex items-center space-x-2 z-10">
      <Button
        variant={isBlueprintMode ? 'primary' : 'secondary'}
        onClick={onToggleBlueprint}
        size="sm"
      >
        Blueprint
      </Button>
      <Button variant="secondary" onClick={onReset} size="sm">
        Reset
      </Button>
    </div>
  );
};

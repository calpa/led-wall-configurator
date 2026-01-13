import React, { useState } from 'react';
import { Button } from './Button';
import { lgModels, type LEDModel } from '../../data/lg-models';

interface ModelSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectModel: (model: LEDModel) => void;
  currentModelId?: string;
}

export const ModelSelectionModal: React.FC<ModelSelectionModalProps> = ({
  isOpen,
  onClose,
  onSelectModel,
  currentModelId,
}) => {
  const [selectedModel, setSelectedModel] = useState<LEDModel | null>(null);

  // Load models from data
  const allModels: LEDModel[] = lgModels;

  // Set initial selected model when modal opens
  React.useEffect(() => {
    if (isOpen && currentModelId) {
      const currentModel = allModels.find(model => model.id === currentModelId);
      setSelectedModel(currentModel || null);
    }
  }, [isOpen, currentModelId]);

  // Show all models (no filtering by wall setup)
  const filteredModels = allModels;

  const handleSelectModel = () => {
    if (selectedModel) {
      onSelectModel(selectedModel);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Select LED Model</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Model List */}
        <div className="px-6 py-4 overflow-y-auto max-h-96">
          <div className="grid gap-4">
            {filteredModels.map((model) => (
              <div
                key={model.id}
                onClick={() => setSelectedModel(model)}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  selectedModel?.id === model.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-lg font-semibold text-gray-900">{model.name}</h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        model.type === 'Indoor'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {model.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{model.description}</p>
                    
                    <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                      <div>
                        <span className="text-gray-500">Pixel Pitch:</span>
                        <span className="ml-2 font-medium">{model.pixelPitch}mm</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Module Size:</span>
                        <span className="ml-2 font-medium">{model.moduleWidth}m × {model.moduleHeight}m</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Resolution:</span>
                        <span className="ml-2 font-medium">{model.moduleResolution.width} × {model.moduleResolution.height}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Brightness:</span>
                        <span className="ml-2 font-medium">{model.brightness} nits</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Diagonal:</span>
                        <span className="ml-2 font-medium">{model.moduleDiagonal}"</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Maintenance:</span>
                        <span className="ml-2 font-medium">{model.maintenance}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="ml-4">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedModel?.id === model.id
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedModel?.id === model.id && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
          <Button onClick={onClose} variant="secondary">
            Cancel
          </Button>
          <Button onClick={handleSelectModel} disabled={!selectedModel}>
            Select Model
          </Button>
        </div>
      </div>
    </div>
  );
};

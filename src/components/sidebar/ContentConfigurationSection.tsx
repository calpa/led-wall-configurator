import React, { useRef } from 'react';
import { SectionCard } from '../common/SectionCard';
import { RadioButtonGroup } from '../common/RadioButtonGroup';
import type { ContentConfig, ContentType } from '../types';

interface ContentConfigurationSectionProps {
  contentConfig: ContentConfig;
  onChange: (updates: Partial<ContentConfig>) => void;
}

export const ContentConfigurationSection: React.FC<ContentConfigurationSectionProps> = ({
  contentConfig,
  onChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleContentTypeChange = (type: string) => {
    if (type === 'noImage') {
      onChange({ type: type as ContentType, imageUrl: undefined, imageFile: undefined });
    } else {
      onChange({ type: type as ContentType });
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onChange({
          type: 'image' as ContentType,
          imageUrl: e.target?.result as string,
          imageFile: file,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const contentOptions = [
    { value: 'image' as ContentType, label: 'Default Image' },
    { value: 'noImage' as ContentType, label: 'No Image' },
  ];

  return (
    <SectionCard title="Content Configuration">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content Type
          </label>
          <RadioButtonGroup
            options={contentOptions}
            value={contentConfig.type}
            onChange={handleContentTypeChange}
            name="contentType"
          />
        </div>

        {contentConfig.type === 'image' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image Options
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors mb-2"
            >
              Upload Custom Image
            </button>
            
            {contentConfig.imageFile && (
              <div className="mb-2 text-sm text-gray-600">
                Selected: {contentConfig.imageFile.name}
              </div>
            )}
            
            {contentConfig.imageUrl && (
              <div className="mt-2">
                <div className="text-xs text-gray-500 mb-1">Current Image:</div>
                <img
                  src={contentConfig.imageUrl}
                  alt="Preview"
                  className="w-full h-32 object-cover rounded-md border border-gray-200"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </SectionCard>
  );
};

import React from 'react';
import { SectionCard } from '../common/SectionCard';
import { RadioButtonGroup } from '../common/RadioButtonGroup';
import { Button } from '../common/Button';
import type { ContentConfig, ContentType } from '../types';

interface ContentConfigurationSectionProps {
  contentConfig: ContentConfig;
  onChange: (updates: Partial<ContentConfig>) => void;
}

export const ContentConfigurationSection: React.FC<ContentConfigurationSectionProps> = ({
  contentConfig,
  onChange,
}) => {
  const handleContentTypeChange = (type: string) => {
    onChange({ type: type as ContentType });
  };

  const contentTypeOptions = [
    { value: 'image' as ContentType, label: 'Image' },
    { value: 'video' as ContentType, label: 'Video' },
    { value: 'noImage' as ContentType, label: 'No Image' },
    { value: 'custom' as ContentType, label: 'Custom' },
  ];

  const renderContentSettings = () => {
    switch (contentConfig.type) {
      case 'image':
        return (
          <div className="space-y-3">
            <Button variant="secondary" className="w-full">
              Upload Image
            </Button>
            <p className="text-sm text-gray-600">
              Supported formats: JPG, PNG, GIF
            </p>
          </div>
        );
      case 'video':
        return (
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Video URL
            </label>
            <input
              type="text"
              value={contentConfig.videoUrl || ''}
              onChange={(e) => onChange({ videoUrl: e.target.value })}
              placeholder="Enter video URL"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        );
      case 'noImage':
        return (
          <div className="space-y-3">
            <p className="text-sm text-gray-600">
              Plain color / black output
            </p>
          </div>
        );
      case 'custom':
        return (
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Custom Note
            </label>
            <textarea
              value={contentConfig.customNote || ''}
              onChange={(e) => onChange({ customNote: e.target.value })}
              placeholder="Enter custom configuration notes..."
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <SectionCard title="Content Configuration">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content Type
          </label>
          <RadioButtonGroup
            options={contentTypeOptions}
            value={contentConfig.type}
            onChange={handleContentTypeChange}
            name="contentType"
          />
        </div>

        <div className="pt-4 border-t border-gray-200">
          {renderContentSettings()}
        </div>
      </div>
    </SectionCard>
  );
};

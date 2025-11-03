
import React, { useState } from 'react';
import { AspectRatio } from '../types';
import { ASPECT_RATIOS } from '../constants';

interface AdGeneratorFormProps {
  onGenerate: (description: string, url: string, aspectRatio: AspectRatio) => void;
  isLoading: boolean;
}

const LoadingSpinner: React.FC = () => (
  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

export const AdGeneratorForm: React.FC<AdGeneratorFormProps> = ({ onGenerate, isLoading }) => {
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('1:1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(description, url, aspectRatio);
  };

  return (
    <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl border border-gray-700 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
            Product Description
          </label>
          <textarea
            id="description"
            rows={4}
            className="w-full bg-gray-900 border border-gray-600 rounded-md shadow-sm px-3 py-2 text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
            placeholder="e.g., A stylish, eco-friendly water bottle made from recycled materials, available in 5 colors."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={isLoading}
          />
        </div>

        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-300 mb-2">
            Product URL (Optional)
          </label>
          <input
            type="url"
            id="url"
            className="w-full bg-gray-900 border border-gray-600 rounded-md shadow-sm px-3 py-2 text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
            placeholder="https://your-product-store.com/item"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={isLoading}
          />
        </div>
        
        <div>
            <label htmlFor="aspectRatio" className="block text-sm font-medium text-gray-300 mb-2">
                Image Aspect Ratio
            </label>
            <select
                id="aspectRatio"
                value={aspectRatio}
                onChange={(e) => setAspectRatio(e.target.value as AspectRatio)}
                disabled={isLoading}
                className="w-full bg-gray-900 border border-gray-600 rounded-md shadow-sm px-3 py-2 text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
            >
                {ASPECT_RATIOS.map((ratio) => (
                    <option key={ratio.value} value={ratio.value}>{ratio.label}</option>
                ))}
            </select>
        </div>


        <button
          type="submit"
          disabled={isLoading || !description}
          className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all duration-200"
        >
          {isLoading && <LoadingSpinner />}
          {isLoading ? 'Generating Image...' : 'Generate Ads'}
        </button>
      </form>
    </div>
  );
};

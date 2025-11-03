
import React from 'react';
import { AdBanner } from '../types';
import { BANNER_SIZES } from '../constants';

interface AdDisplayGridProps {
    imageUrl: string | null;
    isLoading: boolean;
    prompt: string;
}

const AdCard: React.FC<{ banner: AdBanner; imageUrl: string }> = ({ banner, imageUrl }) => {
    const aspectRatio = `${banner.width} / ${banner.height}`;
    return (
        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 flex flex-col space-y-3 transition-transform hover:scale-105 hover:border-indigo-500/50">
            <div className="flex justify-between items-center text-sm text-gray-400">
                <span className="font-semibold text-gray-200">{banner.name}</span>
                <span>{banner.width} x {banner.height}</span>
            </div>
            <div 
                className="w-full bg-gray-900/50 rounded-md overflow-hidden flex items-center justify-center"
                style={{ aspectRatio }}
            >
                <img 
                    src={imageUrl} 
                    alt={`${banner.name} ad creative`} 
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

const LoadingSkeleton: React.FC<{ banner: AdBanner }> = ({ banner }) => {
    const aspectRatio = `${banner.width} / ${banner.height}`;
    return (
         <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 flex flex-col space-y-3">
            <div className="flex justify-between items-center text-sm text-gray-400">
                <span className="font-semibold text-gray-200">{banner.name}</span>
                <span>{banner.width} x {banner.height}</span>
            </div>
            <div 
                className="w-full bg-gray-700/50 rounded-md animate-pulse"
                style={{ aspectRatio }}
            />
        </div>
    );
}

export const AdDisplayGrid: React.FC<AdDisplayGridProps> = ({ imageUrl, isLoading, prompt }) => {
    if (isLoading) {
        return (
            <div className="mt-12">
                <h2 className="text-xl font-bold text-center mb-6">Generating your ad creative...</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {BANNER_SIZES.map((banner) => (
                        <LoadingSkeleton key={banner.name} banner={banner} />
                    ))}
                </div>
            </div>
        );
    }

    if (!imageUrl) {
        return (
            <div className="mt-12 text-center py-16 px-6 bg-gray-800/30 border border-dashed border-gray-700 rounded-xl">
                <svg className="mx-auto h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-200">No ads generated yet</h3>
                <p className="mt-1 text-sm text-gray-400">Your generated ad previews will appear here.</p>
            </div>
        );
    }

    return (
        <div className="mt-12">
             <div className="mb-8 p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
                <h3 className="font-semibold text-indigo-400 mb-2">Generated Image Prompt:</h3>
                <p className="text-sm text-gray-300 font-mono bg-gray-900/50 p-3 rounded-md">{prompt}</p>
             </div>
            <h2 className="text-2xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400">Generated Ad Previews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {BANNER_SIZES.map((banner) => (
                    <AdCard key={banner.name} banner={banner} imageUrl={imageUrl} />
                ))}
            </div>
        </div>
    );
};


import React from 'react';

const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M11.48 3.492a.563.563 0 011.04 0l1.93 3.914a.563.563 0 00.423.423l3.914 1.93a.563.563 0 010 1.04l-3.914 1.93a.563.563 0 00-.423.423l-1.93 3.914a.563.563 0 01-1.04 0l-1.93-3.914a.563.563 0 00-.423-.423L3.576 12.5a.563.563 0 010-1.04l3.914-1.93a.563.563 0 00.423-.423l1.93-3.914zM20 9a1 1 0 00-1-1h-1a1 1 0 100 2h1a1 1 0 001-1zM6 18a1 1 0 100-2 1 1 0 000 2zM19 18a1 1 0 100-2 1 1 0 000 2z" />
  </svg>
);


export const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center space-x-3">
            <SparklesIcon className="w-8 h-8 text-indigo-400" />
            <h1 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                AI Banner Ad Generator
            </h1>
        </div>
      </div>
    </header>
  );
};

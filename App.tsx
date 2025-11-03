
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { AdGeneratorForm } from './components/AdGeneratorForm';
import { AdDisplayGrid } from './components/AdDisplayGrid';
import { generateAdImage } from './services/geminiService';
import { AspectRatio } from './types';

const App: React.FC = () => {
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>('');

  const handleGenerateAds = useCallback(async (description: string, url: string, aspectRatio: AspectRatio) => {
    if (!description.trim()) {
      setError('Product description cannot be empty.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedImageUrl(null);

    const fullPrompt = `Generate a high-quality, visually stunning, and photorealistic product image for a banner ad. The product is: '${description}'. 
    For context, the product page is ${url}. 
    The image must be clean, modern, and eye-catching with a professional, studio-quality background that complements the product. 
    The main subject must be perfectly centered to allow for flexible cropping into various aspect ratios (landscape, portrait, and square). 
    IMPORTANT: Do NOT include any text, logos, or buttons in the image itself. The image should be purely visual.`;
    
    setPrompt(fullPrompt);

    try {
      const imageUrl = await generateAdImage(fullPrompt, aspectRatio);
      setGeneratedImageUrl(imageUrl);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-gray-400 mb-8 text-lg">
            Enter your product details to generate a versatile, high-quality ad creative. The image will be displayed across all standard banner sizes.
          </p>
          <AdGeneratorForm onGenerate={handleGenerateAds} isLoading={isLoading} />
        </div>

        {error && (
          <div className="max-w-3xl mx-auto mt-6 bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <AdDisplayGrid 
          imageUrl={generatedImageUrl} 
          isLoading={isLoading} 
          prompt={prompt}
        />
      </main>
    </div>
  );
};

export default App;

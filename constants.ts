
import { AdBanner, AspectRatio } from './types';

export const BANNER_SIZES: AdBanner[] = [
  { name: 'Leaderboard', width: 728, height: 90 },
  { name: 'Large Leaderboard', width: 970, height: 90 },
  { name: 'Full Banner', width: 468, height: 60 },
  { name: 'Medium Rectangle', width: 300, height: 250 },
  { name: 'Large Rectangle', width: 336, height: 280 },
  { name: 'Square', width: 250, height: 250 },
  { name: 'Skyscraper', width: 120, height: 600 },
  { name: 'Wide Skyscraper', width: 160, height: 600 },
  { name: 'Half-Page Ad', width: 300, height: 600 },
  { name: 'Mobile Leaderboard', width: 320, height: 50 },
  { name: 'Small Square', width: 200, height: 200 },
  { name: 'Portrait', width: 300, height: 1050 },
];

export const ASPECT_RATIOS: { value: AspectRatio; label: string }[] = [
  { value: '1:1', label: 'Square (1:1)' },
  { value: '16:9', label: 'Landscape (16:9)' },
  { value: '9:16', label: 'Portrait (9:16)' },
  { value: '4:3', label: 'Standard (4:3)' },
  { value: '3:4', label: 'Tall (3:4)' },
];

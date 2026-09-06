import React from 'react';

export type BackgroundTone = 'navy' | 'charcoal' | 'ivory';

interface FishConfig {
  id: number;
  top: string; // e.g. '18%'
  size: number; // width in px
  duration: number; // in seconds
  delay: number; // in seconds
  direction: 'ltr' | 'rtl';
  opacity: number;
  verticalBobAmplitude: number; // in px
}

interface FloatingFishBackgroundProps {
  tone?: BackgroundTone;
  fishCount?: number;
  className?: string;
}

// Minimalist Scandinavian Baltic Fish Silhouette SVG
const BalticFishSvg: React.FC<{
  className?: string;
  fill?: string;
  flip?: boolean;
}> = ({ className = '', fill = 'currentColor', flip = false }) => (
  <svg
    viewBox="0 0 100 36"
    fill={fill}
    className={`w-full h-auto ${className} ${flip ? 'scale-x-[-1]' : ''}`}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Elegant, hydrodynamic Baltic herring silhouette */}
    <path
      d="M 98 18 C 93 14, 82 10, 68 8 C 50 6, 32 9, 20 13 C 14 15, 8 16, 2 12 C 4 15, 5 17, 5 18 C 5 19, 4 21, 2 24 C 8 20, 14 21, 20 23 C 32 27, 50 30, 68 28 C 82 26, 93 22, 98 18 Z"
    />
    {/* Subtle dorsal fin hint */}
    <path
      d="M 52 7 C 56 4, 62 4, 66 7 C 62 6.5, 56 6.5, 52 7 Z"
      opacity="0.75"
    />
    {/* Subtle caudal fin accent */}
    <path
      d="M 2 12 C 0 8, -2 4, -4 2 C -3 8, -1 14, 4 18 C -1 22, -3 28, -4 34 C -2 32, 0 28, 2 24 Z"
      opacity="0.8"
    />
    {/* Eye dot highlight */}
    <circle cx="86" cy="17" r="1.2" fill="#0A1118" opacity="0.35" />
  </svg>
);

const DEFAULT_FISH_PRESETS: FishConfig[] = [
  {
    id: 1,
    top: '18%',
    size: 58,
    duration: 32,
    delay: 0,
    direction: 'ltr',
    opacity: 0.08,
    verticalBobAmplitude: 10,
  },
  {
    id: 2,
    top: '38%',
    size: 42,
    duration: 44,
    delay: 8,
    direction: 'rtl',
    opacity: 0.06,
    verticalBobAmplitude: 14,
  },
  {
    id: 3,
    top: '62%',
    size: 64,
    duration: 38,
    delay: 16,
    direction: 'ltr',
    opacity: 0.09,
    verticalBobAmplitude: 12,
  },
  {
    id: 4,
    top: '78%',
    size: 48,
    duration: 50,
    delay: 4,
    direction: 'rtl',
    opacity: 0.07,
    verticalBobAmplitude: 8,
  },
  {
    id: 5,
    top: '28%',
    size: 36,
    duration: 40,
    delay: 22,
    direction: 'ltr',
    opacity: 0.05,
    verticalBobAmplitude: 10,
  },
];

export const FloatingFishBackground: React.FC<FloatingFishBackgroundProps> = ({
  tone = 'navy',
  fishCount = 4,
  className = '',
}) => {
  // Determine color and opacity based on background tone
  let fishColor = '#F7F5F0'; // Soft muted ivory for Deep Navy
  let baseOpacity = 0.08;

  if (tone === 'charcoal') {
    fishColor = '#C8A97E'; // Muted Gold / warm ivory for Charcoal
    baseOpacity = 0.065;
  } else if (tone === 'ivory') {
    fishColor = '#0A1118'; // Deep Navy for Warm Ivory
    baseOpacity = 0.035;
  }

  const activeFish = DEFAULT_FISH_PRESETS.slice(0, Math.min(fishCount, DEFAULT_FISH_PRESETS.length));

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {activeFish.map((fish) => {
        const isLtr = fish.direction === 'ltr';
        const animationName = isLtr ? 'swim-ltr' : 'swim-rtl';
        const animDuration = `${fish.duration}s`;
        const animDelay = `-${fish.delay}s`; // Negative delay so fish are already mid-flight on render

        return (
          <div
            key={fish.id}
            className="absolute will-change-transform"
            style={{
              top: fish.top,
              width: `${fish.size}px`,
              opacity: fish.opacity * (baseOpacity / 0.08),
              animationName: animationName,
              animationDuration: animDuration,
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
              animationDelay: animDelay,
            }}
          >
            <div
              className="w-full h-auto"
              style={{
                animation: `undulate-bob ${6 + (fish.id % 3) * 2}s ease-in-out infinite alternate`,
              }}
            >
              <BalticFishSvg fill={fishColor} flip={!isLtr} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

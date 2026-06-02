import React from 'react';

interface WaveDividerProps {
  fill?: string;
}

export const WaveDivider = ({ fill = "#F8F9FB" }: WaveDividerProps) => (
  <svg 
    viewBox="0 0 1440 60" 
    preserveAspectRatio="none"
    className="w-full h-[60px] block relative z-10"
    aria-hidden="true"
  >
    <path
      d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
      fill={fill}
    />
  </svg>
);

interface DiagonalDividerProps {
  from: string;
  to: string;
}

export const DiagonalDivider = ({ from, to }: DiagonalDividerProps) => (
  <div 
    className="diagonal-divider relative z-10" 
    style={{
      '--divider-from': from,
      '--divider-to': to,
    } as React.CSSProperties}
  />
);

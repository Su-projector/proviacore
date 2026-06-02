'use client';

import React, { useRef, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

export const MagneticButton = React.forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ children, className, variant = 'primary', ...props }, ref) => {
    const internalRef = useRef<HTMLButtonElement>(null);
    const resolvedRef = (ref as any) || internalRef;
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
      if (!resolvedRef.current) return;
      const rect = resolvedRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
      
      requestAnimationFrame(() => {
        setPosition({ x: Math.max(-2, Math.min(2, x)), y: Math.max(-2, Math.min(2, y)) });
      });
    }, [resolvedRef]);

    const handleMouseLeave = useCallback(() => {
      requestAnimationFrame(() => {
        setPosition({ x: 0, y: 0 });
      });
    }, []);

    const variants = {
      primary: "bg-[var(--brand-blue)] text-[var(--brand-white)] border-transparent hover:bg-[#004bb8] hover:-translate-y-[2px] hover:shadow-[var(--shadow-glow-blue)] active:translate-y-0 active:shadow-[var(--shadow-md)]",
      secondary: "bg-transparent text-[var(--brand-blue)] border-[1.5px] border-[var(--brand-blue)] hover:bg-[rgba(0,86,210,0.05)] hover:border-[#004bb8]",
      ghost: "bg-transparent text-[var(--brand-white)] border-[1.5px] border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.5)]",
    };

    return (
      <button
        ref={resolvedRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "rounded-[var(--radius-sm)] px-[32px] py-[14px]",
          "font-body font-semibold text-[0.875rem] tracking-[0.02em]",
          "transition-all duration-300 ease-[var(--ease-default)]",
          "flex items-center justify-center",
          variants[variant],
          className
        )}
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)` 
        }}
        {...props}
      >
        <span 
          className="inline-block transition-transform duration-300 ease-[var(--ease-default)]"
          style={{ transform: `translate(${position.x * 0.5}px, ${position.y * 0.5}px)` }}
        >
          {children}
        </span>
      </button>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

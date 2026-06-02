'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  suffix?: string;
  duration?: number;
}

export const AnimatedCounter = React.forwardRef<HTMLDivElement, AnimatedCounterProps>(
  ({ className, value, suffix = '', duration = 2000, ...props }, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const resolvedRef = (ref as any) || internalRef;
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    
    useEffect(() => {
      // Respect prefers-reduced-motion
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (mediaQuery.matches) {
        setCount(value);
        setHasAnimated(true);
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let startTime: number | null = null;
            
            const animate = (currentTime: number) => {
              if (!startTime) startTime = currentTime;
              const progress = Math.min((currentTime - startTime) / duration, 1);
              
              // easeOutQuart
              const easeOut = 1 - Math.pow(1 - progress, 4);
              const currentCount = Math.floor(easeOut * value);
              
              setCount(currentCount);
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(value);
              }
            };
            
            requestAnimationFrame(animate);
          }
        },
        { threshold: 0.15 }
      );
      
      if (resolvedRef.current) {
        observer.observe(resolvedRef.current);
      }
      
      return () => observer.disconnect();
    }, [value, duration, hasAnimated, resolvedRef]);

    return (
      <div 
        ref={resolvedRef} 
        className={cn("flex items-baseline", className)} 
        {...props}
      >
        <span>{count}</span>
        {suffix && (
          <span 
            className={cn(
              "transition-opacity duration-500 ease-in",
              count === value ? "opacity-100" : "opacity-0"
            )}
          >
            {suffix}
          </span>
        )}
      </div>
    );
  }
);
AnimatedCounter.displayName = "AnimatedCounter";

'use client';

import { useState, useEffect, useRef } from 'react';

export interface UseAnimatedCounterOptions {
  target: number;
  duration?: number;      // default: 2000 (ms)
  startOnView?: boolean;  // default: true
  suffix?: string;        // default: ""
  prefix?: string;        // default: ""
  decimals?: number;      // default: 0
}

export function useAnimatedCounter(options: UseAnimatedCounterOptions) {
  const {
    target,
    duration = 2000,
    startOnView = true,
    suffix = "",
    prefix = "",
    decimals = 0,
  } = options;

  const [value, setValue] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (mediaQuery.matches) {
        setValue(target);
        setIsComplete(true);
        return;
      }
    }

    let animationFrameId: number;

    const startAnimation = () => {
      let startTime: number | null = null;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // easeOutExpo: t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        const currentValue = easeOut * target;
        setValue(currentValue);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setValue(target);
          setIsComplete(true);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    };

    if (!startOnView || !ref.current) {
      startAnimation();
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        startAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [target, duration, startOnView]);

  return { value, isComplete, ref };
}

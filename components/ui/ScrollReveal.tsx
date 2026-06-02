'use client';

import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
}

export const ScrollReveal = React.forwardRef<HTMLDivElement, ScrollRevealProps>(
  ({ children, className, delay = 0, ...props }, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const resolvedRef = (ref as any) || internalRef;
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      // Respect prefers-reduced-motion
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (mediaQuery.matches) {
        setIsVisible(true);
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      
      if (resolvedRef.current) {
        observer.observe(resolvedRef.current);
      }
      
      return () => observer.disconnect();
    }, [resolvedRef]);

    return (
      <div
        ref={resolvedRef}
        className={cn(
          "transition-all duration-[800ms] ease-[var(--ease-default)]",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          className
        )}
        style={{ 
          transitionDelay: `${delay}ms`,
          willChange: isVisible ? 'auto' : 'transform, opacity'
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
ScrollReveal.displayName = "ScrollReveal";

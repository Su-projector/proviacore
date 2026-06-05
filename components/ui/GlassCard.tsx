import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
  overflowHidden?: boolean;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className, elevated = false, overflowHidden = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative",
          overflowHidden ? "overflow-hidden" : "",
          "bg-[rgba(255,255,255,0.7)] backdrop-blur-xl",
          "border border-[rgba(0,86,210,0.1)]",
          "rounded-[var(--radius-lg)]",
          elevated ? "shadow-[var(--shadow-xl)]" : "shadow-[var(--shadow-md)]",
          "transition-all duration-[var(--duration-slow)] ease-[var(--ease-default)]",
          className
        )}
        style={{
          boxShadow: elevated 
            ? "inset 0 1px 0 rgba(255,255,255,0.2), var(--shadow-xl)" 
            : "inset 0 1px 0 rgba(255,255,255,0.2), var(--shadow-md)"
        }}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);
GlassCard.displayName = "GlassCard";

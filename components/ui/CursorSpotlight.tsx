'use client';

import React, { useEffect, useRef, useState } from 'react';

interface CursorSpotlightProps {
    className?: string;
    children?: React.ReactNode;
}

export const CursorSpotlight: React.FC<CursorSpotlightProps> = ({ className = '', children }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Check if device is touch or prefers reduced motion
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (isTouchDevice || prefersReducedMotion) return;

        let animationFrameId: number;

        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            
            const rect = containerRef.current.getBoundingClientRect();
            // Calculate position relative to the container
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Only request animation frame if we don't have one pending
            animationFrameId = requestAnimationFrame(() => {
                setPosition({ x, y });
            });
        };

        const handleMouseEnter = () => setOpacity(1);
        const handleMouseLeave = () => setOpacity(0);

        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
            <div
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(0,86,210,0.08) 0%, transparent 70%)`,
                }}
            />
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
};

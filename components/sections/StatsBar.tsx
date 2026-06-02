import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

const StatsBar = () => {
  const stats = [
    { value: 5, suffix: '+', label: 'DEPLOYED ARCHITECTURES' },
    { value: 5, suffix: ' Yrs', label: 'TECHNICAL TENURE' },
    { value: 100, suffix: '%', label: 'STRATEGIC ALIGNMENT' },
  ];

  return (
    <section className="relative w-full bg-[var(--brand-light)] py-[48px] md:py-[80px] lg:py-[96px] overflow-hidden">
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />
      
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row w-full divide-y md:divide-y-0 md:divide-x divide-[rgba(0,86,210,0.1)]">
          {stats.map((stat, index) => (
            <ScrollReveal 
              key={index} 
              delay={index * 100}
              className="flex-1 flex flex-col items-center justify-center py-8 md:py-0 text-center"
            >
              <AnimatedCounter 
                value={stat.value} 
                suffix={stat.suffix} 
                className="font-mono text-[var(--brand-dark-text)] text-[clamp(2.5rem,7vw,7rem)] leading-none font-bold"
              />
              <span className="font-mono text-[var(--brand-gray)] text-[0.75rem] uppercase tracking-[0.12em] font-medium mt-2">
                {stat.label}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;

'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CursorSpotlight } from "@/components/ui/CursorSpotlight";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

interface MobileStatItemProps {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

const MobileStatItem = ({ value, suffix, label, icon }: MobileStatItemProps) => {
  const { value: count, ref } = useAnimatedCounter({
    target: value,
    duration: 2000,
  });

  return (
    <div ref={ref} className="flex-1 flex flex-col items-center justify-center text-center">
      <div className="text-[var(--brand-coral)] mb-1">
        {icon}
      </div>
      <div className="font-mono text-white text-[clamp(1.1rem,4.5vw,1.5rem)] leading-none font-bold flex items-baseline justify-center">
        <span>{Math.round(count)}</span>
        {suffix && (
          <span className="text-[var(--brand-coral)] font-sans font-medium text-[0.875rem] ml-0.5">{suffix}</span>
        )}
      </div>
      <span className="font-mono text-[rgba(255,255,255,0.6)] text-[0.55rem] tracking-[0.05em] font-medium mt-1 leading-tight uppercase max-w-[90px] block">
        {label}
      </span>
    </div>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const lineVariants: any = {
    hidden: { y: "100%" },
    visible: { 
      y: "0%", 
      transition: { duration: 0.8, ease: "easeInOut" }
    },
  };

  const mobileStats = [
    {
      value: 5,
      suffix: "+",
      label: "DEPLOYED ARCHITECTURES",
      icon: (
        <svg className="w-5 h-5 stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      )
    },
    {
      value: 5,
      suffix: " Yrs",
      label: "TECHNICAL TENURE",
      icon: (
        <svg className="w-5 h-5 stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    },
    {
      value: 100,
      suffix: "%",
      label: "STRATEGIC ALIGNMENT",
      icon: (
        <svg className="w-5 h-5 stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    }
  ];

  return (
    <CursorSpotlight className="relative w-[100vw] left-[50%] -translate-x-[50%] bg-[image:var(--gradient-hero)] h-[100dvh] max-h-[100dvh] md:h-auto md:max-h-none md:min-h-[100vh] flex flex-col items-center justify-between overflow-hidden py-6 md:py-[96px] lg:py-[128px]">
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 h-full">
        
        {/* Left Column: 55% */}
        <div className="w-full lg:w-[55%] flex flex-col justify-between md:justify-center pt-14 md:pt-20 lg:pt-0 h-full">
          <div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-1 mb-4"
            >
              <div className="overflow-hidden">
                <motion.h1 
                  variants={lineVariants}
                  className="font-display font-bold text-[clamp(2.1rem,5vw,7rem)] leading-[0.95] tracking-[-0.03em] text-[var(--brand-white)]"
                >
                  Engineered for&nbsp;<span className="text-[var(--brand-coral)]">Scale.</span>
                  <br className="hidden md:inline" />
                  Built for&nbsp;<span className="text-[var(--brand-coral)]">Delivery.</span>
                </motion.h1>
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-body text-[clamp(0.9rem,1.3vw,1.25rem)] text-[rgba(255,255,255,0.85)] leading-[1.6] max-w-[560px] mb-6 md:mb-10"
            >
              ProviaCore is a systems-driven digital development platform. We bridge the gap between architectural vision and production-ready execution, delivering resilient products that drive measurable business outcomes through high-performance engineering.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-[16px] mb-6 md:mb-0"
            >
              <MagneticButton variant="primary" href="/get-started" className="w-full sm:w-auto">
                Start a Project
              </MagneticButton>
              <MagneticButton variant="ghost" href="/contact" className="w-full sm:w-auto">
                Contact Advisory
              </MagneticButton>
            </motion.div>
          </div>

          {/* Mobile Stats band - rendered only on mobile (<md) */}
          <div className="flex md:hidden w-full items-center justify-between gap-1 border-t border-[rgba(255,255,255,0.15)] pt-4 mt-auto h-[18vh] max-h-[120px]">
            {mobileStats.map((stat, idx) => (
              <MobileStatItem 
                key={idx}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>

        {/* Right Column: 45% - Animated Mesh Gradient (desktop only) */}
        <div className="hidden lg:flex w-[45%] h-[600px] relative items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-full h-full max-w-[500px] max-h-[500px]"
          >
            <div 
              className="absolute inset-0 rounded-full blur-[60px] opacity-70 animate-mesh-1"
              style={{ background: 'radial-gradient(circle at 50% 50%, var(--brand-blue) 0%, transparent 60%)', willChange: 'transform' }}
            />
            <div 
              className="absolute inset-0 rounded-full blur-[60px] opacity-50 animate-mesh-2"
              style={{ background: 'radial-gradient(circle at 80% 20%, var(--brand-coral) 0%, transparent 50%)', willChange: 'transform' }}
            />
            <div 
              className="absolute inset-0 rounded-full blur-[60px] opacity-60 animate-mesh-3"
              style={{ background: 'radial-gradient(circle at 20% 80%, var(--brand-navy) 0%, transparent 60%)', willChange: 'transform' }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-[50%] -translate-x-[50%] opacity-50 animate-bounce text-white">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </CursorSpotlight>
  );
};

export default Hero;

'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CursorSpotlight } from "@/components/ui/CursorSpotlight";

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

  return (
    <CursorSpotlight className="relative w-[100vw] left-[50%] -translate-x-[50%] bg-[var(--gradient-hero)] min-h-[100vh] flex flex-col md:flex-row items-center justify-center overflow-hidden py-[64px] md:py-[96px] lg:py-[128px]">
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Left Column: 55% */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center pt-20 lg:pt-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-2 mb-6"
          >
            <div className="overflow-hidden">
              <motion.h1 
                variants={lineVariants}
                className="font-display font-bold text-[clamp(2.5rem,6vw,7rem)] leading-[0.95] tracking-[-0.03em] text-[var(--brand-white)]"
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
            className="font-body text-[clamp(1rem,1.5vw,1.25rem)] text-[rgba(255,255,255,0.85)] leading-[1.7] max-w-[560px] mb-10"
          >
            ProviaCore is a systems-driven digital development platform. We bridge the gap between architectural vision and production-ready execution, delivering resilient products that drive measurable business outcomes through high-performance engineering.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-[16px]"
          >
            <Link href="/get-started">
              <MagneticButton variant="primary" className="w-full sm:w-auto">
                Start a Project
              </MagneticButton>
            </Link>
            <Link href="/contact">
              <MagneticButton variant="ghost" className="w-full sm:w-auto">
                Contact Advisory
              </MagneticButton>
            </Link>
          </motion.div>
        </div>

        {/* Right Column: 45% - Animated Mesh Gradient */}
        <div className="w-full lg:w-[45%] h-[400px] lg:h-[600px] relative flex items-center justify-center">
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

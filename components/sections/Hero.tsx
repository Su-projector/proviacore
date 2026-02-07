"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-20 px-4">
      {/* Background with abstract imagery/overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/5 to-white z-10" />
        {/* Placeholder for abstract background image - following "Images must remain images" rule */}
        <div
          className="w-full h-full bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl w-full text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
          We build solutions that drive <br />
          <span className="gradient-text">lasting productivity.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          From high-performance web development to strategic brand advisory, we help teams move faster and scale smarter.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/get-started" className="btn-gradient w-full sm:w-auto min-w-[200px]">
            Start a Project
          </Link>
          <Link href="/#services" className="btn-primary bg-white text-brand-blue border border-gray-200 w-full sm:w-auto min-w-[200px]">
            View Services
          </Link>
        </div>
      </div>

      {/* Stacked Metrics Cards - From Screenshot */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
        <div className="card-base p-8 text-center flex flex-col items-center justify-center">
          <div className="w-10 h-10 rounded-lg bg-brand-blue/5 flex items-center justify-center mb-4">
            {/* Structural Node representing delivery/throughput */}
            <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <span className="text-4xl font-bold text-brand-blue mb-2">5+</span>
          <span className="text-gray-500 font-medium">Projects Delivered</span>
        </div>

        <div className="card-base p-8 text-center flex flex-col items-center justify-center">
          <div className="w-10 h-10 rounded-lg bg-brand-blue/5 flex items-center justify-center mb-4">
            {/* Structural Prism representing precision/success */}
            <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4L4 8l8 4 8-4-8-4zM4 12l8 4 8-4M4 16l8 4 8-4" />
            </svg>
          </div>
          <span className="text-4xl font-bold text-brand-blue mb-2">100%</span>
          <span className="text-gray-500 font-medium">Project Success Rate</span>
        </div>

        <div className="card-base p-8 text-center flex flex-col items-center justify-center bg-gray-50/50">
          <div className="w-10 h-10 rounded-lg bg-brand-coral/5 flex items-center justify-center mb-4">
            {/* Structural Graph representing impact/scaling */}
            <svg className="w-6 h-6 text-brand-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <span className="text-4xl font-bold text-brand-coral mb-2">70%+</span>
          <span className="text-gray-500 font-medium">Impact & Results</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

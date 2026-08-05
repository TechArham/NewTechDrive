import React from 'react';

export default function CallToAction() {
  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden font-sans">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1120] via-[#101b3b] to-[#1e4cd5]" />
      
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-[42px] font-bold text-white mb-6 tracking-tight">
          Ready to Build Your Team?
        </h2>
        
        <p className="text-[#b3bccc] text-base md:text-[17px] mb-10 max-w-2xl mx-auto leading-relaxed">
          Book a free 30-minute consultation. Tell us what you need — we'll tell you<br className="hidden md:block" /> exactly how we'd deliver it.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 w-full">
          <button className="w-full sm:w-auto bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold py-3.5 px-8 rounded-lg transition-colors duration-300">
            Book a Free Consultation
          </button>
          
          <a href="#" className="text-white hover:text-gray-200 font-medium inline-flex items-center transition-colors text-[15px]">
            or request a proposal
            <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
        
        <p className="text-[#8492a6] text-[13px]">
          No commitment · Clear proposal before you decide
        </p>
      </div>
    </section>
  );
}

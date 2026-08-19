import React from 'react';

export default function CallToAction() {
  return (
    <section className="relative w-full py-28 lg:py-36 overflow-hidden font-sans">
      {/* Enhanced Background Gradient with animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#1a1f3a] via-[#0f1736] to-[#1e3a8a]">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-600/10 to-transparent animate-pulse"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs md:text-sm font-semibold tracking-wider backdrop-blur-sm">
            START YOUR PROJECT
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-6 tracking-tight leading-[1.1]">
          Ready to Build Your
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
            Dream Team?
          </span>
        </h2>

        {/* Description */}
        <p className="text-[#c5d0e3] text-base md:text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Book a free 30-minute consultation. Tell us what you need — we'll tell you exactly how we'd deliver it.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10 w-full">
          <button className="group relative w-full sm:w-auto overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)] hover:scale-105 transform">
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative z-10 flex items-center justify-center gap-2">
              Book a Free Consultation
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </button>

          <a
            href="#"
            className="group text-white hover:text-blue-300 font-semibold inline-flex items-center gap-2 transition-all duration-300 text-[15px] md:text-[16px] px-6 py-4 rounded-xl hover:bg-white/5 backdrop-blur-sm"
          >
            <span>or request a proposal</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center gap-6 text-[#8896ab] text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>No commitment</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-600"></div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
            </svg>
            <span>Clear proposal before you decide</span>
          </div>
        </div>

        {/* Subtle bottom accent */}
        <div className="mt-12 flex items-center justify-center gap-2 opacity-50">
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

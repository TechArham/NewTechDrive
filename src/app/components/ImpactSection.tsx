'use client';

import React from 'react';

const stats = [
  {
    id: 1,
    value: '500+',
    label: 'Projects Delivered',
    description: 'Successfully completed projects across industries',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    value: '98%',
    label: 'Client Satisfaction',
    description: 'Clients rate us excellent or outstanding',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    value: '150+',
    label: 'Expert Team Members',
    description: 'Skilled professionals ready to work',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 4,
    value: '15+',
    label: 'Years Experience',
    description: 'Building digital solutions since 2009',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
      </svg>
    ),
    color: 'from-green-500 to-emerald-500'
  }
];

export default function ImpactSection() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white w-full overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-100/40 to-blue-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-5">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-sm md:text-base font-bold tracking-[0.2em] uppercase">
              Our Impact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-[#11111a] tracking-tight leading-[1.15] mb-6">
            Trusted by Companies
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Around the World
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We've helped hundreds of businesses transform their digital presence and achieve remarkable results.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="group relative bg-white rounded-[32px] p-8 md:p-10 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.18)] transition-all duration-500 border border-gray-100/50 hover:border-transparent hover:-translate-y-3"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-[32px] bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              {/* Icon */}
              <div className={`relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                {stat.icon}
              </div>

              {/* Value */}
              <div className="relative mb-3">
                <h3 className={`text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br ${stat.color} leading-none`}>
                  {stat.value}
                </h3>
              </div>

              {/* Label */}
              <h4 className="text-xl md:text-2xl font-bold text-[#11111a] mb-3 leading-tight">
                {stat.label}
              </h4>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed">
                {stat.description}
              </p>

              {/* Decorative line */}
              <div className={`mt-6 h-1 w-12 rounded-full bg-gradient-to-r ${stat.color} transform group-hover:w-20 transition-all duration-500`}></div>

              {/* Shine effect */}
              <div className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-gray-600 text-base md:text-lg mb-6">
            Join hundreds of satisfied clients who trust Tech Drive
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-[0_8px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-105 transform group"
          >
            <span>Start Your Project Today</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

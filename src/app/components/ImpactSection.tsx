'use client';

import React from 'react';

const steps = [
  {
    id: 1,
    step: '01',
    title: 'Discover & Define',
    description:
      'We start by understanding your business, your users, and the problem you actually need to solve — before a single line of code is written.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    color: 'from-blue-500 to-cyan-500',
    lightColor: 'from-blue-50 to-cyan-50',
  },
  {
    id: 2,
    step: '02',
    title: 'Design & Plan',
    description:
      'We map out architecture, user flows, and a realistic delivery plan. No surprises down the road — you see the full picture before work begins.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    color: 'from-violet-500 to-purple-500',
    lightColor: 'from-violet-50 to-purple-50',
  },
  {
    id: 3,
    step: '03',
    title: 'Build & Iterate',
    description:
      'We work in short cycles with regular check-ins, so you can see progress, give feedback, and course-correct early — not at the end.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    color: 'from-orange-500 to-amber-500',
    lightColor: 'from-orange-50 to-amber-50',
  },
  {
    id: 4,
    step: '04',
    title: 'Launch & Support',
    description:
      'Shipping is the start, not the finish. We stay engaged after launch to monitor, refine, and help you grow from a solid foundation.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    color: 'from-green-500 to-emerald-500',
    lightColor: 'from-green-50 to-emerald-50',
  },
];

const values = [
  {
    title: 'Honesty over comfort',
    description: "We'll tell you when a scope is too broad or a deadline isn't realistic — because surprises late in a project cost everyone more.",
  },
  {
    title: 'Quality by default',
    description: 'Clean code, accessible interfaces, and secure practices are built in from day one, not bolted on at the end.',
  },
  {
    title: 'Your goals, our compass',
    description: 'Every decision we make is measured against what actually moves the needle for your business.',
  },
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
              How We Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-[#11111a] tracking-tight leading-[1.15] mb-6">
            A process built around
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              your outcomes
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From first conversation to post-launch, every step is designed to keep you informed, in control, and confident in the work.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20 md:mb-24">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="group relative bg-white rounded-[32px] p-8 md:p-10 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.18)] transition-all duration-500 border border-gray-100/50 hover:border-transparent hover:-translate-y-3"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-[32px] bg-gradient-to-br ${step.lightColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Step number */}
              <div className="relative mb-5 flex items-center justify-between">
                <span className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br ${step.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500 leading-none`}>
                  {step.step}
                </span>
                {/* Connector dot for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 w-4 h-4 z-20">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${step.color} opacity-40`}></div>
                  </div>
                )}
              </div>

              {/* Icon */}
              <div className={`relative mb-6 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-md transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="relative text-xl md:text-2xl font-bold text-[#11111a] mb-3 leading-tight">
                {step.title}
              </h3>

              {/* Description */}
              <p className="relative text-gray-600 text-sm md:text-[15px] leading-relaxed">
                {step.description}
              </p>

              {/* Decorative line */}
              <div className={`relative mt-6 h-1 w-10 rounded-full bg-gradient-to-r ${step.color} transform group-hover:w-16 transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Values strip */}
        <div className="bg-white rounded-[32px] border border-gray-100 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.06)] px-8 md:px-12 py-10 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-1 flex flex-col justify-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
              Our Values
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-[#11111a] leading-snug">
              Principles that guide every decision we make
            </h3>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="w-8 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-1"></div>
                <h4 className="text-base font-bold text-[#11111a] leading-snug">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

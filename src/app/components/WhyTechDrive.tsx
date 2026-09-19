import React from 'react';

const cards = [
  {
    id: 1,
    title: 'Managed delivery',
    description: 'A dedicated engagement manager owns quality, timelines, and communication on every project. You talk to one person, not a rotating cast.',
    icon: (
      <svg className="w-7 h-7 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 15v3" />
      </svg>
    ),
    gradient: 'from-blue-50 to-indigo-50',
    hoverGradient: 'group-hover:from-blue-100 group-hover:to-indigo-100'
  },
  {
    id: 2,
    title: 'Vetted professionals',
    description: 'Every specialist is screened for skill, communication, and reliability before they ever touch your work. No bidding wars, no gambles.',
    icon: (
      <svg className="w-7 h-7 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    gradient: 'from-violet-50 to-purple-50',
    hoverGradient: 'group-hover:from-violet-100 group-hover:to-purple-100'
  },
  {
    id: 3,
    title: 'One partner, every capability',
    description: 'Development, marketing, staffing, finance, and more — add services as you grow without adding vendors.',
    icon: (
      <svg className="w-7 h-7 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    gradient: 'from-cyan-50 to-blue-50',
    hoverGradient: 'group-hover:from-cyan-100 group-hover:to-blue-100'
  },
  {
    id: 4,
    title: 'Flexible engagement',
    description: 'A one-off project, a dedicated team, extra hands for your own team, or expert advice. You choose the model; we make it work.',
    icon: (
      <svg className="w-7 h-7 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    gradient: 'from-indigo-50 to-violet-50',
    hoverGradient: 'group-hover:from-indigo-100 group-hover:to-violet-100'
  }
];

export default function WhyTechDrive() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 w-full font-sans text-[#111827] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 md:mb-24">
          <div className="inline-block mb-5">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-sm md:text-base font-bold tracking-[0.2em] uppercase">
              Why Tech Drive
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-[#111827] leading-[1.15] max-w-5xl mx-auto">
            Not a Marketplace. Not a Typical Agency.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              A Managed Partner.
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
            We deliver results through dedicated teams, vetted professionals, and flexible engagement models tailored to your needs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="group relative bg-white rounded-[28px] p-8 md:p-10 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)] transition-all duration-500 flex flex-col border border-gray-100 hover:border-blue-200/50 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-[28px] bg-gradient-to-br ${card.gradient} ${card.hoverGradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon container */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 group-hover:from-blue-100 group-hover:to-indigo-200 flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm shrink-0">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-[22px] md:text-[23px] font-bold leading-snug mb-4 text-[#111827] group-hover:text-[#0f172a] transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 group-hover:text-gray-700 text-[15px] md:text-[16px] leading-[1.7] transition-colors">
                  {card.description}
                </p>

                {/* Decorative arrow that appears on hover */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-500">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Link Section */}
        <div className="mt-16 md:mt-20 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#3b82f6] text-[16px] font-semibold hover:text-blue-700 transition-all duration-300 group/link px-6 py-3 rounded-full hover:bg-blue-50"
          >
            <span>See how we work</span>
            <svg className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

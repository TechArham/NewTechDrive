import React from 'react';

const cards = [
  {
    id: 1,
    title: 'Managed delivery',
    description: 'A dedicated engagement manager owns quality, timelines, and communication on every project. You talk to one person, not a rotating cast.',
    icon: (
      <svg className="w-6 h-6 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 15v3" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Vetted professionals',
    description: 'Every specialist is screened for skill, communication, and reliability before they ever touch your work. No bidding wars, no gambles.',
    icon: (
      <svg className="w-6 h-6 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'One partner, every capability',
    description: 'Development, marketing, staffing, finance, and more — add services as you grow without adding vendors.',
    icon: (
      <svg className="w-6 h-6 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Flexible engagement',
    description: 'A one-off project, a dedicated team, extra hands for your own team, or expert advice. You choose the model; we make it work.',
    icon: (
      <svg className="w-6 h-6 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    )
  }
];

export default function WhyTechDrive() {
  return (
    <section className="py-24 bg-[#f8f9fc] w-full font-sans text-[#111827]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-[#3b82f6] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4">
            Why Tech Drive
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-[#111827]">
            Not a Marketplace. Not a Typical Agency. A Managed Partner.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-[24px] p-8 md:p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-shadow duration-300 flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#f0f5ff] flex items-center justify-center mb-8">
                {card.icon}
              </div>
              <h3 className="text-[22px] font-bold leading-snug mb-4 text-[#111827]">
                {card.title.includes('partner') ? (
                  <>
                    One partner,<br />every capability
                  </>
                ) : (
                  card.title
                )}
              </h3>
              <p className="text-gray-500 text-[15px] leading-[1.6]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Link Section */}
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-[#3b82f6] text-[15px] font-semibold hover:text-blue-700 transition-colors">
            See how we work
            <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

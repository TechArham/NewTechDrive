'use client';

import React from 'react';

const cards = [
    {
        id: 1,
        title: 'Product-Oriented <br className="hidden md:block" />Approach',
        description: 'We think like product owners, not just vendors. We research your users, challenge assumptions, and help you prioritize features that move the metrics that matter.',
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                <circle cx="16" cy="16" r="4" fill="white" stroke="none" />
                <path d="M14.5 16l1 1 2-2" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        bgColor: 'bg-[#7c42da]', // Purple
        rotation: 'md:rotate-3',
        paddingBottom: 'pb-8 md:pb-8',
        zIndex: 'z-10'
    },
    {
        id: 2,
        title: 'AI-First by <br className="hidden md:block" />Default',
        description: 'Every project runs on our Production-Ready AI Engineering practice — senior engineers paired with AI agents, shipping faster without lowering the bar. AI is the engine, not the marketing.',
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                <circle cx="16" cy="16" r="4" fill="white" stroke="none" />
                <path d="M14.5 16l1 1 2-2" stroke="#4252da" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        bgColor: 'bg-[#4252da]', // Blueish purple
        rotation: 'md:-rotate-3',
        paddingBottom: 'pb-8 md:pb-12',
        zIndex: 'z-20'
    },
    {
        id: 3,
        title: 'Clear <br className="hidden md:block" />Communication',
        description: 'We build relationships on integrity and trust, with transparent processes and proactive communication at every stage of the work.',
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                <circle cx="16" cy="16" r="4" fill="white" stroke="none" />
                <path d="M14.5 16l1 1 2-2" stroke="#429ada" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        bgColor: 'bg-[#429ada]', // Light blue
        rotation: 'md:rotate-3',
        paddingBottom: 'pb-8 md:pb-[72px]',
        zIndex: 'z-30'
    },
    {
        id: 4,
        title: 'Customer-Centric <br className="hidden md:block" />Approach',
        description: 'We start from your business goals, not our tech stack, and deliver tailored solutions that drive measurable impact for your team and customers.',
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                <circle cx="16" cy="16" r="4" fill="white" stroke="none" />
                <path d="M14.5 16l1 1 2-2" stroke="#7c42da" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        bgColor: 'bg-[#7c42da]', // Purple
        rotation: 'md:-rotate-3',
        paddingBottom: 'pb-8 md:pb-12',
        zIndex: 'z-40'
    }
];

export default function AiSection() {
    return (
        <section className="py-24 bg-white text-black overflow-hidden w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#11111a] tracking-tight mb-4">
                        How Diffco helps you<br />deliver the best results
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-stretch md:items-start gap-6 md:gap-0 mt-12 md:mt-20 group">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            className={`
                relative flex-1 w-full md:min-w-[280px] md:max-w-[320px] mx-auto md:mx-[-4px] 
                rounded-3xl pt-10 md:pt-12 px-8 md:px-10 shadow-xl text-white transition-all duration-300 ease-out cursor-pointer
                ${card.bgColor} ${card.rotation} ${card.paddingBottom} ${card.zIndex}
                hover:!rotate-0 hover:z-50
              `}
                            style={{ transformOrigin: 'center center' }}
                        >
                            <div className="mb-8 relative">
                                {card.icon}
                            </div>
                            <h3
                                className="text-2xl font-bold mb-6 leading-tight"
                                dangerouslySetInnerHTML={{ __html: card.title }}
                            />
                            <p className="text-white/90 text-base leading-relaxed font-sans">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

'use client';

import React from 'react';

const cards = [
    {
        id: 1,
        title: 'Product-Oriented Approach',
        subtitle: '',
        description: 'We think like product owners, not just vendors. We research your users, challenge assumptions, and help you prioritize features that move the metrics that matter.',
        icon: (
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                <circle cx="16" cy="16" r="4" fill="white" stroke="none" />
                <path d="M14.5 16l1 1 2-2" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        bgGradient: 'from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9]',
        glowColor: 'rgba(139, 92, 246, 0.4)',
        rotation: 'md:rotate-2',
    },
    {
        id: 2,
        title: 'Good Experts',
        subtitle: '',
        description: 'We work exclusively with senior specialists who bring deep domain expertise, sharp problem-solving skills, and a track record of delivering at the highest level.',
        icon: (
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                <circle cx="16" cy="16" r="4" fill="white" stroke="none" />
                <path d="M14.5 16l1 1 2-2" stroke="#4252da" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        bgGradient: 'from-[#4f46e5] via-[#4338ca] to-[#3730a3]',
        glowColor: 'rgba(79, 70, 229, 0.4)',
        rotation: 'md:-rotate-2',
    },
    {
        id: 3,
        title: 'Clear Communication',
        subtitle: '',
        description: 'We build relationships on integrity and trust, with transparent processes and proactive communication at every stage of the work.',
        icon: (
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                <circle cx="16" cy="16" r="4" fill="white" stroke="none" />
                <path d="M14.5 16l1 1 2-2" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        bgGradient: 'from-[#06b6d4] via-[#0891b2] to-[#0e7490]',
        glowColor: 'rgba(6, 182, 212, 0.4)',
        rotation: 'md:rotate-2',
    },
    {
        id: 4,
        title: 'Customer-Centric Approach',
        subtitle: '',
        description: 'We start from your business goals, not our tech stack, and deliver tailored solutions that drive measurable impact for your team and customers.',
        icon: (
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                <circle cx="16" cy="16" r="4" fill="white" stroke="none" />
                <path d="M14.5 16l1 1 2-2" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        bgGradient: 'from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9]',
        glowColor: 'rgba(139, 92, 246, 0.4)',
        rotation: 'md:-rotate-2',
    }
];

export default function AiSection() {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-br from-[#fafafa] via-white to-[#f5f5f5] text-black overflow-hidden w-full relative">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-20 md:mb-24">
                    <div className="inline-block">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-3 block">
                            Our Approach
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#11111a] tracking-tight mb-6 leading-[1.1]">
                        How Tech Drive helps you
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                            deliver the best results
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        We combine product thinking, top-tier expertise, and transparent communication to deliver exceptional outcomes.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="flex flex-col md:flex-row justify-center items-stretch md:items-start gap-6 mt-12 md:mt-20">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            className={`
                                group relative flex-1 w-full md:min-w-[260px] md:max-w-[320px] mx-auto
                                rounded-[32px] overflow-hidden
                                shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                                transition-all duration-500 ease-out cursor-pointer
                                ${card.rotation}
                                hover:!rotate-0 hover:scale-105 hover:z-50 hover:shadow-[0_20px_60px_rgb(0,0,0,0.2)]
                            `}
                            style={{
                                transformOrigin: 'center center',
                            }}
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} opacity-100 transition-opacity duration-500`}></div>

                            {/* Glow effect on hover */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                                style={{ background: `radial-gradient(circle at 50% 50%, ${card.glowColor}, transparent 70%)` }}
                            ></div>

                            {/* Shine effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-8 md:p-10 pb-10 md:pb-14 h-full flex flex-col">
                                {/* Icon */}
                                <div className="mb-8 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 border border-white/20">
                                    {card.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight text-white break-words">
                                    {card.title.split(' ').slice(0, Math.ceil(card.title.split(' ').length / 2)).join(' ')}
                                    <br />
                                    <span className="text-white/90">{card.title.split(' ').slice(Math.ceil(card.title.split(' ').length / 2)).join(' ')}</span>
                                </h3>

                                {/* Description */}
                                <p className="text-white/95 text-base md:text-[15px] leading-relaxed font-sans flex-grow">
                                    {card.description}
                                </p>

                                {/* Decorative bottom line */}
                                <div className="mt-8 w-12 h-1 bg-white/40 rounded-full transform group-hover:w-20 transition-all duration-500"></div>
                            </div>

                            {/* Border glow */}
                            <div className="absolute inset-0 rounded-[32px] border border-white/20 group-hover:border-white/40 transition-colors duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

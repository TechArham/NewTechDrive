'use client';

import { useState } from 'react';
import Header from './components/header';
import AiSection from './components/AiSection';
import WhyTechDrive from './components/WhyTechDrive';
import ImpactSection from './components/ImpactSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Reveal from './components/Reveal';

// Metadata will be handled by layout.tsx for the home page

const services = [
  {
    id: 1,
    title: 'SOFTWARE ENGINEERING',
    description: 'From cloud computing and embedded systems to legacy modernization and enterprise platforms, we deliver scalable industry-specific solutions that meet the highest quality standards.',
    image: '/img/hero-slide-1.png',
    link: '#'
  },
  {
    id: 2,
    title: 'PRODUCT DESIGN',
    description: 'Our design team combines research, business analysis, testing, and creativity to craft user-centered products that drive engagement, streamline workflows, and stand out in the market.',
    image: '/img/hero-slide-2.png',
    link: '#'
  },
  {
    id: 3,
    title: 'DATA SCIENCE & AI',
    description: 'Leverage predictive models, generative AI, and intelligent automation to gain more valuable insights, facilitate your decisions, and boost your business value.',
    image: '/img/hero-slide-3.png',
    link: '#'
  },
  {
    id: 4,
    title: 'CONSULTING',
    description: 'We help you define product strategy, validate ideas, and select the right architecture and tools, ensuring your investments are aligned with long-term growth.',
    image: '/img/hero-slide-3.png',
    link: '#'
  }
];

const badges = [
  'AWS PARTNER',
  'REVIEWED ON Clutch 4.9 ★★★★★',
  'ISO 9001:2015',
  'ISO 27001:2013',
  'Forbes Technology Council'
];


export default function Home() {

  const [activeService, setActiveService] = useState(2); // Default to Data Science & AI

  const nextService = () => setActiveService((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  const prevService = () => setActiveService((prev) => (prev === 0 ? services.length - 1 : prev - 1));

  return (
    <div className="text-white flex flex-col items-center font-sans w-full">
      <div className="w-full sticky top-0 z-[90] px-4 pt-2 pb-2">
        <Header />
      </div>

      <div className="w-full px-4 flex flex-col items-center">
        <Reveal delay={0.2}>
          <div className="w-full mt-6 md:mt-10 max-w-[1400px] mx-auto flex-1 flex items-center">
            <div className="flex flex-col lg:flex-row h-[700px] lg:h-[600px] gap-4 w-full">
              {services.map((service, index) => {
                const isActive = index === activeService;

                return (
                  <div
                    key={service.id}
                    onClick={() => !isActive && setActiveService(index)}
                    className={`relative rounded-4xl overflow-hidden transition-all duration-700 ease-in-out cursor-pointer group ${isActive ? 'flex-1' : 'h-[80px] lg:h-auto lg:w-[100px]'
                      }`}
                  >
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />

                    {/* Overlays */}
                    <div className={`absolute inset-0 transition-all duration-700 ${isActive
                      ? 'bg-gradient-to-r from-[#11111a] via-[#11111a]/70 to-transparent'
                      : 'bg-[#11111a]/70 group-hover:bg-[#11111a]/50'
                      }`} />

                    {/* Content for Active Panel */}
                    <div
                      className={`absolute inset-0 p-6 md:p-12 flex flex-col justify-between transition-opacity duration-500 delay-200 ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                        }`}
                    >
                      {/* Top right arrows */}
                      <div className="flex justify-end gap-2 md:gap-3">
                        <button
                          onClick={(e) => { e.stopPropagation(); prevService(); }}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1a1a24]/80 hover:bg-white hover:text-black transition-colors flex items-center justify-center backdrop-blur-sm"
                        >
                          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); nextService(); }}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1a1a24]/80 hover:bg-white hover:text-black transition-colors flex items-center justify-center backdrop-blur-sm"
                        >
                          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>

                      <div className="max-w-xl mt-4 md:mt-0">
                        <div className="w-12 md:w-16 h-1 bg-white mb-4 md:mb-8 opacity-50" />
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-4 md:mb-6 leading-tight">
                          {service.title.includes(' ') ? (
                            <>
                              {service.title.split(' ')[0]}
                              <br />
                              {service.title.split(' ').slice(1).join(' ')}
                            </>
                          ) : (
                            service.title
                          )}
                        </h2>
                        <p className="text-sm md:text-lg text-zinc-300 mb-6 md:mb-10 leading-relaxed max-w-lg hidden sm:block">
                          {service.description}
                        </p>
                        <button className="bg-[#9c8fff] hover:bg-[#8b7fff] cursor-pointer text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full text-sm md:text-base font-semibold transition-colors duration-300">
                          LEARN MORE
                        </button>
                      </div>


                    </div>

                    {/* Content for Collapsed Panel */}
                    <div
                      className={`absolute inset-0 flex flex-row lg:flex-col items-center justify-start lg:justify-between px-6 lg:px-0 py-0 lg:py-10 transition-opacity duration-500 ${!isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                        }`}
                    >
                      <div className="hidden lg:flex w-12 h-12 rounded-full bg-[#1a1a24]/80 items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>

                      <div className="flex-1 flex items-center lg:items-end lg:pb-8 w-full">
                        <h3
                          className="text-lg lg:text-xl font-bold tracking-wider uppercase whitespace-nowrap text-white/90 lg:[writing-mode:vertical-rl] lg:rotate-180"
                        >
                          {service.title}
                        </h3>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
      <Reveal>
        <AiSection />
      </Reveal>
      <Reveal>
        <WhyTechDrive />
      </Reveal>
      <Reveal>
        <ImpactSection />
      </Reveal>
      <Reveal>
        <CallToAction />
      </Reveal>
      <Footer />
    </div>
  );
}

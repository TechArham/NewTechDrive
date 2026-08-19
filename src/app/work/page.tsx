'use client';

import { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform Redesign',
    category: 'SOFTWARE ENGINEERING',
    description: 'Built a scalable cloud-based e-commerce platform serving 2M+ users with real-time inventory management and AI-powered recommendations.',
    image: '/img/hero-slide-1.png',
    tags: ['React', 'Node.js', 'AWS', 'MongoDB'],
    metrics: {
      users: '2M+',
      performance: '40% faster',
      conversion: '+25%'
    }
  },
  {
    id: 2,
    title: 'Healthcare Mobile App',
    category: 'PRODUCT DESIGN',
    description: 'Designed and developed a patient-centered mobile application with telemedicine capabilities and appointment scheduling.',
    image: '/img/hero-slide-2.png',
    tags: ['React Native', 'UI/UX', 'Healthcare', 'Mobile'],
    metrics: {
      users: '500K+',
      rating: '4.8/5',
      engagement: '+60%'
    }
  },
  {
    id: 3,
    title: 'AI-Powered Analytics Dashboard',
    category: 'DATA SCIENCE & AI',
    description: 'Created an intelligent analytics platform using machine learning to predict customer behavior and optimize marketing campaigns.',
    image: '/img/hero-slide-3.png',
    tags: ['Python', 'TensorFlow', 'React', 'BigQuery'],
    metrics: {
      accuracy: '94%',
      roi: '+180%',
      dataPoints: '10M+'
    }
  },
  {
    id: 4,
    title: 'Enterprise Resource Planning',
    category: 'CONSULTING',
    description: 'Architected and implemented a comprehensive ERP system for a Fortune 500 company, streamlining operations across 15 departments.',
    image: '/img/hero-slide-1.png',
    tags: ['SAP', 'Oracle', 'Integration', 'Cloud'],
    metrics: {
      efficiency: '+45%',
      cost: '-30%',
      users: '5000+'
    }
  },
  {
    id: 5,
    title: 'FinTech Payment Gateway',
    category: 'SOFTWARE ENGINEERING',
    description: 'Developed a secure, high-performance payment processing system handling millions of transactions daily.',
    image: '/img/hero-slide-2.png',
    tags: ['Java', 'Microservices', 'Security', 'Blockchain'],
    metrics: {
      transactions: '5M/day',
      uptime: '99.99%',
      latency: '<50ms'
    }
  },
  {
    id: 6,
    title: 'Smart City IoT Platform',
    category: 'DATA SCIENCE & AI',
    description: 'Built an IoT ecosystem for smart city infrastructure management with real-time monitoring and predictive maintenance.',
    image: '/img/hero-slide-3.png',
    tags: ['IoT', 'Edge Computing', 'AI', 'Cloud'],
    metrics: {
      devices: '50K+',
      efficiency: '+35%',
      downtime: '-70%'
    }
  }
];

const categories = ['ALL', 'SOFTWARE ENGINEERING', 'PRODUCT DESIGN', 'DATA SCIENCE & AI', 'CONSULTING'];

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === 'ALL'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-[#11111a]">
      <div className="w-full sticky top-0 z-50 px-4 pt-2 pb-2">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="w-full px-4 py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-cyan-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-100/40 to-blue-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tl from-purple-100/40 to-pink-100/40 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <Reveal delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block mb-5">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                  Our Work
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold mb-6 tracking-tight leading-[1.1]">
                Projects That Transform
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                  Businesses
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Explore our portfolio of innovative projects that have transformed businesses across industries.
                From cutting-edge software solutions to AI-powered platforms, we deliver excellence at scale.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Category Filter */}
      <section className="w-full px-4 pb-8">
        <div className="max-w-[1400px] mx-auto">
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full px-4 py-8 md:py-16 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <Reveal key={project.id} delay={0.1 * index}>
                <div
                  className="group relative rounded-[32px] overflow-hidden bg-white hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.2)] transition-all duration-500 cursor-pointer border border-gray-200 hover:border-blue-200 hover:-translate-y-2"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11111a]/60 via-transparent to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg">
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#11111a] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gradient-to-br from-slate-50 to-blue-50 text-gray-700 text-xs rounded-full border border-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-base md:text-lg">{value}</div>
                          <div className="text-gray-500 text-xs uppercase tracking-wide">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect - View Details */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-95' : 'opacity-0 pointer-events-none'
                      }`}
                  >
                    <div className="text-center text-white">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                      <p className="text-xl font-bold">VIEW CASE STUDY</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-cyan-50">
        <div className="max-w-[1400px] mx-auto">
          <Reveal delay={0.2}>
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-[32px] p-8 md:p-16 text-center relative overflow-hidden shadow-[0_20px_60px_-12px_rgba(0,0,0,0.25)]">
              <div className="absolute inset-0 bg-[url('/img/hero-slide-1.png')] bg-cover bg-center opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white">
                  Let's Build Something Amazing Together
                </h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90">
                  Ready to transform your ideas into reality? Our team is here to help you create exceptional digital experiences.
                </p>
                <button className="group bg-white text-blue-600 px-8 py-4 rounded-full text-base md:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2">
                  <span>START YOUR PROJECT</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

'use client';

import { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import Image from 'next/image';

const services = [
  {
    id: 'software',
    title: 'Software Engineering',
    tagline: "Building Tomorrow's Digital Infrastructure",
    description: 'From cloud computing and embedded systems to legacy modernization and enterprise platforms, we deliver scalable industry-specific solutions that meet the highest quality standards.',
    image: '/img/hero-slide-1.png',
    features: [
      'Cloud-Native Architecture',
      'Microservices Development',
      'Legacy System Modernization',
      'API Design & Integration',
      'DevOps & CI/CD',
      'Performance Optimization'
    ],
    technologies: ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes']
  },
  {
    id: 'design',
    title: 'Product Design',
    tagline: 'Crafting Experiences That Captivate',
    description: 'Our design team combines research, business analysis, testing, and creativity to craft user-centered products that drive engagement, streamline workflows, and stand out in the market.',
    image: '/img/hero-slide-2.png',
    features: [
      'User Experience (UX) Design',
      'User Interface (UI) Design',
      'Design Systems',
      'Prototyping & Testing',
      'Brand Identity',
      'Mobile App Design'
    ],
    technologies: ['Figma', 'Sketch', 'Adobe XD', 'InVision', 'Principle', 'Framer']
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    tagline: 'Intelligent Automation at Scale',
    description: 'Leverage intelligent automation, machine learning, and AI-powered workflows to streamline operations, accelerate decisions, and unlock new business value.',
    image: '/img/hero-slide-3.png',
    features: [
      'Intelligent Process Automation',
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'AI-Powered Workflows',
      'Predictive Analytics'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'LangChain', 'Apache Spark', 'OpenAI API']
  },
  {
    id: 'interior',
    title: 'Interior Design',
    tagline: 'Spaces Designed with Precision & Vision',
    description: 'From concept to construction-ready drawings, we deliver detailed 2D & 3D interior designs, AutoCAD plans, and full spatial visualization for residential and commercial spaces.',
    image: '/img/hero-slide-4.webp',
    features: [
      '2D Floor Plans & Layouts',
      '3D Interior Visualization',
      'AutoCAD Technical Drawings',
      'Space Planning & Optimization',
      'Material & Finish Specification',
      'Residential & Commercial Design'
    ],
    technologies: ['AutoCAD', '3ds Max', 'SketchUp', 'Revit', 'V-Ray', 'Lumion']
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understanding your vision, challenges, and goals'
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Crafting a roadmap tailored to your needs'
  },
  {
    number: '03',
    title: 'Execution',
    description: 'Building solutions with precision and quality'
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Deploying and optimizing for peak performance'
  },
  {
    number: '05',
    title: 'Support',
    description: 'Ongoing maintenance and continuous improvement'
  }
];

export default function ServicesContent() {
  const [activeService, setActiveService] = useState<string>('software');

  const currentService = services.find(s => s.id === activeService) || services[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-gray-900">
      <div className="w-full sticky top-0 z-50 px-4 pt-2 pb-2 backdrop-blur-md bg-white/80 border-b border-gray-200">
        <Header variant="light" />
      </div>

      {/* Hero Section */}
      <section className="w-full px-4 py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-transparent to-blue-50 opacity-50" />
        <div className="max-w-[1400px] mx-auto relative">
          <Reveal delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block mb-6">
                <span className="text-sm font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  WHAT WE OFFER
                </span>
              </div>
              <h1 className="text-[40px] md:text-[64px] font-bold mb-6 uppercase tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                Our Services
              </h1>
              <p className="text-base md:text-[20px] text-gray-600 leading-relaxed">
                Comprehensive technology solutions designed to transform your business,
                accelerate growth, and deliver measurable results.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Interactive Services Section */}
      <section className="w-full px-4 py-16 md:py-24 relative">
        <div className="max-w-[1400px] mx-auto">
          {/* Service Tabs */}
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-3 justify-center mb-16">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 ${activeService === service.id
                    ? 'bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 text-white shadow-lg shadow-purple-500/30 scale-105'
                    : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-100 border-2 border-gray-200 hover:border-purple-300'
                    }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Active Service Content */}
          <Reveal delay={0.4}>
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="relative h-[500px] rounded-[2rem] overflow-hidden group shadow-2xl">
                <Image
                  src={currentService.image}
                  alt={currentService.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div>
                <div className="inline-block bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 px-5 py-2.5 rounded-full text-xs font-bold mb-6 shadow-lg shadow-purple-500/20 text-white">
                  {currentService.title.toUpperCase()}
                </div>
                <h2 className="text-[32px] md:text-[48px] font-bold mb-6 uppercase tracking-tight leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                    {currentService.tagline}
                  </span>
                </h2>
                <p className="text-base md:text-[18px] text-gray-600 leading-relaxed mb-10">
                  {currentService.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-5 mb-10">
                  {currentService.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 group/item">
                      <div className="mt-0.5 flex-shrink-0">
                        <svg className="w-5 h-5 text-purple-600 group-hover/item:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700 group-hover/item:text-gray-900 transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2.5">
                  {currentService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200 hover:border-purple-400 hover:bg-purple-50 hover:text-gray-900 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Process */}
      <section className="w-full px-4 py-16 md:py-24 relative bg-gradient-to-b from-transparent via-purple-50/30 to-transparent">
        <div className="max-w-[1400px] mx-auto relative">
          <Reveal delay={0.2}>
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-sm font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  HOW WE WORK
                </span>
              </div>
              <h2 className="text-[36px] md:text-[48px] font-bold mb-6 uppercase tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                  Our Process
                </span>
              </h2>
              <p className="text-base md:text-[18px] text-gray-600 max-w-2xl mx-auto">
                A proven methodology that delivers exceptional results every time
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <Reveal key={index} delay={0.1 * index}>
                <div className="relative bg-white rounded-3xl p-8 hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100/50 group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for desktop */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-2 shadow-lg shadow-purple-500/30">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Overview */}
      <section className="w-full px-4 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          <Reveal delay={0.2}>
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-sm font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  COMPLETE PORTFOLIO
                </span>
              </div>
              <h2 className="text-[36px] md:text-[48px] font-bold uppercase tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                  All Services
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={0.1 * index}>
                <div
                  id={service.id}
                  className="group relative rounded-[2rem] overflow-hidden bg-white hover:bg-gray-50 transition-all duration-500 cursor-pointer border-2 border-gray-200 hover:border-purple-300 shadow-xl hover:shadow-2xl hover:shadow-purple-100/50"
                  onClick={() => setActiveService(service.id)}
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-tight text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-base md:text-[17px] leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                      {service.description}
                    </p>
                    <button className="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 text-white px-7 py-3 rounded-full text-sm font-bold uppercase tracking-wide hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 group-hover:scale-105">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto">
          <Reveal delay={0.2}>
            <div className="relative bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 rounded-[2rem] p-10 md:p-20 text-center overflow-hidden shadow-2xl shadow-purple-500/30">
              <div className="absolute inset-0 bg-[url('/img/hero-slide-1.png')] bg-cover bg-center opacity-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
              <div className="relative z-10">
                <h2 className="text-[36px] md:text-[52px] font-bold mb-6 uppercase tracking-tight leading-tight text-white">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-base md:text-[19px] mb-10 max-w-2xl mx-auto text-white/90 leading-relaxed">
                  Let's discuss how our services can help you achieve your goals and drive innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <button className="bg-white text-purple-600 px-10 py-4 rounded-full text-base md:text-[17px] font-bold uppercase tracking-wide hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    START YOUR PROJECT
                  </button>
                  <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-base md:text-[17px] font-bold uppercase tracking-wide hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    SCHEDULE A CALL
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

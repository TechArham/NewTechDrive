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
    title: 'Data Science & AI',
    tagline: 'Intelligence That Transforms Business',
    description: 'Leverage predictive models, generative AI, and intelligent automation to gain more valuable insights, facilitate your decisions, and boost your business value.',
    image: '/img/hero-slide-3.png',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'AI Automation',
      'Big Data Processing'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Apache Spark', 'BigQuery']
  },
  {
    id: 'consulting',
    title: 'Consulting',
    tagline: 'Strategic Guidance for Digital Success',
    description: 'We help you define product strategy, validate ideas, and select the right architecture and tools, ensuring your investments are aligned with long-term growth.',
    image: '/img/hero-slide-4.webp',
    features: [
      'Digital Transformation',
      'Technology Assessment',
      'Architecture Design',
      'Product Strategy',
      'Technical Due Diligence',
      'Team Augmentation'
    ],
    technologies: ['AWS', 'Azure', 'GCP', 'Enterprise Architecture', 'Agile', 'Scrum']
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

export default function Services() {
  const [activeService, setActiveService] = useState<string>('software');

  const currentService = services.find(s => s.id === activeService) || services[0];

  return (
    <div className="min-h-screen bg-[#11111a] text-white">
      <div className="w-full sticky top-0 z-50 px-4 pt-2 pb-2">
        <Header variant="dark" />
      </div>

      {/* Hero Section */}
      <section className="w-full px-4 py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto">
          <Reveal delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-[32px] md:text-[56px] font-bold mb-6 uppercase tracking-tight">
                Our Services
              </h1>
              <p className="text-base md:text-[20px] text-zinc-300 leading-relaxed">
                Comprehensive technology solutions designed to transform your business,
                accelerate growth, and deliver measurable results.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Interactive Services Section */}
      <section className="w-full px-4 py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Service Tabs */}
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeService === service.id
                      ? 'bg-gradient-to-r from-[#9c8fff] to-[#8b5cf6] text-white'
                      : 'bg-white/10 text-zinc-300 hover:bg-white/20'
                    }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Active Service Content */}
          <Reveal delay={0.4}>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-[400px] rounded-4xl overflow-hidden group">
                <Image
                  src={currentService.image}
                  alt={currentService.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11111a] via-transparent to-transparent" />
              </div>

              <div>
                <div className="inline-block bg-gradient-to-r from-[#9c8fff] to-[#8b5cf6] px-4 py-2 rounded-full text-sm font-bold mb-4">
                  {currentService.title.toUpperCase()}
                </div>
                <h2 className="text-[28px] md:text-[42px] font-bold mb-6 uppercase tracking-tight">
                  {currentService.tagline}
                </h2>
                <p className="text-base md:text-[20px] text-zinc-300 leading-relaxed mb-8">
                  {currentService.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {currentService.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#9c8fff] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {currentService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-white/10 text-zinc-300 text-xs rounded-full border border-white/20"
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
      <section className="w-full px-4 py-12 md:py-20 bg-white/5">
        <div className="max-w-[1400px] mx-auto">
          <Reveal delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-[32px] md:text-[42px] font-bold mb-6 uppercase tracking-tight">
                Our Process
              </h2>
              <p className="text-base md:text-[20px] text-zinc-300 max-w-2xl mx-auto">
                A proven methodology that delivers exceptional results every time
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <Reveal key={index} delay={0.1 * index}>
                <div className="relative bg-white/5 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10">
                  <div className="text-5xl font-bold text-[#9c8fff] mb-4 opacity-50">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{step.description}</p>

                  {/* Arrow for desktop */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                      <svg className="w-6 h-6 text-[#9c8fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Overview */}
      <section className="w-full px-4 py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto">
          <Reveal delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-[32px] md:text-[42px] font-bold mb-6 uppercase tracking-tight">
                Complete Service Portfolio
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={0.1 * index}>
                <div
                  id={service.id}
                  className="group relative rounded-4xl overflow-hidden bg-white/5 hover:bg-white/10 transition-all duration-500 cursor-pointer border border-white/10"
                  onClick={() => setActiveService(service.id)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11111a] via-[#11111a]/70 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-tight group-hover:text-[#9c8fff] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-300 text-base md:text-[18px] leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <button className="bg-gradient-to-r from-[#9c8fff] to-[#8b5cf6] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
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
      <section className="w-full px-4 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          <Reveal delay={0.2}>
            <div className="bg-gradient-to-r from-[#9c8fff] to-[#6c5ce7] rounded-4xl p-8 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/img/hero-slide-1.png')] bg-cover bg-center opacity-10" />
              <div className="relative z-10">
                <h2 className="text-[32px] md:text-[42px] font-bold mb-6 uppercase tracking-tight">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-base md:text-[20px] mb-8 max-w-2xl mx-auto">
                  Let's discuss how our services can help you achieve your goals and drive innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-[#9c8fff] px-8 py-4 rounded-full text-base md:text-[18px] font-semibold hover:bg-zinc-100 transition-colors duration-300">
                    START YOUR PROJECT
                  </button>
                  <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-base md:text-[18px] font-semibold hover:bg-white hover:text-[#9c8fff] transition-all duration-300">
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

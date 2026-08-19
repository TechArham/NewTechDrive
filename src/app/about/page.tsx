'use client';

import Header from '../components/header';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import Image from 'next/image';

const stats = [
  { number: '500+', label: 'Projects Delivered' },
  { number: '15+', label: 'Years of Excellence' },
  { number: '200+', label: 'Team Members' },
  { number: '30+', label: 'Countries Served' }
];

const values = [
  {
    icon: '🎯',
    title: 'Innovation First',
    description: 'We stay ahead of the curve, adopting cutting-edge technologies and methodologies to deliver future-proof solutions.'
  },
  {
    icon: '🤝',
    title: 'Client Partnership',
    description: 'Your success is our success. We work as an extension of your team, committed to achieving your business goals.'
  },
  {
    icon: '⚡',
    title: 'Excellence Driven',
    description: 'Quality is non-negotiable. We maintain the highest standards in every aspect of our work, from code to communication.'
  },
  {
    icon: '🌍',
    title: 'Global Mindset',
    description: 'With a diverse team across continents, we bring global perspectives to solve local and international challenges.'
  },
  {
    icon: '🔒',
    title: 'Security & Trust',
    description: 'We prioritize data security and client confidentiality with ISO-certified processes and industry best practices.'
  },
  {
    icon: '📈',
    title: 'Continuous Growth',
    description: 'We invest in our people and processes, constantly learning and evolving to serve you better.'
  }
];

const team = [
  {
    name: 'Sarah Mitchell',
    role: 'Chief Executive Officer',
    image: '/img/hero-slide-1.png',
    bio: '15+ years leading tech transformations'
  },
  {
    name: 'David Chen',
    role: 'Chief Technology Officer',
    image: '/img/hero-slide-2.png',
    bio: 'AI & Cloud Architecture Expert'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    image: '/img/hero-slide-3.png',
    bio: 'Award-winning UX/UI Designer'
  },
  {
    name: 'Michael Johnson',
    role: 'VP of Engineering',
    image: '/img/hero-slide-1.png',
    bio: 'Scalable Systems Architect'
  }
];

const timeline = [
  { year: '2010', event: 'Founded with a vision to transform digital experiences' },
  { year: '2013', event: 'Expanded to 50+ team members, opened second office' },
  { year: '2016', event: 'Achieved ISO 9001 & ISO 27001 certifications' },
  { year: '2019', event: 'Recognized as AWS Advanced Partner' },
  { year: '2022', event: 'Launched AI Research Lab, 200+ team members' },
  { year: '2024', event: 'Serving clients in 30+ countries worldwide' }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white text-[#11111a]">
      <div className="w-full sticky top-0 z-50 px-4 pt-2 pb-2">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="w-full px-4 py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-100/40 to-blue-100/40 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <Reveal delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block mb-5">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                  About Us
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold mb-6 tracking-tight leading-[1.1]">
                Transforming Ideas Into
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                  Digital Excellence
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                We are a global technology partner dedicated to driving innovation and digital transformation.
                With over 15 years of expertise, we transform ambitious ideas into powerful digital solutions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full px-4 py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <Reveal delay={0.3}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-[28px] p-8 md:p-10 text-center hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)] transition-all duration-500 border border-gray-100/50 hover:border-blue-200/50 hover:-translate-y-2"
                >
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-purple-600 mb-3">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base uppercase tracking-wide font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full px-4 py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50">
        <div className="max-w-[1400px] mx-auto">
          <Reveal delay={0.2}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-5">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                    Our Mission
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-[#11111a]">
                  Empowering Businesses Through Innovation
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                  To empower businesses worldwide by delivering innovative technology solutions that drive growth,
                  efficiency, and competitive advantage in an ever-evolving digital landscape.
                </p>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  We believe technology should be accessible, sustainable, and transformative. Our team of experts
                  works tirelessly to turn complex challenges into elegant solutions that make a real difference.
                </p>
              </div>
              <div className="relative h-96 md:h-[500px] rounded-[32px] overflow-hidden shadow-[0_20px_60px_-12px_rgba(0,0,0,0.2)]">
                <Image
                  src="/img/hero-slide-2.png"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full px-4 py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <Reveal delay={0.2}>
            <div className="text-center mb-16">
              <div className="inline-block mb-5">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                  Our Values
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-[#11111a]">
                The Principles That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Guide Us</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide every decision we make and every solution we deliver
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <Reveal key={index} delay={0.1 * index}>
                <div className="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-[28px] p-8 md:p-10 hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)] transition-all duration-500 border border-gray-100/50 hover:border-blue-200/50 hover:-translate-y-2">
                  <div className="text-5xl md:text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{value.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#11111a]">{value.title}</h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full px-4 py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50">
        <div className="max-w-[1400px] mx-auto">
          <Reveal delay={0.2}>
            <div className="text-center mb-16">
              <div className="inline-block mb-5">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                  Our Journey
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-[#11111a]">
                A Timeline of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Growth & Innovation</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                From humble beginnings to global success
              </p>
            </div>
          </Reveal>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 hidden lg:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <Reveal key={index} delay={0.1 * index}>
                  <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="bg-white rounded-[24px] p-6 md:p-8 inline-block border border-gray-200 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-1">
                        <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">{item.year}</div>
                        <p className="text-gray-700 text-base md:text-lg">{item.event}</p>
                      </div>
                    </div>
                    <div className="hidden lg:block w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ring-4 ring-blue-100 relative z-10 shadow-lg" />
                    <div className="flex-1" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="w-full px-4 py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <Reveal delay={0.2}>
            <div className="text-center mb-16">
              <div className="inline-block mb-5">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                  Leadership Team
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-[#11111a]">
                Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Visionaries</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                The leaders driving our success and innovation
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {team.map((member, index) => (
              <Reveal key={index} delay={0.1 * index}>
                <div className="group bg-white rounded-[28px] overflow-hidden hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)] transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11111a]/80 via-[#11111a]/40 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-[#11111a]">{member.name}</h3>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-sm mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-[1400px] mx-auto">
          <Reveal delay={0.2}>
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-[32px] p-8 md:p-16 text-center relative overflow-hidden shadow-[0_20px_60px_-12px_rgba(0,0,0,0.25)]">
              <div className="absolute inset-0 bg-[url('/img/hero-slide-1.png')] bg-cover bg-center opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white">
                  Join Us on Our Journey
                </h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90">
                  Whether you're looking for a technology partner or want to join our team, we'd love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group bg-white text-blue-600 px-8 py-4 rounded-full text-base md:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2">
                    <span>WORK WITH US</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                  <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-base md:text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                    VIEW CAREERS
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

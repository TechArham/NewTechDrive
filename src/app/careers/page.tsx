'use client';

import { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

const benefits = [
  {
    icon: '💰',
    title: 'Competitive Salary',
    description: 'Industry-leading compensation packages with performance bonuses and equity options'
  },
  {
    icon: '🏥',
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, mental health support, and wellness programs'
  },
  {
    icon: '🏠',
    title: 'Remote Flexibility',
    description: 'Work from anywhere with flexible hours and home office support'
  },
  {
    icon: '📚',
    title: 'Learning & Growth',
    description: 'Continuous learning budget, certifications, conferences, and mentorship programs'
  },
  {
    icon: '🌴',
    title: 'Unlimited PTO',
    description: 'Take the time you need to recharge with our generous vacation policy'
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Family Support',
    description: 'Parental leave, childcare assistance, and family-friendly policies'
  },
  {
    icon: '🎯',
    title: 'Career Path',
    description: 'Clear growth trajectories with regular reviews and promotion opportunities'
  },
  {
    icon: '🎉',
    title: 'Team Culture',
    description: 'Regular team events, hackathons, and celebrations of success'
  }
];

const openings = [
  {
    id: 1,
    title: 'Senior Full Stack Engineer',
    department: 'Engineering',
    location: 'Remote / San Francisco, CA',
    type: 'Full-time',
    description: 'Join our engineering team to build scalable cloud-based solutions using React, Node.js, and AWS.',
    requirements: ['5+ years experience', 'React & Node.js', 'Cloud platforms (AWS/Azure)', 'Agile methodologies']
  },
  {
    id: 2,
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote / New York, NY',
    type: 'Full-time',
    description: 'Create beautiful, intuitive user experiences that delight our clients and their customers.',
    requirements: ['3+ years experience', 'Figma/Sketch', 'User research', 'Design systems']
  },
  {
    id: 3,
    title: 'Machine Learning Engineer',
    department: 'AI & Data',
    location: 'Remote / London, UK',
    type: 'Full-time',
    description: 'Build cutting-edge AI models and deploy ML solutions that solve real-world problems.',
    requirements: ['4+ years experience', 'Python, TensorFlow/PyTorch', 'ML algorithms', 'MLOps']
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote / Berlin, Germany',
    type: 'Full-time',
    description: 'Architect and maintain robust CI/CD pipelines and cloud infrastructure at scale.',
    requirements: ['4+ years experience', 'Kubernetes, Docker', 'AWS/GCP/Azure', 'Infrastructure as Code']
  },
  {
    id: 5,
    title: 'Technical Project Manager',
    department: 'Management',
    location: 'Remote / Toronto, Canada',
    type: 'Full-time',
    description: 'Lead cross-functional teams to deliver complex software projects on time and within budget.',
    requirements: ['5+ years PM experience', 'Agile/Scrum', 'Technical background', 'Stakeholder management']
  },
  {
    id: 6,
    title: 'QA Automation Engineer',
    department: 'Quality',
    location: 'Remote / Austin, TX',
    type: 'Full-time',
    description: 'Design and implement automated testing frameworks to ensure product quality and reliability.',
    requirements: ['3+ years experience', 'Selenium/Cypress', 'CI/CD', 'Test automation']
  }
];

const departments = ['ALL', 'Engineering', 'Design', 'AI & Data', 'Management', 'Quality'];

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState('ALL');
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const filteredOpenings = selectedDepartment === 'ALL'
    ? openings
    : openings.filter(job => job.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-white text-[#11111a]">
      <div className="w-full sticky top-0 z-50 px-4 pt-2 pb-2">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="w-full px-4 py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-100/40 to-pink-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tl from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <Reveal delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block mb-5">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                  Careers
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold mb-6 tracking-tight leading-[1.1]">
                Join Our Team of
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                  Innovators
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Build the future of technology with a team that values innovation, collaboration, and continuous growth.
                We're looking for talented individuals who are passionate about making a difference.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="w-full px-4 py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <Reveal delay={0.2}>
            <div className="text-center mb-16">
              <div className="inline-block mb-5">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                  Why Join Us
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-[#11111a]">
                We Invest In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Our People</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Because we know they're the key to our success
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <Reveal key={index} delay={0.1 * index}>
                <div className="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-[28px] p-6 md:p-8 hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)] transition-all duration-500 border border-gray-100/50 hover:border-blue-200/50 hover:-translate-y-2">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{benefit.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-[#11111a]">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{benefit.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="w-full px-4 py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50">
        <div className="max-w-[1400px] mx-auto">
          <Reveal delay={0.2}>
            <div className="text-center mb-16">
              <div className="inline-block mb-5">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                  Open Positions
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-[#11111a]">
                Find Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Opportunity</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Take your career to the next level with exciting roles
              </p>
            </div>
          </Reveal>

          {/* Department Filter */}
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {departments.map((department) => (
                <button
                  key={department}
                  onClick={() => setSelectedDepartment(department)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${selectedDepartment === department
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                >
                  {department}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredOpenings.map((job, index) => (
              <Reveal key={job.id} delay={0.1 * index}>
                <div className="bg-white rounded-[28px] overflow-hidden hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)] transition-all duration-300 border border-gray-200">
                  <button
                    onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                    className="w-full p-6 md:p-8 text-left flex items-center justify-between gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl md:text-2xl font-bold text-[#11111a]">{job.title}</h3>
                        <span className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-xs font-bold">
                          {job.department}
                        </span>
                        <span className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                          {job.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm">{job.location}</span>
                      </div>
                    </div>
                    <div className={`transition-transform duration-300 ${expandedJob === job.id ? 'rotate-180' : ''}`}>
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${expandedJob === job.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-gray-200 pt-6">
                      <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">{job.description}</p>

                      <div className="mb-6">
                        <h4 className="text-base md:text-lg font-bold mb-3 text-[#11111a]">Requirements:</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm md:text-base">
                              <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-base md:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2">
                        <span>APPLY NOW</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filteredOpenings.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-base md:text-lg">No openings found in this department.</p>
            </div>
          )}
        </div>
      </section>

      {/* Culture Section */}
      <section className="w-full px-4 py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <Reveal delay={0.2}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-5">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                    Our Culture
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-[#11111a]">
                  Where Everyone Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Thrive</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                  We believe in creating an environment where everyone can thrive. Our culture is built on trust,
                  transparency, and mutual respect. We celebrate diversity, encourage innovation, and support
                  each team member's personal and professional growth.
                </p>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                  From regular team events and hackathons to mentorship programs and learning opportunities,
                  we're committed to making work both meaningful and enjoyable.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl px-6 py-4 border border-blue-100">
                    <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">4.8/5</div>
                    <div className="text-gray-600 text-sm font-medium">Glassdoor Rating</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl px-6 py-4 border border-purple-100">
                    <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">95%</div>
                    <div className="text-gray-600 text-sm font-medium">Retention Rate</div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl px-6 py-4 border border-cyan-100">
                    <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">40+</div>
                    <div className="text-gray-600 text-sm font-medium">Nationalities</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-[24px] p-6 hover:shadow-lg transition-all duration-300 border border-blue-100">
                  <div className="text-4xl md:text-5xl mb-3">🚀</div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-[#11111a]">Fast Growth</h3>
                  <p className="text-gray-600 text-sm md:text-base">Accelerate your career with clear paths to advancement</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-[24px] p-6 hover:shadow-lg transition-all duration-300 border border-purple-100">
                  <div className="text-4xl md:text-5xl mb-3">🤝</div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-[#11111a]">Collaboration</h3>
                  <p className="text-gray-600 text-sm md:text-base">Work with talented people from around the world</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-[24px] p-6 hover:shadow-lg transition-all duration-300 border border-orange-100">
                  <div className="text-4xl md:text-5xl mb-3">💡</div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-[#11111a]">Innovation</h3>
                  <p className="text-gray-600 text-sm md:text-base">Your ideas matter and can become reality</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-[24px] p-6 hover:shadow-lg transition-all duration-300 border border-green-100">
                  <div className="text-4xl md:text-5xl mb-3">⚖️</div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-[#11111a]">Work-Life Balance</h3>
                  <p className="text-gray-600 text-sm md:text-base">Flexible schedules that respect your time</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-[1400px] mx-auto">
          <Reveal delay={0.2}>
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-[32px] p-8 md:p-16 text-center shadow-[0_20px_60px_-12px_rgba(0,0,0,0.25)]">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white">
                Don't See Your Role?
              </h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90">
                We're always looking for exceptional talent. Send us your resume and let's start a conversation
                about how you can contribute to our team.
              </p>
              <button className="group bg-white text-blue-600 px-8 py-4 rounded-full text-base md:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2">
                <span>SEND YOUR RESUME</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

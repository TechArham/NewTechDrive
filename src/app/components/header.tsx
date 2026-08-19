'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
    variant?: 'light' | 'dark';
}

export default function Header({ variant = 'light' }: HeaderProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isCompanyOpen, setIsCompanyOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

    // Timeout refs for delayed closing
    const servicesTimeoutRef = useState<NodeJS.Timeout | null>(null)[0];
    const companyTimeoutRef = useState<NodeJS.Timeout | null>(null)[0];

    const handleServicesEnter = () => {
        if (servicesTimeoutRef) clearTimeout(servicesTimeoutRef);
        setIsServicesOpen(true);
    };

    const handleServicesLeave = () => {
        const timeout = setTimeout(() => {
            setIsServicesOpen(false);
        }, 200);
        return timeout;
    };

    const handleCompanyEnter = () => {
        if (companyTimeoutRef) clearTimeout(companyTimeoutRef);
        setIsCompanyOpen(true);
    };

    const handleCompanyLeave = () => {
        const timeout = setTimeout(() => {
            setIsCompanyOpen(false);
        }, 200);
        return timeout;
    };

    const isDark = variant === 'dark';
    const bgClass = isDark ? 'bg-white/10 backdrop-blur-md border border-white/20' : 'bg-white shadow-sm';
    const textClass = isDark ? 'text-white' : 'text-[#4a4a5e]';
    const hoverClass = isDark ? 'hover:text-white/80' : 'hover:text-blue-600';
    const logoSrc = isDark ? '/img/white-logo.png' : '/img/logo.png';

    const services = [
        {
            name: 'Software Engineering',
            href: '/services#software',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            )
        },
        {
            name: 'Product Design',
            href: '/services#design',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            )
        },
        {
            name: 'Data Science & AI',
            href: '/services#ai',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            name: 'Consulting',
            href: '/services#consulting',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
    ];

    const company = [
        {
            name: 'About Us',
            href: '/about',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            name: 'Careers',
            href: '/careers',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            name: 'Contact Us',
            href: '/contact',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            name: 'Blog',
            href: '/blog',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
            )
        },
    ];

    return (
        <header className="w-full relative z-[100]">
            <div className={`w-full h-16 md:h-20 ${bgClass} rounded-full mt-2 md:mt-4 mx-auto max-w-[1400px] flex items-center justify-between px-4 md:px-8 transition-all duration-300`}>
                {/* Left side: Logo */}
                <div className="h-full flex items-center">
                    <Link href="/" className="hover:opacity-80 transition-opacity">
                        <Image src={logoSrc} alt="Tech Drive Logo" width={300} height={150} className="w-auto h-10 object-contain" priority />
                    </Link>
                </div>

                {/* Middle: Navigation Links (Desktop) */}
                <nav className={`hidden lg:flex items-center gap-8 ${textClass} font-medium text-[15px]`}>
                    {/* Services Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={handleServicesEnter}
                        onMouseLeave={handleServicesLeave}
                    >
                        <button className={`flex items-center gap-1.5 ${hoverClass} transition-colors`}>
                            Services
                            <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Services Dropdown Menu */}
                        {isServicesOpen && (
                            <div
                                className={`absolute top-full left-0 mt-3 w-64 ${isDark ? 'bg-white/10 backdrop-blur-xl border border-white/20' : 'bg-white border border-gray-100'} rounded-2xl shadow-xl py-2 overflow-hidden animate-fadeIn z-50`}
                                onMouseEnter={handleServicesEnter}
                                onMouseLeave={handleServicesLeave}
                            >
                                {services.map((service, index) => (
                                    <Link
                                        key={service.name}
                                        href={service.href}
                                        className={`flex items-center gap-3 px-4 py-3 ${textClass} ${isDark ? 'hover:bg-white/10' : 'hover:bg-blue-50'} transition-all duration-200 group cursor-pointer`}
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        <div className={`${isDark ? 'text-blue-300' : 'text-blue-600'} group-hover:scale-110 transition-transform`}>
                                            {service.icon}
                                        </div>
                                        <span className="text-sm font-medium">{service.name}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link href="/work" className={`${hoverClass} transition-colors`}>Work</Link>
                    <Link href="/about" className={`${hoverClass} transition-colors`}>About</Link>
                    <Link href="/careers" className={`${hoverClass} transition-colors`}>Careers</Link>

                    {/* Company Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={handleCompanyEnter}
                        onMouseLeave={handleCompanyLeave}
                    >
                        <button className={`flex items-center gap-1.5 ${hoverClass} transition-colors`}>
                            Company
                            <svg className={`w-4 h-4 transition-transform duration-200 ${isCompanyOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Company Dropdown Menu */}
                        {isCompanyOpen && (
                            <div
                                className={`absolute top-full right-0 mt-3 w-56 ${isDark ? 'bg-white/10 backdrop-blur-xl border border-white/20' : 'bg-white border border-gray-100'} rounded-2xl shadow-xl py-2 overflow-hidden animate-fadeIn z-50`}
                                onMouseEnter={handleCompanyEnter}
                                onMouseLeave={handleCompanyLeave}
                            >
                                {company.map((item, index) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`flex items-center gap-3 px-4 py-3 ${textClass} ${isDark ? 'hover:bg-white/10' : 'hover:bg-purple-50'} transition-all duration-200 group cursor-pointer`}
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        <div className={`${isDark ? 'text-purple-300' : 'text-purple-600'} group-hover:scale-110 transition-transform`}>
                                            {item.icon}
                                        </div>
                                        <span className="text-sm font-medium">{item.name}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </nav>

                {/* Right side: Actions (Desktop) */}
                <div className="hidden lg:flex items-center gap-3">
                    <button className="group relative bg-gradient-to-r cursor-pointer from-[#3b66f5] via-[#6d5ce7] to-[#8b5cf6] text-white px-6 py-2.5 rounded-full font-semibold text-[15px] hover:shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden">
                        <span className="relative z-10">Book a call</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#2952d4] to-[#7043d5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    <button className={`w-10 h-10 rounded-full ${isDark ? 'border border-white/30 text-white hover:bg-white/10' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'} flex items-center justify-center transition-all duration-300 hover:scale-105`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden items-center gap-3">
                    <button className="bg-gradient-to-r from-[#3b66f5] to-[#8b5cf6] text-white px-4 py-2 rounded-full font-semibold text-sm">
                        Book a call
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`p-2 cursor-pointer ${textClass} focus:outline-none hover:scale-110 transition-transform`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className={`absolute top-20 left-4 right-4 ${isDark ? 'bg-white/10 backdrop-blur-xl border border-white/20' : 'bg-white border border-gray-100'} rounded-3xl shadow-2xl lg:hidden py-4 px-4 flex flex-col gap-2 max-h-[calc(100vh-120px)] overflow-y-auto animate-slideDown`}>
                    {/* Services Section */}
                    <div className="flex flex-col">
                        <button
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className={`flex items-center justify-between w-full text-left ${textClass} font-semibold text-base py-3 px-4 rounded-xl ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-50'} transition-colors`}
                        >
                            <span>Services</span>
                            <svg className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {mobileServicesOpen && (
                            <div className="flex flex-col gap-1 pl-4 mt-1 animate-fadeIn">
                                {services.map((service) => (
                                    <Link
                                        key={service.name}
                                        href={service.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`flex items-center gap-3 ${textClass} text-sm py-3 px-4 rounded-xl ${isDark ? 'hover:bg-white/5' : 'hover:bg-blue-50'} transition-colors`}
                                    >
                                        <div className={`${isDark ? 'text-blue-300' : 'text-blue-600'}`}>
                                            {service.icon}
                                        </div>
                                        <span>{service.name}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Direct Links */}
                    <Link
                        href="/work"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`${textClass} font-semibold text-base py-3 px-4 rounded-xl ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-50'} transition-colors`}
                    >
                        Work
                    </Link>
                    <Link
                        href="/about"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`${textClass} font-semibold text-base py-3 px-4 rounded-xl ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-50'} transition-colors`}
                    >
                        About
                    </Link>
                    <Link
                        href="/careers"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`${textClass} font-semibold text-base py-3 px-4 rounded-xl ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-50'} transition-colors`}
                    >
                        Careers
                    </Link>

                    {/* Company Section */}
                    <div className="flex flex-col">
                        <button
                            onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                            className={`flex items-center justify-between w-full text-left ${textClass} font-semibold text-base py-3 px-4 rounded-xl ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-50'} transition-colors`}
                        >
                            <span>Company</span>
                            <svg className={`w-5 h-5 transition-transform duration-200 ${mobileCompanyOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {mobileCompanyOpen && (
                            <div className="flex flex-col gap-1 pl-4 mt-1 animate-fadeIn">
                                {company.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`flex items-center gap-3 ${textClass} text-sm py-3 px-4 rounded-xl ${isDark ? 'hover:bg-white/5' : 'hover:bg-purple-50'} transition-colors`}
                                    >
                                        <div className={`${isDark ? 'text-purple-300' : 'text-purple-600'}`}>
                                            {item.icon}
                                        </div>
                                        <span>{item.name}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Mobile CTA Section */}
                    <div className="pt-4 mt-2 border-t border-gray-200/50 flex flex-col gap-3">
                        <button className="w-full bg-gradient-to-r from-[#3b66f5] via-[#6d5ce7] to-[#8b5cf6] text-white px-6 py-3.5 rounded-full font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                            Book a call
                        </button>
                        <div className={`text-center text-xs ${isDark ? 'text-white/60' : 'text-gray-500'} pt-2`}>
                            Available Monday - Friday, 9AM - 6PM EST
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};
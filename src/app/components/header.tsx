'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="w-full relative z-50">
            <div className="w-full h-16 md:h-20 bg-white rounded-full mt-2 md:mt-4 mx-auto max-w-[1400px] flex items-center justify-between px-4 md:px-8 shadow-sm">
                {/* Left side: Logo */}
                <div className=" h-full flex items-center">
                    <Link href="/">
                        <Image src="/img/logo.png" alt="Logo" width={300} height={150} className="w-auto h-10  object-contain" priority />
                    </Link>
                </div>

                {/* Middle: Navigation Links (Desktop) */}
                <nav className="hidden lg:flex items-center gap-8 text-[#4a4a5e] font-medium text-[15px]">
                    <button className="flex items-center gap-1.5 hover:text-black transition-colors">
                        Services
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <a href="#" className="hover:text-black transition-colors">Work</a>
                    <a href="#" className="hover:text-black transition-colors">About</a>
                    <a href="#" className="hover:text-black transition-colors">Careers</a>
                    <button className="flex items-center gap-1.5 hover:text-black transition-colors">
                        Company
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </nav>

                {/* Right side: Actions (Desktop) */}
                <div className="hidden lg:flex items-center gap-4">
                    <button className="bg-gradient-to-r cursor-pointer from-[#3b66f5] to-[#8b5cf6] text-white px-6 py-2.5 rounded-xl font-medium text-[15px] hover:opacity-90 transition-opacity">
                        Book a call
                    </button>
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden items-center">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 cursor-pointer text-gray-600 focus:outline-none"
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
                <div className="absolute top-24 left-0 w-full bg-white rounded-2xl shadow-lg lg:hidden py-4 px-6 flex flex-col gap-4">
                    <button className="flex items-center justify-between w-full text-left text-[#4a4a5e] font-medium text-[15px] py-2">
                        Services
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <a href="#" className="text-[#4a4a5e] font-medium text-[15px] py-2">Work</a>
                    <a href="#" className="text-[#4a4a5e] font-medium text-[15px] py-2">About</a>
                    <a href="#" className="text-[#4a4a5e] font-medium text-[15px] py-2">Careers</a>
                    <button className="flex items-center justify-between w-full text-left text-[#4a4a5e] font-medium text-[15px] py-2">
                        Company
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                        <button className="w-full bg-gradient-to-r from-[#3b66f5] to-[#8b5cf6] text-white px-6 py-3 rounded-xl font-medium text-[15px]">
                            Book a call
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};
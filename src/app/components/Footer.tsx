import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0f1c] relative ">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r "></div>

      <div className="max-w-[1400px] mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">

          {/* Column 1: Brand & Info */}
          <div className="lg:col-span-2 flex flex-col pr-8">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image src="/img/white-logo.png" alt="Tech Drive Agency" width={180} height={60} className="w-auto h-10 object-contain" />
            </Link>

            <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-[250px]">
              Global technology, talent, and business services.
            </p>

            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-lg bg-[#151b2b] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#1e2536] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-lg bg-[#151b2b] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#1e2536] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 2: SERVICES */}
          <div className="flex flex-col">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-8">Services</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="#" className="text-zinc-400 text-sm hover:text-white transition-colors">AI & Automation</Link></li>
              <li><Link href="#" className="text-zinc-400 text-sm hover:text-white transition-colors">Software Development</Link></li>
              <li><Link href="#" className="text-zinc-400 text-sm hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link href="#" className="text-zinc-400 text-sm hover:text-white transition-colors">Staffing & Support</Link></li>
              <li><Link href="#" className="text-zinc-400 text-sm hover:text-white transition-colors">Design & Creative</Link></li>
              <li><Link href="#" className="text-zinc-400 text-sm hover:text-white transition-colors">View All Services</Link></li>
            </ul>
          </div>

          {/* Column 3: COMPANY */}
          <div className="flex flex-col">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-8">Company</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="#" className="text-zinc-400 text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-zinc-400 text-sm hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="#" className="text-zinc-400 text-sm hover:text-white transition-colors">Careers / Join Our Team</Link></li>
              <li><Link href="#" className="text-zinc-400 text-sm hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: RESOURCES */}
          <div className="flex flex-col">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-8">Resources</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="#" className="text-zinc-400 text-sm hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-zinc-400 text-sm hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="text-zinc-400 text-sm hover:text-white transition-colors">Industries</Link></li>
            </ul>
          </div>

          {/* Column 5: GET STARTED */}
          <div className="flex flex-col">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-8">Get Started</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="#" className="text-zinc-400 text-sm hover:text-white transition-colors">Book a Consultation</Link></li>
              <li><Link href="#" className="text-zinc-400 text-sm hover:text-white transition-colors">Request a Proposal</Link></li>
              <li><Link href="#" className="text-zinc-400 text-sm hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="mailto:hello@techdriveagency.com" className="text-zinc-400 text-sm hover:text-white transition-colors mt-2">hello@techdriveagency.com</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}

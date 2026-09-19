'use client';

import Header from '../components/header';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white text-[#11111a]">
      <div className="w-full sticky top-0 z-50 px-4 pt-2 pb-2">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="w-full px-4 py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50">
        <div className="max-w-[1400px] mx-auto">
          <Reveal delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block mb-5">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                  Legal
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold mb-6 tracking-tight leading-[1.1]">
                Terms & Conditions
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Last Updated: January 15, 2024
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full px-4 py-16 md:py-24">
        <div className="max-w-[900px] mx-auto">
          <Reveal delay={0.3}>
            <div className="prose prose-lg max-w-none">

              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Welcome to TechDrive. These Terms and Conditions ("Terms") govern your access to and use of our website, services, and products. By accessing or using our services, you agree to be bound by these Terms.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you do not agree to these Terms, please do not use our services. We reserve the right to modify these Terms at any time, and your continued use of our services constitutes acceptance of any changes.
                </p>
              </div>

              {/* Services */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">2. Our Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  TechDrive provides technology solutions including:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Software engineering and development services</li>
                  <li>Product design and user experience services</li>
                  <li>AI & automation solutions</li>
                  <li>2D & 3D interior design services</li>
                  <li>Related professional services</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Specific services are subject to separate agreements and statements of work.
                </p>
              </div>

              {/* User Accounts */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">3. User Accounts</h2>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">3.1 Account Creation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To access certain features, you may need to create an account. You agree to:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your information</li>
                  <li>Keep your password secure and confidential</li>
                  <li>Notify us immediately of unauthorized access</li>
                  <li>Be responsible for all activities under your account</li>
                </ul>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">3.2 Account Termination</h3>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to suspend or terminate your account if you violate these Terms or engage in fraudulent, abusive, or illegal activities.
                </p>
              </div>

              {/* Acceptable Use */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">4. Acceptable Use Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit harmful code, viruses, or malware</li>
                  <li>Attempt to gain unauthorized access to systems</li>
                  <li>Interfere with or disrupt our services</li>
                  <li>Use our services for any fraudulent purpose</li>
                  <li>Impersonate any person or entity</li>
                  <li>Harvest or collect user information</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">5. Intellectual Property Rights</h2>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">5.1 Our Content</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All content on our website, including text, graphics, logos, images, software, and code, is the property of TechDrive or its licensors and is protected by copyright, trademark, and other intellectual property laws.
                </p>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">5.2 Your Content</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You retain ownership of content you submit to us. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display your content for the purpose of providing our services.
                </p>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">5.3 Project Deliverables</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ownership of project deliverables is governed by specific service agreements and statements of work.
                </p>
              </div>

              {/* Payment Terms */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">6. Payment and Billing</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you purchase services from us:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>You agree to pay all fees as specified in your agreement</li>
                  <li>Payment is due according to the agreed schedule</li>
                  <li>Late payments may incur interest charges</li>
                  <li>We may suspend services for non-payment</li>
                  <li>All fees are non-refundable unless otherwise stated</li>
                  <li>You are responsible for any taxes</li>
                </ul>
              </div>

              {/* Warranties */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">7. Warranties and Disclaimers</h2>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">7.1 Service Warranties</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We warrant that our services will be performed in a professional and workmanlike manner consistent with industry standards.
                </p>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">7.2 Disclaimers</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  EXCEPT AS EXPRESSLY PROVIDED, OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">8. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>TechDrive shall not be liable for any indirect, incidental, special, or consequential damages</li>
                  <li>Our total liability shall not exceed the amount paid by you for services in the 12 months preceding the claim</li>
                  <li>This limitation applies regardless of the legal theory of liability</li>
                </ul>
              </div>

              {/* Indemnification */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">9. Indemnification</h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to indemnify and hold harmless TechDrive, its affiliates, and their respective officers, directors, employees, and agents from any claims, losses, damages, liabilities, and expenses arising from your use of our services or violation of these Terms.
                </p>
              </div>

              {/* Confidentiality */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">10. Confidentiality</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Both parties agree to keep confidential any proprietary information disclosed during the course of our relationship. Confidentiality obligations are detailed in separate non-disclosure agreements where applicable.
                </p>
              </div>

              {/* Termination */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">11. Termination</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Either party may terminate services according to the terms specified in service agreements. Upon termination:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Your right to use our services immediately ceases</li>
                  <li>You remain responsible for any outstanding fees</li>
                  <li>Provisions that should survive termination will continue to apply</li>
                </ul>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">12. Governing Law and Dispute Resolution</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms are governed by the laws of the State of California, USA, without regard to conflict of law principles. Any disputes shall be resolved through:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Good faith negotiation between the parties</li>
                  <li>Mediation, if negotiation fails</li>
                  <li>Binding arbitration or litigation in San Francisco, California</li>
                </ul>
              </div>

              {/* General Provisions */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">13. General Provisions</h2>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">13.1 Entire Agreement</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms, together with any service agreements, constitute the entire agreement between you and TechDrive.
                </p>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">13.2 Severability</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If any provision is found to be unenforceable, the remaining provisions will continue in full force.
                </p>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">13.3 No Waiver</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our failure to enforce any right or provision does not constitute a waiver of that right or provision.
                </p>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">13.4 Assignment</h3>
                <p className="text-gray-700 leading-relaxed">
                  You may not assign these Terms without our prior written consent. We may assign our rights and obligations without restriction.
                </p>
              </div>

              {/* Contact */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">14. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For questions about these Terms, please contact us:
                </p>
                <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-6 border border-gray-200">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@techdrive.com</p>
                  <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p className="text-gray-700"><strong>Address:</strong> TechDrive Inc., 123 Tech Street, San Francisco, CA 94105, USA</p>
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

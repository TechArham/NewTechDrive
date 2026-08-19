'use client';

import Header from '../components/header';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white text-[#11111a]">
      <div className="w-full sticky top-0 z-50 px-4 pt-2 pb-2">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="w-full px-4 py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-[1400px] mx-auto">
          <Reveal delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block mb-5">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                  Legal
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold mb-6 tracking-tight leading-[1.1]">
                Privacy Policy
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At TechDrive ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with the terms, please do not access our website or use our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">2. Information We Collect</h2>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">2.1 Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us, including:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Name and contact information (email address, phone number, mailing address)</li>
                  <li>Professional information (company name, job title, industry)</li>
                  <li>Account credentials (username, password)</li>
                  <li>Payment information (processed securely through third-party payment processors)</li>
                  <li>Communication preferences and feedback</li>
                </ul>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">2.2 Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you visit our website, we automatically collect certain information, including:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referral sources and clickstream data</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              {/* How We Use Your Information */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">3. How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Providing, maintaining, and improving our services</li>
                  <li>Processing transactions and sending related information</li>
                  <li>Responding to your inquiries and providing customer support</li>
                  <li>Sending marketing communications (with your consent)</li>
                  <li>Analyzing usage patterns and optimizing user experience</li>
                  <li>Detecting, preventing, and addressing technical issues and security threats</li>
                  <li>Complying with legal obligations and enforcing our terms</li>
                </ul>
              </div>

              {/* Information Sharing */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">4. Information Sharing and Disclosure</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>With Your Consent:</strong> When you explicitly agree to share information</li>
                </ul>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">5. Data Security</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information, including:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and audits</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection</li>
                  <li>ISO 27001:2013 certified processes</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">6. Your Rights and Choices</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Data Portability:</strong> Receive your data in a portable format</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Object:</strong> Object to certain processing of your information</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  To exercise these rights, please contact us at privacy@techdrive.com
                </p>
              </div>

              {/* Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">7. Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use cookies and similar technologies to enhance your experience. You can control cookies through your browser settings. For more information, please see our Cookie Policy.
                </p>
              </div>

              {/* International Transfers */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">8. International Data Transfers</h2>
                <p className="text-gray-700 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">9. Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </div>

              {/* Updates */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">10. Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
                </p>
              </div>

              {/* Contact */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">11. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions or concerns about this Privacy Policy, please contact us:
                </p>
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@techdrive.com</p>
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

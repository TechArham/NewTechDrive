'use client';

import Header from '../components/header';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white text-[#11111a]">
      <div className="w-full sticky top-0 z-50 px-4 pt-2 pb-2">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="w-full px-4 py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-orange-50">
        <div className="max-w-[1400px] mx-auto">
          <Reveal delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block mb-5">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                  Legal
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold mb-6 tracking-tight leading-[1.1]">
                Disclaimer
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

              {/* General Disclaimer */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">1. General Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The information provided on this website is for general informational purposes only. While TechDrive ("we," "our," or "us") strives to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Any reliance you place on such information is strictly at your own risk.
                </p>
              </div>

              {/* Website Content */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">2. Website Content</h2>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">2.1 No Professional Advice</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The content on our website is not intended to be a substitute for professional advice. You should:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Not rely solely on information from our website for business decisions</li>
                  <li>Seek independent professional advice before making important decisions</li>
                  <li>Consult with qualified experts for specific technical requirements</li>
                  <li>Verify information independently before acting upon it</li>
                </ul>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">2.2 Information Accuracy</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  While we make every effort to ensure accuracy:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Information may become outdated</li>
                  <li>Technical details may change without notice</li>
                  <li>Pricing and availability are subject to change</li>
                  <li>Case studies and examples are for illustration only</li>
                  <li>Results may vary based on individual circumstances</li>
                </ul>
              </div>

              {/* External Links */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">3. External Links Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our website may contain links to external websites that are not provided or maintained by TechDrive. Please note that:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>We have no control over the content of external sites</li>
                  <li>We do not endorse or assume responsibility for third-party content</li>
                  <li>Links are provided for convenience only</li>
                  <li>External sites have their own terms and privacy policies</li>
                  <li>We are not liable for any loss or damage arising from use of external sites</li>
                </ul>
                <p className="text-gray-700 leading-relaxed bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <strong>Caution:</strong> We recommend reviewing the terms and privacy policies of any external website you visit.
                </p>
              </div>

              {/* Service Disclaimer */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">4. Services Disclaimer</h2>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">4.1 No Guarantee of Results</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  While we strive to deliver high-quality services:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>We cannot guarantee specific outcomes or results</li>
                  <li>Past performance does not guarantee future results</li>
                  <li>Case studies represent specific situations and may not apply to all clients</li>
                  <li>Success depends on many factors beyond our control</li>
                  <li>Timeline estimates are approximate and subject to change</li>
                </ul>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">4.2 Technology Limitations</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Technology solutions have inherent limitations:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Software may contain bugs or errors</li>
                  <li>Systems may experience downtime or interruptions</li>
                  <li>Security cannot be absolutely guaranteed</li>
                  <li>Compatibility issues may arise</li>
                  <li>Performance depends on various factors including infrastructure</li>
                </ul>
              </div>

              {/* Testimonials */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">5. Testimonials and Case Studies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Regarding testimonials and case studies on our website:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>They represent individual experiences and opinions</li>
                  <li>Results shown are not typical and may vary</li>
                  <li>They should not be construed as guarantees</li>
                  <li>Your results may differ based on your circumstances</li>
                  <li>They are provided for informational purposes only</li>
                </ul>
              </div>

              {/* Technical Accuracy */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">6. Technical Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Technical information, specifications, and documentation provided on our website:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Are subject to change without notice</li>
                  <li>May contain technical inaccuracies or typographical errors</li>
                  <li>Should be verified before implementation</li>
                  <li>May not reflect the latest versions or updates</li>
                  <li>Are provided "as is" without warranty</li>
                </ul>
              </div>

              {/* Liability Limitations */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">7. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  TO THE FULLEST EXTENT PERMITTED BY LAW:
                </p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-4">
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>TechDrive shall not be liable for any direct, indirect, incidental, consequential, or punitive damages</li>
                    <li>This includes damages arising from errors, omissions, interruptions, or delays</li>
                    <li>We are not liable for loss of profits, data, or business opportunities</li>
                    <li>Our liability is limited regardless of the form of action</li>
                    <li>These limitations apply even if we have been advised of the possibility of such damages</li>
                  </ul>
                </div>
              </div>

              {/* Website Availability */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">8. Website Availability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Regarding website availability and functionality:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>We do not guarantee uninterrupted access to our website</li>
                  <li>The website may be temporarily unavailable due to maintenance</li>
                  <li>Technical issues may cause errors or delays</li>
                  <li>We may modify or discontinue features without notice</li>
                  <li>Access may be restricted in certain jurisdictions</li>
                </ul>
              </div>

              {/* Compliance */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">9. Compliance and Regulations</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Information on our website regarding compliance and regulations:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Is for general guidance only</li>
                  <li>Should not replace professional legal or compliance advice</li>
                  <li>May not reflect the latest regulatory changes</li>
                  <li>Varies by jurisdiction</li>
                  <li>You are responsible for ensuring your own compliance</li>
                </ul>
              </div>

              {/* Changes */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">10. Changes to This Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify this disclaimer at any time without prior notice. Changes become effective immediately upon posting. Your continued use of the website after changes constitutes acceptance of the modified disclaimer.
                </p>
              </div>

              {/* Jurisdiction */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">11. Jurisdiction</h2>
                <p className="text-gray-700 leading-relaxed">
                  This disclaimer is governed by the laws of the State of California, USA. Any disputes arising from the use of this website or reliance on its content shall be subject to the exclusive jurisdiction of the courts in San Francisco, California.
                </p>
              </div>

              {/* Contact */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">12. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions about this disclaimer, please contact us:
                </p>
                <div className="bg-gradient-to-br from-slate-50 to-orange-50 rounded-2xl p-6 border border-gray-200">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@techdrive.com</p>
                  <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p className="text-gray-700"><strong>Address:</strong> TechDrive Inc., 123 Tech Street, San Francisco, CA 94105, USA</p>
                </div>
              </div>

              {/* Acceptance */}
              <div className="mb-12">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold mb-3 text-[#11111a]">Acceptance of Terms</h3>
                  <p className="text-gray-700 leading-relaxed">
                    By using this website, you acknowledge that you have read, understood, and agreed to be bound by this disclaimer. If you do not agree with any part of this disclaimer, please do not use our website or services.
                  </p>
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

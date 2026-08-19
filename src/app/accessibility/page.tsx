'use client';

import Header from '../components/header';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-white text-[#11111a]">
      <div className="w-full sticky top-0 z-50 px-4 pt-2 pb-2">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="w-full px-4 py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-green-50">
        <div className="max-w-[1400px] mx-auto">
          <Reveal delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block mb-5">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                  Commitment to Inclusion
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold mb-6 tracking-tight leading-[1.1]">
                Accessibility Statement
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

              {/* Commitment */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">1. Our Commitment</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  TechDrive is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all of our users.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We believe that technology should be accessible to everyone, regardless of their abilities or circumstances. This commitment extends to all our digital properties, products, and services.
                </p>
              </div>

              {/* Standards */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">2. Conformance Standards</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our website aims to conform to the following accessibility standards:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="text-lg font-bold mb-2 text-[#11111a]">WCAG 2.1 Level AA</h3>
                    <p className="text-gray-700 text-sm">Web Content Accessibility Guidelines 2.1</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="text-lg font-bold mb-2 text-[#11111a]">Section 508</h3>
                    <p className="text-gray-700 text-sm">U.S. Federal Accessibility Standards</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="text-lg font-bold mb-2 text-[#11111a]">ADA Compliance</h3>
                    <p className="text-gray-700 text-sm">Americans with Disabilities Act</p>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-50 to-green-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="text-lg font-bold mb-2 text-[#11111a]">ARIA Standards</h3>
                    <p className="text-gray-700 text-sm">Accessible Rich Internet Applications</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">3. Accessibility Features</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our website includes the following accessibility features:
                </p>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">3.1 Navigation and Structure</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Logical heading structure for screen readers</li>
                  <li>Skip navigation links to main content</li>
                  <li>Consistent navigation across all pages</li>
                  <li>Clear and descriptive page titles</li>
                  <li>Breadcrumb navigation where applicable</li>
                </ul>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">3.2 Visual Design</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Sufficient color contrast ratios (minimum 4.5:1)</li>
                  <li>Text resizing up to 200% without loss of functionality</li>
                  <li>No information conveyed by color alone</li>
                  <li>Clear focus indicators for keyboard navigation</li>
                  <li>Responsive design for various screen sizes</li>
                </ul>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">3.3 Content</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Alternative text for all meaningful images</li>
                  <li>Transcripts for audio content</li>
                  <li>Captions for video content</li>
                  <li>Clear and simple language</li>
                  <li>Descriptive link text</li>
                </ul>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">3.4 Keyboard and Input</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Full keyboard accessibility</li>
                  <li>No keyboard traps</li>
                  <li>Logical tab order</li>
                  <li>Form labels and instructions</li>
                  <li>Error identification and suggestions</li>
                </ul>
              </div>

              {/* Assistive Technologies */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">4. Compatible Technologies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our website is designed to be compatible with the following assistive technologies:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-50 rounded-xl p-4 border border-gray-200">
                    <p className="text-gray-700 font-semibold mb-2">Screen Readers</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• JAWS</li>
                      <li>• NVDA</li>
                      <li>• VoiceOver</li>
                      <li>• TalkBack</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4 border border-gray-200">
                    <p className="text-gray-700 font-semibold mb-2">Input Methods</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Keyboard only</li>
                      <li>• Voice control</li>
                      <li>• Switch control</li>
                      <li>• Eye tracking</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4 border border-gray-200">
                    <p className="text-gray-700 font-semibold mb-2">Browser Tools</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Zoom functions</li>
                      <li>• High contrast</li>
                      <li>• Text-to-speech</li>
                      <li>• Reader modes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Testing */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">5. Testing and Evaluation</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We regularly test our website for accessibility using:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Automated accessibility testing tools (WAVE, axe, Lighthouse)</li>
                  <li>Manual testing with assistive technologies</li>
                  <li>Keyboard-only navigation testing</li>
                  <li>User testing with people with disabilities</li>
                  <li>Third-party accessibility audits</li>
                </ul>
              </div>

              {/* Known Issues */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">6. Known Limitations</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Despite our best efforts, some limitations may exist:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Third-party embedded content may not be fully accessible</li>
                  <li>Some legacy PDF documents may not meet current standards</li>
                  <li>Certain interactive features may have accessibility challenges</li>
                  <li>Some older browsers may not support all accessibility features</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We are actively working to address these limitations and improve accessibility across our entire digital presence.
                </p>
              </div>

              {/* Feedback */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">7. Feedback and Assistance</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers, please let us know:
                </p>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border border-gray-200 mb-6">
                  <h3 className="text-lg font-bold mb-3 text-[#11111a]">Contact Our Accessibility Team</h3>
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> accessibility@techdrive.com</p>
                  <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p className="text-gray-700 mb-4"><strong>Response Time:</strong> We aim to respond within 2 business days</p>
                  <p className="text-sm text-gray-600">Please include details about the accessibility issue, the page URL, and the assistive technology you're using.</p>
                </div>
              </div>

              {/* Alternative Access */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">8. Alternative Access Methods</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have difficulty accessing any content on our website, we can provide:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Content in alternative formats (large print, audio, accessible PDFs)</li>
                  <li>Personal assistance via phone or email</li>
                  <li>In-person meetings when possible</li>
                  <li>Screen sharing sessions for technical support</li>
                </ul>
              </div>

              {/* Training */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">9. Ongoing Commitment</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our commitment to accessibility includes:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Regular accessibility training for our development team</li>
                  <li>Accessibility considerations in all new features and updates</li>
                  <li>Continuous monitoring and improvement of accessibility</li>
                  <li>Partnership with accessibility consultants and advocates</li>
                  <li>Participation in accessibility community discussions</li>
                </ul>
              </div>

              {/* Formal Complaints */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">10. Formal Complaints Procedure</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you are not satisfied with our response to your accessibility concern:
                </p>
                <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Contact our accessibility team at accessibility@techdrive.com</li>
                  <li>If unresolved, escalate to our Chief Technology Officer</li>
                  <li>We will investigate and respond within 10 business days</li>
                  <li>You may also file a complaint with relevant accessibility authorities</li>
                </ol>
              </div>

              {/* Updates */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">11. Statement Updates</h2>
                <p className="text-gray-700 leading-relaxed">
                  This accessibility statement was created on January 15, 2024, and is reviewed annually. We update this statement as we make improvements to our website's accessibility or when standards and best practices evolve.
                </p>
              </div>

              {/* Additional Resources */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">12. Accessibility Resources</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For more information about web accessibility:
                </p>
                <div className="bg-slate-50 rounded-2xl p-6 border border-gray-200">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Web Accessibility Initiative (WAI):</strong> <a href="https://www.w3.org/WAI/" className="text-blue-600 hover:underline">w3.org/WAI/</a></li>
                    <li><strong>WCAG Guidelines:</strong> <a href="https://www.w3.org/WAI/WCAG21/quickref/" className="text-blue-600 hover:underline">w3.org/WAI/WCAG21/quickref/</a></li>
                    <li><strong>ADA.gov:</strong> <a href="https://www.ada.gov/" className="text-blue-600 hover:underline">ada.gov</a></li>
                    <li><strong>Section508.gov:</strong> <a href="https://www.section508.gov/" className="text-blue-600 hover:underline">section508.gov</a></li>
                  </ul>
                </div>
              </div>

              {/* Closing */}
              <div className="mb-12">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border-l-4 border-green-600">
                  <h3 className="text-xl font-bold mb-3 text-[#11111a]">Thank You</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Thank you for taking the time to learn about our accessibility commitment. We value your input and are dedicated to providing an inclusive digital experience for all users. Together, we can make technology accessible to everyone.
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

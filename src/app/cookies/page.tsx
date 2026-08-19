'use client';

import Header from '../components/header';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-white text-[#11111a]">
      <div className="w-full sticky top-0 z-50 px-4 pt-2 pb-2">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="w-full px-4 py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-cyan-50">
        <div className="max-w-[1400px] mx-auto">
          <Reveal delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block mb-5">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                  Legal
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold mb-6 tracking-tight leading-[1.1]">
                Cookie Policy
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">1. What Are Cookies?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This Cookie Policy explains how TechDrive ("we," "our," or "us") uses cookies and similar technologies on our website. By using our website, you consent to the use of cookies as described in this policy.
                </p>
              </div>

              {/* Types of Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">2. Types of Cookies We Use</h2>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">2.1 Essential Cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation, secure access to certain areas, and remembering your preferences.
                </p>
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-gray-200 mb-6">
                  <p className="text-gray-700 mb-2"><strong>Purpose:</strong> Website functionality</p>
                  <p className="text-gray-700 mb-2"><strong>Duration:</strong> Session or up to 1 year</p>
                  <p className="text-gray-700"><strong>Can be disabled:</strong> No (required for website operation)</p>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">2.2 Performance Cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These cookies collect information about how visitors use our website, such as which pages are visited most often. This data helps us improve website performance and user experience.
                </p>
                <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-6 border border-gray-200 mb-6">
                  <p className="text-gray-700 mb-2"><strong>Purpose:</strong> Analytics and performance monitoring</p>
                  <p className="text-gray-700 mb-2"><strong>Duration:</strong> Up to 2 years</p>
                  <p className="text-gray-700"><strong>Can be disabled:</strong> Yes</p>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">2.3 Functional Cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These cookies allow the website to remember choices you make (such as language preferences) and provide enhanced, personalized features.
                </p>
                <div className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl p-6 border border-gray-200 mb-6">
                  <p className="text-gray-700 mb-2"><strong>Purpose:</strong> Enhanced functionality and personalization</p>
                  <p className="text-gray-700 mb-2"><strong>Duration:</strong> Up to 1 year</p>
                  <p className="text-gray-700"><strong>Can be disabled:</strong> Yes</p>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">2.4 Targeting/Advertising Cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These cookies are used to deliver advertisements that are relevant to you and your interests. They may also be used to limit the number of times you see an advertisement.
                </p>
                <div className="bg-gradient-to-br from-slate-50 to-pink-50 rounded-2xl p-6 border border-gray-200 mb-6">
                  <p className="text-gray-700 mb-2"><strong>Purpose:</strong> Targeted advertising and marketing</p>
                  <p className="text-gray-700 mb-2"><strong>Duration:</strong> Up to 2 years</p>
                  <p className="text-gray-700"><strong>Can be disabled:</strong> Yes</p>
                </div>
              </div>

              {/* Cookie Table */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">3. Specific Cookies We Use</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 mb-6">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-50 to-purple-50">
                        <th className="border border-gray-300 p-3 text-left font-semibold text-[#11111a]">Cookie Name</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-[#11111a]">Purpose</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-[#11111a]">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-700">_session_id</td>
                        <td className="border border-gray-300 p-3 text-gray-700">Maintains user session</td>
                        <td className="border border-gray-300 p-3 text-gray-700">Session</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-gray-300 p-3 text-gray-700">_preferences</td>
                        <td className="border border-gray-300 p-3 text-gray-700">Stores user preferences</td>
                        <td className="border border-gray-300 p-3 text-gray-700">1 year</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-700">_ga</td>
                        <td className="border border-gray-300 p-3 text-gray-700">Google Analytics tracking</td>
                        <td className="border border-gray-300 p-3 text-gray-700">2 years</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-gray-300 p-3 text-gray-700">_gid</td>
                        <td className="border border-gray-300 p-3 text-gray-700">Google Analytics tracking</td>
                        <td className="border border-gray-300 p-3 text-gray-700">24 hours</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-gray-700">_fbp</td>
                        <td className="border border-gray-300 p-3 text-gray-700">Facebook Pixel tracking</td>
                        <td className="border border-gray-300 p-3 text-gray-700">3 months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Third-Party Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">4. Third-Party Cookies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use third-party services that may set cookies on your device:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li><strong>Google Analytics:</strong> For website traffic analysis</li>
                  <li><strong>Facebook Pixel:</strong> For advertising and conversion tracking</li>
                  <li><strong>LinkedIn Insight Tag:</strong> For professional audience analytics</li>
                  <li><strong>HubSpot:</strong> For marketing automation and CRM</li>
                  <li><strong>Hotjar:</strong> For user behavior analysis and feedback</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  These third parties have their own privacy policies governing their use of cookies.
                </p>
              </div>

              {/* Managing Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">5. How to Manage Cookies</h2>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">5.1 Browser Settings</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>View and delete existing cookies</li>
                  <li>Block all cookies</li>
                  <li>Block third-party cookies only</li>
                  <li>Receive notification before cookies are set</li>
                </ul>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">5.2 Browser-Specific Instructions</h3>
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-gray-200 mb-6">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies</li>
                    <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies</li>
                    <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                    <li><strong>Edge:</strong> Settings → Privacy → Cookies</li>
                  </ul>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#11111a]">5.3 Opt-Out Tools</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You can opt out of certain cookies using these tools:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
                  <li><strong>NAI Opt-Out:</strong> <a href="http://optout.networkadvertising.org/" className="text-blue-600 hover:underline">Network Advertising Initiative</a></li>
                  <li><strong>DAA Opt-Out:</strong> <a href="http://optout.aboutads.info/" className="text-blue-600 hover:underline">Digital Advertising Alliance</a></li>
                </ul>

                <p className="text-gray-700 leading-relaxed bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <strong>Note:</strong> Disabling cookies may affect the functionality of our website and limit your ability to use certain features.
                </p>
              </div>

              {/* Do Not Track */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">6. Do Not Track Signals</h2>
                <p className="text-gray-700 leading-relaxed">
                  Some browsers have a "Do Not Track" feature that signals to websites you visit that you do not want to have your online activity tracked. Currently, there is no industry standard for how to respond to Do Not Track signals, and we do not respond to such signals at this time.
                </p>
              </div>

              {/* Updates */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">7. Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for legal reasons. The "Last Updated" date at the top of this page indicates when this policy was last revised. We encourage you to review this policy periodically.
                </p>
              </div>

              {/* Contact */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#11111a]">8. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions about our use of cookies, please contact us:
                </p>
                <div className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl p-6 border border-gray-200">
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

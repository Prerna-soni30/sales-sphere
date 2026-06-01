import ContactForm from "@/components/contact-form";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Features />
        
        {/* Solutions Section with Icons */}
        <section id="solutions" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Solutions</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">Everything you need to transform your sales process</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Sales Automation</h3>
                <p className="text-gray-600 dark:text-gray-400">Automate your sales process and close deals faster</p>
              </div>
              <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6m12 6v-6M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Analytics & Insights</h3>
                <p className="text-gray-600 dark:text-gray-400">Real-time data and predictive analytics</p>
              </div>
              <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Enterprise Security</h3>
                <p className="text-gray-600 dark:text-gray-400">Bank-grade security for your data</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">No hidden fees. No surprises. Cancel anytime.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-8 text-center hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Starter</h3>
                <p className="text-3xl font-bold text-blue-600 mb-6">$29<span className="text-sm font-normal text-gray-600">/mo</span></p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="text-sm text-gray-600 dark:text-gray-400 flex items-center"><span className="text-green-500 mr-2">✓</span> Up to 100 leads</li>
                  <li className="text-sm text-gray-600 dark:text-gray-400 flex items-center"><span className="text-green-500 mr-2">✓</span> Basic reporting</li>
                  <li className="text-sm text-gray-600 dark:text-gray-400 flex items-center"><span className="text-green-500 mr-2">✓</span> Email support</li>
                </ul>
                <button className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">Get Started</button>
              </div>
              <div className="border-2 border-blue-600 rounded-xl p-8 text-center relative bg-white dark:bg-gray-800 shadow-2xl scale-105">
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 text-sm rounded-full font-medium">Popular</span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Professional</h3>
                <p className="text-4xl font-bold text-blue-600 mb-6">$79<span className="text-lg font-normal text-gray-600">/mo</span></p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="text-sm text-gray-600 dark:text-gray-400 flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited leads</li>
                  <li className="text-sm text-gray-600 dark:text-gray-400 flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced analytics</li>
                  <li className="text-sm text-gray-600 dark:text-gray-400 flex items-center"><span className="text-green-500 mr-2">✓</span> Priority support</li>
                  <li className="text-sm text-gray-600 dark:text-gray-400 flex items-center"><span className="text-green-500 mr-2">✓</span> API access</li>
                </ul>
                <button className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">Get Started</button>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-8 text-center hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Enterprise</h3>
                <p className="text-3xl font-bold text-blue-600 mb-6">$199<span className="text-sm font-normal text-gray-600">/mo</span></p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="text-sm text-gray-600 dark:text-gray-400 flex items-center"><span className="text-green-500 mr-2">✓</span> Everything in Pro</li>
                  <li className="text-sm text-gray-600 dark:text-gray-400 flex items-center"><span className="text-green-500 mr-2">✓</span> Custom integrations</li>
                  <li className="text-sm text-gray-600 dark:text-gray-400 flex items-center"><span className="text-green-500 mr-2">✓</span> Dedicated account manager</li>
                  <li className="text-sm text-gray-600 dark:text-gray-400 flex items-center"><span className="text-green-500 mr-2">✓</span> SLA guarantee</li>
                </ul>
                <button className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">Contact Sales</button>
              </div>
            </div>
          </div>
        </section>

        {/* Customers Section */}
        <section id="customers" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Trusted By</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">Join 10,000+ companies growing with SalesSphere</p>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              <div className="relative h-12 w-32">
                <Image src="/trusted-1.jpg" alt="Trusted company 1" fill className="object-contain dark:invert" sizes="128px" />
              </div>
              <div className="relative h-12 w-32">
                <Image src="/trusted-2.jpg" alt="Trusted company 2" fill className="object-contain dark:invert" sizes="128px" />
              </div>
              <div className="relative h-12 w-32">
                <Image src="/trusted-3.jpg" alt="Trusted company 3" fill className="object-contain dark:invert" sizes="128px" />
              </div>
              <div className="relative h-12 w-32">
                <Image src="/trusted-4.jpg" alt="Trusted company 4" fill className="object-contain dark:invert" sizes="128px" />
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Resources</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">Everything you need to get the most out of SalesSphere</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <a href="/documentation" className="group p-8 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-all">
                <span className="text-4xl mb-4 block">📖</span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 transition-colors">Documentation</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Detailed guides and API references</p>
                <span className="text-sm text-blue-600">Learn more →</span>
              </a>
              <a href="/help-center" className="group p-8 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-all">
                <span className="text-4xl mb-4 block">🎓</span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 transition-colors">Help Center</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Find answers to common questions</p>
                <span className="text-sm text-blue-600">Visit Help Center →</span>
              </a>
              <a href="/community" className="group p-8 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-all">
                <span className="text-4xl mb-4 block">💬</span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 transition-colors">Community</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Join our user community forum</p>
                <span className="text-sm text-blue-600">Join Community →</span>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">About SalesSphere CRM</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  We're on a mission to help businesses grow by providing the best customer relationship management tools.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Founded in 2024, SalesSphere has helped over 10,000 companies streamline their sales processes and increase revenue.
                </p>
                <div className="flex gap-4">
                  <a href="/careers" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium">Join Our Team</a>
                  <a href="/about" className="inline-block px-8 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors font-medium">Learn More</a>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-48 h-48 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9h14M5 15h14M11 3l4 4-4 4M11 19l4-4-4-4" /></svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Contact Us</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">Have questions? We're here to help.</p>
            <div className="max-w-lg mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
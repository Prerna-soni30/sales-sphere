import Header from "@/components/header";
import Footer from "@/components/footer";

export default function FreeTrialPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Start Your Free Trial</h1>
            <p className="text-xl text-blue-100 mb-8">
              Get 14 days free access to all SalesSphere CRM features. No credit card required.
            </p>
          </div>
        </div>
        <div className="py-16">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">What's included</h2>
                  <ul className="space-y-3">
                    {[
                      "Full access to all CRM features",
                      "Up to 100 leads and contacts",
                      "Advanced analytics and reporting",
                      "Email and chat support",
                      "Team collaboration tools",
                      "API access for integrations",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Get started now</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    No credit card required. Start your 14-day free trial today.
                  </p>
                  <a
                    href="/signup"
                    className="inline-block w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-center font-medium"
                  >
                    Start Free Trial
                  </a>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                    Already have an account? <a href="/login" className="text-blue-600 hover:text-blue-500">Sign in</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

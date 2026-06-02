'use client';

import { useState, useEffect } from 'react';

export default function Features() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const features = [
    { 
      icon: "⚡", 
      title: "Lightning Fast Automation", 
      desc: "Automate repetitive tasks and workflows. Save 20+ hours per week with intelligent automation.",
      gradient: "from-yellow-400 to-orange-500"
    },
    { 
      icon: "🎯", 
      title: "AI-Powered Lead Scoring", 
      desc: "Machine learning algorithms prioritize your leads. Focus on prospects most likely to convert.",
      gradient: "from-blue-400 to-indigo-500"
    },
    { 
      icon: "📊", 
      title: "Real-Time Analytics", 
      desc: "Live dashboards and predictive insights. Make data-driven decisions with confidence.",
      gradient: "from-green-400 to-emerald-500"
    },
    { 
      icon: "🔄", 
      title: "Seamless Integrations", 
      desc: "Connect with 100+ tools you already use. From Slack to Salesforce, we've got you covered.",
      gradient: "from-purple-400 to-pink-500"
    },
    { 
      icon: "🔒", 
      title: "Enterprise-Grade Security", 
      desc: "Bank-level encryption and SOC 2 compliance. Your data is protected with industry-leading security.",
      gradient: "from-red-400 to-rose-500"
    },
    { 
      icon: "🚀", 
      title: "Team Collaboration", 
      desc: "Real-time updates, shared pipelines, and communication tools. Work together seamlessly.",
      gradient: "from-cyan-400 to-blue-500"
    },
  ];

  useEffect(() => {
    features.forEach((_, i) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, i]);
      }, i * 100);
    });
  }, []);

  return (
    <section id="features" className='relative py-20 sm:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 overflow-hidden'>
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl'></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16 sm:mb-20'>
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 mb-6'>
            <span className='text-sm font-semibold text-blue-600 dark:text-blue-400'>Features</span>
          </div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4'>
            Everything you need to
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'> crush your sales targets</span>
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
            Powerful features designed to help you sell smarter, not harder.
          </p>
        </div>

        <div className='grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {features.map((f, i) => (
            <div 
              key={i} 
              className={`group relative p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 ${visibleItems.includes(i) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className='absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent dark:from-gray-700/50 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl'></div>
              
              <div className='relative'>
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${f.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className='text-2xl'>{f.icon}</span>
                </div>
                
                <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                  {f.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  {f.desc}
                </p>

                <div className='mt-6 flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  Learn more
                  <svg className='ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

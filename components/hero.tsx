'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10'></div>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]'></div>
      
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32'>
        <div className='mx-auto max-w-4xl text-center'>
          <div className={`mb-6 inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-sm transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className='flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse'></span>
            <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
              Trusted by 10,000+ businesses worldwide
            </span>
          </div>

          <h1 className={`mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className='text-gray-900 dark:text-gray-100'>
              Transform Your Sales with
            </span>
            <br />
            <span className='bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient'>
              Intelligent CRM
            </span>
          </h1>

          <p className={`mb-10 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Supercharge your sales process with AI-driven insights, automated workflows, and seamless team collaboration. Close deals faster than ever.
          </p>

          <div className={`flex flex-col sm:flex-row justify-center gap-4 mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a href='/signup' className='group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-0.5'>
              Start Free Trial
              <svg className='ml-2 -mr-1 w-5 h-5 transition-transform group-hover:translate-x-1' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clipRule='evenodd' />
              </svg>
            </a>
            <a href='/login' className='group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg transition-all duration-200'>
              <svg className='mr-2 w-5 h-5 text-blue-600' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z' clipRule='evenodd' />
              </svg>
              Watch Demo
            </a>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className='absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20 animate-pulse'></div>
            <div className='relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden'>
              <div className='absolute top-0 left-0 right-0 h-12 bg-gray-100/80 dark:bg-gray-700/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-600/50 flex items-center px-4 space-x-2'>
                <div className='flex space-x-1.5'>
                  <div className='w-3 h-3 rounded-full bg-red-400'></div>
                  <div className='w-3 h-3 rounded-full bg-yellow-400'></div>
                  <div className='w-3 h-3 rounded-full bg-green-400'></div>
                </div>
              </div>
              <div className='pt-12 pb-4'>
                <Image src='/hero-dashboard.jpg' alt='CRM Dashboard' width={1200} height={700} className='w-full h-auto rounded-b-2xl' loading="eager" />
              </div>
            </div>
          </div>

          <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className='text-center p-4'>
              <div className='text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1'>10K+</div>
              <div className='text-sm text-gray-600 dark:text-gray-400'>Active Users</div>
            </div>
            <div className='text-center p-4'>
              <div className='text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1'>98%</div>
              <div className='text-sm text-gray-600 dark:text-gray-400'>Satisfaction</div>
            </div>
            <div className='text-center p-4'>
              <div className='text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1'>50M+</div>
              <div className='text-sm text-gray-600 dark:text-gray-400'>Deals Closed</div>
            </div>
            <div className='text-center p-4'>
              <div className='text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1'>24/7</div>
              <div className='text-sm text-gray-600 dark:text-gray-400'>Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

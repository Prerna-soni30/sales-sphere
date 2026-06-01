'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className='relative bg-gray-50 dark:bg-gray-900 overflow-hidden'>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
        <div className='mx-auto max-w-2xl text-center'>
          <h1 className='mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl'>
            Grow your business with SalesSphere CRM.
          </h1>
          <p className='mb-6 text-lg text-gray-600 dark:text-gray-400'>
            Manage leads, sales pipelines, customers, and analytics in one place.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <a href='/signup' className='inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600'>
              Start Free Trial
            </a>
            <a href='/login' className='inline-block px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700'>
              Watch Demo
            </a>
          </div>
          <div className='mt-12 flex justify-center'>
            <Image src='/hero-dashboard.jpg' alt='CRM Dashboard' width={600} height={400} className='rounded-lg shadow-lg' />
          </div>
        </div>
      </div>
    </section>
  );
}

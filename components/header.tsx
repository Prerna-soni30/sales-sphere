"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          <div className='flex items-center flex-shrink-0'>
            <Link href='/' onClick={() => setMobileMenuOpen(false)}>
              <span className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                SalesSphere
              </span>
            </Link>
          </div>

          <nav className='hidden md:flex md:items-center md:space-x-8'>
            <Link href='/#features' className='text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors relative group'>
              Features
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300'></span>
            </Link>
            <Link href='/#pricing' className='text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors relative group'>
              Pricing
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300'></span>
            </Link>
          </nav>

          <div className='hidden md:flex md:items-center md:space-x-3'>
            <Link href='/login' className='text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors px-4 py-2'>
              Login
            </Link>
            <Link href='/signup' className='px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 text-sm'>
              Sign Up
            </Link>
            <Link href='/free-trial' className='px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 font-medium shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 text-sm'>
              Free Trial
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='md:hidden text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            ) : (
              <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className='md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50'>
          <div className='px-4 pt-2 pb-4 space-y-1'>
            <Link href='/#features' onClick={() => setMobileMenuOpen(false)} className='block py-3 px-3 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors'>
              Features
            </Link>
            <Link href='/#pricing' onClick={() => setMobileMenuOpen(false)} className='block py-3 px-3 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors'>
              Pricing
            </Link>
            <div className='pt-3 space-y-2 border-t border-gray-200 dark:border-gray-700'>
              <Link href='/login' onClick={() => setMobileMenuOpen(false)} className='block py-3 px-3 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors'>
                Login
              </Link>
              <Link href='/signup' onClick={() => setMobileMenuOpen(false)} className='block px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-center font-medium'>
                Sign Up
              </Link>
              <Link href='/free-trial' onClick={() => setMobileMenuOpen(false)} className='block px-4 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg text-center font-medium'>
                Free Trial
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

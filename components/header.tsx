"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-white border-b-2 border-gray-200 dark:bg-gray-900 dark:border-gray-700 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          <div className='flex items-center flex-shrink-0'>
            <Link href='/' onClick={() => setMobileMenuOpen(false)}>
              <span className='text-xl font-bold'>
                <span className='text-blue-600'>Sales</span>
                <span className='text-gray-800 dark:text-gray-100'>Sphere</span>
              </span>
            </Link>
          </div>

          <div className='hidden md:flex md:items-center md:space-x-6'>
            <Link href='/' className='text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'>Home</Link>
            <Link href='/#features' className='text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'>Features</Link>
            <Link href='/#solutions' className='text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'>Solutions</Link>
            <Link href='/#pricing' className='text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'>Pricing</Link>
            <Link href='/#customers' className='text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'>Customers</Link>
            <Link href='/#resources' className='text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'>Resources</Link>
            <Link href='/#about' className='text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'>About Us</Link>
            <Link href='/#contact' className='text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'>Contact</Link>
          </div>

          <div className='hidden md:flex md:items-center md:space-x-3'>
            <Link href='/login' className='text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'>Login</Link>
            <Link href='/signup' className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'>Sign Up</Link>
            <Link href='/free-trial' className='px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600'>Free Trial</Link>
          </div>

          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 p-2'
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
      </div>

      {mobileMenuOpen && (
        <div className='md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700'>
          <div className='px-4 pt-2 pb-4 space-y-2'>
            <Link href='/' onClick={() => setMobileMenuOpen(false)} className='block py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'>Home</Link>
            <Link href='/#features' onClick={() => setMobileMenuOpen(false)} className='block py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'>Features</Link>
            <Link href='/#solutions' onClick={() => setMobileMenuOpen(false)} className='block py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'>Solutions</Link>
            <Link href='/#pricing' onClick={() => setMobileMenuOpen(false)} className='block py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'>Pricing</Link>
            <Link href='/#customers' onClick={() => setMobileMenuOpen(false)} className='block py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'>Customers</Link>
            <Link href='/#resources' onClick={() => setMobileMenuOpen(false)} className='block py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'>Resources</Link>
            <Link href='/#about' onClick={() => setMobileMenuOpen(false)} className='block py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'>About Us</Link>
            <Link href='/#contact' onClick={() => setMobileMenuOpen(false)} className='block py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'>Contact</Link>
            <div className='pt-3 space-y-2 border-t border-gray-200 dark:border-gray-700'>
              <Link href='/login' onClick={() => setMobileMenuOpen(false)} className='block py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'>Login</Link>
              <Link href='/signup' onClick={() => setMobileMenuOpen(false)} className='block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-center'>Sign Up</Link>
              <Link href='/free-trial' onClick={() => setMobileMenuOpen(false)} className='block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-center'>Free Trial</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
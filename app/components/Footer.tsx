"use client";

import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-2 fixed bottom-0 w-full md:relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-0 md:mb-0">
            <h1 className="text-2xl font-semibold">
              Dev<span className="text-primary">Hubs</span>
            </h1>
          </div>
        </div>
        <div className="py-5 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
          <div className="mt-4 flex items-center justify-center md:mt-0">
            <div className="flex space-x-8">
              <Link href="/" className="text-sm text-muted-foreground hover:text-gray-600">
                Home
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">
                Terms
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">
                About
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">
                Contact
              </Link>
            </div>
          </div>
        </div>        
      </div>
    </footer>
  );
}

export default Footer;
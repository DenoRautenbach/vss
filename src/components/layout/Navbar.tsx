"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ChevronsUpDown } from 'lucide-react';
import { SUBJECTS } from '@/lib/data';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Sport", href: "/sport" },
  { name: "Alumni", href: "/alumni" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubjectsOpen, setIsSubjectsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu and dropdowns when pathname changes (route changes)
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSubjectsOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo area */}
          <Link href="/" className="flex-shrink-0 flex items-center cursor-pointer">
            <div className="w-10 h-10 bg-blue-900 text-white flex items-center justify-center rounded-lg font-bold text-xl mr-3">
              HS
            </div>
            <span className="font-bold text-xl text-slate-800 tracking-tight hidden sm:block">Westwood High</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-md text-[15px] font-medium transition-colors ${
                  pathname === link.href 
                    ? "text-blue-900 bg-blue-50" 
                    : "text-slate-700 hover:text-blue-900 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Subjects Dropdown */}
            <div className="relative ml-2">
              <button
                onClick={() => setIsSubjectsOpen(!isSubjectsOpen)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md text-[15px] font-medium text-slate-800 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
              >
                Subjects
                <ChevronsUpDown className="w-4 h-4 text-slate-500" />
              </button>

              {/* Dropdown Menu */}
              {isSubjectsOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsSubjectsOpen(false)}></div>
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-100 z-50 py-1">
                    {SUBJECTS.map((subject) => (
                      <Link
                        key={subject}
                        href="/subjects"
                        className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                          pathname === '/subjects' 
                            ? 'text-blue-900 bg-blue-50 font-medium' 
                            : 'text-slate-700 hover:bg-blue-50 hover:text-blue-900'
                        }`}
                      >
                        {subject}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? "text-blue-900 bg-blue-50"
                    : "text-slate-700 hover:text-blue-900 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="border-t border-gray-100 mt-2 pt-2">
              <button
                onClick={() => setIsSubjectsOpen(!isSubjectsOpen)}
                className="flex items-center justify-between w-full px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
              >
                Subjects
                <ChevronDown className={`w-5 h-5 transition-transform ${isSubjectsOpen ? "rotate-180" : ""}`} />
              </button>
              
              {isSubjectsOpen && (
                <div className="pl-6 pr-3 py-2 space-y-1 bg-slate-50 rounded-b-md">
                  <Link href="/subjects" className="font-semibold block w-full text-left px-3 py-2 text-sm text-blue-900">
                    All Subjects
                  </Link>
                  {SUBJECTS.map((subject) => (
                    <Link
                      key={subject}
                      href="/subjects"
                      className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-900"
                    >
                      {subject}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

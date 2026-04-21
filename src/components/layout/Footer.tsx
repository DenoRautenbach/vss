import React from 'react';
import Link from 'next/link';

export const Footer = () => (
  <footer className="bg-slate-900 py-12 text-slate-400 border-t border-slate-800 mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded font-bold mr-2">
            HS
          </div>
          <span className="font-bold text-lg text-white">Villiersdorp Secondary School</span>
        </div>
        <p className="text-sm max-w-sm">
          Empowering students to achieve their highest potential in a changing world.
        </p>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li><button className="hover:text-white transition-colors">Admissions</button></li>
          <li><button className="hover:text-white transition-colors">Calendar</button></li>
          <li><button className="hover:text-white transition-colors">Parent Portal</button></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">Contact</h4>
        <ul className="space-y-2 text-sm">
          <li>123 Education Lane</li>
          <li>Cityville, ST 12345</li>
          <li>(555) 123-4567</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
      &copy; {new Date().getFullYear()} Villiersdorp Secondary School. All rights reserved.
    </div>
  </footer>
);

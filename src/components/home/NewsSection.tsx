import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { NEWS_ITEMS } from '@/lib/data';

export const NewsSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Latest News & Events</h2>
            <p className="mt-3 text-lg text-slate-600">Stay updated with what's happening at Westwood.</p>
          </div>
          <button className="hidden md:flex items-center text-blue-700 font-semibold hover:text-blue-900 group">
            View all news
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group cursor-pointer">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-slate-500 mb-3 gap-2">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 line-clamp-3 mb-4">
                  {item.excerpt}
                </p>
                <button className="text-blue-700 font-medium text-sm flex items-center hover:underline">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <button className="mt-10 w-full md:hidden py-3 flex justify-center items-center text-blue-700 font-semibold border border-blue-200 rounded-lg hover:bg-blue-50">
          View all news
        </button>
      </div>
    </section>
  );
};

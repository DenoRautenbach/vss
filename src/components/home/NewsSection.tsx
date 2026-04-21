import React from 'react';
import Script from 'next/script';
import { ArrowRight } from 'lucide-react';

export const NewsSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Latest News & Events</h2>
            <p className="mt-3 text-lg text-slate-600">Stay updated with what&apos;s happening at Villiersdorp Secondary School.</p>
          </div>
          <button className="hidden md:flex items-center text-blue-700 font-semibold hover:text-blue-900 group">
            View all news
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* @ts-ignore */}
        <rssapp-list id="bOixWWbgEkHxw7rx"></rssapp-list>
        <Script src="https://widget.rss.app/v1/list.js" strategy="lazyOnload" />

        <button className="mt-10 w-full md:hidden py-3 flex justify-center items-center text-blue-700 font-semibold border border-blue-200 rounded-lg hover:bg-blue-50">
          View all news
        </button>
      </div>
    </section>
  );
};

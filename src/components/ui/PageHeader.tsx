import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  icon: LucideIcon;
  description: string;
}

export const PageHeader = ({ title, icon: Icon, description }: PageHeaderProps) => (
  <div className="bg-slate-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center justify-center p-3 bg-blue-800 rounded-2xl mb-6">
        <Icon className="w-10 h-10 text-blue-200" />
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight mb-4">{title}</h1>
      <p className="text-xl text-slate-300 max-w-2xl mx-auto">{description}</p>
    </div>
  </div>
);

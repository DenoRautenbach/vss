import React from 'react';
import { BookOpen } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { SUBJECTS } from '@/lib/data';

export default function SubjectsPage() {
  return (
    <div>
      <PageHeader 
        title="Academic Departments" 
        icon={BookOpen} 
        description="Explore our diverse curriculum designed to challenge and inspire students across all disciplines." 
      />
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUBJECTS.map((subject) => (
            <div key={subject} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer">
              <h3 className="font-bold text-lg text-slate-800 mb-2">{subject}</h3>
              <p className="text-sm text-slate-500">View courses, faculty, and curriculum requirements.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

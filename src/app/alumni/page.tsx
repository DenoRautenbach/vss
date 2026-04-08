import React from 'react';
import { User } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { GenericContent } from '@/components/ui/GenericContent';

export default function AlumniPage() {
  return (
    <div>
      <PageHeader 
        title="Alumni Network" 
        icon={User} 
        description="Stay connected with fellow graduates and see what our amazing alumni are accomplishing around the world." 
      />
      <GenericContent />
    </div>
  );
}

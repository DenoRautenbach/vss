import React from 'react';
import { Trophy } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { GenericContent } from '@/components/ui/GenericContent';

export default function SportPage() {
  return (
    <div>
      <PageHeader 
        title="Athletics & Sports" 
        icon={Trophy} 
        description="Fostering teamwork, discipline, and physical well-being through competitive and recreational sports programs." 
      />
      <GenericContent />
    </div>
  );
}

import React from 'react';
import { Phone } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { GenericContent } from '@/components/ui/GenericContent';

export default function ContactPage() {
  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        icon={Phone} 
        description="Get in touch with our administration office, report absences, or find directions to our campus." 
      />
      <GenericContent />
    </div>
  );
}

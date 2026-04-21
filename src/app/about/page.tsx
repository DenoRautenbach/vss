import React from 'react';
import { Info } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { GenericContent } from '@/components/ui/GenericContent';

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About Villiersdorp Secondary School"
        icon={Info}
        description="Learn about our history, mission, faculty, and the values that drive our educational excellence."
      />
      <GenericContent />
    </div>
  );
}

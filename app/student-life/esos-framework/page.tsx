import React from 'react';
import PageHeader from '@/components/PageHeader';
import EsosContent from '@/components/EsosContent';
import Accreditations from '@/components/Accreditations';

export const metadata = {
  title: 'ESOS Framework | Oxford Institute of Higher Education',
  description: 'Regulatory requirements and educational quality standards protecting the rights of international students studying with Oxford Institute of Higher Education.',
};

export default function EsosFrameworkPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Student Life', href: '#' },
    { label: 'ESOS Framework', href: '/student-life/esos-framework' },
  ];

  return (
    <main className="w-full flex flex-col min-h-screen">
      <PageHeader
        breadcrumbs={breadcrumbs}
        title="ESOS Framework"
        description="Regulatory requirements and educational quality standards protecting the rights of international students studying with Oxford Institute of Higher Education."
        hideUnderline={true}
      />
      <EsosContent />
      <Accreditations />
    </main>
  );
}

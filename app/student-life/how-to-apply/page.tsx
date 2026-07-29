import React from 'react';
import PageHeader from '@/components/PageHeader';
import AdmissionsPathway from '@/components/AdmissionsPathway';
import Accreditations from '@/components/Accreditations';

export const metadata = {
  title: 'Apply Now | Oxford Institute of Higher Education',
  description: 'Find out how to apply to the Oxford Institute of Higher Education as a domestic or international student.',
};

export default function HowToApplyPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Student Life', href: '#' },
    { label: 'How To Apply', href: '/student-life/how-to-apply' },
  ];

  return (
    <main className="w-full flex flex-col min-h-screen">
      <PageHeader
        breadcrumbs={breadcrumbs}
        title="Apply Now"
        hideUnderline={true}
      />

      <AdmissionsPathway />
      <Accreditations />
    </main>
  );
}

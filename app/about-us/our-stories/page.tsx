import React from 'react';
import PageHeader from '@/components/PageHeader';
import OurStoriesContent from '@/components/OurStoriesContent';

export const metadata = {
  title: 'Our Stories | Oxford Institute of Higher Education',
  description: 'Hear from our students about their experiences and success stories at Ozford.',
};

export default function OurStoriesPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '#' },
    { label: 'Our Stories', href: '/about-us/our-stories' },
  ];

  return (
    <main className="w-full flex flex-col min-h-screen bg-white">
      <PageHeader
        breadcrumbs={breadcrumbs}
        title="Our Stories"
        hideUnderline={true}
        description="Listen to real experiences and success stories straight from our students and teachers at Ozford."
      />
      <OurStoriesContent />
    </main>
  );
}

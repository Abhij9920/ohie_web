import React from 'react';
import PageHeader from '@/components/PageHeader';
import PhilosophyIntro from '@/components/PhilosophyIntro';
import PhilosophyVision from '@/components/PhilosophyVision';
import OurValues from '@/components/OurValues';
import Accreditations from '@/components/Accreditations';

export const metadata = {
  title: 'Our Philosophy | Oxford Institute of Higher Education',
  description: 'Learn about the philosophy and values that drive Ozford Institute of Higher Education.',
};

export default function OurPhilosophyPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Our Philosophy', href: '/about-us/our-philosophy' },
  ];

  return (
    <main className="w-full flex flex-col min-h-screen bg-white">
      <PageHeader
        breadcrumbs={breadcrumbs}
        title="Our Philosophy"
        hideUnderline={true}
      />
      <PhilosophyIntro />
      <PhilosophyVision />
      <OurValues />
      <Accreditations />
    </main>
  );
}

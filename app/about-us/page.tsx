import React from 'react';
import PageHeader from '@/components/PageHeader';
import AboutUsJourney from '@/components/AboutUsJourney';
import AboutHeritage from '@/components/AboutHeritage';
import AboutMemberships from '@/components/AboutMemberships';
import AboutMilestones from '@/components/AboutMilestones';
import Accreditations from '@/components/Accreditations';

export const metadata = {
  title: 'About Us | Oxford Institute of Higher Education',
  description: 'Welcome to Ozford Institute Of Higher Education, an innovative educational institution located right in the heart of Melbourne.',
};

export default function AboutUsPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Admission', href: '#' },
    { label: 'About Us', href: '/about-us' },
  ];

  return (
    <main className="w-full flex flex-col min-h-screen bg-white">
      <PageHeader
        breadcrumbs={breadcrumbs}
        title="About Us"
        description="Welcome to Ozford Institute Of Higher Education, an innovative educational institution located right in the heart of Melbourne."
        hideUnderline={true}
      />
      <AboutUsJourney />
      <AboutHeritage />
      <AboutMemberships />
      <AboutMilestones />
      <Accreditations />
    </main>
  );
}

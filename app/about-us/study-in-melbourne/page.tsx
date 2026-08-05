import React from 'react';
import PageHeader from '@/components/PageHeader';
import LiveInAustralia from '@/components/LiveInAustralia';
import WhyChooseAustralia from '@/components/WhyChooseAustralia';
import WhyStudyInMelbourne from '@/components/WhyStudyInMelbourne';
import BestStudentCity from '@/components/BestStudentCity';
import UsefulLinks from '@/components/UsefulLinks';
import Accreditations from '@/components/Accreditations';

export const metadata = {
  title: 'Study in Melbourne Australia | Oxford Institute of Higher Education',
  description: 'Empower your academic journey and immerse yourself in one of the world\'s most dynamic, student-focused global capitals.',
};

export default function StudyInMelbournePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '#' },
    { label: 'Study in Melbourne Australia', href: '/about-us/study-in-melbourne' },
  ];

  return (
    <main className="w-full flex flex-col min-h-screen">
      <PageHeader
        breadcrumbs={breadcrumbs}
        title="Study in Melbourne Australia"
        description="Empower your academic journey and immerse yourself in one of the world's most dynamic, student-focused global capitals."
        hideUnderline={true}
      />
      <LiveInAustralia />
      <WhyChooseAustralia />
      <WhyStudyInMelbourne />
      <BestStudentCity />
      <UsefulLinks />
      <Accreditations />
    </main>
  );
}

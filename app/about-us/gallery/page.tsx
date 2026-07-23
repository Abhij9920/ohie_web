import React from 'react';
import PageHeader from '@/components/PageHeader';
import GalleryContent from '@/components/GalleryContent';
import Accreditations from '@/components/Accreditations';

export const metadata = {
  title: 'Gallery | Oxford Institute of Higher Education',
  description: 'Explore our vibrant campus life, landmark graduation milestones, and collaborative global partnership events through photos and videos.',
};

export default function GalleryPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Gallery', href: '/about-us/gallery' },
  ];

  return (
    <main className="w-full flex flex-col min-h-screen bg-white">
      <PageHeader
        breadcrumbs={breadcrumbs}
        title="Gallery"
        hideUnderline={true}
        description="Explore our vibrant campus life, landmark graduation milestones, and collaborative global partnership events through photos and videos."
      />
      <GalleryContent />
      <Accreditations />
    </main>
  );
}

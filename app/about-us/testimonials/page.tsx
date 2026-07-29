import React from 'react';
import PageHeader from '@/components/PageHeader';
import TestimonialsGrid from '@/components/TestimonialsGrid';

export const metadata = {
  title: 'Testimonials | Oxford Institute of Higher Education',
  description: 'Hear from our students around the world.',
};

export default function TestimonialsPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Testimonials', href: '/about-us/testimonials' },
  ];

  return (
    <main className="w-full flex flex-col min-h-screen bg-white">
      <PageHeader
        breadcrumbs={breadcrumbs}
        title="Testimonial"
        hideUnderline={true}
        description="Hear from our students around the world."
      />
      <TestimonialsGrid />
    </main>
  );
}

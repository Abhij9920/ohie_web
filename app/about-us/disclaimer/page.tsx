import React from 'react';
import PageHeader from '@/components/PageHeader';
import Accreditations from '@/components/Accreditations';

export const metadata = {
  title: 'Disclaimer | Oxford Institute of Higher Education',
  description: 'Disclaimer information for Ozford Institute of Higher Education.',
};

export default function DisclaimerPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '#' },
    { label: 'Disclaimer', href: '/about-us/disclaimer' },
  ];

  return (
    <main className="w-full flex flex-col min-h-screen bg-white">
      <PageHeader
        breadcrumbs={breadcrumbs}
        title="Disclaimer"
        hideUnderline={true}
      />
      
      <section className="w-full bg-[#FAFAF7] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="max-w-4xl mx-auto">
            <div className="text-[#2D3732] text-[15px] leading-relaxed space-y-6">
              <p>
                Every effort has been made to ensure that the material in this website was correct at the time of publishing. Ozford accepts no responsibility for the accuracy or completeness of information and Ozford Institute of Higher Education reserves the right to alter, amend or delete programs and courses listed on this website without notice.
              </p>
              <p>
                Users of this website are advised to check the latest course and other relevant information with Ozford Institute of Higher Education directly at <a href="mailto:info@ozford.edu.au" className="text-[#2463A7] hover:underline">info@ozford.edu.au</a> before acting on the information published. Please note that all quoted prices are subject to change without notice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Accreditations />
    </main>
  );
}

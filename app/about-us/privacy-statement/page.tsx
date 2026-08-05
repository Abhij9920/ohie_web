import React from 'react';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import Image from 'next/image';
import Accreditations from '@/components/Accreditations';

export const metadata = {
  title: 'Privacy Statement | Oxford Institute of Higher Education',
  description: 'Privacy Statement and Policies of Ozford Institute of Higher Education.',
};

export default function PrivacyStatementPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '#' },
    { label: 'Privacy Statement', href: '/about-us/privacy-statement' },
  ];

  return (
    <main className="w-full flex flex-col min-h-screen bg-white">
      <PageHeader
        breadcrumbs={breadcrumbs}
        title="Privacy Statement"
        hideUnderline={true}
      />

      <section className="w-full bg-[#FAFAF7] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px] xl:px-[100px]">
          <div className="  ">
            <div className="text-[#2D3732] text-[15px] leading-relaxed space-y-6">
              <p>
                <strong>OIHE</strong>(Ozford Institute of Higher Education Pty Ltd) respects the privacy of your personal information. The <strong>OIHE</strong> Privacy Policies and Procedures set out how Ozford manages personal information provided to or collected by it.
              </p>
              <p>
                Please see <Link href="/policies" className="text-[#2463A7] underline hover:text-[#184882]">https://ozford.edu.au/policies-procedures/</Link> for the Ozford Institute of Higher Education Pty Ltd Privacy Policies and Procedures
              </p>
            </div>
          </div>

        </div>
      </section>

      <Accreditations />
    </main>
  );
}

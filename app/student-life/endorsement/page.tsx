import React from 'react';
import PageHeader from '@/components/PageHeader';
import Image from 'next/image';
import Link from 'next/link';
import Accreditations from '@/components/Accreditations';

export default function EndorsementPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about-us' },
    { label: 'Endorsement', href: '/student-life/endorsement' }
  ];

  return (
    <main className="w-full bg-[#FFFFFF] min-h-screen">
      <PageHeader
        title="Endorsement"
        breadcrumbs={breadcrumbs}
      />

      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px] py-[60px] md:py-[80px]">

        {/* Logos Grid */}


        {/* Certificates Section */}
        <div className="w-full">
          <h2 className="text-[#000000] text-[20px] md:text-[24px] font-bold font-[family-name:var(--font-geist-sans)] mb-2">
            Certificates
          </h2>
          <Link
            href="https://ozfordeduau-my.sharepoint.com/:b:/g/personal/ozfordit_ozford_edu_au/EYKVK2-emDhDmRiHsRYYNu4Bz3AS0_Y7znkLwCDXoLIgcw?e=Yd9YBv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2463A7] text-[15px] hover:underline"
          >
            CPA Australia and CA Australia Course Accreditation
          </Link>
        </div>


      </section>
      <Accreditations />
    </main>
  );
}

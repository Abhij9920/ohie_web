import React from 'react';
import PageHeader from '@/components/PageHeader';
import Image from 'next/image';
import Link from 'next/link';

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

      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] py-[60px] md:py-[80px]">
        
        {/* Logos Grid */}
        <div className="w-full max-w-[1000px] grid grid-cols-2 md:grid-cols-4 gap-x-[40px] md:gap-x-[80px] gap-y-[60px] items-center justify-items-center mb-[80px]">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <div key={num} className="flex justify-center items-center w-full">
              <Image
                src={`/rec_section/rec_${num}.png`}
                alt={`Accreditation ${num}`}
                width={180}
                height={100}
                className="max-w-full max-h-[100px] w-auto h-auto object-contain"
              />
            </div>
          ))}
        </div>

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
    </main>
  );
}

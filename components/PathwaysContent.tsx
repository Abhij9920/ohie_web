import React from 'react';
import PageHeader from './PageHeader';
import Image from 'next/image';

export default function PathwaysContent() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Admission', href: '#' },
          { label: 'Pathways', href: '/admission-entry/pathways' }
        ]}
        title="Pathways"
        hideUnderline={true}
      />

      <section className="w-full bg-white py-12 md:py-20 min-h-[50vh]">
        <div className="w-full max-w-[1000px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] flex flex-col items-center">
          
          {/* Diagram Image */}
          <div className="relative w-full max-w-[800px] mb-12">
            <Image 
              src="/ozford-pathways.original.png" 
              alt="Ozford Pathways Diagram" 
              width={800} 
              height={500} 
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="w-full text-[#4A524A] space-y-6 text-[15px] md:text-[16px] leading-relaxed">
            <p>
              Ozford Institute Of Higher Education provides quality education. If you successfully complete your studies with Ozford you could pursue the following pathways:
            </p>
            
            <ul className="list-disc pl-5 space-y-2">
              <li>Higher Education pathway on successful completion of Ozford High School Year 12.</li>
              <li>Higher Education pathways for eligible candidates once you have successfully completed Ozford English Language Centre.</li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}

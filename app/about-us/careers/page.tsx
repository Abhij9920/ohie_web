import React from 'react';
import PageHeader from '@/components/PageHeader';
import Accreditations from '@/components/Accreditations';
import Link from 'next/link';

export const metadata = {
  title: 'Jobs at Ozford | Oxford Institute of Higher Education',
  description: 'Currently open vacancies at Ozford Institute of Higher Education.',
};

export default function CareersPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#' },
    { label: 'Careers', href: '/about-us/careers' },
  ];

  return (
    <main className="w-full flex flex-col min-h-screen bg-white">
      <PageHeader
        breadcrumbs={breadcrumbs}
        title="Jobs at Ozford"
        description="Currently open vacancies"
        hideUnderline={true}
      />
      
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-[100px]">
          
          <div className="max-w-4xl flex flex-col gap-12">
            
            {/* Job 1 */}
            <div className="flex flex-col gap-3">
              <h2 className="text-[20px] font-bold text-[#1A1A1A]">Student Recruitment Manager (Domestic)</h2>
              <p className="text-[#4A4A4A] text-[15px]">
                For the full job description, please click <Link href="/Student_Recruitment_Manager_Domestic.pdf" target="_blank" className="text-[#2463A7] hover:underline font-medium italic">here</Link>
              </p>
              <p className="text-[#4A4A4A] text-[15px]">
                To apply, please send your resume and cover letter to <a href="mailto:career@ozford.edu.au" className="text-[#2463A7] hover:underline font-medium italic">career@ozford.edu.au</a>
              </p>
            </div>

            {/* Job 2 */}
            <div className="flex flex-col gap-3">
              <h2 className="text-[20px] font-bold text-[#1A1A1A]">Lecturer</h2>
              <p className="text-[#4A4A4A] text-[15px]">
                For full job description, please click <Link href="#" className="text-[#2463A7] hover:underline font-medium italic">here</Link>
              </p>
              <p className="text-[#4A4A4A] text-[15px]">
                To apply, please send your CV to <a href="mailto:info@ozford.edu.au" className="text-[#2463A7] hover:underline font-medium italic">info@ozford.edu.au</a>
              </p>
            </div>

          </div>
          
        </div>
      </section>

      <div className="mt-auto">
        <Accreditations />
      </div>
    </main>
  );
}

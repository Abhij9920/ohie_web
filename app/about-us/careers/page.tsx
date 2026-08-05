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
    { label: 'About Us', href: '#' },
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
        <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px] xl:px-[100px]">
          
          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Job 1 */}
            <div className="bg-white rounded-[12px] p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E8E8E4] flex flex-col gap-4 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow">
              <h2 className="text-[20px] font-bold text-[#1A1A1A] leading-snug">Marketing and Recruitment Officer</h2>
              
              <div className="flex flex-col gap-3 mt-2 text-[#333333] text-[15px]">
                <p>
                  For the full job description, please click <Link href="/Student_Recruitment_Manager_Domestic.pdf" target="_blank" className="text-[#2463A7] hover:underline italic">here</Link>
                </p>
                <p>
                  To apply, please send your resume and cover letter to <a href="mailto:career@ozford.edu.au" className="text-[#2463A7] hover:underline font-medium italic">career@ozford.edu.au</a>
                </p>
              </div>
            </div>

            {/* Job 2 */}
            <div className="bg-white rounded-[12px] p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E8E8E4] flex flex-col gap-4 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow">
              <h2 className="text-[20px] font-bold text-[#1A1A1A] leading-snug">Lecturer</h2>
              
              <div className="flex flex-col gap-3 mt-2 text-[#333333] text-[15px]">
                <p>
                  For full job description, please click <Link href="#" className="text-[#2463A7] hover:underline italic">here</Link>
                </p>
                <p>
                  To apply, please send your CV to <a href="mailto:info@ozford.edu.au" className="text-[#2463A7] hover:underline font-medium italic">info@ozford.edu.au</a>
                </p>
              </div>
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

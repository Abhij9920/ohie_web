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
        <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px] xl:px-[100px]">
          
          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Job 1 */}
            <div className="bg-white rounded-[12px] p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E8E8E4] flex flex-col gap-5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow">
              <h2 className="text-[20px] font-bold text-[#1A1A1A] leading-snug">Student Recruitment Manager (Domestic)</h2>
              
              <div className="flex flex-col gap-3 mt-auto">
                <Link href="/Student_Recruitment_Manager_Domestic.pdf" target="_blank" className="group text-[#2463A7] hover:text-[#1C4D82] font-semibold text-[15px] flex items-center gap-2 transition-colors">
                  <span>View Job Description</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <a href="mailto:career@ozford.edu.au" className="group text-[#2463A7] hover:text-[#1C4D82] font-semibold text-[15px] flex items-center gap-2 transition-colors">
                  <span>Apply: career@ozford.edu.au</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </a>
              </div>
            </div>

            {/* Job 2 */}
            <div className="bg-white rounded-[12px] p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E8E8E4] flex flex-col gap-5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow">
              <h2 className="text-[20px] font-bold text-[#1A1A1A] leading-snug">Lecturer</h2>
              
              <div className="flex flex-col gap-3 mt-auto">
                <Link href="#" className="group text-[#2463A7] hover:text-[#1C4D82] font-semibold text-[15px] flex items-center gap-2 transition-colors">
                  <span>View Job Description</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <a href="mailto:info@ozford.edu.au" className="group text-[#2463A7] hover:text-[#1C4D82] font-semibold text-[15px] flex items-center gap-2 transition-colors">
                  <span>Apply: info@ozford.edu.au</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </a>
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

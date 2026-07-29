import React from 'react';
import PageHeader from '@/components/PageHeader';
import Accreditations from '@/components/Accreditations';
import Link from 'next/link';

export default function AuthorizedAgentsPage() {
  return (
    <main className="w-full min-h-screen bg-[#FAFAF7] flex flex-col">
      <PageHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Admission & Entry', href: '#' },
          { label: 'Authorized Agents', href: '/admission-entry/authorized-agents' }
        ]}
        title="Authorized Agents"
        hideUnderline={true}
      />

      <section className="w-full flex-grow py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px] xl:px-[100px]">
          <div className="max-w-[800px]">
            <h2 className="text-[#1A2E20] text-[28px] md:text-[32px] italic mb-8" style={{ fontFamily: 'var(--font-dm-serif)' }}>
              Agent Directory
            </h2>
            <Link href="https://ozford.meshedhe.com.au/Publics/PublicsPages/AgentListByCountry.aspx" className="block w-full md:w-auto md:max-w-[500px]">
              <div className="bg-[#2D68A8] hover:bg-[#1f4a70] transition-colors p-6 md:p-8 flex items-center justify-between group shadow-sm mb-8">
                <div>
                  <h3 className="text-white text-[18px] md:text-[20px] font-semibold mb-2">
                    Higher Education Agents
                  </h3>
                  <p className="text-white/80 text-[14px]">
                    View our complete directory of active representatives
                  </p>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-2 transition-transform">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>

            <p className="text-[#666B66] text-[15px] leading-relaxed">
              In order to maintain the highest level of integrity and professionalism in education business practice, the Ozford Institute of Higher Education requires that all applications for agent representation are subject to a rigorous and thorough selection process.
            </p>
          </div>
        </div>
      </section>

      <Accreditations />
    </main>
  );
}

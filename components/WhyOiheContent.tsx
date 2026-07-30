import React from 'react';
import PageHeader from './PageHeader';
import ImageTextRow from './ImageTextRow';
import Link from 'next/link';
import BoxAccordion from './BoxAccordion';

export default function WhyOiheContent() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Admission & Entry', href: '#' },
          { label: 'Why OIHE?', href: '#' }
        ]}
        hideUnderline={true}
        title="Why Ozford Institute of Higher Education"
        description="A personalized path to global careers, recognized qualifications, and lifelong academic excellence in the heart of Melbourne."
      />

      <ImageTextRow
        subtitle="Institutional Purpose"
        title="About the Institute"
        imageSrc="/why_ohie_2/img3.png"
        imageAlt="About the Institute"
        imagePosition="right"
        backgroundColor="bg-[#FAFAF7]"
      >
        <div className="text-[#0B1F4A] text-[17px] md:text-[22px] italic leading-[1.8] space-y-6 max-w-[95%]">
          <p>
            The principal purpose of Ozford Institute of Higher Pty Ltd (OIHE) is the provision of higher education to domestic and international students. OIHE is committed to providing quality educational programs for students to achieve their educational and personal goals and embrace lifelong learning. Ozford fosters a personalised environment where students can develop skills and values to enable them to participate effectively in their chosen career field and the wider community.
          </p>
        </div>
      </ImageTextRow>

      <ImageTextRow
        subtitle="TEQSA & CRICOS"
        title="Registration & Accreditation"
        imageSrc="/why_ohie_2/img2.png"
        imageAlt="Registration & Accreditation"
        imagePosition="left"
        backgroundColor="bg-white"
      >
        <div className="text-[#1C1D20] text-[15px] md:text-[16px] leading-relaxed space-y-6 max-w-[95%]">
          <p>
            OIHE was registered by Tertiary Education Quality Standards Agency (TEQSA) in 2015. The TEQSA National register sets out OIHE's current regulatory status and the details of the courses that have been accredited by TEQSA and the renewal dates. Please see <Link href="https://www.teqsa.gov.au/national-register/search?search_api_fulltext=ozford" className="text-[#4D97E6] font-semibold hover:underline">National register search | Tertiary Education Quality and Standards Agency (teqsa.gov.au)</Link>. All the courses offered by OIHE are recognised in the Australian Qualifications Framework. TEQSA has also registered OIHE as a CRICOS provider (CRICOS Provider Code: 03429B) which enables it to recruit overseas students that want to study in Australia under a student visa. The details of the OIHE registration can be accessed at this link: <Link href="https://cricos.education.gov.au/Institution/InstitutionDetails.aspx?ProviderID=3429" className="text-[#4D97E6] font-semibold hover:underline">Institution Details - Ozford Institute of Higher Education Pty Ltd.</Link>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
            <div className="bg-[#FAFAF7] p-3 flex-1 rounded-[4px]">
              <span className="text-[#5E6660] text-[11px] font-bold tracking-wider uppercase block mb-1">CRICOS CODE</span>
              <span className="text-[#2463A7] text-[24px] italic" style={{ fontFamily: 'var(--font-dm-serif)' }}>03429B</span>
            </div>
            <div className="bg-[#FAFAF7] p-3 flex-1 rounded-[4px]">
              <span className="text-[#5E6660] text-[11px] font-bold tracking-wider uppercase block mb-1">REGISTERED SINCE</span>
              <span className="text-[#2463A7] text-[24px] italic" style={{ fontFamily: 'var(--font-dm-serif)' }}>2015</span>
            </div>
          </div>
        </div>
      </ImageTextRow>

      <section className="w-full bg-[#FAFAF7] py-12 md:py-20">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px]">
          {/* Header */}
          <div className="mb-8">
            <span className="text-[#2463A7] text-[12px] font-bold tracking-wider uppercase mb-2 block">
              Institutional Framework
            </span>
            <h2 className="text-[#0B1F4A] text-[28px] md:text-[36px] lg:text-[40px] italic mb-4 md:mb-0" style={{ fontFamily: 'var(--font-dm-serif)' }}>
              Governance & Academic Board
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="flex-1 text-[#1C1D20] text-[15px] md:text-[16px] leading-relaxed space-y-6">
              <p>
                OIHE is a company established by constitution in accordance with the Corporations Act that trades as Ozford Institute of Higher Education and has one shareholder, OHE Holdings Pty Ltd as trustee for the Ozford Higher Education Trust.
              </p>
              <p>
                OIHE has a Governing Board (Board of Directors) established under the Constitution that operates as set out in the OIHE Governance framework and consists of six members. Supporting the Governing Board is an Academic Board and Audit and Risk Committee.
              </p>
            </div>

            <div className="flex-1 text-[#1C1D20] text-[15px] md:text-[16px] leading-relaxed space-y-6">
              <p>
                The OIHE Academic Board has responsibility for the development and oversight of policy on all academic matters including learning and teaching, new and revised programs, assessment standards and student conduct.
              </p>
              <p>
                The Audit and Risk Committee oversights OIHE risk management framework, financial reporting, internal controls, compliance and the external audit process. Please see <Link href="/about-us/our-people" className="text-[#4D97E6] font-semibold hover:underline">Our People | Ozford Australia</Link> for details of the current members of the Governing Board, Academic Board and Audit and Risk Committee.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ImageTextRow
        subtitle="Leadership Structure"
        title="Executive Management"
        imageSrc="/why_ohie_2/img1.png"
        imageAlt="Executive Management"
        imagePosition="right"
        backgroundColor="bg-white"
      >
        <div className="text-[#1C1D20] text-[14px] md:text-[16px] leading-relaxed max-w-[95%]">
          <p className="mb-8">
            The Executive Management team consists of the President and CEO, Academic Dean, and Head of Marketing. The Executive Management team is supported by six teams:
          </p>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <div className="w-[5px] h-[5px] bg-[#2463A7] mt-[9px] shrink-0"></div>
              <div className="leading-snug">
                <span className="font-bold text-[#0B1F4A] block text-[15px] mb-1">Academic Team</span>
                <span className="text-[#5E6660] text-[14px]">Responsible for academic services (Lecturers and Tutors).</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-[5px] h-[5px] bg-[#2463A7] mt-[9px] shrink-0"></div>
              <div className="leading-snug">
                <span className="font-bold text-[#0B1F4A] text-[15px] block mb-1">Marketing & Student Experience Team</span>
                <span className="text-[#5E6660] text-[14px]">Responsible for marketing, student recruitment and support services</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-[5px] h-[5px] bg-[#2463A7] mt-[9px] shrink-0"></div>
              <div className="leading-snug">
                <span className="font-bold text-[#0B1F4A] text-[15px] block mb-1">Compliance Team</span>
                <span className="text-[#5E6660] text-[14px]">Responsible for oversighting compliance and corporate secretarial support.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-[5px] h-[5px] bg-[#2463A7] mt-[9px] shrink-0"></div>
              <div className="leading-snug">
                <span className="font-bold text-[#0B1F4A] text-[15px] block mb-1">Accounts Team</span>
                <span className="text-[#5E6660] text-[14px]">Responsible for financial services and reporting</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-[5px] h-[5px] bg-[#2463A7] mt-[9px] shrink-0"></div>
              <div className="leading-snug">
                <span className="font-bold text-[#0B1F4A] text-[15px] block mb-1">ITS Services Team</span>
                <span className="text-[#5E6660] text-[14px]">responsible for ICT services and support.</span>
              </div>
            </li>
          </ul>
        </div>
      </ImageTextRow>

      <section className="w-full bg-[#FAFAF7] py-12 md:py-20 px-4 md:px-8 xl:px-[100px]">
        <div className="max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="mb-8">
            <span className="text-[#2463A7] text-[12px] font-bold tracking-wider uppercase mb-2 block">
              Demographics & Data
            </span>
            <h2 className="text-[#0B1F4A] text-[28px] md:text-[36px] lg:text-[40px] italic mb-4 md:mb-6" style={{ fontFamily: 'var(--font-dm-serif)' }}>
              Student Enrolments
            </h2>
            <p className="text-[#1C1D20] text-[15px] md:text-[16px]">
              In August 2025, OIHE had 240+ enrolled students, indicative enrolments were as follows:
            </p>
          </div>

          {/* Table */}
          <div className="w-full border border-[#9A9E99] rounded-t-[4px] overflow-hidden mb-8 bg-white">
            <div className="flex justify-between items-center bg-[#286090] text-white px-4 md:px-6 py-4 font-semibold text-[13px] md:text-[14px]">
              <span>Accredited Course / Program</span>
              <span>Enrolments</span>
            </div>

            <div className="flex flex-col text-[14px] font-medium text-[#4A4D4A]">
              {[
                { name: "Bachelor of Business", count: "43" },
                { name: "Bachelor of Business (Accounting)", count: "23" },
                { name: "Bachelor of Cyber Security", count: "18" },
                { name: "Bachelor of Information Systems", count: "14" },
                { name: "Diploma of Business", count: "1" },
                { name: "Graduate Certificate in Management", count: "4" },
                { name: "Graduate Diploma in Information Technology", count: "1" },
                { name: "Graduate Diploma in Management", count: "1" },
                { name: "Master of Business Administration", count: "75" },
                { name: "Master of Information Technology", count: "29" },
                { name: "Master of Professional Accounting", count: "33" },
              ].map((row, idx) => (
                <div key={idx} className={`flex justify-between items-center px-4 md:px-6 py-4 border-b border-[#D5D8D3] last:border-0 ${idx % 2 === 1 ? 'bg-[#F4F4F0]' : 'bg-white'}`}>
                  <span className="text-[#1C1D20] font-semibold text-[13px] md:text-[14px] pr-2">{row.name}</span>
                  <span className="text-[#2463A7] font-bold shrink-0">{row.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Info Box */}
          <div className="w-full border border-[#4D97E6] bg-white p-6 md:p-8 rounded-[4px]">
            <p className="text-[#4A4D4A] text-[14px] md:text-[15px] leading-relaxed">
              Please see our Pre-Enrolment Guide and Whole of Institution Information for more information about OIHE, our courses, campus, its facilities, learning resources and services provided for students. It can be found at: <Link href="/policies" className="text-[#4D97E6] font-semibold hover:underline">Policies and Procedures | Ozford Australia</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-12 md:py-20 px-4 md:px-8 xl:px-[100px]">
        <div className="max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="mb-10">
            <span className="text-[#2463A7] text-[12px] font-bold tracking-wider uppercase mb-2 block">
              Strategic Strengths
            </span>
            <h2 className="text-[#0B1F4A] text-[28px] md:text-[36px] lg:text-[40px] italic mb-4 md:mb-0" style={{ fontFamily: 'var(--font-dm-serif)' }}>
              Our Educational Standards
            </h2>
          </div>

          {/* Accordions */}
          <BoxAccordion
            items={[
              {
                title: 'Personalized Care',
                content: "A personalized learning environment including small class sizes and 'one on one' tuition outside of formal classes and support with qualified academic staff"
              },
              {
                title: 'PhD Academic Leadership',
                content: "Access to an Academic leadership team that is highly qualified with PhD qualifications from reputable universities, all of whom are highly experienced in the delivery of tertiary education in Australia"
              }
            ]}
          />
        </div>
      </section>
    </>
  );
}

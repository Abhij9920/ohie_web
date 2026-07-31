"use client";
import React, { useState } from 'react';
import CourseHero from '@/components/CourseHero';
import CourseStudentToggle from '@/components/CourseStudentToggle';
import CourseKeyInfo from '@/components/CourseKeyInfo';
import CourseTabs from '@/components/CourseTabs';
import CourseOverviewContent from '@/components/CourseOverviewContent';
import CourseStructureContent from '@/components/CourseStructureContent';
import CourseUnitsAccordion from '@/components/CourseUnitsAccordion';
import AssessmentMethods from '@/components/AssessmentMethods';
import StudentInformationSection from '@/components/StudentInformationSection';
import CourseCTA from '@/components/CourseCTA';
import Accreditations from '@/components/Accreditations';
import { mpaCategories, mpaUnitsData } from './mpaUnitsData';

export default function MpaCoursePage() {
  const [studentType, setStudentType] = useState<'domestic' | 'international'>('domestic');

  const info = {
    domestic: {
      keyInfo: {
        duration: "Full-time, 2 years (4 Trimesters)",
        studyMode: "Full-time, face to face",
        location: "333, Queen Street Melbourne VIC 3000\n433 Boundary Street, Spring Hill QLD 4000",
        intakes: "March, April, August, September, December, 2026",
        englishRequirement: "Domestic School Leavers: n/a",
        courseRequirement: "13 core units plus 3 electives"
      },
      overview: {
        overviewText: "The Master of Professional Accounting (MPA) is designed principally for students from non-accounting backgrounds who wish to make a career change or simply to develop an understanding of the technical and social role accounting plays in contemporary business. As such, the MPA is a broad-based qualification that integrates the core accounting studies with authentic learning experience gained through participating in a Business Internship as a work integrated learning unit.\n\nThis program will help students develop the skills and expertise they need for a rewarding career in accounting. Students are expected to develop the knowledge and expertise to future-proof their career, where they will undertake advanced learning in both theory and professional practice and learn to solve critical accounting and business problems in innovative ways.\n\nA 2019 publication by the Department of Education, Skills and Employment, Australian Jobs 2019 provides an overview of trends in the Australian labour market to support job seekers and providers, career advisers, people considering future training and work and people interested in labour market issues. According to this report, accountants represent the biggest occupation group in Australia making up over 39% of the employed occupation groups. More than three quarters of this group hold a bachelor’s degree or higher qualification. Accountants represent the second biggest occupation group after registered nurses and followed by primary school teachers",
        academicRequirements: (
          <div className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed">
            <div className="font-bold text-[#0B1F4A] mb-3">General Entry</div>
            <div className="flex items-start mb-2">
              <svg width="12" height="3" viewBox="0 0 12 3" className="flex-none shrink-0 mr-4 mt-[11px]" style={{ shapeRendering: 'crispEdges' }}>
                <rect width="12" height="3" fill="#2463A7" />
              </svg>
              <div>Completion of an Australian Bachelor's degree (or equivalent) in any discipline; or</div>
            </div>
            <div className="flex items-start mb-8">
              <svg width="12" height="3" viewBox="0 0 12 3" className="flex-none shrink-0 mr-4 mt-[11px]" style={{ shapeRendering: 'crispEdges' }}>
                <rect width="12" height="3" fill="#2463A7" />
              </svg>
              <div>Completion of an Australian Graduate Diploma (or equivalent) in a similar discipline</div>
            </div>

            <div className="font-bold text-[#0B1F4A] mb-2">Applicants with no formal qualifications</div>
            <div>See special or/and alternative entry</div>
          </div>
        ),
        englishRequirements: (
          <div className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed">
            <span className="font-bold text-[#0B1F4A]">Domestic School Leavers:</span> n/a
          </div>
        )
      },
      structure: {
        requirements: [
          "13 core units plus 3 electives"
        ],
        careerOutcomes: [
          "An external auditor and assurance specialist and insolvency specialist may be achievable in the longer term, further professional qualifications would be required"
        ]
      }
    },
    international: {
      keyInfo: {
        duration: "Full-time, 2 years (4 Trimesters)",
        studyMode: "Full-time, face to face",
        location: "333, Queen Street Melbourne VIC 3000\n433 Boundary Street, Spring Hill QLD 4000",
        intakes: "March, April, August, September, December, 2026",
        englishRequirement: (
          <>
            IELTS score of a minimum of 6.5 with no band less than 6.0 or equivalent<br />
            <a href="#english-requirements" onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('english-requirements');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }} className="underline hover:text-white transition-colors cursor-pointer">( check IELTS equivalence )</a>
          </>
        ) as any,
        courseRequirement: "13 core units plus 3 electives"
      },
      overview: {
        overviewText: "The Master of Professional Accounting (MPA) is designed principally for students from non-accounting backgrounds who wish to make a career change or simply to develop an understanding of the technical and social role accounting plays in contemporary business. As such, the MPA is a broad-based qualification that integrates the core accounting studies with authentic learning experience gained through participating in a Business Internship as a work integrated learning unit.\n\nThis program will help students develop the skills and expertise they need for a rewarding career in accounting. Students are expected to develop the knowledge and expertise to future-proof their career, where they will undertake advanced learning in both theory and professional practice and learn to solve critical accounting and business problems in innovative ways.\n\nA 2019 publication by the Department of Education, Skills and Employment, Australian Jobs 2019 provides an overview of trends in the Australian labour market to support job seekers and providers, career advisers, people considering future training and work and people interested in labour market issues. According to this report, accountants represent the biggest occupation group in Australia making up over 39% of the employed occupation groups. More than three quarters of this group hold a bachelor’s degree or higher qualification. Accountants represent the second biggest occupation group after registered nurses and followed by primary school teachers",
        academicRequirements: (
          <div className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed">
            <div className="mb-3">An international applicant must meet the academic requirements for admission in one of the following ways:</div>
            <div className="flex items-start mb-2">
              <svg width="12" height="3" viewBox="0 0 12 3" className="flex-none shrink-0 mr-4 mt-[11px]" style={{ shapeRendering: 'crispEdges' }}>
                <rect width="12" height="3" fill="#2463A7" />
              </svg>
              <div>Completion of an Australian Bachelor's degree (or equivalent) in any discipline; or</div>
            </div>
            <div className="flex items-start">
              <svg width="12" height="3" viewBox="0 0 12 3" className="flex-none shrink-0 mr-4 mt-[11px]" style={{ shapeRendering: 'crispEdges' }}>
                <rect width="12" height="3" fill="#2463A7" />
              </svg>
              <div>Completion of an Australian Graduate Diploma (or equivalent) in a similar discipline</div>
            </div>
          </div>
        ),
        englishRequirements: (
          <div className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed">
            <div className="mb-3">International applicants are required to provide evidence of sufficient English language skill to enable them to successfully complete a degree course. To demonstrate that they have met the English language requirements the applicant must show evidence of:</div>
            <div className="flex items-start mb-2">
              <svg width="12" height="3" viewBox="0 0 12 3" className="flex-none shrink-0 mr-4 mt-[11px]" style={{ shapeRendering: 'crispEdges' }}>
                <rect width="12" height="3" fill="#2463A7" />
              </svg>
              <div>IELTS score of a minimum of 6.5 with no band less than 6.0 or equivalent; or</div>
            </div>
            <div className="flex items-start mb-2">
              <svg width="12" height="3" viewBox="0 0 12 3" className="flex-none shrink-0 mr-4 mt-[11px]" style={{ shapeRendering: 'crispEdges' }}>
                <rect width="12" height="3" fill="#2463A7" />
              </svg>
              <div>Completion of undergraduate or postgraduate degree, including Graduate Certificate or Graduate Diploma in Australia within the past two years; or</div>
            </div>
            <div className="flex items-start">
              <svg width="12" height="3" viewBox="0 0 12 3" className="flex-none shrink-0 mr-4 mt-[11px]" style={{ shapeRendering: 'crispEdges' }}>
                <rect width="12" height="3" fill="#2463A7" />
              </svg>
              <div>Completion of a higher education qualification in English Language awarded by a recognised university in which English is the primary language.</div>
            </div>
          </div>
        )
      },
      structure: {
        requirements: [
          "13 core units plus 3 electives"
        ],
        careerOutcomes: [
          "An external auditor and assurance specialist and insolvency specialist may be achievable in the longer term, further professional qualifications would be required"
        ]
      }
    }
  };

  const currentInfo = info[studentType];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'entry', label: 'Entry Requirements' },
    { id: 'structure', label: 'Course Structure' },
    { id: 'assessment', label: 'Assessment Methods' },
    { id: 'information', label: 'Student Information' }
  ];

  return (
    <main className="w-full">
      <CourseHero
        degreeLevel="POSTGRADUATE DEGREE"
        cricosCode="107423K"
        title="Master of Professional Accounting (MPA)"
        description="Gain the leadership and multidisciplinary skills needed to innovate in the rapidly evolving fields of professional accounting."
        backgroundImageUrl="/study/hero.png"
        primaryButtonText="Apply Now"
        secondaryButtonText="Course Brochure"
        secondaryButtonHref="/policy/MPA.pdf"
        tertiaryButtonText="Enquire"
      />
      <CourseStudentToggle value={studentType} onChange={setStudentType} />
      <CourseKeyInfo {...currentInfo.keyInfo} />

      <CourseTabs tabs={tabs} />

      {/* Overview & Entry Requirements (both contained in CourseOverviewContent) */}
      <div className="w-full bg-[#F8F9FA] pb-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px]">
          <CourseOverviewContent {...currentInfo.overview} academicTitle="Entry Requirements" />
        </div>
      </div>

      <div id="structure" className="scroll-mt-24">
        <CourseStructureContent {...currentInfo.structure} />
        <div className="pt-16">
          <CourseUnitsAccordion categories={mpaCategories} unitsData={mpaUnitsData} />
        </div>
      </div>

      <div id="assessment" className="scroll-mt-24">
        <AssessmentMethods />
      </div>

      <div id="information" className="scroll-mt-24">
        <StudentInformationSection />
      </div>

      <CourseCTA title="Ready to Begin Your MPA Journey?" secondaryButtonText="Download Prospectus" secondaryButtonLink="/policy/MPA.pdf" />
      <Accreditations />

    </main>
  );
}

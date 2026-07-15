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
import { mbaCategories, mbaUnitsData } from './mbaUnitsData';

export default function MbaCoursePage() {
  const [studentType, setStudentType] = useState<'domestic' | 'international'>('domestic');

  const info = {
    domestic: {
      keyInfo: {
        duration: "Full-time, 2 years (4 Trimesters)",
        studyMode: "Full-time, face to face",
        location: "333, Queen Street Melbourne VIC 3000\n433 Boundary Street, Spring Hill QLD 4000",
        intakes: "March, April, August, September, December, 2026",
        englishRequirement: "Domestic School Leavers: n/a",
        courseRequirement: "10 core units plus 6 electives"
      },
      overview: {
        overviewText: "The overall purpose of the Master of Business Administration (MBA) course is to develop competent and practical practitioners who add value to the professional business community. The course is designed to enable students to gain advanced knowledge and expertise in business management. Students will learn the principles behind the design of business systems and how management strategies can be used to help organisations to meet their needs. Contemporary and emerging topics such as business intelligence and leadership are incorporated into the course to ensure graduates are immersed in the latest developments in business.",
        overviewQuote: "“Our MBA graduates don't just understand business; they understand how to leverage it to solve complex problems and drive innovation in a competitive global market.”",
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
          "10 core units plus 6 electives"
        ],
        careerOutcomes: [
          "Business Executive",
          "Business Consultant",
          "Business Development Manager",
          "Entrepreneur",
          "Finance Manager",
          "General Manager",
          "Specialist Manager"
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
            <a href="#" className="underline">( check IELTS equivalence )</a>
          </>
        ) as any,
        courseRequirement: "9 core units plus 7 electives"
      },
      overview: {
        overviewText: "The overall purpose of the Master of Business Administration (MBA) program is to develop competent, knowledgeable, and practical leaders who add value to the professional business community. Students will learn the principles behind an organisation's structure and operational challenges, along with how organisations and individuals meet these in the context of cultural diversity and in an ever-changing global environment.\n\nAn MBA is widely regarded as the degree of choice for those aspiring to management and leadership positions. Graduates of OIHE's MBA will have skills in marketing, organisational and financial strategies, global practices and key communication skills underpinning effective business leadership. MBA graduates should have a range of employment opportunities in roles such as: Business Executive, Business Consultant, Business Development Manager, Entrepreneur, Finance Manager, General Manager, Specialist Manager, Marketing Manager, Operations Manager, Program Manager and Sales Manager. The course will allow graduates to advance their career over a range of domestic and/or global business management settings.",
        overviewQuote: "“Our MBA graduates don't just understand business; they understand how to leverage it to solve complex problems and drive innovation in a competitive global market.”",
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
          "10 core units plus 6 electives"
        ],
        careerOutcomes: [
          "Business Executive",
          "Business Consultant",
          "Business Development Manager",
          "Entrepreneur",
          "Finance Manager",
          "General Manager",
          "Specialist Manager"
        ]
      }
    }
  };

  const currentInfo = info[studentType];

  const tabs = [
    { id: 'overview', label: 'Overview', content: <CourseOverviewContent {...currentInfo.overview} /> },
    { id: 'entry', label: 'Entry Requirements', content: <div>Entry Requirements Content</div> },
    { id: 'structure', label: 'Course Structure', content: <CourseStructureContent {...currentInfo.structure} /> },
    { id: 'assessment', label: 'Assessment Methods', content: <div>Assessment Methods Content</div> },
    { id: 'student-info', label: 'Student Information', content: <div>Student Information Content</div> },
  ];

  return (
    <main className="w-full">
      <CourseHero
        degreeLevel="POSTGRADUATE DEGREE"
        cricosCode="107422M"
        title="Master of Business Administration (MBA)"
        description="Gain the leadership and multidisciplinary skills needed to innovate in the rapidly evolving fields of business."
        backgroundImageUrl="/study/hero.png"
        primaryButtonText="Apply Now"
        secondaryButtonText="Course Brochure"
      />
      <CourseStudentToggle value={studentType} onChange={setStudentType} />
      <CourseKeyInfo {...currentInfo.keyInfo} />
      
      <CourseTabs tabs={tabs} />

      {/* Overview & Entry Requirements (both contained in CourseOverviewContent) */}
      <div className="w-full bg-[#F8F9FA] pb-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 xl:px-[100px]">
          <CourseOverviewContent {...currentInfo.overview} />
        </div>
      </div>

      <div id="structure">
        <CourseStructureContent {...currentInfo.structure} />
        <CourseUnitsAccordion categories={mbaCategories} unitsData={mbaUnitsData} />
      </div>

      <div id="assessment">
        <AssessmentMethods />
      </div>

      <div id="student-info">
        <StudentInformationSection />
      </div>
      
      <CourseCTA title="Ready to Begin Your MBA Journey?" />
      <Accreditations />

    </main>
  );
}

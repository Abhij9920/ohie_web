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
import { gcitCategories, gcitUnitsData } from './gcitUnitsData';

export default function GcitCoursePage() {
  const [studentType, setStudentType] = useState<'domestic' | 'international'>('domestic');

  const info = {
    domestic: {
      keyInfo: {
        duration: "Full-time, 36 Weeks",
        studyMode: "Full-time, face to face",
        location: "333, Queen Street Melbourne VIC 3000",
        intakes: "March, April, August, September, December, 2026",
        englishRequirement: "Domestic School Leavers: n/a",
        courseRequirement: "4 Core Units"
      },
      overview: {
        overviewText: "The Graduate Certificate in Information Technology course is designed for students who are seeking to gain foundational knowledge and skills in Information and Communication Technology (ICT) by undertaking units including networking, database, programming, and computer architecture. The Graduate Certificate in Information Technology can be taken as a stand-alone course or as a pathway to the Master of Information Technology course.",
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
        requirements: ["4 Core Units"],
        careerOutcomes: [
          "ICT Security Specialist",
          "Systems Administrator",
          "Systems Analyst"
        ]
      }
    },
    international: {
      keyInfo: {
        duration: "Full-time, 36 Weeks",
        studyMode: "Full-time, face to face",
        location: "333, Queen Street Melbourne VIC 3000",
        intakes: "March, April, August, September, December, 2026",
        englishRequirement: (
          <>
            IELTS score of a minimum of 6.0, with no band less than 6.0, or equivalent<br />
            <a href="#english-requirements" onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('english-requirements');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }} className="underline hover:text-white transition-colors cursor-pointer">( check IELTS equivalence )</a>
          </>
        ) as any,
        courseRequirement: "4 Core Units"
      },
      overview: {
        overviewText: "The Graduate Certificate in Information Technology course is designed for students who are seeking to gain foundational knowledge and skills in Information and Communication Technology (ICT) by undertaking units including networking, database, programming, and computer architecture. The Graduate Certificate in Information Technology can be taken as a stand-alone course or as a pathway to the Master of Information Technology course.",
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
            <div className="mb-3">International applicants are required to provide evidence of sufficient English language skill to enable them to successfully complete a degree course. To demonstrate that they have met the English language requirements the applicant must show evidence of:</div>
            <div className="flex items-start mb-2">
              <svg width="12" height="3" viewBox="0 0 12 3" className="flex-none shrink-0 mr-4 mt-[11px]" style={{ shapeRendering: 'crispEdges' }}>
                <rect width="12" height="3" fill="#2463A7" />
              </svg>
              <div>IELTS score of a minimum of 6.0, with no band less than 6.0, or equivalent; or</div>
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
        requirements: ["4 Core Units"],
        careerOutcomes: [
          "ICT Security Specialist",
          "Systems Administrator",
          "Systems Analyst"
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
        degreeLevel="Postgraduate degree"
        cricosCode="115638F"
        title="Graduate Certificate in Information Technology"
        description="Gain the leadership and multidisciplinary skills needed to innovate in the rapidly evolving fields of technology and science."
        backgroundImageUrl="/study/hero.png"
        primaryButtonText="Apply"
        secondaryButtonText="Enquire"
      />
      <CourseStudentToggle value={studentType} onChange={setStudentType} />
      <CourseKeyInfo {...currentInfo.keyInfo} />
      
      <CourseTabs tabs={tabs} />

      {/* Overview & Entry Requirements */}
      <div className="w-full bg-[#F8F9FA] pb-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px] xl:px-[100px]">
          <CourseOverviewContent {...currentInfo.overview} academicTitle="Entry Requirements" />
        </div>
      </div>

      <div id="structure" className="scroll-mt-24">
        <CourseStructureContent {...currentInfo.structure} />
        <div className="pt-16">
          <CourseUnitsAccordion categories={gcitCategories} unitsData={gcitUnitsData} />
        </div>
      </div>

      <div id="assessment" className="scroll-mt-24">
        <AssessmentMethods />
      </div>

      <div id="information" className="scroll-mt-24">
        <StudentInformationSection />
      </div>

      <CourseCTA title="Ready to Begin Your Graduate Certificate in Information Technology Journey?" secondaryButtonText="Enquire Now" secondaryButtonLink="/#explore-courses" />
      
      <Accreditations />
    </main>
  );
}

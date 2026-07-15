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
import { gdeceCategories, gdeceUnitsData } from './gdeceUnitsData';

export default function GdeceCoursePage() {
  const [studentType, setStudentType] = useState<'domestic' | 'international'>('domestic');

  const info = {
    domestic: {
      keyInfo: {
        duration: "Full-time, 1 year (2 Trimesters)",
        studyMode: "Full-time, face to face",
        location: "333, Queen Street Melbourne VIC 3000",
        intakes: "March, April, August, September, December, 2026",
        englishRequirement: "n/a",
        courseRequirement: "8 core units"
      },
      overview: {
        overviewText: "The Graduate Diploma in Early Childhood Education atOzfordis designed for students who want to develop the knowledge, skills, and professional capabilitiesrequiredto work in early childhood education settings.\nThe course builds on contemporary theories of child development, learning, and pedagogy, with a focus on curriculum design, literacy and numeracy foundations, creative learning, and inclusive educational practices.\nIt is suitable for students who hold a degree in another discipline and are seeking a pathway into the early childhood education sector or further professional development in the field.",
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
          "8 core units"
        ],
        careerOutcomes: [
          "Early Childhood Teacher,",
          "Kindergarten Teacher,",
          "Preschool Teacher,",
          "Early Learning Teacher,",
          "Room Leader,",
          "Lead Educator"
        ]
      }
    },
    international: {
      keyInfo: {
        duration: "Full-time, 1 year (2 Trimesters)",
        studyMode: "Full-time, face to face",
        location: "333, Queen Street Melbourne VIC 3000",
        intakes: "March, April, August, September, December, 2026",
        englishRequirement: "IELTS (academic): minimum overall score of 6.5, with no band score less than 6.0, or equivalent.",
        courseRequirement: "8 core units"
      },
      overview: {
        overviewText: "The Graduate Diploma in Early Childhood Education atOzfordis designed for students who want to develop the knowledge, skills, and professional capabilitiesrequiredto work in early childhood education settings.\nThe course builds on contemporary theories of child development, learning, and pedagogy, with a focus on curriculum design, literacy and numeracy foundations, creative learning, and inclusive educational practices.\nIt is suitable for students who hold a degree in another discipline and are seeking a pathway into the early childhood education sector or further professional development in the field.",
        academicRequirements: (
          <div className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed">
            <div>An international applicant must meet the academic requirements for admission in one of the following ways:</div>
            <div>Completion of an Australian Bachelor's degree (or equivalent) in any discipline; or</div>
            <div>Completion of an Australian Graduate Diploma (or equivalent) in a similar discipline</div>
          </div>
        ),
        englishRequirements: (
          <div className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed">
            <div>International applicants are required to provide evidence of sufficient English language skill to enable them to successfully complete a degree course.</div>
            <div className="mb-6">To demonstrate that they have met the English language requirements the applicant must show evidence of:</div>
            <div>IELTS (academic): minimum overall score of 6.5, with no band score less than 6.0, or equivalent.</div>
          </div>
        )
      },
      structure: {
        requirements: [
          "8 core units"
        ],
        careerOutcomes: [
          "Early Childhood Teacher,",
          "Kindergarten Teacher,",
          "Preschool Teacher,",
          "Early Learning Teacher,",
          "Room Leader,",
          "Lead Educator"
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
        degreeLevel="Postgraduate degree"
        cricosCode="120675C"
        title="Graduate Diploma in Early Childhood Education"
        description="Enrol Now in Our ACECQA-Approved Early Childhood Course Nationally recognised and trusted qualifications aligned with the National Quality Framework (NQF) and the ACECQA approved"
        backgroundImageUrl="/study/hero.png"
        primaryButtonText="Apply"
        secondaryButtonText="Enquire"
      />
      <CourseStudentToggle value={studentType} onChange={setStudentType} />
      <CourseKeyInfo {...currentInfo.keyInfo} />
      
      <CourseTabs tabs={tabs} />

      {/* Overview & Entry Requirements */}
      <div className="w-full bg-[#F8F9FA] pb-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 xl:px-[100px]">
          <CourseOverviewContent {...currentInfo.overview} />
        </div>
      </div>

      <div id="structure">
        <CourseStructureContent {...currentInfo.structure} />
        <CourseUnitsAccordion categories={gdeceCategories} unitsData={gdeceUnitsData} />
      </div>

      <div id="assessment">
        <AssessmentMethods />
      </div>

      <div id="student-info">
        <StudentInformationSection />
      </div>

      <CourseCTA />
      
      <Accreditations />
    </main>
  );
}

import React from 'react';
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
  const tabs = [
    { id: 'overview', label: 'Overview', content: <></> },
    { id: 'entry', label: 'Entry Requirements', content: <></> },
    { id: 'structure', label: 'Course Structure', content: <></> },
    { id: 'assessment', label: 'Assessment Methods', content: <></> },
    { id: 'student-info', label: 'Student Information', content: <></> },
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
      <CourseStudentToggle />
      <CourseKeyInfo
        duration="Full-time, 2 years (4 Trimesters)"
        studyMode="Full-time, face to face"
        location={"333, Queen Street Melbourne VIC 3000\n433 Boundary Street, Spring Hill QLD 4000"}
        intakes="March, April, August, September, December, 2026"
        englishRequirement="Domestic School Leavers: n/a"
        courseRequirement="10 core units plus 6 electives"
      />
      
      <CourseTabs tabs={tabs} />

      {/* Overview & Entry Requirements (both contained in CourseOverviewContent) */}
      <div className="w-full bg-[#F8F9FA] pb-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 xl:px-[100px]">
          <CourseOverviewContent 
            overviewText="The overall purpose of the Master of Business Administration (MBA) course is to develop competent and practical practitioners who add value to the professional business community. The course is designed to enable students to gain advanced knowledge and expertise in business management. Students will learn the principles behind the design of business systems and how management strategies can be used to help organisations to meet their needs. Contemporary and emerging topics such as business intelligence and leadership are incorporated into the course to ensure graduates are immersed in the latest developments in business."
            overviewQuote="“Our MBA graduates don't just understand business; they understand how to leverage it to solve complex problems and drive innovation in a competitive global market.”"
            academicRequirements={
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
            }
            englishRequirements={
              <div className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed">
                <span className="font-bold text-[#0B1F4A]">Domestic School Leavers:</span> n/a
              </div>
            }
          />
        </div>
      </div>

      <div id="structure">
        <CourseStructureContent 
          requirements={[
            "10 core units plus 6 electives"
          ]}
          careerOutcomes={[
            "Business Executive",
            "Business Consultant",
            "Business Development Manager",
            "Entrepreneur",
            "Finance Manager",
            "General Manager",
            "Specialist Manager"
          ]}
        />
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

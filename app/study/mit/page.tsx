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
import Testimonials from '@/components/Testimonials';
import Accreditations from '@/components/Accreditations';

export default function MitCoursePage() {
  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: <CourseOverviewContent />
    },
    { id: 'entry', label: 'Entry Requirements', content: <div>Entry Requirements Content</div> },
    {
      id: 'structure',
      label: 'Course Structure',
      content: <CourseStructureContent />
    },
    { id: 'assessment', label: 'Assessment Methods', content: <div>Assessment Methods Content</div> },
    { id: 'student-info', label: 'Student Information', content: <div>Student Information Content</div> },
  ];

  return (
    <main className="w-full">
      <CourseHero
        degreeLevel="POSTGRADUATE DEGREE"
        cricosCode="115641M"
        title="Master of Information Technology (MIT)"
        description="Take the lead in the digital era with advanced technical skills and strategic management capabilities tailored for the Australian and global tech industry."
        backgroundImageUrl="/study/hero.png"
        primaryButtonText="Apply Now"
        secondaryButtonText="Course Brochure"
      />

      <CourseStudentToggle />
      <CourseKeyInfo />
      <CourseTabs tabs={tabs} />

      {/* Overview & Entry Requirements (both contained in CourseOverviewContent) */}
      <div className="w-full bg-[#F8F9FA] pb-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 xl:px-[100px]">
          <CourseOverviewContent />
        </div>
      </div>

      <div id="structure">
        <CourseStructureContent />
        <CourseUnitsAccordion />
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

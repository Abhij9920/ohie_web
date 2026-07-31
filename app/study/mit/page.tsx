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
import Testimonials from '@/components/Testimonials';
import Accreditations from '@/components/Accreditations';

export default function MitCoursePage() {
  const [studentType, setStudentType] = useState<'domestic' | 'international'>('domestic');

  const info = {
    domestic: {
      keyInfo: {
        duration: "Full-time, 2 years (4\nTrimesters)",
        intakes: "March, April, August,\nSeptember, December,\n2026",
        studyMode: "Full-time, face to face",
        englishRequirement: "IELTS 6.5 minimum, no\nband below 6.0",
        location: "Melbourne VIC 3000 /\nSpring Hill QLD 4000",
        courseRequirement: "18 core units + 3\nspecialisation units",
      },
      overview: {
        academicRequirements: [
          "Completion of an Australian Bachelor's degree (or equivalent) in any discipline; or",
          "Completion of an Australian Graduate Certificate (or equivalent) in any discipline; or",
          "Completion of an Australian Graduate Diploma (or equivalent) in any discipline."
        ],
        englishRequirements: [
          "IELTS score of a minimum of 6.5 with no band less than 6.0 or equivalent; or",
          "Completion of undergraduate or postgraduate degree, including Graduate Certificate or Graduate Diploma in Australia within the past two years; or",
          "Completion of a higher education qualification in English Language awarded by a recognised university in which English is the primary language."
        ],
        ageRequirement: "Applicants must be 18 years of age or over at the time of Application/Enrolment, not only by commencement."
      },
      structure: {
        requirements: [
          "13 core units PLUS 3 cyber security specialisation units OR",
          "3 data analytics specialisation units OR",
          "3 software development specialisation units"
        ],
        careerOutcomes: [
          "Business Analyst",
          "Database Administrator",
          "Information Systems Manager",
          "ICT Consultant",
          "Systems Analyst"
        ]
      }
    },
    international: {
      keyInfo: {
        duration: "Full-time, 2 years (4 Trimesters)",
        intakes: "March, April, August, September, December, 2026",
        studyMode: "Full-time, face to face",
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
        location: "333, Queen Street Melbourne VIC 3000\n433 Boundary Street, Spring Hill QLD 4000",
        courseRequirement: "10 core units PLUS 3 cyber security specialisation units OR\n3 data analytics specialisation units OR\n3 software development specialisation units",
      },
      overview: {
        academicRequirements: [
          "Completion of an Australian Bachelor's degree (or equivalent) in any discipline; or",
          "Completion of an Australian Graduate Certificate (or equivalent) in any discipline; or"
        ],
        englishRequirements: [
          "IELTS score of a minimum of 6.5 with no band less than 6.0 or equivalent; or",
          "Completion of undergraduate or postgraduate degree, including Graduate Certificate or Graduate Diploma in Australia within the past two years; or",
          "Completion of a higher education qualification in English Language awarded by a recognised university in which English is the primary language."
        ],
        ageRequirement: "Applicants must be 18 years of age or over at the time of Application/Enrolment, not only by commencement."
      },
      structure: {
        requirements: [
          "10 core units PLUS 3 cyber security specialisation units OR",
          "3 data analytics specialisation units OR",
          "3 software development specialisation units"
        ],
        careerOutcomes: [
          "Business Analyst",
          "Database Administrator",
          "Information Systems Manager",
          "ICT Consultant",
          "Systems Analyst"
        ]
      }
    }
  };

  const currentInfo = info[studentType];

  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: <CourseOverviewContent {...currentInfo.overview} />
    },
    { id: 'entry', label: 'Entry Requirements', content: <div>Entry Requirements Content</div> },
    {
      id: 'structure',
      label: 'Course Structure',
      content: <CourseStructureContent {...currentInfo.structure} />
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
        secondaryButtonHref="/MIT.pdf"
        tertiaryButtonText="Enquire"
      />

      <CourseStudentToggle value={studentType} onChange={setStudentType} />
      <CourseKeyInfo {...currentInfo.keyInfo} />
      <CourseTabs tabs={tabs} />

      {/* Overview & Entry Requirements (both contained in CourseOverviewContent) */}
      <div className="w-full bg-[#F8F9FA] pb-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px] xl:px-[100px]">
          <CourseOverviewContent {...currentInfo.overview} />
        </div>
      </div>

      <div id="structure">
        <CourseStructureContent {...currentInfo.structure} />
        <CourseUnitsAccordion />
      </div>

      <div id="assessment">
        <AssessmentMethods />
      </div>

      <div id="student-info">
        <StudentInformationSection />
      </div>

      <CourseCTA title="Ready to Begin Your MIT Journey?" secondaryButtonText="Download Prospectus" secondaryButtonLink="/MIT.pdf" />
      <Accreditations />

    </main>
  );
}

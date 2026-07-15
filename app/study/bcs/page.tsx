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
import { bcsCategories, bcsUnitsData } from './bcsUnitsData';

export default function BcsCoursePage() {
  const [studentType, setStudentType] = useState<'domestic' | 'international'>('domestic');

  const info = {
    domestic: {
      keyInfo: {
        duration: "Full-time, 3 years (6 Trimesters)",
        studyMode: "Full-time, face to face",
        location: "333, Queen Street Melbourne VIC 3000",
        intakes: "March, April, August, September, December, 2026",
        englishRequirement: "Domestic School Leavers: n/a",
        courseRequirement: "21 core units plus 3 elective units, or 1 elective unit and an internship"
      },
      overview: {
        overviewText: "The overall purpose of the Bachelor of Cyber Security (BCyberSec) course is to develop competent and practical cyber security practitioners. The course is designed to combine essential knowledge in core business disciplines with advanced knowledge in cyber security. Students will learn the skills to identify, investigate and counter cyber threats. Contemporary and emerging ICT topics such as big data, block chain, business intelligence and Internet of Things are also incorporated into the course to ensure the graduates are immersed with the latest developments in ICT.",
        academicRequirements: (
          <div className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed">
            <ul className="list-disc pl-5 space-y-2">
              <li>Completion of a current or previously approved Victorian Certificate of Education (VCE), Higher School Certificate (HSC) or equivalent; or</li>
              <li>Completion of the International Baccalaureate Diploma (IB Diploma), including English; or</li>
              <li>Completion of an overseas qualification of an equivalent standard to an approved Australian Year 12 qualification, including English; or</li>
              <li>Completion of one year of an AQF-accredited award at the level of Certificate IV or above; or</li>
              <li>Completion of one year of study at Level 7 of the AQF or equivalent at an Australian or overseas higher education provider. This includes applicants who have completed or partially completed a degree or Higher Education Diploma (HE Diploma).</li>
            </ul>
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
          "21 core units plus 3 elective units, or 1 elective unit and an internship"
        ],
        careerOutcomes: [
          "Cyber Security Consultant",
          "Cyber Security Analyst",
          "Digital Forensic Analyst",
          "Information Systems Analyst",
          "Penetration Tester",
          "Security Architect"
        ]
      }
    },
    international: {
      keyInfo: {
        duration: "Full-time, 3 years (6 Trimesters)",
        studyMode: "Full-time, face to face",
        location: "333, Queen Street Melbourne VIC 3000",
        intakes: "March, April, August, September, December, 2026",
        englishRequirement: "IELTS (academic): minimum overall score of 6.0, with no band score less than 5.5, or equivalent.",
        courseRequirement: "21 core units plus 3 elective units, or 1 elective unit and an internship"
      },
      overview: {
        overviewText: "The overall purpose of the Bachelor of Cyber Security (BCyberSec) course is to develop competent and practical cyber security practitioners. The course is designed to combine essential knowledge in core business disciplines with advanced knowledge in cyber security. Students will learn the skills to identify, investigate and counter cyber threats. Contemporary and emerging ICT topics such as big data, block chain, business intelligence and Internet of Things are also incorporated into the course to ensure the graduates are immersed with the latest developments in ICT.",
        academicRequirements: (
          <div className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed">
            <ul className="list-disc pl-5 space-y-2">
              <li>Completion of a current or previously approved Victorian Certificate of Education (VCE), Higher School Certificate (HSC) or equivalent; or</li>
              <li>Completion of the International Baccalaureate Diploma (IB Diploma), including English; or</li>
              <li>Completion of an overseas qualification of an equivalent standard to an approved Australian Year 12 qualification, including English; or</li>
              <li>Completion of one year of an AQF-accredited award at the level of Certificate IV or above; or</li>
              <li>Completion of one year of study at Level 7 of the AQF or equivalent at an Australian or overseas higher education provider. This includes applicants who have completed or partially completed a degree or Higher Education Diploma (HE Diploma).</li>
            </ul>
          </div>
        ),
        englishRequirements: (
          <div className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed">
            <div>International applicants are required to provide evidence of sufficient English language skill to enable them to successfully complete a degree course.</div>
            <div className="mb-6">To demonstrate that they have met the English language requirements the applicant must show evidence of:</div>
            <div>IELTS (academic): minimum overall score of 6.0, with no band score less than 5.5, or equivalent.</div>
          </div>
        )
      },
      structure: {
        requirements: [
          "21 core units plus 3 elective units, or 1 elective unit and an internship"
        ],
        careerOutcomes: [
          "Cyber Security Consultant",
          "Cyber Security Analyst",
          "Digital Forensic Analyst",
          "Information Systems Analyst",
          "Penetration Tester",
          "Security Architect"
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
        degreeLevel="Undergraduate degree"
        cricosCode="113297E"
        title="Bachelor of Cyber Security"
        description="Cyber security is the practice of protecting computer systems, networks, programs and information from disruption, theft, loss or damage. It is a fast growing area within the information and communication technology (ICT) field."
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
        <CourseUnitsAccordion categories={bcsCategories} unitsData={bcsUnitsData} />
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

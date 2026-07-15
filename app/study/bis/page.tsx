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
import { bisCategories, bisUnitsData } from './bisUnitsData';

export default function BisCoursePage() {
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
        overviewText: "The overall purpose of the Bachelor of Information Systems (BIS) course is to develop competent and practical practitioners who add value to the professional ICT community. The course is designed to combine essential knowledge in core business disciplines with advanced knowledge in ICT. Students will learn the principles behind the design of information systems and how ICT can be used to help organisations to meet their needs. Contemporary and emerging ICT topics such as big data, block chain, business intelligence and Internet of Things are incorporated into the course to ensure the graduates are immersed with the latest developments in ICT.",
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
        duration: "Full-time, 3 years (6 Trimesters)",
        studyMode: "Full-time, face to face",
        location: "333, Queen Street Melbourne VIC 3000",
        intakes: "March, April, August, September, December, 2026",
        englishRequirement: (
          <>
            IELTS score of a minimum of 6.0 with no band less than 5.5 or equivalent<br />
            <a href="#english-requirements" onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('english-requirements');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }} className="underline hover:text-white transition-colors cursor-pointer">( check IELTS equivalence )</a>
          </>
        ),
        courseRequirement: "21 core units plus 3 elective units, or 1 elective unit and an internship"
      },
      overview: {
        overviewText: "The overall purpose of the Bachelor of Information Systems (BIS) course is to develop competent and practical practitioners who add value to the professional ICT community. The course is designed to combine essential knowledge in core business disciplines with advanced knowledge in ICT. Students will learn the principles behind the design of information systems and how ICT can be used to help organisations to meet their needs. Contemporary and emerging ICT topics such as big data, block chain, business intelligence and Internet of Things are incorporated into the course to ensure the graduates are immersed with the latest developments in ICT.",
        academicRequirements: (
          <div className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed">
            <ul className="list-disc pl-5 space-y-2">
              <li>Completion of a current or previously approved VCE, HSC or equivalent; or</li>
              <li>Completion of the IB Diploma, including English; or</li>
              <li>Completion of an overseas qualification of an equivalent standard to an approved Australian Year 12 qualification; or</li>
              <li>Completion of one year of an AQF-accredited award at the level of Certificate IV or above; or</li>
              <li>Completion of one year of study at Level 7 of the AQF or equivalent at an Australian or overseas higher education provider. This includes applicants who have completed or partially completed a degree or HE Diploma.</li>
            </ul>
          </div>
        ),
        englishRequirements: (
          <div className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed">
            <ul className="list-disc pl-5 space-y-2">
              <li>Completion of an Australian Year 12 or AQF Level 5 qualification or higher that was studied in Australia in English within the past two years; or</li>
              <li>IELTS score of a minimum of 6.0 with no band less than 5.5 or equivalent; or</li>
              <li>Recognised English Language Course: English for Academic Purposes from Ozford English Language Centre or another CRICOS listed English language qualification studied in Australia with outcomes equivalent to IELTS 6.0 with no band less than 5.5; or</li>
              <li>Completion of an Australian Certificate IV English as an Additional Language (EAL) qualification or another Commonwealth Register of Institutions and Courses for Overseas Students (CRICOS) -listed English language qualification studied in Australia with outcomes equivalent to IELTS 6.0 or above; or</li>
              <li>Completion of the 10-week English for Academic Purposes (EAP) program at Ozford English Language Centre or other English language centres endorsed by the National English Language Teaching Accreditation Scheme (NEAS) quality assurance, which will meet the IELTS equivalent of 6.0 or above.</li>
            </ul>
          </div>
        )
      },
      structure: {
        requirements: [
          "21 core units plus 3 elective units, or 1 elective unit and an internship"
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
        cricosCode="113296F"
        title="Bachelor of Information Systems"
        description="The global demand for information and communication technology (ICT) professionals is strong and growing. In Australia, ICT is one of the top five industries hiring new staff members in Australia."
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
        <CourseUnitsAccordion categories={bisCategories} unitsData={bisUnitsData} />
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

"use client";
import React, { useState } from 'react';
import CourseHero from '@/components/CourseHero';
import CourseStudentToggle from '@/components/CourseStudentToggle';
import CourseKeyInfo from '@/components/CourseKeyInfo';
import CourseTabs from '@/components/CourseTabs';
import CourseOverviewContent from '@/components/CourseOverviewContent';
import CourseStructureContent from '@/components/CourseStructureContent';
import AssessmentMethods from '@/components/AssessmentMethods';
import StudentInformationSection from '@/components/StudentInformationSection';
import CourseCTA from '@/components/CourseCTA';
import Accreditations from '@/components/Accreditations';
import CourseUnitsAccordion from '@/components/CourseUnitsAccordion';
import StudentWorkload from '@/components/StudentWorkload';
import CoursePathways from '@/components/CoursePathways';
import { bbaCategories, bbaUnitsData } from './bbaUnitsData';

export default function BachelorOfBusinessAccounting() {
  const [studentType, setStudentType] = useState<"domestic" | "international">("domestic");

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'entry', label: 'Academic Requirements' },
    { id: 'english-requirements', label: 'Language Requirements' },
    { id: 'age-requirements', label: 'Age Requirements' },
    { id: 'career', label: 'Career Outcomes' },
    { id: 'course-requirements', label: 'Course Requirements' },
    { id: 'structure', label: 'Course Units' },
    { id: 'workload', label: 'Student Workload' },
    { id: 'pathways', label: 'Pathways' },
    { id: 'assessment', label: 'Assessment Methods' },
    { id: 'information', label: 'Student Information' }
  ];

  const info = {
    domestic: {
      keyInfo: {
        duration: "Full-time, 3 years (6 Trimesters)",
        studyMode: "Full-time, face to face",
        location: "333, Queen Street Melbourne VIC 3000",
        intakes: "March, April, August, September, December, 2026",
        englishRequirement: "Domestic School Leavers: n/a",
        courseRequirement: "8 core units (1st year)\nPLUS 8 Accounting specialisation units\nPLUS Internship (equivalent to 2 units)\nPLUS 6 elective units"
      },
      overview: {
        overviewText: (
          <div className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed">
            <p className="mb-4">The CA & CPA Accredited Bachelor of Business Accounting course prepares students for a career in a variety of accounting and finance related positions in accounting practices large and small – from SMEs and large corporations to financial institutions and government agencies. To successfully complete the CA & CPA Bachelor of Accounting Course students will demonstrate the ability to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Integrate theoretical and technical knowledge and apply within a field of work and learning</li>
              <li>Critically review, analyse, consolidate and synthesise knowledge to make informed judgements in solving a range of problems that arise in business contexts.</li>
              <li>Critically apply technical knowledge and skills in using methods and technologies to analyse and evaluate information to complete a range of accounting-related activities</li>
              <li>Think critically and creatively to identify and apply judgement to solve problems in a range of business contexts applicable to a CPA</li>
              <li>Communicate clearly and coherently accounting advice and ideas in collaborative contexts to all stakeholders.</li>
              <li>Exercise initiative and judgement in planning, solving problems and decision making in practice and / or research.</li>
              <li>Adapt and apply knowledge and skills to anticipate and manage uncertainty to solve diverse and complex problems.</li>
              <li>Be responsible and accountable as a professional practitioner working independently and in collaboration with others in diverse contexts.</li>
            </ul>
          </div>
        ),
        academicRequirements: (
          <div className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed">
            Domestic School Leavers: Successful completion on of Year 12 in Australia or equivalent
          </div>
        ),
        englishRequirements: (
          <div className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed">
            Domestic School Leavers: n/a
          </div>
        ),
        ageRequirement: "Applicants must be 18 years of age or over at the time of Application/Enrolment, not only by commencement."
      },
      structure: {
        requirements: [
          "8 core units (1st year)",
          "PLUS 8 Accounting specialisation units",
          "PLUS Internship (equivalent to 2 units)",
          "PLUS 6 elective units"
        ],
        careerOutcomes: [
          "Management Accountant",
          "Financial Accountant",
          "Taxation Consultant",
          "Auditor"
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
        courseRequirement: "8 core units (1st year)\nPLUS 8 Accounting specialisation units\nPLUS Internship (equivalent to 2 units)\nPLUS 6 elective units"
      },
      overview: {
        overviewText: (
          <div className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed">
            <p className="mb-4">The CA & CPA Accredited Bachelor of Business Accounting course prepares students for a career in a variety of accounting and finance related positions in accounting practices large and small – from SMEs and large corporations to financial institutions and government agencies. To successfully complete the CA & CPA Bachelor of Accounting Course students will demonstrate the ability to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Integrate theoretical and technical knowledge and apply within a field of work and learning</li>
              <li>Critically review, analyse, consolidate and synthesise knowledge to make informed judgements in solving a range of problems that arise in business contexts.</li>
              <li>Critically apply technical knowledge and skills in using methods and technologies to analyse and evaluate information to complete a range of accounting-related activities</li>
              <li>Think critically and creatively to identify and apply judgement to solve problems in a range of business contexts applicable to a CPA</li>
              <li>Communicate clearly and coherently accounting advice and ideas in collaborative contexts to all stakeholders.</li>
              <li>Exercise initiative and judgement in planning, solving problems and decision making in practice and / or research.</li>
              <li>Adapt and apply knowledge and skills to anticipate and manage uncertainty to solve diverse and complex problems.</li>
              <li>Be responsible and accountable as a professional practitioner working independently and in collaboration with others in diverse contexts.</li>
            </ul>
          </div>
        ),
        academicRequirements: (
          <div className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed space-y-2">
            <p className="font-bold text-[#0B1F4A]">International Students:</p>
            <p>Successful completion of Year 12 in Australia or equivalent.</p>
            <p>An approved University Foundation program or formal Australian Certificate IV may also be taken to satisfy this entry requirement.</p>
          </div>
        ),
        englishRequirements: (
          <div className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed space-y-2">
            <p className="font-bold text-[#0B1F4A]">International Students:</p>
            <p>IELTS (Academic Module): Overall score of 6.0 (no band score less than 5.5) or equivalent</p>
          </div>
        ),
        ageRequirement: "Applicants must be 18 years of age or over at the time of Application/Enrolment, not only by commencement."
      },
      structure: {
        requirements: [
          "8 core units (1st year)",
          "PLUS 8 Accounting specialisation units",
          "PLUS Internship (equivalent to 2 units)",
          "PLUS 6 elective units"
        ],
        careerOutcomes: [
          "Management Accountant",
          "Financial Accountant",
          "Taxation Consultant",
          "Auditor"
        ]
      }
    }
  };

  const currentInfo = studentType === "domestic" ? info.domestic : info.international;

  return (
    <main className="">
      <CourseHero
        degreeLevel="Undergraduate degree"
        cricosCode="088193C"
        title="Bachelor of Business (Accounting)"
        description="An accounting qualification is sought after in today's global economy. The contemporary professional accountant is a multi-skilled, dynamic professional, well-positioned to offer value in most aspects of business."
        backgroundImageUrl="/study/hero.png"
        primaryButtonText="Apply"
        secondaryButtonText="Enquire"
      />

      <CourseStudentToggle value={studentType} onChange={setStudentType} />

      {/* Key Info box with accreditations underneath */}
      <div className="w-full bg-[#F8F9FA] pb-12 pt-8">
        <div className="w-full  mx-auto px-4 xl:px-[100px]">
          <CourseKeyInfo {...currentInfo.keyInfo} />
        </div>
      </div>

      <CourseTabs tabs={tabs} />

      {/* Overview & Entry Requirements */}
      <div className="w-full bg-[#F8F9FA] pb-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 xl:px-[100px]">
          <CourseOverviewContent {...currentInfo.overview} />
        </div>
      </div>

      {/* Career Outcomes & Course Requirements */}
      <div id="career" className="scroll-mt-24"></div>
      <div id="course-requirements" className="scroll-mt-24">
        <CourseStructureContent {...currentInfo.structure} />
      </div>

      <div id="structure" className="scroll-mt-24 pt-16">
        <div className="max-w-[1440px] mx-auto px-4 xl:px-[100px] mb-8">
          <h2 className="text-[28px] md:text-[36px] text-[#0B1F4A]" style={{ fontFamily: 'var(--font-dm-serif)', lineHeight: '110%' }}>Course Units</h2>
        </div>
        <CourseUnitsAccordion categories={bbaCategories} unitsData={bbaUnitsData} />
      </div>

      <div id="pathways" className="scroll-mt-24">
        <CoursePathways content={
          <>
            <p>Ozford Institute Of Higher Education provides quality education. If you successfully complete your CPA / CA Accredited Bachelor of Business Accounting course with Ozford you could pursue the following pathways:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Higher Education pathway on successful completion of Ozford High School Year 12.</li>
              <li>Higher Education pathways for eligible candidates once you have successfully completed Ozford English Language Centre.</li>
            </ul>
            <p className="mt-4">On completion of the Bachelor of Business Accounting course completed students will be eligible to commence studies at post-graduate level. Students may wish to apply for entry into Graduate Diploma or Masters Degree studies at Universities or other higher education providers in Australia or overseas. Alternatively, our graduates may wish to apply the skills and knowledge they learned at Ozford by entering the workforce. Graduates are eligible for membership of CPA Australia and Chartered Accountants Australia and New Zealand and have the opportunity to enrol for the educational programs offered by those organisations.</p>
          </>
        } />
      </div>

      <div className="w-full bg-white py-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 xl:px-[100px] flex flex-col gap-16">
          <div id="workload" className="scroll-mt-24">
            <StudentWorkload />
          </div>

        </div>
      </div>

      <div id="assessment" className="scroll-mt-24">
        <AssessmentMethods />
      </div>

      <div id="information" className="scroll-mt-24">
        <StudentInformationSection />
      </div>

      <CourseCTA title="Ready to Begin Your Bachelor of Business Accounting Journey?" />

      <Accreditations />
    </main>
  );
}

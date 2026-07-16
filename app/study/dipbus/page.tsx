'use client';

import React, { useState } from 'react';
import CourseHero from '@/components/CourseHero';
import CourseStudentToggle from '@/components/CourseStudentToggle';
import CourseKeyInfo from '@/components/CourseKeyInfo';
import CourseTabs from '@/components/CourseTabs';
import CourseOverviewContent from '@/components/CourseOverviewContent';
import CourseStructureContent from '@/components/CourseStructureContent';
import StudentInformationSection from '@/components/StudentInformationSection';
import CourseCTA from '@/components/CourseCTA';
import Accreditations from '@/components/Accreditations';
import CourseUnitsAccordion from '@/components/CourseUnitsAccordion';
import StudentWorkload from '@/components/StudentWorkload';
import CoursePathways from '@/components/CoursePathways';
import AssessmentMethods from '@/components/AssessmentMethods';
import { dipbusCategories, dipbusUnitsData } from './dipbusUnitsData';

export default function DiplomaOfBusiness() {
  const [studentType, setStudentType] = useState<'domestic' | 'international'>('domestic');

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
        duration: "1 Year, ( 2 Trimesters )",
        studyMode: "Full-time, face to face",
        location: "333, Queen Street Melbourne VIC 3000",
        intakes: "Jan, Feb, Apr, Oct, Dec (2026)",
        englishRequirement: "Domestic School Leavers: n/a",
        courseRequirement: "8 core units\n( as per 1st year Bachelor of Business)"
      },
      overview: {
        overviewText: (
          <div className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed">
            <p className="mb-4">The Diploma of Business program is designed to provide a range of diploma level study options for students who either do not seek, or are unable to extend the time required, to complete a full undergraduate degree.</p>
            <p className="mb-4">As well as having value in its own right as a stepping-stone into a number of career opportunities, students can also gain a streamlined pathway from the Higher Education Diploma into the Bachelor of Business and Bachelor of Business (Accounting) degrees through credit exemptions. That is, once students successfully complete the core higher education diploma of business courses units, they can gain direct entry into the second year of Bachelor degrees.</p>
            <p className="mb-4">To successfully complete the Diploma of Business Courses students will demonstrate the ability to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Integrate theoretical and technical knowledge and apply within a field of work and learning</li>
              <li>Review, analyse, and synthesise knowledge to act on information from a range of sources and communicate to relevant stakeholders.</li>
              <li>Apply thought, technical skills to analyse, plan, and design approaches to variable business problems and communicate to relevant stakeholders.</li>
              <li>Apply specialist technical and creative skills to communicate viewpoints and suggestions.</li>
              <li>Communicate and explain knowledge and specialised skills to others, with depth in some areas, in established or varied contexts</li>
              <li>Convey and apply theoretical and technical knowledge and creative skills in a range of contexts.</li>
              <li>Show responsibility to complete complex technical operations within general considerations of quantity and quality.</li>
              <li>Use initiative and judgement to organise the work of self and others and plan, coordinate and evaluate the work of teams within clear boundaries.</li>
            </ul>
          </div>
        ),
        overviewQuote: "",
        academicRequirements: (
          <div className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed space-y-2">
            <p className="font-bold text-[#0B1F4A]">Domestic School Leavers:</p>
            <p>Successful completion on of Year 12 in Australia or equivalent</p>
          </div>
        ),
        englishRequirements: (
          <div className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed space-y-2">
            <p className="font-bold text-[#0B1F4A]">Domestic School Leavers:</p>
            <p>n/a</p>
          </div>
        ),
        ageRequirement: "Applicants must be 18 years of age or over at the time of Application/Enrolment, not only by commencement."
      },
      structure: {
        requirements: [
          "8 core units",
          "( as per 1st year Bachelor of Business)"
        ],
        careerOutcomes: [
          "Administrator Assistant",
          "Management Assistant",
          "Accounts Clerk"
        ]
      }
    },
    international: {
      keyInfo: {
        duration: "1 Year, ( 2 Trimesters )",
        studyMode: "Full-time, face to face",
        location: "333, Queen Street Melbourne VIC 3000",
        intakes: "Jan, Feb, Apr, Oct, Dec (2026)",
        englishRequirement: (
          <>
            IELTS score of a minimum of 5.5 or equivalent<br />
            <a href="#english-requirements" onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('english-requirements');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }} className="underline hover:text-white transition-colors cursor-pointer">( check IELTS equivalence )</a>
          </>
        ),
        courseRequirement: "8 core units\n( as per 1st year Bachelor of Business)"
      },
      overview: {
        overviewText: (
          <div className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed">
            <p className="mb-4">The Diploma of Business program is designed to provide a range of diploma level study options for students who either do not seek, or are unable to extend the time required, to complete a full undergraduate degree.</p>
            <p className="mb-4">As well as having value in its own right as a stepping-stone into a number of career opportunities, students can also gain a streamlined pathway from the Higher Education Diploma into the Bachelor of Business and Bachelor of Business (Accounting) degrees through credit exemptions. That is, once students successfully complete the core higher education diploma of business courses units, they can gain direct entry into the second year of Bachelor degrees.</p>
            <p className="mb-4">To successfully complete the Diploma of Business Courses students will demonstrate the ability to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Integrate theoretical and technical knowledge and apply within a field of work and learning</li>
              <li>Review, analyse, and synthesise knowledge to act on information from a range of sources and communicate to relevant stakeholders.</li>
              <li>Apply thought, technical skills to analyse, plan, and design approaches to variable business problems and communicate to relevant stakeholders.</li>
              <li>Apply specialist technical and creative skills to communicate viewpoints and suggestions.</li>
              <li>Communicate and explain knowledge and specialised skills to others, with depth in some areas, in established or varied contexts</li>
              <li>Convey and apply theoretical and technical knowledge and creative skills in a range of contexts.</li>
              <li>Show responsibility to complete complex technical operations within general considerations of quantity and quality.</li>
              <li>Use initiative and judgement to organise the work of self and others and plan, coordinate and evaluate the work of teams within clear boundaries.</li>
            </ul>
          </div>
        ),
        overviewQuote: "",
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
            <p>IELTS (Academic Module): Overall score of 5.5 or equivalent</p>
          </div>
        ),
        ageRequirement: "Applicants must be 18 years of age or over at the time of Application/Enrolment, not only by commencement."
      },
      structure: {
        requirements: [
          "8 core units",
          "( as per 1st year Bachelor of Business)"
        ],
        careerOutcomes: [
          "Administrator Assistant",
          "Management Assistant",
          "Accounts Clerk"
        ]
      }
    }
  };
  const currentInfo = info[studentType];

  return (
    <main className="w-full bg-white min-h-screen">
      <CourseHero
        degreeLevel="Diploma degree"
        title="Diploma of Business"
        cricosCode="088194B"
        description="A Diploma of Business qualification can lead to a variety of opportunities in today's global economy in public service, education, health, manufacturing, service industries, e-commerce, mining and retail."
        backgroundImageUrl="/study/hero.png"
        primaryButtonText="Apply"
        secondaryButtonText="Enquire"
      />

      <CourseStudentToggle
        value={studentType}
        onChange={setStudentType}
      />

      <div className="scroll-mt-24 w-full bg-white pb-12 pt-8">
        <div className="w-full  mx-auto">
          <CourseKeyInfo {...currentInfo.keyInfo} />
        </div>
      </div>

      <CourseTabs tabs={tabs} />

      {/* Overview & Entry Requirements */}
      <div className="w-full bg-[#F8F9FA] pb-16">
        <div className="w-full mx-auto px-4 xl:px-[100px]">
          <CourseOverviewContent {...currentInfo.overview} />
        </div>
      </div>

      {/* Career Outcomes & Course Requirements */}
      <div id="career" className="scroll-mt-24"></div>
      <div id="course-requirements" className="scroll-mt-24">
        <CourseStructureContent {...currentInfo.structure} />
      </div>

      {/* Course Units */}
      <div id="structure" className="scroll-mt-24 pt-16">
        <div className="max-w-[1440px] mx-auto px-4 xl:px-[100px] mb-8">
          <h2 className="text-[28px] md:text-[36px] text-[#0B1F4A]" style={{ fontFamily: 'var(--font-dm-serif)', lineHeight: '110%' }}>Course Units</h2>
        </div>
        <CourseUnitsAccordion categories={dipbusCategories} unitsData={dipbusUnitsData} />
      </div>

      {/* Pathways */}
      <div id="pathways" className="scroll-mt-24">
        <CoursePathways content={
          <>
            <p className="mb-2">For those students requiring additional English language support, a minimum of 2 additional hours per week should be allocated.</p>
            <p className="mb-2">For those students studying this unit by block delivery all hours shown above should be doubled.</p>
            <p>On completion of the Diploma of Business students will be eligible to commence studies at under-graduate level. Students may wish to apply for entry into Bachelor Degree studies at Universities or other higher education providers in Australia or overseas. Alternatively, our graduates may wish to apply the skills and knowledge they learned at Ozford by entering the workforce.</p>
          </>
        } />
      </div>

      {/* Student Workload */}
      <div className="w-full bg-white py-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 xl:px-[100px] flex flex-col gap-16">
          <div id="workload" className="scroll-mt-24">
            <StudentWorkload
              timetabledHours={3}
              timetabledText="2 hours' Lecture plus 1 hour Tutorial"
              personalStudyHours={6}
              personalStudyText="Total 3 hours face-to-face per week"
            />
          </div>
        </div>
      </div>

      {/* Assessment Methods */}
      <div id="assessment" className="scroll-mt-24">
        <AssessmentMethods />
      </div>

      {/* Student Information */}
      <div id="information" className="scroll-mt-24">
        <StudentInformationSection />
      </div>

      <CourseCTA title="Ready to Begin Your Diploma of Business Journey?" />

      <Accreditations />
    </main>
  );
}

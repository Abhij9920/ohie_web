'use client';

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
import { bbusCategories, bbusUnitsData } from './bbusUnitsData';

export default function BachelorOfBusiness() {
  const [studentType, setStudentType] = useState<'domestic' | 'international'>('domestic');

  const tabs = [
    { id: 'key-facts', label: 'Key Facts' },
    { id: 'overview', label: 'Course Overview' },
    { id: 'entry', label: 'Academic Requirements' },
    { id: 'english-requirements', label: 'Language Requirements' },
    { id: 'age-requirements', label: 'Age Requirements' },
    { id: 'career', label: 'Career Outcomes' },
    { id: 'structure', label: 'Course Requirements' },
    { id: 'course-units', label: 'Course Structure' },
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
        courseRequirement: "8 core units (1st year)\nPLUS 6 Management specialisation units OR\n6 Marketing specialisation units OR\n6 Accounting specialisation units\nPLUS Internship (equivalent to 2 units)\nPLUS 8 elective units"
      },
      overview: {
        overviewText: (
          <div className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed">
            <p className="mb-4">The Bachelor of Business courses allows students to choose two specialisations from management, marketing and accounting which should increase their employability potential. The Bachelor of Business program provides you with essential knowledge, skills and application in these areas opening up opportunities for personal development as well as broadening your career options.</p>
            <p className="mb-4">Students have the opportunity of membership pathways to the Marketing Institute of Australia and the Australian Institute of Management, ensuring that they receive recognition of their skills and knowledge within their chosen profession. Students should consult the relevant membership body about membership pathways.</p>
            <p className="mb-4">To successfully complete the Bachelor of Business in business management/ marketing/ accounting students will demonstrate the ability to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Integrate theoretical and technical knowledge and apply within a field of work and learning</li>
              <li>Review, analyse, and synthesise knowledge to act on information from a range of sources and communicate to relevant stakeholders.</li>
              <li>Apply thought, technical skills to analyse, plan, and design approaches to variable business problems and communicate to relevant stakeholders.</li>
              <li>Apply specialist technical and creative skills to communicate viewpoints and suggestions.</li>
              <li>Communicate and explain knowledge and specialised skills to others, with depth in some areas, in established or varied contexts.</li>
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
          "8 core units (1st year)",
          "PLUS 6 Management specialisation units OR",
          "6 Marketing specialisation units OR",
          "6 Accounting specialisation units",
          "PLUS Internship (equivalent to 2 units)",
          "PLUS 8 elective units"
        ],
        careerOutcomes: [
          <React.Fragment key="acc">
            <span className="font-bold text-[#0B1F4A]">Accounting Specialisation</span>
            <br />Decision making, strategic and financial planning, market analysis, auditing, and forensic accounting.
          </React.Fragment>,
          <React.Fragment key="mgt">
            <span className="font-bold text-[#0B1F4A]">Management Specialisation</span>
            <br />Administration, coordination, team leadership, human resource management, recruitment and workforce planning roles.
          </React.Fragment>,
          <React.Fragment key="mkt">
            <span className="font-bold text-[#0B1F4A]">Marketing Specialisation</span>
            <br />Marketing analyst, marketing assistant, marketing co-ordinator, marketing communications manager, marketing manager, marketing strategist.
          </React.Fragment>
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
        courseRequirement: "8 core units (1st year)\nPLUS 6 Management specialisation units OR\n6 Marketing specialisation units OR\n6 Accounting specialisation units\nPLUS Internship (equivalent to 2 units)\nPLUS 8 elective units"
      },
      overview: {
        overviewText: (
          <div className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed">
            <p className="mb-4">The Bachelor of Business courses allows students to choose two specialisations from management, marketing and accounting which should increase their employability potential. The Bachelor of Business program provides you with essential knowledge, skills and application in these areas opening up opportunities for personal development as well as broadening your career options.</p>
            <p className="mb-4">Students have the opportunity of membership pathways to the Marketing Institute of Australia and the Australian Institute of Management, ensuring that they receive recognition of their skills and knowledge within their chosen profession. Students should consult the relevant membership body about membership pathways.</p>
            <p className="mb-4">To successfully complete the Bachelor of Business in business management/ marketing/ accounting students will demonstrate the ability to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Integrate theoretical and technical knowledge and apply within a field of work and learning</li>
              <li>Review, analyse, and synthesise knowledge to act on information from a range of sources and communicate to relevant stakeholders.</li>
              <li>Apply thought, technical skills to analyse, plan, and design approaches to variable business problems and communicate to relevant stakeholders.</li>
              <li>Apply specialist technical and creative skills to communicate viewpoints and suggestions.</li>
              <li>Communicate and explain knowledge and specialised skills to others, with depth in some areas, in established or varied contexts.</li>
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
            <p>IELTS (Academic Module): Overall score of 6.0 (no band score less than 5.5) or equivalent</p>
          </div>
        ),
        ageRequirement: "Applicants must be 18 years of age or over at the time of Application/Enrolment, not only by commencement."
      },
      structure: {
        requirements: [
          "8 core units (1st year)",
          "PLUS 6 Management specialisation units OR",
          "6 Marketing specialisation units OR",
          "6 Accounting specialisation units",
          "PLUS Internship (equivalent to 2 units)",
          "PLUS 8 elective units"
        ],
        careerOutcomes: [
          <React.Fragment key="acc">
            <span className="font-bold text-[#0B1F4A]">Accounting Specialisation</span>
            <br />Decision making, strategic and financial planning, market analysis, auditing, and forensic accounting.
          </React.Fragment>,
          <React.Fragment key="mgt">
            <span className="font-bold text-[#0B1F4A]">Management Specialisation</span>
            <br />Administration, coordination, team leadership, human resource management, recruitment and workforce planning roles.
          </React.Fragment>,
          <React.Fragment key="mkt">
            <span className="font-bold text-[#0B1F4A]">Marketing Specialisation</span>
            <br />Marketing analyst, marketing assistant, marketing co-ordinator, marketing communications manager, marketing manager, marketing strategist.
          </React.Fragment>
        ]
      }
    }
  };

  const currentInfo = info[studentType];

  return (
    <main className="w-full bg-[#F8F9FA] min-h-screen">
      <CourseHero
        degreeLevel="Undergraduate degree"
        title="Bachelor of Business"
        cricosCode="088192D"
        description="The Bachelor of Business suite of units allows students to undertake studies in business and management related fields, preparing you for a variety of career opportunities, including marketing, general business management, human resource marketing and accounting."
        backgroundImageUrl="/study/hero.png"
        primaryButtonText="Apply"
        secondaryButtonText="Enquire"
      />

      <CourseStudentToggle
        value={studentType}
        onChange={setStudentType}
      />

      <div id="key-facts" className="scroll-mt-24 w-full bg-[#F8F9FA] pb-12 pt-8">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px] xl:px-[100px]">
          <CourseKeyInfo {...currentInfo.keyInfo} />
        </div>
      </div>

      <CourseTabs tabs={tabs} />

      <div id="course-overview" className="scroll-mt-24 w-full bg-[#F8F9FA] pb-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px] xl:px-[100px]">
          <CourseOverviewContent {...currentInfo.overview} />
        </div>
      </div>

      <div id="career" className="scroll-mt-24">
        <CourseStructureContent {...currentInfo.structure} />
      </div>

      <div id="course-units" className="scroll-mt-24 pt-16">

        <CourseUnitsAccordion categories={bbusCategories} unitsData={bbusUnitsData} />
      </div>

      <div className="w-full bg-white py-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px] xl:px-[100px] flex flex-col gap-12">
          
          <div id="workload" className="scroll-mt-24">
            <h2 className="text-[28px] md:text-[36px] text-[#0B1F4A] mb-4" style={{ fontFamily: 'var(--font-dm-serif)', lineHeight: '110%' }}>Student Workload</h2>
            <p className="text-[#4B5563] text-[15px] md:text-[16px] font-bold mb-4">
              The table below indicates the expected student workload per week for this unit.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse border border-gray-300 text-left text-[14px] md:text-[15px]">
                <thead>
                  <tr className="bg-[#F8F9FA]">
                    <th className="border border-gray-300 p-3 font-semibold text-[#0B1F4A]">No. timetabled hours per week (1)</th>
                    <th className="border border-gray-300 p-3 font-semibold text-[#0B1F4A]">No. personal study hours per week (2)</th>
                    <th className="border border-gray-300 p-3 font-semibold text-[#0B1F4A]">Total workload hours per week (3)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 text-[#4B5563]">
                      2 hours&apos; Lecture plus 1 hour Tutorial<br/>
                      Total 3 hours face-to-face per week
                    </td>
                    <td className="border border-gray-300 p-3 text-[#4B5563]">6 hours</td>
                    <td className="border border-gray-300 p-3 text-[#4B5563]">9 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-[#4B5563] text-[14px] leading-relaxed">
              <p>Total time spent per week at lectures, tutorials, clinical and other placements, etc.</p>
              <p>(2) Total time students are expected to spend per week in studying, completing assignments, etc.</p>
              <p>(3) Sum of (1) and (2) equals workload hours.</p>
              <p>For those students requiring additional English language support, a minimum of 2 additional hours per week should be allocated.</p>
              <p>For those students studying this unit by block delivery all hours shown above should be doubled.</p>
            </div>
          </div>

          <hr className="border-gray-200" />

          <div id="pathways" className="scroll-mt-24">
            <h2 className="text-[28px] md:text-[36px] text-[#0B1F4A] mb-4" style={{ fontFamily: 'var(--font-dm-serif)', lineHeight: '110%' }}>Pathways</h2>
            <div className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed">
              <p className="mb-4">Ozford Institute Of Higher Education provides quality education. If you successfully complete your CPA / CA Accredited Bachelor of Business Accounting course with Ozford you could pursue the following pathways:</p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Higher Education pathway on successful completion of Ozford High School Year 12.</li>
                <li>Higher Education pathways for eligible candidates once you have successfully completed Ozford English Language Centre.</li>
              </ul>
              <p>On completion of the Bachelor of Business Accounting course completed students will be eligible to commence studies at post-graduate level. Students may wish to apply for entry into Graduate Diploma or Masters Degree studies at Universities or other higher education providers in Australia or overseas. Alternatively, our graduates may wish to apply the skills and knowledge they learned at Ozford by entering the workforce. Graduates are eligible for membership of CPA Australia and Chartered Accountants Australia and New Zealand and have the opportunity to enrol for the educational programs offered by those organisations.</p>
            </div>
          </div>

          <hr className="border-gray-200" />

          <div id="assessment" className="scroll-mt-24">
            <h2 className="text-[28px] md:text-[36px] text-[#0B1F4A] mb-4" style={{ fontFamily: 'var(--font-dm-serif)', lineHeight: '110%' }}>Assessment Methods</h2>
            <div className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed">
              <p className="mb-4">Assessment methods used for each bachelor of accounting course will vary depending on the individual unit of study. Generally, assessment will comprise one of more of the following methods with different percentage weightings being applied to each:</p>
              <ul className="list-disc pl-5 mb-6 space-y-1">
                <li>Class Test</li>
                <li>Online Test or Quiz</li>
                <li>Written Assignment</li>
                <li>Oral Class Presentation</li>
              </ul>
              <p className="mb-2">For example the unit, Marketing Principles (MKT1100) has the following assessment:</p>
              <div className="mb-2">
                <span className="underline block">Class presentation (Individual class presentation based on group assignment: Topics 5-10) - 10%</span>
                <span className="underline block">Group Assignment (Topics 5-10) (2500 words written) - 30%</span>
                <span className="underline block">Exam (All topics: 3 hours duration) - 60%</span>
              </div>
              <p>The assessment requirements are detailed in the each &quot;Subject Outline&quot; in Moodle.</p>
            </div>
          </div>

        </div>
      </div>

      <div id="information" className="scroll-mt-24">
        <StudentInformationSection />
      </div>

      <CourseCTA title="Ready to Begin Your Bachelor of Business Journey?" secondaryButtonText="Enquire Now" secondaryButtonLink="/#explore-courses" />

      <Accreditations />
    </main>
  );
}

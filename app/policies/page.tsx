'use client';

import React, { useState, useEffect } from 'react';
import PageHeader from '@/components/PageHeader';

type PolicyBtn = string | { label: string; href: string };

interface PolicyItem {
  title: string;
  buttons: PolicyBtn[];
}

interface Category {
  id: string;
  label: string;
  policies: PolicyItem[];
}

const categories: Category[] = [
  {
    id: 'admissions',
    label: 'Admissions & Enrolment',
    policies: [
      { 
        title: 'Admissions', 
        buttons: [
          { label: 'Policy', href: '/policy/Admissions_Policy_2026_Fk9psbV.pdf' },
          { label: 'Procedure', href: '/policy/Admissions_Procedure_2026_LPwGAiN.pdf' }
        ] 
      },
      { 
        title: 'Deferring, Suspending, Cancelling Enrolment', 
        buttons: [
          { label: 'Policy', href: '/policy/Deferring_Suspending_Cancelling_Enrolment_Policy_2026_rp8klyO.pdf' },
          { label: 'Procedure', href: '/policy/Deferring_Suspending_Cancelling_Enrolment_Procedure_2026_DhyOn0P.pdf' }
        ] 
      },
      { 
        title: 'Terms and Conditions of Enrolment', 
        buttons: [
          { label: 'International', href: '/policy/Terms_and_Conditions_of_Enrolment_International_Students_2026_YNqdvry_jtW06bD.pdf' }, 
          { label: 'Domestic', href: '/policy/Terms_and_Conditions_of_Enrolment_Domestic_Students_2026_MLvSHSs.pdf' }
        ] 
      },
      { 
        title: 'Transfer Between Registered Providers', 
        buttons: [
          { label: 'Policy', href: '/policy/Transfer_Between_Registered_Providers_Policy_2026_NrNNabe.pdf' },
          { label: 'Procedure', href: '/policy/Transfer_Between_Registered_Providers_Procedure_2026_6sHMKIJ.pdf' }
        ] 
      },
      { 
        title: 'Engaging, Managing and Monitoring Performance of Education Agents', 
        buttons: [
          { label: 'Policy', href: '/policy/Engaging_Managing_and_Monitoring_The_Performance_of_Education_Agents_Policy_2026.pdf' },
          { label: 'Procedure', href: '/policy/Engaging_Managing_and_Monitoring_the_Performance_of_Education_Agents_Procedure_2026.pdf' }
        ] 
      },
      { 
        title: 'Credit Transfer and Articulation', 
        buttons: [
          { label: 'Policy', href: '/policy/Credit_Transfer_and_Articulation_Policy_2025_1.pdf' },
          { label: 'Procedure', href: '/policy/Credit_Transfer_and_Articulation_Procedure_2025.pdf' }
        ] 
      },
      { 
        title: 'Marketing and Advertising Materials', 
        buttons: [
          { label: 'Policy', href: '/policy/Marketing_and_Advertising_Materials_Policy_2025.pdf' },
          { label: 'Procedure', href: '/policy/Marketing_and_Advertising_Materials_Procedure_2025.pdf' }
        ] 
      },
    ],
  },
  {
    id: 'teaching',
    label: 'Teaching & Learning',
    policies: [
      { 
        title: 'Academic Appeals', 
        buttons: [
          { label: 'Policy', href: '/policy/Academic-Appeals-Policy-2023.pdf' },
          { label: 'Procedure', href: '/policy/Academic-Appeals-Procedure-2023.pdf' }
        ] 
      },
      { 
        title: 'Academic Integrity', 
        buttons: [
          { label: 'Policy', href: '/policy/Academic-Integrity-Policy-2023.pdf' },
          { label: 'Procedure', href: '/policy/Academic-Integrity-Procedure-2023.pdf' }
        ] 
      },
      { 
        title: 'Academic Progress', 
        buttons: [
          { label: 'Policy', href: '/policy/Academic-Progress-Policy-2024.pdf' },
          { label: 'Procedure', href: '/policy/Academic-Progress-Procedure-2024.pdf' }
        ] 
      },
      { 
        title: 'Assessment Policy and Procedures', 
        buttons: [
          { label: 'Policy', href: '/policy/Assessment_Policy_2026.pdf' },
          { label: 'Procedure', href: '/policy/Assessment_Procedure_2026.pdf' }
        ] 
      },
      { 
        title: 'Completion within Expected Duration', 
        buttons: [
          { label: 'Policy', href: '/policy/Completion-within-Expected-Duration-of-Study-Policy-2023.pdf' },
          { label: 'Procedure', href: '/policy/Completion-within-Expected-Duration-of-Study-Procedure-2023.pdf' }
        ] 
      },
      { 
        title: 'Conferral of Academic Qualifications', 
        buttons: [
          { label: 'Policy', href: '/policy/Conferral_of_Academic_Qualifications_Policy_2025.pdf' },
          { label: 'Procedure', href: '/policy/Conferral_of_Academic_Qualifications_Procedure_2025.pdf' }
        ] 
      },
      { 
        title: 'Conferral of Academic Titles', 
        buttons: [
          { label: 'Policy', href: '/policy/Conferral_of_Academic_Titles_Policy_2026.pdf' },
          { label: 'Procedure', href: '/policy/Conferral_of_Academic_Titles_Procedure_2026.pdf' }
        ] 
      },
      { 
        title: 'Course and Unit Development Approval and Review', 
        buttons: [
          { label: 'Policy', href: '/policy/Course_and_Unit_Development_Approval_and_Review_Policy_2025.pdf' },
          { label: 'Procedure', href: '/policy/Course_and_Unit_Development_Approval_and_Review_Procedure_2025.pdf' }
        ] 
      },
      { 
        title: 'English Language Support', 
        buttons: [
          { label: 'Policy', href: '/policy/English_Language_Support_Policy_2025.pdf' }
        ] 
      },
      { 
        title: 'Free Intellectual Enquiry in Learning and Teaching', 
        buttons: [
          { label: 'Policy', href: '/policy/Free_Intellectual_Enquiry_in_Learning_Teaching_Policy_2026.pdf' }
        ] 
      },
      { 
        title: 'Moderation of Assessment', 
        buttons: [
          { label: 'Policy', href: '/policy/Assessment_Moderation_Policy_2026.pdf' },
          { label: 'Procedure', href: '/policy/Assessment_Moderation_Procedure_2026.pdf' }
        ] 
      },
      { 
        title: 'Student Consultation', 
        buttons: [
          { label: 'Policy', href: '/policy/Student_Consultation_Policy_2025.pdf' },
          { label: 'Procedure', href: '/policy/Student_Consultation_Procedure_2025.pdf' }
        ] 
      },
      { 
        title: 'Student Study Load', 
        buttons: [
          { label: 'Policy', href: '/policy/Student_Study_Load_Policy_2026.pdf' },
          { label: 'Procedure', href: '/policy/Student_Study_Load_Procedure_2026.pdf' }
        ] 
      },
      { 
        title: 'Unit Coding Policy', 
        buttons: [
          { label: 'Policy', href: '/policy/Unit_Coding_Policy_2025.pdf' }
        ] 
      },
      { 
        title: 'Work Integrated Learning', 
        buttons: [
          { label: 'Policy', href: '/policy/Work_Integrated_Learning_Policy_2026.pdf' },
          { label: 'Procedure', href: '/policy/Work_Integrated_Learning_Procedure_2026.pdf' }
        ] 
      },
      { 
        title: 'Learning and Teaching Resources', 
        buttons: [
          { label: 'Policy', href: '/policy/Learning-and-Teaching-Resources-Policy-2023.pdf' },
          { label: 'Procedure', href: '/policy/Learning-and-Teaching-Resources-Procedure-2023.pdf' }
        ] 
      },
    ],
  },
  {
    id: 'student-services',
    label: 'Student Services & Administration',
    policies: [
      { 
        title: "Deferring, Suspending or Cancelling a Student's Enrolment", 
        buttons: [
          { label: 'Policy', href: '/policy/Deferring_Suspending_Cancelling_Enrolment_Policy_2026_NUKfarg.pdf' },
          { label: 'Procedure', href: '/policy/Deferring_Suspending_Cancelling_Enrolment_Procedure_2026_tWNnMvb.pdf' }
        ] 
      },
      { 
        title: 'Special Consideration', 
        buttons: [
          { label: 'Policy', href: '/policy/Special_Consideration_Policy_2026.pdf' },
          { label: 'Procedure', href: '/policy/Special_Consideration_Procedure_2026.pdf' }
        ] 
      },
      { 
        title: 'Student Feedback', 
        buttons: [
          { label: 'Policy', href: '/policy/Student_Feedback_Policy_2025.pdf' },
          { label: 'Procedure', href: '/policy/Student_Feedback_Procedure_2025.pdf' }
        ] 
      },
      { 
        title: 'Student Grievances and Appeals', 
        buttons: [
          { label: 'Policy', href: '/policy/Student_Grievances_and_Appeals_Policy_2026.pdf' },
          { label: 'Procedure', href: '/policy/Student_Grievances_and_Appeals_Procedure_2026.pdf' },
          { label: 'Complaint Form', href: '/policy/OZFORD-Complaint-formv2.pdf' }
        ] 
      },
      { 
        title: 'Student Support and Services', 
        buttons: [
          { label: 'Policy', href: '/policy/Student_Support_and_Services_Policy_2026_5cq4lze.pdf' },
          { label: 'Procedure', href: '/policy/Student_Support_and_Services_Procedure_2026_T2T3zHn.pdf' }
        ] 
      },
      { 
        title: 'Student Code of Conduct', 
        buttons: [
          { label: 'Policy', href: '/policy/Student_Code_of_Conduct_Policy_2026_lbHw2aW.pdf' },
          { label: 'Procedure', href: '/policy/Student_Code_of_Conduct_Procedure_2026_5nu964N.pdf' }
        ] 
      },
      { 
        title: 'Transfer Between Registered Providers', 
        buttons: [
          { label: 'Policy', href: '/policy/Transfer_Between_Registered_Providers_Policy_2026_eUDY8ch.pdf' },
          { label: 'Procedure', href: '/policy/Transfer_Between_Registered_Providers_Procedure_2026_P1DD6YW.pdf' }
        ] 
      },
      { 
        title: 'Records Management', 
        buttons: [
          { label: 'Policy', href: '/policy/Records_Management_Policy_2026_yYox2cr.pdf' },
          { label: 'Procedure', href: '/policy/Records_Management_Procedure_2026_qh2ZuM8.pdf' }
        ] 
      },
      { 
        title: 'Transfer Between Campuses and Courses', 
        buttons: [
          { label: 'Policy', href: '/policy/Transfer_between_Campuses_and_Courses_Policy_2026.pdf' },
          { label: 'Procedure', href: '/policy/Transfer_between_Campuses_and_Courses_Procedure_2026.pdf' }
        ] 
      },
    ],
  },
  {
    id: 'health-safety',
    label: 'Health & Safety',
    policies: [
      { 
        title: 'Anti-Bullying and Harassment', 
        buttons: [
          { label: 'Policy', href: '/policy/Anti-Bullying_and_Harassment_Policy_2025.pdf' },
          { label: 'Procedure', href: '/policy/Anti-Bullying_and_Harassment_Procedure_2025.pdf' }
        ] 
      },
      { 
        title: 'Anti-Discrimination', 
        buttons: [
          { label: 'Policy', href: '/policy/Anti-Discrimination_Policy_2025.pdf' },
          { label: 'Procedure', href: '/policy/Anti-Discrimination_Procedure_2025.pdf' }
        ] 
      },
      { 
        title: 'Diversity and Equity', 
        buttons: [
          { label: 'Policy', href: '/policy/Diversity_and_Equity_Policy_2025.pdf' },
          { label: 'Procedure', href: '/policy/Diversity_and_Equity_Procedure_2025.pdf' }
        ] 
      },
      { 
        title: 'Critical Incident', 
        buttons: [
          { label: 'Policy', href: '/policy/Critical_Incident_Policy_2026_hhUot1m.pdf' },
          { label: 'Procedure', href: '/policy/Cricital_Incident_Procedure_2026_Mo4sZ5q.pdf' }
        ] 
      },
      { 
        title: 'Occupational Health and Safety', 
        buttons: [
          { label: 'Policy', href: '/policy/Occupational-Health-and-Safety-Policy-2023.pdf' }
        ] 
      },
      { 
        title: 'Sexual Assault and Sexual Harassment (SASH)', 
        buttons: [
          { label: 'Policy', href: '/policy/SASH_Policy_2025.pdf' },
          { label: 'Procedure', href: '/policy/SASH_Procedure_2025.pdf' }
        ] 
      },
      { 
        title: 'Emergency Management Plan', 
        buttons: [
          { label: 'Emergency Management Plan Brisbane Campus', href: '/policy/2026_OIHE_Emergency_Management_Plan_Brisbane_Campus.pdf' },
          { label: 'Emergency Management Plan Melbourne Campus', href: '/policy/2026_OIHE_Emergency_Management_Plan_Melbourne_Campus.pdf' }
        ] 
      },
    ],
  },
  {
    id: 'facilities',
    label: 'Facilities & IT',
    policies: [
      { 
        title: 'Use of IT Facilities and Services Policy - Students', 
        buttons: [
          { label: 'Policy', href: '/policy/Use_of_IT_Facilities_and_Services_Policy_Students_2026_8VIJ1jQ.pdf' },
          { label: 'Procedure', href: '/policy/Use_of_IT_Facilities_and_Services_Procedure_Students_2026_fxLVaRd.pdf' }
        ] 
      },
      { 
        title: 'Use of IT Facilities and Services Policy - Staff', 
        buttons: [
          { label: 'Policy', href: '/policy/Use_of_IT_Facilities_and_Services_Policy_Staff_2026_IB6ykYA.pdf' },
          { label: 'Procedure', href: '/policy/Use_of_IT_facilities_and_Services_Procedure_Staff_2026_pDiTZaS.pdf' }
        ] 
      },
      { 
        title: 'Social Media Policy - Students', 
        buttons: [
          { label: 'Policy', href: '/policy/Social_Media_Policy_Students_2026_Tpn6zcO.pdf' },
          { label: 'Procedure', href: '/policy/Social_Media_Procedure_Students_2026_kzo73TI.pdf' }
        ] 
      },
      { 
        title: 'Social Media Policy - Staff', 
        buttons: [
          { label: 'Policy', href: '/policy/Social_Media_Policy_STAFF_2026_SKpgff6.pdf' },
          { label: 'Procedure', href: '/policy/Social_Media_Procedure_STAFF_2026_6LsPjcn.pdf' }
        ] 
      },
    ],
  },
  {
    id: 'finance',
    label: 'Finance & Governance',
    policies: [
      { 
        title: 'Business Continuity Management', 
        buttons: [
          { label: 'Policy', href: '/policy/Business_Continuity_Management_Policy_2026_YA2ekF4.pdf' }
        ] 
      },
      { 
        title: 'Changes to Registered Provider', 
        buttons: [
          { label: 'Policy', href: '/policy/Registering_courses__Changes_on_CRICOS_Policy_2026.pdf' },
          { label: 'Procedure', href: '/policy/Registering_courses__Changes_on_CRICOS_Procedure_2026.pdf' }
        ] 
      },
      { 
        title: 'Terms and Conditions - International Students', 
        buttons: [
          { label: 'Policy', href: '/policy/Terms_and_Conditions_of_Enrolment_International_Students_2026_YNqdvry_jtW06bD.pdf' }
        ] 
      },
      { 
        title: 'Terms and Conditions - Domestic Students', 
        buttons: [
          { label: 'Policy', href: '/policy/Terms_and_Conditions_of_Enrolment_Domestic_Students_2026_MLvSHSs.pdf' }
        ] 
      },
      { 
        title: 'International Student Fee Refund Policy', 
        buttons: [
          { label: 'Policy', href: '/policy/International_Student_Fee_Refund_Policy_2026_QGD4hrN.pdf' },
          { label: 'Procedure', href: '/policy/International_Student_Fee_Refund_Procedure_2026_GTmGK73.pdf' },
          { label: 'Application for Refund form', href: '/policy/2023-Application-for-Credit_Refund-Form_D8Jgbed.pdf' }
        ] 
      },
      { 
        title: 'Records Management', 
        buttons: [
          { label: 'Policy', href: '/policy/Records_Management_Policy_2026_yYox2cr.pdf' },
          { label: 'Procedure', href: '/policy/Records_Management_Procedure_2026_qh2ZuM8.pdf' }
        ] 
      },
      { 
        title: 'Domestic Student Fee Refund and Remission Policy', 
        buttons: [
          { label: 'Policy', href: '/policy/Domestic_Student_Fee_Refund_and_Remission_Policy_2026.pdf' },
          { label: 'Procedure', href: '/policy/Domestic_Student_Fee_Refund_and_Remission_Procedure_2026.pdf' }
        ] 
      },
      { 
        title: 'Registering Course on CRICOS', 
        buttons: [
          { label: 'Policy', href: '/policy/Registering_courses__Changes_on_CRICOS_Policy_2026.pdf' },
          { label: 'Procedure', href: '/policy/Registering_courses__Changes_on_CRICOS_Procedure_2026.pdf' }
        ] 
      },
      { 
        title: 'Policy Development and Review', 
        buttons: [
          { label: 'Policy', href: '/policy/Policy_Development_and_Review_Policy_2023.pdf' }
        ] 
      },
      { 
        title: 'Procedure Development and Review', 
        buttons: [
          { label: 'Policy', href: '/policy/Procedure_Development_and_Review_Policy_2023.pdf' }
        ] 
      },
      { 
        title: 'Benchmarking Policy and Procedure', 
        buttons: [
          { label: 'Policy', href: '/policy/Benchmarking_Policy_2026.pdf' },
          { label: 'Procedure', href: '/policy/Benchmarking_Procedure_2026.pdf' }
        ] 
      },
      { 
        title: 'Compliance', 
        buttons: [
          { label: 'Policy', href: '/policy/Compliance_Policy_2026_iiPwWku.pdf' },
          { label: 'Procedure', href: '/policy/Compliance_Procedure_2026_dFwT6My.pdf' }
        ] 
      },
      { 
        title: 'Course Discontinuation, Termination and Teach-out Policy', 
        buttons: [
          { label: 'Policy', href: '/policy/Course-Discontinuation-Termination-and-Teach-Out-Policy-2023.pdf' },
          { label: 'Procedure', href: '/policy/Course-Discontinuation-Termination-and-Teach-Out-Procedure-2023.pdf' }
        ] 
      },
      { 
        title: 'Academic Staff Professional Development Policy and Procedure', 
        buttons: [
          { label: 'Policy', href: '/policy/Academic_Staff_Professional_Development_Policy_2026_Mjfzkuz.pdf' },
          { label: 'Procedure', href: '/policy/Academic_Staff_Professional_Development_Procedure_2026_YPhqtp0.pdf' }
        ] 
      },
      { 
        title: 'Equivalence of Professional Experience and Academic Qualifications', 
        buttons: [
          { label: 'Policy', href: '/policy/Equivalence_of_Professional_Experience_and_Academic_Qualification_Policy_2026.pdf' }
        ] 
      },
      { 
        title: 'Human Resources Policy and Procedure Manual', 
        buttons: [
          { label: 'Policy', href: '/policy/Human_Resources_Policy_2026_ZVYcM6R.pdf' },
          { label: 'Procedure', href: '/policy/Human_Resources_Procedure_Manual_2026_b4B2kle.pdf' }
        ] 
      },
      { 
        title: 'Professional Staff Professional Development Policy and Procedure', 
        buttons: [
          { label: 'Policy', href: '/policy/Professional_Staff_Professional_Development_Policy_2026_jADeaqM.pdf' },
          { label: 'Procedure', href: '/policy/Professional_Staff_Professional_Development_Procedure_2026_y9w6e3n.pdf' }
        ] 
      },
      { 
        title: 'Privacy Policy', 
        buttons: [
          { label: 'Policy', href: '/policy/Privacy-Policy-2023.pdf' },
          { label: 'Procedure', href: '/policy/Privacy_Procedure_2026.pdf' }
        ] 
      },
      { 
        title: 'Staff Code of Conduct', 
        buttons: [
          { label: 'Policy', href: '/policy/Staff_Code_of_Conduct_Policy_2026_iBwIAGB.pdf' },
          { label: 'Procedure', href: '/policy/Staff_Code_of_Conduct_Procedure_2026_aSwo0pW.pdf' }
        ] 
      },
    ],
  },
];

const PolicyButton: React.FC<{ btn: PolicyBtn }> = ({ btn }) => {
  const label = typeof btn === 'string' ? btn : btn.label;
  const href = typeof btn === 'string' ? '#' : btn.href;
  
  const base = "px-[10px] py-1 text-[11px] font-medium  border cursor-pointer transition-all hover:shadow-sm";
  const outline = "bg-white text-[#2463A7] border-[#2463A7] hover:bg-[#2463A7] hover:text-white";

  if (href !== '#') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${outline}`}
      >
        {label}
      </a>
    );
  }

  return (
    <button className={`${base} ${outline}`}>
      {label}
    </button>
  );
};

export default function PoliciesPage() {
  const [activeCategory, setActiveCategory] = useState('admissions');
  const [searchTerm, setSearchTerm] = useState('');

  const handleScroll = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
      }
    );

    categories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const filteredCategories = categories.map(category => ({
    ...category,
    policies: category.policies.filter(policy =>
      policy.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.policies.length > 0);

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '#' },
          { label: 'Policies & Procedures', href: '/policies' }
        ]}
        title="Policies & Procedures"
        quote="Committed to transparency, fairness and compliance in all we do."
      />

      {/* Privacy Statement Banner */}
      <div className="w-full bg-[#2463A7] py-8 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-[100px] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-16">
          <div className="w-full md:w-[35%]">
            <h2
              className="text-white text-[32px] md:text-[40px] italic"
              style={{ fontFamily: 'var(--font-dm-serif)' }}
            >
              Privacy Statement
            </h2>
          </div>
          <div className="w-full md:w-[65%] text-white text-[14px] md:text-[14px] leading-relaxed">
            <p>
              <strong>OIHE</strong>(Ozford Institute of Higher Education Pty Ltd) respects the privacy of your personal information. The <strong>OHIE</strong> Privacy Policies and Procedures set out how Ozford manages personal information provided to or collected by it.
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-white font-sans">
        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-6 pt-8 pb-16">
          {/* Search Bar */}
          <div className="flex justify-center mb-10 md:mb-28">
            <div className="w-full max-w-[700px] flex">
              <div className="relative flex-grow">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.6">
                      <path d="M17.5001 17.5001L13.8835 13.8835M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#0B1F4A" strokeWidth="2" strokeLinecap="round" />
                    </g>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search policies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-full pl-14 pr-4 py-[14px] md:py-4 border border-[#E2E8F0] border-r-0 focus:outline-none focus:border-[#4D97E6] text-[#0B1F4A] placeholder:text-[#94A3B8] text-[15px] transition-colors"
                />
              </div>
              <button className="bg-[#4D97E6] hover:bg-[#3d83d1] text-white px-8 md:px-12 font-medium transition-colors text-[15px]">
                Search
              </button>
            </div>
          </div>

          <div className="flex  gap-10">
            {/* Sidebar Categories */}
            <div className="w-72 flex-shrink-0 sticky top-24 self-start">
              <div className="bg-[#0B1F4A] text-white">
                {/* Header */}
                <div className="px-8 pt-8 pb-4">
                  <h3 className="text-[24px]  text-white italic" style={{ fontFamily: 'var(--font-dm-serif)' }}>Categories</h3>
                  <div className="h-[2px] w-[40px] bg-[#4D97E6] mt-4"></div>
                </div>

                {/* Categories List */}
                <div className="px-8 pb-10 flex flex-col gap-[18px] mt-4">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id);
                        handleScroll(category.id);
                      }}
                      className={`w-full text-left font-sans text-[13px] leading-tight transition-colors duration-200 ${activeCategory === category.id
                        ? 'text-white font-semibold'
                        : 'text-white/70 font-normal hover:text-white'
                        }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Policies Content */}
            <div className="flex-1">
              {filteredCategories.map((category) => (
                <div key={category.id} id={category.id} className="mb-16 scroll-mt-8">
                  <h2 className="text-[22px]  text-[#0B1F4A] mb-6 pb-2 inline-block">
                    {category.label}
                  </h2>
                  <div className="w-[52px] h-[3px] bg-[#4D97E6] -mt-6"></div>

                  <div className="space-y-0">
                    {category.policies.map((policy, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between bg-white border-b border-[#E8E8E4] hover:border-[#E8E8E4] px-8 py-[18px] group transition-all"
                      >
                        <p className="text-[14px] leading-relaxed text-[#0B1F4A] pr-8 ">
                          {policy.title}
                        </p>

                        <div className="flex items-center gap-3 flex-wrap justify-end">
                          {policy.buttons.map((btn, i) => (
                            <PolicyButton
                              key={i}
                              btn={btn}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-[#0B1F4A] py-16 text-white w-full">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h3 className="text-[36px] text-white italic mb-2" style={{ fontFamily: 'var(--font-dm-serif)' }}>
                Looking for a specific document?
              </h3>
              <p className="text-[#4D97E6] text-[15px] font-sans">
                Contact us if you cannot find the policy you are looking for.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a href="/contact-us" className="bg-[#4D97E6] text-[#0B1F4A] hover:bg-[#3b85d4] px-8 py-3 text-[14px] font-medium transition-colors text-center">
                Contact Us
              </a>
              <a href="mailto:compliance@oihe.edu.au" className="border border-white text-white hover:bg-white/10 px-8 py-3 text-[14px] font-medium transition-colors text-center">
                Email Compliance Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
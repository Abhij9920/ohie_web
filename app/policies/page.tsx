'use client';

import React, { useState } from 'react';

interface PolicyItem {
  title: string;
  buttons: string[];
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
      { title: 'Admissions', buttons: ['Policy', 'Procedure'] },
      { title: 'Deferring, Suspending, Cancelling Enrolment', buttons: ['Policy', 'Procedure'] },
      { title: 'Terms and Conditions of Enrolment - International Students', buttons: ['International', 'Domestic'] },
      { title: 'Transfer Between Registered Providers', buttons: ['Policy', 'Procedure'] },
      { title: 'Engaging, Managing and Monitoring Performance of Education Agents', buttons: ['Policy', 'Procedure'] },
      { title: 'Credit Transfer and Articulation', buttons: ['Policy', 'Procedure'] },
      { title: 'Marketing and Advertising Materials', buttons: ['Policy', 'Procedure'] },
    ],
  },
  {
    id: 'teaching',
    label: 'Teaching & Learning',
    policies: [
      { title: 'Academic Appeals', buttons: ['Policy', 'Procedure'] },
      { title: 'Academic Integrity', buttons: ['Policy', 'Procedure'] },
      { title: 'Academic Progress', buttons: ['Policy', 'Procedure'] },
      { title: 'Assessment Policy and Procedures', buttons: ['Policy', 'Procedure'] },
      { title: 'Completion within Expected Duration', buttons: ['Policy', 'Procedure'] },
      { title: 'Conferral of Academic Qualifications', buttons: ['Policy', 'Procedure'] },
      { title: 'Conferral of Academic Titles', buttons: ['Policy', 'Procedure'] },
      { title: 'Course and Unit Development Approval and Review', buttons: ['Policy', 'Procedure'] },
      { title: 'English Language Support', buttons: ['Policy'] },
      { title: 'Free Intellectual Enquiry in Learning and Teaching', buttons: ['Policy'] },
      { title: 'Moderation of Assessment', buttons: ['Policy', 'Procedure'] },
      { title: 'Student Consultation', buttons: ['Policy', 'Procedure'] },
      { title: 'Student Study Load', buttons: ['Policy', 'Procedure'] },
      { title: 'Unit Costing Policy', buttons: ['Policy'] },
      { title: 'Work Integrated Learning', buttons: ['Policy', 'Procedure'] },
      { title: 'Learning and Teaching Resources', buttons: ['Policy', 'Procedure'] },
    ],
  },
  {
    id: 'student-services',
    label: 'Student Services & Administration',
    policies: [
      { title: "Deferring, Suspending or Cancelling a Student's Enrolment", buttons: ['Policy', 'Procedure'] },
      { title: 'Special Consideration', buttons: ['Policy', 'Procedure'] },
      { title: 'Student Feedback', buttons: ['Policy', 'Procedure'] },
      { title: 'Student Grievances and Appeals', buttons: ['Policy', 'Procedure', 'Complaint Form'] },
      { title: 'Student Support and Services', buttons: ['Policy', 'Procedure'] },
      { title: 'Student Code of Conduct', buttons: ['Policy', 'Procedure'] },
      { title: 'Transfer Between Registered Providers', buttons: ['Policy', 'Procedure'] },
      { title: 'Records Management', buttons: ['Policy', 'Procedure'] },
      { title: 'Transfer Between Campuses and Courses', buttons: ['Policy', 'Procedure'] },
    ],
  },
  {
    id: 'health-safety',
    label: 'Health & Safety',
    policies: [
      { title: 'Anti-Bullying and Harassment', buttons: ['Policy', 'Procedure'] },
      { title: 'Anti-Discrimination', buttons: ['Policy', 'Procedure'] },
      { title: 'Diversity and Equity', buttons: ['Policy', 'Procedure'] },
      { title: 'Critical Incident', buttons: ['Policy', 'Procedure'] },
      { title: 'Occupational Health and Safety', buttons: ['Policy'] },
      { title: 'Sexual Assault and Sexual Harassment (SASH)', buttons: ['Policy', 'Procedure'] },
      { title: 'Emergency Management Plan', buttons: ['Policy', 'Procedure'] },
    ],
  },
  {
    id: 'facilities',
    label: 'Facilities & IT',
    policies: [
      { title: 'Use of IT Facilities and Services Policy - Students', buttons: ['Policy', 'Procedure'] },
      { title: 'Use of IT Facilities and Services Policy - Staff', buttons: ['Policy', 'Procedure'] },
      { title: 'Social Media Policy - Students', buttons: ['Policy', 'Procedure'] },
      { title: 'Social Media Policy - Staff', buttons: ['Policy', 'Procedure'] },
    ],
  },
  {
    id: 'finance',
    label: 'Finance & Governance',
    policies: [
      { title: 'Business Continuity Management', buttons: ['Policy'] },
      { title: 'Changes to Registered Provider', buttons: ['Policy'] },
      { title: 'Terms and Conditions - International Students', buttons: ['Policy'] },
      { title: 'Terms and Conditions - Domestic Students', buttons: ['Policy'] },
      { title: 'International Student Fee Refund Policy', buttons: ['Policy', 'Procedure', 'Application for Refund form'] },
      { title: 'Records Management', buttons: ['Policy', 'Procedure'] },
      { title: 'Domestic Student Fee Refund and Remission Policy', buttons: ['Policy', 'Procedure'] },
      { title: 'Registering Course on CRICOS', buttons: ['Policy', 'Procedure'] },
      { title: 'Policy Development and Review', buttons: ['Policy'] },
      { title: 'Procedure Development and Review', buttons: ['Policy'] },
      { title: 'Benchmarking Policy and Procedure', buttons: ['Policy', 'Procedure'] },
      { title: 'Compliance', buttons: ['Policy', 'Procedure'] },
      { title: 'Course Discontinuation, Termination and Teach-out Policy', buttons: ['Policy', 'Procedure'] },
      { title: 'Academic Staff Professional Development Policy and Procedure', buttons: ['Policy', 'Procedure'] },
      { title: 'Equivalence of Professional Experience and Academic Qualifications', buttons: ['Policy', 'Procedure'] },
      { title: 'Human Resources Policy and Procedure Manual', buttons: ['Policy', 'Procedure'] },
      { title: 'Professional Staff Professional Development Policy and Procedure', buttons: ['Policy', 'Procedure'] },
      { title: 'Privacy Policy', buttons: ['Policy', 'Procedure'] },
      { title: 'Staff Code of Conduct', buttons: ['Policy', 'Procedure'] },
    ],
  },
];

const PolicyButton: React.FC<{ label: string; variant?: 'primary' | 'outline' }> = ({
  label,
  variant = 'outline'
}) => {
  const base = "px-[10px] py-1 text-[11px] font-medium rounded border transition-all hover:shadow-sm";
  const primary = "bg-blue-700 text-white border-blue-700 hover:bg-blue-800";
  const outline = "bg-white text-gray-700 border-[#2463A7] hover:bg-[#2463A7] hover:text-white";

  return (
    <button
      //className={`${base} ${variant === 'primary' ? primary : outline}`}
      className={`${base} ${outline}`}
    >
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

  const filteredCategories = categories.map(category => ({
    ...category,
    policies: category.policies.filter(policy =>
      policy.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.policies.length > 0);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-16">
        {/* Search Bar */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search policies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-28 py-3 border border-gray-300  focus:outline-none focus:border-[#4D97E6] text-gray-700 placeholder:text-gray-400"
            />
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </div>
            <button className="absolute right-0 top-0 bottom-0 bg-[#4D97E6] hover:bg-[#4D97E6] text-white px-6  font-medium transition-colors">
              Search
            </button>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar Categories */}
          <div className="w-72 flex-shrink-0 sticky top-24 self-start">
            <div className="bg-[#1e2a44] text-white rounded-2xl overflow-hidden shadow-xl">
              {/* Header */}
              <div className="px-8 py-6 ">
                <h3 className="text-[24px] font-semibold text-white font-dm-serif italic">Categories</h3>
                <div className="h-0.5 w-10 bg-blue-500 mt-2 rounded"></div>
              </div>

              {/* Categories List */}
              <div className="pb-3 px-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      handleScroll?.(category.id); // optional chaining in case handleScroll doesn't exist
                    }}
                    className={`w-full text-left px-6 py-[16px] rounded-xl font-plus-jakarta text-[13px] leading-none transition-all duration-200 ${activeCategory === category.id
                        ? 'bg-[#1e2a44] text-white font-semibold'
                        : 'text-white/90 bg-transparent hover:bg-white/10 hover:text-white font-normal'
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
                <h2 className="text-2xl font-semibold text-[#0B1F4A] mb-6 pb-2 inline-block">
                  {category.label}
                </h2>
                <div className="w-[52px] h-[2px] bg-[#4D97E6] -mt-4"></div>

                <div className="space-y-0">
                  {category.policies.map((policy, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between bg-white border-b border-gray-200 hover:border-gray-300  px-8 py-[18px] group transition-all"
                    >
                      <p className="text-[14px] leading-relaxed text-[#0B1F4A] pr-8 font-plus-jakarta ">
                        {policy.title}
                      </p>

                      <div className="flex items-center gap-3 flex-wrap justify-end">
                        {policy.buttons.map((btn, i) => (
                          <PolicyButton
                            key={i}
                            label={btn}
                            variant={btn === 'Policy' ? 'primary' : 'outline'}
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
      <div className="bg-[#1e2a44] py-16 text-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h3 className="text-2xl font-semibold mb-4">Looking for a specific document?</h3>
          <p className="text-gray-300 mb-8 max-w-md mx-auto">
            Contact us if you cannot find the policy you are looking for.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3.5 rounded-xl font-medium transition-colors">
              Contact Us
            </button>
            <button className="border border-white/70 hover:bg-white/10 px-8 py-3.5 rounded-xl font-medium transition-colors">
              Email Compliance Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
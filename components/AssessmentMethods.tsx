'use client';

import React from 'react';

const assessmentMethods = [
  "Practical Exercises",
  "Mid-Semester Tests",
  "Reflective Journal Reports",
  "Individual and Group Presentations",
  "Individual and Group Projects and Assignments",
  "Case Study Analyses and Reports",
  "Workplace Evaluation"
];

export default function AssessmentMethods() {
  return (
    <section className="w-full flex flex-col lg:flex-row">
      {/* Left Side: Dark Blue (grows to fill left space) */}
      <div className="w-full lg:w-[40%] bg-[#0A1A44] flex justify-end">
        {/* Constrain content width to 40% of max-w-1440 = 576px */}
        <div className="w-full max-w-[576px] px-4 xl:pl-[100px] lg:pr-16 py-16 lg:py-24">
          <h4 className="text-[#4D97E6] text-[11px] font-bold tracking-widest uppercase mb-6">
            Assessment
          </h4>
          <h2 
            className="text-white text-[32px] lg:text-[36px] xl:text-[48px] italic whitespace-nowrap" 
            style={{ fontFamily: 'var(--font-dm-serif)', lineHeight: '1.2' }}
          >
            Assessment Methods
          </h2>
          <div className="w-12 h-[3px] bg-[#4D97E6] mt-8"></div>
        </div>
      </div>

      {/* Right Side: Off White (grows to fill right space) */}
      <div className="w-full lg:w-[60%] bg-[#F8F9FA] flex justify-start">
        {/* Constrain content width to 60% of max-w-1440 = 864px */}
        <div className="w-full max-w-[864px] px-4 lg:pl-16 xl:pr-[100px] py-16 lg:py-24">
          <p className="text-[#4B5563] text-[14px] md:text-[15px] leading-relaxed mb-10">
            Assessment methods used for each course will vary depending on the individual unit of study. Generally, the assessment will comprise one or more assessment items with different percentage weightings being applied to each. Types of assessment items include (but not limited to):
          </p>

          <div className="flex flex-col">
            {assessmentMethods.map((method, i) => (
              <div key={i} className="flex items-center border-b border-gray-200/60 py-4">
                <div className="w-[3px] h-4 bg-[#2863A3] mr-4 shrink-0"></div>
                <span className="text-[#0B1F4A] font-semibold text-[14px] md:text-[15px]">
                  {method}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

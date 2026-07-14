import React from 'react';

export interface CourseStructureContentProps {
  eyebrow?: string;
  title?: string;
  requirementsTitle?: string;
  requirements?: string[];
  careerOutcomesTitle?: string;
  careerOutcomes?: string[];
}

export default function CourseStructureContent({
  eyebrow = "COURSE STRUCTURE",
  title = "Course Units",
  requirementsTitle = "REQUIREMENTS",
  requirements = [
    "13 core units PLUS 3 cyber security specialisation units OR",
    "3 data analytics specialisation units OR",
    "3 software development specialisation units"
  ],
  careerOutcomesTitle = "CAREER OUTCOMES",
  careerOutcomes = [
    "Business Analyst",
    "Database Administrator",
    "Information Systems Manager",
    "ICT Consultant",
    "Systems Analyst"
  ]
}: CourseStructureContentProps) {

  const BulletPoint = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-start mb-4">
      <svg width="12" height="2" viewBox="0 0 12 2" className="flex-none shrink-0 mr-4 mt-[10px]" style={{ shapeRendering: 'crispEdges' }}>
        <rect width="12" height="2" fill="white" />
      </svg>
      <p className="text-white text-[15px] leading-relaxed flex-1 font-light">
        {children}
      </p>
    </div>
  );

  return (
    <section className="w-full bg-[#0A1A44] py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto px-4 xl:px-[100px]">
        <div className="flex flex-col lg:grid lg:grid-cols-12 items-center gap-8 lg:gap-16">

          {/* Left Column - Titles */}
          <div className="w-full lg:col-span-4 xl:col-span-3">
            <h4 className="text-[#4D97E6] text-[11px] font-bold tracking-widest uppercase mb-4">
              {eyebrow}
            </h4>
            <h2 className="text-[40px] md:text-[48px] text-white whitespace-nowrap" style={{ fontFamily: 'var(--font-dm-serif)', lineHeight: '1.1' }}>
              {title}
            </h2>
          </div>

          {/* Right Column - Boxes */}
          <div className="w-full lg:col-span-8 xl:col-span-9 flex flex-col md:flex-row gap-6">

            {/* Requirements Box */}
            <div className="flex-1 bg-[#2863A3] p-6 md:p-8">
              <h4 className="text-white text-[11px] font-bold tracking-widest uppercase mb-8">
                {requirementsTitle}
              </h4>
              <div className="flex flex-col">
                {requirements.map((req, i) => (
                  <BulletPoint key={i}>{req}</BulletPoint>
                ))}
              </div>
            </div>

            {/* Career Outcomes Box */}
            <div className="flex-1 border border-[#4F8CE6]/40 p-6 md:p-8">
              <h4 className="text-[#4F8CE6] text-[11px] font-bold tracking-widest uppercase mb-8">
                {careerOutcomesTitle}
              </h4>
              <div className="flex flex-col">
                {careerOutcomes.map((req, i) => (
                  <BulletPoint key={i}>{req}</BulletPoint>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

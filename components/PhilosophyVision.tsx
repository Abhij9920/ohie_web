import React from 'react';

const PurposeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4D97E6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const VisionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4D97E6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

interface VisionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const visionData: VisionCardProps[] = [
  {
    icon: <PurposeIcon />,
    title: "Our Purpose",
    description: "Our purpose is to create an innovative educational institution with the best possible opportunities offered to students to excel academically and maximise their potential."
  },
  {
    icon: <VisionIcon />,
    title: "Our Vision",
    description: "Our vision is to provide every student with the opportunity to develop skills attained by undertaking real-life learning based on global needs and progress. Our dedicated staff provide a student-focused approach to ensure a supportive, individualised and innovative learning experience. Ozford is committed to the achievement of excellence in education. A student's success is Ozford's success."
  }
];

const VisionCard = ({ icon, title, description }: VisionCardProps) => (
  <div className="bg-[#FAFAF7] border-t-3 border-[#4D97E6] p-8 md:p-10 lg:p-12 h-full">
    <div className="flex items-center gap-4 mb-6">
      {icon}
      <h3 className="text-[#1C1C1C] text-[28px] md:text-[36px] italic font-normal" style={{ fontFamily: 'var(--font-dm-serif)' }}>
        {title}
      </h3>
    </div>
    <p className="text-[#5C645F] text-[16px] leading-[1.7]">
      {description}
    </p>
  </div>
);

export default function PhilosophyVision() {
  return (
    <section className="w-full bg-white py-[60px] md:py-[80px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {visionData.map((data, idx) => (
            <VisionCard key={idx} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
}

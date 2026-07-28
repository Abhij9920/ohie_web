import React from 'react';
import Image from 'next/image';

const CheckIcon = () => (
  <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 flex-shrink-0">
    <g clipPath="url(#clip0_6510_9054)">
      <path d="M5.99907 10.0031L7.33251 11.3366L9.99939 8.6697M14.6664 10.0031C14.6664 13.6853 11.6814 16.6703 7.99923 16.6703C4.31704 16.6703 1.33203 13.6853 1.33203 10.0031C1.33203 6.32094 4.31704 3.33594 7.99923 3.33594C11.6814 3.33594 14.6664 6.32094 14.6664 10.0031Z" stroke="#2463A7" strokeWidth="2" strokeLinecap="round" />
    </g>
    <defs>
      <clipPath id="clip0_6510_9054">
        <rect width="16" height="16" fill="white" transform="translate(0 2)" />
      </clipPath>
    </defs>
  </svg>
);

export default function AboutHeritage() {
  const achievements = [
    "Ongoing commitment to excellence and innovation in education and training.",
    "Personalised, nurturing environment where students can develop skills and values for their chosen needs.",
    "Student success \u2013 increased number of student job interviews and job placements",
    "Staff are highly professional, committed and dedicated to Ozford's philosophy and values.",
    "Ozford's programs continue to develop and improve.",
    "Student feedback indicates students are very pleased with Ozford's teaching and learning.",
    "Students consistently report they would recommend Ozford to friends and family."
  ];

  return (
    <section className="w-full bg-white py-[60px] md:py-[100px] lg:py-[120px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px] xl:px-[100px]">
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Left Column (Image) */}
          <div className="w-full lg:w-[45%]">
            <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              <Image
                src={require("../public/about-us/Library-Image.png")}
                alt="Brochure Stand at Ozford"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>

          {/* Right Column (Content) */}
          <div className="w-full lg:w-[55%] flex flex-col">
            <h3 className="text-[#2463A7] text-[12px] font-semibold tracking-[0.1em] uppercase mb-4">
              OUR HERITAGE
            </h3>

            <h2 className="text-[#0B1F4A] text-[36px] md:text-[48px] font-normal leading-[1.2] mb-6" style={{ fontFamily: 'var(--font-dm-serif)' }}>
              Beginnings
            </h2>

            <div className="text-[#1C1F1D] text-[15px] md:text-[15px] leading-[1.7]">
              <p>
                In the early 2000s the Ozford brand was conceived and a new provider embarked on a path to fulfil a dream of education and training to both domestic and international students from diverse backgrounds and varied economic and social means.
              </p>
            </div>

            <div className="w-full h-[1px] bg-[#E8E8E4] my-8 md:my-7"></div>

            <h3 className="text-[#0B1F4A] text-[24px] md:text-[28px] font-normal italic leading-[1.3] mb-6" style={{ fontFamily: 'var(--font-dm-serif)' }}>
              Where are we now?
            </h3>

            <ul className="flex flex-col gap-4">
              {achievements.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckIcon />
                  <span className="text-[#1C1F1D] text-[14px] leading-[1.6]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}

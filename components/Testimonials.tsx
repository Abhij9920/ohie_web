"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const testimonialsData = [
  {
    quote: "This college has been a great place for me to start my journey and work towards my future goals. From the moment I joined, I felt welcomed and supported by the lecturers and staff.",
    name: "Mr Devlin Venedict",
    title: "Bachelor of Business",
    image: "/testimonials/img1.webp"
  },
  {
    quote: "Ozford has provided a positive and supportive learning environment. The teachers are passionate, friendly, and always willing to help.",
    name: "Thuc Quy Bui",
    title: "ELICOS and High School",
    image: "/testimonials/img2.webp"
  },
  {
    quote: "Studying at OZFORD has been an incredible journey of growth and discovery. The learning experience goes far beyond textbooks — it encourages critical thinking, collaboration, and real-world application.",
    name: "Nick Nguyen",
    title: "ELICOS and High School",
    image: "/testimonials/img3.webp"
  },
  {
    quote: "Studying at Ozford Institute of Higher Education has been an incredibly rewarding journey. The academic environment is both inspiring and empowering.",
    name: "Ridhima Shokeen",
    title: "BBA",
    image: "/testimonials/img4.webp"
  },
  {
    quote: "While studying in Ozford, it was so much fun. The teachers were so co-operative, more like friends. Not only they teach us the necessary knowledge, they always motivate us.",
    name: "Ms. Ratna GT",
    title: "Master of Professional Accounting",
    image: "/testimonials/img5.webp"
  },
  {
    quote: "Reminiscing over my days at Ozford brought back many happy memories: with a dynamic and quirky teaching team, I really established a bond with those who were looking after us.",
    name: "Enzo",
    title: "VCE",
    image: "/testimonials/img6.webp"
  }
];

// Duplicate the array to have enough items for the carousel to scroll through smoothly
const testimonials = [...testimonialsData, ...testimonialsData];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);
  const totalDots = maxIndex + 1;

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <section className="relative w-full py-[60px] md:py-[80px] lg:py-[100px] px-4 md:px-[40px] lg:px-[80px] overflow-hidden bg-[#F8FAFC]">

      {/* Background Image */}
      <div className="absolute inset-0 z-0 flex justify-center overflow-hidden pointer-events-none">
        <div className="w-full max-w-[1440px] h-full relative">
          <Image
            src="/testimonials_section/test_bg.png"
            alt="Testimonials Background"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto">

        {/* Header Area */}
        <div className="flex flex-col items-start mb-12">
          <h4 className="text-[10px] font-semibold text-[#2463A7] tracking-widest uppercase mb-4">
            TESTIMONIALS
          </h4>
          <h2 className="text-[#0B1F4A] text-[32px] md:text-[40px] lg:text-[48px] font-normal font-[family-name:var(--font-dm-serif)] italic leading-[1.1]">
            What Our Students Say.
          </h2>
        </div>

        {/* Testimonials Carousel Wrapper */}
        <div className="overflow-hidden mb-12 -mx-4 px-4">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {testimonials.map((item, idx) => (
              <div key={idx} className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-4 py-4">
                <div className="bg-white border border-[#EBEBE4] p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.02),0_8px_16px_rgba(0,0,0,0.03),0_16px_32px_rgba(0,0,0,0.04),0_32px_64px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out flex flex-col h-full min-h-[280px]">
                  <div className="flex flex-col flex-grow">
                    <span className="text-[#2463A7] text-[60px] font-[family-name:var(--font-dm-serif)] leading-[0.5] block mb-6 mt-4">
                      “
                    </span>
                    <p className="text-[#0B1F4A] text-[16px] leading-relaxed font-[family-name:var(--font-dm-serif)] italic flex-grow">
                      {item.quote}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-4">

                    <div>
                      <p className="text-[#0B1F4A] text-[14px] font-bold">
                        {item.name}
                      </p>
                      <p className="text-[#2463A7] font-semibold text-[12px] mt-0.5">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`w-[42px] h-[42px] bg-white rounded-full border border-gray-200 flex items-center justify-center transition-all shadow-sm ${currentIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50 hover:shadow-md cursor-pointer'}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalDots }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`rounded-full transition-all duration-300 ${currentIndex === idx
                    ? "w-5 h-1.5 bg-[#2463A7]"
                    : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className={`w-[42px] h-[42px] rounded-full flex items-center justify-center transition-all shadow-md ${currentIndex === maxIndex ? 'bg-gray-300 text-gray-100 cursor-not-allowed' : 'bg-[#2463A7] text-white hover:bg-[#1C4D82] hover:shadow-lg shadow-[#2463A7]/30 cursor-pointer'}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}

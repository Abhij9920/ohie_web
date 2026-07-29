"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const tabs = ["IT", "Business", "Accounting", "Early Childhood"];

const allCourses = [
  // IT
  {
    category: "IT",
    image: "/prg/it_1.png",
    level: "POSTGRADUATE",
    title: "Master of Information Technology",
    description: "Advanced computing and system analysis for modern enterprise environments.",
    duration: "2 Years · On Campus",
    href: "/study/mit",
  },
  {
    category: "IT",
    image: "/prg/it_2.png",
    level: "POSTGRADUATE",
    title: "Graduate Diploma in Information Technology",
    description: "Build strong foundational skills in computing and IT systems.",
    duration: "1 Year · On Campus",
    href: "/study/gdit",
  },
  {
    category: "IT",
    image: "/prg/it_3.png",
    level: "UNDERGRADUATE",
    title: "Bachelor of Cyber Security",
    description: "Protecting digital infrastructure and mitigating cyber threats in the modern age.",
    duration: "3 Years · On Campus",
    href: "/study/bcs",
  },
  
  // Business
  {
    category: "Business",
    image: "/prg/business_1.png",
    level: "POSTGRADUATE",
    title: "Master of Business Administration",
    description: "Strategic leadership and management for future-focused global executives.",
    duration: "2 Years · On Campus",
    href: "/study/mba",
  },
  {
    category: "Business",
    image: "/prg/business_2.png",
    level: "POSTGRADUATE",
    title: "Graduate Diploma in Management",
    description: "Develop essential management skills to lead diverse teams effectively.",
    duration: "1 Year · On Campus",
    href: "/study/gdm",
  },
  {
    category: "Business",
    image: "/prg/business_3.png",
    level: "UNDERGRADUATE",
    title: "Bachelor of Business",
    description: "Comprehensive business education to prepare you for the corporate world.",
    duration: "3 Years · On Campus",
    href: "/study/bbus",
  },

  // Accounting
  {
    category: "Accounting",
    image: "/prg/accounting_1.png",
    level: "POSTGRADUATE",
    title: "Master of Professional Accounting",
    description: "Advanced accounting principles for aspiring professional accountants.",
    duration: "2 Years · On Campus",
    href: "/study/mpa",
  },
  {
    category: "Accounting",
    image: "/prg/accounting_2.png",
    level: "UNDERGRADUATE",
    title: "Bachelor of Business (Accounting)",
    description: "Foundational accounting knowledge paired with broad business skills.",
    duration: "3 Years · On Campus",
    href: "/study/bba",
  },
  {
    category: "Accounting",
    image: "/prg/accounting_1.png",
    level: "UNDERGRADUATE",
    title: "Diploma of Business",
    description: "A pathway into a successful business or accounting career.",
    duration: "1 Year · On Campus",
    href: "/study/dipbus",
  },

  // Early Childhood
  {
    category: "Early Childhood",
    image: "/prg/ece_1.png",
    level: "POSTGRADUATE",
    title: "Master of Teaching (Early Childhood)",
    description: "Shape the future by inspiring young minds with modern teaching strategies.",
    duration: "2 Years · On Campus",
    href: "/study/mtec",
  },
  {
    category: "Early Childhood",
    image: "/prg/ece_1.png",
    level: "POSTGRADUATE",
    title: "Graduate Diploma in Early Childhood Education",
    description: "Develop practical skills for nurturing early childhood development.",
    duration: "1 Year · On Campus",
    href: "/study/gdece",
  },
];

export default function PopularCourses() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const filteredCourses = allCourses.filter(course => course.category === activeTab);

  return (
    <>
      <section id="explore-courses" className="relative w-full bg-[#FAFAF7] py-[60px] md:py-[80px] lg:py-[100px] overflow-hidden">
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px]">

          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-[40px]">
            <div>
              <h4 className="text-[10px] font-sans font-semibold text-[#2463A7] tracking-widest uppercase mb-2">
                Programmes
              </h4>
              <h2 className="text-[#0B1F4A] text-[36px] md:text-[44px] lg:text-[52px] font-normal font-[family-name:var(--font-dm-serif)] leading-none">
                Popular Courses at OIHE.
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-4 md:gap-[32px] mt-6 lg:mt-0">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-[14px] font-sans pb-2 transition-colors ${
                    activeTab === tab
                      ? "text-[#0B1F4A] font-medium border-b-[2px] border-[#2463A7]"
                      : "text-[#6B7280] font-normal cursor-pointer hover:text-[#0B1F4A]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {filteredCourses.map((course, idx) => (
              <div key={idx} className="bg-white border-[#E8E8E4] border-2 flex flex-col group hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <div className="relative w-full h-[240px] overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Body */}
                <div className="p-[24px] md:p-[32px] flex flex-col flex-1">
                  <span className="text-[#2463A7] text-[10px] font-semibold tracking-wider uppercase mb-[12px] md:mb-[16px]">
                    {course.level}
                  </span>

                  <h3 className="text-[#0B1F4A] text-[20px] md:text-[22px] font-[family-name:var(--font-dm-serif)] leading-[1.2] mb-[12px] md:mb-[16px]">
                    {course.title}
                  </h3>

                  <p className="text-[#6B7280] text-[13px] font-sans leading-relaxed mb-[40px] flex-1">
                    {course.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[#2463A7] text-[12px] font-medium">
                      {course.duration}
                    </span>

                    <Link
                      href={course.href}
                      className="flex flex-col group text-[#0B1F4A] hover:text-[#2463A7] transition-colors w-fit"
                    >
                      <div className="flex items-center text-[13px] font-semibold mb-[4px]">
                        View Course
                        <svg className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <svg width="91" height="1" viewBox="0 0 91 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0B1F4A] group-hover:text-[#2463A7] transition-colors">
                        <rect width="91" height="1" fill="currentColor" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </section>

      <div>
        <img src="/prg/frame.png" alt="" className="bg-[#FAFAF7]" />
      </div>
    </>
  );
}

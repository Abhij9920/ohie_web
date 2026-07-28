"use client"
import React, { useState, useEffect } from 'react';

export interface Tab {
  id: string;
  label: string;
  content?: React.ReactNode;
}

interface CourseTabsProps {
  tabs: Tab[];
}

export default function CourseTabs({ tabs }: CourseTabsProps) {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = tabs.map(tab => ({
        id: tab.id,
        element: document.getElementById(tab.id)
      })).filter(item => item.element !== null);

      if (sectionElements.length === 0) return;

      const scrollPosition = window.scrollY + 120;

      let currentId = tabs[0]?.id;
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= offsetTop) {
            currentId = id;
            break;
          }
        }
      }

      setActiveTabId((prev) => prev !== currentId ? currentId : prev);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [tabs]);

  return (
    <section className="w-full bg-[#F8F9FA] pt-8 md:pt-14">
      {/* Tab Header */}
      <div className="w-full sticky top-0 z-40 bg-[#F8F9FA] pt-4 shadow-sm">
        <div className="relative w-full">
          {/* Continuous Full-Width Border */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#4D97E6] z-0"></div>

          <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px] xl:px-[100px] relative z-10">
            <div className="flex overflow-x-auto overflow-y-hidden hide-scrollbar gap-6 md:gap-12">
              {tabs.map((tab) => {
                const isActive = activeTabId === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTabId(tab.id);
                      const element = document.getElementById(tab.id);
                      if (element) {
                        const yOffset = -80; // offset so it's not right at the edge
                        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }}
                    className={`pb-3 text-[14px] md:text-[16px] whitespace-nowrap transition-colors cursor-pointer border-b-[3px] ${isActive ? 'text-[#0A1A44] font-semibold border-[#4F8CE6]' : 'text-[#6B7280] font-medium border-transparent hover:text-[#0A1A44]'
                      }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client"
import React, { useState } from 'react';

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface CourseTabsProps {
  tabs: Tab[];
}

export default function CourseTabs({ tabs }: CourseTabsProps) {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);

  return (
    <section className="w-full bg-[#F8F9FA] pt-14 pb-16">
      {/* Tab Header */}
      <div className="w-full border-b-2 border-[#4D97E6] mb-12">
        <div className="max-w-[1440px] mx-auto px-4 xl:px-[100px]">
          <div className="flex overflow-x-auto overflow-y-hidden hide-scrollbar gap-12">
            {tabs.map((tab) => {
              const isActive = activeTabId === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`pb-4 text-[16px] whitespace-nowrap transition-colors relative cursor-pointer ${isActive ? 'text-[#0A1A44] font-semibold' : 'text-[#6B7280] font-medium hover:text-[#0A1A44]'
                    }`}
                >
                  {tab.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#4F8CE6]"></span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="w-full max-w-[1440px] mx-auto px-4 xl:px-[100px]">
        {tabs.find((tab) => tab.id === activeTabId)?.content}
      </div>
    </section>
  );
}

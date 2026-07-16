"use client";

import React, { useState } from 'react';

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`border-b-2 transition-colors duration-300 ${isOpen ? 'border-[#4D97E6]' : 'border-[#E0E0E0]'}`}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex justify-between items-center py-6 focus:outline-none cursor-pointer"
            >
              <h3 className="text-[14px] md:text-[15px] font-semibold tracking-wider text-[#0B1F4A] uppercase text-left pr-4">
                {item.title}
              </h3>
              <div className="text-[#4D97E6] text-[24px] font-light leading-none flex-shrink-0">
                {isOpen ? '−' : '+'}
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] pb-8 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <div className="text-[14px] leading-relaxed text-[#0B1F4A]/70">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

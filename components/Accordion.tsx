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
    <div className="w-full flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="bg-white rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex justify-between items-center px-6 py-[18px] focus:outline-none cursor-pointer hover:bg-gray-50/50 transition-colors"
            >
              <h3 className="text-[14px] md:text-[15px] font-medium tracking-wide text-[#0B1F4A] uppercase text-left pr-4">
                {item.title}
              </h3>
              <div className="text-[#0B1F4A] text-[20px] font-light leading-none flex-shrink-0">
                {isOpen ? '−' : '+'}
              </div>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <div className="text-[14px] leading-relaxed text-[#666B66] px-6 pb-6 pt-2">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

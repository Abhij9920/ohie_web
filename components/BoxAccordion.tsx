"use client";

import React, { useState } from 'react';

export interface BoxAccordionItem {
  title: string;
  content: React.ReactNode;
}

interface BoxAccordionProps {
  items: BoxAccordionItem[];
}

export default function BoxAccordion({ items }: BoxAccordionProps) {
  // Open the first item by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="w-full border border-[#D5D8D3] p-6 md:p-8 bg-white transition-all">
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex justify-between items-center focus:outline-none cursor-pointer"
            >
              <h3 className="text-[#0B1F4A] font-bold text-[17px] md:text-[19px] text-left">
                {item.title}
              </h3>
              <div className="text-[#2463A7] text-[28px] md:text-[32px] font-light leading-none flex-shrink-0 ml-4">
                {isOpen ? '−' : '+'}
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-[1000px] mt-4 md:mt-5 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="text-[#7A7A7A] text-[14px] md:text-[15px] leading-relaxed pr-8 md:pr-16 text-left">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

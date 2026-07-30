"use client"
import React, { useState } from 'react';

const servicesData: { title: string, icon: React.ReactNode, items: { text: string; type: string }[] }[] = [
  {
    title: "JOB READY",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.0003 20V4C16.0003 3.46957 15.7896 2.96086 15.4145 2.58579C15.0394 2.21071 14.5306 2 14.0002 2H9.99985C9.46937 2 8.96062 2.21071 8.58552 2.58579C8.21042 2.96086 7.99969 3.46957 7.99969 4V20M3.99937 6H20.0006C21.1053 6 22.0008 6.89543 22.0008 8V18C22.0008 19.1046 21.1053 20 20.0006 20H3.99937C2.89471 20 1.99921 19.1046 1.99921 18V8C1.99921 6.89543 2.89471 6 3.99937 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    items: [
      { text: "Apply for Internships", type: "bullet" },
      { text: "Create an OZFOLIO", type: "bullet" },
      { text: "Seek advice on finding work", type: "bullet" },
      { text: "Get help creating a CV & cover letter", type: "bullet" },
      { text: "Practice interview techniques", type: "bullet" },
      { text: "OZFOLIO", type: "bullet-bold" },
      { text: "Volunteer Placements", type: "bullet-bold" },
      { text: "Employability Workshop", type: "bullet-bold" }
    ]
  },
  {
    title: "OZFOLIO",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.7223 1.07972C10.6383 1.13183 10.5706 1.20635 10.5268 1.29489L8.2178 5.97389C8.0655 6.28216 7.84058 6.54881 7.56238 6.75088C7.28419 6.95295 6.96106 7.08439 6.6208 7.13389L1.4558 7.88889C1.3575 7.90279 1.26509 7.94402 1.18908 8.00788C1.11307 8.07174 1.05652 8.15566 1.02588 8.25008C0.995237 8.34451 0.991731 8.44565 1.01576 8.54197C1.03979 8.63829 1.09039 8.72593 1.1618 8.79489L4.8978 12.4319C5.14441 12.672 5.32889 12.9686 5.43534 13.2959C5.54178 13.6233 5.567 13.9716 5.5088 14.3109L4.6278 19.4499C4.61066 19.5476 4.62128 19.6481 4.65846 19.7401C4.69563 19.8321 4.75787 19.9118 4.83809 19.9701C4.91832 20.0285 5.0133 20.0631 5.11225 20.0701C5.2112 20.0772 5.31013 20.0563 5.3978 20.0099L10.0148 17.5819C10.3191 17.4221 10.6576 17.3386 11.0013 17.3386C11.345 17.3386 11.6835 17.4221 11.9878 17.5819L16.6058 20.0099C16.6935 20.0566 16.7926 20.0777 16.8917 20.0708C16.9908 20.0639 17.086 20.0293 17.1663 19.9709C17.2467 19.9125 17.3091 19.8327 17.3463 19.7406C17.3835 19.6485 17.3941 19.5477 17.3768 19.4499L16.4948 14.3099C16.4369 13.9708 16.4622 13.6227 16.5686 13.2955C16.6751 12.9684 16.8594 12.672 17.1058 12.4319L20.8418 8.79389C20.9126 8.72485 20.9627 8.63736 20.9864 8.54133C21.0101 8.4453 21.0064 8.34456 20.9758 8.2505C20.9452 8.15644 20.8889 8.07282 20.8133 8.00909C20.7376 7.94537 20.6457 7.90408 20.5478 7.88989L15.3818 7.13389C15.0419 7.08401 14.7192 6.95239 14.4414 6.75035C14.1636 6.5483 13.939 6.28186 13.7868 5.97389L11.4768 1.29489C11.433 1.20635 11.3653 1.13183 11.2813 1.07972C11.1974 1.02761 11.1006 1 11.0018 1C10.903 1 10.8062 1.02761 10.7223 1.07972Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    items: [
      { text: "Valuable tools to assist in career pursuits", type: "bullet" },
      { text: "Recognize strengths and abilities", type: "bullet" },
      { text: "Build career confidence", type: "bullet" },
      { text: "Career Portfolio", type: "bold-no-bullet" },
      { text: "Interview Workshops", type: "bold-no-bullet" },
      { text: "Work Skills Evidence", type: "bold-no-bullet" },
      { text: "All sessions are free. Everyone is welcome.", type: "normal-no-bullet" }
    ]
  },
  {
    title: "LIFE SKILLS",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.08498 17.5098C3.17077 17.1201 3.13803 16.7137 2.99098 16.3427C1.96766 14.2195 1.72713 11.8031 2.31182 9.51988C2.8965 7.23661 4.26883 5.23322 6.18667 3.86317C8.10451 2.49311 10.4446 1.84444 12.7941 2.03159C15.1436 2.21875 17.3515 3.22971 19.0283 4.8861C20.7051 6.54249 21.7429 8.73787 21.9588 11.0849C22.1746 13.4319 21.5546 15.7798 20.208 17.7142C18.8615 19.6486 16.875 21.0453 14.599 21.6578C12.3231 22.2704 9.90391 22.0594 7.76835 21.0621C7.41785 20.929 7.03701 20.8971 6.66927 20.9701L3.256 21.9681C3.09134 22.0118 2.91826 22.0127 2.75316 21.9708C2.58805 21.9288 2.4364 21.8454 2.31259 21.7284C2.18877 21.6114 2.0969 21.4647 2.04568 21.3022C1.99445 21.1398 1.98558 20.9669 2.0199 20.8001L3.08498 17.5098Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    items: [
      { text: "Be a role model", type: "bullet" },
      { text: "Make a positive difference", type: "bullet" },
      { text: "Make life long friends from different countries", type: "bullet" },
      { text: "Help students improve their English", type: "bullet" },
      { text: "Transitional Education Workshop", type: "bullet" },
      { text: "Global Skills", type: "bold-no-bullet" },
      { text: "Mindfulness Practice", type: "bold-no-bullet" },
      { text: "Wellbeing", type: "bold-no-bullet" }
    ]
  },
  {
    title: "INTERNSHIP",
    icon: (
      <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.4772 11.8896L11.9922 20.4156C12.0092 20.516 11.9951 20.6192 11.9519 20.7114C11.9086 20.8036 11.8382 20.8803 11.7502 20.9314C11.6621 20.9825 11.5605 21.0055 11.459 20.9974C11.3576 20.9892 11.261 20.9502 11.1822 20.8856L7.60224 18.1986C7.42941 18.0695 7.21947 17.9998 7.00374 17.9998C6.78801 17.9998 6.57807 18.0695 6.40524 18.1986L2.81924 20.8846C2.74056 20.9491 2.6441 20.988 2.54273 20.9962C2.44137 21.0044 2.33991 20.9815 2.2519 20.9305C2.16389 20.8796 2.09352 20.803 2.05016 20.711C2.0068 20.619 1.99253 20.516 2.00924 20.4156L3.52324 11.8896M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    items: [
      { text: "Create an OZFOLIO", type: "bullet" },
      { text: "Make industry contacts", type: "bullet" },
      { text: "Obtain internship references", type: "bullet" },
      { text: "Convert academic knowledge into industry skills", type: "bullet" },
      { text: "Gain work experience", type: "bullet" },
      { text: "A wide range of internships on offer in accounting, business, and IT", type: "bold-no-bullet" },
      { text: "Fees applies for internship placement.", type: "gray-no-bullet" }
    ]
  }
];

export default function WhatWeOffer() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="explore" className="w-full bg-[#FAFAF7] py-[60px] md:py-[100px] scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px] xl:px-[100px]">

        {/* Header */}
        <div className="mb-10 md:mb-14">
          <h4 className="text-[#4D97E6] text-[12px] md:text-[14px] font-semibold uppercase tracking-wider mb-2">
            OUR SERVICES
          </h4>
          <h2 className="text-[#0B1F4A] text-[36px] md:text-[44px] mb-4 leading-tight" style={{ fontFamily: 'var(--font-dm-serif)' }}>
            What We Offer
          </h2>
          <div className="w-[60px] h-[3px] bg-[#4D97E6]"></div>
        </div>

        {/* Accordions */}
        <div className="w-full flex flex-col gap-4">
          {servicesData.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`w-full overflow-hidden transition-all duration-300 ${isOpen
                  ? 'bg-[#2463A7] border border-[#2463A7]'
                  : 'bg-white border-l-4 border-l-[#4D97E6] border-y border-r border-[#E5E5E5]'
                  }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex justify-between items-center px-6 md:px-10 py-6 text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className={`${isOpen ? 'text-white' : 'text-[#4D97E6]'}`}>
                      {service.icon}
                    </div>
                    <span className={`font-semibold text-[15px] md:text-[15px] tracking-wide ${isOpen ? 'text-white' : 'text-[#0B1F4A]'}`}>
                      {service.title}
                    </span>
                  </div>

                  {/* Plus/Minus Icon */}
                  <div className={`${isOpen ? 'text-white' : 'text-[#4D97E6]'}`}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300">
                      <path d={isOpen ? "M2 7H12" : "M7 2V12M2 7H12"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </button>

                {/* Accordion Body */}
                <div
                  className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100 px-6 md:px-10 pb-8' : 'max-h-0 opacity-0 px-6 md:px-10 pb-0'
                    }`}
                >
                  <div className="bg-[#F8F9FA] w-full px-6 py-8 md:px-10">
                    <ul className="flex flex-col gap-y-4">
                      {service.items.map((item, idx) => {
                        const isBullet = item.type.includes('bullet') && !item.type.includes('no-bullet');
                        const isBold = item.type.includes('bold');
                        const isGray = item.type === 'gray-no-bullet';

                        return (
                          <li key={idx} className="flex items-start gap-4">
                            {isBullet ? (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#4D97E6] mt-[7px] flex-shrink-0"></span>
                            ) : (
                              <span className="w-1.5 flex-shrink-0"></span>
                            )}
                            <span 
                              className={`leading-relaxed ${
                                isBold ? 'font-bold text-[#0B1F4A]' : 
                                isGray ? 'font-light text-[#888888] text-[13px]' : 
                                'font-light text-[#0B1F4A]'
                              } text-[14px]`}
                            >
                              {item.text}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

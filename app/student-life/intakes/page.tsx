"use client";
import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import QuickStatsBoxes from '@/components/QuickStatsBoxes';
import Accreditations from '@/components/Accreditations';

const intakeTabs = [
  { id: 't1', label: 'Trimester 1' },
  { id: 'm1', label: 'Mid Intake' },
  { id: 't2', label: 'Trimester 2' },
  { id: 'm2', label: 'Mid Intake' },
  { id: 't3', label: 'Trimester 3' },
];

const years = ['2026', '2027', '2028'];

interface Holiday {
  name: string;
  date: string;
  extra?: string;
}

interface IntakeData {
  title?: string;
  orientation: string;
  commencing: string;
  census: string;
  lastTeaching: string;
  termBreak: string;
  holidaysVic: Holiday[];
  holidaysQld: Holiday[];
}

export default function IntakesPage() {
  const [activeIntake, setActiveIntake] = useState('t1');
  const [activeYear, setActiveYear] = useState('2027');

  const currentTabLabel = intakeTabs.find(t => t.id === activeIntake)?.label;

  const data2026: Record<string, IntakeData> = {
    t1: {
      title: 'TRIMESTER 1',
      orientation: 'Monday, 23 February 2026',
      commencing: 'Monday, 02 March 2026',
      census: 'Friday, 20 March 2026',
      lastTeaching: 'Friday, 05 June 2026',
      termBreak: 'Monday, 13 April 2026 – Sunday, 26 April 2026',
      holidaysVic: [
        { name: 'Labour Day', date: 'Monday, 9 March 2026' },
        { name: 'Good Friday', date: 'Friday, 3 April 2026' },
        { name: 'Easter Saturday', date: 'Saturday, 4 April 2026' },
        { name: 'Easter Sunday', date: 'Sunday, 5 April 2026' },
        { name: 'Easter Monday', date: 'Monday, 6 April 2026' },
        { name: 'ANZAC Day', date: 'Saturday, 25 April 2026', extra: '(No substitute weekday holiday in VIC)' }
      ],
      holidaysQld: [
        { name: 'Good Friday', date: 'Friday, 3 April 2026' },
        { name: 'Easter Saturday', date: 'Saturday, 4 April 2026' },
        { name: 'Easter Sunday', date: 'Sunday, 5 April 2026' },
        { name: 'Easter Monday', date: 'Monday, 6 April 2026' },
        { name: 'ANZAC Day', date: 'Saturday, 25 April 2026', extra: '(No substitute weekday holiday in QLD)' }
      ]
    },
    m1: {
      title: 'MID INTAKE T1',
      orientation: 'Monday, 20 April 2026',
      commencing: 'Monday, 27 April 2026',
      census: 'Friday, 08 May 2026',
      lastTeaching: 'Friday, 05 June 2026',
      termBreak: 'Monday, 29 June 2026 – Sunday, 02 August 2026',
      holidaysVic: [
        { name: 'King\'s Birthday', date: 'Monday, 8 June 2026' }
      ],
      holidaysQld: [
        { name: 'Labour Day', date: 'Monday, 4 May 2026' }
      ]
    },
    t2: {
      title: 'TRIMESTER 2',
      orientation: 'Monday, 27 July 2026',
      commencing: 'Monday, 03 August 2026',
      census: 'Friday, 21 August 2026',
      lastTeaching: 'Friday, 06 November 2026',
      termBreak: 'Monday, 14 September 2026 – Sunday, 27 September 2026',
      holidaysVic: [
        { name: 'AFL Grand Final Friday', date: 'Friday, 25 September 2026' }
      ],
      holidaysQld: [
        { name: 'Royal Queensland Show (Ekka) Holiday', date: 'Wednesday, 12 August 2026' }
      ]
    },
    m2: {
      title: 'MID INTAKE T2',
      orientation: 'Monday, 21 September 2026',
      commencing: 'Monday, 28 September 2026',
      census: 'Friday, 16 October 2026',
      lastTeaching: 'Friday, 06 November 2026',
      termBreak: 'Monday, 30 November 2026 – Sunday, 28 February 2027',
      holidaysVic: [
        { name: 'Melbourne Cup Day', date: 'Tuesday, 3 November 2026' }
      ],
      holidaysQld: [
        { name: 'King\'s Birthday', date: 'Monday, 5 October 2026' }
      ]
    },
    t3: {
      title: 'TRIMESTER 3',
      orientation: 'Monday, 30 November 2026',
      commencing: 'Monday, 07 December 2026',
      census: 'Friday, 18 December 2026',
      lastTeaching: 'Friday, 29 January 2027',
      termBreak: 'Monday, 21 December 2026 – Sunday, 03 January 2027',
      holidaysVic: [
        { name: 'Christmas Day', date: 'Friday, 25 December 2026' },
        { name: 'Boxing Day', date: 'Saturday, 26 December 2026' },
        { name: 'Additional Boxing Day Holiday', date: 'Monday, 28 December 2026' },
        { name: 'New Year\'s Day', date: 'Friday, 01 January 2027' },
        { name: 'Australia Day', date: 'Tuesday, 26 January 2027' }
      ],
      holidaysQld: [
        { name: 'Christmas Day', date: 'Friday, 25 December 2026' },
        { name: 'Boxing Day', date: 'Saturday, 26 December 2026' },
        { name: 'Additional Boxing Day Holiday', date: 'Monday, 28 December 2026' },
        { name: 'New Year\'s Day', date: 'Friday, 01 January 2027' },
        { name: 'Australia Day', date: 'Tuesday, 26 January 2027' }
      ]
    }
  };

  const data2027: Record<string, IntakeData> = {
    t1: {
      title: 'TRIMESTER 1',
      orientation: 'Monday, 22 February 2027',
      commencing: 'Monday, 01 March 2027',
      census: 'Friday, 19 March 2027',
      lastTeaching: 'Friday, 04 June 2027',
      termBreak: 'Monday, 12 April 2027 – Sunday, 25 April 2027',
      holidaysVic: [
        { name: 'Labour Day', date: 'Monday, 08 March 2027' },
        { name: 'Good Friday', date: 'Friday, 26 March 2027' },
        { name: 'Easter Saturday', date: 'Saturday, 27 March 2027' },
        { name: 'Easter Sunday', date: 'Sunday, 28 March 2027' },
        { name: 'Easter Monday', date: 'Monday, 29 March 2027' },
        { name: 'ANZAC Day', date: 'Sunday, 25 April 2027' },
        { name: 'Additional ANZAC Day Holiday', date: 'Monday, 26 April 2027' }
      ],
      holidaysQld: [
        { name: 'Good Friday', date: 'Friday, 26 March 2027' },
        { name: 'Easter Saturday', date: 'Saturday, 27 March 2027' },
        { name: 'Easter Sunday', date: 'Sunday, 28 March 2027' },
        { name: 'Easter Monday', date: 'Monday, 29 March 2027' },
        { name: 'ANZAC Day', date: 'Sunday, 25 April 2027' },
        { name: 'Additional ANZAC Day Holiday', date: 'Monday, 26 April 2027' }
      ]
    },
    m1: {
      title: 'MID INTAKE T1',
      orientation: 'Monday, 19 April 2027',
      commencing: 'Monday, 26 April 2027',
      census: 'Friday, 07 May 2027',
      lastTeaching: 'Friday, 04 June 2027',
      termBreak: 'Monday, 28 June 2027 – Sunday, 01 August 2027',
      holidaysVic: [
        { name: 'No statewide public holidays during this period.', date: '' }
      ],
      holidaysQld: [
        { name: 'Labour Day', date: 'Monday, 03 May 2027' }
      ]
    },
    t2: {
      title: 'TRIMESTER 2',
      orientation: 'Monday, 26 July 2027',
      commencing: 'Monday, 02 August 2027',
      census: 'Friday, 20 August 2027',
      lastTeaching: 'Friday, 03 December 2027',
      termBreak: 'Monday, 27 September 2027 – Sunday, 03 October 2027',
      holidaysVic: [
        { name: 'AFL Grand Final Friday', date: 'Friday, 24 September 2027' },
        { name: 'Melbourne Cup Day', date: 'Tuesday, 02 November 2027' }
      ],
      holidaysQld: [
        { name: 'King\'s Birthday', date: 'Monday, 04 October 2027' }
      ]
    },
    m2: {
      title: 'MID INTAKE T2',
      orientation: 'Monday, 20 September 2027',
      commencing: 'Monday, 27 September 2027',
      census: 'Friday, 15 October 2027',
      lastTeaching: 'Friday, 28 January 2028',
      termBreak: '–',
      holidaysVic: [
        { name: 'Melbourne Cup Day', date: 'Tuesday, 02 November 2027' },
        { name: 'Christmas Day', date: 'Saturday, 25 December 2027' },
        { name: 'Additional Christmas Holiday', date: 'Monday, 27 December 2027' },
        { name: 'Boxing Day', date: 'Sunday, 26 December 2027' },
        { name: 'Additional Boxing Day Holiday', date: 'Tuesday, 28 December 2027' },
        { name: 'New Year\'s Day', date: 'Saturday, 01 January 2028' },
        { name: 'Additional New Year Holiday', date: 'Monday, 03 January 2028' },
        { name: 'Australia Day', date: 'Wednesday, 26 January 2028' }
      ],
      holidaysQld: [
        { name: 'King\'s Birthday', date: 'Monday, 04 October 2027' },
        { name: 'Christmas Day', date: 'Saturday, 25 December 2027' },
        { name: 'Additional Christmas Holiday', date: 'Monday, 27 December 2027' },
        { name: 'Boxing Day', date: 'Sunday, 26 December 2027' },
        { name: 'Additional Boxing Day Holiday', date: 'Tuesday, 28 December 2027' },
        { name: 'New Year\'s Day', date: 'Saturday, 01 January 2028' },
        { name: 'Additional New Year Holiday', date: 'Monday, 03 January 2028' },
        { name: 'Australia Day', date: 'Wednesday, 26 January 2028' }
      ]
    },
    t3: {
      title: 'TRIMESTER 3',
      orientation: 'Monday, 29 November 2027',
      commencing: 'Monday, 06 December 2027',
      census: 'Friday, 17 December 2027',
      lastTeaching: 'Friday, 10 March 2028',
      termBreak: 'Monday, 20 December 2027 – Sunday, 02 January 2028',
      holidaysVic: [
        { name: 'Christmas Day', date: 'Saturday, 25 December 2027' },
        { name: 'Additional Christmas Holiday', date: 'Monday, 27 December 2027' },
        { name: 'Boxing Day', date: 'Sunday, 26 December 2027' },
        { name: 'Additional Boxing Day Holiday', date: 'Tuesday, 28 December 2027' },
        { name: 'New Year\'s Day', date: 'Saturday, 01 January 2028' },
        { name: 'Additional New Year Holiday', date: 'Monday, 03 January 2028' },
        { name: 'Australia Day', date: 'Wednesday, 26 January 2028' },
        { name: 'Labour Day', date: 'Monday, 13 March 2028' }
      ],
      holidaysQld: [
        { name: 'Christmas Day', date: 'Saturday, 25 December 2027' },
        { name: 'Additional Christmas Holiday', date: 'Monday, 27 December 2027' },
        { name: 'Boxing Day', date: 'Sunday, 26 December 2027' },
        { name: 'Additional Boxing Day Holiday', date: 'Tuesday, 28 December 2027' },
        { name: 'New Year\'s Day', date: 'Saturday, 01 January 2028' },
        { name: 'Additional New Year Holiday', date: 'Monday, 03 January 2028' },
        { name: 'Australia Day', date: 'Wednesday, 26 January 2028' }
      ]
    }
  };

  const data2028: Record<string, IntakeData> = {
    t1: {
      title: 'TRIMESTER 1',
      orientation: 'Monday, 28 February 2028',
      commencing: 'Monday, 06 March 2028',
      census: 'Friday, 24 March 2028',
      lastTeaching: 'Friday, 09 June 2028',
      termBreak: 'Monday, 17 April 2028 – Sunday, 30 April 2028',
      holidaysVic: [
        { name: 'Labour Day', date: 'Monday, 13 March 2028' },
        { name: 'Good Friday', date: 'Friday, 14 April 2028' },
        { name: 'Easter Saturday', date: 'Saturday, 15 April 2028' },
        { name: 'Easter Sunday', date: 'Sunday, 16 April 2028' },
        { name: 'Easter Monday', date: 'Monday, 17 April 2028' },
        { name: 'ANZAC Day', date: 'Tuesday, 25 April 2028' }
      ],
      holidaysQld: [
        { name: 'Good Friday', date: 'Friday, 14 April 2028' },
        { name: 'Easter Saturday', date: 'Saturday, 15 April 2028' },
        { name: 'Easter Sunday', date: 'Sunday, 16 April 2028' },
        { name: 'Easter Monday', date: 'Monday, 17 April 2028' },
        { name: 'ANZAC Day', date: 'Tuesday, 25 April 2028' },
        { name: 'Labour Day', date: 'Monday, 01 May 2028' }
      ]
    },
    m1: {
      title: 'MID INTAKE T1',
      orientation: 'Monday, 24 April 2028',
      commencing: 'Monday, 01 May 2028',
      census: '–',
      lastTeaching: '–',
      termBreak: '–',
      holidaysVic: [],
      holidaysQld: []
    },
    t2: {
      title: 'TRIMESTER 2',
      orientation: 'Monday, 24 July 2028',
      commencing: 'Monday, 31 July 2028',
      census: 'Friday, 18 August 2028',
      lastTeaching: 'Friday, 01 December 2028',
      termBreak: 'Monday, 25 September 2028 – Sunday, 01 October 2028',
      holidaysVic: [
        { name: 'AFL Grand Final Friday', date: 'Friday, 29 September 2028' },
        { name: 'Melbourne Cup Day', date: 'Tuesday, 07 November 2028' }
      ],
      holidaysQld: [
        { name: 'King\'s Birthday', date: 'Monday, 02 October 2028' }
      ]
    },
    m2: {
      title: 'MID INTAKE T2',
      orientation: 'Monday, 18 September 2028',
      commencing: 'Monday, 25 September 2028',
      census: 'Friday, 13 October 2028',
      lastTeaching: 'Friday, 26 January 2029',
      termBreak: '–',
      holidaysVic: [
        { name: 'AFL Grand Final Friday', date: 'Friday, 29 September 2028' },
        { name: 'Melbourne Cup Day', date: 'Tuesday, 07 November 2028' },
        { name: 'Christmas Day', date: 'Monday, 25 December 2028' },
        { name: 'Boxing Day', date: 'Tuesday, 26 December 2028' }
      ],
      holidaysQld: [
        { name: 'King\'s Birthday', date: 'Monday, 02 October 2028' },
        { name: 'Christmas Day', date: 'Monday, 25 December 2028' },
        { name: 'Boxing Day', date: 'Tuesday, 26 December 2028' }
      ]
    },
    t3: {
      title: 'TRIMESTER 3',
      orientation: 'Monday, 27 November 2028',
      commencing: 'Monday, 04 December 2028',
      census: 'Friday, 15 December 2028',
      lastTeaching: 'Friday, 09 March 2029',
      termBreak: 'Monday, 18 December 2028 – Sunday, 31 December 2028',
      holidaysVic: [
        { name: 'Christmas Day', date: 'Monday, 25 December 2028' },
        { name: 'Boxing Day', date: 'Tuesday, 26 December 2028' }
      ],
      holidaysQld: [
        { name: 'Christmas Day', date: 'Monday, 25 December 2028' },
        { name: 'Boxing Day', date: 'Tuesday, 26 December 2028' }
      ]
    }
  };

  const data = activeYear === '2026' && data2026[activeIntake] ? data2026[activeIntake]
    : activeYear === '2027' && data2027[activeIntake] ? data2027[activeIntake]
      : activeYear === '2028' && data2028[activeIntake] ? data2028[activeIntake]
        : {
          title: currentTabLabel,
          orientation: 'TBA',
          commencing: 'TBA',
          census: 'TBA',
          lastTeaching: 'TBA',
          termBreak: 'TBA',
          holidaysVic: [] as { name: string, date: string, extra?: string }[],
          holidaysQld: [] as { name: string, date: string, extra?: string }[]
        };

  const CalendarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
      <path d="M5.33333 1.33594V4.00282M10.6667 1.33594V4.00282M2 6.6697H14M3.33333 2.66938H12.6667C13.403 2.66938 14 3.26638 14 4.00282V13.3369C14 14.0733 13.403 14.6703 12.6667 14.6703H3.33333C2.59695 14.6703 2 14.0733 2 13.3369V4.00282C2 3.26638 2.59695 2.66938 3.33333 2.66938Z" stroke="#4D97E6" stroke-width="2" stroke-linecap="round" />
    </svg>

  );

  return (
    <main className="w-full bg-[#FAFAF7] min-h-screen">
      <PageHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Student Life', href: '#' },
          { label: 'Intakes', href: '/student-life/intakes' }
        ]}
        title="Intakes and Trimester Dates"
      />

      {/* Description text below header */}
      <section className="w-full py-8">
        <div className="max-w-[1440px] mx-auto px-4 text-center">
          <p className="text-[#0B1F4A] text-[15px]">
            Ozford Institute of Higher Education divides the academic year into three trimesters. Most students undertake<br className="hidden md:block" /> two trimesters each year.
          </p>
        </div>
      </section>

      {/* Quick Stats Boxes */}


      <section className="w-full max-w-[1440px]  mt-10 mx-auto px-4 md:px-[40px] lg:px-[80px] py-[20px] md:py-[40px]">
        <div className="w-full">
          {/* Subtitle */}
          <h4 className="text-[11px] font-[family-name:var(--font-geist-sans)] font-semibold text-[#4D97E6] tracking-widest uppercase mb-4">
            ACADEMIC CALENDAR
          </h4>
          <h2 className="text-[#0B1F4A] text-[28px] md:text-[36px] italic font-[family-name:var(--font-dm-serif)] mb-[40px]">
            Intake & Orientation Dates
          </h2>

          {/* Blue underline (if wanted, matching other pages) */}
          <div className="w-[80px] md:w-[120px] h-[3px] bg-[#4D97E6] mt-[-20px] mb-[40px]"></div>

          {/* Intake Tabs & Year Tabs row */}
          <div className="flex flex-col lg:flex-row justify-between bg-white border border-[#E0D9C8] mb-[40px]">

            {/* Intake Tabs */}
            <div className="flex overflow-x-auto hide-scrollbar">
              {intakeTabs.map((tab, idx) => {
                const isActive = activeIntake === tab.id;
                return (
                  <button
                    key={tab.id + idx}
                    onClick={() => setActiveIntake(tab.id)}
                    className={`min-w-[110px] md:min-w-[130px] py-4 px-4 text-[13px] md:text-[14px] transition-colors ${isActive
                      ? 'bg-[#0B1F4A] text-white font-medium'
                      : 'bg-white text-[#0B1F4A] hover:bg-gray-50'
                      } ${idx !== intakeTabs.length - 1 ? 'border-r border-[#E0D9C8]' : ''}`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Year Tabs */}
            <div className="flex items-center gap-3 px-4 py-3 lg:py-0">
              {years.map((year) => {
                const isActive = activeYear === year;
                return (
                  <button
                    key={year}
                    onClick={() => setActiveYear(year)}
                    className={`py-2 px-6 text-[14px] transition-colors ${isActive
                      ? 'bg-[#4D97E6] text-white'
                      : 'bg-white border border-[#E0D9C8] text-[#333333] hover:bg-gray-50'
                      }`}
                  >
                    {year}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dark Blue Header */}
          <div className="w-full bg-[#0B1F4A] py-5 px-6 flex items-center mb-[40px]">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-3'>
              <path d="M5.33333 1.33594V4.00282M10.6667 1.33594V4.00282M2 6.6697H14M3.33333 2.66938H12.6667C13.403 2.66938 14 3.26638 14 4.00282V13.3369C14 14.0733 13.403 14.6703 12.6667 14.6703H3.33333C2.59695 14.6703 2 14.0733 2 13.3369V4.00282C2 3.26638 2.59695 2.66938 3.33333 2.66938Z" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <h3 className="text-[14px] font-semibold tracking-widest uppercase text-[#4D97E6]">
              {currentTabLabel} — {activeYear}
            </h3>
          </div>

          {/* Data Table */}
          <div className="w-full flex flex-col">

            {/* Rows 1 to 5 mapped */}
            {[
              { label: 'Orientation', value: data.orientation },
              { label: 'Commencing Date', value: data.commencing },
              { label: 'Census Date for Fee Help students', value: data.census },
              { label: 'Last Date of Teaching', value: data.lastTeaching },
              { label: 'Term Break', value: data.termBreak },
            ].map((row, idx) => (
              <div key={idx} className="flex flex-col md:flex-row w-full">
                <div className="w-full md:w-[250px] lg:w-[300px] py-6 pr-6 font-normal text-[#0B1F4A] font-semibold text-[14px]">
                  {row.label}
                </div>
                <div className="w-full flex-1 py-6 px-6 text-[#333333] text-[14px] flex items-center bg-white border border-[#E0D9C8] border-b-2 border-l-0">
                  {row.value}
                </div>
              </div>
            ))}

            {/* Row 6 (Public Holiday) */}
            <div className="flex flex-col md:flex-row w-full">
              <div className="w-full md:w-[250px] lg:w-[300px] py-6 pr-6 font-normal text-[#0B1F4A] font-semibold text-[14px]">
                Public Holiday
              </div>
              <div className="w-full flex-1 py-6 px-6 bg-white border border-[#E0D9C8] border-b-2 border-l-0">

                {data.holidaysVic.length > 0 || data.holidaysQld.length > 0 ? (
                  <div className="flex flex-col xl:flex-row gap-12">
                    {/* VIC */}
                    {data.holidaysVic.length > 0 && (
                      <div className="flex-1">
                        <h5 className="text-[#4D97E6] text-[12px] font-semibold tracking-widest uppercase mb-4">
                          VICTORIA (VIC)
                        </h5>
                        <ul className="space-y-3">
                          {data.holidaysVic.map((hol, i) => (
                            <li key={i} className="flex text-[#333333] text-[14px]">
                              <span className="text-[#4D97E6] mr-3 mt-1 text-[20px] leading-[10px]">&bull;</span>
                              <span>{hol.name}{hol.date && <> - <strong>{hol.date}</strong></>} {hol.extra}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* QLD */}
                    {data.holidaysQld.length > 0 && (
                      <div className="flex-1">
                        <h5 className="text-[#4D97E6] text-[12px] font-semibold tracking-widest uppercase mb-4">
                          QUEENSLAND (QLD)
                        </h5>
                        <ul className="space-y-3">
                          {data.holidaysQld.map((hol, i) => (
                            <li key={i} className="flex text-[#333333] text-[14px]">
                              <span className="text-[#4D97E6] mr-3 mt-1 text-[20px] leading-[10px]">&bull;</span>
                              <span>{hol.name}{hol.date && <> - <strong>{hol.date}</strong></>} {hol.extra}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-[#333333] text-[14px] flex items-center h-full">-</div>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>
      <section className="w-full py-8 pb-4">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px]">
          <div className="w-full border border-[#4D97E6] bg-[#FAFAF7] p-6 md:p-8 flex flex-col">
            <div className="flex items-center text-[#0B1F4A] text-[13px] font-medium mb-5">
              <svg className="w-[20px] h-[20px] text-[#4D97E6] mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>
                For more information regarding Orientation please <a href="#" className="text-[#4D97E6] hover:underline">click here.</a>
              </span>
            </div>

            <div className="w-full h-[1px] bg-[#E0D9C8] mb-5"></div>

            <p className="text-[#0B1F4A] text-[13px] leading-relaxed">
              Ozford Institute of Higher Education divides the academic year into three trimesters. Trimester 1 usually goes from March to July. Trimester 2 from July to November and Trimester 3 from November to February the following year. Most students usually undertake two trimesters each year*. *Exceptions apply to students who commenced from Trimester 3 or mid-trimester intake.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full pb-8">
        <div className="max-w-[1440px] mt-10 mb-20 mx-auto px-4 md:px-[40px] lg:px-[80px]">
          <QuickStatsBoxes
            stats={[
              { value: 3, label: "Trimesters per year" },
              { value: 2, label: "Trimesters per student (typically)" },
              { value: 12, label: "Weeks per trimester" }
            ]}
          />
        </div>
      </section>
      <Accreditations />
    </main>
  );
}

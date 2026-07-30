"use client";

import React, { useState } from 'react';
import EventsHero from '@/components/EventsHero';
import EventCard from '@/components/EventCard';
import EventCardTypeA from '@/components/EventCardTypeA';
import EventCardTypeB from '@/components/EventCardTypeB';
import EventCardTypeC from '@/components/EventCardTypeC';
import Accreditations from '@/components/Accreditations';

export default function EventsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <main className="w-full bg-[#FAFAF7] min-h-screen flex flex-col">
      <EventsHero />

      <section className="flex-1 w-full">
        <EventCard
          day="09"
          monthYear="JULY 2026"
          title="Melbourne Career Expo 2026"
          dateRange="July 09, 2026 - July 19, 2026"
          venue="Melbourne Convention & Exhibition Centre, Melbourne"
          href="/student-life/events/melbourne-career-expo-2026"
        />
      </section>

      {/* All Events Section */}
      <section className="w-full pb-16 pt-16 md:pt-24 bg-[#FAFAF7]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px]">
          {/* Header Line */}
          <div className="flex items-center gap-6 mb-10">
            <h2 className="text-[11px] font-bold text-[#4D97E6] tracking-widest uppercase shrink-0">
              All Events
            </h2>
            <div className="flex-1 h-[1px] bg-[#4D97E6]/40"></div>
          </div>

          {currentPage === 1 ? (
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Row 1: 3 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <EventCardTypeA
                  dateInfo="May 27-28, 2026"
                  timeOrLocationInfo="12:00 PM-1:00 PM"
                  timeOrLocationIcon="time"
                  title="Leadership & Change In Person Session"
                  day="27"
                  month="MAY"
                  href="/student-life/events/leadership-and-change-session"
                />
                <EventCardTypeA
                  dateInfo="May 15, 2026"
                  timeOrLocationInfo="333 Queen St. Melb"
                  timeOrLocationIcon="location"
                  title="Referencing & Avoiding Plagiarism"
                  day="15"
                  month="MAY"
                  href="/student-life/events/referencing-and-avoiding-plagiarism"
                />
                <EventCardTypeA
                  dateInfo="April 20-24, 2026"
                  timeOrLocationInfo="Melb, Bris"
                  timeOrLocationIcon="location"
                  title="Orientation (Melbourne, Brisbane)"
                  day="20"
                  month="APRIL"
                  href="/student-life/events/orientation-melbourne-brisbane"
                />
              </div>

              {/* Row 2: 2 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <EventCardTypeB
                  day="07"
                  month="MARCH"
                  metaText="March 07-15, 2026  |  Fair / Overseas"
                  title="President & CEO at IDP Fair in Vietnam and Cambodia"
                  href="/student-life/events/idp-fair-vietnam-cambodia"
                />
                <EventCardTypeB
                  day="08"
                  month="DEC"
                  metaText="December 08-11, 2025  |  Ho Chi Minh City, Vietnam"
                  title="Susan, Head of Marketing, will visit Ho Chi Minh City from December 8 to 11"
                  href="/student-life/events/susan-ho-chi-minh-dec-2025"
                />
              </div>

              {/* Row 3: 3 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <EventCardTypeA
                  dateInfo="Dec 02-05, 2025"
                  timeOrLocationInfo="Mumbai, India"
                  timeOrLocationIcon="location"
                  title="Susan, Head of Marketing, will visit Mumbai, India, from December 2 to 5"
                  day="02"
                  month="DEC"
                  href="/student-life/events/susan-mumbai-dec-2025"
                />
                <EventCardTypeA
                  dateInfo="Sept 08-14, 2025"
                  timeOrLocationInfo="Shougang Park, Beijing"
                  timeOrLocationIcon="location"
                  title="President/CEO at CIFTIS Beijing"
                  day="08"
                  month="SEPT"
                  href="/student-life/events/ciftis-beijing-2025"
                />
                <EventCardTypeA
                  dateInfo="Sept 12, 2025"
                  timeOrLocationInfo="Khan Uul District"
                  timeOrLocationIcon="location"
                  title="Susan, Head of Marketing visiting International School of Ulaanbaatar (ISU)"
                  day="12"
                  month="SEPT"
                  href="/student-life/events/susan-isu-sept-2025"
                />
              </div>

              {/* Row 4: 1 column */}
              <div className="grid grid-cols-1 gap-6">
                <EventCardTypeB
                  day="13"
                  month="SEPTEMBER"
                  metaText="September 13, 2025  |  12:00 pm - 5:00 pm GMT+8  |  Ulaanbaatar"
                  title="Susan at Study Australia Education Fair – Ulaanbaatar"
                  href="/student-life/events/susan-ulaanbaatar-sept-2025"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Row 1: 3 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <EventCardTypeA
                  dateInfo="Sept 14, 2025"
                  timeOrLocationInfo="Level 5, 333 Queen St"
                  timeOrLocationIcon="location"
                  title="Higher Education orientation"
                  day="14"
                  month="SEPT"
                  href="/student-life/events/higher-education-orientation"
                />
                <EventCardTypeA
                  dateInfo="Sept 19-21, 2025"
                  timeOrLocationInfo="Taiwan"
                  timeOrLocationIcon="location"
                  title="President/CEO at SAEE Taiwan (Taiwan Education Fair)"
                  day="19"
                  month="SEPT"
                  href="/student-life/events/saee-taiwan-sept-2025"
                />
                <EventCardTypeA
                  dateInfo="Sept 19-21, 2025"
                  timeOrLocationInfo="Taichung & Taipei"
                  timeOrLocationIcon="location"
                  title="2025 Australia Education Fair"
                  day="19"
                  month="SEPT"
                  href="/student-life/events/australia-education-fair-2025"
                />
              </div>

              {/* Row 2: 2 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <EventCardTypeB
                  day="29"
                  month="SEPT"
                  metaText="September 29, 2025"
                  title="Higher Education mid-trimester begins"
                  href="/student-life/events/higher-education-mid-trimester-begins"
                />
                <EventCardTypeB
                  day="31"
                  month="OCT"
                  metaText="October 31 - November 09, 2025  |  China (Multiple Cities)"
                  title="Meet us at CEE 2025"
                  href="/student-life/events/cee-2025"
                />
              </div>

              {/* Row 3: 3 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <EventCardTypeA
                  dateInfo="Aug 15, 2025"
                  timeOrLocationInfo="Level 5, 333 Queen St"
                  timeOrLocationIcon="location"
                  title="Higher Education Final Orientation"
                  day="15"
                  month="AUG"
                  href="/student-life/events/higher-education-final-orientation"
                />
                <EventCardTypeA
                  dateInfo="July 28, 2025"
                  timeOrLocationInfo="Level 5, 333 Queen St"
                  timeOrLocationIcon="location"
                  title="Bachelor's & Master's Orientation"
                  day="28"
                  month="JULY"
                  href="/student-life/events/bachelors-masters-orientation"
                />
              </div>
            </div>
          )}

          {/* Pagination */}
          <div className="flex items-center justify-center gap-3 mt-16">
            <button 
              onClick={() => setCurrentPage(1)}
              className="w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center text-[#0B1F4A] hover:bg-gray-50 transition-colors"
            >
              <svg width="6" height="10" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 10L2 6L6 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button 
              onClick={() => setCurrentPage(1)}
              className={`w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-medium transition-colors ${
                currentPage === 1 
                  ? "bg-[#2463A7] text-white border border-[#2463A7]" 
                  : "border border-[#2463A7] bg-white text-[#0B1F4A] hover:bg-gray-50"
              }`}
            >
              1
            </button>
            <button 
              onClick={() => setCurrentPage(2)}
              className={`w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-medium transition-colors ${
                currentPage === 2 
                  ? "bg-[#2463A7] text-white border border-[#2463A7]" 
                  : "border border-[#2463A7] bg-white text-[#0B1F4A] hover:bg-gray-50"
              }`}
            >
              2
            </button>
            <button 
              onClick={() => setCurrentPage(2)}
              className="w-9 h-9 rounded-full bg-[#4D97E6] text-white flex items-center justify-center hover:bg-[#3a7bc2] transition-colors"
            >
              <svg width="6" height="10" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10L6 6L2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

        </div>
      </section>

      <Accreditations />
    </main>
  );
}

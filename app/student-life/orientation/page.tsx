"use client";

import React from 'react';
import PageHeader from '@/components/PageHeader';
import Accordion, { AccordionItem } from '@/components/Accordion';
import Accreditations from '@/components/Accreditations';

export default function OrientationPage() {
  const accordionItems: AccordionItem[] = [
    {
      title: "Orientation",
      content: (
        <div className="flex flex-col gap-4 text-[#666B66]">
          <p>
            Hello and welcome! Congratulations on choosing to study at Ozford Institute of Higher Education, in the heart of Melbourne. We would like to extend an invitation for you to take part in Orientation, which is designed to ensure you successfully transition into study. Attending Orientation will give you the best possible start to your new academic career by allowing you to:
          </p>
          <p>
            Meet other students, and the academic staff. Learn what a “typical first week” at Ozford involves. Learn about the services available to support your study. Find your way around campus. Feel confident about commencing higher education.
          </p>
          <p>
            Please refer to below table to check when your Orientation session will take place.
          </p>
        </div>
      )
    },
    {
      title: "Orientation Date",
      content: (
        <div className="flex flex-col gap-4 text-[#666B66]">
          <div>
            <strong>Date:</strong> 20th April 2026<br />
            <strong>Time:</strong> 1:00 PM (AEST)
          </div>
          <div>
            <strong>Onshore Students</strong><br />
            <strong>Venue:</strong><br />
            Melbourne Campus: 333 Queen Street, Melbourne, VIC 3000<br />
            Brisbane Campus: 433 Boundary Street, Spring Hill QLD 4000
          </div>
          <div>
            <strong>Attendance</strong><br />
            Compulsory: Face to Face<br />
            <strong>Duration:</strong> 3 Hours
          </div>
        </div>
      )
    },
    {
      title: "What happens at orientation?",
      content: (
        <p className="text-[#666B66]">
          At Orientation, we not only prepare you to become an Ozford Institute of Higher Education student, we make every effort to prepare you in becoming a part of the Melbourne community. We hope that you find Orientation useful and ease any stress that may arise in the face of change – such as living in a different country and/or starting at a new school.
        </p>
      )
    },
    {
      title: "Information provided during orientation",
      content: (
        <ul className="list-disc pl-5 space-y-2 text-[#666B66]">
          <li>Welcome and introduction to OIHE key staff and associated responsibilities</li>
          <li>A welcome exercise to encourage student interaction within the inaugural intake group</li>
          <li>Campus tour of facilities, safety and security arrangement including emergency evacuation procedure;</li>
          <li>Enrolment related policies and procedures including acceptance of agreement, refund, and grounds for deferring, suspending and cancellation;</li>
          <li>General information, preparation and expectation on student transition to higher education;</li>
          <li>Details of the course, timetable and teaching staff details</li>
          <li>Academic related information, policy and procedures, including preparation and expectation on HE learning, integrity and conduct, academic progress, assessment requirements and staff consultation;</li>
          <li>Learning, academic and English language support available to assist students in maintaining course progress</li>
          <li>Details of the course and staff members contact details including official point of contact for students;</li>
          <li>Relevant policies and procedures related to student life, including Student Safety, Anti Bullying & Harassment, Anti-Discrimination, Gender Equity, and IT use;</li>
          <li>Relevant policies and procedures related to student experience, including Student feedback and Student Grievances and Appeals;</li>
          <li>Other support and services available to assist students with general or personal circumstances that might adversely affect their education including counselling, health and wellbeing, emergency and critical incidents, legal services, advocacy;</li>
          <li>Details on how to seek assistance for, and report on incidents that significantly impacts on students’ wellbeing, including critical incidents;</li>
          <li>Student visa requirements and conditions relating to:
            <ul className="list-[circle] pl-5 mt-2 space-y-1">
              <li>enrolment</li>
              <li>course progress</li>
              <li>work rights and conditions</li>
              <li>health insurance</li>
              <li>contact details</li>
            </ul>
          </li>
          <li>General information on living in Australia and Melbourne, including social and cultural norms and rules, general safety and accommodation options;</li>
          <li>Information on working in Australia, including employment rights and conditions;</li>
          <li>Social and community support available for student participation including Study Melbourne Centre</li>
          <li>Library Induction Workshop (eg: library resources, journal search and referencing, use of Turnitin etc)</li>
          <li>IT induction Workshop (eg; Login, printing, IT security, use of Moodle etc.)</li>
        </ul>
      )
    },
    {
      title: "Information and documentation required during orientation",
      content: (
        <ul className="list-disc pl-5 space-y-2 text-[#666B66]">
          <li>Passport</li>
          <li>Overseas Health Cover (OSHC) details</li>
          <li>Visa</li>
          <li>Receipt of school fees paid</li>
          <li>Your contact details (address in Melbourne and home country, phone/mobile numbers, email address, emergency contact details (very important), family details)</li>
        </ul>
      )
    }
  ];

  return (
    <main className="w-full bg-[#FAFAF7] min-h-screen">
      <PageHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Admission & Entry', href: '#' },
          { label: 'Orientation', href: '/student-life/orientation' }
        ]}
        title="Higher Education Orientation"
        description="Your comprehensive guide to getting started — everything you need to know for a smooth and successful beginning at OIHE."
        hideUnderline={true}
      />

      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] flex justify-start">
          <div className="w-full max-w-[800px]">
            <Accordion items={accordionItems} />
          </div>
        </div>
      </section>

      <Accreditations />
    </main>
  );
}

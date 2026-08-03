import React from 'react';
import PageHeader from '@/components/PageHeader';
import Accordion, { AccordionItem } from '@/components/Accordion';
import NeedHelpCTA from '@/components/NeedHelpCTA';
import Accreditations from '@/components/Accreditations';
import DynamicHostLink from '@/components/DynamicHostLink';

const supportItems: AccordionItem[] = [
  {
    title: 'ORIENTATION AND TRANSITION SUPPORT',
    content: (
      <>
        As a new student, you will be welcomed with an orientation program during your first week at Ozford. The orientation program involves familiarisation with living and studying in Melbourne and Ozford, and an opportunity for social interaction with new and current students. For more details - <DynamicHostLink pathname="/student-life/orientation" />
      </>
    )
  },
  {
    title: 'ACADEMIC & STUDENT SUPPORT',
    content: (
      <>
        Ozford staff will provide you with academic and additional support throughout your time with us, doing everything possible to help you excel and maximize your potential. This is particulary important for international students in helping them to adjust to studying in Australia. Students can make an appointment to see an academic advisor or alternatively, students are welcomed to make arrangements with their teachers, trainers or lecturers.{' '}
        {/* <a href="#" className="text-[#4D97E6] hover:underline">read more</a> */}
      </>
    )
  },
  {
    title: 'SCHOLARSHIPS AND AWARDS',
    content: 'Through awards and scholarships, Ozford recognises students who display and maintain outstanding performance. We love to acknowledge endeavour, excellence and achievement, as we believe that your success is our success.'
  },
  {
    title: 'LIBRARY SERVICES',
    content: 'Ozford Library is the one-stop student resource centre. You can borrow books, CDs, DVDs and many other resources to help with your studies. The library is also the perfect place for students who would like a quiet space for research and preparing assignments.'
  },
  {
    title: 'EVENTS AND COMMUNITY INVOLVEMENT',
    content: 'Melbourne is a wonderful city packed with events and activities such as arts and cultural festivals, live music, exhibitions, theatre shows, sports and clubs for students. Ozford actively promotes and encourages students to explore the range of events and activities. See the What’s On in Melbourne noticeboard and sign up to Ozford Life online to connect with other students and receive further information. Ozford also offers discounted onsite gym membership for students. Ozford in partnership with a number of non-profitable organisations offer students the opportunity to contribute to the community in a number of ways. Students have the chance to participate in the promotion of various great causes, fund-raising opportunities and events.'
  },
  {
    title: 'STUDENT SUCCESS PROGRAM',
    content: 'Ozford recognises that supporting our students in developing their career goals is an integral part of their learning journey. We provide an on-campus Job Ready Training program and placement for all students. The training program provides students with guidance about the job application process, résumé writing, interview techniques and employment updates. Individual appointments can also be organised for students to meet the Student Success Coach for personalised support.'
  },
  {
    title: 'FLEXIBLE PAYMENT OPTIONS',
    content: 'Ozford provides flexible payment options to suit your financial needs. Feel free to discuss your needs with the on-campus Accounts Officer.'
  },
  {
    title: 'GENERAL SUPPORT',
    content: 'The Student Services Centre is a one-stop place for you to request information and seek assistance for general or student administration matters. You are welcomed to drop by, call or email your questions to the Student Services staff.'
  },
  {
    title: 'MEDICAL AND HEALTH COVER',
    content: 'Ozford can arrange Overseas Student Health Cover (OSHC) on your behalf. OSHC provides you with the peace of mind that you have access to medical services to help you maintain your health and wellbeing. Students can request this service at the time of application. You can collect the OSHC card from our Enrolment Officer after orientation day.'
  },
  {
    title: 'STUDENT WELLBEING AND PERSONAL COUNSELLING',
    content: 'Ozford Institute of Higher Education (OIHE) is committed to providing a safe, inclusive, and supportive learning environment for all students. Students experiencing personal, emotional, academic, health, or wellbeing concerns are encouraged to contact Student Services for confidential support and guidance. OIHE can also refer students to appropriate external counselling and professional support services where required. Support is available to assist students throughout their studies and overall student experience at OIHE.'
  },
  {
    title: 'AIRPORT PICK-UP SERVICES',
    content: 'Ozford can arrange for students to be met at the airport and taken to their accommodation. You need to indicate that you would like this service when filling in the enrolment application form.'
  },
  {
    title: 'ACCOMMODATION ARRANGEMENT',
    content: (
      <>
        Ozford can arrange homestay accommodation according to your preferences. Living in a homestay is a great way to learn about the local culture and lifestyle, and to improve your English.{' '}
        <a href="/student-life/accommodation" className="text-[#4D97E6] hover:underline">Read more</a>
      </>
    )
  }
];

export default function StudentServicesSupportPage() {
  return (
    <main className="w-full bg-[#FAFAF7] min-h-screen">
      <PageHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Student Life', href: '/student-life' },
          { label: 'Student Services & Support', href: '/student-life/student-services-support' }
        ]}
        title="Student Services & Support"
        description="As a student, you will be provided with a complete range of services throughout your time at OIHE. The mentoring program assists all international and domestic students."
      />

      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px] xl:px-[100px] flex justify-start">
          <Accordion items={supportItems} />
        </div>
      </section>

      <NeedHelpCTA />
      <Accreditations />
    </main>
  );
}

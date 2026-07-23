import React from 'react';
import PageHeader from '@/components/PageHeader';
import Accreditations from '@/components/Accreditations';
import Accordion from '@/components/Accordion';

export const metadata = {
  title: 'Frequently Asked Questions | Oxford Institute of Higher Education',
  description: 'Frequently Asked Questions at Ozford Institute of Higher Education.',
};

export default function FAQPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#' },
    { label: 'FAQ', href: '/about-us/faqs' },
  ];

  const faqItems = [
    {
      title: "Where is Ozford Institute of Higher Education located?",
      content: "Ozford Institute of Higher Education (OIHE) is located in the heart of Melbourne CBD at 333 Queen Street, Melbourne VIC 3000. Melbourne is recognised as one of the world's most liveable cities and offers students access to excellent public transport, libraries, entertainment venues, restaurants, and cultural attractions."
    },
    {
      title: "What are the facilities like at OIHE?",
      content: "OIHE provides modern learning facilities including classrooms equipped with current technology, computer labs, student study areas, library resources, and free Wi-Fi access throughout the campus. Students also have access to online learning platforms and academic resources to support their studies."
    },
    {
      title: "How large are the classes?",
      content: "OIHE aims to maintain supportive learning environments with manageable class sizes to encourage interaction between students and lecturers and provide academic support where required."
    },
    {
      title: "Will I have access to computers and internet?",
      content: "Yes. Students have access to campus computers, computer labs, and free Wi-Fi services. Students can also access online systems including Moodle, student portals, and institutional email accounts using their individual login credentials."
    },
    {
      title: "What are the lecturers like?",
      content: "OIHE lecturers are academically qualified and experienced in their respective disciplines. Staff are committed to supporting students academically and professionally while creating an engaging and supportive learning environment."
    },
    {
      title: "Can I borrow library resources?",
      content: "Yes. Students have access to library facilities and online academic resources. Library staff are available to assist students in accessing learning materials and research support services."
    },
    {
      title: "What academic support is available?",
      content: (
        <>
          <p className="mb-2">OIHE provides a range of academic support services including:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>academic skills support</li>
            <li>learning assistance</li>
            <li>study skills workshops</li>
            <li>English language support</li>
            <li>lecturer consultation sessions</li>
            <li>student support services</li>
          </ul>
          <p>Students are encouraged to seek assistance whenever required.</p>
        </>
      )
    },
    {
      title: "How do I get to campus?",
      content: "OIHE is centrally located and easily accessible by Melbourne's public transport network including trains, trams, and buses."
    },
    {
      title: "How can I make friends and meet other students?",
      content: "OIHE organises orientation programs, student engagement activities, workshops, and social events throughout the year to help students connect with fellow students and become familiar with studying and living in Melbourne."
    },
    {
      title: "Can OIHE help me with future study or career pathways?",
      content: "Yes. OIHE provides academic guidance and support regarding course progression, further study opportunities, and graduate outcomes."
    },
    {
      title: "What should I do if I change my address or contact details?",
      content: "International students must notify OIHE within 7 days of any change to their residential address, phone number, or email address in accordance with student visa requirements."
    },
    {
      title: "I am an international student. Do I need a student visa?",
      content: "International students studying full-time in Australia generally require a valid Student Visa and must comply with all visa conditions, including maintaining satisfactory course progress and keeping contact details updated. Students should refer to the Australian Government Department of Home Affairs website for current visa information."
    },
    {
      title: "How safe is Melbourne?",
      content: "Melbourne is considered one of the world's most liveable and multicultural cities, offering a safe and welcoming environment for international students."
    },
    {
      title: "What is the weather like in Melbourne?",
      content: (
        <>
          <p className="mb-2">Melbourne experiences mild winters and warm summers. Temperatures generally range between:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>18°C to 35°C from November to April</li>
            <li>7°C to 18°C from May to October</li>
          </ul>
        </>
      )
    },
    {
      title: "What are the living costs in Melbourne?",
      content: (
        <>
          <p className="mb-2">Living costs vary depending on accommodation and lifestyle choices. Students should budget for accommodation, food, transport, utilities, and personal expenses.</p>
          <p>For the latest information regarding estimated living costs for international students in Australia, please refer to: <a href="https://www.studyaustralia.gov.au/english/live/living-costs" target="_blank" rel="noopener noreferrer" className="text-[#2463A7] hover:underline font-medium">Study Australia - Living Costs</a></p>
        </>
      )
    },
    {
      title: "Can OIHE assist with accommodation?",
      content: "OIHE can provide students with general information and guidance regarding accommodation options including rental accommodation and homestay providers."
    },
    {
      title: "What will my first day be like?",
      content: (
        <>
          <p className="mb-2">New students participate in an orientation program designed to introduce:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>campus facilities</li>
            <li>student systems</li>
            <li>academic expectations</li>
            <li>support services</li>
            <li>policies and procedures</li>
            <li>living and studying in Melbourne</li>
          </ul>
        </>
      )
    },
    {
      title: "What support services are available if I have personal difficulties?",
      content: "OIHE provides student support and wellbeing services to assist students experiencing academic, personal, or welfare-related difficulties. Students may also be referred to external professional support services where appropriate."
    }
  ];

  return (
    <main className="w-full flex flex-col min-h-screen bg-white">
      <PageHeader
        breadcrumbs={breadcrumbs}
        title="Frequently Asked Questions"
        hideUnderline={true}
      />
      
      <section className="w-full bg-[#FAFAF7] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-[12px] border border-[#E8E8E4]">
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      <Accreditations />
    </main>
  );
}

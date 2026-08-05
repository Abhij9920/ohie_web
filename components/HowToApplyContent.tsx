import React from 'react';
import PageHeader from './PageHeader';
import Accordion from './Accordion';
import Link from 'next/link';
import DynamicHostLink from './DynamicHostLink';

export default function HowToApplyContent() {
  const steps = [
    {
      title: "YOUR APPLICATION",
      content: (
        <ul className="list-disc pl-5 space-y-2 text-[#4A524A]">
          <li>Read through the OIHE Course Guide <a href="/documents/207/OIHE-Brochure-A3-20250429.pdf" className="text-[#4D97E6] hover:underline" target="_blank" rel="noopener noreferrer">(Download Pdf)</a> and course information at <DynamicHostLink pathname="/#explore-courses" /></li>
          <li>Choose your course – Diploma of Business, Bachelor of Business, Bachelor of Business (Accounting).</li>
          <li>Apply online <Link href="/student-life/how-to-apply" className="text-[#4D97E6] hover:underline">(click here)</Link></li>
          <li>Attach certified copies of supportive documents required in English</li>
          <li>Forward all documents to OIHE directly <a href="mailto:enrolment@ozford.edu.au" className="text-[#4D97E6] hover:underline">enrolment@ozford.edu.au</a> or to your local education agent.</li>
        </ul>
      )
    },
    {
      title: "APPLICATION ASSESSMENT",
      content: (
        <ul className="list-disc pl-5 space-y-2 text-[#4A524A]">
          <li>Upon receiving your application, OIHE will assess the application according to the admissions policies.</li>
          <li>You will be provided with a written Offer Letter and Student Acceptance Agreement if your application is successful, this will generally take approximately 1 to 3 working days for OIHE programs.</li>
        </ul>
      )
    },
    {
      title: "OFFER LETTER",
      content: (
        <ul className="list-disc pl-5 space-y-2 text-[#4A524A]">
          <li>You will receive an Offer Letter from OIHE once your application is successfully assessed.</li>
        </ul>
      )
    },
    {
      title: "ACCEPTING OFFER",
      content: (
        <ul className="list-disc pl-5 space-y-2 text-[#4A524A]">
          <li>To accept the offer, sign the Student Acceptance Agreement</li>
          <li>Complete the Homestay and Airport Reception Application Form (if required).</li>
          <li>Send the above documents to OIHE or your local education agent.</li>
        </ul>
      )
    },
    {
      title: "MAKING PAYMENT",
      content: (
        <div className="space-y-4 text-[#4A524A]">
          <ul className="list-disc pl-5 space-y-2">
            <li>Make payment amount according to student acceptance agreement.</li>
            <li>Please include your student ID, full name and date of birth as a reference for payment.</li>
          </ul>

          <div className="pt-2">
            <h4 className="font-semibold text-[#0B1F4A] mb-2">Fee Payment Methods:</h4>
            <ul className="list-none space-y-1">
              <li>Online Payments*</li>
              <li>Telegraphic Transfer</li>
              <li>Direct Deposit</li>
              <li>Visit Our Account Office</li>
              <li>Pay by Mail</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-[4px] border border-[#EAEAE6] space-y-2">
            <p><strong>Account Name:</strong> Ozford Institute of Higher Education</p>
            <p><strong>Bank:</strong> National Australia Bank</p>
            <p><strong>BSB No.</strong> 083 144</p>
            <p><strong>Account No.</strong> 247 534 960</p>
            <p><strong>Branch Address:</strong> 500 Bourke St, Melbourne VIC 3000, Australia</p>
            <p><strong>SWIFT Code:</strong> NATAAU3303M</p>
          </div>

          <p className="text-[13px] italic">*MasterCard and Visa are accepted</p>

          <p>It is important to provide the deposit evidence and student enrolment details to the Ozford Account Office for identification purposes.</p>
        </div>
      )
    },
    {
      title: "ELECTRONIC CONFIRMATION OF ENROLMENT",
      content: (
        <ul className="list-disc pl-5 space-y-2 text-[#4A524A]">
          <li>Electronic Confirmation of Enrolment (eCoE) will be issued upon receiving a complete Student Acceptance Agreement and relevant tuition fee payment.</li>
        </ul>
      )
    },
    {
      title: "VISA APPLICATION",
      content: (
        <ul className="list-disc pl-5 space-y-2 text-[#4A524A]">
          <li>Include the eCoE(s) with your visa application.</li>
          <li>Please consult with your local education agent about visa application matters or visit the Department of Home Affairs website for more details on visa application to Australia: <a href="https://www.homeaffairs.gov.au" target="_blank" rel="noopener noreferrer" className="text-[#4D97E6] hover:underline">www.homeaffairs.gov.au</a></li>
        </ul>
      )
    },
    {
      title: "HOMESTAY & AIRPORT PICKUP",
      content: (
        <ul className="list-disc pl-5 space-y-2 text-[#4A524A]">
          <li>OIHE finalises Homestay and Airport Pickup Process. For more information on Pre-enrolment Information <Link href="/admission-entry/pre-enrolment" className="text-[#4D97E6] hover:underline">click here</Link></li>
        </ul>
      )
    },
    {
      title: "ARRIVING IN MELBOURNE",
      content: (
        <ul className="list-disc pl-5 space-y-2 text-[#4A524A]">
          <li>Contact OIHE as soon as you arrive in Australia.</li>
          <li>Attend orientation (Bring your eCoE, offer letter or evidence of payment, passport and copy of your visa to the orientation). For orientation date <Link href="/student-life/orientation" className="text-[#4D97E6] hover:underline">click here</Link></li>
        </ul>
      )
    }
  ];

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Admission', href: '#' },
          { label: 'How To Apply', href: '/admission-entry/how-to-apply' }
        ]}
        title="How to Apply"
        hideUnderline={true}
      />

      <section className="w-full bg-[#FAFAF7] py-12 md:py-20 min-h-[50vh]">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px]">
          <div className="w-full">
            <Accordion items={steps} />
          </div>
        </div>
      </section>
    </>
  );
}

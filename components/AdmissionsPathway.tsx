import React from 'react';
import Link from 'next/link';

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const UserPlusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <line x1="19" y1="8" x2="19" y2="14"></line>
    <line x1="22" y1="11" x2="16" y2="11"></line>
  </svg>
);

const DocumentIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const DollarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const LoginIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
    <polyline points="10 17 15 12 10 7"></polyline>
    <line x1="15" y1="12" x2="3" y2="12"></line>
  </svg>
);

const UploadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="17 8 12 3 7 8"></polyline>
    <line x1="12" y1="3" x2="12" y2="15"></line>
  </svg>
);

const ActivityIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

interface Step {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface PathwayColumnProps {
  title: string;
  subtitle: string;
  steps: Step[];
  footerText: string;
  buttonText: string;
  buttonLink: string;
}

const studentSteps: Step[] = [
  { id: '01', title: 'Find Your Course', description: 'Check entry requirements, intakes and pathway options to find the course that\'s right for you.', icon: <SearchIcon /> },
  { id: '02', title: 'Create Your Account', description: 'Register on the Meshed student portal to begin your online application.', icon: <UserPlusIcon /> },
  { id: '03', title: 'Submit Documents', description: 'Upload your academic transcripts, English proficiency results and identification documents.', icon: <DocumentIcon /> },
  { id: '04', title: 'Receive Your Offer', description: 'Review your Letter of Offer and confirm your place in the course.', icon: <MailIcon /> },
  { id: '05', title: 'Pay Fee', description: 'Pay your initial deposit to secure your enrolment.', icon: <DollarIcon /> },
  { id: '06', title: 'Get Your COE & Enrol', description: 'Receive your Confirmation of Enrolment, apply for your student visa and get ready for orientation.', icon: <CheckCircleIcon /> }
];

const agentSteps: Step[] = [
  { id: '01', title: 'Agent Login', description: 'Log in to the Meshed agent portal to manage your student applications.', icon: <LoginIcon /> },
  { id: '02', title: 'Lodge Student Application', description: 'Submit your student\'s course choice, documents and academic history on their behalf.', icon: <UploadIcon /> },
  { id: '03', title: 'Track Application Status', description: 'Monitor progress in real time and respond to any additional information requests.', icon: <ActivityIcon /> },
  { id: '04', title: 'Receive Offer', description: 'Review your student\'s Letter of Offer as soon as it\'s issued.', icon: <MailIcon /> },
  { id: '05', title: 'Support Student Enrolment', description: 'Guide your student through payment, COE issuance, visa lodgement and orientation preparation.', icon: <ShieldIcon /> }
];

const StepCard = ({ step, isLast }: { step: Step; isLast: boolean }) => (
  <div className="relative flex items-start w-full">
    {/* Timeline Line */}
    {!isLast && (
      <div className="absolute left-[20px] top-[40px] bottom-[-20px] w-[2px] bg-[#4D97E6]"></div>
    )}

    {/* Step Number Circle */}
    <div className="relative z-10 w-[40px] h-[40px] rounded-full bg-[#0B1F4A] flex items-center justify-center text-white font-medium text-[14px] shrink-0 mt-3 shadow-md">
      {step.id}
    </div>

    {/* Content Card */}
    <div className="ml-4 sm:ml-6 flex-1 bg-white border border-[#E5E7EB] p-4 sm:p-6 mb-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-[#0B1F4A] text-[16px] sm:text-[18px] font-semibold">{step.title}</h4>
        <div className="text-[#4D97E6] shrink-0 ml-3 sm:ml-4">
          {step.icon}
        </div>
      </div>
      <p className="text-[#4B5563] text-[13px] sm:text-[14px] leading-relaxed">
        {step.description}
      </p>
    </div>
  </div>
);

const PathwayColumn = ({ title, subtitle, steps, footerText, buttonText, buttonLink }: PathwayColumnProps) => (
  <div className="flex flex-col w-full">
    {/* Header */}
    <div className="bg-[#2463A7] px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-4 mb-8 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-[10px] h-[10px] bg-[#4D97E6] shrink-0"></div>
        <h3 className="text-white font-semibold text-[14px] sm:text-[15px] uppercase tracking-wider">{title}</h3>
      </div>
      <span className="text-white/80 text-[10px] sm:text-[11px] uppercase tracking-wider ml-[22px] sm:ml-0">{subtitle}</span>
    </div>

    {/* Steps list */}
    <div className="flex flex-col pl-2">
      {steps.map((step, idx) => (
        <StepCard key={step.id} step={step} isLast={idx === steps.length - 1} />
      ))}
    </div>

    {/* Footer action */}
    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 pl-2">
      <p className="text-[#6B7280] text-[13px] sm:text-[14px] text-center sm:text-left">{footerText}</p>
      <Link href={buttonLink} className="w-full sm:w-auto bg-[#4D97E6] hover:bg-[#3B82F6] text-white text-[14px] font-medium px-6 py-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex justify-center items-center gap-2 whitespace-nowrap">
        {buttonText} <span>&rarr;</span>
      </Link>
    </div>
  </div>
);

export default function AdmissionsPathway() {
  return (
    <section className="w-full bg-[#FAFAF7] py-12 md:py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px]">

        {/* Section Header */}
        <div className="mb-8 md:mb-12 text-center lg:text-left">
          <p className="text-[#4D97E6] text-[12px] font-semibold uppercase tracking-wider mb-2">
            Admissions Pathway
          </p>
          <h2 className="text-[#0B1F4A] text-[36px] md:text-[42px] lg:text-[52px] mb-4 italic" style={{ fontFamily: 'var(--font-dm-serif)' }}>
            How to Apply
          </h2>
          <p className="text-[#4B5563] text-[15px] md:text-[16px] lg:text-[18px]">
            Choose your application pathway below and follow the step-by-step guide.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-[1200px] mx-auto mb-16 lg:mb-24">
          <PathwayColumn
            title="For Students"
            subtitle="Direct Application"
            steps={studentSteps}
            footerText="Create your student account on Meshnet to begin."
            buttonText="Apply as Student"
            buttonLink="https://ozford.meshedhe.com.au/Publics/PublicsPages/StudentApply/pp_Application_Step0.aspx"
          />
          <PathwayColumn
            title="For Agents"
            subtitle="On Behalf of Student"
            steps={agentSteps}
            footerText="Log in to your agent account on Meshed to begin."
            buttonText="Apply as Agent"
            buttonLink="https://ozford.meshedhe.com.au/"
          />
        </div>

        {/* Guidelines Block */}
        <div className=" mx-auto bg-[#0B1F4A] p-6 sm:p-8 md:p-12 lg:p-10 border-t-[3px] border-[#4D97E6]">
          <h3 className="text-white text-[20px] md:text-[22px] italic mb-4 sm:mb-6" style={{ fontFamily: 'var(--font-dm-serif)' }}>
            You will need to keep a few things in mind when you are applying.
          </h3>

          <div className="text-white/80 space-y-4 sm:space-y-6 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed">
            <p>
              We recommend you have all your documents scanned and ready to upload when starting your application. For questions that are not relevant to you and are not compulsory, leave the field blank and proceed to the next question. The first step in applying is registering as an applicant. If you have registered and want to check your application or apply for a new course, click "My Application" and use your login and password.
            </p>
            <p>
              You can save your application to complete it later or change your information <strong className="text-white font-semibold">before submitting it</strong>. Once you have completed all the application requirements, you can apply. Until you have done this, your application will not be considered complete. If you have questions or need help, please get in touch with us.
            </p>
            <p>
              Oxford Institute of Higher Education is committed to the creation of equivalent opportunities for historically disadvantaged or underrepresented student population to improve their participation in Higher Education study. There are a number of different pathways into the Institute and the standard entry requirement will not necessarily apply depending on the applicants personal circumstances. Please click on the links above to apply or contact us for more details.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

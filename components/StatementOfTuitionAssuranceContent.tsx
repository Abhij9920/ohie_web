import React from 'react';
import PageHeader from './PageHeader';

export default function StatementOfTuitionAssuranceContent() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Admission & Entry', href: '#' },
          { label: 'Statement Of Tuition Assurance', href: '/admission-entry/statement-of-tuition-assurance' }
        ]}
        title="Statement of Tuition Assurance"
        description="Current regulatory compliance status & reassurance"
        hideUnderline={true}
      />

      <section className="w-full bg-white">
        {/* Image Container */}
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 xl:px-[100px]">
          <img
            src="/student.png"
            alt="Students Graduation"
            className="w-full h-auto max-h-[500px] object-cover"
          />
        </div>

        <div className="w-full bg-[#FAFAF7] px-4 md:px-8 xl:px-[100px]">
          <div className="max-w-[1440px] py-12 md:py-16 lg:py-20 mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">

            {/* Left Content */}
            <div className="flex-1 max-w-[650px]">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-[#0B1F4A]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.999 2H5.9998C5.46942 2 4.96076 2.21073 4.58573 2.58584C4.21069 2.96094 4 3.46969 4 4.00016V20.0014C4 20.5319 4.21069 21.0407 4.58573 21.4158C4.96076 21.7909 5.46942 22.0016 5.9998 22.0016H17.9986C18.529 22.0016 19.0376 21.7909 19.4127 21.4158C19.7877 21.0407 19.9984 20.5319 19.9984 20.0014V8.00048M13.999 2C14.3155 1.99949 14.629 2.06161 14.9214 2.18279C15.2139 2.30396 15.4794 2.4818 15.7028 2.70606L19.2905 6.29435C19.5153 6.51787 19.6936 6.78373 19.8151 7.07657C19.9366 7.36941 19.9989 7.68343 19.9984 8.00048M13.999 2V7.0004C13.999 7.26564 14.1043 7.52001 14.2919 7.70756C14.4794 7.89511 14.7337 8.00048 14.9989 8.00048L19.9984 8.00048M9.9994 9.00056H7.9996M15.9988 13.0009H7.9996M15.9988 17.0012H7.9996" stroke="#0B1F4A" stroke-width="2" stroke-linecap="round" />
                  </svg>

                </div>
                <h2 className="text-[#1C1D1C] text-[28px] md:text-[32px]" style={{ fontFamily: 'var(--font-dm-serif)' }}>
                  Directors' Declaration
                </h2>
              </div>
              <p className="text-[#666B66] text-[15px] md:text-[16px] leading-relaxed">
                The directors have determined that the company is not a reporting entity and that this special purpose financial report.
              </p>
            </div>

            {/* Right Content - Download Card */}
            <div className="w-full lg:w-auto min-w-[300px] md:min-w-[450px]">
              <div className="bg-white border border-[#E5E8E2] py-10 px-8  flex items-center  shadow-sm">
                <a
                  href="/Directors_Declaration.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2D68A8] hover:bg-[#1f4a70] text-white text-[14px] font-semibold px-8 py-3.5 flex items-center justify-center gap-3 transition-colors uppercase tracking-wide w-full md:w-auto"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Download Declaration
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Guarantee & Framework Section */}
        <div className="w-full bg-white mx-auto px-4 md:px-8 xl:px-[100px] py-12 md:py-16 lg:py-24">
          <h4 className="text-[#2463A7] text-[13px] font-bold tracking-wider uppercase mb-4">
            GUARANTEE & FRAMEWORK
          </h4>
          <h2 className="text-[#1C1D1C] text-[32px] md:text-[36px] lg:text-[40px] mb-6" style={{ fontFamily: 'var(--font-dm-serif)' }}>
            Statement of Tuition Assurance & Protection
          </h2>
          <p className="text-[#666B66] text-[15px] md:text-[16px] leading-relaxed max-w-[1250px] mb-10 md:mb-12">
            Ozford Institute of Higher Education Pty Ltd (OIHE) is committed to protecting students in the unlikely event that OIHE is unable to deliver a course in which a student is enrolled.<br />
            This page explains the tuition protection arrangements for:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Domestic Students Card */}
            <div className="bg-[#FAFAF7] border border-[#E5E8E2] p-10 md:p-12 flex flex-col justify-start ">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" fill="#2463A7" fill-opacity="0.0705882" />
                <path d="M28.397 39.6122C33.2498 37.9205 37.3328 35.0037 37.3328 29.1702V21.0033C37.3328 20.6939 37.2099 20.3971 36.9911 20.1783C36.7723 19.9595 36.4756 19.8366 36.1662 19.8366C33.8331 19.8366 30.9284 18.4482 28.8869 16.6631C28.6398 16.452 28.3254 16.3359 28.0004 16.3359C27.6753 16.3359 27.3609 16.452 27.1138 16.6631C25.084 18.4365 22.1676 19.8366 19.8345 19.8366C19.5251 19.8366 19.2284 19.9595 19.0096 20.1783C18.7909 20.3971 18.668 20.6939 18.668 21.0033V29.1702C18.668 35.0037 22.7509 37.9205 27.6154 39.6005C27.8668 39.6942 28.1429 39.6983 28.397 39.6122Z" stroke="#4D97E6" stroke-width="2" stroke-linecap="round" />
              </svg>

              <h3 className="text-[#1C1D1C] text-[24px] mt-3" style={{ fontFamily: 'var(--font-dm-serif)' }}>
                Domestic higher education students
              </h3>
            </div>

            {/* Overseas Students Card */}
            <div className="bg-[#FAFAF7] border border-[#E5E8E2] p-10 md:p-12 flex flex-col justify-start ">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" fill="#2463A7" fill-opacity="0.0705882" />
                <path d="M39.6672 28.0035C39.6672 34.4474 34.4435 39.6711 27.9996 39.6711M39.6672 28.0035C39.6672 21.5597 34.4435 16.3359 27.9996 16.3359M39.6672 28.0035H16.332M27.9996 39.6711C21.5558 39.6711 16.332 34.4474 16.332 28.0035M27.9996 39.6711C25.0037 36.5254 23.3326 32.3477 23.3326 28.0035C23.3326 23.6594 25.0037 19.4817 27.9996 16.3359M27.9996 39.6711C30.9956 36.5254 32.6667 32.3477 32.6667 28.0035C32.6667 23.6594 30.9956 19.4817 27.9996 16.3359M27.9996 16.3359C21.5558 16.3359 16.332 21.5597 16.332 28.0035" stroke="#4D97E6" stroke-width="2" stroke-linecap="round" />
              </svg>


              <h3 className="text-[#1C1D1C] text-[24px] mt-3" style={{ fontFamily: 'var(--font-dm-serif)' }}>
                Overseas students studying on a student visa.              </h3>
            </div>
          </div>
        </div>

        {/* Domestic Students - Tuition Assurance Section */}
        <div className="w-full bg-[#FAFAFA] px-4 md:px-8 xl:px-[100px] py-12 md:py-16 lg:py-24 border-t border-[#EAEAE6]">
          <div className="max-w-[1480px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">

            {/* Left Content */}
            <div className="flex-1 max-w-[800px] border-b lg:border-none border-[#EAEAE6] pb-10 lg:pb-0 mb-4 lg:mb-0">
              <div className="flex items-center gap-4 mb-6">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.6667 12.8333L21.0002 15.1667L25.6672 10.5M18.6667 24.5V22.1667C18.6667 20.929 18.175 19.742 17.2997 18.8668C16.4245 17.9917 15.2374 17.5 13.9996 17.5H6.99907C5.7613 17.5 4.57422 17.9917 3.69898 18.8668C2.82374 19.742 2.33203 20.929 2.33203 22.1667V24.5M15.1664 8.16667C15.1664 10.744 13.0769 12.8333 10.4994 12.8333C7.92182 12.8333 5.83231 10.744 5.83231 8.16667C5.83231 5.58934 7.92182 3.5 10.4994 3.5C13.0769 3.5 15.1664 5.58934 15.1664 8.16667Z" stroke="#0B1F4A" stroke-width="2" stroke-linecap="round" />
                </svg>

                <h2 className="text-[#1C1D1C] text-[28px] md:text-[32px] lg:text-[36px]" style={{ fontFamily: 'var(--font-dm-serif)' }}>
                  Domestic Students <span className="font-normal text-[#999] px-2">—</span> Tuition Assurance
                </h2>
              </div>

              <p className="text-[#666B66] text-[15px] md:text-[16px] leading-relaxed mb-6">
                <strong className="text-[#2D68A8]">OIHE ABN 33 165 694 351 ACN 165 694 351</strong> must meet tuition assurance requirements for domestic students enrolled in higher education courses.<br />
                These requirements are covered under the Higher Education Support Act 2003 and the Higher Education Provider Guidelines 2012.
              </p>

              <p className="text-[#4A524A] text-[15px] md:text-[16px] leading-relaxed mb-8">
                If OIHE ceases to provide a course in which a domestic student is enrolled, the student may be entitled to choose one of the following options:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Option 1 */}
                <div className="bg-white border border-[#EAEAE6] p-8 shadow-sm">
                  <h3 className="text-[#0B1F4A] text-[20px]  mb-4" style={{ fontFamily: 'var(--font-dm-serif)' }}>
                    Option 1: Course Assurance
                  </h3>
                  <p className="text-[#666B66] text-[14px] leading-relaxed">
                    The student may be offered a place in a similar course of study with another higher education provider.<br /><br />
                    Where applicable, the student will not be required to pay tuition fees for replacement units that they had commenced but could not complete because OIHE ceased to provide the course.
                  </p>
                </div>
                {/* Option 2 */}
                <div className="bg-white border border-[#EAEAE6] p-8 shadow-sm">
                  <h3 className="text-[#0B1F4A] text-[20px]  mb-4" style={{ fontFamily: 'var(--font-dm-serif)' }}>
                    Option 2: Tuition Fee Repayment
                  </h3>
                  <p className="text-[#666B66] text-[14px] leading-relaxed">
                    The student may receive a refund of upfront tuition fees paid for affected units, and/or a re-credit of their FEE-HELP balance for affected units commenced but not completed.
                  </p>
                </div>
              </div>

              <p className="text-[#666B66] text-[14px]">
                OIHE meets its tuition assurance requirements through its teach-out and tuition assurance arrangements.
              </p>
            </div>

            {/* Right Content - Co-Provider Card */}
            <div className="w-full lg:w-[420px]">
              <div className="bg-white border border-[#EAEAE6] p-8 md:p-10 shadow-sm sticky top-[120px]">
                <div className="flex items-center gap-4 mb-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" fill="#2463A7" fill-opacity="0.0705882" />
                    <path d="M18.3317 25.0006V19.1669M21.6649 25.0006V19.1669M24.9981 25.0006V19.1669M12.4985 28.3341H27.4981M14.9985 25.0006V19.1669M19.2651 11.8316C19.4937 11.7205 19.7448 11.6632 19.999 11.6641C20.2532 11.6649 20.5038 11.7239 20.7317 11.8366L27.2865 15.0426C27.6831 15.2368 27.5448 15.8335 27.1032 15.8335H12.8936C12.452 15.8335 12.3145 15.2368 12.7103 15.0426L19.2651 11.8316Z" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
                  </svg>

                  <div>
                    <h3 className="text-[#1C1D1C] text-[20px]" style={{ fontFamily: 'var(--font-dm-serif)' }}>
                      Kent Institute Australia
                    </h3>
                    <p className="text-[#666B66] text-[14px] mt-1">
                      Domestic Tuition Assurance Co-Provider
                    </p>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-[#E5E8E2] mb-8"></div>

                <ul className="space-y-5">
                  <li className="flex items-center gap-3 text-[14px]">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.33529 11.6641V2.33073C9.33529 2.02131 9.21236 1.72456 8.99355 1.50577C8.77474 1.28698 8.47797 1.16406 8.16853 1.16406H5.83501C5.52557 1.16406 5.2288 1.28698 5.00999 1.50577C4.79118 1.72456 4.66825 2.02131 4.66825 2.33073V11.6641M2.33473 3.4974H11.6688C12.3132 3.4974 12.8356 4.01973 12.8356 4.66406V10.4974C12.8356 11.1417 12.3132 11.6641 11.6688 11.6641H2.33473C1.69035 11.6641 1.16797 11.1417 1.16797 10.4974V4.66406C1.16797 4.01973 1.69035 3.4974 2.33473 3.4974Z" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
                    </svg>
                    <span className="font-semibold text-[#1A1D1A]">Entity:</span>
                    <span className="text-[#4A524A]">Kent Institute Australia Pty Ltd</span>
                  </li>
                  <li className="flex items-center gap-3 text-[14px]">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_6502_1195)">
                        <path d="M5.83284 7.58103C6.08336 7.91594 6.40297 8.19306 6.77 8.39358C7.13703 8.59411 7.54289 8.71335 7.96006 8.74323C8.37722 8.77311 8.79594 8.71292 9.1878 8.56674C9.57966 8.42057 9.9355 8.19182 10.2312 7.89603L11.9812 6.14603C12.5125 5.59594 12.8065 4.85919 12.7998 4.09445C12.7932 3.32971 12.4864 2.59817 11.9456 2.0574C11.4049 1.51662 10.6733 1.20988 9.9086 1.20324C9.14386 1.19659 8.4071 1.49057 7.85701 2.02187L6.85368 3.01937M8.16629 6.41452C7.91578 6.07961 7.59617 5.8025 7.22914 5.60197C6.86211 5.40145 6.45625 5.2822 6.03908 5.25232C5.62192 5.22245 5.2032 5.28264 4.81134 5.42881C4.41948 5.57499 4.06364 5.80373 3.76796 6.09952L2.01796 7.84952C1.48667 8.39961 1.19268 9.13637 1.19933 9.90111C1.20597 10.6658 1.51272 11.3974 2.05349 11.9382C2.59426 12.4789 3.3258 12.7857 4.09054 12.7923C4.85528 12.799 5.59204 12.505 6.14213 11.9737L7.13963 10.9762" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_6502_1195">
                          <rect width="14" height="14" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>


                    <span className="font-semibold text-[#1A1D1A]">Website:</span>
                    <a href="http://www.kent.edu.au" className="text-[#4A524A] hover:text-[#2D68A8] hover:underline" target="_blank" rel="noopener noreferrer">www.kent.edu.au</a>
                  </li>
                  <li className="flex items-center gap-3 text-[14px]">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.8356 4.08576L7.5904 7.42618C7.41241 7.52954 7.21023 7.58399 7.00439 7.58399C6.79856 7.58399 6.59638 7.52954 6.41839 7.42618L1.16797 4.08576M2.33473 2.33594H11.6688C12.3132 2.33594 12.8356 2.85822 12.8356 3.50249V10.5018C12.8356 11.1461 12.3132 11.6683 11.6688 11.6683H2.33473C1.69035 11.6683 1.16797 11.1461 1.16797 10.5018V3.50249C1.16797 2.85822 1.69035 2.33594 2.33473 2.33594Z" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
                    </svg>

                    <span className="font-semibold text-[#1A1D1A]">Email:</span>
                    <a href="mailto:info@kent.edu.au" className="text-[#4A524A] hover:text-[#2D68A8] hover:underline">info@kent.edu.au</a>
                  </li>
                  <li className="flex items-center gap-3 text-[14px]">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_6502_1203)">
                        <path d="M8.45537 9.69859C8.32674 9.73072 8.191 9.71808 8.07052 9.66274C6.45014 8.86748 5.13885 7.55783 4.34156 5.93844C4.28251 5.81732 4.26721 5.67949 4.29826 5.54837C4.32932 5.41724 4.4048 5.30091 4.5119 5.21914L4.78492 5.01437C4.92983 4.90569 5.04745 4.76476 5.12845 4.60275C5.20946 4.44074 5.25163 4.2621 5.25163 4.08096V2.33082C5.25163 2.02138 5.1287 1.72461 4.90989 1.5058C4.69108 1.28699 4.39431 1.16406 4.08487 1.16406H2.33473C2.02528 1.16406 1.72851 1.28699 1.5097 1.5058C1.29089 1.72461 1.16797 2.02138 1.16797 2.33082C1.16797 5.11582 2.2743 7.78675 4.24359 9.75604C6.21288 11.7253 8.88381 12.8317 11.6688 12.8317C11.9783 12.8317 12.275 12.7087 12.4938 12.4899C12.7126 12.2711 12.8356 11.9743 12.8356 11.6649V9.91476C12.8356 9.60532 12.7126 9.30855 12.4938 9.08974C12.275 8.87093 11.9783 8.748 11.6688 8.748H9.91867C9.73754 8.748 9.55889 8.79018 9.39688 8.87118C9.23487 8.95219 9.09394 9.0698 8.98526 9.21471L8.77816 9.48598C8.69785 9.59147 8.584 9.66646 8.45537 9.69859Z" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_6502_1203">
                          <rect width="14" height="14" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <span className="font-semibold text-[#1A1D1A]">Phone:</span>
                    <a href="tel:+61383530800" className="text-[#4A524A] hover:text-[#2D68A8] hover:underline">+61 3 8353 0800</a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Overseas Students Section */}
        <div className="w-full bg-white px-4 md:px-8 xl:px-[100px] py-12 md:py-16 lg:py-24 border-t border-[#EAEAE6]">
          <div className="max-w-[1480px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">

            {/* Left Content */}
            <div className="flex-1 max-w-[800px] border-b lg:border-none border-[#EAEAE6] pb-10 lg:pb-0 mb-4 lg:mb-0">
              <div className="flex items-center gap-4 mb-6">
                <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3324 8.00023V12.667M10.3324 17.3339H10.3441M19.6648 13.8343C19.6648 19.6678 15.5819 22.5846 10.729 24.2763C10.4749 24.3624 10.1989 24.3583 9.94744 24.2646C5.08292 22.5846 1 19.6678 1 13.8343V5.66734C1 5.35791 1.1229 5.06116 1.34167 4.84236C1.56045 4.62356 1.85716 4.50064 2.16655 4.50064C4.49965 4.50064 7.41602 3.10059 9.44582 1.3272C9.69296 1.11603 10.0073 1 10.3324 1C10.6575 1 10.9718 1.11603 11.219 1.3272C13.2604 3.11226 16.1651 4.50064 18.4982 4.50064C18.8076 4.50064 19.1044 4.62356 19.3231 4.84236C19.5419 5.06116 19.6648 5.35791 19.6648 5.66734V13.8343Z" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
                </svg>


                <h2 className="text-[#1C1D1C] text-[28px] md:text-[32px] lg:text-[36px]" style={{ fontFamily: 'var(--font-dm-serif)' }}>
                  Overseas Students <span className="font-normal text-[#999] px-2">—</span> Tuition Protection Service (TPS)
                </h2>
              </div>

              <p className="text-[#666B66] text-[15px] md:text-[16px] leading-relaxed ">
                Overseas students studying in Australia on a student visa are protected under the Education Services for Overseas Students Act 2000.
              </p>
              <p className="text-[#666B66] text-[15px] md:text-[16px] leading-relaxed ">
                OIHE participates in the Australian Government's Tuition Protection Service (TPS). The TPS assists overseas students if an education provider is unable to fully deliver their course.
              </p>
              <p className="text-[#666B66] text-[15px] md:text-[16px] leading-relaxed mb-6">
                In the unlikely event that OIHE is unable to deliver a course to an overseas student, the TPS may assist the student to:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3336 4L6.00097 11.3328L2.66797 7.99971" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
                  </svg>

                  <span className="text-[#666B66] text-[15px] ">
                    Continue their studies in a suitable alternative course with another education provider, or
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3336 4L6.00097 11.3328L2.66797 7.99971" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
                  </svg>

                  <span className="text-[#666B66] text-[15px] ">
                    Receive a refund of any unspent pre-paid tuition fees.
                  </span>
                </li>
              </ul>

              <p className="text-[#666B66] text-[13px] md:text-[14px] leading-relaxed mb-6">
                These arrangements are in accordance with the <strong className="text-[#2D68A8]">ESOS Act 2000, ESOS Regulations 2019, and the National Code of Practice for Providers of Education and Training to Overseas Students 2018, including Standard 3.4.4.</strong>
              </p>

              <div className="flex items-center gap-2 text-[14px] md:text-[15px] mb-12">
                <span className="text-[#2D68A8] font-semibold">Tuition Protection Service Portal:</span>
                <a href="https://www.tps.gov.au" target="_blank" rel="noopener noreferrer" className="text-[#4D97E6] hover:underline">
                  www.tps.gov.au
                </a>
              </div>

              <div className="w-full h-[1px] bg-[#EAEAE6] mb-10 md:mb-12"></div>

              <h3 className="text-[#1C1D1C] text-[22px] md:text-[24px] lg:text-[28px] mb-6" style={{ fontFamily: 'var(--font-dm-serif)' }}>
                Refunds for Overseas Students
              </h3>

              <p className="text-[#666B66] text-[15px] md:text-[16px] leading-relaxed mb-4">
                Refunds are processed systematically according to legislative policies: <strong className="text-[#2D68A8]">ESOS Act 2000, the Education Services for Overseas Students Regulations 2019, OIHE's Refund Policy, and the student's signed Written Agreement.</strong><br />
                Any refunds are precisely calculated in accordance with national regulations.
              </p>
            </div>

            {/* Right Content - Support Card */}
            <div className="w-full lg:w-[420px]">
              <div className="bg-white border border-[#E5E8E2] p-8 md:p-10 shadow-sm sticky top-[120px]">
                <div className="flex items-center gap-4 mb-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" fill="#2463A7" fill-opacity="0.0705882" />
                    <path d="M17.5727 17.4975C17.7687 16.9405 18.1554 16.4709 18.6645 16.1717C19.1735 15.8725 19.772 15.7632 20.3539 15.863C20.9359 15.9628 21.4637 16.2654 21.844 16.7171C22.2242 17.1688 22.4323 17.7405 22.4315 18.3309C22.4315 19.9977 19.9313 20.8311 19.9313 20.8311M19.9981 24.1651H20.0064M28.3321 19.9981C28.3321 24.6008 24.6008 28.3321 19.9981 28.3321C15.3953 28.3321 11.6641 24.6008 11.6641 19.9981C11.6641 15.3953 15.3953 11.6641 19.9981 11.6641C24.6008 11.6641 28.3321 15.3953 28.3321 19.9981Z" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
                  </svg>


                  <div>
                    <h3 className="text-[#1C1D1C] text-[20px]" style={{ fontFamily: 'var(--font-dm-serif)' }}>
                      OIHE Student Services
                    </h3>
                    <p className="text-[#666B66] text-[14px] mt-1">
                      Admissions, Tuition & Support Assistance
                    </p>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-[#E5E8E2] mb-8"></div>

                <ul className="space-y-5">
                  <li className="flex items-center gap-3 text-[14px]">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.02839 7.51636L9.91214 12.4899C9.92204 12.5484 9.91382 12.6086 9.88859 12.6624C9.86335 12.7161 9.82231 12.7609 9.77093 12.7907C9.71956 12.8205 9.66031 12.834 9.60111 12.8292C9.54191 12.8244 9.48557 12.8017 9.43964 12.764L7.35131 11.1966C7.25049 11.1213 7.12802 11.0806 7.00218 11.0806C6.87634 11.0806 6.75387 11.1213 6.65306 11.1966L4.56122 12.7634C4.51533 12.801 4.45906 12.8237 4.39993 12.8285C4.3408 12.8333 4.28162 12.8199 4.23028 12.7902C4.17894 12.7605 4.13788 12.7158 4.11259 12.6621C4.0873 12.6085 4.07897 12.5484 4.08872 12.4899L4.97189 7.51636M10.5 4.66406C10.5 6.59706 8.933 8.16406 7 8.16406C5.067 8.16406 3.5 6.59706 3.5 4.66406C3.5 2.73107 5.067 1.16406 7 1.16406C8.933 1.16406 10.5 2.73107 10.5 4.66406Z" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
                    </svg>

                    <span className="font-semibold text-[#1A1D1A]">Provider:</span>
                    <span className="text-[#1C1D1C]">Ozford Institute of Higher Education</span>
                  </li>
                  <li className="flex items-center gap-3 text-[13px]">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.34878 12.7145C8.43367 11.7776 11.6644 8.74401 11.6644 5.83116C11.6644 4.59337 11.1728 3.40627 10.2977 2.53102C9.42265 1.65577 8.23578 1.16406 6.99823 1.16406C5.76068 1.16406 4.57381 1.65577 3.69873 2.53102C2.82365 3.40627 2.33203 4.59337 2.33203 5.83116C2.33203 8.74401 5.56279 11.7776 6.64768 12.7145C6.74875 12.7906 6.87178 12.8317 6.99823 12.8317C7.12468 12.8317 7.24771 12.7906 7.34878 12.7145Z" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
                    </svg>

                    <span className="font-semibold text-[#1A1D1A]">Address:</span>
                    <span className="text-[#4A524A]">333 Queen Street, Melbourne VIC 3000</span>
                  </li>
                  <li className="flex items-center gap-3 text-[14px]">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_6502_1252)">
                        <path d="M8.45537 9.69859C8.32674 9.73072 8.191 9.71808 8.07052 9.66274C6.45014 8.86748 5.13885 7.55783 4.34156 5.93844C4.28251 5.81732 4.26721 5.67949 4.29826 5.54837C4.32932 5.41724 4.4048 5.30091 4.5119 5.21914L4.78492 5.01437C4.92983 4.90569 5.04745 4.76476 5.12845 4.60275C5.20946 4.44074 5.25163 4.2621 5.25163 4.08096V2.33082C5.25163 2.02138 5.1287 1.72461 4.90989 1.5058C4.69108 1.28699 4.39431 1.16406 4.08487 1.16406H2.33473C2.02528 1.16406 1.72851 1.28699 1.5097 1.5058C1.29089 1.72461 1.16797 2.02138 1.16797 2.33082C1.16797 5.11582 2.2743 7.78675 4.24359 9.75604C6.21288 11.7253 8.88381 12.8317 11.6688 12.8317C11.9783 12.8317 12.275 12.7087 12.4938 12.4899C12.7126 12.2711 12.8356 11.9743 12.8356 11.6649V9.91476C12.8356 9.60532 12.7126 9.30855 12.4938 9.08974C12.275 8.87093 11.9783 8.748 11.6688 8.748H9.91867C9.73754 8.748 9.55889 8.79018 9.39688 8.87118C9.23487 8.95219 9.09394 9.0698 8.98526 9.21471L8.77816 9.48598C8.69785 9.59147 8.584 9.66646 8.45537 9.69859Z" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_6502_1252">
                          <rect width="14" height="14" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <span className="font-semibold text-[#1A1D1A]">Phone:</span>
                    <a href="tel:+61386637188" className="text-[#4A524A] hover:text-[#2D68A8] hover:underline">+61 3 8663 7188</a>
                  </li>
                  <li className="flex items-center gap-3 text-[14px]">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_6502_1256)">
                        <path d="M5.83284 7.58103C6.08336 7.91594 6.40297 8.19306 6.77 8.39358C7.13703 8.59411 7.54289 8.71335 7.96006 8.74323C8.37722 8.77311 8.79594 8.71292 9.1878 8.56674C9.57966 8.42057 9.9355 8.19182 10.2312 7.89603L11.9812 6.14603C12.5125 5.59594 12.8065 4.85919 12.7998 4.09445C12.7932 3.32971 12.4864 2.59817 11.9456 2.0574C11.4049 1.51662 10.6733 1.20988 9.9086 1.20324C9.14386 1.19659 8.4071 1.49057 7.85701 2.02187L6.85368 3.01937M8.16629 6.41452C7.91578 6.07961 7.59617 5.8025 7.22914 5.60197C6.86211 5.40145 6.45625 5.2822 6.03908 5.25232C5.62192 5.22245 5.2032 5.28264 4.81134 5.42881C4.41948 5.57499 4.06364 5.80373 3.76796 6.09952L2.01796 7.84952C1.48667 8.39961 1.19268 9.13637 1.19933 9.90111C1.20597 10.6658 1.51272 11.3974 2.05349 11.9382C2.59426 12.4789 3.3258 12.7857 4.09054 12.7923C4.85528 12.799 5.59204 12.505 6.14213 11.9737L7.13963 10.9762" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_6502_1256">
                          <rect width="14" height="14" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <span className="font-semibold text-[#1A1D1A]">Website:</span>
                    <a href="http://www.ozford.edu.au" className="text-[#4A524A] hover:text-[#2D68A8] hover:underline" target="_blank" rel="noopener noreferrer">www.ozford.edu.au</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

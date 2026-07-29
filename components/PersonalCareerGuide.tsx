import React from 'react';

export default function PersonalCareerGuide() {
  return (
    <section id="coach" className="w-full bg-[#FAFAF7] scroll-mt-24">
      <div className="w-full flex flex-col lg:flex-row min-h-[500px]">
        {/* Left Side - Image */}
        <div className="w-full lg:w-[40%] relative lg:min-h-full">
          <img
            src="/carrer/img1.png"
            alt="Personal Career Guide Coaching Session"
            className="w-full h-auto lg:absolute lg:inset-0 lg:h-full lg:object-cover block"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center px-4 py-[60px] md:py-[60px] md:px-[60px]">
          <div className="max-w-[700px] w-full xl:pl-[40px]">
            {/* Subtitle */}
            <h4 className="text-[#4D97E6] text-[11px]  font-semibold uppercase tracking-wider mb-2">
              Student Success Coach
            </h4>

            {/* Title */}
            <h2 className="text-[#0B1F4A] text-[30px] md:text-[36px] italic mb-4 leading-tight" style={{ fontFamily: 'var(--font-dm-serif)' }}>
              Your Personal Career Guide
            </h2>

            {/* Underline */}
            <div className="w-[60px] h-[3px] bg-[#4D97E6] mb-6"></div>

            {/* Paragraphs */}
            <div className="text-[#444444] text-[15px]  leading-relaxed space-y-4 mb-8">
              <p>
                The Student Success Coach will assist you in achieving your academic and career goals, so you can acquire the skills and qualifications you need to perform your future job duties. Daniel will assist you by providing advice in areas such as community involvement, life skills, how to approach internships and interviews as well as engaging students in lifelong learning.
              </p>
              <p>
                A student success coach will assist you in professional development through personalized consultations and help you realise your skills and aptitude as an employee and help you achieve your career goals by building your OZFolio, assisting with writing resumes and cover letters and searching for potential job opportunities.
              </p>
            </div>

            {/* Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Career Coaching */}
              <div className="flex items-center gap-3 bg-white border border-gray-200 w-full rounded px-4 py-4">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <g clipPath="url(#clip0_6200_5095)">
                    <path d="M10.6668 13.3359V2.66927C10.6668 2.31565 10.5264 1.97651 10.2763 1.72646C10.0262 1.47641 9.68705 1.33594 9.3334 1.33594H6.66652C6.31287 1.33594 5.97371 1.47641 5.72364 1.72646C5.47357 1.97651 5.33308 2.31565 5.33308 2.66927V13.3359M2.6662 4.0026H13.3337C14.0702 4.0026 14.6672 4.59956 14.6672 5.33594V12.0026C14.6672 12.739 14.0702 13.3359 13.3337 13.3359H2.6662C1.92977 13.3359 1.33276 12.739 1.33276 12.0026V5.33594C1.33276 4.59956 1.92977 4.0026 2.6662 4.0026Z" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_6200_5095">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-[#0B1F4A] font-semibold text-[14px]">Career Coaching</span>
              </div>

              {/* Industry Connections */}
              <div className="flex items-center gap-3 bg-white border border-gray-200 w-full rounded px-4 py-4">
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <path d="M7.03881 10.334L8.37225 11.6674C8.50358 11.7987 8.6595 11.9029 8.83109 11.9739C9.00269 12.045 9.1866 12.0816 9.37233 12.0816C9.55806 12.0816 9.74198 12.045 9.91357 11.9739C10.0852 11.9029 10.2411 11.7987 10.3724 11.6674C10.5037 11.5361 10.6079 11.3802 10.679 11.2086C10.7501 11.037 10.7867 10.8531 10.7867 10.6674C10.7867 10.4817 10.7501 10.2978 10.679 10.1262C10.6079 9.95459 10.5037 9.79869 10.3724 9.66737M9.03912 8.33371L10.7059 10.0004C10.9712 10.2656 11.3309 10.4146 11.706 10.4146C12.0811 10.4146 12.4408 10.2656 12.7061 10.0004C12.9713 9.73517 13.1203 9.37546 13.1203 9.00038C13.1203 8.62531 12.9713 8.26559 12.7061 8.00038L10.1192 5.41369C9.74418 5.03916 9.23581 4.82878 8.70576 4.82878C8.17572 4.82878 7.66735 5.03916 7.29231 5.41369L6.7056 6.00036C6.44036 6.26558 6.08062 6.41458 5.70552 6.41458C5.33042 6.41458 4.97068 6.26558 4.70544 6.00036C4.4402 5.73515 4.29119 5.37543 4.29119 5.00036C4.29119 4.62528 4.4402 4.26557 4.70544 4.00035L6.57892 2.12701C7.18713 1.52043 7.9803 1.13404 8.83287 1.02898C9.68543 0.923931 10.5487 1.10622 11.286 1.54701L11.5993 1.73367C11.8832 1.905 12.2207 1.96442 12.5461 1.90034L13.7062 1.66701M13.706 1.00065L14.3727 8.33403H13.0393M1.70505 1.00065L1.03833 8.33403L5.37201 12.6674C5.63725 12.9326 5.99699 13.0816 6.37209 13.0816C6.74719 13.0816 7.10693 12.9326 7.37217 12.6674C7.63741 12.4022 7.78642 12.0425 7.78642 11.6674C7.78642 11.2923 7.63741 10.9326 7.37217 10.6674M1.70505 1.66732H7.03881" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="text-[#0B1F4A] font-semibold text-[14px]">Industry Connections</span>
              </div>

              {/* Resume Reviews */}
              <div className="flex items-center gap-3 bg-white border border-gray-200 w-full rounded px-4 py-4">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <g clipPath="url(#clip0_6200_5103)">
                    <path d="M7.81427 1.38908C7.75831 1.42382 7.71318 1.47351 7.68396 1.53253L6.14463 4.65187C6.0431 4.85738 5.89315 5.03514 5.70769 5.16986C5.52222 5.30457 5.3068 5.3922 5.07996 5.4252L1.63663 5.92853C1.5711 5.9378 1.50949 5.96528 1.45881 6.00785C1.40814 6.05043 1.37044 6.10638 1.35002 6.16933C1.32959 6.23228 1.32725 6.2997 1.34327 6.36392C1.35929 6.42813 1.39303 6.48655 1.44063 6.53253L3.9313 8.9572C4.0957 9.1173 4.21869 9.315 4.28966 9.53323C4.36062 9.75146 4.37743 9.98369 4.33863 10.2099L3.7513 13.6359C3.73987 13.701 3.74695 13.768 3.77173 13.8293C3.79652 13.8907 3.83801 13.9438 3.89149 13.9827C3.94498 14.0216 4.0083 14.0447 4.07426 14.0494C4.14023 14.0541 4.20618 14.0401 4.26463 14.0092L7.34263 12.3905C7.54549 12.284 7.77118 12.2284 8.0003 12.2284C8.22942 12.2284 8.45511 12.284 8.65796 12.3905L11.7366 14.0092C11.7951 14.0403 11.8611 14.0544 11.9272 14.0498C11.9933 14.0452 12.0567 14.0221 12.1103 13.9832C12.1639 13.9443 12.2055 13.8911 12.2303 13.8297C12.2551 13.7682 12.2621 13.7011 12.2506 13.6359L11.6626 10.2092C11.624 9.98313 11.6409 9.75105 11.7119 9.53295C11.7828 9.31485 11.9057 9.11727 12.07 8.9572L14.5606 6.53187C14.6078 6.48583 14.6412 6.42751 14.657 6.36349C14.6728 6.29947 14.6704 6.23231 14.65 6.1696C14.6296 6.1069 14.5921 6.05115 14.5416 6.00867C14.4912 5.96618 14.4299 5.93865 14.3646 5.9292L10.9206 5.4252C10.694 5.39194 10.4789 5.3042 10.2937 5.1695C10.1085 5.03481 9.95875 4.85718 9.8573 4.65187L8.3173 1.53253C8.28808 1.47351 8.24295 1.42382 8.187 1.38908C8.13104 1.35435 8.06649 1.33594 8.00063 1.33594C7.93477 1.33594 7.87022 1.35435 7.81427 1.38908Z" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_6200_5103">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-[#0B1F4A] font-semibold text-[14px]">Resume Reviews</span>
              </div>

              {/* Mock Interviews */}
              <div className="flex items-center gap-3 bg-white border border-gray-200 w-full rounded px-4 py-4">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <g clipPath="url(#clip0_6200_5107)">
                    <path d="M5.33333 1.33594V4.00282M10.6667 1.33594V4.00282M2 6.6697H14M3.33333 2.66938H12.6667C13.403 2.66938 14 3.26638 14 4.00282V13.3369C14 14.0733 13.403 14.6703 12.6667 14.6703H3.33333C2.59695 14.6703 2 14.0733 2 13.3369V4.00282C2 3.26638 2.59695 2.66938 3.33333 2.66938Z" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_6200_5107">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-[#0B1F4A] font-semibold text-[14px]">Mock Interviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

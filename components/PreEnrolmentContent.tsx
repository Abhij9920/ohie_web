import React from 'react';
import PageHeader from './PageHeader';

export default function PreEnrolmentContent() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Admission & Entry', href: '#' },
          { label: 'Pre-Enrolment', href: '#' }
        ]}
        hideUnderline={true}
        title="Pre-Enrolment"
      />

      <section className="w-full bg-[#FAFAF7] py-12 md:py-20 min-h-[50vh]">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px]">
          <h2 className="text-[#1A1D1A] text-[28px] md:text-[36px] italic mb-6 md:mb-8" style={{ fontFamily: 'var(--font-dm-serif)' }}>
            Prepare for your study journey with OIHE
          </h2>

          <div className="text-[#4A524A] text-[15px] md:text-[16px] leading-relaxed mb-16 md:mb-24">
            <p className="mb-4">
              Ozford Institute of Higher Education's Pre-Enrolment Guide provides important information for prospective and commencing international students preparing to study at our Melbourne or Brisbane campus.
            </p>
            <p>
              Students should read this guide carefully before accepting their offer, applying for a student visa, arranging travel, and commencing studies in Australia.
            </p>
          </div>

          {/* Guide Roadmap Section */}
          <div className="mb-8 md:mb-10">
            <span className="text-[#2463A7] text-[12px] font-bold tracking-wider uppercase mb-2 block">
              GUIDE ROADMAP
            </span>
            <h2 className="text-[#1A1D1A] text-[28px] md:text-[32px] italic" style={{ fontFamily: 'var(--font-dm-serif)' }}>
              The guide includes information about:
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            {/* Left Column */}
            <div className="flex-1 flex flex-col gap-4">
              {/* Item 1 */}
              <div className="bg-white border border-[#EAEAE6] p-4 md:px-6 md:py-5 flex items-center gap-5 rounded-[4px] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#4D97E6] shrink-0">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7015 25.4369C16.8712 23.5631 23.3328 17.4958 23.3328 11.6701C23.3328 9.19455 22.3495 6.82036 20.5994 5.06986C18.8492 3.31936 16.4755 2.33594 14.0004 2.33594C11.5253 2.33594 9.15153 3.31936 7.40137 5.06986C5.6512 6.82036 4.66797 9.19455 4.66797 11.6701C4.66797 17.4958 11.1295 23.5631 13.2993 25.4369C13.5014 25.5889 13.7475 25.6711 14.0004 25.6711C14.2533 25.6711 14.4993 25.5889 14.7015 25.4369Z" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
                  </svg>

                </div>
                <span className="text-[#1A1D1A] text-[14px] md:text-[15px] font-medium">Studying in Melbourne and Brisbane</span>
              </div>

              {/* Item 2 */}
              <div className="bg-white border border-[#EAEAE6] p-4 md:px-6 md:py-5 flex items-center gap-5 rounded-[4px] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#4D97E6] shrink-0">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_6500_9022)">
                      <path d="M16.3335 2.33594H7.00107C6.38229 2.33594 5.78886 2.58179 5.35132 3.01941C4.91378 3.45703 4.66797 4.05057 4.66797 4.66946V23.3376C4.66797 23.9565 4.91378 24.55 5.35132 24.9877C5.78886 25.4253 6.38229 25.6711 7.00107 25.6711H20.9997C21.6184 25.6711 22.2119 25.4253 22.6494 24.9877C23.087 24.55 23.3328 23.9565 23.3328 23.3376V9.3365M16.3335 2.33594C16.7027 2.33534 17.0685 2.40782 17.4096 2.54919C17.7508 2.69056 18.0606 2.89804 18.3213 3.15967L22.5068 7.34601C22.7691 7.60679 22.9772 7.91696 23.1189 8.2586C23.2607 8.60025 23.3334 8.9666 23.3328 9.3365M16.3335 2.33594V8.16974C16.3335 8.47918 16.4564 8.77595 16.6751 8.99476C16.8939 9.21357 17.1906 9.3365 17.5 9.3365L23.3328 9.3365M11.6673 10.5033H9.33417M18.6666 15.1703H9.33417M18.6666 19.8373H9.33417" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_6500_9022">
                        <rect width="28" height="28" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-[#1A1D1A] text-[14px] md:text-[15px] font-medium">Admissions and application process</span>
              </div>

              {/* Item 3 */}
              <div className="bg-white border border-[#EAEAE6] p-4 md:px-6 md:py-5 flex items-center gap-5 rounded-[4px] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#4D97E6] shrink-0">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_6500_9026)">
                      <path d="M14.0004 11.67H14.012M14.0004 16.3371H14.012M14.0004 7.00298H14.012M18.6666 11.67H18.6782M18.6666 16.3371H18.6782M18.6666 7.00298H18.6782M9.33417 11.67H9.34583M9.33417 16.3371H9.34583M9.33417 7.00298H9.34583M10.5007 25.6711V22.1709C10.5007 21.8614 10.6236 21.5646 10.8424 21.3458C11.0612 21.127 11.3579 21.0041 11.6673 21.0041H16.3335C16.6429 21.0041 16.9396 21.127 17.1583 21.3458C17.3771 21.5646 17.5 21.8614 17.5 22.1709V25.6711M7.00107 2.33594H20.9997C22.2882 2.33594 23.3328 3.38069 23.3328 4.66946V23.3376C23.3328 24.6264 22.2882 25.6711 20.9997 25.6711H7.00107C5.71253 25.6711 4.66797 24.6264 4.66797 23.3376V4.66946C4.66797 3.38069 5.71253 2.33594 7.00107 2.33594Z" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_6500_9026">
                        <rect width="28" height="28" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-[#1A1D1A] text-[14px] md:text-[15px] font-medium">Orientation and campus information</span>
              </div>

              {/* Item 4 */}
              <div className="bg-white border border-[#EAEAE6] p-4 md:px-6 md:py-5 flex items-center gap-5 rounded-[4px] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#4D97E6] shrink-0">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_6500_9030)">
                      <path d="M18.6667 12.8333L20.7667 22.4C20.8833 22.9833 20.65 23.45 20.1833 23.8L19.6 24.0333C19.0167 24.2667 18.4333 24.15 18.0833 23.6833L14 17.5L10.5 19.8333V23.3333L9.33333 24.5L7 21L3.5 18.6667L4.66667 17.5H8.16667L10.5 14L4.31667 9.91667C3.85 9.56667 3.73333 8.98333 3.96667 8.4L4.31667 7.81667C4.55 7.35 5.01667 7.11667 5.6 7.23333L15.1667 9.33333L19.25 5.25C21 3.5 23.3333 2.91667 24.5 3.5C25.0833 4.66667 24.5 7 22.75 8.75L18.6667 12.8333Z" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_6500_9030">
                        <rect width="28" height="28" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-[#1A1D1A] text-[14px] md:text-[15px] font-medium">Airport pick-up and accommodation</span>
              </div>

              {/* Item 5 */}
              <div className="bg-white border border-[#EAEAE6] p-4 md:px-6 md:py-5 flex items-center gap-5 rounded-[4px] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#4D97E6] shrink-0">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_6500_9034)">
                      <path d="M25.6672 14.0035H22.7737C22.2638 14.0024 21.7675 14.1684 21.3609 14.476C20.9542 14.7837 20.6595 15.216 20.5218 15.707L17.7799 25.4611C17.7623 25.5217 17.7254 25.5749 17.6749 25.6128C17.6244 25.6507 17.563 25.6711 17.4999 25.6711C17.4368 25.6711 17.3754 25.6507 17.3249 25.6128C17.2744 25.5749 17.2376 25.5217 17.2199 25.4611L10.7794 2.54595C10.7617 2.48537 10.7249 2.43214 10.6744 2.39428C10.6239 2.35641 10.5625 2.33594 10.4994 2.33594C10.4362 2.33594 10.3748 2.35641 10.3243 2.39428C10.2738 2.43214 10.237 2.48537 10.2193 2.54595L7.47744 12.3001C7.34031 12.7891 7.04735 13.2201 6.64305 13.5275C6.23875 13.835 5.74518 14.0021 5.23726 14.0035H2.33203" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_6500_9034">
                        <rect width="28" height="28" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-[#1A1D1A] text-[14px] md:text-[15px] font-medium">Overseas Student Health Cover</span>
              </div>

              {/* Item 6 */}
              <div className="bg-white border border-[#EAEAE6] p-4 md:px-6 md:py-5 flex items-center gap-5 rounded-[4px] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#4D97E6] shrink-0">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_6500_9038)">
                      <path d="M2.33203 11.6699H25.6672M4.66555 5.83594H23.3337C24.6225 5.83594 25.6672 6.88073 25.6672 8.16954V19.8375C25.6672 21.1264 24.6225 22.1711 23.3337 22.1711H4.66555C3.37678 22.1711 2.33203 21.1264 2.33203 19.8375V8.16954C2.33203 6.88073 3.37678 5.83594 4.66555 5.83594Z" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_6500_9038">
                        <rect width="28" height="28" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-[#1A1D1A] text-[14px] md:text-[15px] font-medium">Student visa conditions</span>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col gap-4">
              {/* Item 7 */}
              <div className="bg-white border border-[#EAEAE6] p-4 md:px-6 md:py-5 flex items-center gap-5 rounded-[4px] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#4D97E6] shrink-0">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.5 18.6667V23.3333C24.5 23.6428 24.3771 23.9395 24.1583 24.1583C23.9395 24.3771 23.6428 24.5 23.3333 24.5H5.83333C5.21449 24.5 4.621 24.2542 4.18342 23.8166C3.74583 23.379 3.5 22.7855 3.5 22.1667V5.83333C3.5 5.21449 3.74583 4.621 4.18342 4.18342C4.621 3.74583 5.21449 3.5 5.83333 3.5H21C21.3094 3.5 21.6062 3.62292 21.825 3.84171C22.0438 4.0605 22.1667 4.35725 22.1667 4.66667V8.16667M3.5 5.83333C3.5 6.45217 3.74583 7.04566 4.18342 7.48325C4.621 7.92083 5.21449 8.16667 5.83333 8.16667H23.3333C23.6428 8.16667 23.9395 8.28958 24.1583 8.50838C24.3771 8.72717 24.5 9.02391 24.5 9.33333V14M24.5 14H21C20.3812 14 19.7877 14.2458 19.3501 14.6834C18.9125 15.121 18.6667 15.7145 18.6667 16.3333C18.6667 16.9522 18.9125 17.5457 19.3501 17.9832C19.7877 18.4208 20.3812 18.6667 21 18.6667H24.5M24.5 14C24.8094 14 25.1062 14.1229 25.325 14.3417C25.5438 14.5605 25.6667 14.8572 25.6667 15.1667V17.5C25.6667 17.8094 25.5438 18.1062 25.325 18.325C25.1062 18.5437 24.8094 18.6667 24.5 18.6667" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-[#1A1D1A] text-[14px] md:text-[15px] font-medium">Living costs and financial capacity</span>
              </div>

              {/* Item 8 */}
              <div className="bg-white border border-[#EAEAE6] p-4 md:px-6 md:py-5 flex items-center gap-5 rounded-[4px] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#4D97E6] shrink-0">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_6500_9047)">
                      <path d="M5.75027 5.75418L10.6973 10.7012M17.3017 10.7012L22.2487 5.75418M17.3017 17.3056L22.2487 22.2526M10.6973 17.3056L5.75027 22.2526M25.6672 14.0035C25.6672 20.4474 20.4435 25.6711 13.9996 25.6711C7.55579 25.6711 2.33203 20.4474 2.33203 14.0035C2.33203 7.5597 7.55579 2.33594 13.9996 2.33594C20.4435 2.33594 25.6672 7.5597 25.6672 14.0035ZM18.6667 14.0035C18.6667 16.5811 16.5772 18.6706 13.9996 18.6706C11.4221 18.6706 9.33259 16.5811 9.33259 14.0035C9.33259 11.426 11.4221 9.3365 13.9996 9.3365C16.5772 9.3365 18.6667 11.426 18.6667 14.0035Z" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_6500_9047">
                        <rect width="28" height="28" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-[#1A1D1A] text-[14px] md:text-[15px] font-medium">Student support services</span>
              </div>

              {/* Item 9 */}
              <div className="bg-white border border-[#EAEAE6] p-4 md:px-6 md:py-5 flex items-center gap-5 rounded-[4px] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#4D97E6] shrink-0">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_6500_9051)">
                      <path d="M18.0568 15.0405L19.8243 24.9875C19.8441 25.1047 19.8276 25.225 19.7772 25.3326C19.7267 25.4401 19.6446 25.5297 19.5419 25.5893C19.4391 25.6489 19.3206 25.6757 19.2022 25.6662C19.0838 25.6566 18.9711 25.6112 18.8793 25.5359L14.7026 22.401C14.501 22.2504 14.256 22.169 14.0044 22.169C13.7527 22.169 13.5077 22.2504 13.3061 22.401L9.12245 25.5347C9.03065 25.6099 8.91812 25.6553 8.79986 25.6648C8.6816 25.6744 8.56323 25.6477 8.46055 25.5882C8.35788 25.5288 8.27577 25.4394 8.22518 25.3321C8.1746 25.2248 8.15795 25.1046 8.17745 24.9875L9.94378 15.0405M21 9.33594C21 13.2019 17.866 16.3359 14 16.3359C10.134 16.3359 7 13.2019 7 9.33594C7 5.46994 10.134 2.33594 14 2.33594C17.866 2.33594 21 5.46994 21 9.33594Z" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_6500_9051">
                        <rect width="28" height="28" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-[#1A1D1A] text-[14px] md:text-[15px] font-medium">Academic expectations</span>
              </div>

              {/* Item 10 */}
              <div className="bg-white border border-[#EAEAE6] p-4 md:px-6 md:py-5 flex items-center gap-5 rounded-[4px] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#4D97E6] shrink-0">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.397 25.6122C19.2498 23.9205 23.3328 21.0037 23.3328 15.1702V7.00328C23.3328 6.69385 23.2099 6.39709 22.9911 6.1783C22.7723 5.9595 22.4756 5.83658 22.1662 5.83658C19.8331 5.83658 16.9284 4.4482 14.8869 2.66314C14.6398 2.45196 14.3254 2.33594 14.0004 2.33594C13.6753 2.33594 13.3609 2.45196 13.1138 2.66314C11.084 4.43653 8.16762 5.83658 5.83452 5.83658C5.52513 5.83658 5.22841 5.9595 5.00964 6.1783C4.79087 6.39709 4.66797 6.69385 4.66797 7.00328V15.1702C4.66797 21.0037 8.75089 23.9205 13.6154 25.6005C13.8668 25.6942 14.1429 25.6983 14.397 25.6122Z" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-[#1A1D1A] text-[14px] md:text-[15px] font-medium">OIHE policies and procedures</span>
              </div>

              {/* Item 11 */}
              <div className="bg-white border border-[#EAEAE6] p-4 md:px-6 md:py-5 flex items-center gap-5 rounded-[4px] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#4D97E6] shrink-0">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6676 15.1699C12.1687 15.8397 12.8079 16.3939 13.542 16.795C14.276 17.196 15.0877 17.4345 15.9221 17.4943C16.7564 17.554 17.5938 17.4336 18.3775 17.1413C19.1613 16.8489 19.8729 16.3915 20.4643 15.7999L23.9643 12.2999C25.0269 11.1997 25.6149 9.72619 25.6016 8.19671C25.5883 6.66723 24.9748 5.20415 23.8933 4.12261C22.8117 3.04106 21.3486 2.42757 19.8191 2.41428C18.2897 2.40099 16.8162 2.98896 15.716 4.05155L13.7093 6.04655M16.3345 12.8369C15.8335 12.167 15.1943 11.6128 14.4602 11.2118C13.7262 10.8107 12.9145 10.5722 12.0801 10.5125C11.2458 10.4527 10.4084 10.5731 9.62464 10.8654C8.84092 11.1578 8.12924 11.6153 7.53788 12.2069L4.03788 15.7069C2.97529 16.807 2.38732 18.2805 2.40061 19.81C2.4139 21.3395 3.02739 22.8026 4.10893 23.8841C5.19048 24.9657 6.65355 25.5792 8.18304 25.5924C9.71252 25.6057 11.186 25.0178 12.2862 23.9552L14.2812 21.9602" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-[#1A1D1A] text-[14px] md:text-[15px] font-medium">Useful student resources and links</span>
              </div>
            </div>
          </div>

          {/* Resources Section */}
          <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-[#EAEAE6]">
            <div className="mb-8 md:mb-10">
              <span className="text-[#0B1F4A] text-[12px] font-bold tracking-wider uppercase mb-2 block">
                STUDENT RESOURCES
              </span>
              <h2 className="text-[#1A1D1A] text-[28px] md:text-[32px] italic" style={{ fontFamily: 'var(--font-dm-serif)' }}>
                Get started with your copies
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Card 1: PDF Guide */}
              <a href="/OIHE_Student_Handbook_Jul_2026_1.pdf" target="_blank" rel="noopener noreferrer" className="group block bg-white border border-[#4D97E6] p-6 md:p-8 flex items-center justify-between hover:shadow-md transition-all rounded-[4px]">
                <div className="flex items-center gap-6">
                  <div className="w-[48px] h-[48px] bg-[#EAF2FA] rounded-[4px] flex items-center justify-center shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="#4D97E6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14 2V8H20" stroke="#4D97E6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#1A1D1A] text-[16px] md:text-[18px] font-bold mb-1">Pre-Enrolment Student Guide</h3>
                    <p className="text-[#4A524A] text-[12px] md:text-[13px] leading-tight max-w-[280px]">Download the comprehensive PDF guide with critical checksheets</p>
                  </div>
                </div>
                <div className="text-[#4D97E6] group-hover:translate-x-1 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>

              {/* Card 2: Video Guide */}
              <a href="/admission-entry/pre-enrolment/video" className="group block bg-[#FAFAF7] border border-[#EAEAE6] p-6 md:p-8 flex items-center justify-between hover:border-[#4D97E6] hover:shadow-md transition-all rounded-[4px]">
                <div className="flex items-center gap-6">
                  <div className="w-[48px] h-[48px] bg-[#EEF4F0] rounded-[4px] flex items-center justify-center shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3L19 12L5 21V3Z" stroke="#4D97E6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#1A1D1A] text-[16px] md:text-[18px] font-bold mb-1">Pre-Enrolment Video Guide</h3>
                    <p className="text-[#4A524A] text-[12px] md:text-[13px] leading-tight max-w-[280px]">Watch a quick 12-minute runthrough from our admissions directors</p>
                  </div>
                </div>
                <div className="text-[#4D97E6] group-hover:translate-x-1 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

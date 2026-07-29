import Image from "next/image";
import Link from "next/link";

export default function CourseBanner() {
  return (
    <section className="w-full bg-[#0B1F4A] overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row">

        {/* Left Content Area */}
        <div className="w-full lg:w-[55%] xl:w-[60%] p-6 md:p-8 mb-[40px] lg:mb-[66px] flex flex-col justify-center items-center lg:items-start text-center lg:text-left">

          {/* Logo */}
          <div className="mb-8 flex justify-center lg:justify-start w-full">
            <Image
              src="/footer_logo.png"
              alt="OIHE Logo"
              width={140}
              height={50}
              className="object-contain"
            />
          </div>

          {/* Heading */}
          <h2 className="text-[22px] md:text-[28px] lg:text-[34px] font-[family-name:var(--font-dm-serif)] leading-[1.2] mb-10 uppercase">
            <span className="text-[#6BA1E5]">SHAPE YOUNG MINDS &<br /> BUILD YOUR FUTURE IN</span><br />
            <span className="text-white">EARLY CHILDHOOD EDUCATION</span>
          </h2>

          {/* Badge */}
          <div className="inline-flex items-center gap-4 rounded-full border-2 border-[#4D97E6] px-2 py-2 pr-6 w-fit mb-5 bg-[#0B1F4A]/50">
            <div className="w-8 h-8 rounded-full bg-[#4D97E6] flex items-center justify-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6656 6.66184V10.6623M3.99979 8.3287V10.6623C3.99979 11.1928 4.42118 11.7016 5.17127 12.0767C5.92135 12.4518 6.93869 12.6625 7.99947 12.6625C9.06025 12.6625 10.0776 12.4518 10.8277 12.0767C11.5778 11.7016 11.9991 11.1928 11.9991 10.6623V8.3287M14.2788 7.27681C14.3982 7.22416 14.4994 7.13764 14.5701 7.02799C14.6408 6.91833 14.6777 6.79035 14.6763 6.6599C14.675 6.52945 14.6354 6.40226 14.5625 6.29409C14.4896 6.18592 14.3866 6.10152 14.2662 6.05134L8.55262 3.44838C8.37893 3.36913 8.19024 3.32812 7.99933 3.32812C7.80842 3.32812 7.61974 3.36913 7.44604 3.44838L1.73317 6.04867C1.61449 6.10066 1.51353 6.18611 1.44263 6.29458C1.37174 6.40304 1.33398 6.52982 1.33398 6.65941C1.33398 6.789 1.37174 6.91578 1.44263 7.02424C1.51353 7.13271 1.61449 7.21816 1.73317 7.27015L7.44604 9.87578C7.61974 9.95502 7.80842 9.99603 7.99933 9.99603C8.19024 9.99603 8.37893 9.95502 8.55262 9.87578L14.2788 7.27681Z" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>

            </div>
            <div className="flex flex-col">
              <span className="text-white text-[13px] font-bold">NEW COURSE THIS AUGUST</span>
              <span className="text-[#6BA1E5] text-[10px] font-semibold uppercase tracking-wider">INTAKE - 2ND OF AUGUST</span>
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-12 w-full">

            {/* Card 1 */}
            <div className="flex-1 bg-[#0D2451] rounded-xl border-l-[4px] border-l-[#4D97E6] p-[16px] flex flex-col">
              <div className="hidden sm:flex w-8 h-8 rounded-full bg-[#4D97E6] text-white text-[15px] font-bold items-center justify-center mb-3">1</div>
              <div className="flex items-center justify-center sm:justify-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-full border-2 border-[#4D97E6] flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h3 className="text-white text-[12px] font-semibold leading-snug uppercase">MASTER OF TEACHING (EARLY <br /> CHILDHOOD)</h3>
              </div>
              <p className="text-[#4D97E6] text-[11px]">CRICOS Course Code: 120678</p>
            </div>

            {/* Card 2 */}
            <div className="flex-1 bg-[#0D2451] rounded-xl border-l-[4px] border-l-[#4D97E6] p-[16px] flex flex-col">
              <div className="hidden sm:flex w-8 h-8 rounded-full bg-[#4D97E6] text-white text-[15px] font-bold items-center justify-center mb-3">2</div>
              <div className="flex items-center justify-center sm:justify-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-full border-2 border-[#4D97E6] flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h3 className="text-white text-[12px] font-semibold leading-snug uppercase">GRADUATE DIPLOMA IN EARLY <br /> CHILDHOOD EDUCATION</h3>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[#94A3B8] text-[11px]">Course Sector: Higher Education</p>
                <p className="text-[#4D97E6] text-[11px]">CRICOS Course Code: 12067SC</p>
              </div>
            </div>

          </div>

          {/* Features Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16 mt-8">

            <div className="flex flex-col items-center text-center gap-4 relative">
              <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                  <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="white" strokeWidth="1" />
                  <path d="M18.9999 22.75V21.25C18.9999 20.4544 18.6838 19.6913 18.1211 19.1287C17.5585 18.5661 16.7953 18.25 15.9996 18.25H11.4993C10.7036 18.25 9.94043 18.5661 9.37777 19.1287C8.81512 19.6913 8.49902 20.4544 8.49902 21.25V22.75M18.9999 9.34595C19.6432 9.51272 20.213 9.8884 20.6198 10.414C21.0265 10.9396 21.2472 11.5854 21.2472 12.2499C21.2472 12.9145 21.0265 13.5603 20.6198 14.0859C20.213 14.6115 19.6432 14.9872 18.9999 15.1539M23.5002 22.7499V21.2499C23.4997 20.5852 23.2785 19.9395 22.8712 19.4141C22.4639 18.8888 21.8937 18.5136 21.25 18.3474M16.7497 12.25C16.7497 13.9069 15.4064 15.25 13.7494 15.25C12.0925 15.25 10.7492 13.9069 10.7492 12.25C10.7492 10.5931 12.0925 9.25 13.7494 9.25C15.4064 9.25 16.7497 10.5931 16.7497 12.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </g>
              </svg>

              <span className="text-white/90 text-[9px] font-medium tracking-wide uppercase leading-snug">CAMPUS<br />APPROVED<br />EDUCATORS</span>

              {/* Separator */}
              <div className="hidden md:block absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 w-[1px] h-14 bg-white/20"></div>
            </div>

            <div className="flex flex-col items-center text-center gap-4 relative">
              <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                  <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="white" strokeWidth="1" />
                  <path d="M15.9996 12.25V22.75M15.9996 12.25C15.9996 11.4544 15.6835 10.6913 15.1209 10.1287C14.5582 9.56607 13.7951 9.25 12.9994 9.25H9.24908C9.05016 9.25 8.85937 9.32902 8.71871 9.46967C8.57805 9.61032 8.49902 9.80109 8.49902 10V19.75C8.49902 19.9489 8.57805 20.1397 8.71871 20.2803C8.85937 20.421 9.05016 20.5 9.24908 20.5H13.7494C14.3462 20.5 14.9186 20.7371 15.3406 21.159C15.7626 21.581 15.9996 22.1533 15.9996 22.75M15.9996 12.25C15.9996 11.4544 16.3157 10.6913 16.8784 10.1287C17.441 9.56607 18.2041 9.25 18.9999 9.25H22.7502C22.9491 9.25 23.1399 9.32902 23.2805 9.46967C23.4212 9.61032 23.5002 9.80109 23.5002 10V19.75C23.5002 19.9489 23.4212 20.1397 23.2805 20.2803C23.1399 20.421 22.9491 20.5 22.7502 20.5H18.2498C17.653 20.5 17.0807 20.7371 16.6587 21.159C16.2367 21.581 15.9996 22.1533 15.9996 22.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </g>
              </svg>

              <span className="text-white/90 text-[9px] font-medium tracking-wide uppercase leading-snug">PRACTICAL CAREER<br />FOCUSED<br />LEARNING</span>

              {/* Separator */}
              <div className="hidden md:block absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 w-[1px] h-14 bg-white/20"></div>
            </div>

            <div className="flex flex-col items-center text-center gap-4 relative">
              <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                  <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="white" strokeWidth="1" />
                  <path d="M9.22518 11.7843C8.75224 12.472 8.49904 13.2869 8.49902 14.1215C8.49902 15.8465 9.62411 17.1216 10.7492 18.2466L14.8805 22.2456C15.0223 22.4043 15.1962 22.5311 15.3908 22.6174C15.5853 22.7037 15.796 22.7477 16.0088 22.7463C16.2216 22.745 16.4318 22.6984 16.6252 22.6096C16.8186 22.5208 16.9909 22.3919 17.1307 22.2314L21.25 18.2466C22.3751 17.1216 23.5002 15.839 23.5002 14.1215C23.5042 13.2851 23.2533 12.4673 22.781 11.7769C22.3086 11.0866 21.6372 10.5565 20.8561 10.2571C20.075 9.95775 19.2213 9.90337 18.4085 10.1012C17.5957 10.299 16.8625 10.7397 16.3064 11.3645C16.2671 11.4065 16.2196 11.44 16.1668 11.4629C16.114 11.4858 16.0571 11.4976 15.9996 11.4976C15.9421 11.4976 15.8852 11.4858 15.8324 11.4629C15.7796 11.44 15.7321 11.4065 15.6928 11.3645C15.135 10.7437 14.4019 10.3067 13.5904 10.1113C12.779 9.91582 11.9273 9.9711 11.1479 10.2698C10.3686 10.5685 9.69812 11.0966 9.22518 11.7843Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </g>
              </svg>

              <span className="text-white/90 text-[9px] font-medium tracking-wide uppercase leading-snug">SUPPORTIVE<br />LEARNING<br />ENVIRONMENT</span>

              {/* Separator */}
              <div className="hidden md:block absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 w-[1px] h-14 bg-white/20"></div>
            </div>

            <div className="flex flex-col items-center text-center gap-4 relative">
              <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                  <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="white" strokeWidth="1" />
                  <path d="M10.749 22.75V18.25M15.9996 22.75V13.75M21.2502 22.75V9.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </g>
              </svg>

              <span className="text-white/90 text-[9px] font-medium tracking-wide uppercase leading-snug">BUILT SKILLS &<br />REAL-WORLD<br />IMPACT</span>
            </div>

          </div>

          {/* Enroll Button */}
          <Link href="https://ozford.meshedhe.com.au/Publics/PublicsPages/StudentApply/pp_Application_Step0.aspx" className="bg-[#4D97E6] text-white px-6 py-3 md:px-8 md:py-4 text-[14px] font-semibold hover:bg-[#4D97E6] transition-colors w-fit flex items-center gap-3 ">
            Enroll Now
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

        </div>

        {/* Right Image Area */}
        <div className="w-full lg:w-[45%] relative min-h-[300px] md:min-h-[400px] lg:min-h-full">
          <Image
            src="/cousre_banner.png"
            alt="Early Childhood Education"
            fill
            className="object-cover object-center  p-6 "
          />
        </div>
      </div>
    </section>
  );
}

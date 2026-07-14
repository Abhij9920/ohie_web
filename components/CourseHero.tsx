import React from 'react';

interface CourseHeroProps {
  degreeLevel: string;
  cricosCode: string;
  title: string;
  description: string;
  backgroundImageUrl: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

export default function CourseHero({
  degreeLevel,
  cricosCode,
  title,
  description,
  backgroundImageUrl,
  primaryButtonText,
  secondaryButtonText,
}: CourseHeroProps) {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div
          className="w-full h-full bg-cover bg-right"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-xl">
          <div className="text-[#4D97E6] text-[10px] font-semibold tracking-wider mb-1 uppercase">
            {degreeLevel}
          </div>
          <div className="text-white/70 text-[10px] mb-6">
            CRICOS CODE: {cricosCode}
          </div>

          <h1
            className="text-[40px] md:text-[56px] text-white italic mb-6 tracking-normal"
            style={{ fontFamily: 'var(--font-dm-serif)', lineHeight: '110%' }}
          >
            {title}
          </h1>

          <p className="text-white/90 text-[16px] mb-10 leading-relaxed max-w-lg font-light">
            {description}
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#4F8CE6] hover:bg-[#3B7BE0] text-white px-8 py-3 text-[14px] font-medium transition-colors flex items-center gap-2">
              {primaryButtonText}
              <svg width="11" height="9" viewBox="79 2.5 10 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M82.843 10.6016L86.903 6.24756V7.31156L82.843 3.02756H84.761L88.093 6.42956V7.12956L84.761 10.6016H82.843ZM79.357 7.52156V6.09356H86.791V7.52156H79.357Z" fill="currentColor"/>
              </svg>
            </button>
            <button className="border-2 border-white hover:border-white/60 hover:bg-white/5 text-white px-8 py-3  text-sm font-medium transition-colors flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_6200_2938)">
                  <path d="M2.41406 16.6094C2.67236 17.4177 3.42161 18.0039 4.30375 18.0039H13.6955C14.5776 18.0039 15.3268 17.4177 15.5851 16.6094H2.41406Z" fill="white" />
                  <path d="M15.1006 2.89077L12.7905 0.580582C12.6952 0.485273 12.5921 0.40125 12.4824 0.328125V3.18615C12.4824 3.25119 12.5355 3.30396 12.6006 3.30396H15.4182C15.3324 3.15448 15.2258 3.01596 15.1006 2.89077Z" fill="white" />
                  <path d="M15.6823 4.36018H12.6006C11.9536 4.36018 11.4276 3.83414 11.4276 3.18751V0.000703125C11.4139 0 11.3998 0 11.3861 0H4.30434C3.20936 0 2.31836 0.891035 2.31836 1.98633V7.40384H15.6823L15.6823 4.36018Z" fill="white" />
                  <path d="M9.01851 10.7891H8.53613V13.2768H9.01851C9.34371 13.2768 9.5063 13.0962 9.5063 12.7348V11.3311C9.50627 10.9698 9.34367 10.7891 9.01851 10.7891Z" fill="white" />
                  <path d="M5.98968 10.7891H5.45312V11.9326H5.98968C6.31488 11.9326 6.47751 11.752 6.47751 11.3906V11.331C6.47744 10.9698 6.31484 10.7891 5.98968 10.7891Z" fill="white" />
                  <path d="M15.7508 8.46094H2.24959C1.51479 8.46094 0.916992 9.05873 0.916992 9.79354V14.2201C0.916992 14.9549 1.51479 15.5527 2.24959 15.5527H15.7508C16.4856 15.5527 17.0834 14.9549 17.0834 14.2201V9.79354C17.0834 9.05873 16.4856 8.46094 15.7508 8.46094ZM7.32285 11.328C7.32285 11.7581 7.20086 12.0751 6.95698 12.2792C6.7131 12.4834 6.39061 12.5854 5.98955 12.5854H5.45299V13.7561C5.45299 13.8392 5.4114 13.9034 5.32833 13.9485C5.24518 13.9937 5.14583 14.0163 5.03024 14.0163C4.91454 14.0163 4.81522 13.9937 4.73211 13.9485C4.64897 13.9034 4.60745 13.8392 4.60745 13.7561V10.3091C4.60745 10.2405 4.63631 10.1809 4.69414 10.1302C4.75191 10.0797 4.82777 10.0544 4.92178 10.0544H6.04369C6.43027 10.0544 6.74017 10.1546 6.97318 10.3552C7.20623 10.5557 7.32278 10.871 7.32278 11.3009V11.328H7.32285ZM10.3524 12.7372C10.3524 13.1781 10.2313 13.5014 9.98931 13.7074C9.74719 13.9133 9.42379 14.0163 9.01917 14.0163H8.05986C7.95144 14.0163 7.86288 13.9911 7.79429 13.9405C7.72563 13.8899 7.69129 13.8303 7.69129 13.7616V10.3091C7.69129 10.2405 7.7256 10.1809 7.79429 10.1303C7.86288 10.0797 7.95148 10.0544 8.05986 10.0544H9.01917C9.42379 10.0544 9.74722 10.1574 9.98931 10.3634C10.2313 10.5693 10.3524 10.8928 10.3524 11.3335V12.7372ZM13.3252 10.6831C13.28 10.7554 13.2176 10.7916 13.1382 10.7916H11.7345V11.7075H12.5529C12.6323 11.7075 12.6947 11.74 12.7399 11.805C12.785 11.8701 12.8076 11.9478 12.8076 12.0381C12.8076 12.1212 12.7859 12.1953 12.7426 12.2603C12.6992 12.3253 12.6359 12.3578 12.5529 12.3578H11.7345V13.7561C11.7345 13.8393 11.6929 13.9034 11.6098 13.9485C11.5267 13.9938 11.4273 14.0163 11.3117 14.0163C11.196 14.0163 11.0967 13.9938 11.0136 13.9485C10.9305 13.9034 10.889 13.8393 10.889 13.7561V10.3146C10.889 10.2315 10.925 10.1674 10.9974 10.1221C11.0696 10.077 11.1564 10.0544 11.2575 10.0544H13.1382C13.2212 10.0544 13.2845 10.0905 13.3279 10.1628C13.3712 10.2351 13.3929 10.32 13.3929 10.4176C13.3929 10.5224 13.3703 10.6108 13.3252 10.6831Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_6200_2938">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              {secondaryButtonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

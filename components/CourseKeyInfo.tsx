import React from 'react';

interface CourseKeyInfoProps {
  duration?: string;
  intakes?: string;
  studyMode?: string;
  englishRequirement?: React.ReactNode;
  location?: string;
  courseRequirement?: string;
}

export default function CourseKeyInfo({
  duration = "Full-time, 2 years (4\nTrimesters)",
  intakes = "March, April, August,\nSeptember, December,\n2026",
  studyMode = "Full-time, face to face",
  englishRequirement = "IELTS 6.5 minimum, no\nband below 6.0",
  location = "Melbourne VIC 3000 /\nSpring Hill QLD 4000",
  courseRequirement = "18 core units + 3\nspecialisation units",
}: CourseKeyInfoProps) {

  const infoItems = [
    {
      title: "DURATION",
      value: duration,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="12" fill="#4D97E6" />
          <g clip-path="url(#clip0_6200_2978)">
            <path d="M11.9998 8.49758V11.9979L14.3333 13.1646M17.8336 11.9979C17.8336 15.2198 15.2217 17.8317 11.9998 17.8317C8.7779 17.8317 6.16602 15.2198 6.16602 11.9979C6.16602 8.77594 8.7779 6.16406 11.9998 6.16406C15.2217 6.16406 17.8336 8.77594 17.8336 11.9979Z" stroke="#0B1F4A" stroke-width="2" stroke-linecap="round" />
          </g>
          <defs>
            <clipPath id="clip0_6200_2978">
              <rect width="14" height="14" fill="white" transform="translate(5 5)" />
            </clipPath>
          </defs>
        </svg>

      )
    },
    {
      title: "INTAKES",
      value: intakes,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="12" fill="#4D97E6" />
          <path d="M9.66667 6.16406V8.49758M14.3333 6.16406V8.49758M6.75 10.8311H17.25M7.91667 7.33082H16.0833C16.7277 7.33082 17.25 7.8532 17.25 8.49758V16.6649C17.25 17.3093 16.7277 17.8317 16.0833 17.8317H7.91667C7.27233 17.8317 6.75 17.3093 6.75 16.6649V8.49758C6.75 7.8532 7.27233 7.33082 7.91667 7.33082Z" stroke="#0B1F4A" stroke-width="2" stroke-linecap="round" />
        </svg>

      )
    },
    {
      title: "STUDY MODE",
      value: studyMode,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="12" fill="#4D97E6" />
          <g clip-path="url(#clip0_6200_2992)">
            <path d="M14.3333 17.25V16.0833C14.3333 15.4645 14.0875 14.871 13.6499 14.4334C13.2122 13.9958 12.6187 13.75 11.9998 13.75H8.49954C7.88065 13.75 7.28711 13.9958 6.84949 14.4334C6.41187 14.871 6.16602 15.4645 6.16602 16.0833V17.25M14.3333 6.82463C14.8337 6.95434 15.2769 7.24653 15.5933 7.65533C15.9096 8.06413 16.0813 8.56639 16.0813 9.08329C16.0813 9.60019 15.9096 10.1025 15.5933 10.5113C15.2769 10.9201 14.8337 11.2122 14.3333 11.342M17.8336 17.2499V16.0833C17.8332 15.5663 17.6611 15.064 17.3444 14.6554C17.0276 14.2468 16.5841 13.955 16.0835 13.8258M12.5832 9.08333C12.5832 10.372 11.5384 11.4167 10.2497 11.4167C8.96091 11.4167 7.91616 10.372 7.91616 9.08333C7.91616 7.79467 8.96091 6.75 10.2497 6.75C11.5384 6.75 12.5832 7.79467 12.5832 9.08333Z" stroke="#0B1F4A" stroke-width="2" stroke-linecap="round" />
          </g>
          <defs>
            <clipPath id="clip0_6200_2992">
              <rect width="14" height="14" fill="white" transform="translate(5 5)" />
            </clipPath>
          </defs>
        </svg>

      )
    },
    {
      title: "ENGLISH REQUIREMENT",
      value: englishRequirement,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="12" fill="#4D97E6" />
          <g clip-path="url(#clip0_6200_2999)">
            <path d="M7.91616 9.66434L11.4164 13.1646M7.33278 13.1646L10.8331 9.66434L11.9998 7.9142M6.16602 7.9142H13.1666M9.08292 6.16406H9.6663M17.8336 17.8317L14.9167 11.9979L11.9998 17.8317M13.1666 15.4981H16.6669" stroke="#0B1F4A" stroke-width="2" stroke-linecap="round" />
          </g>
          <defs>
            <clipPath id="clip0_6200_2999">
              <rect width="14" height="14" fill="white" transform="translate(5 5)" />
            </clipPath>
          </defs>
        </svg>

      )
    },
    {
      title: "LOCATION",
      value: location,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="12" fill="#4D97E6" />
          <path d="M12.3507 17.7145C13.4356 16.7776 16.6664 13.744 16.6664 10.8312C16.6664 9.59337 16.1748 8.40627 15.2997 7.53102C14.4246 6.65577 13.2377 6.16406 12.0002 6.16406C10.7626 6.16406 9.57576 6.65577 8.70068 7.53102C7.8256 8.40627 7.33398 9.59337 7.33398 10.8312C7.33398 13.744 10.5647 16.7776 11.6496 17.7145C11.7507 17.7906 11.8737 17.8317 12.0002 17.8317C12.1266 17.8317 12.2497 17.7906 12.3507 17.7145Z" stroke="#0B1F4A" stroke-width="2" stroke-linecap="round" />
        </svg>

      )
    },
    {
      title: "COURSE REQUIREMENT",
      value: courseRequirement,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="12" fill="#4D97E6" />
          <g clip-path="url(#clip0_6200_3013)">
            <path d="M6.16602 11.9977C6.16574 12.1093 6.19747 12.2186 6.25744 12.3127C6.31741 12.4068 6.40311 12.4817 6.50437 12.5286L11.5214 14.8095C11.6726 14.878 11.8367 14.9134 12.0027 14.9134C12.1687 14.9134 12.3327 14.878 12.484 14.8095L17.4893 12.5344C17.5926 12.488 17.6801 12.4125 17.7412 12.3173C17.8023 12.222 17.8344 12.1109 17.8335 11.9977M6.16602 14.9146C6.16574 15.0261 6.19747 15.1354 6.25744 15.2295C6.31741 15.3236 6.40311 15.3986 6.50437 15.4454L11.5214 17.7264C11.6726 17.7948 11.8367 17.8303 12.0027 17.8303C12.1687 17.8303 12.3327 17.7948 12.484 17.7264L17.4893 15.4512C17.5926 15.4048 17.6801 15.3294 17.7412 15.2341C17.8023 15.1388 17.8344 15.0278 17.8335 14.9146M12.4842 6.26928C12.3322 6.19994 12.1671 6.16406 12 6.16406C11.8329 6.16406 11.6678 6.19994 11.5158 6.26928L6.5163 8.5444C6.41278 8.59005 6.32477 8.66481 6.26298 8.75958C6.20119 8.85435 6.16829 8.96505 6.16829 9.07818C6.16829 9.19132 6.20119 9.30201 6.26298 9.39679C6.32477 9.49156 6.41278 9.56632 6.5163 9.61196L11.5217 11.8929C11.6737 11.9623 11.8388 11.9981 12.0059 11.9981C12.1729 11.9981 12.3381 11.9623 12.4901 11.8929L17.4954 9.6178C17.5989 9.57215 17.6869 9.49739 17.7487 9.40262C17.8105 9.30785 17.8434 9.19715 17.8434 9.08402C17.8434 8.97088 17.8105 8.86019 17.7487 8.76542C17.6869 8.67064 17.5989 8.59588 17.4954 8.55024L12.4842 6.26928Z" stroke="#0B1F4A" stroke-width="2" stroke-linecap="round" />
          </g>
          <defs>
            <clipPath id="clip0_6200_3013">
              <rect width="14" height="14" fill="white" transform="translate(5 5)" />
            </clipPath>
          </defs>
        </svg>

      )
    }
  ];

  return (
    <section className="w-full bg-[#0A1A44] border-t-4 border-[#4F8CE6]">
      <div className="max-w-[1500px] mx-auto px-4 xl:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:divide-x divide-white/10 gap-y-8 lg:gap-y-0">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-2 lg:px-4 py-2 lg:py-0"
            >
              <div className="text-[#4F8CE6] mb-3">
                {item.icon}
              </div>
              <h3 className="text-white/60 text-[10px] font-semibold tracking-wider uppercase mb-2">
                {item.title}
              </h3>
              <p className="text-white text-[13px] leading-snug font-medium whitespace-pre-line">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

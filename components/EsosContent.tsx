import React from 'react';
import Link from 'next/link';

const FileIcon = () => (

  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="22" height="22" rx="4" fill="#2463A7" />
    <path d="M11.9995 6H7.9999C7.73471 6 7.48038 6.10537 7.29286 6.29292C7.10535 6.48047 7 6.73484 7 7.00008V15.0007C7 15.266 7.10535 15.5203 7.29286 15.7079C7.48038 15.8954 7.73471 16.0008 7.9999 16.0008H13.9993C14.2645 16.0008 14.5188 15.8954 14.7063 15.7079C14.8939 15.5203 14.9992 15.266 14.9992 15.0007V9.00024M11.9995 6C12.1578 5.99975 12.3145 6.03081 12.4607 6.09139C12.6069 6.15198 12.7397 6.2409 12.8514 6.35303L14.6452 8.14717C14.7576 8.25894 14.8468 8.39187 14.9076 8.53829C14.9683 8.6847 14.9995 8.84171 14.9992 9.00024M11.9995 6V8.5002C11.9995 8.63282 12.0522 8.76001 12.1459 8.85378C12.2397 8.94756 12.3669 9.00024 12.4994 9.00024L14.9992 9.00024M9.9997 9.50028H8.9998M12.9994 11.5004H8.9998M12.9994 13.5006H8.9998" stroke="white" stroke-width="1.5" stroke-linecap="round" />
  </svg>

);

const ShieldIcon = () => (
  <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.25437 15.9633C10.3741 14.8758 12.9988 13.0007 12.9988 9.2506V4.00043C12.9988 3.80152 12.9198 3.61074 12.7792 3.47009C12.6385 3.32943 12.4478 3.25041 12.2489 3.25041C10.749 3.25041 8.88171 2.35788 7.56934 1.21034C7.41047 1.07459 7.20836 1 6.9994 1C6.79044 1 6.58833 1.07459 6.42946 1.21034C5.12459 2.35038 3.24977 3.25041 1.74993 3.25041C1.55103 3.25041 1.36029 3.32943 1.21965 3.47009C1.07901 3.61074 1 3.80152 1 4.00043V9.2506C1 13.0007 3.62474 14.8758 6.75192 15.9558C6.91356 16.016 7.09101 16.0187 7.25437 15.9633Z" stroke="white" stroke-width="2" stroke-linecap="round" />
  </svg>

);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="16" height="16" rx="8" fill="#E8F0FA" />
    <path d="M4.5 8.0004H11.5008M8.0004 11.5008L11.5008 8.0004L8.0004 4.5" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
  </svg>

);

const MegaphoneIcon = () => (
  <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.75 7.41667C2.75 8.93126 3.24124 10.405 4.15 11.6167C4.33565 11.8642 4.61203 12.0278 4.91834 12.0716C5.22465 12.1154 5.5358 12.0357 5.78333 11.85C6.03087 11.6643 6.19452 11.388 6.23827 11.0817C6.28203 10.7753 6.20232 10.4642 6.01667 10.2167C5.41083 9.40888 5.08333 8.42639 5.08333 7.41667M3.91667 2.75V7.41667M5.66667 2.75C7.4408 2.7957 9.17478 2.21771 10.5667 1.11667C10.6533 1.05167 10.7564 1.01209 10.8643 1.00236C10.9722 0.992629 11.0806 1.01314 11.1775 1.06158C11.2744 1.11003 11.3559 1.1845 11.4129 1.27666C11.4698 1.36881 11.5 1.475 11.5 1.58333V8.58333C11.5 8.69167 11.4698 8.79786 11.4129 8.89001C11.3559 8.98216 11.2744 9.05663 11.1775 9.10508C11.0806 9.15353 10.9722 9.17404 10.8643 9.16431C10.7564 9.15458 10.6533 9.115 10.5667 9.05C9.17478 7.94896 7.4408 7.37096 5.66667 7.41667H2.16667C1.85725 7.41667 1.5605 7.29375 1.34171 7.07496C1.12292 6.85617 1 6.55942 1 6.25V3.91667C1 3.60725 1.12292 3.3105 1.34171 3.09171C1.5605 2.87292 1.85725 2.75 2.16667 2.75H5.66667Z" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
  </svg>
);
const UsersIcon = () => (
  <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.16732 11.5V10.3333C9.16732 9.71449 8.92147 9.121 8.48385 8.68342C8.04623 8.24583 7.45269 8 6.8338 8H3.33352C2.71463 8 2.12109 8.24583 1.68347 8.68342C1.24585 9.121 1 9.71449 1 10.3333V11.5M9.16732 1.07463C9.66772 1.20434 10.1109 1.49653 10.4272 1.90533C10.7436 2.31413 10.9152 2.81639 10.9152 3.33329C10.9152 3.85019 10.7436 4.35246 10.4272 4.76126C10.1109 5.17005 9.66772 5.46224 9.16732 5.59196M12.6676 11.4999V10.3333C12.6672 9.81627 12.4951 9.31405 12.1784 8.90545C11.8616 8.49685 11.4181 8.20501 10.9175 8.07576M7.41718 3.33333C7.41718 4.622 6.37243 5.66667 5.08366 5.66667C3.79489 5.66667 2.75014 4.622 2.75014 3.33333C2.75014 2.04467 3.79489 1 5.08366 1C6.37243 1 7.41718 2.04467 7.41718 3.33333Z" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
  </svg>
);
const DocumentIcon2 = () => (
  <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.83275 1H2.16655C1.85716 1 1.56044 1.12293 1.34167 1.34174C1.1229 1.56055 1 1.85732 1 2.16676V11.5008C1 11.8103 1.1229 12.1071 1.34167 12.3259C1.56044 12.5447 1.85716 12.6676 2.16655 12.6676H9.16585C9.47524 12.6676 9.77195 12.5447 9.99072 12.3259C10.2095 12.1071 10.3324 11.8103 10.3324 11.5008V4.50028M6.83275 1C7.01739 0.999703 7.20026 1.03594 7.37084 1.10663C7.54141 1.17731 7.69633 1.28105 7.82665 1.41187L9.91944 3.50504C10.0506 3.63542 10.1546 3.79051 10.2255 3.96133C10.2964 4.13216 10.3327 4.31533 10.3324 4.50028M6.83275 1V3.9169C6.83275 4.07162 6.8942 4.22001 7.00359 4.32941C7.11297 4.43882 7.26133 4.50028 7.41602 4.50028L10.3324 4.50028M4.49965 5.08366H3.3331M7.9993 7.41718H3.3331M7.9993 9.7507H3.3331" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
  </svg>
);
const BriefcaseIcon = () => (
  <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.16732 11.5V2.16667C9.16732 1.85725 9.04439 1.5605 8.82558 1.34171C8.60677 1.12292 8.31 1 8.00056 1H5.66704C5.3576 1 5.06083 1.12292 4.84202 1.34171C4.62321 1.5605 4.50028 1.85725 4.50028 2.16667V11.5M2.16676 3.33333H11.5008C12.1452 3.33333 12.6676 3.85567 12.6676 4.5V10.3333C12.6676 10.9777 12.1452 11.5 11.5008 11.5H2.16676C1.52238 11.5 1 10.9777 1 10.3333V4.5C1 3.85567 1.52238 3.33333 2.16676 3.33333Z" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
  </svg>
);
const HeartIcon = () => (
  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.56479 2.39991C1.19694 2.93478 1.00001 3.56865 1 4.21779C1 5.55947 1.87507 6.55114 2.75013 7.42615L5.96338 10.5365C6.07366 10.66 6.20894 10.7585 6.36025 10.8257C6.51155 10.8928 6.67542 10.927 6.84095 10.926C7.00649 10.9249 7.1699 10.8887 7.32035 10.8196C7.47079 10.7506 7.60481 10.6503 7.71352 10.5254L10.9174 7.42615C11.7925 6.55114 12.6676 5.55363 12.6676 4.21779C12.6707 3.56722 12.4755 2.93115 12.1082 2.39421C11.7408 1.85728 11.2186 1.44496 10.6111 1.21212C10.0036 0.979291 9.33953 0.936993 8.70738 1.09086C8.07522 1.24472 7.50492 1.58745 7.07238 2.07343C7.04182 2.10611 7.00487 2.13216 6.96383 2.14997C6.92279 2.16778 6.87852 2.17697 6.83378 2.17697C6.78904 2.17697 6.74478 2.16778 6.70373 2.14997C6.66269 2.13216 6.62574 2.10611 6.59518 2.07343C6.16128 1.59059 5.59111 1.25072 4.95998 1.0987C4.32885 0.946681 3.66645 0.989671 3.06026 1.22199C2.45408 1.45431 1.93263 1.86503 1.56479 2.39991Z" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
  </svg>
);
const RefreshIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 6.25C1 4.85761 1.55312 3.52226 2.53769 2.53769C3.52226 1.55312 4.85761 1 6.25 1C7.71769 1.00552 9.12643 1.57821 10.1817 2.59833L11.5 3.91667M8.58333 3.91667H11.5V1M11.5 6.25C11.5 7.64239 10.9469 8.97774 9.96231 9.96231C8.97774 10.9469 7.64239 11.5 6.25 11.5C4.78231 11.4945 3.37357 10.9218 2.31833 9.90167L1 8.58333M1 11.5V8.58333H3.91667" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
  </svg>
);
const CardIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.16602 5.83106H12.8336M2.33278 2.91406H11.6669C12.3112 2.91406 12.8336 3.43646 12.8336 4.08086V9.91486C12.8336 10.5593 12.3112 11.0817 11.6669 11.0817H2.33278C1.68839 11.0817 1.16602 10.5593 1.16602 9.91486V4.08086C1.16602 3.43646 1.68839 2.91406 2.33278 2.91406Z" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
  </svg>
);
const PauseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.66704 8.58394V5.08366M8.00056 8.58394V5.08366M12.6676 6.8338C12.6676 10.0557 10.0557 12.6676 6.8338 12.6676C3.61188 12.6676 1 10.0557 1 6.8338C1 3.61188 3.61188 1 6.8338 1C10.0557 1 12.6676 3.61188 12.6676 6.8338Z" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
  </svg>
);
const MessageIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.3259 9.99167C12.5447 9.77287 12.6676 9.47613 12.6676 9.16671V2.16667C12.6676 1.85725 12.5447 1.5605 12.3259 1.34171C12.1071 1.12292 11.8103 1 11.5008 1H2.16676C1.85732 1 1.56055 1.12292 1.34174 1.34171C1.12293 1.5605 1 1.85725 1 2.16667V11.6669C1.00001 11.7488 1.02431 11.8289 1.06982 11.897C1.11534 11.9651 1.18002 12.0181 1.2557 12.0495C1.33138 12.0808 1.41465 12.089 1.49499 12.073C1.57533 12.0571 1.64913 12.0176 1.70706 11.9597L2.99166 10.6752C3.21042 10.4564 3.50714 10.3334 3.81656 10.3334H11.5008C11.8103 10.3334 12.1071 10.2105 12.3259 9.99167Z" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
  </svg>
);
const BookIcon = () => (
  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.8338 3.33333V11.5M6.8338 3.33333C6.8338 2.71449 6.58795 2.121 6.15033 1.68342C5.71271 1.24583 5.11917 1 4.50028 1H1.58338C1.42866 1 1.28027 1.06146 1.17087 1.17085C1.06146 1.28025 1 1.42862 1 1.58333V9.16667C1 9.32138 1.06146 9.46975 1.17087 9.57915C1.28027 9.68854 1.42866 9.75 1.58338 9.75H5.08366C5.54783 9.75 5.99298 9.93437 6.3212 10.2626C6.64941 10.5908 6.8338 11.0359 6.8338 11.5M6.8338 3.33333C6.8338 2.71449 7.07965 2.121 7.51727 1.68342C7.95489 1.24583 8.54843 1 9.16732 1H12.0842C12.2389 1 12.3873 1.06146 12.4967 1.17085C12.6061 1.28025 12.6676 1.42862 12.6676 1.58333V9.16667C12.6676 9.32138 12.6061 9.46975 12.4967 9.57915C12.3873 9.68854 12.2389 9.75 12.0842 9.75H8.58394C8.11977 9.75 7.67462 9.93437 7.3464 10.2626C7.01819 10.5908 6.8338 11.0359 6.8338 11.5" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
  </svg>
);

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="12" fill="#4D97E6" />
    <path d="M15.9992 9L10.4997 14.4996L8 11.9998" stroke="white" stroke-width="2" stroke-linecap="round" />
  </svg>
);

const ChatBubbleIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="18" fill="#2463A7" />
    <g clip-path="url(#clip0_6354_100)">
      <path d="M11.3143 22.1324C11.3787 21.8401 11.3541 21.5353 11.2438 21.257C10.4763 19.6646 10.2959 17.8524 10.7345 16.1399C11.173 14.4275 12.2022 12.9249 13.6406 11.8974C15.079 10.8698 16.8341 10.3833 18.5962 10.5237C20.3583 10.6641 22.0143 11.4223 23.2718 12.6646C24.5294 13.9069 25.3078 15.5534 25.4697 17.3137C25.6316 19.0739 25.1665 20.8348 24.1566 22.2857C23.1467 23.7365 21.6568 24.784 19.9499 25.2434C18.2429 25.7028 16.4285 25.5445 14.8269 24.7966C14.564 24.6968 14.2784 24.6728 14.0025 24.7276L11.4426 25.4761C11.3191 25.5089 11.1893 25.5096 11.0655 25.4781C10.9416 25.4466 10.8279 25.3841 10.735 25.2963C10.6422 25.2085 10.5733 25.0985 10.5349 24.9767C10.4964 24.8548 10.4898 24.7252 10.5155 24.6L11.3143 22.1324Z" stroke="white" stroke-width="2" stroke-linecap="round" />
    </g>
    <defs>
      <clipPath id="clip0_6354_100">
        <rect width="18" height="18" fill="white" transform="translate(9 9)" />
      </clipPath>
    </defs>
  </svg>

);

const MailOutlineIcon = () => (
  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.6676 2.74982L7.42243 6.09024C7.24444 6.1936 7.04226 6.24805 6.83643 6.24805C6.63059 6.24805 6.42841 6.1936 6.25042 6.09024L1 2.74982M2.16676 1H11.5008C12.1452 1 12.6676 1.52228 12.6676 2.16655V9.16585C12.6676 9.81012 12.1452 10.3324 11.5008 10.3324H2.16676C1.52238 10.3324 1 9.81012 1 9.16585V2.16655C1 1.52228 1.52238 1 2.16676 1Z" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="16" fill="#EEF2FA" />
    <g clip-path="url(#clip0_6354_107)">
      <path d="M22 14V10H18M22 10L14.6667 17.3333M20 16.6667V20.6667C20 21.0203 19.8595 21.3594 19.6095 21.6095C19.3594 21.8595 19.0203 22 18.6667 22H11.3333C10.9797 22 10.6406 21.8595 10.3905 21.6095C10.1405 21.3594 10 21.0203 10 20.6667V13.3333C10 12.9797 10.1405 12.6406 10.3905 12.3905C10.6406 12.1405 10.9797 12 11.3333 12H15.3333" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
    </g>
    <defs>
      <clipPath id="clip0_6354_107">
        <rect width="16" height="16" fill="white" transform="translate(8 8)" />
      </clipPath>
    </defs>
  </svg>

);

const ChevronRightIcon = () => (
  <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 9L5 5L1 1" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
  </svg>

);

const SectionHeading = ({ title }: { title: string }) => (
  <>
    <h2 className="text-[#0B1F4A] text-[28px] md:text-[34px] italic mb-4" style={{ fontFamily: 'var(--font-dm-serif)' }}>
      {title}
    </h2>
    <div className="w-full h-[2px] bg-[#0B1F4A] mb-8"></div>
  </>
);

const SidebarLinksSection = ({ title, links }: { title: string, links: string[] }) => (
  <div className="p-6 md:p-8">
    <h3 className="text-[#0B1F4A] text-[20px] italic mb-6" style={{ fontFamily: 'var(--font-dm-serif)' }}>{title}</h3>
    <ul className="space-y-5">
      {links.map((link, idx) => (
        <li key={idx}>
          <Link href="#" className="flex items-center gap-3 text-[14px] text-[#1A1A1A] hover:text-[#2463A7] transition-colors group font-medium">
            <span className="shrink-0 transition-transform group-hover:translate-x-1"><ArrowRightIcon /></span>
            {link}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function EsosContent() {
  return (
    <section className="w-full bg-[#FAFAF7] py-12 md:py-20 px-4 md:px-8 xl:px-[100px]">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">

        {/* Left Column (Main Content) */}
        <div className="flex-1 lg:max-w-[900px]">
          {/* About ESOS Framework */}
          <div className="mb-12">
            <SectionHeading title="About the ESOS Framework" />

            <div className="text-[#2D2D2D] text-normal space-y-6 text-[16px] leading-relaxed mb-10">
              <p>
                The Australian Government wants international students to have a safe, enjoyable and rewarding study experience in Australia. Australia is one of the few countries to have enacted laws that ensure quality education and consumer protection for international students. These laws are known as the <span className="font-bold text-[#333333]">ESOS Framework</span> and include the <span className="font-bold text-[#333333]">Education Services for Overseas Students (ESOS) Act 2000</span> and the <span className="font-bold text-[#333333]">National Code of Practice for Providers of Education and Training to Overseas Students 2018 (National Code 2018)</span>.
              </p>
              <p>
                Further information about the ESOS legislative framework is available at the <Link href="https://internationaleducation.gov.au/" target="_blank" rel="noopener noreferrer" className="text-[#4D97E6] font-bold underline hover:text-[#4D97E6] transition-colors underline-offset-4 decoration-[#4D97E6]/40">Australian Government's Department of Education website</Link>.
              </p>
            </div>

            {/* Info Box */}
            <div className="bg-[#F1F8F2] border-l-[4px] border-[#2463A7] p-6 md:p-8 rounded-r-md shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FileIcon />
                <h3 className="text-[#0B1F4A] text-[19px] italic font-normal" style={{ fontFamily: 'var(--font-dm-serif)' }}>Key Legislation</h3>
              </div>
              <p className="text-[#2A3C2A] text-[14px] md:text-[15px] leading-relaxed">
                The ESOS Act 2000, the National Code 2018, and the Tuition Protection Service (TPS) together form the ESOS Framework that governs the delivery of education to international students studying in Australia on a student visa.
              </p>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#D4D4CC] mb-12"></div>

          {/* Oxford's Registration */}
          <div>
            <SectionHeading title="Oxford's Registration" />
            <p className="text-[#2D2D2D] text-[16px] leading-relaxed mb-8">
              Ozford Institute of Higher Education is registered on the <span className="font-bold text-[#333333]">Commonwealth Register of Institutions and Courses for Overseas Students (CRICOS)</span>. CRICOS registration guarantees that the course and your study provider meet the standards necessary for overseas students.
            </p>

            {/* Table */}
            <div className="w-full border border-[#D4D4CC] rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[#2463A7] text-white flex text-[12px] font-bold tracking-wider uppercase">
                <div className="p-4 md:px-6 md:py-3 flex-1">Registration</div>
                <div className="p-4 md:px-6 md:py-3 flex-[2] hidden md:block">Details</div>
                <div className="p-4 md:px-6 md:py-3 w-[160px] text-right">Link</div>
              </div>

              {/* Row 1 */}
              <div className="bg-white flex flex-col md:flex-row md:items-center text-[14px] text-[#555555] border-b border-[#E8E8E2]">
                <div className="p-4 md:px-6 md:py-3 flex-1 font-bold text-[#0B1F4A]">CRICOS Provider Code</div>
                <div className="p-4 md:px-6 md:py-3 pt-0 md:pt-5 flex-[2]">03429B - Oxford Institute of Higher Education</div>
                <div className="p-4 md:px-6 md:py-3 pt-0 md:pt-5 w-full md:w-[160px] text-left md:text-right">
                  <Link href="https://cricos.education.gov.au/" target='_blank' rel="noopener noreferrer" className="text-[#2463A7] hover:underline font-medium">View on CRICOS</Link>
                </div>
              </div>

              {/* Row 2 */}
              <div className="bg-[#F9F7F0] flex flex-col md:flex-row md:items-center text-[14px] text-[#555555] border-b border-[#E8E8E2]">
                <div className="p-4 md:px-6 md:py-3 flex-1 font-bold text-[#0B1F4A]">TEQSA</div>
                <div className="p-4 md:px-6 md:py-3 pt-0 md:pt-5 flex-[2]">Registered Higher Education Provider with the Tertiary Education Quality and Standards Agency</div>
                <div className="p-4 md:px-6 md:py-3 pt-0 md:pt-5 w-full md:w-[160px] text-left md:text-right">
                  <Link href="https://www.teqsa.gov.au/" target='_blank' rel="noopener noreferrer" className="text-[#2463A7] hover:underline font-medium">View on TEQSA</Link>
                </div>
              </div>

              {/* Row 3 */}
              <div className="bg-white flex flex-col md:flex-row md:items-center text-[14px] text-[#555555] border-b border-[#E8E8E2]">
                <div className="p-4 md:px-6 md:py-3 flex-1 font-bold text-[#0B1F4A]">ABN</div>
                <div className="p-4 md:px-6 md:py-3 pt-0 md:pt-5 flex-[2]">33 165 694 351</div>
                <div className="p-4 md:px-6 md:py-3 pt-0 md:pt-5 w-full md:w-[160px] text-left md:text-right text-[#A0B5D9] font-medium">-</div>
              </div>

              {/* Row 4 */}
              <div className="bg-[#F9F7F0] flex flex-col md:flex-row md:items-center text-[14px] text-[#555555]">
                <div className="p-4 md:px-6 md:py-3 flex-1 font-bold text-[#0B1F4A]">ACN</div>
                <div className="p-4 md:px-6 md:py-3 pt-0 md:pt-5 flex-[2]">165 694 351</div>
                <div className="p-4 md:px-6 md:py-3 pt-0 md:pt-5 w-full md:w-[160px] text-left md:text-right text-[#A0B5D9] font-medium">-</div>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#D4D4CC] my-16 md:my-20"></div>

          {/* The National Code 2018 */}
          <div>
            <SectionHeading title="The National Code 2018" />

            <div className="text-[#2D2D2D] text-[16px] leading-relaxed mb-10 space-y-6">
              <p>
                The National Code 2018 provides nationally consistent standards for the conduct of registered providers and the registration of their courses. It sets specifications and procedures to ensure registered providers clearly understand and meet their obligations under the ESOS Act.
              </p>
              <p>
                The National Code 2018 is made up of <span className="font-bold text-[#333333]">11 Standards</span> covering areas including:
              </p>
            </div>

            <div className="flex flex-col gap-5 mb-16">
              {[
                { title: 'Standard 1', desc: 'Marketing information and practices', icon: <MegaphoneIcon /> },
                { title: 'Standard 2', desc: 'Recruitment of overseas students', icon: <UsersIcon /> },
                { title: 'Standard 3', desc: 'Formalisation of enrolment', icon: <DocumentIcon2 /> },
                { title: 'Standard 4', desc: 'Education agents', icon: <BriefcaseIcon /> },
                { title: 'Standard 5', desc: 'Student support services and welfare', icon: <HeartIcon /> },
                { title: 'Standard 6', desc: 'Transfers between registered providers', icon: <RefreshIcon /> },
                { title: 'Standard 7', desc: 'Student visa requirements and reporting', icon: <CardIcon /> },
                { title: 'Standard 8', desc: 'Deferring, suspending or cancelling enrolment', icon: <PauseIcon /> },
                { title: 'Standard 9 & 10', desc: 'Feedback and Complaints processes', icon: <MessageIcon /> },
                { title: 'Standard 11', desc: 'Monitoring and assessment', icon: <BookIcon /> },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-[32px] h-[32px] rounded-md bg-[#EEF5EE] flex items-center justify-center shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[#2463A7] font-semibold text-[13px]">{item.title}</h4>
                    <p className="text-[#2D2D2D] text-[13px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full h-[1px] bg-[#D4D4CC] my-16 md:my-20"></div>
          </div>

          {/* Tuition Protection Service */}
          <div>
            <SectionHeading title="Tuition Protection Service" />

            <div className="text-[#2D2D2D] text-[16px] leading-relaxed mb-10 space-y-6">
              <p>
                The <span className="font-bold text-[#333333]">Tuition Protection Service (TPS)</span> is an initiative of the Australian Government to assist international students whose education providers are unable to fully deliver their course of study. The TPS ensures that international students are able to either:
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>Complete their studies in another course or with another education provider; or</li>
                <li>Receive a refund of their unspent pre-paid tuition fees.</li>
              </ul>

              <p className="pt-2">
                Ozford's <Link href="#" className="text-[#4D97E6] font-bold underline hover:text-[#4D97E6] transition-colors underline-offset-4 decoration-[#4D97E6]/40">Statement of Tuition Assurance</Link> is available on our website.
              </p>
            </div>

            <div className="w-full h-[1px] bg-[#D4D4CC] my-16 md:my-20"></div>
          </div>

          {/* Your Rights as an International Student */}
          <div>
            <SectionHeading title="Your Rights as an International Student" />

            <div className="text-[#4A4D4A] text-[15px] leading-relaxed mb-6 space-y-6">
              <p>
                Under the ESOS Framework, as an international student enrolled at Ozford you have the right to:
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {[
                "Receive current and accurate information about your course, fees and Ozford's services before and during enrolment.",
                "Be provided with a written letter of offer prior to accepting enrolment, detailing fees, refund policies and your course information.",
                "Access Ozford's internal and external feedback and complaints processes.",
                "Know your rights in relation to refunds and the Tuition Protection Service.",
                "Have your personal information managed and disclosed in accordance with Australian privacy law.",
                "Access support services including welfare, academic support and counselling."
              ].map((right, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-[#F5FAF6] border border-[#C8E6D0] rounded-[8px] p-4 md:px-5 md:py-4">
                  <div className="shrink-0 flex items-center justify-center">
                    <CheckIcon />
                  </div>
                  <p className="text-[#1A1A1A] text-[14px] md:text-[14px]">{right}</p>
                </div>
              ))}
            </div>

            <div className="w-full h-[1px] bg-[#D4D4CC] my-16 md:my-20"></div>
          </div>

          {/* Your Responsibilities as an International Student */}
          <div>
            <SectionHeading title="Your Responsibilities as an International Student" />

            <div className="text-[#4A4D4A] text-[15px] leading-relaxed mb-8 space-y-6">
              <p>
                The ESOS Framework also supports the Migration Act by reinforcing students' responsibilities and conditions under their student visa. As an international student you are required to:
              </p>
            </div>

            <div className="flex flex-col gap-6 pl-1 md:pl-2">
              {[
                "Understand and satisfy your student visa conditions at all times.",
                "Maintain valid Overseas Student Health Cover (OSHC) for the duration of your stay in Australia.",
                "Inform Ozford of any change of address or contact details within 7 days.",
                "Maintain satisfactory course progress and attendance as required by Ozford's policies.",
                "Complete your course within the expected duration as registered on CRICOS.",
                "Adhere to any work conditions attached to your student visa.",
                "Comply with all Ozford policies, procedures and the Student Code of Conduct"
              ].map((responsibility, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="shrink-0 flex items-center justify-center w-[24px] h-[24px] rounded-full bg-[#4D97E6] text-white text-[12px] font-bold mt-[2px]">
                    {idx + 1}
                  </div>
                  <p className="text-[#4A4D4A] text-[14px] md:text-[15px] leading-relaxed">{responsibility}</p>
                </div>
              ))}
            </div>

            <div className="w-full h-[1px] bg-[#D4D4CC] my-16 md:my-20"></div>
          </div>

          {/* Feedback and Complaints */}
          <div>
            <SectionHeading title="Feedback and Complaints" />

            <div className="bg-[#F4F6FA] border border-[#D0D8EC] rounded-lg p-6 md:p-8 mt-4 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <ChatBubbleIcon />
                <h3 className="text-[#0B1F4A] text-[18px] italic font-normal" style={{ fontFamily: 'var(--font-dm-serif)' }}>Have a concern or complaint?</h3>
              </div>

              <div className="text-[#2D2D2D] text-[16px] leading-relaxed space-y-4 mb-6">
                <p>
                  Ozford has internal and external feedback and complaints processes in place as required under the National Code 2018. If you have a concern or complaint, you are encouraged to contact the Student Services team in the first instance.
                </p>
                <p>
                  If you are not satisfied with the outcome of an internal process, you have the right to access an external feedback and complaints process. Details are outlined in <Link href="#" className="text-[#4D97E6] font-semibold hover:underline">Ozford's Policies and Procedures</Link>.
                </p>
              </div>

              <div className="flex items-start md:items-center gap-2">
                <div className="shrink-0 mt-[2px] md:mt-0">
                  <MailOutlineIcon />
                </div>
                <Link href="mailto:studentservices@ozfordinstituteofhighereducation.edu.au" className="text-[#2463A7] text-[13px] font-medium hover:underline break-all md:break-normal">
                  studentservices@ozfordinstituteofhighereducation.edu.au
                </Link>
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#D4D4CC] my-16 md:my-20"></div>
          </div>

          {/* Further Information */}
          <div>
            <SectionHeading title="Further Information" />

            <div className="text-[#4A4D4A] text-[15px] leading-relaxed mb-8">
              <p>
                For more information about the ESOS Framework and your rights and responsibilities as an international student, please visit:
              </p>
            </div>

            <div className="flex flex-col gap-4 mb-10">
              {[
                { label: "Department of Education – National Code 2018", href: "#" },
                { label: "ESOS Act 2000 – Full Legislation", href: "#" },
                { label: "Tuition Protection Service", href: "#" },
                { label: "TEQSA – Tertiary Education Quality and Standards Agency", href: "#" },
              ].map((link, idx) => (
                <Link key={idx} href={link.href} className="flex items-center justify-between bg-white border border-[#D0D8EC] rounded-[10px] p-3 md:px-5 hover:shadow-sm transition-shadow group">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="shrink-0">
                      <ExternalLinkIcon />
                    </div>
                    <span className="text-[#2463A7] text-[13px] md:text-[14px] font-medium underline underline-offset-2 decoration-[#2463A7]/40 hover:decoration-[#2463A7] leading-tight md:leading-normal">{link.label}</span>
                  </div>
                  <div className="shrink-0 transition-transform group-hover:translate-x-1">
                    <ChevronRightIcon />
                  </div>
                </Link>
              ))}
            </div>

            <Link href="https://forms.ozford.edu.au/t/cujUAwCHoqus" className="inline-flex items-center justify-center bg-[#2463A7] text-white px-8 py-3 text-[14px] font-bold hover:bg-[#1A4B82] transition-colors">
              APPLY NOW
            </Link>
          </div>
        </div>

        {/* Right Column (Sidebar) */}
        <div className="w-full lg:w-[360px] shrink-0 flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">

          {/* Provider Box */}
          <div className="bg-[#0B1F4A] text-white p-6 md:p-8 rounded-[4px] shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <ShieldIcon />
              <span className="text-[#A8C4B8] text-[11px] text-center font-bold tracking-wider uppercase mt-1">Registered Provider</span>
            </div>
            <h3 className="text-[24px] italic mb-4" style={{ fontFamily: 'var(--font-dm-serif)' }}>CRICOS Code: 03429B</h3>
            <p className="text-[#B8CEC8] text-[13px] leading-relaxed mb-8">
              Oxford Institute of Higher Education (Ozford) is fully registered with the Australian Government to deliver higher education programs to international students.
            </p>
            <div className="border-t border-[#A0B5D9]/20 pt-4">
              <span className="text-[#8AADA4] text-[12px]">ABN 33 165 694 351</span>
            </div>
          </div>

          {/* Links Sidebar Box */}
          <div className="bg-white border border-[#E4E4DE] rounded-[8px] shadow-sm flex flex-col">
            <SidebarLinksSection
              title="Terms & Policies"
              links={['ESOS Framework', 'ESOS Act', 'Statement of Tuition Assurance', 'Privacy Statement', 'Disclaimer', 'Policies & Procedures']}
            />
            
            <div className="w-full h-[1px] bg-[#EAEAE6]"></div>
            
            <SidebarLinksSection
              title="About Ozford"
              links={['About Us', 'Our Philosophy', 'Our People', 'Student Services & Support', 'Contact Us']}
            />
            
            <div className="w-full h-[1px] bg-[#EAEAE6]"></div>
            
            <SidebarLinksSection
              title="Useful Links"
              links={['TEQSA', 'CRICOS Register', 'Tuition Protection Service', 'Department of Home Affairs', 'OSHC Information']}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

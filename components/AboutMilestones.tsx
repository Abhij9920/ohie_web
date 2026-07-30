"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface MilestoneData {
  year: string;
  text: string;
  icon: React.ReactNode;
}

const PlaceholderIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4D97E6]">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const milestonesData: MilestoneData[] = [
  {
    year: "2025", text: "Launch of OIHE Business Campus", icon: <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="12" fill="#2463A7" fillOpacity="0.101961" />
      <path d="M22.0006 20.1699H22.0097M22.0006 23.8368H22.0097M22.0006 16.5029H22.0097M25.6669 20.1699H25.676M25.6669 23.8368H25.676M25.6669 16.5029H25.676M18.3343 20.1699H18.3434M18.3343 23.8368H18.3434M18.3343 16.5029H18.3434M19.2508 31.1707V28.4205C19.2508 28.1774 19.3474 27.9442 19.5193 27.7723C19.6912 27.6004 19.9243 27.5038 20.1674 27.5038H23.8337C24.0768 27.5038 24.3099 27.6004 24.4818 27.7723C24.6537 27.9442 24.7503 28.1774 24.7503 28.4205V31.1707M16.5011 12.8359H27.5C28.5124 12.8359 29.3332 13.6568 29.3332 14.6694V29.3373C29.3332 30.3499 28.5124 31.1707 27.5 31.1707H16.5011C15.4887 31.1707 14.668 30.3499 14.668 29.3373V14.6694C14.668 13.6568 15.4887 12.8359 16.5011 12.8359Z" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  },
  {
    year: "2024", text: "Launch of OIHE postgraduate IT Courses Master of Information Technology and Graduate Diploma in Information Technology", icon: <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="12" fill="#2463A7" fillOpacity="0.101961" />
      <g clipPath="url(#clip0_6512_17)">
        <path d="M16.499 27.5038H18.3325M21.9994 27.5038H27.4999M17.4157 12.8359H26.5831C27.5957 12.8359 28.4166 13.6568 28.4166 14.6694V18.3364C28.4166 19.349 27.5957 20.1699 26.5831 20.1699H17.4157C16.4031 20.1699 15.5823 19.349 15.5823 18.3364V14.6694C15.5823 13.6568 16.4031 12.8359 17.4157 12.8359ZM14.6655 23.8368H29.3334C30.346 23.8368 31.1668 24.6577 31.1668 25.6703V29.3373C31.1668 30.3499 30.346 31.1707 29.3334 31.1707H14.6655C13.6529 31.1707 12.832 30.3499 12.832 29.3373V25.6703C12.832 24.6577 13.6529 23.8368 14.6655 23.8368Z" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
      </g>
      <defs>
        <clipPath id="clip0_6512_17">
          <rect width="22" height="22" fill="white" transform="translate(11 11)" />
        </clipPath>
      </defs>
    </svg>
  },
  {
    year: "2024", text: "Approved as Higher Education Online Delivery", icon: <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="12" fill="#2463A7" fillOpacity="0.101961" />
      <g clipPath="url(#clip0_6512_23)">
        <path d="M31.1668 22.0033C31.1668 27.0664 27.0624 31.1707 21.9994 31.1707M31.1668 22.0033C31.1668 16.9403 27.0624 12.8359 21.9994 12.8359M31.1668 22.0033H12.832M21.9994 31.1707C16.9364 31.1707 12.832 27.0664 12.832 22.0033M21.9994 31.1707C19.6455 28.6991 18.3325 25.4166 18.3325 22.0033C18.3325 18.5901 19.6455 15.3076 21.9994 12.8359M21.9994 31.1707C24.3534 28.6991 25.6664 25.4166 25.6664 22.0033C25.6664 18.5901 24.3534 15.3076 21.9994 12.8359M21.9994 12.8359C16.9364 12.8359 12.832 16.9403 12.832 22.0033" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
      </g>
      <defs>
        <clipPath id="clip0_6512_23">
          <rect width="22" height="22" fill="white" transform="translate(11 11)" />
        </clipPath>
      </defs>
    </svg>
  },
  {
    year: "2023", text: "Launch of OIHE undergraduate IT Course Bachelor of Information Systems and Bachelor of Cyber Security", icon: <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="12" fill="#2463A7" fillOpacity="0.101961" />
      <path d="M22.3122 31.1244C26.1252 29.7952 29.3332 27.5035 29.3332 22.92V16.5031C29.3332 16.26 29.2366 16.0268 29.0647 15.8549C28.8928 15.683 28.6597 15.5864 28.4166 15.5864C26.5834 15.5864 24.3012 14.4956 22.6972 13.093C22.503 12.9271 22.256 12.8359 22.0006 12.8359C21.7452 12.8359 21.4982 12.9271 21.304 13.093C19.7091 14.4864 17.4177 15.5864 15.5845 15.5864C15.3415 15.5864 15.1083 15.683 14.9364 15.8549C14.7645 16.0268 14.668 16.26 14.668 16.5031V22.92C14.668 27.5035 17.876 29.7952 21.6981 31.1153C21.8957 31.1889 22.1125 31.1921 22.3122 31.1244Z" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  },
  {
    year: "2021", text: "Launch of OIHE postgraduate Master of Business Administration (MBA) and Master of Professional Accounting (MPA) courses", icon: <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="12" fill="#2463A7" fillOpacity="0.101961" />
      <path d="M25.6664 29.3359V14.6693C25.6664 14.183 25.4732 13.7167 25.1294 13.3729C24.7855 13.0291 24.3192 12.8359 23.8329 12.8359H20.166C19.6797 12.8359 19.2133 13.0291 18.8695 13.3729C18.5256 13.7167 18.3325 14.183 18.3325 14.6693V29.3359M14.6655 16.5026H29.3334C30.346 16.5026 31.1668 17.3234 31.1668 18.3359V27.5026C31.1668 28.5151 30.346 29.3359 29.3334 29.3359H14.6655C13.6529 29.3359 12.832 28.5151 12.832 27.5026V18.3359C12.832 17.3234 13.6529 16.5026 14.6655 16.5026Z" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  },
  {
    year: "2019", text: "Approval of Higher Education Fee-Help for OIHE domestic students", icon: <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="12" fill="#2463A7" fillOpacity="0.101961" />
      <path d="M16.499 22H16.5082M27.4999 22H27.509M14.6655 16.5H29.3334C30.346 16.5 31.1668 17.3208 31.1668 18.3333V25.6667C31.1668 26.6792 30.346 27.5 29.3334 27.5H14.6655C13.6529 27.5 12.832 26.6792 12.832 25.6667V18.3333C12.832 17.3208 13.6529 16.5 14.6655 16.5ZM23.8329 22C23.8329 23.0125 23.012 23.8333 21.9994 23.8333C20.9868 23.8333 20.166 23.0125 20.166 22C20.166 20.9875 20.9868 20.1667 21.9994 20.1667C23.012 20.1667 23.8329 20.9875 23.8329 22Z" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  },
  {
    year: "2017", text: "Launch of Ozford ELICOS learning program", icon: <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="12" fill="#2463A7" fillOpacity="0.101961" />
      <path d="M21.0827 26.5843L22.9162 28.4176C23.0968 28.5982 23.3111 28.7414 23.5471 28.8392C23.783 28.9369 24.0359 28.9872 24.2913 28.9872C24.5467 28.9872 24.7995 28.9369 25.0355 28.8392C25.2714 28.7414 25.4858 28.5982 25.6664 28.4176C25.847 28.2371 25.9902 28.0227 26.088 27.7868C26.1857 27.5509 26.236 27.298 26.236 27.0426C26.236 26.7873 26.1857 26.5344 26.088 26.2985C25.9902 26.0626 25.847 25.8482 25.6664 25.6676M23.8331 23.8339L26.125 26.1255C26.4897 26.4902 26.9843 26.6951 27.5001 26.6951C28.0158 26.6951 28.5105 26.4902 28.8752 26.1255C29.2399 25.7609 29.4448 25.2663 29.4448 24.7505C29.4448 24.2348 29.2399 23.7402 28.8752 23.3755L25.3182 19.8188C24.8026 19.3038 24.1036 19.0146 23.3748 19.0146C22.6459 19.0146 21.9469 19.3038 21.4313 19.8188L20.6245 20.6255C20.2598 20.9902 19.7652 21.195 19.2494 21.195C18.7337 21.195 18.239 20.9902 17.8743 20.6255C17.5096 20.2608 17.3047 19.7662 17.3047 19.2505C17.3047 18.7348 17.5096 18.2402 17.8743 17.8755L20.4503 15.2996C21.2866 14.4656 22.3772 13.9343 23.5495 13.7899C24.7218 13.6454 25.9088 13.8961 26.9225 14.5021L27.3534 14.7588C27.7437 14.9944 28.2078 15.0761 28.6552 14.988L30.2503 14.6671M30.2501 13.7509L31.1668 23.8343H29.3334M13.7488 13.7509L12.832 23.8343L18.7908 29.7927C19.1555 30.1573 19.6502 30.3622 20.166 30.3622C20.6817 30.3622 21.1764 30.1573 21.5411 29.7927C21.9058 29.428 22.1107 28.9334 22.1107 28.4176C22.1107 27.9019 21.9058 27.4073 21.5411 27.0426M13.7488 14.6676H21.0827" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  },
  {
    year: "2016", text: "Launch of Bachelor of Business and Bachelor of Accounting Courses", icon: <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="12" fill="#2463A7" fillOpacity="0.101961" />
      <path d="M21.9994 17.4167V30.25M21.9994 17.4167C21.9994 16.4442 21.6131 15.5116 20.9254 14.8239C20.2377 14.1363 19.305 13.75 18.3325 13.75H13.7488C13.5056 13.75 13.2725 13.8466 13.1005 14.0185C12.9286 14.1904 12.832 14.4236 12.832 14.6667V26.5833C12.832 26.8264 12.9286 27.0596 13.1005 27.2315C13.2725 27.4034 13.5056 27.5 13.7488 27.5H19.2492C19.9786 27.5 20.6781 27.7897 21.1939 28.3055C21.7097 28.8212 21.9994 29.5207 21.9994 30.25M21.9994 17.4167C21.9994 16.4442 22.3858 15.5116 23.0735 14.8239C23.7611 14.1363 24.6939 13.75 25.6664 13.75H30.2501C30.4932 13.75 30.7264 13.8466 30.8983 14.0185C31.0702 14.1904 31.1668 14.4236 31.1668 14.6667V26.5833C31.1668 26.8264 31.0702 27.0596 30.8983 27.2315C30.7264 27.4034 30.4932 27.5 30.2501 27.5H24.7497C24.0202 27.5 23.3207 27.7897 22.805 28.3055C22.2892 28.8212 21.9994 29.5207 21.9994 30.25" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  },
  {
    year: "2016", text: "CPA and CAANZ accreditation of Bachelor of Business (Accounting) course", icon: <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="12" fill="#2463A7" fillOpacity="0.101961" />
      <path d="M25.1875 22.8181L26.5762 30.6336C26.5918 30.7256 26.5789 30.8202 26.5392 30.9047C26.4996 30.9892 26.4351 31.0596 26.3543 31.1064C26.2736 31.1533 26.1805 31.1743 26.0875 31.1668C25.9944 31.1593 25.9059 31.1236 25.8337 31.0644L22.5521 28.6014C22.3936 28.483 22.2012 28.4191 22.0034 28.4191C21.8057 28.4191 21.6132 28.483 21.4548 28.6014L18.1676 31.0635C18.0955 31.1226 18.0071 31.1583 17.9142 31.1658C17.8213 31.1733 17.7283 31.1523 17.6476 31.1056C17.5669 31.0589 17.5024 30.9887 17.4626 30.9043C17.4229 30.82 17.4098 30.7256 17.4251 30.6336L18.813 22.8181M27.5 18.3359C27.5 21.3735 25.0376 23.8359 22 23.8359C18.9624 23.8359 16.5 21.3735 16.5 18.3359C16.5 15.2984 18.9624 12.8359 22 12.8359C25.0376 12.8359 27.5 15.2984 27.5 18.3359Z" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  },
  {
    year: "2015", text: "Establishment of Ozford Institute of Higher Education (OIHE) under Governing Board", icon: <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="12" fill="#2463A7" fillOpacity="0.101961" />
      <path d="M14.668 31.1707V14.6694C14.668 14.5271 14.7011 14.3867 14.7647 14.2594C14.8284 14.1321 14.9208 14.0214 15.0346 13.936C15.9865 13.2219 17.1444 12.8359 18.3343 12.8359C21.084 12.8359 22.9171 14.6694 25.0555 14.6694C26.2776 14.6694 27.2147 14.425 27.8666 13.936C28.0028 13.8339 28.1647 13.7717 28.3343 13.7564C28.5038 13.7411 28.6742 13.7733 28.8265 13.8495C28.9787 13.9256 29.1068 14.0426 29.1963 14.1875C29.2858 14.3323 29.3332 14.4992 29.3332 14.6694V23.8368C29.3332 23.9791 29.3 24.1195 29.2364 24.2468C29.1728 24.3741 29.0804 24.4848 28.9665 24.5702C28.0146 25.2843 26.8568 25.6703 25.6669 25.6703C22.9171 25.6703 21.084 23.8368 18.3343 23.8368C16.9815 23.8369 15.6762 24.3356 14.668 25.2376" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  },
  {
    year: "2013", text: "Official launch of blended learning platform", icon: <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="12" fill="#2463A7" fillOpacity="0.101961" />
      <path d="M29.3811 25.6576H14.6164M27.4984 15.5859C27.9846 15.5859 28.4509 15.7791 28.7947 16.1229C29.1385 16.4667 29.3316 16.933 29.3316 17.4193V25.2348C29.3315 25.5202 29.398 25.8018 29.5259 26.057L30.5049 28.0067C30.5755 28.147 30.609 28.303 30.602 28.4599C30.5951 28.6168 30.5479 28.7693 30.4651 28.9027C30.3823 29.0361 30.2666 29.146 30.1291 29.2219C29.9916 29.2977 29.8369 29.337 29.6799 29.3359H14.3175C14.1605 29.337 14.0058 29.2977 13.8684 29.2219C13.7309 29.146 13.6152 29.0361 13.5324 28.9027C13.4495 28.7693 13.4024 28.6168 13.3954 28.4599C13.3885 28.303 13.4219 28.147 13.4926 28.0067L14.4715 26.057C14.5994 25.8018 14.666 25.5202 14.6659 25.2348V17.4193C14.6659 16.933 14.859 16.4667 15.2028 16.1229C15.5466 15.7791 16.0129 15.5859 16.4991 15.5859H27.4984Z" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  },
  {
    year: "2010", text: "Pathways options opened for direct entry pathways into Australian universities", icon: <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="12" fill="#2463A7" fillOpacity="0.101961" />
      <g clipPath="url(#clip0_6512_97)">
        <path d="M20.1681 22.9131C20.5618 23.4393 21.064 23.8748 21.6408 24.1899C22.2176 24.505 22.8553 24.6924 23.5109 24.7394C24.1664 24.7863 24.8244 24.6917 25.4402 24.462C26.056 24.2323 26.6152 23.8729 27.0798 23.4081L29.8298 20.6581C30.6647 19.7936 31.1267 18.6359 31.1162 17.4341C31.1058 16.2324 30.6238 15.0828 29.774 14.2331C28.9242 13.3833 27.7746 12.9012 26.5729 12.8908C25.3712 12.8804 24.2134 13.3423 23.349 14.1772L21.7723 15.7447M23.835 21.08C23.4413 20.5537 22.9391 20.1182 22.3623 19.8031C21.7855 19.488 21.1478 19.3006 20.4922 19.2537C19.8367 19.2067 19.1787 19.3013 18.5629 19.531C17.9471 19.7607 17.388 20.1201 16.9233 20.585L14.1733 23.335C13.3384 24.1994 12.8764 25.3571 12.8869 26.5589C12.8973 27.7606 13.3794 28.9102 14.2291 29.76C15.0789 30.6097 16.2285 31.0918 17.4302 31.1022C18.632 31.1127 19.7897 30.6507 20.6541 29.8158L22.2216 28.2483" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
      </g>
      <defs>
        <clipPath id="clip0_6512_97">
          <rect width="22" height="22" fill="white" transform="translate(11 11)" />
        </clipPath>
      </defs>
    </svg>
  },
  {
    year: "2007", text: "Launch of first VET Certificate of Applied Learning (VCAL) program at Ozford", icon: <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="12" fill="#2463A7" fillOpacity="0.101961" />
      <path d="M16.499 18.3333H13.7488C13.5056 18.3333 13.2725 18.2368 13.1005 18.0648C12.9286 17.8929 12.832 17.6598 12.832 17.4167V15.5833C12.832 15.0971 13.0252 14.6308 13.369 14.287C13.7129 13.9432 14.1792 13.75 14.6655 13.75H26.5831C27.0694 13.75 27.5358 13.9432 27.8796 14.287C28.2234 14.6308 28.4166 15.0971 28.4166 15.5833V26.5833M14.6655 13.75C15.1518 13.75 15.6181 13.9432 15.962 14.287C16.3058 14.6308 16.499 15.0971 16.499 15.5833V28.4167C16.499 28.9029 16.6922 29.3692 17.036 29.713C17.3798 30.0568 17.8462 30.25 18.3325 30.25M18.3325 30.25H29.3334C29.8196 30.25 30.286 30.0568 30.6298 29.713C30.9737 29.3692 31.1668 28.9029 31.1668 28.4167V27.5C31.1668 27.2569 31.0702 27.0237 30.8983 26.8518C30.7264 26.6799 30.4932 26.5833 30.2501 26.5833H21.0827C20.8396 26.5833 20.6064 26.6799 20.4345 26.8518C20.2625 27.0237 20.166 27.2569 20.166 27.5V28.4167C20.166 28.9029 19.9728 29.3692 19.6289 29.713C19.2851 30.0568 18.8187 30.25 18.3325 30.25Z" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  },
  {
    year: "2006", text: "Expanded and moved to new campus at Ozford House on Lonsdale St Melbourne", icon: <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="12" fill="#2463A7" fillOpacity="0.101961" />
      <path d="M24.75 30.2526V22.9193C24.75 22.6762 24.6534 22.443 24.4815 22.2711C24.3096 22.0992 24.0764 22.0026 23.8333 22.0026H20.1667C19.9236 22.0026 19.6904 22.0992 19.5185 22.2711C19.3466 22.443 19.25 22.6762 19.25 22.9193V30.2526M13.75 20.1697C13.7499 19.903 13.8081 19.6395 13.9203 19.3976C14.0326 19.1557 14.1962 18.9412 14.3999 18.769L20.8166 13.269C21.1475 12.9894 21.5667 12.8359 22 12.8359C22.4333 12.8359 22.8525 12.9894 23.1834 13.269L29.6001 18.769C29.8038 18.9412 29.9674 19.1557 30.0797 19.3976C30.1919 19.6395 30.2501 19.903 30.25 20.1697V28.4197C30.25 28.9059 30.0568 29.3723 29.713 29.7161C29.3692 30.0599 28.9029 30.253 28.4167 30.253H15.5833C15.0971 30.253 14.6308 30.0599 14.287 29.7161C13.9432 29.3723 13.75 28.9059 13.75 28.4197V20.1697Z" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  },
];

const TimelineItem = ({ item, isLeft }: { item: MilestoneData, isLeft: boolean }) => (
  <div className={`relative w-full mb-8 md:mb-12 flex justify-start md:justify-between items-center ${isLeft ? 'md:flex-row-reverse' : ''}`}>

    {/* Empty space for alternating side on desktop */}
    <div className="hidden md:block md:w-[45%]"></div>

    {/* Card Content */}
    <div className="w-full pl-[64px] pr-4 md:px-0 md:w-[45%] relative">

      {/* Mobile Dot */}
      <motion.div 
        className="absolute left-[24px] w-[14px] h-[14px] bg-[#4D97E6] rounded-full transform -translate-x-1/2 z-10 top-[40px] md:hidden"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2, type: "spring" }}
      ></motion.div>

      {/* Desktop Dot */}
      <motion.div 
        className={`hidden md:block absolute top-1/2 w-[16px] h-[16px] bg-[#4D97E6] rounded-full transform -translate-y-1/2 z-10 ${isLeft ? '-right-[16px]' : '-left-[16px]'}`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2, type: "spring" }}
      ></motion.div>

      <motion.div 
        className="bg-[#FAFAF71A] border border-[#FAFAF733] rounded-[16px] p-6 text-left hover:bg-[#FAFAF726] transition-colors relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
      >
        <div className="mb-4">
          {item.icon}
        </div>
        <h4 className="text-[#4D97E6] text-[20px] md:text-[24px] font-semibold mb-3">{item.year}</h4>
        <p className="text-[#FAFAF7] text-[13px] md:text-[14px] leading-[1.6]">
          {item.text}
        </p>
      </motion.div>
    </div>
  </div>
);

export default function AboutMilestones() {
  return (
    <section className="w-full bg-[#0B1F4A] py-[60px] md:py-[100px] lg:py-[120px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px] xl:px-[100px]">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <h3 className="text-[#FAFAF7] opacity-80 text-[12px] font-semibold tracking-[0.1em] uppercase mb-4">
            OUR EVOLUTION
          </h3>
          <h2 className="text-[#FAFAF7] text-[36px] md:text-[48px] font-normal leading-[1.2]" style={{ fontFamily: 'var(--font-dm-serif)' }}>
            Milestones
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-[1200px] mx-auto">
          {/* Vertical Line */}
          <motion.div 
            className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[#FAFAF733] md:-translate-x-1/2 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          ></motion.div>

          <div className="flex flex-col">
            {milestonesData.map((item, idx) => (
              <TimelineItem key={idx} item={item} isLeft={idx % 2 === 0} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

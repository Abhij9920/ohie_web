"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronRight, ChevronLeft } from "./Icons";
import { navLinks } from "@/constants/navData";
import StudyMegaMenu from "./StudyMegaMenu";
import StudentLifeMegaMenu from "./StudentLifeMegaMenu";
import AdmissionMegaMenu from "./AdmissionMegaMenu";
import AboutMegaMenu from "./AboutMegaMenu";

interface MobileNavItem {
  name: string;
  href?: string;
  children?: MobileNavItem[];
}

const mobileNavData: MobileNavItem[] = [
  {
    name: "Study",
    children: [
      {
        name: "Postgraduate",
        children: [
          { name: "Master of Information Technology (MIT)", href: "/study/mit" },
          { name: "Master of Business Administration (MBA)", href: "/study/mba" },
          { name: "Master of Professional Accounting (MPA)", href: "/study/mpa" },
          { name: "Graduate Diploma in Information Technology", href: "/study/gdit" },
          { name: "Graduate Diploma in Management", href: "/study/gdm" },
          { name: "Graduate Certificate in Information Technology", href: "/study/gcit" },
          { name: "Graduate Certificate in Management", href: "/study/gcm" },
          { name: "Master of Teaching (Early Childhood)", href: "/study/mtec" },
          { name: "Graduate Diploma in Early Childhood Education", href: "/study/gdece" }
        ]
      },
      {
        name: "Undergraduate",
        children: [
          { name: "Bachelor of Cyber Security", href: "/study/bcs" },
          { name: "Bachelor of Information Systems", href: "/study/bis" },
          { name: "Bachelor of Business (Accounting)", href: "/study/bba" },
          { name: "Bachelor of Business", href: "/study/bbus" },
          { name: "Diploma of Business", href: "/study/dipbus" }
        ]
      }
    ]
  },
  {
    name: "Student Life",
    children: [
      {
        name: "Current Student",
        children: [
          { name: "Webmail", href: "https://www.office.com/login" },
          { name: "OIHE (Moodle)", href: "https://oihe.ozford.edu.au/login/index.php" },
          { name: "Policies & Procedures", href: "/policies" },
          { name: "Our People", href: "/about-us/our-people" }
        ]
      },
      {
        name: "Life at Ozford",
        children: [
          { name: "Student Services & Support", href: "/student-life/student-services-support" },
          { name: "Career Hub", href: "/student-life/career-hub" },
          { name: "Endorsement", href: "/student-life/endorsement" },
          { name: "Campus Safety & Sexual Misconduct", href: "/campus-safety" }
        ]
      },
      {
        name: "Key Dates",
        children: [
          { name: "Intakes", href: "/student-life/intakes" },
          { name: "Orientations", href: "/student-life/orientation" },
          { name: "Events", href: "/student-life/events" }
        ]
      },
      {
        name: "International Student",
        children: [
          { name: "Apply", href: "/admission-entry/how-to-apply" },
          { name: "Accommodation", href: "/student-life/accommodation" },
          { name: "Study in Melbourne Australia", href: "/about-us/study-in-melbourne" },
          { name: "ESOS Framework", href: "/student-life/esos-framework" }
        ]
      }
    ]
  },
  {
    name: "Admission & Entry",
    children: [
      {
        name: "Higher Education",
        children: [
          { name: "Why OIHE?", href: "/admission-entry/why-oihe" },
          { name: "Intakes & Trimester Dates", href: "/student-life/intakes" },
          { name: "Orientation", href: "/student-life/orientation" },
          { name: "Entry Requirements", href: "/admission-entry/entry-requirements" },
          { name: "Pre-Enrolment", href: "/admission-entry/pre-enrolment" },
          { name: "How to Apply", href: "/admission-entry/how-to-apply" },
          { name: "Policies & Procedures", href: "/policies" },
          { name: "Statement of Tuition Assurance", href: "/admission-entry/statement-of-tuition-assurance" }
        ]
      },
      {
        name: "Information",
        children: [
          { name: "Apply Now", href: "/admission-entry/how-to-apply" },
          { name: "Authorised Agents", href: "/admission-entry/authorized-agents" },
          { name: "Statement of Tuition Assurance", href: "/admission-entry/statement-of-tuition-assurance" },
          { name: "Policies & Procedures", href: "/policies" },
          { name: "Fees & Payment", href: "/fees" }
        ]
      }
    ]
  },
  {
    name: "About",
    children: [
      {
        name: "About Ozford",
        children: [
          { name: "About us", href: "/about-us" },
          { name: "Our Philosophy", href: "/about-us/our-philosophy" },
          { name: "Our People", href: "/about-us/our-people" },
          { name: "Gallery", href: "/about-us/gallery" },
          { name: "Testimonials", href: "/about-us/testimonials" },
          { name: "Our Stories", href: "/about-us/our-stories" },
          { name: "Policies & Procedures", href: "/policies" }
        ]
      },
      {
        name: "Life at Ozford",
        children: [
          { name: "Student Services & Support", href: "/student-life/student-services-support" },
          { name: "Career Hub", href: "/student-life/career-hub" },
          { name: "Campus Safety & Sexual Misconduct", href: "/campus-safety" }
        ]
      },
      {
        name: "Terms & Policies",
        children: [
          { name: "Terms & Conditions", href: "/terms" },
          { name: "ESOS Act", href: "/student-life/esos-framework" },
          { name: "Privacy Statement", href: "/about-us/privacy-statement" },
          { name: "Disclaimer", href: "/about-us/disclaimer" },
          { name: "Policies & Procedures", href: "/policies" }
        ]
      },
      {
        name: "Engage",
        children: [
          { name: "Blogs & Events", href: "/student-life/events" },
          { name: "Contact us", href: "/contact-us" },
          { name: "Job Vacancy", href: "/about-us/careers" },
          { name: "FAQ's", href: "/about-us/faqs" }
        ]
      }
    ]
  },
  {
    name: "Login",
    href: "https://oihe.ozford.edu.au/login/index.php"
  }
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Stack for multi-level mobile drill-down navigation
  const [menuStack, setMenuStack] = useState<{ title: string; items: MobileNavItem[] }[]>([
    { title: "Main Menu", items: mobileNavData }
  ]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(true);
    setActiveDropdown(null);
    setMenuStack([{ title: "Main Menu", items: mobileNavData }]);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMenuStack([{ title: "Main Menu", items: mobileNavData }]);
  };

  const currentLevel = menuStack[menuStack.length - 1];

  const handleItemClick = (item: MobileNavItem) => {
    if (item.children && item.children.length > 0) {
      setMenuStack((prev) => [...prev, { title: item.name, items: item.children! }]);
    } else if (item.href) {
      handleCloseMobileMenu();
    }
  };

  const handleBack = () => {
    if (menuStack.length > 1) {
      setMenuStack((prev) => prev.slice(0, -1));
    }
  };

  return (
    <header ref={headerRef} className="w-full bg-white z-50 sticky top-0 shadow-sm transition-all duration-300">
      {/* Top Utility Bar (Dark Blue) */}



      {/* Main Navbar */}
      <nav className="w-full bg-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px]">
          <div className="flex justify-between items-center my-[14px]">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" onClick={() => { setActiveDropdown(null); handleCloseMobileMenu(); }}>
                <Image
                  src={require("../public/logo.png")}
                  alt="OIHE Logo"
                  width={150}
                  height={60}
                  priority
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      if (link.hasDropdown) {
                        e.preventDefault();
                        setActiveDropdown(activeDropdown === link.name ? null : link.name);
                      } else {
                        setActiveDropdown(null);
                      }
                    }}
                    className={`text-[14px] font-medium flex items-center transition-colors duration-200 ${activeDropdown === link.name ? "text-blue-500 underline underline-offset-4" : "text-[#2D2D2D] hover:text-blue-500 hover:underline hover:underline-offset-4"
                      }`}
                  >
                    {link.name}
                    <span
                      className={`ml-[11px] transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                    >
                      {link.hasDropdown ? <ChevronDown /> : null}
                    </span>
                  </Link>
                </div>
              ))}
            </div>

            {/* Call to Action Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/admission-entry/how-to-apply"
                className="bg-[#0B1F4A] hover:bg-[#081530] text-white text-[14px] font-medium px-[36px] py-[12px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile / Tablet Menu Button (Hamburger) */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-[#0B1F4A] hover:bg-gray-100 focus:outline-none rounded-md"
                onClick={isMobileMenuOpen ? handleCloseMobileMenu : handleOpenMobileMenu}
                aria-label="Toggle navigation menu"
              >
                <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Mega Menus */}
      <StudyMegaMenu isActive={activeDropdown === "Study"} onClose={() => setActiveDropdown(null)} />
      <StudentLifeMegaMenu isActive={activeDropdown === "Student Life"} onClose={() => setActiveDropdown(null)} />
      <AdmissionMegaMenu isActive={activeDropdown === "Admission"} onClose={() => setActiveDropdown(null)} />
      <AboutMegaMenu isActive={activeDropdown === "About Us"} onClose={() => setActiveDropdown(null)} />

      {/* Mobile & Tablet Full-screen Drill-down Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col lg:hidden overflow-hidden animate-fadeIn">


          {/* Header Bar inside drawer */}
          <div className="w-full bg-white px-6 py-4 flex justify-between items-center border-b border-gray-100 flex-shrink-0">
            <Link href="/" onClick={handleCloseMobileMenu}>
              <Image
                src={require("../public/logo.png")}
                alt="OIHE Logo"
                width={140}
                height={55}
                priority
                className="h-10 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={handleCloseMobileMenu}
              className="p-2 text-gray-700 hover:text-black focus:outline-none rounded-md"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Back Button Header (if drill-down level > 1) */}
          {menuStack.length > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="w-full bg-gray-50 border-b border-gray-200/80 px-6 py-3.5 flex items-center text-[#0B1F4A] font-semibold text-[14px] hover:bg-gray-100 transition-colors flex-shrink-0"
            >
              <ChevronLeft className="w-4 h-4 mr-2 text-[#0B1F4A]" />
              <span>Back</span>
            </button>
          )}

          {/* Scrollable Navigation List */}
          <div className="flex-1 overflow-y-auto bg-white divide-y divide-gray-100">
            {currentLevel.items.map((item, idx) => {
              const hasChildren = item.children && item.children.length > 0;

              if (hasChildren) {
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleItemClick(item)}
                    className="w-full py-4 px-6 flex justify-between items-center text-left text-[15px] font-medium text-[#1E293B] hover:bg-gray-50 active:bg-gray-100 transition-colors"
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>
                );
              }

              const isExternal = item.href?.startsWith("http");

              if (isExternal) {
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleCloseMobileMenu}
                    className="w-full py-4 px-6 flex justify-between items-center text-left text-[15px] font-medium text-[#1E293B] hover:bg-gray-50 active:bg-gray-100 transition-colors"
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 opacity-60" />
                  </a>
                );
              }

              return (
                <Link
                  key={idx}
                  href={item.href || "#"}
                  onClick={handleCloseMobileMenu}
                  className="w-full py-4 px-6 flex justify-between items-center text-left text-[15px] font-medium text-[#1E293B] hover:bg-gray-50 active:bg-gray-100 transition-colors"
                >
                  <span>{item.name}</span>
                </Link>
              );
            })}

            {/* Apply Now CTA at Root Level */}
            {menuStack.length === 1 && (
              <div className="p-6">
                <Link
                  href="https://ozford.meshedhe.com.au/Publics/PublicsPages/StudentApply/pp_Application_Step0.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center bg-[#0B1F4A] hover:bg-[#081530] text-white text-[15px] font-medium py-3.5 px-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg w-full rounded-sm"
                  onClick={handleCloseMobileMenu}
                >
                  Apply Now
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

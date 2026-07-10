"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "./Icons";
import { navLinks } from "@/constants/navData";
import StudyMegaMenu from "./StudyMegaMenu";
import StudentLifeMegaMenu from "./StudentLifeMegaMenu";
import AdmissionMegaMenu from "./AdmissionMegaMenu";
import AboutMegaMenu from "./AboutMegaMenu";
import MobileStudySubMenu from "./MobileStudySubMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="w-full bg-white border-b border-gray-100 z-50 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center my-[14px]">

          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" onClick={() => setActiveDropdown(null)}>
              <Image src={require('../public/logo.png')} alt="OIHE Logo" width={150} height={60} priority className="h-10 w-auto" />
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
                  className={`text-[14px] font-medium flex items-center transition-colors duration-200 ${
                    activeDropdown === link.name ? 'text-[#0B1F4A]' : 'text-[#2D2D2D] hover:text-[#0B1F4A]'
                  }`}
                >
                  {link.name}
                  <span className={`ml-[11px] transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`}>
                    {link.hasDropdown ? <ChevronDown /> : null}
                  </span>
                </Link>
              </div>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="#"
              className="bg-[#0B1F4A] hover:bg-[#081530] text-white text-[14px] font-medium px-[36px] py-[12px] transition-colors duration-300"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#0B1F4A] hover:bg-gray-100 focus:outline-none"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setActiveDropdown(null);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-8 w-8`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-8 w-8`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Mega Menus */}
      <StudyMegaMenu isActive={activeDropdown === 'Study'} />
      <StudentLifeMegaMenu isActive={activeDropdown === 'Student Life'} />
      <AdmissionMegaMenu isActive={activeDropdown === 'Admission'} />
      <AboutMegaMenu isActive={activeDropdown === 'About Us'} />

      {/* Mobile Menu Panel */}
      <div
        className={`${isMobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"} absolute top-full left-0 w-full lg:hidden bg-white shadow-xl transition-all duration-300 ease-in-out z-40 max-h-[85vh] overflow-y-auto`}
      >
        <div className="flex flex-col py-6 px-6 sm:px-10 space-y-6">
          {navLinks.map((link) => (
            <div key={link.name}>
              <button
                className={`w-full text-[16px] font-medium flex items-center justify-between border-b border-gray-100 pb-4 transition-colors duration-200 ${
                  activeDropdown === link.name ? 'text-[#0B1F4A]' : 'text-[#2D2D2D] hover:text-[#0B1F4A]'
                }`}
                onClick={() => {
                  if (link.hasDropdown) {
                    setActiveDropdown(activeDropdown === link.name ? null : link.name);
                  } else {
                    setIsMobileMenuOpen(false);
                  }
                }}
              >
                {link.name}
                <span className={`ml-[11px] transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`}>
                  {link.hasDropdown ? <ChevronDown /> : null}
                </span>
              </button>
              
              {/* Mobile Submenu for Study */}
              {link.name === 'Study' && <MobileStudySubMenu isActive={activeDropdown === 'Study'} />}
            </div>
          ))}
          <div className="pt-2">
            <Link
              href="#"
              className="flex justify-center bg-[#0B1F4A] hover:bg-[#081530] text-white text-[16px] font-medium px-[36px] py-[16px] transition-colors duration-300 w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

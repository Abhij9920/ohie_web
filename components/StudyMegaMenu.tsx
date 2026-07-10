import Link from "next/link";
import { ArrowRight } from "./Icons";
import { postgradCourses, undergradCourses } from "@/constants/navData";
import { MegaMenuBadge, MegaMenuHeader, MegaMenuLink, MegaMenuRightBanner } from "./MegaMenuShared";

interface StudyMegaMenuProps {
  isActive: boolean;
}

export default function StudyMegaMenu({ isActive }: StudyMegaMenuProps) {
  return (
    <div
      className={`absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${isActive ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-0'
        } hidden lg:block`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex pt-[12px] gap-12">
          
          <div className="flex-1 flex gap-12 pb-[42px]">
            {/* Postgraduate Column */}
            <div className="flex-1 border-r border-[#E8E8E4] pr-12">
              <MegaMenuBadge title="Study" />

              <MegaMenuHeader title="Postgraduate" />
              <ul className="space-y-[24px]">
                {postgradCourses.map((course, idx) => (
                  <MegaMenuLink key={idx} href="#">{course}</MegaMenuLink>
                ))}
              </ul>
            </div>

            {/* Undergraduate Column */}
            <div className="flex-1 pr-12">
              <div className="mt-[42px]">
                <MegaMenuHeader title="Undergraduate" />
                <ul className="space-y-[24px]">
                  {undergradCourses.map((course, idx) => (
                    <MegaMenuLink key={idx} href="#">{course}</MegaMenuLink>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Banner CTA */}
          <MegaMenuRightBanner
            show={true}
            title={<>Shaping tomorrow's<br />leaders, today.</>}
            linkText="Explore All Programmes"
            linkHref="#"
            className="mt-[42px]"
          />

        </div>
      </div>
    </div>
  );
}

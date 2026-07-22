import { aboutData } from "@/constants/navData";
import { MegaMenuBadge, MegaMenuHeader, MegaMenuLink } from "./MegaMenuShared";

interface Props {
  isActive: boolean;
  onClose?: () => void;
}

export default function AboutMegaMenu({ isActive, onClose }: Props) {
  return (
    <div
      className={`absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${isActive ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-0'
        } hidden lg:block`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex pt-[12px] gap-8 lg:gap-12 pb-[42px]">
          
          <div className="flex-1 border-r border-[#E8E8E4] pr-8 lg:pr-12">
            <MegaMenuBadge title="About Us" />
            <MegaMenuHeader title="About Ozford" />
            <ul className="space-y-[24px]">
              {aboutData.aboutOzford.map((course, idx) => (
                <MegaMenuLink key={idx} href={course === "About us" ? "/about-us" : course === "Our Philosophy" ? "/about-us/our-philosophy" : course === "Our People" ? "/about-us/our-people" : course === "Policies & Procedures" ? "/policies" : "#"} onClick={onClose}>{course}</MegaMenuLink>
              ))}
            </ul>
          </div>

          <div className="flex-1 border-r border-[#E8E8E4] pr-8 lg:pr-12">
            <div className="mt-[42px]">
              <MegaMenuHeader title="Life at Ozford" />
              <ul className="space-y-[24px]">
                {aboutData.support.map((course, idx) => (
                  <MegaMenuLink key={idx} href={course === "Student Services & Support" ? "/student-life/student-services-support" : course === "Career Hub" ? "/student-life/career-hub" : course === "Endorsement" ? "/student-life/endorsement" : course === "Campus Safety & Sexual Misconduct" ? "/campus-safety" : course === "Terms & Policies" ? "/terms" : "#"} onClick={onClose}>{course}</MegaMenuLink>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1 border-r border-[#E8E8E4] pr-8 lg:pr-12">
            <div className="mt-[42px]">
              <MegaMenuHeader title="Terms & Conditions" />
              <ul className="space-y-[24px]">
                {aboutData.terms.map((course, idx) => (
                  <MegaMenuLink key={idx} href={course === "Policies & Procedures" ? "/policies" : course === "ESOS Act" ? "/student-life/esos-framework" : "#"} onClick={onClose}>{course}</MegaMenuLink>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1">
            <div className="mt-[42px]">
              <MegaMenuHeader title="Blogs & Events" />
              <ul className="space-y-[24px]">
                {aboutData.blogs.map((course, idx) => (
                  <MegaMenuLink key={idx} href="#" onClick={onClose}>{course}</MegaMenuLink>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

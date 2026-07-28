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
      <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px]">
        <div className="flex pt-[12px] gap-8 lg:gap-12 pb-[42px]">

          <div className="flex-1 border-r border-[#E8E8E4] pr-8 lg:pr-12">
            <MegaMenuBadge title="About Us" />
            <MegaMenuHeader title="About Ozford" />
            <ul className="space-y-[24px]">
              {aboutData.aboutOzford.map((course, idx) => (
                <MegaMenuLink key={idx} href={course === "About us" ? "/about-us" : course === "Our Philosophy" ? "/about-us/our-philosophy" : course === "Our People" ? "/about-us/our-people" : course === "Gallery" ? "/about-us/gallery" : course === "Testimonials" ? "/about-us/testimonials" : course === "Our Stories" ? "/about-us/our-stories" : course === "Policies & Procedures" ? "/policies" : "#"} onClick={onClose}>{course}</MegaMenuLink>
              ))}
            </ul>
          </div>

          <div className="flex-1 border-r border-[#E8E8E4] pr-8 lg:pr-12">
            <div className="mt-[42px]">
              <MegaMenuHeader title="Life at Ozford" />
              <ul className="space-y-[24px]">
                {aboutData.lifeAtOzford.map((course, idx) => (
                  <MegaMenuLink key={idx} href={course === "Student Services & Support" ? "/student-life/student-services-support" : course === "Career Hub" ? "/student-life/career-hub" : course === "Endorsement" ? "/student-life/endorsement" : course === "Campus Safety & Sexual Misconduct" ? "/campus-safety" : course === "Terms & Policies" ? "/terms" : "#"} onClick={onClose}>{course}</MegaMenuLink>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1 border-r border-[#E8E8E4] pr-8 lg:pr-12">
            <div className="mt-[42px]">
              <MegaMenuHeader title="Terms & Policies" />
              <ul className="space-y-[24px]">
                {aboutData.termsAndPolicies.map((course, idx) => (
                  <MegaMenuLink key={idx} href={course === "Policies & Procedures" ? "/policies" : course === "ESOS Act" ? "/student-life/esos-framework" : course === "Terms & Conditions" ? "/terms" : course === "Privacy Statement" ? "/about-us/privacy-statement" : course === "Disclaimer" ? "/about-us/disclaimer" : "#"} onClick={onClose}>{course}</MegaMenuLink>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1">
            <div className="mt-[42px]">
              <MegaMenuHeader title="Engage" />
              <ul className="space-y-[24px]">
                {aboutData.engage.map((course, idx) => (
                  <MegaMenuLink key={idx} href={course === "Blogs & Events" ? "/student-life/events" : course === "Contact us" ? "/contact-us" : course === "Job Vacancy" ? "/about-us/careers" : course === "FAQ's" ? "/about-us/faqs" : "#"} onClick={onClose}>{course}</MegaMenuLink>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

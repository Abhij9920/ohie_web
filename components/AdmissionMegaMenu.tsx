import { admissionData } from "@/constants/navData";
import { MegaMenuBadge, MegaMenuHeader, MegaMenuLink, MegaMenuRightBanner } from "./MegaMenuShared";

interface Props {
  isActive: boolean;
  onClose?: () => void;
}

export default function AdmissionMegaMenu({ isActive, onClose }: Props) {
  return (
    <div
      className={`absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${isActive ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-0'
        } hidden lg:block`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex pt-[12px] gap-12">
          
          <div className="flex-1 flex gap-12 pb-[42px]">
            <div className="flex-1 border-r border-[#E8E8E4] pr-12">
              <MegaMenuBadge title="Admission & Entry" />
              <MegaMenuHeader title="Higher Education" />
              <ul className="space-y-[24px]">
                {admissionData.higherEducation.map((course, idx) => (
                  <MegaMenuLink key={idx} href={course === "Policies & Procedures" ? "/policies" : course === "Orientation" ? "/student-life/orientation" : "#"} onClick={onClose}>{course}</MegaMenuLink>
                ))}
              </ul>
            </div>

            <div className="flex-1 pr-12">
              <div className="mt-[42px]">
                <MegaMenuHeader title="Apply Now" />
                <ul className="space-y-[24px]">
                  {admissionData.applyNow.map((course, idx) => (
                    <MegaMenuLink key={idx} href={course === "Orientations" ? "/student-life/orientation" : "#"} onClick={onClose}>{course}</MegaMenuLink>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <MegaMenuRightBanner 
            show={true}
            title={<>Your journey to<br />excellence starts here.</>}
            linkText="Start Your Application"
            linkHref="#"
            className="mt-[42px]"
          />

        </div>
      </div>
    </div>
  );
}

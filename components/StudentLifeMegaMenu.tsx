import { studentLifeData } from "@/constants/navData";
import { MegaMenuBadge, MegaMenuHeader, MegaMenuLink } from "./MegaMenuShared";

interface Props {
  isActive: boolean;
  onClose?: () => void;
}

export default function StudentLifeMegaMenu({ isActive, onClose }: Props) {
  return (
    <div
      className={`absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${isActive ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-0'
        } hidden lg:block`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex pt-[12px] gap-8 lg:gap-12 pb-[42px]">
          
          <div className="flex-1 border-r border-[#E8E8E4] pr-8 lg:pr-12">
            <MegaMenuBadge title="Student Life" />
            <MegaMenuHeader title="Current Student" />
            <ul className="space-y-[24px]">
              {studentLifeData.currentStudent.map((course, idx) => (
                <MegaMenuLink key={idx} href="#" onClick={onClose}>{course}</MegaMenuLink>
              ))}
            </ul>
          </div>

          <div className="flex-1 border-r border-[#E8E8E4] pr-8 lg:pr-12">
            <div className="mt-[42px]">
              <MegaMenuHeader title="Student Services & Support" />
              <ul className="space-y-[24px]">
                {studentLifeData.support.map((course, idx) => (
                  <MegaMenuLink key={idx} href="#" onClick={onClose}>{course}</MegaMenuLink>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1 border-r border-[#E8E8E4] pr-8 lg:pr-12">
            <div className="mt-[42px]">
              <MegaMenuHeader title="Intakes" />
              <ul className="space-y-[24px]">
                {studentLifeData.intakes.map((course, idx) => (
                  <MegaMenuLink key={idx} href="#" onClick={onClose}>{course}</MegaMenuLink>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1">
            <div className="mt-[42px]">
              <MegaMenuHeader title="Apply" />
              <ul className="space-y-[24px]">
                {studentLifeData.apply.map((course, idx) => (
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

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
      <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px]">
        <div className="flex pt-[12px] gap-8 lg:gap-12 pb-[42px]">

          <div className="flex-1 border-r border-[#E8E8E4] pr-8 lg:pr-12">
            <MegaMenuBadge title="Student Life" />
            <MegaMenuHeader title="Current Student" />
            <ul className="space-y-[24px]">
              {studentLifeData.currentStudent.map((course, idx) => (
                <MegaMenuLink key={idx} href={course === "Our People" ? "/about-us/our-people?ref=student" : course === "Webmail" ? "https://www.office.com/login" : course === "OIHE (Moodle)" ? "https://oihe.ozford.edu.au/login/index.php" : course === "Policies & Procedures" ? "/policies?ref=student" : "#"} onClick={onClose}>{course}</MegaMenuLink>
              ))}
            </ul>
          </div>

          <div className="flex-1 border-r border-[#E8E8E4] pr-8 lg:pr-12">
            <div className="mt-[42px]">
              <MegaMenuHeader title="Student Support" />
              <ul className="space-y-[24px]">
                {studentLifeData.studentSupport.map((course, idx) => (
                  <MegaMenuLink key={idx} href={course === "Student Services & Support" ? "/student-life/student-services-support" : course === "Career Hub" ? "/student-life/career-hub" : course === "Campus Safety & Sexual Misconduct" ? "/campus-safety" : "#"} onClick={onClose}>{course}</MegaMenuLink>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1">
            <div className="mt-[42px]">
              <MegaMenuHeader title="International Students" />
              <ul className="space-y-[24px]">
                {studentLifeData.internationalStudents.map((course, idx) => {
                  let href = "#";
                  if (course === "Study in Melbourne Australia") href = "/about-us/study-in-melbourne?ref=student";
                  else if (course === "ESOS Framework") href = "/student-life/esos-framework";
                  else if (course === "Accommodation") href = "/student-life/accommodation";
                  
                  return (
                    <MegaMenuLink key={idx} href={href} onClick={onClose}>{course}</MegaMenuLink>
                  );
                })}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

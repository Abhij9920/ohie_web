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
      <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px]">
        <div className="flex pt-[12px] gap-8 lg:gap-12">

          <div className="flex-[2] flex gap-8 lg:gap-12 pb-[42px]">
            <div className="flex-1 border-r border-[#E8E8E4] pr-4 lg:pr-8">
              <MegaMenuBadge title="Admission & Entry" />
              <MegaMenuHeader title="Higher Education" />
              <ul className="space-y-[24px]">
                {admissionData.higherEducation.map((course, idx) => {
                  const c = course.toLowerCase();
                  let href = "#";
                  if (c.includes("why oihe")) href = "/admission-entry/why-oihe";
                  else if (c.includes("intakes")) href = "/student-life/intakes?ref=admission";
                  else if (c.includes("how to apply")) href = "/admission-entry/how-to-apply";
                  else if (c.includes("orientation")) href = "/student-life/orientation?ref=admission";
                  else if (c.includes("entry requirements")) href = "/admission-entry/entry-requirements";
                  else if (c.includes("pre-enrolment")) href = "/admission-entry/pre-enrolment";

                  return (
                    <MegaMenuLink key={idx} href={href} onClick={onClose}>{course}</MegaMenuLink>
                  );
                })}
              </ul>
            </div>

            <div className="flex-1 border-r border-[#E8E8E4] pr-4 lg:pr-8">
              <div className="mt-[42px]">
                <MegaMenuHeader title="Documents" />
                <ul className="space-y-[24px]">
                  {admissionData.documents.map((course, idx) => {
                    const c = course.toLowerCase();
                    let href = "#";
                    if (c.includes("brochure")) href = "/OIHE_Brochure_2026.pdf";
                    else if (c.includes("handbook")) href = "/OIHE_Student_Handbook_Jul_2026_1.pdf";
                    else if (c.includes("tuition assurance") || c.includes("tution")) href = "/admission-entry/statement-of-tuition-assurance";
                    
                    return (
                      <MegaMenuLink key={idx} href={href} onClick={onClose}>{course}</MegaMenuLink>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="flex-1 pr-4 lg:pr-8">
              <div className="mt-[42px]">
                <MegaMenuHeader title="Information" />
                <ul className="space-y-[24px]">
                  {admissionData.information.map((course, idx) => {
                    const c = course.toLowerCase();
                    let href = "#";
                    
                    if (c.includes("agent")) href = "/admission-entry/authorized-agents";
                    else if (c.includes("fee") || c.includes("payment")) href = "/fees";
                    else if (c.includes("endorsement")) href = "/student-life/endorsement?ref=admission";
                    
                    return (
                      <MegaMenuLink key={idx} href={href} onClick={onClose}>{course}</MegaMenuLink>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <MegaMenuRightBanner
            show={true}
            title={<>Your journey to<br />excellence starts here.</>}
            linkText="Start Your Application"
            linkHref="/admission-entry/how-to-apply"
            onClick={onClose}
            className="mt-[42px]"
          />

        </div>
      </div>
    </div>
  );
}

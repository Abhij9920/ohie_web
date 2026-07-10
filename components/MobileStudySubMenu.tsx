import Link from "next/link";
import { ArrowRight } from "./Icons";
import { postgradCourses, undergradCourses } from "@/constants/navData";

interface MobileStudySubMenuProps {
  isActive: boolean;
}

export default function MobileStudySubMenu({ isActive }: MobileStudySubMenuProps) {
  if (!isActive) return null;

  return (
    <div className="pt-4 pb-2 pl-4 flex flex-col space-y-6">
      <div>
        <h3 className="text-[#0B1F4A] text-xs font-bold tracking-widest uppercase mb-4">Postgraduate</h3>
        <ul className="space-y-4">
          {postgradCourses.map((course, idx) => (
            <li key={idx}>
              <Link href="#" className="flex items-center justify-between text-[13px] text-gray-500">
                <span className="pr-2">{course}</span>
                <ArrowRight />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-[#0B1F4A] text-xs font-bold tracking-widest uppercase mb-4">Undergraduate</h3>
        <ul className="space-y-4">
          {undergradCourses.map((course, idx) => (
            <li key={idx}>
              <Link href="#" className="flex items-center justify-between text-[13px] text-gray-500">
                <span className="pr-2">{course}</span>
                <ArrowRight />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

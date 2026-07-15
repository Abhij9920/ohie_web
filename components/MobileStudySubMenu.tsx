import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "./Icons";
import { postgradCourses, undergradCourses } from "@/constants/navData";

interface MobileStudySubMenuProps {
  isActive: boolean;
  onClose?: () => void;
}

export default function MobileStudySubMenu({ isActive, onClose }: MobileStudySubMenuProps) {
  const pathname = usePathname();
  if (!isActive) return null;

  return (
    <div className="pt-4 pb-2 pl-4 flex flex-col space-y-6">
      <div>
        <h3 className="text-[#0B1F4A] text-xs font-bold tracking-widest uppercase mb-4">Postgraduate</h3>
        <ul className="space-y-4">
          {postgradCourses.map((course, idx) => {
            const isCurrent = pathname === course.href;
            return (
              <li key={idx}>
                <Link href={course.href} onClick={onClose} className={`flex items-center justify-between text-[13px] ${isCurrent ? 'text-[#0B1F4A] font-bold' : 'text-gray-500'}`}>
                  <span className="pr-2">{course.name}</span>
                  <ArrowRight />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h3 className="text-[#0B1F4A] text-xs font-bold tracking-widest uppercase mb-4">Undergraduate</h3>
        <ul className="space-y-4">
          {undergradCourses.map((course, idx) => {
            const isCurrent = pathname === course.href;
            return (
              <li key={idx}>
                <Link href={course.href} onClick={onClose} className={`flex items-center justify-between text-[13px] ${isCurrent ? 'text-[#0B1F4A] font-bold' : 'text-gray-500'}`}>
                  <span className="pr-2">{course.name}</span>
                  <ArrowRight />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

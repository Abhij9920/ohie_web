import Link from "next/link";
import { ArrowRight } from "./Icons";

interface MegaMenuHeaderProps {
  title: string;
}

export const MegaMenuHeader = ({ title }: MegaMenuHeaderProps) => (
  <div className="mb-[24px]">
    <h3 className="text-[#0B1F4A] text-[11px] font-semibold tracking-widest uppercase mb-2">
      {title}
    </h3>
    <svg width="32" height="2" viewBox="0 0 32 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="2" fill="#477EFF" />
    </svg>
  </div>
);

import { usePathname } from "next/navigation";

interface MegaMenuLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const MegaMenuLink = ({ href, children, onClick }: MegaMenuLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const isExternal = href.startsWith('http');

  const linkContent = (
    <>
      <span className="pr-4">{children}</span>
      <ArrowRight />
    </>
  );

  const className = `group flex items-center justify-between text-[13px] transition-colors ${
    isActive ? 'text-[#0B1F4A] font-bold' : 'text-[#374151] hover:text-[#0B1F4A]'
  }`;

  if (isExternal) {
    return (
      <li>
        <a href={href} onClick={onClick} target="_blank" rel="noopener noreferrer" className={className}>
          {linkContent}
        </a>
      </li>
    );
  }

  return (
    <li>
      <Link href={href} onClick={onClick} className={className}>
        {linkContent}
      </Link>
    </li>
  );
};

interface MegaMenuBadgeProps {
  title: string;
}

export const MegaMenuBadge = ({ title }: MegaMenuBadgeProps) => (
  <div className="inline-block px-2 py-1 bg-white border border-gray-200 text-[#9CA3AF] text-[9px] font-bold uppercase tracking-wider mb-[16px] rounded-sm">
    {title}
  </div>
);

interface MegaMenuRightBannerProps {
  show?: boolean;
  title: React.ReactNode;
  linkText: string;
  linkHref: string;
  className?: string;
}

export const MegaMenuRightBanner = ({ show = true, title, linkText, linkHref, className = "" }: MegaMenuRightBannerProps) => {
  if (!show) return null;
  return (
    <div className={`w-[260px] flex-shrink-0 mb-[36px] bg-[#0B1F4A] px-[20px] flex flex-col justify-start py-[32px]  ${className}`}>
      <h2 className="text-white text-[18px] font-[family-name:var(--font-dm-serif)] italic mb-[12px] leading-tight">{title}</h2>
      <Link href={linkHref} className="text-[12px] font-medium flex items-center text-[#04C9ED] hover:text-white transition-colors">
        {linkText} <span className="ml-2"><ArrowRight color="currentColor" /></span>
      </Link>
    </div>
  );
};

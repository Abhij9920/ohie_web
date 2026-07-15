import Link from "next/link";
import Image from "next/image";

const ContactItem = ({ icon, title, children }: { icon: React.ReactNode; title?: string; children: React.ReactNode }) => (
  <div className={`flex ${title ? 'items-start' : 'items-center'} gap-3`}>
    {icon}
    <div>
      {title && (
        <h4 className="text-[#2463A7] text-[11px] font-semibold tracking-wider uppercase mb-1">
          {title}
        </h4>
      )}
      {children}
    </div>
  </div>
);

const FooterLinkColumn = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => (
  <div>
    <div className="mb-6 flex flex-col gap-3">
      <h3 className="text-white text-[15px] font-semibold">{title}</h3>
      <svg width="32" height="2" viewBox="0 0 32 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="2" fill="#2463A7" />
      </svg>
    </div>
    <ul className="flex flex-col gap-1">
      {links.map((link, idx) => (
        <li key={idx}>
          <Link href={link.href} className="text-[#A7BDC4] text-[13px] hover:text-white transition-colors">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const FooterLegalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-[#4D667A] text-[11px] font-normal hover:text-white transition-colors">
    {children}
  </Link>
);

export default function Footer() {
  return (
    <footer className="bg-[#0B1F4A] text-white pt-[60px] pb-[20px] px-4 md:px-[80px] font-sans">
      <div className="max-w-[1440px] mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-[40px]">

          {/* Column 1: Logo & Contact Info */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-[40px]">
              {/* Logo Area */}
              <Image src="/footer_logo.png" width={97} height={40} alt="Logo" />
            </div>

            <div className="flex flex-col gap-6">
              {/* Head Office */}
              <ContactItem
                title="Head Office"
                icon={
                  <svg className="w-5 h-5 text-[#A7BDC4] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
              >
                <p className="text-white text-[13px]">
                  333 Queen St, Melbourne VIC 3000
                </p>
              </ContactItem>

              {/* Campus */}
              <ContactItem
                title="Ozford Campus"
                icon={
                  <svg className="w-5 h-5 text-[#A7BDC4] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
              >
                <p className="text-white text-[13px] leading-relaxed">
                  433 Boundary Street, Spring Hill QLD 4000<br />
                  Australia 8:30 AM - 5:00 PM (AEST)
                </p>
              </ContactItem>

              {/* Phone */}
              <ContactItem
                icon={
                  <svg className="w-5 h-5 text-[#A7BDC4] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }
              >
                <p className="text-white text-[13px]">
                  +61 3 8895 7180
                </p>
              </ContactItem>

              {/* Email */}
              <ContactItem
                icon={
                  <svg className="w-5 h-5 text-[#94a3b8] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
              >
                <p className="text-white text-[13px]">
                  info@ozford.edu.au
                </p>
              </ContactItem>
            </div>

            {/* Socials */}
            <div className="mt-10">
              <h4 className="text-[#2463A7] text-[11px] font-semibold tracking-wider uppercase mb-4">
                Connect With Us
              </h4>
              <div className="flex items-center gap-3">
                {[
                  {
                    name: "fb", svg: <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.33295 -0.398438H8.3328V2.26844H6.33295C6.15615 2.26844 5.98659 2.33869 5.86158 2.46372C5.73656 2.58875 5.66633 2.75834 5.66633 2.93516V4.93532H8.3328L7.66618 7.6022H5.66633V12.936H2.99985V7.6022H1V4.93532H2.99985V2.93516C2.99985 2.05104 3.35102 1.20312 3.97609 0.577951C4.60117 -0.0472199 5.44895 -0.398438 6.33295 -0.398438Z" stroke="white" stroke-width="2" stroke-linecap="round" />
                    </svg>

                  },
                  {
                    name: "tw", svg: <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.334 4.60793C14.2007 3.74123 14.6674 2.34116 14.6674 2.34116C14.6674 2.34116 13.4006 3.1412 12.6672 3.1412C10.6671 1.27445 7.40016 2.87452 8.00021 5.67465C5.73336 5.74132 3.46651 4.74127 1.99973 3.00786C0.332928 6.07466 1.99973 10.0082 5.33333 11.0082C4.26658 11.9416 2.79979 12.4083 1.33301 12.3416C7.0668 16.1418 14.4007 11.2749 13.334 4.60793Z" stroke="white" stroke-width="2" stroke-linecap="round" />
                    </svg>
                  },
                  {
                    name: "in", svg: <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.1627 6.17179C12.4125 5.42161 11.395 5.00017 10.3341 5.00017C9.27313 5.00017 8.25563 5.42161 7.50543 6.17179C6.75522 6.92197 6.33376 7.93943 6.33376 9.00034V13.6672H9.00064V9.00034C9.00064 8.6467 9.14113 8.30755 9.3912 8.05749C9.64126 7.80743 9.98043 7.66695 10.3341 7.66695C10.6877 7.66695 11.0269 7.80743 11.277 8.05749C11.527 8.30755 11.6675 8.6467 11.6675 9.00034V13.6672H14.3344V9.00034C14.3344 7.93943 13.9129 6.92197 13.1627 6.17179Z" stroke="white" stroke-width="2" stroke-linecap="round" />
                      <path d="M3.66688 5.66686H1V13.6672H3.66688V5.66686Z" stroke="white" stroke-width="2" stroke-linecap="round" />
                      <path d="M2.33344 3.66678C3.06988 3.66678 3.66688 3.0698 3.66688 2.33339C3.66688 1.59698 3.06988 1 2.33344 1C1.597 1 1 1.59698 1 2.33339C1 3.0698 1.597 3.66678 2.33344 3.66678Z" stroke="white" stroke-width="2" stroke-linecap="round" />
                    </svg>
                  },
                  {
                    name: "ig", svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_6191_1286)">
                        <path d="M11.6672 4.33618H11.6738M4.66661 1.33594H11.3338C13.1749 1.33594 14.6674 2.82844 14.6674 4.66954V11.3367C14.6674 13.1778 13.1749 14.6703 11.3338 14.6703H4.66661C2.82551 14.6703 1.33301 13.1778 1.33301 11.3367V4.66954C1.33301 2.82844 2.82551 1.33594 4.66661 1.33594ZM10.6669 7.58331C10.7492 8.13818 10.6544 8.70487 10.396 9.20278C10.1377 9.70068 9.72892 10.1044 9.22786 10.3566C8.72681 10.6088 8.15899 10.6966 7.60517 10.6075C7.05135 10.5184 6.53974 10.2569 6.14309 9.86026C5.74644 9.46362 5.48497 8.952 5.39585 8.39818C5.30673 7.84436 5.39451 7.27654 5.64671 6.77549C5.8989 6.27444 6.30267 5.86566 6.80057 5.60731C7.29848 5.34895 7.86517 5.25418 8.42005 5.33646C8.98604 5.42039 9.51003 5.68413 9.91463 6.08872C10.3192 6.49332 10.583 7.01731 10.6669 7.58331Z" stroke="white" stroke-width="2" stroke-linecap="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_6191_1286">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  },
                  {
                    name: "yt", svg: <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.34928 2.37743C0.883574 4.57498 0.883574 6.84573 1.34928 9.04328C1.41047 9.26644 1.5287 9.46984 1.69234 9.63347C1.85598 9.79709 2.05939 9.91531 2.28258 9.97649C5.85808 10.5689 9.50672 10.5689 13.0822 9.97649C13.3054 9.91531 13.5088 9.79709 13.6725 9.63347C13.8361 9.46984 13.9543 9.26644 14.0155 9.04328C14.4812 6.84573 14.4812 4.57498 14.0155 2.37743C13.9543 2.15427 13.8361 1.95087 13.6725 1.78724C13.5088 1.62362 13.3054 1.5054 13.0822 1.44422C9.50671 0.851928 5.85809 0.851928 2.28258 1.44422C2.05939 1.5054 1.85598 1.62362 1.69234 1.78724C1.5287 1.95087 1.41047 2.15427 1.34928 2.37743Z" stroke="white" stroke-width="2" stroke-linecap="round" />
                      <path d="M6 3.5V8.5L10 6L6 3.5Z" fill="white" />
                    </svg>

                  },
                ].map((social, idx) => (
                  <Link href="#" key={idx} className="w-[36px] h-[36px] bg-[#242D44] rounded flex items-center justify-center hover:bg-[#2463A7] transition-colors">
                    {social.svg}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Links Columns container */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Study Column */}
            <FooterLinkColumn
              title="Study"
              links={[
                { label: "Postgraduate", href: "#" },
                { label: "Undergraduate", href: "#" }
              ]}
            />

            {/* Admission & Entry Column */}
            <FooterLinkColumn
              title="Admission & Entry"
              links={[
                { label: "How to Apply", href: "#" },
                { label: "How to Enrol", href: "#" },
                { label: "OIHE Requirements", href: "#" },
                { label: "Pay Fees", href: "#" }
              ]}
            />

            {/* Engage Column */}
            <FooterLinkColumn
              title="Engage"
              links={[
                { label: "Contact", href: "#" },
                { label: "News & Events", href: "#" }
              ]}
            />
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-[20px] border-t border-[#242D44] flex flex-col gap-8">

          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {[
                "Terms & Conditions",
                "ESOS ACT",
                "Privacy Statement",
                "Disclaimer",
                "Policies & Procedures"
              ].map((label, idx) => (
                <FooterLegalLink key={idx} href="#">{label}</FooterLegalLink>
              ))}
            </div>

            <div className="max-w-[500px] text-left lg:text-right">
              <h4 className="text-white text-[13px] font-semibold mb-2">Acknowledgement of country</h4>
              <p className="text-[#4D667A] text-[10px] leading-relaxed">
                OIHE acknowledges the Traditional Owners of Country throughout Australia and recognises their continuing connection to land, waters and community. We pay our respects to them, their cultures, and to Elders both past and present.
              </p>
            </div>
          </div>

          <div className="pt-[16px] border-t border-[#242D44] text-center">
            <p className="text-[#64748b] text-[11px]">
              © 2026 Ozford Institute of Higher Education (OIHE). All Rights Reserved.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    image: "/news_section/news_1.png",
    date: "17 JUL 2026",
    title: "Melbourne Career Expo 2026",
    desc: "OIHE is excited to be part of the Melbourne Career Expo 2026, held from 17-19 July at the Melbourne Convention & Exhibition Centre.",
    slug: "melbourne-career-expo-2026"
  },
  {
    image: "/news_section/news_2.png",
    date: "27 MAY 2026",
    title: "Leadership & Change Session",
    desc: "Celebrate Culture, Community & Connection. Join us for a vibrant cultural celebration and special speaker session at OIHE.",
    slug: "leadership-and-change-session"
  },
  {
    image: "/news_section/news_3.png",
    date: "15 MAY 2026",
    title: "Referencing & Avoiding Plagiarism",
    desc: "Academic Learning Support Workshop designed to help students improve their academic writing skills and academic integrity.",
    slug: "referencing-and-avoiding-plagiarism"
  }
];

export default function NewsEvents() {
  return (
    <section className="relative w-full py-[60px] md:py-[80px] lg:py-[100px] px-4 md:px-[40px] lg:px-[80px] overflow-hidden bg-[#F2F2F2]">

      {/* Background Map Image */}
      <div className="absolute inset-0 z-0 mix-blend-multiply">
        <Image
          src="/news_section/news_bg.png"
          alt="World Map Background"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto">

        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end text-center md:text-left mb-12 gap-6">
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[10px] font-[family-name:var(--font-geist-sans)] font-semibold text-[#2463A7] tracking-widest uppercase mb-4">
              NEWS & EVENTS
            </h4>
            <h2 className="text-[#0B1F4A] text-[32px] md:text-[40px] font-normal font-[family-name:var(--font-dm-serif)] leading-[1.1]">
              Latest News & Events.
            </h2>
          </div>
          <Link href="/student-life/events" className="text-[#0B1F4A] text-[14px] font-semibold flex items-center gap-2 border-b-2 border-[#0B1F4A] pb-1 hover:text-[#2463A7] hover:border-[#2463A7] transition-colors mb-1">
            View All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {newsItems.map((item, idx) => (
            <div key={idx} className="flex flex-col group">
              {/* Card Image */}
              <div className="w-full h-[240px] relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-grow p-6 lg:p-8 items-center md:items-start text-center md:text-left">
                <span className="text-[#2463A7] text-[11px] font-[family-name:var(--font-geist-sans)] font-semibold tracking-widest uppercase mb-3">
                  {item.date}
                </span>
                <h3 className="text-[#0B1F4A] text-[18px] font-[family-name:var(--font-dm-serif)] mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[#6B7280] text-[13px] leading-relaxed mb-8 flex-grow">
                  {item.desc}
                </p>
                <Link href={`/student-life/events/${item.slug}`} className="text-[#0B1F4A] text-[14px] font-bold flex items-center gap-2 border-b-2 border-[#0B1F4A] w-fit pb-1 hover:text-[#2463A7] hover:border-[#2463A7] transition-colors mt-auto">
                  Read More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

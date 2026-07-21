import React from 'react';
import PageHeader from './PageHeader';

const postGradCourses = [
  {
    course: "Master of Information Technology (MIT)",
    ielts: "Overall 6.5\nIndividual 6.0",
    pte: "Overall 58, Individual 52",
    academics: "60%",
    conditions: "If IELTS has 6.5 but one band with 5.5 can Offer 12 weeks EAP + MIT"
  },
  {
    course: "Master of Business Administration (MBA)",
    ielts: "Overall 6.5,\nIndividual 6.0",
    pte: "Overall 58, Individual 52",
    academics: "60%",
    conditions: "If IELTS has 6.5 but one band with 5.5 can Offer 12 weeks EAP + MBA"
  },
  {
    course: "Master of Professional Accounting (CPA and CA accredited Program)",
    ielts: "Overall 6.5,\nIndividual 6.0",
    pte: "Overall 58, Individual 52",
    academics: "60%",
    conditions: "If IELTS has 6.5 but one band with 5.5 can Offer 12 weeks EAP + MPA"
  },
  {
    course: "Graduate Diploma in Information Technology (One Year)",
    ielts: "Overall 6.0,\nIndividual 6.0",
    pte: "Overall 52, Individual 52",
    academics: "55%",
    conditions: "No EAP Options"
  },
  {
    course: "Graduate Diploma in Management (One Year)",
    ielts: "Overall 6.0,\nIndividual 6.0",
    pte: "Overall 52, Individual 52",
    academics: "55%",
    conditions: "No EAP Options"
  },
  {
    course: "Graduate Certificate in Information Technology (6 months)",
    ielts: "Overall 6.0,\nIndividual 6.0",
    pte: "Overall 52, Individual 52",
    academics: "55%",
    conditions: "No EAP Options"
  },
  {
    course: "Graduate Certificate in Management (6 months)",
    ielts: "Overall 6.0,\nIndividual 6.0",
    pte: "Overall 52, Individual 52",
    academics: "55%",
    conditions: "No EAP Options"
  },
];

const underGradCourses = [
  {
    course: "Bachelor of Cyber Security",
    ielts: "Overall 6.0,\nIndividual 5.5",
    pte: "Overall 52, Individual 46",
    academics: "60%",
    conditions: "—"
  },
  {
    course: "Bachelor of Information System",
    ielts: "Overall 6.0,\nIndividual 5.5",
    pte: "Overall 52, Individual 46",
    academics: "60%",
    conditions: "ELICOS can be Packaged if English requirement not met"
  },
  {
    course: "Bachelor of Business (Accounting) CPA and CA accredited program",
    ielts: "Overall 6.0,\nIndividual 5.5",
    pte: "Overall 52, Individual 46",
    academics: "60%",
    conditions: "—"
  },
  {
    course: "Bachelor of Business",
    ielts: "Overall 6.0,\nIndividual 5.5",
    pte: "Overall 52, Individual 46",
    academics: "60%",
    conditions: "—"
  }
];

export default function EntryRequirementsContent() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Admission & Entry', href: '#' },
          { label: 'Entry Requirements', href: '#' }
        ]}
        hideUnderline={true}
        title="Entry Requirements"
        description="Higher Education"
      />

      <section className="w-full bg-[#FAFAF7] py-12 md:py-20 px-4 md:px-8 xl:px-[100px]">
        <div className="max-w-[1440px] mx-auto">
          {/* Age Entry Requirement */}
          <div className="mb-8">
            <span className="text-[#2463A7] text-[12px] font-bold tracking-wider uppercase mb-2 block">
              Prerequisites
            </span>
            <h2 className="text-[#0B1F4A] text-[28px] md:text-[36px] lg:text-[40px] italic" style={{ fontFamily: 'var(--font-dm-serif)' }}>
              Age Entry Requirement
            </h2>
          </div>

          <div className="w-full bg-white p-6 md:p-8 flex items-center gap-4 md:gap-6 border-l-[4px] border-[#2463A7] shadow-sm mb-16 md:mb-24">
            {/* Info Icon */}
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" fill="#2463A7" fill-opacity="0.0705882" />
              <g clip-path="url(#clip0_6499_9021)">
                <path d="M24 27.3317V23.9981M24 20.6645H24.0083M32.334 23.9981C32.334 28.6008 28.6028 32.3321 24 32.3321C19.3973 32.3321 15.666 28.6008 15.666 23.9981C15.666 19.3953 19.3973 15.6641 24 15.6641C28.6028 15.6641 32.334 19.3953 32.334 23.9981Z" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
              </g>
              <defs>
                <clipPath id="clip0_6499_9021">
                  <rect width="20" height="20" fill="white" transform="translate(14 14)" />
                </clipPath>
              </defs>
            </svg>

            <p className="text-[#4A4D4A] text-[15px] md:text-[16px] leading-relaxed">
              Applicants must be <span className="font-bold text-[#1C1D20]">18 years of age or over</span> at the time of Application/Enrolment, not only by commencement.
            </p>
          </div>

          {/* Postgraduate Courses */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-[#0B1F4A] text-[24px] md:text-[32px]  mb-6 md:mb-8" style={{ fontFamily: 'var(--font-dm-serif)' }}>
              Postgraduate Courses
            </h2>

            <div className="w-full overflow-x-auto bg-white">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-[#286090] text-white">
                    <th className="py-4 px-6 font-semibold text-[13px] md:text-[14px] border-r border-white/20 last:border-r-0">Course</th>
                    <th className="py-4 px-6 font-semibold text-[13px] md:text-[14px] w-[180px] border-r border-white/20 last:border-r-0">IELTS</th>
                    <th className="py-4 px-6 font-semibold text-[13px] md:text-[14px] w-[180px] border-r border-white/20 last:border-r-0">PTE</th>
                    <th className="py-4 px-6 font-semibold text-[13px] md:text-[14px] w-[120px] border-r border-white/20 last:border-r-0">Academics</th>
                    <th className="py-4 px-6 font-semibold text-[13px] md:text-[14px] border-r border-white/20 last:border-r-0">Conditions</th>
                  </tr>
                </thead>
                <tbody className="text-[#1C1D20] text-[13px]">
                  {postGradCourses.map((course, idx) => (
                    <tr key={idx} className={`${idx % 2 === 1 ? 'bg-[#F3F3ED]' : 'bg-white'}`}>
                      <td className="py-4 px-6 font-bold border-r border-[#EAEAE6] last:border-r-0 text-[#1C1D20] text-[12px] md:text-[13px] leading-relaxed pr-8">{course.course}</td>
                      <td className="py-4 px-6 text-[#838B7C] whitespace-pre-line leading-relaxed border-r border-[#EAEAE6] last:border-r-0 text-[12px] md:text-[13px]">{course.ielts}</td>
                      <td className="py-4 px-6 text-[#838B7C] border-r border-[#EAEAE6] last:border-r-0 text-[12px] md:text-[13px]">{course.pte}</td>
                      <td className="py-4 px-6 font-bold border-r border-[#EAEAE6] last:border-r-0 text-[12px] md:text-[13px] text-[#1C1D20]">{course.academics}</td>
                      <td className={`py-4 px-6 border-r border-[#EAEAE6] last:border-r-0 text-[12px] md:text-[13px] leading-relaxed pr-8 ${course.conditions === 'No EAP Options' || course.conditions === '—' ? 'text-[#B4B4B4]' : 'text-[#7A7A7A]'}`}>{course.conditions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Undergraduate Courses */}
          <div>
            <h2 className="text-[#0B1F4A] text-[24px] md:text-[32px]  mb-6 md:mb-8" style={{ fontFamily: 'var(--font-dm-serif)' }}>
              Undergraduate Courses
            </h2>

            <div className="w-full overflow-x-auto bg-white">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-[#286090] text-white">
                    <th className="py-4 px-6 font-semibold text-[13px] md:text-[14px] border-r border-white/20 last:border-r-0">Course</th>
                    <th className="py-4 px-6 font-semibold text-[13px] md:text-[14px] w-[180px] border-r border-white/20 last:border-r-0">IELTS</th>
                    <th className="py-4 px-6 font-semibold text-[13px] md:text-[14px] w-[180px] border-r border-white/20 last:border-r-0">PTE</th>
                    <th className="py-4 px-6 font-semibold text-[13px] md:text-[14px] w-[120px] border-r border-white/20 last:border-r-0">Academics</th>
                    <th className="py-4 px-6 font-semibold text-[13px] md:text-[14px] border-r border-white/20 last:border-r-0">Conditions</th>
                  </tr>
                </thead>
                <tbody className="text-[#1C1D20] text-[13px]">
                  {underGradCourses.map((course, idx) => (
                    <tr key={idx} className={`${idx % 2 === 1 ? 'bg-[#F4F4F0]' : 'bg-white'}`}>
                      <td className="py-4 px-6 font-bold border-r border-[#EAEAE6] last:border-r-0 text-[#1C1D20] text-[12px] md:text-[13px] leading-relaxed pr-8">{course.course}</td>
                      <td className="py-4 px-6 text-[#7A7A7A] whitespace-pre-line leading-relaxed border-r border-[#EAEAE6] last:border-r-0 text-[12px] md:text-[13px]">{course.ielts}</td>
                      <td className="py-4 px-6 text-[#7A7A7A] border-r border-[#EAEAE6] last:border-r-0 text-[12px] md:text-[13px]">{course.pte}</td>
                      <td className="py-4 px-6 font-bold border-r border-[#EAEAE6] last:border-r-0 text-[12px] md:text-[13px] text-[#1C1D20]">{course.academics}</td>
                      <td className={`py-4 px-6 border-r border-[#EAEAE6] last:border-r-0 text-[12px] md:text-[13px] leading-relaxed pr-8 ${course.conditions === 'No EAP Options' || course.conditions === '—' ? 'text-[#B4B4B4]' : 'text-[#7A7A7A]'}`}>{course.conditions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="w-full bg-[#2463A7] py-[80px] md:py-[100px] px-4 md:px-[80px] flex justify-center items-center">
      <div className="max-w-[800px] mx-auto text-center flex flex-col items-center">
        <h2 className="text-white text-[36px] md:text-[52px] font-normal font-[family-name:var(--font-dm-serif)] italic mb-[26px]">
          Start Your Journey Today.
        </h2>
        <p className="text-white/60 text-[14px] md:text-[16px] leading-relaxed mb-[36px] max-w-[600px]">
          Join our diverse global community of thinkers, innovators and leaders.<br className="hidden md:block" />
          Applications are now open for the next intake.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <Link href="#" className="bg-white text-[#0B1F4A] px-8 py-3.5 text-[14px] font-semibold hover:bg-white/90 transition-colors min-w-[200px]">
            Apply Now
          </Link>
          <Link href="#" className="bg-transparent border border-white text-white px-8 py-3.5 text-[14px] font-semibold hover:bg-white hover:text-[#0B1F4A] transition-colors min-w-[200px]">
            Download Prospectus
          </Link>
        </div>
      </div>
    </section>
  );
}

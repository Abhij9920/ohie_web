import Image from "next/image";

export default function Accreditations() {
  return (
    <section className="w-full bg-[#FAFAF7] py-[60px] px-4 md:px-[80px]">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-[100px]">

        {/* Left Side: Headings */}
        <div className="lg:w-1/3 flex flex-col items-start w-full">
          <h4 className="text-[10px] font-[family-name:var(--font-geist-sans)] font-semibold text-[#2463A7] tracking-widest uppercase mb-4">
            RECOGNISED BY
          </h4>
          <h2 className="text-[#000000] text-[40px] font-normal font-[family-name:var(--font-dm-serif)] leading-[1.1] mb-6">
            Our Accreditations<br />& Partnerships
          </h2>
          <div className="w-[40px] h-[2px]"><svg width="40" height="2" viewBox="0 0 40 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="2" fill="#2463A7" />
          </svg>
          </div>
        </div>

        {/* Right Side: Logos Grid */}
        <div className="lg:w-2/3 w-full grid grid-cols-2 md:grid-cols-4 gap-x-[64px] gap-y-[43px] items-center place-items-center">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <div key={num} className="flex justify-center items-center w-full">
              <Image
                src={`/rec_section/rec_${num}.png`}
                alt={`Accreditation ${num}`}
                width={150}
                height={80}
                className="max-w-full max-h-[80px] w-auto h-auto object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

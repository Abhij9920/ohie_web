import React from 'react';

export interface CoursePathwaysProps {
  content?: React.ReactNode;
}

export default function CoursePathways({ content }: CoursePathwaysProps) {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px] xl:px-[100px]">
        <div className="flex items-center gap-4 mb-6">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M29.1504 38.1754H4.32131C1.04334 38.1754 1.04334 33.1865 4.32131 33.1865H29.1503C31.3596 33.1865 33.1483 31.3979 33.1483 29.1886C33.1483 26.9793 31.3596 25.1906 29.1503 25.1906H10.8496C5.88342 25.1906 1.86279 21.17 1.86279 16.2039C1.86279 11.2377 5.88342 7.21715 10.8496 7.21707H28.5875L27.4459 6.07551C26.4758 5.10543 26.4758 3.51801 27.4459 2.54793C28.416 1.57777 30.0034 1.57777 30.9735 2.54793L38.1371 9.71152L30.9735 16.8751C30.0034 17.8452 28.416 17.8452 27.4459 16.8751C26.4758 15.905 26.4758 14.3176 27.4459 13.3475L28.5875 12.2059H10.8496C8.64029 12.2059 6.85162 13.9945 6.85162 16.2039C6.85162 18.4132 8.64029 20.2018 10.8496 20.2018H29.1504C34.1165 20.2018 38.1372 24.2225 38.1372 29.1886C38.1372 34.1548 34.1165 38.1754 29.1504 38.1754Z" fill="#0B1F4A"/>
          </svg>
          <h2 className="text-[28px] md:text-[36px] text-[#0B1F4A]" style={{ fontFamily: 'var(--font-dm-serif)', lineHeight: '110%' }}>Pathways</h2>
        </div>
        <div className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed space-y-4">
          {content || (
            <>
              <p>For those students requiring additional English language support, a minimum of 2 additional hours per week should be allocated.</p>
              <p>For those students studying this unit by block delivery all hours shown above should be doubled.</p>
              <p>On completion of the Diploma of Business students will be eligible to commence studies at under-graduate level. Students may wish to apply for entry into Bachelor Degree studies at Universities or other higher education providers in Australia or overseas. Alternatively, our graduates may wish to apply the skills and knowledge they learned at Ozford by entering the workforce.</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

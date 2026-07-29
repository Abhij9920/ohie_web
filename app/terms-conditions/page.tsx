'use client';

import React from 'react';
import Link from 'next/link';
import Accreditations from '@/components/Accreditations';
import Image from 'next/image';

const TermsAndConditions: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Breadcrumb */}
            <div className="bg-[#0A1428] py-5">
                <div className="max-w-7xl mx-auto px-6 text-sm">
                    <nav className="flex items-center text-blue-300">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span className="mx-3">/</span>
                        <Link href="/admission-entry" className="hover:text-white">Admission &amp; Entry</Link>
                        <span className="mx-3">/</span>
                        <span className="text-white font-medium">Terms And Conditions</span>
                    </nav>
                </div>
            </div>

            {/* Hero Section */}
            <div className="bg-[#0A1428] text-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-6xl font-light tracking-tight mb-6">
                        Terms and Conditions
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl">
                        Please select and review the appropriate Terms and Conditions document below relative to your student enrollment status.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="italic font-normal text-[32px] leading-none tracking-normal text-[#1C1F1D] mb-10 border-b border-[#E4E4DC] pb-4 font-dm-serif">
                    Enrolment Agreements &amp; Policies
                </h2>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {/* International Card */}
                    <div className="bg-white border border-gray-200  px-8 py-9 hover:border-blue-200 group transition-all">
                        <div className="flex justify-center gap-6 items-center ">
                            <div className="w-14 h-14 bg-[#2463A71A] rounded flex items-center justify-center flex-shrink-0">
                                <Image src="/pdf.png" alt="Australian Student Icon" width={16} height={20} />
                            </div>
                            <div className="flex gap-5">

                                <div>
                                    <h3 className="text-lg font-semibold leading-none tracking-normal text-[#2463A7] font-plus-jakarta">
                                        International Student Terms and Conditions
                                    </h3>
                                    <p className="font-normal text-sm leading-none text-[#707571] tracking-normal mt-[6px] font-plus-jakarta">
                                        Applicable for overseas students studying on a student visa.PDF Document
                                    </p>
                                </div>
                            </div>

                            <div className="w-10 h-10 border border-[#E4E4DC] rounded flex items-center justify-center group-hover:border-blue-500 group-hover:text-blue-600 transition-all" onClick={() => window.open('/Terms_and_Conditions_of_Enrolment_International_Students_2026_YNqdvry_jtW06bD.pdf', '_blank')}>
                                <Image src="/arrow-up-right.png" alt="Arrow Right Icon" width={16} height={16} />
                            </div>
                        </div>
                    </div>

                    {/* Australian Card */}
                    <div className="bg-white border border-gray-200  px-8 py-9 hover:border-blue-200 group transition-all">
                        <div className="flex justify-center gap-6 items-center ">
                            <div className="w-14 h-14 bg-[#2463A71A] rounded flex items-center justify-center flex-shrink-0">
                                <Image src="/pdf.png" alt="Australian Student Icon" width={16} height={20} />
                            </div>
                            <div className="flex gap-5">

                                <div>
                                    <h3 className="text-lg font-semibold leading-none tracking-normal text-[#2463A7] font-plus-jakarta">
                                        Australian Students Terms and Conditions
                                    </h3>
                                    <p className="font-normal text-sm leading-none text-[#707571] tracking-normal mt-[6px] font-plus-jakarta">
                                        Applicable for domestic students, citizens, and permanent residents.PDF Document
                                    </p>
                                    
                                </div>
                            </div>

                            <div className="w-10 h-10 border border-[#E4E4DC] rounded flex items-center justify-center group-hover:border-blue-500 group-hover:text-blue-600 transition-all" onClick={() => window.open('/Terms_and_Conditions_of_Enrolment_Domestic_Students_2026_MLvSHSs.pdf', '_blank')}>
                                <Image src="/arrow-up-right.png" alt="Arrow Right Icon" width={16} height={16} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Info Box */}
                <div className=" border border-[#E4E4DC]  p-6 flex gap-5 ">
                    <div className="w-6 h-6 rounded-full border-[#707571] border-2 text-[#707571] flex items-center justify-center  flex-shrink-0 mt-0.5 font-normal text-sm leading-[150%] tracking-normal">
                        i
                    </div>
                    <p className="text-[#707571] font-plus-jakarta  font-normal text-sm leading-[150%] tracking-normal">
                        By enrolling in courses at OIHE, you agree to adhere to these terms and conditions alongside our academic policies.
                        If you have questions regarding your specific agreement, please contact the admissions registry.
                    </p>
                </div>
            </div>

            {/* Accreditations Section */}
            <Accreditations />
        </div>
    );
};

export default TermsAndConditions;

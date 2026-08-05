'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import Accreditations from '@/components/Accreditations';

export default function TermsAndConditionsPage() {
    return (
        <div className="font-sans  min-h-screen">
            <PageHeader
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'About Us', href: '/about-us' },
                    { label: 'Terms And Conditions', href: '/terms' }
                ]}
                title="Terms and Conditions"
                description="Please select and review the appropriate Terms and Conditions document below relative to your student enrollment status."
                hideUnderline={true}
            />

            <div className="w-full bg-[#FAFAF7]">
                <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] py-12 lg:py-20">
                    <div className=" mx-auto">
                        <h2 className="text-[28px] text-[#242D44] mb-4 italic font-semibold" style={{ fontFamily: 'var(--font-dm-serif)' }}>
                            Enrolment Agreements & Policies
                        </h2>
                        <hr className="border-t border-gray-200 mb-8" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {/* International Student Terms and Conditions */}
                            <div className="bg-white p-6 border border-gray-200 hover:shadow-sm transition-shadow flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#F0F4F8] flex items-center justify-center flex-shrink-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2B5592" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <polyline points="10 9 9 9 8 9"></polyline>
                                    </svg>
                                </div>
                                <div className="flex-1 min-w-0 pr-4">
                                    <a href="/policy/Terms_and_Conditions_of_Enrolment_International_Students_2026_YNqdvry_jtW06bD.pdf" target="_blank" rel="noopener noreferrer" className="text-[#2B5592] text-[16px] font-medium leading-tight mb-2 hover:underline inline-block">
                                        International Student Terms and Conditions
                                    </a>
                                    <p className="text-[#6B7280] text-[13px] leading-relaxed">
                                        Applicable for overseas students studying on a student visa. PDF Document.
                                    </p>
                                </div>
                                <a href="/policy/Terms_and_Conditions_of_Enrolment_International_Students_2026_YNqdvry_jtW06bD.pdf" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-gray-200 flex items-center justify-center flex-shrink-0 text-[#2B5592] hover:bg-gray-50 transition-colors">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </a>
                            </div>

                            {/* Australian Students Terms and Conditions */}
                            <div className="bg-white p-6 border border-gray-200 hover:shadow-sm transition-shadow flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#F0F4F8] flex items-center justify-center flex-shrink-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2B5592" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <polyline points="10 9 9 9 8 9"></polyline>
                                    </svg>
                                </div>
                                <div className="flex-1 min-w-0 pr-4">
                                    <a href="/policy/Terms_and_Conditions_of_Enrolment_Domestic_Students_2026_MLvSHSs.pdf" target="_blank" rel="noopener noreferrer" className="text-[#2B5592] text-[16px] font-medium leading-tight mb-2 hover:underline inline-block">
                                        Australian Students Terms and Conditions
                                    </a>
                                    <p className="text-[#6B7280] text-[13px] leading-relaxed">
                                        Applicable for domestic students, citizens, and permanent residents. PDF Document.
                                    </p>
                                </div>
                                <a href="/policy/Terms_and_Conditions_of_Enrolment_Domestic_Students_2026_MLvSHSs.pdf" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-gray-200 flex items-center justify-center flex-shrink-0 text-[#2B5592] hover:bg-gray-50 transition-colors">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Bottom Info Box */}
                        <div className="bg-white p-5 border border-gray-200 flex items-start gap-3">
                            <div className="text-[#6B7280] mt-0.5">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="16" x2="12" y2="12"></line>
                                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                </svg>
                            </div>
                            <p className="text-[#89939E] text-[13px] leading-relaxed">
                                By enrolling in courses at OIHE, you agree to adhere to these terms and conditions alongside our academic policies. If you have questions regarding your specific agreement, please contact the admissions registry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Accreditations />
        </div>
    );
}

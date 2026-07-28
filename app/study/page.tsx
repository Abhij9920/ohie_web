'use client';

import React from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Accreditations from '@/components/Accreditations';
import { postgradCourses, undergradCourses } from '@/constants/navData';

export default function StudyPage() {
    return (
        <div className="font-sans bg-[#F9FAFB] min-h-screen">
            <PageHeader
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Study', href: '/study' }
                ]}
                title="All Programmes"
                description="Explore our range of undergraduate and postgraduate programmes designed to shape tomorrow's leaders, today."
                hideUnderline={false}
            />

            <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px] xl:px-[100px] py-16 lg:py-24">
                {/* Postgraduate Section */}
                <div className="mb-16">
                    <h2 className="text-[32px] text-[#0B1F4A] mb-8 font-semibold italic" style={{ fontFamily: 'var(--font-dm-serif)' }}>
                        Postgraduate Programmes
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {postgradCourses.map((course, idx) => (
                            <Link href={course.href} key={idx} className="group bg-white border border-gray-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                                <div>
                                    <div className="w-10 h-10 bg-[#4D97E6]/10 text-[#4D97E6] flex items-center justify-center mb-4">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-[#0B1F4A] text-[18px] font-semibold mb-3 group-hover:text-[#4D97E6] transition-colors leading-snug">
                                        {course.name}
                                    </h3>
                                </div>
                                <div className="mt-6 flex items-center gap-2 text-[#4D97E6] font-semibold text-[14px] group-hover:gap-3 transition-all">
                                    View Programme
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Undergraduate Section */}
                <div>
                    <h2 className="text-[32px] text-[#0B1F4A] mb-8 font-semibold italic" style={{ fontFamily: 'var(--font-dm-serif)' }}>
                        Undergraduate Programmes
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {undergradCourses.map((course, idx) => (
                            <Link href={course.href} key={idx} className="group bg-white border border-gray-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                                <div>
                                    <div className="w-10 h-10 bg-[#4D97E6]/10 text-[#4D97E6] flex items-center justify-center mb-4">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-[#0B1F4A] text-[18px] font-semibold mb-3 group-hover:text-[#4D97E6] transition-colors leading-snug">
                                        {course.name}
                                    </h3>
                                </div>
                                <div className="mt-6 flex items-center gap-2 text-[#4D97E6] font-semibold text-[14px] group-hover:gap-3 transition-all">
                                    View Programme
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <Accreditations />
        </div>
    );
}

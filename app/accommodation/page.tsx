"use client";

import Accreditations from '@/components/Accreditations';
import Image from 'next/image';
import React, { useState } from 'react';
import { accommodationData } from '@/constants/accommodationData';



const Accommodation: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'shortTerm' | 'longTerm'>('shortTerm');
    const cards = accommodationData[activeTab];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-[#0B1F4A] text-white">
                <div className="w-full flex flex-col lg:flex-row items-center">

                    {/* Left Content */}
                    <div className="lg:w-1/2 px-8 lg:px-16 py-16 space-y-[20px]">
                        <div className="max-w-7xl mx-auto text-[#4D97E6] font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-none tracking-[1.5px] capitalize">
                            Home / Student Life / Accommodation
                        </div>
                        <h1
                            style={{
                                fontFamily: 'DM Serif Display',
                                fontWeight: 400,
                                fontStyle: 'italic',
                                fontSize: '52px',
                                lineHeight: '100%',
                                letterSpacing: '0%',
                            }}
                        >
                            Accommodation
                        </h1>
                        <p
                            style={{
                                width: '562px',
                                fontFamily: 'Plus Jakarta Sans',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '150%',
                                letterSpacing: '0%',
                                opacity: 1,
                            }}
                            className="text-[#FAFAF7]"
                        >
                            Find your home away from home while studying in Melbourne. We offer
                            tailored support to find secure, convenient, and friendly living arrangements.
                        </p>
                    </div>

                    {/* Right Image - No extra padding/margin */}
                    <div className="lg:w-1/2 relative w-full h-[400px] lg:h-[460px] overflow-hidden">
                        <Image
                            src="/acc_hero.png"
                            alt="Student Accommodation in Melbourne"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>

                </div>
            </section>

            {/* Homestay Section */}
            <section className="bg-[#FAFAF7] py-14 px-[170px]">
                <div className="max-w-[1100px] mx-auto">
                    <p className="text-[15px] font-['Plus_Jakarta_Sans'] font-normal  leading-[160%] tracking-normal  mb-4">
                        Homestay is an enriching once in a lifetime experience. Get a real feel for the Australian lifestyle
                        and learn directly from your home stay family all the joys of traditional Aussie culture.
                        Homestay is also the perfect way for students to quickly improve their English. Many students
                        have made lifelong bonds with their homestay families and share many happy memories.
                    </p>
                    <p className="text-[15px] font-['Plus_Jakarta_Sans'] font-normal  leading-[160%] tracking-normal  mb-6">
                        The Homestay Program is arranged by our student services staff who carefully match you with a
                        suitable family. We ensure all accommodation provides a safe, comfortable and caring environment.
                    </p>
                    <div className="bg-[#EAEEF1] border-l-[3px] border-[#C8D7E0] p-4 rounded">
                        <span className="text-[15px] font-['Plus_Jakarta_Sans'] font-normal  leading-[160%] tracking-normal">
                            Oxford Institute Of Higher Education is happy to book any of the below accommodations on your behalf,
                            should you require any assistance. Please contact:{' '}
                        </span>
                        <a
                            href="mailto:info@oxford.edu.au"
                            className="text-[#007BFF] underline hover:text-[#0056b3] transition-colors"
                        >
                            info@oxford.edu.au
                        </a>
                    </div>
                </div>
            </section>

            {/* Browse Stays */}
            <section className="bg-[#FAFAF7] py-12 px-[170px]">
                <div className="max-w-[1100px] mx-auto">
                    {/* Header */}
                    <h2 className="text-[#2463A7]  font-semibold">Accommodation</h2>
                    <div className="flex justify-between items-center mb-6">

                        <h2 className="text-[36px] font-[family-name:var(--font-dm-serif)] italic">
                            Browse Stays
                        </h2>
                        <div className="flex flex-col items-end gap-2">
                            <span className="bg-white border border-[#C8D5E0] rounded-full px-3 py-1 text-[14px]">
                                {cards.length} properties
                            </span>
                        </div>

                    </div>

                    {/* Tabs */}
                    <div className="flex justify-center mb-8 gap-0">
                        <button
                            onClick={() => setActiveTab('shortTerm')}
                            className={`w-[280px] h-[44px] border border-[#C8D5E0] font-medium transition-colors ${
                                activeTab === 'shortTerm'
                                    ? 'bg-[#2463A7] text-white'
                                    : 'bg-white text-[#2463A7]'
                            }`}
                        >
                            Short Term
                        </button>
                        <button
                            onClick={() => setActiveTab('longTerm')}
                            className={`w-[280px] h-[44px] border border-[#C8D5E0] font-medium transition-colors ${
                                activeTab === 'longTerm'
                                    ? 'bg-[#2463A7] text-white'
                                    : 'bg-white text-[#2463A7]'
                            }`}
                        >
                            Long Term
                        </button>
                    </div>

                    {/* Cards Grid - 2 rows x 3 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className="bg-[#F7F9FA] border border-[#C8D2E0] rounded flex flex-col group hover:shadow-xl transition-shadow duration-300"
                            >
                                {/* Card Header */}
                                <div className="bg-[#0B1F4A] px-5 py-4" style={{
                                    width: '100%',
                                    minHeight: '150px',        // Good height for header
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                }}>
                                    <h5 className="text-[18px] text-[#4D97E6] font-semibold mb-1">{card.title}</h5>
                                    <p className="text-[14px] text-[#ffffff] font-semibold m-0">{card.price}</p>
                                </div>

                                {/* Card Body */}
                                < div className="py-5 px-4 flex flex-col flex-1" >
                                    <p className="text-[14px] text-gray-700 mb-3">
                                        <strong className="text-[12px] text-[#0B1F4A] uppercase tracking-wider">Address</strong>
                                        <br />
                                        {card.address}
                                    </p>
                                    <hr className="my-3" style={{ borderColor: '#D9E3E8' }} />
                                    <p className="text-[14px] text-gray-700 mb-3">
                                        <strong className="text-[12px] text-[#0B1F4A] uppercase tracking-wider">Phone</strong>
                                        <br />
                                        {card.phone}
                                    </p>
                                    <hr className="my-3" style={{ borderColor: '#D9E3E8' }} />
                                    <p className="text-[14px] text-gray-700 mb-3">
                                        <strong className="text-[12px] text-[#0B1F4A] uppercase tracking-wider">Internet Fees</strong>
                                        <br />
                                        {card.internet}
                                    </p>
                                    <hr className="my-3" style={{ borderColor: '#D9E3E8' }} />
                                    <p className="text-[14px] text-gray-700 mb-3">
                                        <strong className="text-[12px] text-[#0B1F4A] uppercase tracking-wider">Maximum Weeks</strong>
                                        <br />
                                        {card.maximumWeeks}
                                    </p>
                                    <hr className="my-3" style={{ borderColor: '#D9E3E8' }} />
                                    <p className="text-[14px] text-gray-700 mb-3">
                                        <strong className="text-[12px] text-[#0B1F4A] uppercase tracking-wider">Special Facilities</strong>
                                        <br />
                                        {card.facilities}
                                    </p>
                                    <hr className="my-3" style={{ borderColor: '#D9E3E8' }} />
                                </div>

                                {/* Card Footer */}
                                <div className="px-5 pb-5 pt-0">
                                    <a href="#" className="text-[#2463A7] font-semibold text-[14px] hover:underline">
                                        View Details →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div >
            </section >
            <Accreditations />
        </div >
    );
};

export default Accommodation;

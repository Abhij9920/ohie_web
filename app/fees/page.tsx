'use client';

import React, { useState, useEffect } from 'react';
import PageHeader from '@/components/PageHeader';
import Accreditations from '@/components/Accreditations';

const PaymentMethods = () => {
    const [openSection, setOpenSection] = useState<number | null>(1);

    const toggleSection = (id: number) => {
        setOpenSection(openSection === id ? null : id);
    };

    const accordionItems = [
        {
            id: 1,
            title: "Online Payment – Institute of Higher Education",
            content: (
                <div className="pt-2 pb-6 px-6">
                    <a href="http://www.payway.com.au/MakePayment?BillerCode=140145" className="text-[#4D97E6] text-[16px] hover:underline mb-6 block font-medium">
                        Click here to make a payment
                    </a>
                    <h5 className="text-[12px] font-bold text-[#0B1F4A] uppercase tracking-wider mb-3">SECURITY POLICY</h5>
                    <p className="text-[14px] text-[#6B7280] leading-relaxed">
                        All credit card data is securely transmitted through 128 bit SSL (Secure Socket Layer) encryption. SSL is an industry standard technology. Information sent between your browser and the bank is encrypted and secure. Our Online Banking uses Extended Validation Certificates so you can verify you are connected to a legitimate Westpac website to protect the confidentiality and integrity of your information. Current Students please quote your student number, which is your account reference number in the Reference Number box. New Students please enter your full name and contact us once payment has been made to arrange your enrolment details.
                    </p>
                </div>
            )
        },
        {
            id: 2,
            title: "Direct Deposit / Telegraphic Transfer",
            content: (
                <div className="pt-2 pb-6 px-6 text-[#6B7280] text-[14px]">
                    <p className="mb-6 leading-relaxed">
                        Please visit your local National Australia Bank Branch to pay by cash, cheque and EFTPOS (see below for banking details). Alternatively the same information can be found on your offer letter or invoice. It is important to provide the deposit evidence and student enrolment details to the Accounts Office for identification purposes.<br />
                        Transfer/remittance evidence and student enrolment details must be provided to the Accounts Office for identification purpose.
                    </p>

                    <div className="mb-6">
                        <h6 className="font-semibold text-[#1F2937] italic mb-2">Institute of Higher Education</h6>
                        <div className="space-y-1">
                            <p><span className="font-semibold text-[#1F2937]">Account Name:</span> Ozford Institute of Higher Education</p>
                            <p><span className="font-semibold text-[#1F2937]">Bank:</span> National Australia Bank</p>
                            <p><span className="font-semibold text-[#1F2937]">BSB No.:</span> 083-266</p>
                            <p><span className="font-semibold text-[#1F2937]">Account No.:</span> 247-534-960</p>
                            <p><span className="font-semibold text-[#1F2937]">Branch Address:</span> 500 Bourke St, Melbourne VIC 3000, Australia</p>
                            <p><span className="font-semibold text-[#1F2937]">SWIFT Code:</span> NATAAU3303M</p>
                        </div>
                    </div>

                    <hr className="border-gray-200 mb-6" />

                    <div className="mb-6">
                        <h6 className="font-semibold text-[#1F2937] italic mb-2">Institute of Higher Education (Brisbane)</h6>
                        <div className="space-y-1">
                            <p><span className="font-semibold text-[#1F2937]">Account Name:</span> OIHE Brisbane</p>
                            <p><span className="font-semibold text-[#1F2937]">Bank:</span> National Australia Bank</p>
                            <p><span className="font-semibold text-[#1F2937]">BSB No.:</span> 083-004</p>
                            <p><span className="font-semibold text-[#1F2937]">Account No.:</span> 921744215</p>
                            <p><span className="font-semibold text-[#1F2937]">Branch Address:</span> 395, Bourke St, Melbourne VIC 3000, Australia</p>
                            <p><span className="font-semibold text-[#1F2937]">SWIFT Code:</span> NATAAU3303M</p>
                        </div>
                    </div>

                    <hr className="border-gray-200 mb-6" />

                    <div>
                        <h6 className="font-semibold text-[#1F2937] italic mb-2">ELICOS (English Language Centre)</h6>
                        <div className="space-y-1">
                            <p><span className="font-semibold text-[#1F2937]">Account Name:</span> Ozford Education Group Pty Ltd</p>
                            <p><span className="font-semibold text-[#1F2937]">Bank:</span> National Australia Bank</p>
                            <p><span className="font-semibold text-[#1F2937]">BSB No.:</span> 083-266</p>
                            <p><span className="font-semibold text-[#1F2937]">Account No.:</span> 395-164-957</p>
                            <p><span className="font-semibold text-[#1F2937]">Branch Address:</span> 500 Bourke St, Melbourne VIC 3000, Australia</p>
                            <p><span className="font-semibold text-[#1F2937]">SWIFT Code:</span> NATAAU3303M</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 3,
            title: "Visit Our Account Office",
            content: (
                <div className="pt-2 pb-6 px-6 text-[#6B7280] text-[14px]">
                    <p className="leading-relaxed">
                        Take your offer letter or invoice to our accounts office located on Level 5 333, Queens Street Melbourne, VIC 3000. We accept cheques, EFTPOS and credit cards (MasterCard and Visa), <br />
                        <span className="font-bold text-[#1F2937]">WE DO NOT ACCEPT CASH</span>
                    </p>
                </div>
            )
        },
        {
            id: 4,
            title: "Pay by Mail",
            content: (
                <div className="pt-2 pb-6 px-6 text-[#6B7280] text-[14px]">
                    <p className="leading-relaxed">
                        Original cheques, bank drafts and money orders can be mailed to the Accounts Office. Please provide student enrolment details with the payment. Cheque title can be made out as "OZFORD EDUCATION GROUP". Cheques require 3 working days to clear.
                    </p>
                </div>
            )
        }
    ];

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-[11px] font-semibold text-[#4D97E6] uppercase tracking-widest">PAYMENT METHODS</div>
            <h3 className="text-[32px] text-[#0B1F4A] mb-8 " style={{ fontFamily: 'var(--font-dm-serif)' }}>How to Pay</h3>

            <div className="space-y-0  border border-gray-100 rounded-xl overflow-hidden bg-white">
                {accordionItems.map((item, index) => (
                    <div key={item.id} className={index !== 0 ? 'border-t border-gray-100' : ''}>
                        <button
                            type="button"
                            onClick={() => toggleSection(item.id)}
                            className="w-full px-6 py-5 flex justify-between items-center text-left bg-white cursor-pointer transition-colors"
                        >
                            <span className="font-medium text-[13px] text-[#0B1F4A]">{item.title}</span>
                            <span className="text-2xl font-light text-[#4D97E6] leading-none flex items-center justify-center w-6 h-6">
                                {openSection === item.id ? '−' : '+'}
                            </span>
                        </button>
                        {openSection === item.id && (
                            <div className="animate-in text-[#6B7280] slide-in-from-top-2 duration-200">
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const HigherEducationFees = ({ studentType }: { studentType: 'domestic' | 'international' }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [activeTab, setActiveTab] = useState<'tuition' | 'other'>('tuition');

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-[11px] font-semibold text-[#4D97E6] uppercase tracking-widest">FEES</div>
            <h3 className="text-[32px] text-[#0B1F4A] mb-8" style={{ fontFamily: 'var(--font-dm-serif)' }}>
                Higher Education Fees
            </h3>

            <div className="border border-gray-200 bg-white ">
                {/* Accordion Header */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full bg-[#0B1F4A] text-white px-6 py-4 flex justify-between items-center transition-colors"
                >
                    <span className="font-medium text-[15px]">
                        Higher Education Fee ({studentType === 'domestic' ? 'Domestic Students' : 'International Students'})
                    </span>
                    <span className="text-xl font-light leading-none">
                        {isExpanded ? '−' : '+'}
                    </span>
                </button>

                {/* Accordion Content */}
                {isExpanded && (
                    <div className="animate-in slide-in-from-top-2 duration-200">
                        {/* Tabs */}
                        <div className="flex flex-col sm:flex-row my-3 bg-white gap-2 sm:gap-0">
                            <button
                                onClick={() => setActiveTab('tuition')}
                                className={`flex-1 sm:flex-none cursor-pointer w-full sm:w-1/2 md:w-64 py-3 text-[15px] transition-colors ${activeTab === 'tuition'
                                    ? 'bg-[#4D97E6] text-white'
                                    : 'bg-white text-[#4D97E6] hover:bg-blue-50 border border-transparent sm:border-r-[#E5E7EB]'
                                    }`}
                            >
                                Tuition Fee
                            </button>
                            <button
                                onClick={() => setActiveTab('other')}
                                className={`flex-1 sm:flex-none cursor-pointer w-full sm:w-1/2 md:w-64 py-3 text-[15px] transition-colors ${activeTab === 'other'
                                    ? 'bg-[#4D97E6] text-white'
                                    : 'bg-white text-[#4D97E6] hover:bg-blue-50'
                                    }`}
                            >
                                Other Non Tuition Fee
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="p-0">
                            {activeTab === 'tuition' ? (() => {
                                type TableRow = { col1: string; col2: string; col3: string; col4: string; col5?: string };
                                const tableConfig: { headers: string[], rows: TableRow[] } = studentType === 'international' ? {
                                    headers: ['PROGRAM', 'CRICOS', 'COURSE DURATION', 'OFFSHORE FEE', 'ONSHORE FEE'],
                                    rows: [
                                        { col1: 'Higher Ed Diploma of Business', col2: '088194B', col3: '2 Trimesters', col4: '$19,500', col5: '$15,000' },
                                        { col1: 'Bachelor of Business', col2: '088192D', col3: '6 Trimesters', col4: '$58,500', col5: '$36,000' },
                                        { col1: 'Bachelor of Business (Accounting)', col2: '088193C', col3: '6 Trimesters', col4: '$58,500', col5: '$45,000' },
                                        { col1: 'Graduate Cert in Management', col2: '108433M', col3: '1 Trimester', col4: '$10,250', col5: '$8,000' },
                                        { col1: 'Graduate Diploma in Management', col2: '107424J', col3: '2 Trimesters', col4: '$20,500', col5: '$16,000' },
                                        { col1: 'Master in Business Administration', col2: '107422M', col3: '4 Trimesters', col4: '$41,000', col5: '$28,000' },
                                        { col1: 'Master of Professional Accounting', col2: '107423K', col3: '4 Trimesters', col4: '$41,000', col5: '$32,000' },
                                        { col1: 'Bachelor of Cyber Security', col2: '113297E', col3: '6 Trimesters', col4: '$58,500', col5: '$45,000' },
                                        { col1: 'Bachelor of Information Systems', col2: '113296F', col3: '6 Trimesters', col4: '$58,500', col5: '$45,000' },
                                        { col1: 'Graduate Cert in IT', col2: '115638F', col3: '1 Trimester', col4: '$10,250', col5: '$8,000' },
                                        { col1: 'Graduate Diploma in IT', col2: '115640A', col3: '2 Trimesters', col4: '$20,500', col5: '$16,000' },
                                        { col1: 'Master of Information Technology', col2: '115641M', col3: '4 Trimesters', col4: '$41,000', col5: '$32,000' },
                                        { col1: 'Graduate Diploma in Early Childhood Education', col2: '120675C', col3: '2 Trimesters', col4: '$35,000', col5: '$24,000' },
                                        { col1: 'Master of Teaching (Early Childhood)', col2: '120676B', col3: '4 Trimesters', col4: '$60,000', col5: '$48,000' },
                                    ]
                                } : {
                                    headers: ['PROGRAM', 'CRICOS', 'COURSE DURATION', 'ONSHORE FEE'],
                                    rows: [
                                        { col1: 'Higher Ed Diploma of Business', col2: '088194B', col3: '2 Trimesters', col4: '$15,000' },
                                        { col1: 'Bachelor of Business', col2: '088192D', col3: '6 Trimesters', col4: '$36,000' },
                                        { col1: 'Bachelor of Business (Accounting)', col2: '088193C', col3: '6 Trimesters', col4: '$45,000' },
                                        { col1: 'Graduate Cert in Management', col2: '108433M', col3: '1 Trimester', col4: '$8,000' },
                                        { col1: 'Graduate Diploma in Management', col2: '107424J', col3: '2 Trimesters', col4: '$16,000' },
                                        { col1: 'Master in Business Administration', col2: '107422M', col3: '4 Trimesters', col4: '$28,000' },
                                        { col1: 'Master of Professional Accounting', col2: '107423K', col3: '4 Trimesters', col4: '$32,000' },
                                        { col1: 'Bachelor of Cyber Security', col2: '113297E', col3: '6 Trimesters', col4: '$45,000' },
                                        { col1: 'Bachelor of Information Systems', col2: '113296F', col3: '6 Trimesters', col4: '$45,000' },
                                        { col1: 'Graduate Cert in IT', col2: '115638F', col3: '1 Trimester', col4: '$8,000' },
                                        { col1: 'Graduate Diploma in IT', col2: '115640A', col3: '2 Trimesters', col4: '$16,000' },
                                        { col1: 'Master of Information Technology', col2: '115641M', col3: '4 Trimesters', col4: '$32,000' },
                                        { col1: 'Graduate Diploma in Early Childhood Education', col2: '120675C', col3: '2 Trimesters', col4: '$24,000' },
                                        { col1: 'Master of Teaching (Early Childhood)', col2: '120676B', col3: '4 Trimesters', col4: '$24,000' },
                                    ]
                                };

                                return (
                                    <div className="overflow-x-auto p-0">
                                        <table className="w-full text-left text-[13px]">
                                            <thead className="bg-[#0B1F4A] text-white text-[11px] uppercase tracking-wider">
                                                <tr>
                                                    {tableConfig.headers.map((h, i) => (
                                                        <th key={i} className="py-4 px-6 font-semibold whitespace-nowrap">{h}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tableConfig.rows.map((row, i) => (
                                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}>
                                                        <td className="py-4 px-6 text-[#1F2937] font-semibold">{row.col1}</td>
                                                        <td className="py-4 px-6 text-[#6B7280]">{row.col2}</td>
                                                        <td className="py-4 px-6 text-[#6B7280]">{row.col3}</td>
                                                        <td className="py-4 px-6 text-[#6B7280]">{row.col4}</td>
                                                        {row.col5 && <td className="py-4 px-6 text-[#6B7280]">{row.col5}</td>}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                );
                            })() : (
                                <div className="p-4 md:p-6">
                                    <p className="text-[#4B5563] text-[14px] leading-relaxed mb-6">
                                        In addition to the Course Tuition fees, you may be charged for the following non-tuition fees in relation to your enrolment, as applicable for services requested and provided for you.
                                    </p>
                                    <div className="overflow-x-auto p-0">
                                        <table className="w-full text-left text-[13px]">
                                            <thead className="bg-[#0B1F4A] text-white text-[11px] uppercase tracking-wider">
                                                <tr>
                                                    <th className="py-4 px-6 font-semibold whitespace-nowrap">HIGHER EDUCATION COURSES</th>
                                                    <th className="py-4 px-6 font-semibold whitespace-nowrap">
                                                        {studentType === 'international' ? 'INTERNATIONAL STUDENT ON STUDENT VISA' : 'DOMESTIC STUDENT (FULL FEE PAYING)'}
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {(studentType === 'international' ? [
                                                    { name: 'Application Fee', fee: '$500' },
                                                    { name: 'Overseas Student Health Cover (Single)', fee: 'Depends on course duration' },
                                                    { name: 'Materials and Resources (Excluding stationary)', fee: '$350 per trimester' },
                                                    { name: 'Airport Pick Up (One way) ($30 extra for flight arriving between 11pm-5am)', fee: '$300 per person (optional)' },
                                                    { name: 'Reissue of Award/Certificate', fee: '$75 per copy' },
                                                    { name: 'Reissue of Transcript', fee: '$75 per copy' },
                                                    { name: 'Reissue of Completion Letter', fee: '$75 per copy' },
                                                    { name: 'Replacement of Student Card', fee: '$40' },
                                                    { name: 'RPL Assessment', fee: '$500 each unit' },
                                                    { name: 'Unit Repeat Cost', fee: 'Changes per unit' },
                                                    { name: 'Extension of Duration Fees', fee: 'Changes per unit' },
                                                    { name: 'Internal Course Transfer Fee', fee: '$200' },
                                                    { name: 'Incorrect banking details which lead to banking transaction failure, an administration fee is payable', fee: '$250 per transaction failure' },
                                                    { name: 'Campus Transfer processing fees', fee: '$250' },
                                                ] : [
                                                    { name: 'Application Fee', fee: '$280' },
                                                    { name: '2025 Overseas Student Health Cover (Single)', fee: 'Nil' },
                                                    { name: 'Materials and Resources (Excluding stationary)', fee: '$350 per semester' },
                                                    { name: 'Homestay Placement', fee: 'Nil' },
                                                    { name: 'Homestay Fee', fee: 'Nil' },
                                                    { name: 'Airport Pick Up (One way) ($30 extra for flight arriving between 11pm-5am)', fee: 'Nil' },
                                                    { name: 'Reissue of Award/Certificate', fee: 'Nil' },
                                                    { name: 'Reissue of Transcript', fee: 'Nil' },
                                                    { name: 'Reissue of Completion Letter', fee: 'Nil' },
                                                    { name: 'Replacement of Student Card', fee: 'Nil' },
                                                    { name: 'BPL Assessment', fee: 'Nil' },
                                                    { name: 'Credit Transfer', fee: 'Nil' },
                                                    { name: 'Supplementary Assessment', fee: 'Nil' },
                                                    { name: 'External Appeal Fees', fee: 'Nil' },
                                                    { name: 'Unit Repeat Cost', fee: 'Changes per unit' },
                                                    { name: 'Interim Academic Transcript', fee: 'Nil' },
                                                    { name: 'Extension of Duration Fees', fee: 'Changes per unit' },
                                                    { name: 'Internal Course Transfer Fee', fee: 'Nil' },
                                                ]).map((row, i) => (
                                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}>
                                                        <td className="py-4 px-6 text-[#1F2937] font-semibold">{row.name}</td>
                                                        <td className="py-4 px-6 text-[#6B7280]">{row.fee}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {/* Footer text */}
                            {activeTab === 'tuition' && (
                                <div className="p-6 bg-white border-t border-gray-100 text-[#9CA3AF] text-[12px]">
                                    Note: Fees shown are total course fees for the full duration of study. Fees are indicative and subject to change. Fees are reviewed annually and may vary over the duration of your course.
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const DueDates = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    const dates = [
        { intake: 'Trimester 1 2026', type: 'main', studyPeriod: '02/03/2026 - 17/07/2026', dueDate: '16/12/2025' },
        { intake: 'Mid-Intake 1 2026', type: 'mid', studyPeriod: '27/04/2026 - 17/07/2026', dueDate: '2/02/2026' },
        { intake: 'Trimester 2 2026', type: 'main', studyPeriod: '05/08/2026 - 04/12/2026', dueDate: '11/05/2026' },
        { intake: 'Mid-Intake 2 2026', type: 'mid', studyPeriod: '28/09/2026 - 04/12/2026', dueDate: '29/06/2026' },
        { intake: 'Trimester 3 2026', type: 'main', studyPeriod: '07/12/2026 - 26/02/2027', dueDate: '14/09/2026' },
        { intake: 'Trimester 1 2027', type: 'main', studyPeriod: '01/03/2027 - 16/07/2027', dueDate: '21/12/2026' },
        { intake: 'Mid-Intake 1 2027', type: 'mid', studyPeriod: '26/04/2027 - 16/07/2027', dueDate: '8/02/2027' },
        { intake: 'Trimester 2 2027', type: 'main', studyPeriod: '02/08/2027 - 03/12/2027', dueDate: '10/05/2027' },
        { intake: 'Mid-Intake 2 2027', type: 'mid', studyPeriod: '27/09/2027 - 03/12/2027', dueDate: '28/06/2027' },
        { intake: 'Trimester 3 2027', type: 'main', studyPeriod: '06/12/2027 - 25/02/2028', dueDate: '15/09/2027' },
        { intake: 'Trimester 1 2028', type: 'main', studyPeriod: '06/03/2028 - 21/07/2028', dueDate: '21/12/2027' },
        { intake: 'Mid-Intake 1 2028', type: 'mid', studyPeriod: '01/05/2028 - 21/07/2028', dueDate: '8/02/2028' },
        { intake: 'Trimester 2 2028', type: 'main', studyPeriod: '31/07/2028 - 31/12/2028', dueDate: '10/05/2028' },
        { intake: 'Mid-Intake 2 2028', type: 'mid', studyPeriod: '25/09/2028 - 31/12/2028', dueDate: '28/06/2028' },
        { intake: 'Trimester 3 2028', type: 'main', studyPeriod: '04/12/2028 - 02/03/2029', dueDate: '15/09/2028' },
    ];

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-[11px] font-semibold text-[#4D97E6] uppercase tracking-widest mb-2">SCHEDULE</div>
            <h3 className="text-[36px] text-[#0B1F4A] mb-8" style={{ fontFamily: 'var(--font-dm-serif)' }}>Payment Due Dates</h3>

            <div className="border border-gray-200 bg-white ">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full bg-[#0B1F4A] text-white px-6 py-4 flex justify-between items-center transition-colors"
                >
                    <span className="font-medium text-[15px]">
                        Higher Education Payment Due Dates
                    </span>
                    <span className="text-xl font-light leading-none">
                        {isExpanded ? '−' : '+'}
                    </span>
                </button>

                {isExpanded && (
                    <div className="animate-in slide-in-from-top-2 duration-200 overflow-x-auto p-0">
                        <table className="w-full text-left text-[13px]">
                            <thead className="bg-[#2463A7] text-white text-[11px] uppercase tracking-wider">
                                <tr>
                                    <th className="py-4 px-6 font-semibold whitespace-nowrap">INTAKE DATE</th>
                                    <th className="py-4 px-6 font-semibold whitespace-nowrap">STUDY PERIOD</th>
                                    <th className="py-4 px-6 font-semibold whitespace-nowrap">DUE DATE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dates.map((row, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}>
                                        <td className={`py-4 px-6 font-semibold ${row.type === 'mid' ? 'text-[#4D97E6]' : 'text-[#1F2937]'}`}>
                                            {row.intake}
                                        </td>
                                        <td className="py-4 px-6 text-[#6B7280]">{row.studyPeriod}</td>
                                        <td className="py-4 px-6 text-[#6B7280]">{row.dueDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default function FeesPage() {
    const [activeSection, setActiveSection] = useState('payment-methods');
    const [studentType, setStudentType] = useState<'domestic' | 'international'>('domestic');

    const navItems = [
        { id: 'payment-methods', label: 'Payment Methods' },
        { id: 'higher-education', label: 'Higher Education Fees' },
        { id: 'due-dates', label: 'Payment Due Dates' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            let current = 'payment-methods';
            for (const section of sections) {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    // Consider it active if its top is above 300px from the top of the viewport
                    if (rect.top <= 300) {
                        current = section.id;
                    }
                }
            }
            if (current !== activeSection) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -120; // Adjust for sticky header
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="font-sans bg-[#F9FAFB] min-h-screen">
            <PageHeader
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Admission', href: '#' },
                    { label: 'Fees and payments', href: '/fees' }
                ]}
                title="2026 Fees"
                hideUnderline={true}
            />

            <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px] xl:px-[100px] py-12 lg:py-20 flex flex-col lg:flex-row items-start">

                {/* Left Sticky Sidebar Navigation */}
                <div className="w-full lg:w-64 flex-shrink-0 lg:sticky lg:top-32 self-start mb-8 lg:mb-0">
                    <nav className="flex flex-col space-y-2 border-l-2 border-gray-200 py-2">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-left px-5 py-2.5 text-[15px] transition-all relative -ml-[2px] ${activeSection === item.id
                                    ? 'text-[#0B1F4A] font-semibold border-l-2 border-[#4D97E6]'
                                    : 'text-[#6B7280] hover:text-[#0B1F4A] border-l-2 border-transparent hover:border-gray-300'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Right Main Content */}
                <div className="flex-1 w-full min-w-0 lg:pl-16">

                    {/* The "I am a..." Selector Box */}
                    <div className="bg-white border border-[#2463A780] p-8 flex flex-col items-center justify-center text-center  mb-16 relative overflow-hidden">
                        {/* Decorative background elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#4D97E6]/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#E8903A]/5 rounded-full blur-2xl -ml-10 -mb-10"></div>

                        <h2 className="text-[28px] md:text-[32px] text-[#0B1F4A] mb-8 italic relative z-10" style={{ fontFamily: 'var(--font-dm-serif)' }}>
                            I am a...
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8 relative z-10 w-full sm:w-auto">
                            <button
                                onClick={() => setStudentType('domestic')}
                                className={`px-6 md:px-8 py-3.5 border-2 flex items-center justify-center gap-3 font-medium transition-all duration-300 w-full sm:w-auto ${studentType === 'domestic'
                                    ? 'bg-[#0B1F4A] text-white border-[#0B1F4A] '
                                    : 'bg-white text-[#0B1F4A] border-[#0B1F4A] hover:bg-[#0B1F4A] hover:text-white'
                                    }`}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 14L22 9L12 4L2 9L12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 11V16C6 17.6569 8.68629 19 12 19C15.3137 19 18 17.6569 18 16V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Domestic Student
                            </button>

                            <button
                                onClick={() => setStudentType('international')}
                                className={`px-6 md:px-8 py-3.5 border-2 flex items-center justify-center gap-3 font-medium transition-all duration-300 w-full sm:w-auto ${studentType === 'international'
                                    ? 'bg-[#0B1F4A] text-white border-[#0B1F4A]'
                                    : 'bg-white text-[#0B1F4A] border-[#0B1F4A] hover:bg-[#0B1F4A] hover:text-white'
                                    }`}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                International Student
                            </button>
                        </div>

                        <p className="text-[12px] text-[#999999] italic relative z-10 max-w-none mx-auto">
                            Select your student type to view relevant fees, entry requirements and support services
                        </p>
                    </div>

                    {/* Dynamic Section Content */}
                    <div className="flex flex-col gap-24 min-h-[400px]">
                        <div id="payment-methods" className="scroll-mt-32">
                            <PaymentMethods />
                        </div>
                        <div id="higher-education" className="scroll-mt-32">
                            <HigherEducationFees studentType={studentType} />
                        </div>
                        <div id="due-dates" className="scroll-mt-32">
                            <DueDates />
                        </div>
                    </div>

                </div>
            </div>
            <Accreditations />
        </div>
    );
}

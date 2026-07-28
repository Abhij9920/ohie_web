"use client";
import { useState } from 'react';

const staysData = {
    shortTerm: [
        {
            name: "Urban Central",
            link: "http://www.urbancentral.com.au/",
            price: "Price N/A",
            address: "334 City Road Southbank, Melbourne",
            phone: "1800 631 288",
            internet: "Free & paid WIFI",
            maxWeeks: "No",
            facilities: "Special facilities such as Free Daily Breakfast, Free Tea, Coffee, Pasta and Rice and other cheap meals Sunday – Thursday, as well as linens and towels are only provided for particular groups."
        },
        {
            name: "Space Hotel",
            link: "http://www.spacehotel.com.au/",
            price: "From $420 PER WEEK for a single room",
            address: "380 Russell Street, Melbourne",
            phone: "1800 670 611",
            internet: "Internet Café With 16 computers available",
            maxWeeks: "No",
            facilities: "Jacuzzi, movie space, gym, lounge room, Cyber space, BBQ, free tea and coffee, bar onsite, Foxtel, 24hr reception, kitchen"
        },
        {
            name: "City Centre Budget Hotel",
            link: "http://www.citycentrebudgethotel.com.au/",
            price: "From $560 PER WEEK",
            address: "22 Little Collins St, Melbourne",
            phone: "9654 5401",
            internet: "Free Wi-Fi",
            maxWeeks: "1-3 months depending availability",
            facilities: "Kitchen open 24/7, computer and printers for free, laundry services, roof top with kitchen"
        },
        {
            name: "City Point apartments",
            link: "http://www.shortstayapartments.com.au/",
            price: "From $1190 PER WEEK",
            address: "668 Bourke Street Melbourne",
            phone: "0390200246",
            internet: "Free WiFi",
            maxWeeks: "Subject to availability",
            facilities: "Gym, sauna, secure parking, computers and printers, pool, tennis courts, available, serviced daily."
        },
        {
            name: "Madre Nazarena Student's House",
            link: "https://www.fdz.com.au/",
            price: "Female only Residency From $293 PER WEEK $100 bond",
            address: "311 – 315 Church Street, Richmond",
            phone: "9429 9620",
            internet: "Free WIFI",
            maxWeeks: "Subject to availability",
            facilities: "Study areas, chapel, kitchen, gardens, BBQ area, Laundry area and Parking lots."
        },
        {
            name: "Yarra House",
            link: "http://www.mystudentvillage.com/au/yarra-house/",
            price: "From $256 PER WEEK 36+ – From $293 PER WEEK 16+ From $358 PER WEEK 1+, $75 annual cleaning fee, + 4 week security deposit.",
            address: "10 Yarra Bend Rd, Fairfield",
            phone: "9269 8990",
            internet: "High speed Internet access (Additional fees apply)",
            maxWeeks: "No maximum",
            facilities: "kitchen facilities, laundry facilities and recreational facilities"
        },
        {
            name: "Carlton Student Accommodation",
            link: "http://www.studentaccommodation.com.au/",
            price: "From $245.00 per week ($1060.00 per month)",
            address: "92 Grattan Street, Carlton; 372 Drummond Street, Carlton & 437 Cardigan Street, Carlton",
            phone: "9347 2670",
            internet: "Free Wi- Fi and internet",
            maxWeeks: "52 weeks",
            facilities: "No smoking, fully equipped kitchens, recreational area with TV, lounge and dining areas with coin laundry"
        },
        {
            name: "Melbourne Central YHA",
            link: "https://www.yha.com.au/",
            price: "From $420 PER WEEK",
            address: "562 Flinders Street, Melbourne",
            phone: "9621 2523",
            internet: "Free Wi-Fi",
            maxWeeks: "Subject to availability",
            facilities: "Free movie hire, communal lounges, and roof top BBQ areas, close to free city shuttles, communal kitchen, BBQ, roof top, balcony, laundry,  24 hour reception, cafe, USB hubs, printers, scanner, copier available for use."
        },
        {
            name: "Backpackers United Melbourne",
            link: "http://unitedbackpackers.com.au/",
            price: "From $420 PER WEEK",
            address: "250 Flinders Street, Melbourne",
            phone: "03 9654 2616",
            internet: "FREE Wi-Fi in common areas",
            maxWeeks: "No Maximum",
            facilities: "Funky TV Room filled with beanbags and free DVD hire available, designer kitchen, basement bar, lounge, coin laundry, free luggage storage, 24 hr reception."
        },
        {
            name: "ROOMS INTERNATIONAL-Budget Student Accommodation Melbourne",
            link: "http://www.rooms.net.au/",
            price: "From $290 PER WEEK (gas, electricity and water)",
            address: "77 Bouverie Street, Carlton",
            phone: "9347 1008",
            internet: "3 month contract $110 (allowance of 15GB/month) – Initial set up fee $30 (Usage fees and conditions apply)",
            maxWeeks: "12 months contract",
            facilities: "TVs in common areas, commercial grade coin operated laundry, free use of vacuum cleaners, irons and ironing boards, weighing machines, secure bike storage, dedicated team of staff and live- in resident masters, once a week clearing."
        },
        {
            name: "Ozi House Group",
            link: "http://www.ozihouse.com/",
            price: "N/A Price",
            address: "420 Punt Road South Yarra VIC 3141",
            phone: "9867 6882",
            internet: "free WIFI",
            maxWeeks: "27 Nights",
            facilities: "Dining Room, Coin Laundry, Student Lounge, Study Area, Vending Machine, Bike Storage, gym, pool, reception, sauna, conference room, BBQ."
        },
        {
            name: "Green House Backpackers",
            link: "http://www.greenhousebackpacker.com.au/",
            price: "N/A Prices",
            address: "Level 6, 228 Flinders Lane Melbourne, Victoria Australia 3000",
            phone: "1800 249 207",
            internet: "Free internet access in public areas.",
            maxWeeks: "No Maximum",
            facilities: "Free airport pickups may be arranged on request, Free city tour, Coin operated laundry facilities, Secure safe deposit boxes, Free tea and coffee, Free weekly dinner. All floors and rooms are locked and can only be accessed by key cards, 24 hour reception"
        },
        {
            name: "Hotel Claremont Guest House South Yarra",
            link: "http://www.accommodationforstudents.com.au/contact.htm",
            price: "From $455 PER WEEK",
            address: "189 Toorak Road, South Yarra VIC 3141",
            phone: "1300 301 630",
            internet: "Quality high-speed Internet Access",
            maxWeeks: "No Maximum",
            facilities: "Complimentary tea/coffee/filtered water, TV, telephone and individual heating and fan cooling in all rooms. All linen and towels are provided, breakfast included, internet room, guest lounge, laundry."
        },
        {
            name: "Uni Lodge (Victoria University)",
            link: "https://unilodge.com.au/lodge/vu/",
            price: "From only $172 per week",
            address: "101 Ballarat Road, Footscray, VIC, 3011",
            phone: "+61 3 9687 9830",
            internet: "Rent includes 50GB internet/month",
            maxWeeks: "From 4 weeks to 52 weeks",
            facilities: "Resident common areas including lounges with TVs, games, pool table, table tennis, Video Theatrette – soundproofed, Foxtel cable TV, X-Box, PlayStation and Audio system, large gourmet kitchens and dining area, study rooms, roof top terrace, basketball courts, bicycle park, laundry, onsite staff, onsite cafe."
        }
    ],
    longTerm: [
        {
            name: "Rooms International",
            link: "http://www.rooms.net.au/",
            price: "From $320 PER WEEK, Bond: 1 month rent",
            address: "77 Bouverie Street, Carlton",
            phone: "9347 1008",
            internet: "3 month contract $110 (allowance of 15GB/month)–Initial set up fee $30 (Usage fees and conditions apply)",
            maxWeeks: "1 year",
            facilities: "Rent includes all utility charges, coin laundry, fully equipped kitchens, weekly room cleaning included and close to Vic market. TVs in common areas, free use of vacuum cleaners, irons and ironing boards"
        },
        {
            name: "Uni Lodge on Lonsdale",
            link: "http://www.unilodge.com.au/",
            price: "From $290 to $395 per week, Bond: 1 month rent",
            address: "39 Lonsdale Street , Melbourne",
            phone: "8102 7499",
            internet: "Free internet access",
            maxWeeks: "6 months",
            facilities: "24 hour support, fully furnished apartments and communal kitchens and lounges, coin laundry, onsite staff, contents insurance."
        },
        {
            name: "Le Student 8 Melbourne",
            link: "http://www.lestudent8.com/",
            price: "From $280 per week, Bond: $200 for 62 nights or $500 for 365 nights",
            address: "215 Bell Street Preston",
            phone: "9485 0086",
            internet: "$5 per day, $20 per week or $50 per month",
            maxWeeks: "6 months",
            facilities: "Student Centre with internet café, Public telephones, Study Centre. Kitchens on every level, BBQ area, Onsite student restaurant and bar, Gymnasium, Games room with widescreen TV, outdoor pool, sauna, laundry."
        },
        {
            name: "Cambridge Court",
            link: "#",
            price: "From $270 PER WEEK, Bond: 1 month rent",
            address: "45 Victoria Parade, Collingwood",
            phone: "04 1043 0316",
            internet: "INTERNET COSTS EXTRA",
            maxWeeks: "1 year",
            facilities: "Apartments and Kitchen fully furnished, Amenities charged according to usage"
        },
        {
            name: "COLLEGE SQUARE -Swanston",
            link: "https://unilodge.com.au/city/melbourne/",
            price: "From $309 – $481 PER WEEK, Bond: 1 month rent",
            address: "800 Swanston Street, Carlton",
            phone: "9349 2500",
            internet: "Free WIFI",
            maxWeeks: "50 weeks Short Term lease available (12-25 Weeks) – Subject to availability",
            facilities: "Pool, gym, seminar tutorial rooms, resident lounges, BBQ areas, coin laundry, bicycle parking, kitchen, vending machine, basketball court."
        },
        {
            name: "Student Housing Australia (SHA)",
            link: "https://sha.com.au/",
            price: "From $275 PER WEEK, Bond: 4 weeks rent",
            address: "593 Elizabeth Street, Melbourne VIC 3000",
            phone: "1300 742 000",
            internet: "WIFI at fee",
            maxWeeks: "6 months",
            facilities: "Gas and water and satellite TV usage included, fully furnished with air-conditioning, heating, laundry and bike storage."
        },
        {
            name: "Carlton Melbourne College (CMC)",
            link: "http://carltonmelbournecollege.com.au/",
            price: "From $250 PER WEEK for 52 weeks +, Bond: $1,000",
            address: "743–751 Swanston Street, Carlton",
            phone: "9347 3238",
            internet: "Free WIFI",
            maxWeeks: "Short stays available",
            facilities: "Gym, Kitchen, reception Monday to Friday, Lounge rooms, and laundry available"
        },
        {
            name: "Albert House",
            link: "http://www.alberthouse.com.au/",
            price: "From $475 PER WEEK, Bond: $1,800",
            address: "57–65 Drummond Street, Carlton",
            phone: "9654 9243",
            internet: "Complimentary Free Wireless Internet Access (common areas & room) between 7G – 15G per month",
            maxWeeks: "Intake FEB and July",
            facilities: "Home cooked Asian meals provided 6 days a week, multiple living areas and student support , gym, laundry, entertainment lounge, live-in supervisors ( 24/7 care)"
        },
        {
            name: "Australia Wide Student Accommodation",
            link: "http://www.austudent.com/",
            price: "From $200 PER WEEK, Bond: $1,000",
            address: "2 Carre Street Elsternwick",
            phone: "9523 5158",
            internet: "Free WIFI",
            maxWeeks: "1 month contracts available",
            facilities: "Individual study stations, Cooking equipment and linen provided, free laundry services and gas, water electricity bills included, lounge, pool table."
        },
        {
            name: "Urbaneness Student Accommodation",
            link: "http://www.urbanest.com.au/melbourne/melbourne-central/",
            price: "From $339 PER WEEK, Bond: 1 month rent",
            address: "316 La Trobe Street, Melbourne VIC",
            phone: "1800 260 801",
            internet: "Free WIFI",
            maxWeeks: "26 weeks minimum",
            facilities: "Movie nights, BBQ nights, local cultural events and festivals. Weekend trips and tours. Weekly yoga classes, running clubs, soccer competitions, bike storage, and vending machines"
        }
    ]
};

export default function BrowseStays() {
    const [term, setTerm] = useState<'shortTerm' | 'longTerm'>('shortTerm');
    const [currentPage, setCurrentPage] = useState(1);

    const stays = staysData[term];
    const itemsPerPage = 6;
    const totalPages = Math.ceil(stays.length / itemsPerPage);
    const paginatedStays = stays.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleTermChange = (newTerm: 'shortTerm' | 'longTerm') => {
        setTerm(newTerm);
        setCurrentPage(1);
    };

    return (
        <div className="bg-[#F9FAFB] py-16 md:py-24">
            <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px] xl:px-[100px]">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
                    <div>
                        <div className="text-[11px] font-semibold text-[#4D97E6] uppercase tracking-widest mb-2">
                            ACCOMMODATION
                        </div>
                        <h2 className="text-[32px] md:text-[40px] text-[#0B1F4A] italic" style={{ fontFamily: 'var(--font-dm-serif)' }}>
                            Browse Stays
                        </h2>
                        <div className="w-[60px] md:w-[80px] h-[3px] bg-[#4D97E6] mt-4"></div>
                    </div>
                    <div className="mt-6 sm:mt-0 px-4 py-1.5 border border-[#C8D5E0] rounded-full bg-white text-[#6E6E6E] font-normal tracking-wide text-[11px]">
                        {stays.length} properties
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="flex w-full sm:w-auto bg-white border border-[#C8D5E0] overflow-hidden rounded-[4px]">
                        <button
                            onClick={() => handleTermChange('shortTerm')}
                            className={`flex-1 sm:flex-none px-4 sm:px-8 py-3 sm:py-2.5 text-[14px] font-medium transition-colors ${term === 'shortTerm' ? 'bg-[#2463A7] text-white border-r border-[#2463A7]' : 'text-[#2463A7] hover:bg-gray-50 border-r border-[#D1D5DB]'}`}
                        >
                            Short Term
                        </button>
                        <button
                            onClick={() => handleTermChange('longTerm')}
                            className={`flex-1 sm:flex-none px-4 sm:px-8 py-3 sm:py-2.5 text-[14px] font-medium transition-colors ${term === 'longTerm' ? 'bg-[#2463A7] text-white' : 'text-[#2463A7] hover:bg-gray-50'}`}
                        >
                            Long Term
                        </button>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {paginatedStays.map((stay, idx) => (
                        <div key={idx} className="bg-white overflow-hidden border rounded-[4px] border-[#C8D2E0] flex flex-col">
                            {/* Card Header */}
                            <div className="bg-[#0B1F4A] p-6 min-h-[96px] flex flex-col justify-center">
                                <h3 className="text-[18px] font-medium mb-1 tracking-wide text-[#4D97E6]">{stay.name}</h3>
                                <p className="text-[14px] text-white font-medium tracking-wide">{stay.price}</p>
                            </div>

                            {/* Card Body */}
                            <div className="px-6 flex-1 flex flex-col">
                                {[
                                    { label: "ADDRESS", key: "address" as const },
                                    { label: "PHONE", key: "phone" as const },
                                    { label: "INTERNET FEES", key: "internet" as const },
                                    { label: term === 'longTerm' ? "MINIMUM TERM" : "MAXIMUM WEEKS", key: "maxWeeks" as const },
                                    { label: "SPECIAL FACILITIES", key: "facilities" as const }
                                ].map((field, i, arr) => (
                                    <div key={field.key} className={`py-4 ${i === arr.length - 1 ? 'border-b border-[#E8E4D9] flex-1' : 'border-b border-[#D9E3E8]'}`}>
                                        <h4 className="text-[11px] font-bold text-[#0B1F4A] uppercase tracking-widest mb-1.5">{field.label}</h4>
                                        <p className="text-[13px] text-[#4A4A4A] leading-relaxed">{stay[field.key]}</p>
                                    </div>
                                ))}

                                {/* Card Footer Link */}
                                <div className="pt-4 pb-6">
                                    <a href={stay.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[13px] font-semibold text-[#2463A7] hover:text-[#0B1F4A] transition-colors">
                                        View Details
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-1'>
                                            <g clip-path="url(#clip0_6325_2404)">
                                                <path d="M2.5 6.0004H9.5008M6.0004 9.5008L9.5008 6.0004L6.0004 2.5" stroke="#2463A7" stroke-width="2" stroke-linecap="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_6325_2404">
                                                    <rect width="12" height="12" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer text and Pagination */}
                <div className="grid grid-cols-1 md:grid-cols-3 items-center text-[12px] pt-8 mt-12 gap-y-6 md:gap-y-0">
                    <div className="flex justify-center md:justify-start">
                        <p className="italic text-[#6E6E6E]">* Listed Prices and Terms are subject to change without notice.</p>
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center">
                        {totalPages > 1 && (
                            <div className="flex items-center space-x-2">
                            <button 
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 bg-white transition-colors disabled:opacity-50"
                            >
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                <button 
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-medium shadow-sm transition-colors ${
                                        currentPage === page 
                                            ? "bg-[#184F8D] text-white border-transparent" 
                                            : "bg-white border border-[#184F8D] text-[#184F8D] hover:bg-gray-50"
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}

                            <button 
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                                className="w-8 h-8 rounded-full bg-[#4D97E6] text-white flex items-center justify-center shadow-sm transition-colors hover:bg-blue-500 disabled:opacity-50"
                            >
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                        )}
                    </div>
                    
                    {/* Empty placeholder for grid balance */}
                    <div className="hidden md:block"></div>
                </div>
            </div>
        </div>
    );
}

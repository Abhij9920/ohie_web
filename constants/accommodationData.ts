export interface CardData {
  id: number;
  title: string;
  price: string;
  address: string;
  phone: string;
  internet: string;
  maximumWeeks: string;
  facilities: string;
}

export const accommodationData = {
  shortTerm: [
    {
      id: 1,
      title: "Urban Central",
      price: "Price N/A",
      address: "334 City Road, Southbank, Melbourne",
      phone: "1800 631 288",
      internet: "Free & Paid WiFi",
      maximumWeeks: "No",
      facilities:
        "Free daily breakfast, tea, coffee, pasta, rice, linens and towels for selected groups.",
    },
    {
      id: 2,
      title: "Space Hotel",
      price: "From $420 PER WEEK (Single Room)",
      address: "380 Russell Street, Melbourne",
      phone: "1800 670 611",
      internet: "Internet Café with 16 computers",
      maximumWeeks: "No",
      facilities:
        "Jacuzzi, movie room, gym, lounge, cyber space, BBQ, free tea & coffee, bar, Foxtel, 24-hour reception, kitchen.",
    },
    {
      id: 3,
      title: "City Centre Budget Hotel",
      price: "From $560 PER WEEK",
      address: "22 Little Collins Street, Melbourne",
      phone: "9654 5401",
      internet: "Free Wi-Fi",
      maximumWeeks: "1–3 months (subject to availability)",
      facilities:
        "24/7 kitchen, free computers & printers, laundry service, rooftop kitchen.",
    },
    {
      id: 4,
      title: "City Point Apartments",
      price: "From $1190 PER WEEK",
      address: "668 Bourke Street, Melbourne",
      phone: "03 9020 0246",
      internet: "Free WiFi",
      maximumWeeks: "Subject to availability",
      facilities:
        "Gym, sauna, secure parking, computers, printers, swimming pool, tennis courts, serviced daily.",
    },
    {
      id: 5,
      title: "Madre Nazarena Student's House (Female Only)",
      price: "From $293 PER WEEK ($100 Bond)",
      address: "311–315 Church Street, Richmond",
      phone: "9429 9620",
      internet: "Free WiFi",
      maximumWeeks: "Subject to availability",
      facilities:
        "Study areas, chapel, kitchen, gardens, BBQ area, laundry, parking.",
    },
    {
      id: 6,
      title: "Yarra House",
      price:
        "From $256 (36+ weeks), $293 (16+ weeks), $358 (1+ week)",
      address: "10 Yarra Bend Road, Fairfield",
      phone: "9269 8990",
      internet: "High-speed Internet (additional charges apply)",
      maximumWeeks: "No Maximum",
      facilities:
        "Kitchen, laundry and recreational facilities.",
    },
    {
      id: 7,
      title: "Carlton Student Accommodation",
      price:
        "22+ Weeks $290/week | 44+ Weeks $275/week | 52 Weeks $245/week",
      address:
        "92 Grattan Street, Carlton; 372 Drummond Street, Carlton; 437 Cardigan Street, Carlton",
      phone: "9347 2670",
      internet: "Free Wi-Fi & Internet",
      maximumWeeks: "52 Weeks",
      facilities:
        "Fully equipped kitchens, TV recreation area, lounge, dining room, coin laundry, non-smoking.",
    },    {
      id: 8,
      title: "Melbourne Central YHA",
      price: "From $420 PER WEEK",
      address: "562 Flinders Street, Melbourne",
      phone: "9621 2523",
      internet: "Free Wi-Fi",
      maximumWeeks: "Subject to availability",
      facilities:
        "Free movie hire, communal lounges, rooftop BBQ, communal kitchen, balcony, laundry, 24-hour reception, café, USB hubs, printers, scanner, copier.",
    },
    {
      id: 9,
      title: "Backpackers United Melbourne",
      price: "From $420 PER WEEK",
      address: "250 Flinders Street, Melbourne",
      phone: "03 9654 2616",
      internet: "Free Wi-Fi in common areas",
      maximumWeeks: "No Maximum",
      facilities:
        "TV room with beanbags, free DVD hire, designer kitchen, basement bar, lounge, coin laundry, free luggage storage, 24-hour reception.",
    },
    {
      id: 10,
      title: "Rooms International - Budget Student Accommodation",
      price: "From $290 PER WEEK",
      address: "",
      phone: "9347 1008",
      internet:
        "3-month contract $110 (15GB/month), setup fee $30, usage charges apply",
      maximumWeeks: "12 Months Contract",
      facilities:
        "TVs in common areas, commercial coin laundry, vacuum cleaners, irons, ironing boards, weighing machines, secure bike storage, live-in resident masters, weekly cleaning.",
    },
    {
      id: 11,
      title: "Ozi House Group",
      price: "Price N/A",
      address: "420 Punt Road, South Yarra VIC 3141",
      phone: "9867 6882",
      internet: "Free WiFi",
      maximumWeeks: "27 Nights",
      facilities:
        "Dining room, coin laundry, student lounge, study area, vending machine, bike storage, gym, pool, reception, sauna, conference room, BBQ.",
    },
    {
      id: 12,
      title: "Green House Backpackers",
      price: "Price N/A",
      address: "Level 6, 228 Flinders Lane, Melbourne VIC 3000",
      phone: "1800 249 207",
      internet: "Free internet in public areas",
      maximumWeeks: "No Maximum",
      facilities:
        "Free airport pickup (on request), free city tour, coin laundry, secure lockers, free tea & coffee, weekly dinner, key-card access, 24-hour reception.",
    },
    {
      id: 13,
      title: "Hotel Claremont Guest House",
      price: "From $455 PER WEEK",
      address: "189 Toorak Road, South Yarra VIC 3141",
      phone: "1300 301 630",
      internet: "High-speed Internet",
      maximumWeeks: "No Maximum",
      facilities:
        "Complimentary tea, coffee & filtered water, TV, telephone, heating, fan cooling, linen, towels, breakfast included, internet room, guest lounge, laundry.",
    },
    {
      id: 14,
      title: "Uni Lodge (Victoria University)",
      price: "From $172 PER WEEK",
      address: "101 Ballarat Road, Footscray VIC 3011",
      phone: "+61 3 9687 9830",
      internet: "50GB Internet Included Per Month",
      maximumWeeks: "4–52 Weeks",
      facilities:
        "TV lounges, games room, pool table, table tennis, theatre room, Foxtel, Xbox, PlayStation, gourmet kitchens, study rooms, rooftop terrace, basketball court, bicycle parking, laundry, onsite café.",
    },
  ],

  longTerm: [    {
      id: 1,
      title: "Rooms International",
      price: "From $320 PER WEEK",
      address: "77 Bouverie Street, Carlton",
      phone: "9347 1008",
      internet:
        "3 month contract $110 (15GB/month), setup fee $30 (usage fees apply)",
      maximumWeeks: "Minimum Term: 1 Year",
      facilities:
        "Utilities included, coin laundry, fully equipped kitchens, weekly room cleaning, TVs in common areas, vacuum cleaners, irons and ironing boards.",
    },
    {
      id: 2,
      title: "Uni Lodge on Lonsdale",
      price: "From $290 - $395 PER WEEK",
      address: "39 Lonsdale Street, Melbourne",
      phone: "8102 7499",
      internet: "Free Internet Access",
      maximumWeeks: "Minimum Term: 6 Months",
      facilities:
        "24-hour support, fully furnished apartments, communal kitchens & lounges, coin laundry, onsite staff, contents insurance.",
    },
    {
      id: 3,
      title: "Le Student 8 Melbourne",
      price: "From $280 PER WEEK",
      address: "215 Bell Street, Preston",
      phone: "9485 0086",
      internet: "$5/day, $20/week or $50/month",
      maximumWeeks: "Minimum Term: 6 Months",
      facilities:
        "Student centre, internet café, study centre, kitchens on every level, BBQ area, onsite restaurant & bar, gym, games room, outdoor pool, sauna, laundry.",
    },
    {
      id: 4,
      title: "Cambridge Court",
      price: "From $270 PER WEEK",
      address: "45 Victoria Parade, Collingwood",
      phone: "04 1043 0316",
      internet: "Internet costs extra",
      maximumWeeks: "Minimum Term: 1 Year",
      facilities:
        "Fully furnished apartments and kitchen, amenities charged according to usage.",
    },
    {
      id: 5,
      title: "College Square - Swanston",
      price: "From $309 - $481 PER WEEK",
      address: "800 Swanston Street, Carlton",
      phone: "9349 2500",
      internet: "Free WiFi",
      maximumWeeks: "50 Weeks (12–25 Week short-term lease subject to availability)",
      facilities:
        "Pool, gym, seminar/tutorial rooms, resident lounges, BBQ areas, coin laundry, bicycle parking, kitchen, vending machines, basketball court.",
    },
    {
      id: 6,
      title: "Student Housing Australia (SHA)",
      price: "From $275 PER WEEK",
      address: "593 Elizabeth Street, Melbourne VIC 3000",
      phone: "1300 742 000",
      internet: "WiFi (additional fee)",
      maximumWeeks: "Minimum Term: 6 Months",
      facilities:
        "Gas, water and satellite TV included, fully furnished, air conditioning, heating, laundry and bike storage.",
    },
    {
      id: 7,
      title: "Carlton Melbourne College (CMC)",
      price: "From $250 PER WEEK (52+ Weeks)",
      address: "743–751 Swanston Street, Carlton",
      phone: "9347 3238",
      internet: "Free WiFi",
      maximumWeeks: "Short stays available",
      facilities:
        "Gym, kitchen, reception (Monday–Friday), lounge rooms and laundry.",
    },
    {
      id: 8,
      title: "Albert House",
      price: "From $475 PER WEEK",
      address: "57–65 Drummond Street, Carlton",
      phone: "9654 9243",
      internet:
        "Complimentary wireless internet (7GB–15GB/month)",
      maximumWeeks: "Intake in February & July",
      facilities:
        "Home-cooked Asian meals (6 days/week), multiple living areas, student support, gym, laundry, entertainment lounge, 24/7 live-in supervisors.",
    },
    {
      id: 9,
      title: "Australia Wide Student Accommodation",
      price: "From $200 PER WEEK",
      address: "2 Carre Street, Elsternwick",
      phone: "9523 5158",
      internet: "Free WiFi",
      maximumWeeks: "1 Month Contracts Available",
      facilities:
        "Individual study stations, cooking equipment, linen, free laundry, gas, water & electricity included, lounge, pool table.",
    },
    {
      id: 10,
      title: "Urbaneness Student Accommodation",
      price: "From $339 PER WEEK",
      address: "316 La Trobe Street, Melbourne VIC",
      phone: "1800 260 801",
      internet: "Free WiFi",
      maximumWeeks: "Minimum Term: 26 Weeks",
      facilities:
        "Movie nights, BBQ nights, cultural events, weekend trips, yoga classes, running clubs, soccer competitions, bike storage, vending machines.",
    },
  ],
};
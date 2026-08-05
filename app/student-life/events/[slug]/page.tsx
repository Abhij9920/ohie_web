import React from 'react';
import EventDetail from '@/components/EventDetail';
import Accreditations from '@/components/Accreditations';
import { notFound } from 'next/navigation';

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (slug === 'leadership-and-change-session') {
    const content = (
      <>
        <p>
          🌍 <strong>Celebrate Culture, Community & Connection</strong>
        </p>
        <p>
          Join us for a vibrant cultural celebration at OIHE where students come together to share traditions, food, stories, and experiences from around the world. Wear your traditional cultural attire and bring a cultural dish to represent your heritage as we celebrate diversity and unity within our student community.
        </p>

        <p className="mt-6">
          🎤 <strong>Speaker Segment</strong>
        </p>
        <p>
          We are honored to welcome <strong>Honorable Alan Tudge</strong> for a special speaker session as part of the <em>Classroom to Corporate Series</em>.
        </p>
        <p>
          <strong>Topic:</strong><br />
          <strong>Leadership & Change - In Person Session</strong><br />
          This session will provide valuable insights into leadership, professional growth, and adapting to change in today's evolving world.
        </p>

        <p className="mt-6">
          🍲 <strong>Potluck Celebration</strong>
        </p>
        <p>Students are encouraged to:</p>
        <ul>
          <li>Wear traditional cultural clothing</li>
          <li>Bring a cultural food dish to share</li>
          <li>Connect with students from diverse backgrounds</li>
          <li>Experience global cultures in a welcoming environment</li>
        </ul>

        <p className="mt-6">
          📌 <strong>RSVP</strong>
        </p>
        <p>
          Please scan the QR code on the event poster to confirm your attendance.
        </p>

        <p className="mt-6">
          <strong>Organized by</strong><br />
          <strong>Oxford Institute of Higher Education (OIHE)</strong>
        </p>
        <p className="italic text-sm text-[#3D3D3D]/70 mt-2">
          Oxford Institute of Higher Education Pty Ltd<br />
          CRICOS Provider No: 03429B
        </p>
      </>
    );

    return (
      <div className="flex flex-col min-h-screen">
        <EventDetail
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '#' },
            { label: 'Events', href: '/student-life/events' },
            { label: 'Leadership & Change In Person Session' },
          ]}
          title="Leadership & Change In Person Session"
          dateRange="May 27, 2026 - May 28, 2026"
          venue="Level 6, OIHE Campus"
          heroImage="/events/events_hero.png"
          aboutTitle="OIHE Student Cultural Celebration & Youth Potluck"
          content={content}
          eventDetails={{
            date: 'Wednesday, 27 May 2026',
            venue: 'Level 6, OIHE Campus'
          }}
        />
        <Accreditations />
      </div>
    );
  }

  // Default to Melbourne Career Expo for the old slug
  if (slug === 'melbourne-career-expo-2026') {
    const content = (
      <>
        <p>
          <strong>OIHE is excited to be part of the Melbourne Career Expo 2026,</strong> held from <strong>17-19 July 2026</strong> at the <strong>Melbourne Convention & Exhibition Centre</strong>.
        </p>
        <p>
          This event brings together <strong>students, families, schools, and education providers</strong> to help young people explore study opportunities, career pathways, and future options after school.
        </p>
        <p>
          During the expo, the <strong>OIHE team</strong> will be available to answer questions and provide information about our:
        </p>
        <ul className="text-[#0B1F4A]">
          <li><strong>Courses</strong></li>
          <li><strong>Study options</strong></li>
          <li><strong>Entry requirements</strong></li>
          <li><strong>Pathways into higher education</strong></li>
        </ul>
        <p>
          Visitors will be able to <strong>speak with our team directly</strong> and gain a better understanding of the opportunities available at OIHE.
        </p>
        <p><strong>Whether you are:</strong></p>
        <ul>
          <li>Planning your <strong>next step after Year 12</strong></li>
          <li>Considering a <strong>change in study direction</strong></li>
          <li>Simply <strong>exploring your options</strong></li>
        </ul>
        <p>We invite you to visit us at the Melbourne Career Expo 2026.</p>
      </>
    );

    return (
      <div className="flex flex-col min-h-screen">
        <EventDetail
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '#' },
            { label: 'Events', href: '/student-life/events' },
            { label: 'Melbourne Career Expo 2026' },
          ]}
          title="Melbourne Career Expo 2026"
          dateRange="July 09, 2026 - July 19, 2026"
          venue="Melbourne Convention & Exhibition Centre"
          heroImage="/events/events_hero.png"
          aboutTitle="OIHE at Melbourne Career Expo 2026"
          content={content}
          eventDetails={{
            date: '17-19 July 2026',
            venue: 'Melbourne Convention & Exhibition Centre, Melbourne',
            websiteLabel: 'careerexpo.com.au',
            websiteUrl: 'https://careerexpo.com.au'
          }}
        />
        <Accreditations />
      </div>
    );
  }

  if (slug === 'referencing-and-avoiding-plagiarism') {
    const content = (
      <>
        <p><strong>Dear Students,</strong></p>
        <p>
          You are warmly invited to attend our upcoming Academic Learning Support Workshop on the topic:
        </p>
        <p className="mt-6">
          <strong>Referencing & Avoiding Plagiarism</strong>
        </p>
        <p>
          This session is designed to help students improve their academic writing skills and develop a better understanding of academic integrity requirements.
        </p>

        <p className="mt-6">
          <strong>Workshop Details</strong>
        </p>
        <ul>
          <li>📅 <strong>Date:</strong> Friday, 15 May 2026</li>
          <li>⏰ <strong>Time:</strong> 12:00 PM – 1:00 PM</li>
          <li>📍 <strong>Location:</strong> Level 5.16/5.17, 333 Queen Street, Melbourne VIC 3000</li>
        </ul>

        <p className="mt-6">
          During the workshop, students will learn:
        </p>
        <ul>
          <li>How to reference correctly</li>
          <li>How to avoid plagiarism</li>
          <li>Tips for paraphrasing and academic writing</li>
          <li>Understanding academic integrity expectations</li>
        </ul>
      </>
    );

    return (
      <div className="flex flex-col min-h-screen">
        <EventDetail
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '#' },
            { label: 'Events', href: '/student-life/events' },
            { label: 'Referencing & Avoiding Plagiarism' },
          ]}
          title="Referencing & Avoiding Plagiarism"
          dateRange="May 15, 2026"
          venue="Level 5.16/5.17, 333 Queen Street, Melbourne VIC 3000"
          heroImage="/events/events_hero.png"
          aboutTitle="Referencing & Avoiding Plagiarism"
          content={content}
          eventDetails={{
            date: 'Friday, 15 May 2026',
            venue: 'Level 5.16/5.17, 333 Queen Street, Melbourne VIC 3000'
          }}
        />
        <Accreditations />
      </div>
    );
  }

  if (slug === 'orientation-melbourne-brisbane') {
    const content = (
      <>
        <ul className="text-[#0B1F4A]">
          <li><strong>Date:</strong> 20th April 2026</li>
          <li><strong>Time:</strong> 1:00 PM (AEST)</li>
          <li><strong>Onshore Students</strong></li>
        </ul>

        <p className="mt-6">
          <strong>Venue:</strong>
        </p>
        <ul className="text-[#0B1F4A]">
          <li><strong>Melbourne Campus:</strong> 333 Queen Street, Melbourne, VIC 3000</li>
          <li><strong>Brisbane Campus:</strong> 433 Boundary Street, Spring Hill QLD 4000</li>
        </ul>

        <p className="mt-6">
          <strong>Attendance</strong>
        </p>
        <ul className="text-[#0B1F4A]">
          <li><strong>Compulsory:</strong> Face to Face</li>
          <li><strong>Duration:</strong> 3 Hours</li>
        </ul>
      </>
    );

    return (
      <div className="flex flex-col min-h-screen">
        <EventDetail
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '#' },
            { label: 'Events', href: '/student-life/events' },
            { label: 'Orientation (Melbourne, Brisbane)' },
          ]}
          title="Orientation ( Melbourne , Brisbane )"
          dateRange="April 20, 2026 - April 24, 2026"
          venue="Melbourne, Brisbane"
          heroImage="/events/events_hero.png"
          aboutTitle="Orientation ( Melbourne , Brisbane )"
          content={content}
          eventDetails={{
            date: '20th April 2026',
            venue: 'Melbourne & Brisbane Campuses'
          }}
        />
        <Accreditations />
      </div>
    );
  }

  if (slug === 'idp-fair-vietnam-cambodia') {
    const content = (
      <>
        <p><strong>IDP Education Fair</strong></p>
        <p>
          This is a major international education fair organized by IDP, featuring the President & CEO across multiple cities in Southeast Asia.
        </p>

        <p className="mt-6">
          <strong>Event Schedule:</strong>
        </p>
        <ul>
          <li><strong>Da Nang, Vietnam</strong> – March 7</li>
          <li><strong>Ho Chi Minh City, Vietnam</strong> – March 8</li>
          <li><strong>Can Tho, Vietnam</strong> – March 10</li>
          <li><strong>Phnom Penh, Cambodia</strong> – March 14</li>
          <li><strong>Siem Reap, Cambodia</strong> – March 15</li>
        </ul>
      </>
    );

    return (
      <div className="flex flex-col min-h-screen">
        <EventDetail
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '#' },
            { label: 'Events', href: '/student-life/events' },
            { label: 'President & CEO at IDP Fair in Vietnam and Cambodia' },
          ]}
          title="President & CEO at IDP Fair in Vietnam and Cambodia"
          dateRange="March 07, 2026 - March 15, 2026"
          venue="None"
          heroImage="/events/events_hero.png"
          aboutTitle="President & CEO at IDP Fair in Vietnam and Cambodia"
          content={content}
          eventDetails={{
            date: 'March 07 - March 15, 2026',
            venue: 'Multiple Cities, Vietnam & Cambodia'
          }}
        />
        <Accreditations />
      </div>
    );
  }

  if (slug === 'susan-ho-chi-minh-dec-2025') {
    const content = (
      <>
        <p><strong>Visit Summary – Head of Marketing, Oxford</strong></p>

        <p className="mt-6 text-[#3D3D3D]">
          Name: Susan Inserra<br />
          Position: Head of Marketing, Oxford<br />
          Destination: Ho Chi Minh City, Vietnam<br />
          Dates: December 8–11, 2025
        </p>

        <p className="mt-6">
          <strong>Purpose of Visit:</strong>
        </p>
        <ul>
          <li>Strengthen relationships with key education agents in Vietnam</li>
          <li>Conduct meetings and information sessions with prospective students</li>
          <li>Promote Ozford's programs, pathways, and scholarship opportunities</li>
          <li>Discuss local marketing collaborations for the 2026 intakes</li>
        </ul>

        <p className="mt-6">
          Send a message on WhatsApp to schedule the meeting.
        </p>

        <div className="mt-8 flex flex-col items-start max-w-[250px]">
          <div className="flex flex-col items-center text-center gap-1">


            <img
              src="/QR.png"
              alt="QR Code to connect on WhatsApp"
              className="w-[180px] h-auto mt-3 mb-2 rounded-lg"
            />

          </div>
        </div>
      </>
    );

    return (
      <div className="flex flex-col min-h-screen">
        <EventDetail
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '#' },
            { label: 'Events', href: '/student-life/events' },
            { label: 'Susan Inserra in Ho Chi Minh City' },
          ]}
          title="Susan, Head of Marketing, will visit Ho Chi Minh City from December 8 to 11"
          dateRange="December 08, 2025 - December 11, 2025"
          venue="Ho Chi Minh City, Vietnam"
          heroImage="/events/events_hero.png"
          aboutTitle="Visit Summary – Head of Marketing, Oxford"
          content={content}
          eventDetails={{
            date: 'December 08 - December 11, 2025',
            venue: 'Ho Chi Minh City, Vietnam'
          }}
        />
        <Accreditations />
      </div>
    );
  }

  if (slug === 'susan-mumbai-dec-2025') {
    const content = (
      <>
        <p><strong>Visit Summary – Head of Marketing, Oxford</strong></p>

        <p className="mt-6 text-[#3D3D3D]">
          Name: Susan Inserra<br />
          Position: Head of Marketing, Oxford<br />
          Destination: Mumbai, India<br />
          Dates: December 2–5, 2025
        </p>

        <p className="mt-6">
          <strong>Purpose of Visit:</strong>
        </p>
        <ul>
          <li>Strengthen relationships with key education agents in Mumbai</li>
          <li>Conduct information sessions and meetings with prospective students</li>
          <li>Promote Ozford's latest programs and scholarship opportunities</li>
          <li>Discuss collaborative marketing and recruitment activities</li>
        </ul>

        <p className="mt-6">
          Send a message on WhatsApp to schedule the meeting.
        </p>

        <div className="mt-8 flex flex-col items-start max-w-[250px]">
          <div className="flex flex-col items-center text-center gap-1">

            <img
              src="/QR.png"
              alt="QR Code to connect on WhatsApp"
              className="w-[180px] h-auto mt-3 mb-2 rounded-lg"
            />

          </div>
        </div>
      </>
    );

    return (
      <div className="flex flex-col min-h-screen">
        <EventDetail
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '#' },
            { label: 'Events', href: '/student-life/events' },
            { label: 'Susan Inserra in Mumbai' },
          ]}
          title="Susan, Head of Marketing, will visit Mumbai, India, from December 2 to 5"
          dateRange="December 02, 2025 - December 05, 2025"
          venue="Mumbai, India"
          heroImage="/events/events_hero.png"
          aboutTitle="Visit Summary – Head of Marketing, Oxford"
          content={content}
          eventDetails={{
            date: 'December 02 - December 05, 2025',
            venue: 'Mumbai, India'
          }}
        />
        <Accreditations />
      </div>
    );
  }

  if (slug === 'ciftis-beijing-2025') {
    const content = (
      <>
        <p className="mb-2">Significance:</p>
        <p className="mb-4">
          Recognized as a key economic and diplomatic forum, with numerous Fortune 500 companies and global policymakers participating State Council of ChinaHGBRAsiaNet.
        </p>
        <p>
          Australia is the Guest Country of Honor in 2025, showcasing its leadership in education, green economy, and tourism services
        </p>
      </>
    );

    return (
      <div className="flex flex-col min-h-screen">
        <EventDetail
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '#' },
            { label: 'Events', href: '/student-life/events' },
            { label: 'President/CEO at CIFTIS Beijing' },
          ]}
          title="President/CEO at CIFTIS Beijing"
          dateRange="September 08, 2025 - September 14, 2025"
          venue="Shougang Park, Beijing"
          heroImage="/events/events_hero.png"
          aboutTitle="Event Overview"
          content={content}
          eventDetails={{
            date: 'September 08 - September 14, 2025',
            venue: 'Shougang Park, Beijing'
          }}
        />
        <Accreditations />
      </div>
    );
  }

  if (slug === 'susan-isu-sept-2025') {
    const content = (
      <>
        <p><strong>Curriculum:</strong> International Baccalaureate (PYP, MYP, DP)</p>
        <p className="mb-4"><strong>Grades:</strong> Pre-K – Grade 12</p>

        <p><strong>Highlights:</strong></p>
        <ul>
          <li>Mongolia's first IB World School (established 1992) SISU School UB+15Wikipedia+15IPGCE @ UWE+15uat.isumongolia.edu.mn+3State Department+3isumongolia.edu.mn+3IPGCE @ UWE+6isumongolia.edu.mn+6Expat Exchange+6</li>
          <li>Non-profit, co-educational with a diverse student body (~200–360 students) WikipediaTeacher Horizons</li>
          <li>Accredited by CIS and NEASC; governed by a multinational board International School Advisor+15Wikipedia+15lokgen.com+15</li>
          <li>Location: Khan Uul District – Four Seasons Garden. Contact: +976 7016 0010; admissions@isumongolia.edu.mn</li>
        </ul>
      </>
    );

    return (
      <div className="flex flex-col min-h-screen">
        <EventDetail
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '#' },
            { label: 'Events', href: '/student-life/events' },
            { label: 'Susan Inserra visiting ISU' },
          ]}
          title="Susan, Head of Marketing visiting International School of Ulaanbaatar (ISU)"
          dateRange="September 12, 2025"
          venue="Khan Uul District – Four Seasons Garden"
          heroImage="/events/events_hero.png"
          aboutTitle="International School of Ulaanbaatar (ISU)"
          content={content}
          eventDetails={{
            date: 'September 12, 2025',
            venue: 'Khan Uul District – Four Seasons Garden'
          }}
        />
        <Accreditations />
      </div>
    );
  }

  if (slug === 'susan-ulaanbaatar-sept-2025') {
    const content = (
      <>
        <ul>
          <li>
            The most recent fair took place on <strong>Sunday, 13 September 2025</strong>, from <strong>12:00 PM to 5:00 PM (GMT+8)</strong> at the <strong>Shangri-La Hotel, Ulaanbaatar</strong>. It provided a platform for students and parents to engage with representatives from leading Australian institutions and explore study opportunities in Australia. (<a href="https://austrade.eventsair.com" target="_blank" rel="noopener noreferrer" className="text-[#4D97E6] hover:underline">austrade.eventsair.com</a>)
          </li>
          <li>
            <strong>Austrade's Presence in Mongolia</strong>
          </li>
          <li>
            Austrade continues to support education, trade, and market connections—<strong>but no such expo is currently listed for 2025 or 2026 in Mongolia</strong>. Their event calendar and Education Data & Insights suggest no upcoming fairs planned in Ulaanbaatar at this time.
          </li>
        </ul>
      </>
    );

    return (
      <div className="flex flex-col min-h-screen">
        <EventDetail
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '#' },
            { label: 'Events', href: '/student-life/events' },
            { label: 'Susan at Study Australia Education Fair – Ulaanbaatar' },
          ]}
          title="Susan at Study Australia Education Fair – Ulaanbaatar"
          dateRange="September 13, 2025"
          time="12:00 pm - 5:00 pm (GMT+8)"
          venue="Ulaanbaatar"
          heroImage="/events/events_hero.png"
          aboutTitle=""
          content={content}
          eventDetails={{
            date: 'September 13, 2025',
            venue: 'Ulaanbaatar'
          }}
        />
        <Accreditations />
      </div>
    );
  }

  if (slug === 'higher-education-orientation') {
    const content = (
      <>
        <p>Higher Education orientation at 1 pm Level 5, 333 Queen Street</p>
      </>
    );

    return (
      <div className="flex flex-col min-h-screen">
        <EventDetail
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '#' },
            { label: 'Events', href: '/student-life/events' },
            { label: 'Higher Education orientation' },
          ]}
          title="Higher Education orientation"
          dateRange="September 14, 2025"
          time="1:00 PM"
          venue="Level 5, 333 Queen Street"
          heroImage="/events/events_hero.png"
          aboutTitle=""
          content={content}
          eventDetails={{
            date: 'September 14, 2025',
            venue: 'Level 5, 333 Queen Street'
          }}
        />
        <Accreditations />
      </div>
    );
  }

  if (slug === 'saee-taiwan-sept-2025') {
    const content = (
      <>
        <p><strong>Taiwan Education Fair (AICEE)</strong></p>
        <p className="mb-4">This is a major study-abroad fair hosted in Taiwan:</p>
        <ul>
          <li>Organized by the Association of International Cultural and Educational Exchange (AICEE Taiwan), established in August 2020. The fair promotes universities, Chinese language centers, and scholarship opportunities for international students.</li>
        </ul>
      </>
    );

    return (
      <div className="flex flex-col min-h-screen">
        <EventDetail
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '#' },
            { label: 'Events', href: '/student-life/events' },
            { label: 'President/CEO at SAEE Taiwan' },
          ]}
          title="President/CEO at SAEE Taiwan (Taiwan Education Fair (AICEE))"
          dateRange="September 19, 2025 - September 21, 2025"
          venue="Taiwan"
          heroImage="/events/events_hero.png"
          aboutTitle=""
          content={content}
          eventDetails={{
            date: 'September 19 - September 21, 2025',
            venue: 'Taiwan'
          }}
        />
        <Accreditations />
      </div>
    );
  }

  if (slug === 'australia-education-fair-2025') {
    const content = (
      <>
        <p>For more details visit <a href="https://studyaustralia.org.tw" target="_blank" rel="noopener noreferrer" className="text-[#4D97E6] hover:underline underline-offset-4">studyaustralia.org.tw</a></p>
      </>
    );

    return (
      <div className="flex flex-col min-h-screen">
        <EventDetail
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '#' },
            { label: 'Events', href: '/student-life/events' },
            { label: '2025 Australia Education Fair' },
          ]}
          title="2025 Australia Education Fair"
          dateRange="September 19, 2025 - September 21, 2025"
          time="Taichung: (Fri) 16:00-19:30 , Taipei: (Sat-Sun) 13:00-18:00"
          venue="19 Sep - Taichung: Feng Chia University Education Building, 20-21 Sept - Taipei: Songshan Cultural and Creative Park Warehouse 5"
          heroImage="/events/events_hero.png"
          aboutTitle=""
          content={content}
          eventDetails={{
            date: 'September 19 - September 21, 2025',
            venue: 'Taichung & Taipei'
          }}
        />
        <Accreditations />
      </div>
    );
  }

  if (slug === 'higher-education-mid-trimester-begins') {
    const content = (
      <>
        <p>Higher Education mid-trimester begins</p>
      </>
    );

    return (
      <div className="flex flex-col min-h-screen">
        <EventDetail
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '#' },
            { label: 'Events', href: '/student-life/events' },
            { label: 'Higher Education mid-trimester begins' },
          ]}
          title="Higher Education mid-trimester begins"
          dateRange="September 29, 2025"
          venue="None"
          heroImage="/events/events_hero.png"
          aboutTitle=""
          content={content}
          eventDetails={{
            date: 'September 29, 2025',
            venue: 'None'
          }}
        />
        <Accreditations />
      </div>
    );
  }

  if (slug === 'cee-2025') {
    const content = (
      <div className="flex flex-col gap-6">
        <img src="/event_img.png" alt="Meet us at CEE 2025" className="w-full h-auto rounded-lg" />
      </div>
    );

    return (
      <div className="flex flex-col min-h-screen">
        <EventDetail
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '#' },
            { label: 'Events', href: '/student-life/events' },
            { label: 'Meet us at CEE 2025' },
          ]}
          title="Meet us at CEE 2025"
          dateRange="October 31, 2025 - November 09, 2025"
          venue="Beijing, Wuhan, Chengdu, Guangzhou, Shanghai"
          heroImage="/events/events_hero.png"
          aboutTitle=""
          content={content}
          eventDetails={{
            date: 'October 31 - November 09, 2025',
            venue: 'Beijing, Wuhan, Chengdu, Guangzhou, Shanghai'
          }}
        />
        <Accreditations />
      </div>
    );
  }

  if (slug === 'higher-education-final-orientation') {
    const content = (
      <div className="flex flex-col gap-6">
        <img src="/event_3.png" alt="Higher Education Final Orientation" className="w-full h-auto rounded-lg" />
      </div>
    );

    return (
      <div className="flex flex-col min-h-screen">
        <EventDetail
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '#' },
            { label: 'Events', href: '/student-life/events' },
            { label: 'Higher Education Final Orientation' },
          ]}
          title="Higher Education Final Orientation"
          dateRange="August 15, 2025"
          time="10:00 AM"
          venue="Level 5, 333 Queen Street Melbourne 3000"
          heroImage="/events/events_hero.png"
          aboutTitle=""
          content={content}
          eventDetails={{
            date: 'August 15, 2025',
            venue: 'Level 5, 333 Queen Street Melbourne 3000'
          }}
        />
        <Accreditations />
      </div>
    );
  }

  if (slug === 'bachelors-masters-orientation') {
    const content = (
      <>
        <ul className="mb-6">
          <li>Attendance in person is compulsory.</li>
          <li>Bring your COE, passport & OSHC</li>
        </ul>
        <img src="/event_4.png" alt="Bachelor's & Master's Orientation" className="w-full max-w-[600px] h-auto rounded-lg" />
      </>
    );

    return (
      <div className="flex flex-col min-h-screen">
        <EventDetail
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '#' },
            { label: 'Events', href: '/student-life/events' },
            { label: "Bachelor's & Master's Orientation" },
          ]}
          title="Bachelor's & Master's Orientation"
          dateRange="July 28, 2025"
          time="1:00 PM"
          venue="Level 5, 333 Queen Street Melbourne 3000"
          heroImage="/events/events_hero.png"
          aboutTitle=""
          content={content}
          eventDetails={{
            date: 'July 28, 2025',
            venue: 'Level 5, 333 Queen Street Melbourne 3000'
          }}
        />
        <Accreditations />
      </div>
    );
  }

  // If slug doesn't match, return 404
  notFound();
}

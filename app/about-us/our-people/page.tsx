import React from 'react';
import PageHeader from '@/components/PageHeader';
import BoardSection from '@/components/BoardSection';
import ProfileCard from '@/components/ProfileCard';
import JoinTeamCTA from '@/components/JoinTeamCTA';
import Accreditations from '@/components/Accreditations';

export default function OurPeoplePage() {
  return (
    <main className="w-full bg-[#FAFAF7]">

      {/* Header */}
      <PageHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about-us' },
          { label: 'Our People', href: '/about-us/our-people' }
        ]}
        title="Our People"
        quote={<>Dedicated educators, leaders and<br />professionals committed to student<br />success.</>}
      />

      {/* Governing Directors */}
      <BoardSection smallTitle="LEADERSHIP" mainTitle="Governing Directors" theme="light">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ProfileCard
            name="Emeritus Prof John Rickard"
            role="Chairman"
            description="Former Vice Chancellor of Central Queensland University"
            imageUrl="/our_people/img1.png"
          />
          <ProfileCard
            name="Prof Albert Haddad"
            role="Chairman of the Academic Board"
            description="Dean of the University of Divinity"
            imageUrl="/our_people/img2.png"
          />
          <ProfileCard
            name="Jimmy Goh"
            role="Senior business leader & company director"
            imageUrl="/our_people/img3.png"
          />
        </div>
      </BoardSection>

      {/* Academic Board */}
      <BoardSection smallTitle="ACADEMIC" mainTitle="Academic Board" theme="light">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:gap-8">
          <ProfileCard
            name="Prof Albert Haddad"
            role="Chairman"
            description="Dean of the University of Divinity"
            imageUrl="/our_people/img4.png"
          />
          <ProfileCard
            name="Prof Ian Young AO"
            role="Former Vice Chancellor of Australian National University and Swinburne University"
            description=""
            imageUrl="/our_people/img5.png"
          />
          <ProfileCard
            name="Dr Lorraine Bennett"
            role="Director - Lorrine Bennett Learning & Teaching Consultancy"
            description=""
            imageUrl="/our_people/img6.png"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
          <div className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.33rem)]">
            <ProfileCard
              name="Prof Ritesh Chugh"
              role="Associate Dean - Engagement"
              imageUrl="/our_people/img7.png"
            />
          </div>
          <div className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.33rem)]">
            <ProfileCard
              name="Dr Priyantha Bandara"
              role="Academic Dean"
              imageUrl="/our_people/img8.png"
            />
          </div>
        </div>
      </BoardSection>

      {/* Audit and Risk Committee */}
      <BoardSection smallTitle="GOVERNANCE" mainTitle="Audit and Risk Committee" theme="dark">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <ProfileCard
            name="Pauline Carrafa"
            role="Chair of the Audit & Risk Committee"
            theme="dark"
            imageUrl="/our_people/img9.png"
          />
          <ProfileCard
            name="Emeritus Prof John Rickard"
            role="Former Vice Chancellor of Central Queensland University"
            theme="dark"
            imageUrl="/our_people/img1.png"
          />
          <ProfileCard
            name="Craig Geddes"
            role="Partner at Dench McClean Carlson"
            theme="dark"
            imageUrl="/our_people/img10.png"
          />
          <ProfileCard
            name="Jimmy Goh"
            role="Senior business leader & company director"
            theme="dark"
            imageUrl="/our_people/img3.png"
          />
        </div>
      </BoardSection>

      {/* Executive Management Team */}
      <BoardSection smallTitle="MANAGEMENT" mainTitle="Executive Management Team" theme="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <ProfileCard
            name="Cyrus Nickson"
            role="CEO"
            imageUrl="/our_people/img11.png"
          />
          <ProfileCard
            name="Dr Amelie Guan"
            role="Compliance & Operations Manager"
            imageUrl="/our_people/img12.png"
          />
          <ProfileCard
            name="Dr Priyantha Bandara"
            role="Academic Dean"
            imageUrl="/our_people/img8.png"
          />
          <ProfileCard
            name="Mr Vivian Lobo"
            role="Director of Operations (Brisbane)"
            imageUrl="/our_people/img13.png"
          />
        </div>
      </BoardSection>

      {/* CTA */}
      <JoinTeamCTA />
      <Accreditations />

    </main>
  );
}

import React from 'react';
import CareerHubHero from '@/components/CareerHubHero';
import PersonalCareerGuide from '@/components/PersonalCareerGuide';
import WhatWeOffer from '@/components/WhatWeOffer';
import GetJobReady from '@/components/GetJobReady';
import CareerFeatures from '@/components/CareerFeatures';
import JoinTeamCTA from '@/components/JoinTeamCTA';
import NeedHelpCTA from '@/components/NeedHelpCTA';
import Accreditations from '@/components/Accreditations';

export default function CareerHubPage() {
  return (
    <main className="w-full bg-[#FAFAF7] min-h-screen">
      {/* Hero Section */}
      <CareerHubHero />

      {/* Personal Career Guide Section */}
      <PersonalCareerGuide />

      {/* What We Offer Section */}
      <WhatWeOffer />

      {/* Get Job Ready Section */}
      <GetJobReady />

      {/* Career Features Icons */}
      <CareerFeatures />
      <Accreditations />
    </main>
  );
}

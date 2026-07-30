import React from 'react';
import Link from 'next/link';

export default function GetJobReady() {
  return (
    <section className="w-full bg-[#0B1F4A] flex flex-col md:flex-row min-h-[600px]">
      {/* Left Side - Image */}
      <div className="w-full md:w-[40%] lg:w-[45%] relative md:min-h-full">
        <img
          src="/carrer/carrer_2.png"
          alt="Graduates"
          className="w-full h-auto md:absolute md:inset-0 md:h-full md:object-cover block"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-[60%] lg:w-[65%] flex flex-col justify-center px-6 py-[60px] md:px-[60px] md:py-[80px]">
        <div className="w-full max-w-[800px]">
          {/* Title */}
          <h2 className="text-white text-[36px] md:text-[36px] italic mb-6 leading-tight" style={{ fontFamily: 'var(--font-dm-serif)' }}>
            Get Job Ready Before You Graduate
          </h2>

          {/* Underline */}
          <div className="w-[60px] h-[3px] bg-[#4D97E6] mb-10"></div>

          {/* Paragraphs */}
          <div className="text-white/80 text-[14px] md:text-[15px] font-light leading-relaxed space-y-6 md:space-y-8 mb-10 pr-4">
            <p>
              In order to have a competitive advantage in the job market, students need to have developed global skills during their time at university. The Ozford Student Success program helps you develop the key skills you need to be career ready once you graduate. The program will maximize your potential for academic success and prepare you to enter the job market with confidence. All workshops and students appointments are free and tailored to students' needs.
            </p>
            <p>
              While studying at Ozford, we aim to make sure all students are career ready they graduate. As part of the Ozford Job Ready program we assist students in creating their own OZFolio. An OZFolio is a career portfolio and it is the perfect tool to impress future employers. An OZFolio highlights your accomplishments, identifies your skills, and presents your qualifications in a logical sequence.
            </p>
            <p>
              You can use an OZFolio in a job interview to demonstrate your skills and abilities in a visual way allowing you to really stand out from the crowd. Get career ready. Make an appointment with the Student Success Coach or Student Career Coach to create your OZFolio and discuss potential job opportunities.
            </p>
          </div>

          {/* Button */}
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#4D97E6] hover:bg-[#3A7ECA] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-white font-medium text-[15px] px-8 py-4 rounded-sm"
            >
              Book an Appointment &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

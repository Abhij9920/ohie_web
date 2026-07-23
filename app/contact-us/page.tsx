import React from 'react';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Contact Us | Oxford Institute of Higher Education',
  description: 'Get in touch with Ozford Institute of Higher Education.',
};

export default function ContactUsPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <main className="w-full flex flex-col min-h-screen bg-white">
      <PageHeader
        breadcrumbs={breadcrumbs}
        title="Contact Us"
        hideUnderline={true}
        description="We're here to help. Reach out to us with any questions or inquiries."
      />
      
      <section className="w-full bg-[#FAFAF7] py-16 md:py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-[#2463A7] opacity-5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#0B1F4A] opacity-5 blur-3xl pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-[100px] relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column - Contact Details */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
              
              {/* Card 1: Head Office */}
              <div className="bg-white rounded-[16px] p-8 shadow-sm border border-[#E8E8E4] hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#F0F5FA] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#2463A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-[#0B1F4A] text-[20px] font-bold mb-3">Head Office</h3>
                <p className="text-[#4A4A4A] text-[15px] leading-relaxed">
                  333 Queen St,<br />Melbourne VIC 3000
                </p>
              </div>

              {/* Card 2: Brisbane Campus */}
              <div className="bg-white rounded-[16px] p-8 shadow-sm border border-[#E8E8E4] hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#F0F5FA] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#2463A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-[#0B1F4A] text-[20px] font-bold mb-3">Brisbane Campus</h3>
                <p className="text-[#4A4A4A] text-[15px] leading-relaxed">
                  433 Boundary Street,<br />Spring Hill QLD 4000
                </p>
              </div>

              {/* Card 3: Contact Info */}
              <div className="bg-[#0B1F4A] rounded-[16px] p-8 shadow-lg text-white">
                <h3 className="text-[20px] font-bold mb-8">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-[#A7BDC4] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-[#A7BDC4] text-[12px] uppercase tracking-wider font-semibold mb-1">Office Hours</p>
                      <p className="text-[15px]">Mon to Fri: 8:30AM - 5:00PM (AEST)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-[#A7BDC4] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-[#A7BDC4] text-[12px] uppercase tracking-wider font-semibold mb-1">Phone</p>
                      <p className="text-[15px]">+61 3 86637188</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-[#A7BDC4] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-[#A7BDC4] text-[12px] uppercase tracking-wider font-semibold mb-1">Email</p>
                      <a href="mailto:info@ozford.edu.au" className="text-[15px] hover:text-white transition-colors">info@ozford.edu.au</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[16px] shadow-xl shadow-black/5 border border-[#E8E8E4]">
              <div className="mb-8">
                <h2 className="text-[28px] md:text-[32px] font-bold text-[#0B1F4A] mb-3">Send a Message</h2>
                <p className="text-[#4A4A4A] text-[15px]">Fill out the form below and our admissions team will get back to you shortly.</p>
              </div>

              <form className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-[14px] font-medium text-[#2D3732]">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      placeholder="John"
                      className="w-full bg-[#FAFAF7] border border-[#E6E6DF] rounded-lg px-4 py-3.5 text-[15px] placeholder-[#9CA3AF] focus:outline-none focus:border-[#2463A7] focus:ring-1 focus:ring-[#2463A7] transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-[14px] font-medium text-[#2D3732]">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      placeholder="Doe"
                      className="w-full bg-[#FAFAF7] border border-[#E6E6DF] rounded-lg px-4 py-3.5 text-[15px] placeholder-[#9CA3AF] focus:outline-none focus:border-[#2463A7] focus:ring-1 focus:ring-[#2463A7] transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-[14px] font-medium text-[#2D3732]">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com"
                    className="w-full bg-[#FAFAF7] border border-[#E6E6DF] rounded-lg px-4 py-3.5 text-[15px] placeholder-[#9CA3AF] focus:outline-none focus:border-[#2463A7] focus:ring-1 focus:ring-[#2463A7] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-[14px] font-medium text-[#2D3732]">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="+61 400 000 000"
                    className="w-full bg-[#FAFAF7] border border-[#E6E6DF] rounded-lg px-4 py-3.5 text-[15px] placeholder-[#9CA3AF] focus:outline-none focus:border-[#2463A7] focus:ring-1 focus:ring-[#2463A7] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-[14px] font-medium text-[#2D3732]">How can we help?</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    placeholder="Tell us about your inquiry..."
                    className="w-full bg-[#FAFAF7] border border-[#E6E6DF] rounded-lg px-4 py-3.5 text-[15px] placeholder-[#9CA3AF] focus:outline-none focus:border-[#2463A7] focus:ring-1 focus:ring-[#2463A7] transition-all resize-y"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full sm:w-auto bg-[#2463A7] hover:bg-[#184882] text-white text-[15px] font-semibold py-4 px-10 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

          </div>

          {/* Full Width Map Section */}
          <div className="mt-16 md:mt-24 w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl shadow-black/5 border border-[#E8E8E4]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.860166649392!2d144.95635411559107!3d-37.8108661797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d496c84d091%3A0x7dd1cf428d1eb62a!2sOzford!5e0!3m2!1sen!2sus!4v1689255260655!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ozford Melbourne Campus Map"
              className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>

        </div>
      </section>
    </main>
  );
}

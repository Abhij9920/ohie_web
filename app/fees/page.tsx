'use client';

import Accreditations from '@/components/Accreditations';
import React from 'react';

const FeesPage = () => {
  return (
    <div className="bg-white font-sans">
      {/* Breadcrumb */}
      <div className="bg-[#0A2540] text-white py-16 px-32  text-sm">
        <div className="max-w-7xl mx-auto px-6">
          Home / Student Life / Fees Due Dates
        </div>
        <p className="max-w-7xl mx-auto px-6 font-normal text-[52px] leading-none tracking-normal font-dm-serif mt-2">
          2026 Fees
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20">




        {/* Payment Methods Section */}
        <div className="grid grid-cols-12 gap-10">
          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-3">
            <div className="sticky top-8">
              <div className="text-blue-600 font-medium mb-3">PAYMENT METHODS</div>
              <ul className="space-y-3 text-sm">
                <li className="font-medium text-[#0A2540]">Higher Education Fees</li>
                <li className="text-gray-600 hover:text-[#0A2540] cursor-pointer">Payment Due Dates</li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-12 lg:col-span-9">
            {/* Student Type Selector */}
            <div className="border border-gray-300 rounded-lg p-8 mb-12 bg-white">
              <h2 className="text-center text-2xl mb-6 font-medium">I am a...</h2>
              <div className="flex justify-center gap-4">
                <button className="bg-[#0A2540] text-white px-10 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#1a3a5f]">
                  👤 Domestic Student
                </button>
                <button className="border-2 border-[#0A2540] text-[#0A2540] px-10 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-50">
                  🌍 International Student
                </button>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                Select your student type to view relevant fees, entry requirements and support services
              </p>
            </div>
            <h3 className="text-3xl font-semibold mb-8">How to Pay</h3>

            {/* Online Payment */}
            <div className="mb-10 border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold">Online Payment – Institute of Higher Education</h4>
                <span className="text-2xl text-gray-400">−</span>
              </div>
              <a href="#" className="text-blue-600 hover:underline block mb-4">
                Click here to make a payment
              </a>
              <div className="text-sm text-gray-600 leading-relaxed">
                <strong>SECURITY POLICY</strong><br />
                All credit card data is securely transmitted through 128 bit SSL (Secure Socket Layer) encryption.
                SSL is an industry standard technology. Information sent between your browser and the bank is encrypted and secure.
              </div>
            </div>

            {/* Other Options */}
            {[
              "Direct Deposit / Telegraphic Transfer",
              "Visit Our Account Office",
              "Pay by Mail"
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-6 mb-3 flex justify-between items-center hover:bg-gray-50 cursor-pointer">
                <span className="font-medium">{item}</span>
                <span className="text-3xl text-gray-300">+</span>
              </div>
            ))}

            {/* Higher Education Fees */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-6">Higher Education Fees</h2>

              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-[#0A2540] text-white p-5 flex justify-between">
                  <span>Higher Education Fee (International Students)</span>
                  <span>−</span>
                </div>

                <div className="flex border-b">
                  <button className="px-8 py-4 bg-blue-500 text-white font-medium">Tuition Fee</button>
                  <button className="px-8 py-4 text-gray-600 hover:bg-gray-100">Other Non Tuition Fee</button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#0A2540] text-white">
                        <th className="text-left py-4 px-8 font-medium">PROGRAM</th>
                        <th className="text-left py-4 px-6 font-medium">CRICOS</th>
                        <th className="text-left py-4 px-6 font-medium">DURATION</th>
                        <th className="text-left py-4 px-6 font-medium">OFFSHORE</th>
                        <th className="text-left py-4 px-6 font-medium">ONSHORE</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        ["Higher Ed Diploma of Business", "0881048", "2 Trimesters", "$19,500", "$15,000"],
                        ["Bachelor of Business", "0881920", "6 Trimesters", "$58,500", "$55,000"],
                        ["Bachelor of Business (Accounting)", "0881930", "6 Trimesters", "$58,500", "$45,000"],
                        ["Graduate Cert in Management", "109433M", "1 Trimester", "$10,250", "$8,000"],
                        ["Graduate Diploma in Management", "107424J", "2 Trimesters", "$20,500", "$16,000"],
                        ["Master in Business Administration", "107422M", "4 Trimesters", "$41,000", "$28,000"],
                        ["Master of Professional Accounting", "107423K", "4 Trimesters", "$41,000", "$32,000"],
                        ["Bachelor of Cyber Security", "113297E", "6 Trimesters", "$58,500", "$45,000"],
                        ["Bachelor of Information Systems", "113295F", "6 Trimesters", "$58,500", "$45,000"],
                        ["Graduate Cert in IT", "115838F", "1 Trimester", "$10,250", "$8,000"],
                        ["Graduate Diploma in IT", "115640A", "2 Trimesters", "$20,500", "$16,000"],
                        ["Master of Information Technology", "115641M", "4 Trimesters", "$41,000", "$32,000"],
                        ["Graduate Diploma in Early Childhood Education", "120679C", "2 Trimesters", "$35,000", "$26,000"],
                        ["Master of Teaching (Early Childhood)", "120576B", "4 Trimesters", "$60,000", "$48,000"],
                      ].map(([program, cricos, duration, offshore, onshore], i) => (
                        <tr key={i} className="hover:bg-gray-50">
                          <td className="py-5 px-8 font-medium">{program}</td>
                          <td className="py-5 px-6 text-gray-600">{cricos}</td>
                          <td className="py-5 px-6 text-gray-600">{duration}</td>
                          <td className="py-5 px-6 font-semibold text-gray-800">{offshore}</td>
                          <td className="py-5 px-6 font-semibold text-gray-800">{onshore}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-4 px-2">
                Note: Fees shown are total course fees for the full duration of study. Fees are indicative and subject to change.
                Fees are reviewed annually and may vary over the duration of your course.
              </p>
            </div>

            {/* Payment Due Dates */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold mb-6">Payment Due Dates</h2>

              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-[#0A2540] text-white p-5">
                  Higher Education Payment Due Dates
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="text-left py-4 px-8">INTAKE DATE</th>
                        <th className="text-left py-4 px-8">STUDY PERIOD</th>
                        <th className="text-left py-4 px-8">DUE DATE</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        ["Trimester 1 2026", "02/03/2026 - 17/07/2026", "16/12/2025"],
                        ["Mid-Intake 1 2026", "27/04/2026 - 17/07/2026", "2/02/2026"],
                        ["Trimester 2 2026", "03/08/2026 - 04/12/2026", "11/05/2026"],
                        ["Mid-Intake 2 2026", "28/09/2026 - 04/12/2026", "29/06/2026"],
                        ["Trimester 3 2026", "07/12/2026 - 26/02/2027", "14/09/2026"],
                        ["Trimester 1 2027", "01/03/2027 - 16/07/2027", "21/12/2026"],
                        ["Mid-Intake 1 2027", "26/04/2027 - 16/07/2027", "8/02/2027"],
                        ["Trimester 2 2027", "02/08/2027 - 03/12/2027", "10/05/2027"],
                        ["Mid-Intake 2 2027", "27/09/2027 - 03/12/2027", "28/06/2027"],
                        ["Trimester 3 2027", "06/12/2027 - 25/02/2028", "13/09/2027"],
                        ["Trimester 1 2028", "06/03/2028 - 21/07/2028", "21/12/2027"],
                        ["Mid-Intake 1 2028", "01/05/2028 - 21/07/2028", "8/02/2028"],
                        ["Trimester 2 2028", "31/07/2028 - 31/12/2028", "10/05/2028"],
                        ["Mid-Intake 2 2028", "25/09/2028 - 31/12/2028", "28/06/2028"],
                        ["Trimester 3 2028", "04/12/2028 - 02/03/2029", "13/09/2028"],
                      ].map(([intake, period, due], i) => (
                        <tr key={i} className="hover:bg-gray-50">
                          <td className="py-5 px-8 font-medium">{intake}</td>
                          <td className="py-5 px-8 text-gray-600">{period}</td>
                          <td className="py-5 px-8 text-gray-600">{due}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
 </div>
        {/* Accreditations */}
        <Accreditations />
     
    </div>
  );
};

export default FeesPage;
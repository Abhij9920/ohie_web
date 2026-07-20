'use client';

import Accreditations from '@/components/Accreditations';
import Image from 'next/image';
import React, { useState } from 'react';

const CampusSafetyPage = () => {
    const [openSection, setOpenSection] = useState<number | null>(1);

    const toggleSection = (index: number) => {
        setOpenSection(openSection === index ? null : index);
    };

    interface AccordionItem {
        id: number;
        title: string;
        content: React.ReactNode;
    }

    const accordionItems: AccordionItem[] = [
        {
            id: 1,
            title: "1. Understanding SASH",
            content: (
                <>
                    <div className="p-4">
                        <p className="mb-6 text-[1.02em] leading-relaxed">
                            In Australia, any sexual activities imposed on another person without consent are serious offences! The offenders have committed a
                            criminal offence regardless of whether the victim is drunk, drug affected, asleep or unconscious or submits because of force or fear,
                            or if the person is under the legal age of consent.
                        </p>

                        <p className="mb-6">Consent is explained in full at the following websites:</p>

                        <ul className="list-disc pl-6 mb-8 space-y-1 text-[#4D97E6]">
                            <li>https://www.plannedparenthood.org/learn/sex-and-relationships/sexual-consent</li>
                            <li>https://sydney.edu.au/students/sexual-health-consent.html</li>
                            <li>https://aifs.gov.au/cfca/publications/age-consent-laws</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-4">Sexual harassment</h3>
                        <p className="mb-8 text-[1.02em] leading-relaxed">
                            makes a person feel offended, humiliated or intimidated. It is any unwanted or unwelcome sexual behavior, which is not mutually
                            agreed upon or consensual. Sexual harassment can be written, verbal or physical, and can happen in person or online. Both men and
                            women can experience sexual harassment. It is important to know that sexual harassment does not need to be repetitive – one incident
                            is enough to constitute sexual harassment and should be reported.
                        </p>

                        <p className="mb-2 font-medium">Information adapted from:</p>
                        <ul className="list-disc pl-6 mb-8 space-y-1 text-[#4D97E6]">
                            <li>www.humanrightscommission.vic.gov.au/discrimination/sexual-harassment</li>
                            <li>https://au.reachout.com/articles/what-is-sexual-harassment</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-4">Sexual assault</h3>
                        <p className="mb-6 text-[1.02em] leading-relaxed">
                            is commonly described as being forced, pressured or tricked into doing sexual things when you don’t want to. It is any unwanted
                            sexual behaviour that makes a person feel uncomfortable, threatened or scared.
                        </p>
                        <p className="mb-8 text-[1.02em] leading-relaxed">
                            It covers a wide range of unwanted sexual behaviours that are often used by offenders as a way to assert power and control over their
                            victims. There are many myths around what constitutes sexual assault, for e.g.:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2">
                            <li><strong>Rape:</strong> forced, unwanted sex or sexual acts.</li>
                            <li><strong>Child sexual abuse:</strong> using power over a child to involve that child in sexual activity.</li>
                            <li><strong>Indecent assault:</strong> indecent behaviour before, during or after an assault.</li>
                        </ul>

                        <p className="mb-6">
                            <strong>Information adapted from:</strong>{" "}
                            <a href="https://au.reachout.com/articles/what-is-sexual-assault" target="_blank" className="text-[#4D97E6] hover:underline">
                                https://au.reachout.com/articles/what-is-sexual-assault
                            </a>
                        </p>

                        <p className="mb-8">
                            (Information adapted from:{" "}
                            <a href="https://www.1800respect.org.au/violence-and-abuse/sexual-assault-and-violence/" target="_blank" className="text-[#4D97E6] hover:underline">
                                www.1800respect.org.au/violence-and-abuse/sexual-assault-and-violence/
                            </a>)
                        </p>

                        <p className="mb-8">
                            The{" "}
                            <a href="https://www.police.vic.gov.au/sexual-offences" target="_blank" className="text-[#4D97E6] hover:underline font-medium">
                                Victoria Police website
                            </a>{" "}
                            provides more information on what constitutes as <strong>sexual offences</strong>.
                        </p>

                        <p className="text-[1.02em] font-medium">
                            If you don’t feel right about something that has happened to you, it is OK to ask for help.
                        </p>
                    </div>
                </>
            ),
        },
        {
            id: 2,
            title: "2. Campus Safety",
            content: (
                <>
                    <div className="p-4">
                        <p className="mb-8 text-[1.02em] leading-relaxed">
                            Ozford is committed to providing and maintaining a safe and healthy learning and teaching environment for its staff and students.
                            Ozford will take all reasonable and practicable steps available to ensure the safety of all its staff and students on campus with an
                            emphasis on the <strong>prevention of accidents, injury and unacceptable conduct</strong>. Ozford is a drug and alcohol free place.
                        </p>

                        <h3 className="text-xl font-semibold mb-5">Identification Requirements</h3>

                        <p className="mb-4">
                            All staff are required to wear the Institute’s identification badges or staff ID, which displays the names of the staff members.
                        </p>
                        <p className="mb-4">
                            Students are required to carry their student ID cards with them at all times on campus. The student ID cards must be presented for
                            <strong> identity verification</strong> upon request by the Institute’s staff members.
                        </p>
                        <p className="mb-8">
                            For safety and security reasons, building occupants may be asked to leave the building if their identity cannot be verified.
                        </p>

                        <h3 className="text-xl font-semibold mb-5">Staff and Student Code of Conduct</h3>

                        <p className="mb-6 text-[1.02em] leading-relaxed">
                            The Staff and Student Code of Conduct expect staff and students to <strong>conduct</strong> themselves in a safe manner and
                            <strong>promptly report</strong> any potential or actual incidents of injuries, harassment behaviour or unsafe working conditions
                            or equipment to the reception as soon as practicable. Staff and students may be subject to disciplinary measures if any allegation
                            of misconduct is verified and upheld. In some cases where the student’s misconduct is severe, the Institute’s Executive Management
                            Team has the right to cancel the student’s enrolment.
                        </p>

                        <h3 className="text-xl font-semibold mb-5">Camera Surveillance</h3>

                        <p className="mb-8 text-[1.02em] leading-relaxed">
                            For the safety of the Campus community and the protection of assets and property, some areas of the campus are under constant
                            <strong>camera surveillance</strong>. All cameras are monitored and supported by recordings that are kept for incident investigations,
                            in recognition of the Workplace Video Surveillance Act.
                        </p>

                        <h3 className="text-xl font-semibold mb-4">Reporting Concerns</h3>

                        <p className="text-[1.02em] leading-relaxed">
                            Students are encouraged to speak to a staff member immediately or approach the reception desk on Level 10 or Ground Floor if they
                            feel unsafe or threatened on campus.
                        </p>
                    </div>
                </>
            ),
        },
        {
            id: 3,
            title: "3. Reporting SASH Incidents",
            content: (
                <>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-6">SASH Reporting – Important Message</h3>

                        <p className="mb-6 text-[1.02em] leading-relaxed">
                            The findings from the <strong>Change of Course</strong> report indicates that SASH incidents on campus are underreported.
                            To assist OIHE in making informed changes, we need your help in providing us with information which will help keep the campus safe for all.
                        </p>

                        <p className="mb-8 text-[1.02em] leading-relaxed">
                            Ozford has a <strong>zero tolerance</strong> towards sexual harassment, sexual assault and any violence and treats all reports or concerns seriously and sensitively.
                        </p>

                        <h3 className="text-xl font-semibold mb-6">How to Report a SASH Incident</h3>

                        <p className="mb-6 text-[1.02em] leading-relaxed">
                            If you or someone you know have experienced or witnessed sexual harassment, assault, threatening or other sexual misconduct
                            (sexual assault or sexual harassment – SASH) incident on campus of any form, nature or scale — even if you might think it is a minor
                            incident — you are advised to <strong>report the incident</strong> to the <strong>HOSSA</strong> or <strong>Student Welfare Officer (Student Services Unit)</strong> by email, phone or in person.
                        </p>

                        <p className="mb-6 text-[1.02em]">
                            If you did not report the incident previously, you are still encouraged to report the incident.
                        </p>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg mb-8">
                            <p className="text-[1.02em]">
                                OIHE has not received any reported incident in the past 12 months. If there was an incident and you did not report the incident
                                previously, you are still encouraged to report the incident.
                            </p>
                        </div>

                        <p className="mb-8 text-[1.02em] leading-relaxed">
                            We value your input and we will listen to you and discuss appropriate support options and take further actions to further enhance
                            the safety of the campus. With your permission, cases of sexual misconduct will be <strong>investigated</strong>. You will be required
                            to engage with the complaints process, and to provide sufficient details of their complaint to permit Ozford to conduct an assessment
                            and investigation of the case.
                        </p>

                        <h3 className="text-xl font-semibold mb-6">What Happens After Reporting</h3>

                        <p className="mb-6 text-[1.02em] leading-relaxed">
                            The outcome of the case will be determined by the findings of any investigation and the seriousness of the case. Where appropriate
                            and with your consent, the matter will be referred to Victoria Police. In your dealings with both internal and external parties during
                            the process, you will be supported by the HOSSA, Student Welfare Officer or any nominated OIHE staff.
                        </p>

                        <p className="text-[1.02em] leading-relaxed">
                            If the incident did not happen on campus, you are still encouraged to report and seek support from Ozford.
                        </p>
                    </div>
                </>
            ),
        },
        {
            id: 4,
            title: "4. Support available for students affected by SASH",
            content: (
                <>
                    <div className="p-4">
                        <p className="mb-8 text-[1.02em] leading-relaxed">
                            If you have been sexually harassed or assaulted, you might experience a range of emotions and it’s important to know there are
                            support services available at Ozford and outside that can help you. It is not something you have to live with on your own.
                            Remember – the sexual harassment or assault you have experienced was <strong>not your fault</strong> and no one can judge you as
                            you are a victim of someone else’s actions.
                        </p>

                        <h3 className="text-xl font-semibold mb-4">Urgent Help – 24/7 Support Lines</h3>
                        <ul className="list-none space-y-2 mb-10 pl-1 text-[1.02em]">
                            <li><strong>SARC</strong> – 1800 199 888 / 08 6458 1828</li>
                            <li><strong>National Sexual Assault and Domestic Family Violence Counselling Service</strong> – 1800 737 732</li>
                            <li><strong>Lifeline</strong> – 13 11 14</li>
                            <li><strong>Beyond Blue</strong> – 1300 22 4636</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-6">Immediate Steps You Can Take</h3>

                        <div className="space-y-8">
                            {/* Step 1 */}
                            <div>
                                <p className="font-semibold mb-2">1. In an emergency, ensure you’re safe and seek immediate help</p>
                                <p className="text-[1.02em]">
                                    If you or someone you know is in immediate danger of sexual misconduct or violence, or you’re worried about your safety,
                                    contact the police on <strong>000</strong> immediately and try to get to somewhere safe. Police in Australia are safe and can be trusted.
                                    <strong>000</strong> is the national Emergency number for life threatening or time critical emergencies.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div>
                                <p className="font-semibold mb-2">2. Trust Yourself</p>
                                <p className="text-[1.02em]">
                                    Remember no matter where you are from, where you work or study, who you are, your religion or your beliefs, you never have to
                                    put up with uncomfortable sexual-based behaviour. If you feel like you are on the receiving end of sexual harassment, it is
                                    important that you speak up as soon as possible.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div>
                                <p className="font-semibold mb-2">3. Seek medical and police help if required</p>
                                <p className="text-[1.02em]">
                                    If you’ve been sexually harassed or assaulted physically, medical support is essential. Try to get to a hospital or health centre
                                    for appropriate medical care. In the case of a recent sexual assault, a forensic medical examination is also possible to assist
                                    with evidence collection if you wish to report to police.
                                </p>
                            </div>

                            {/* Step 4 */}
                            <div>
                                <p className="font-semibold mb-2">4. Report the Incident to Ozford</p>
                                <p className="text-[1.02em]">
                                    Ozford has a zero tolerance towards sexual harassment, sexual assault and any violence and treats all reports seriously and sensitively.
                                    Report the incident immediately to the <strong>HOSSA</strong> or <strong>Student Welfare Officer (Student Services Unit)</strong> by email, phone or in person.
                                </p>
                            </div>

                            {/* Step 5 */}
                            <div>
                                <p className="font-semibold mb-2">5. Seek Support at Ozford</p>
                                <p className="text-[1.02em]">
                                    Ozford provides a range of support to students affected by SASH. We value your input and will listen to you and discuss appropriate
                                    support options. Private and confidential counselling services are available.
                                </p>
                            </div>

                            {/* Step 6 */}
                            <div>
                                <p className="font-semibold mb-2">6. Talk to someone</p>
                                <p className="text-[1.02em]">
                                    You can talk to a trusted friend, family member, counsellor or youth worker. Contact an organisation in your state or territory for relevant information and support.
                                </p>
                            </div>

                            {/* Step 7 */}
                            <div>
                                <p className="font-semibold mb-2">7. Seek external confidential specialised help and support</p>
                                <p className="text-[1.02em]">
                                    1800RESPECT: 1800 737 732 (24/7 free & confidential counselling)
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            ),
        },
        {
            id: 5,
            title: "5. Information on Respectful Relationship and Consent Matters",
            content: (
                <>
                    <div className="p-4">
                        <p className="mb-6 text-[1.02em] leading-relaxed">
                            Spending time with someone you like should be fun, enjoyable and something that makes you feel good. However it is important to
                            know that not all relationships you experience will necessarily be healthy ones.
                        </p>

                        <p className="mb-8 text-[1.02em] leading-relaxed">
                            A <strong>respectful relationship</strong> is one of mutual respect, trust, good communication, understanding and honesty.
                            Being in a relationship should be a positive experience for both people. We each have the right to feel safe, valued and cared
                            about in our relationships, and this is particularly important when starting a closer, intimate relationship.
                        </p>

                        <h3 className="text-xl font-semibold mb-4">A respectful relationship includes:</h3>

                        <ul className="list-disc pl-6 space-y-2 mb-8 text-[1.02em]">
                            <li>Being able to have fun together</li>
                            <li>Having respect for yourself and for your partner</li>
                            <li>Feeling comfortable</li>
                            <li>Being able to say ‘no’</li>
                            <li>Being able to make your own decisions</li>
                            <li>Feeling accepted and free to be yourself</li>
                            <li>Listening and being heard</li>
                            <li>Being able to express your thoughts and feelings honestly with each other</li>
                            <li>Being able to talk things through together and make compromises</li>
                            <li>Supporting each other through the good times and bad</li>
                        </ul>

                        <p className="mb-8">
                            Visit the link for more information about Respectful Relationships:{" "}
                            <a
                                href="https://bodytalk.org.au/relationships/respectful-relationships/"
                                target="_blank"
                                className="text-[#4D97E6] hover:underline"
                            >
                                https://bodytalk.org.au/relationships/respectful-relationships/
                            </a>
                        </p>

                        <h3 className="text-xl font-semibold mb-4">Sexual Consent</h3>
                        <p className="mb-6">
                            means that both people actively and verbally agree to sexual activity. Sexual activity means many things to different
                            people and is generally a lot more than just oral, anal or vaginal sex. It can include kissing, hugging, touching, rubbing
                            and many other behaviours that people might find pleasurable. If both people do not say “yes,” then consent has not been given.
                        </p>

                        <p className="mb-6">
                            If you have a partner, it is important for you and your partner to understand that you have the right to change your mind about what
                            you do or do not want to do at any time. This means that even if you are engaging in sexual acts with a person and you or the other
                            person changes mind, you must stop whatever you are doing and respect the other party’s wishes. Not respecting those wishes could be
                            crossing the line into illegal behaviour (sexual misconduct).
                        </p>

                        <p className="mb-6">
                            Trying to persuade someone into saying “yes” when they are not sure or do not want to have sex is not consent. It is called
                            <strong> sexual coercion</strong>.
                        </p>

                        <p className="mb-6">
                            If a person is under the influence of drugs or alcohol, they cannot legally give consent. Engaging in sexual activity with someone
                            who is under the influence of drugs or alcohol is considered rape.
                        </p>

                        <p className="mb-6">
                            A person must be a certain age in order to be able to legally give consent. This age is called the “age of consent,” and age of consent
                            laws vary from state to state. In Victoria, the age of consent is 16. A person can be charged with a sexual offence if they perform a
                            sexual act that breaks these age limits, even if the younger person agrees to it.
                        </p>
                    </div>
                </>
            ),
        },
        {
            id: 6,
            title: "6. Family Safety – Reduce Violence against Women & Children",
            content: (
                <>
                    <div className=" p-4 ">
                        <p className="mb-8 text-[1.02em] leading-relaxed">
                            Australia has well defined laws concerning domestic and family violence. Domestic and family violence can occur at home between
                            partners, housemates or family members. It includes behaviours that cause fear or threaten safety, such as hitting, choking, denying
                            essential money and insulting or constantly criticising the partner.
                        </p>

                        <h3 className="text-blue-900 text-xl font-semibold mb-4">
                            Domestic violence
                        </h3>
                        <p className="mb-8">
                            refers to acts of violence that occur in domestic settings between two people who are, or were, in an
                            intimate relationship. It includes physical, sexual, emotional, psychological and financial abuse.
                        </p>

                        <h3 className="text-blue-900 text-xl font-semibold mb-4">
                            Emotional/psychological violence
                        </h3>
                        <p className="mb-8">
                            can include a range of controlling behaviours such as control of finances, isolation from family
                            and friends, continual humiliation, threats against children or being threatened with injury or death.
                        </p>

                        <h3 className="text-blue-900 text-xl font-semibold mb-4">
                            Family violence
                        </h3>
                        <p className="mb-8">
                            is a broader term than domestic violence, as it refers not only to violence between intimate partners but also to
                            violence between family members. This includes, for example, elder abuse and adolescent violence against parents. Family violence
                            includes violent or threatening behaviour, or any other form of behaviour that coerces or controls a family member or causes that
                            family member to be fearful. In Indigenous communities, family violence is often the preferred term as it encapsulates the broader
                            issue of violence within extended families, kinship networks and community relationships, as well as intergenerational issues.
                        </p>

                        <h3 className="text-blue-900 text-xl font-semibold mb-4">
                            Family Safety Pack
                        </h3>
                        <p className="mb-6">
                            The Australian Government has developed a Family Safety Pack for men and women coming to Australia. It includes information on
                            Australia’s laws regarding domestic and family violence, sexual assault and forced marriage, and a woman’s right to be safe.
                        </p>

                        <p className="mb-6 font-medium">
                            The pack includes eight factsheets on the following topics:
                        </p>

                        <ul className="list-disc pl-6 space-y-2 mb-10 text-[1.02em]">
                            <li>Domestic and family violence</li>
                            <li>Sexual assault</li>
                            <li>Forced and early marriage</li>
                            <li>Family violence and partner visas</li>
                            <li>Dowry abuse</li>
                            <li>Female genital mutilation/cutting</li>
                            <li>LGBTIQ relationships</li>
                            <li>Trafficking and slavery</li>
                        </ul>

                        <p className="mb-6">
                            No one should have to endure an abusive relationship. Whether it’s physical violence, emotional abuse, neglect, or something else,
                            there is help available. Read about the types of abuse, how to spot an abusive relationship, and where you can get help.
                        </p>

                        <a
                            href="https://au.reachout.com/tough-times/abuse-and-violence"
                            target="_blank"
                            className="text-[#4D97E6] hover:text-[#D77B00] hover:underline font-medium"
                        >
                            https://au.reachout.com/tough-times/abuse-and-violence
                        </a>
                    </div>
                </>
            ),
        },
    ];

    return (
        <div className="font-sans bg-[#FAFAF7]">
            {/* Hero Section */}
            <div className="bg-[#0a1f3d] text-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-[#4D97E6] font-plus-jakarta font-semibold text-[12px] leading-none tracking-[1.5px] capitalize mb-2">
                        Home / Student Life / Campus Safety and Sexual Misconduct
                    </p>
                    <h1 className="font-normal italic text-[56px] leading-[110%] tracking-normal font-dm-serif">
                        Campus Safety and Sexual<br /> Misconduct
                    </h1>
                </div>
            </div>


            <div className="max-w-7xl mx-auto px-6 py-12 flex gap-12">

                {/* Main Content */}
                <div className="flex-1">
                    <div className="prose max-w-none">

                        <div className="max-w-7xl  mb-8">
                            <p className="text-[#4D97E6] font-bold text-[12px] leading-none tracking-normal uppercase font-plus-jakarta mb-2">
                                SASH POLICY
                            </p>
                            <h1 className="font-normal text-[#0B1F4A] italic text-[32px] leading-none tracking-normal font-dm-serif">
                                Preventing, Reporting and Responding to Sexual Assault and Sexual Harassment (SASH)
                            </h1>
                        </div>
                        <h2 className="text-[#0B1F4A] font-semibold text-[16px] leading-none tracking-normal font-plus-jakarta mb-6">Overview</h2>
                        <p className="font-plus-jakarta text-[#333333] font-normal text-[14px] leading-[160%] tracking-normal  mb-8">
                            Change the Course report which was released by the Australian Human Rights Commission (AHRC) in 2017
                            identified the prevention of, and response to sexual assault and sexual harassment (SASH) as an area of
                            national focus across Australian universities.
                        </p>

                        <h3 className="font-plus-jakarta text-[#333333]  text-[14px] leading-[160%] tracking-normal font-semibold mb-4">Key findings of the Change the Course report included:</h3>
                        <ul className="font-plus-jakarta text-[#333333] font-normal text-[14px] leading-[160%] tracking-normal list-disc pl-6 mb-8 space-y-2">
                            <li>The prevalence of sexual harassment and sexual assault in university settings is unacceptably high</li>
                            <li>There is significant underreporting of sexual harassment and sexual assault to universities, and</li>
                            <li>Universities need to do more to prevent incidents from occurring, and respond appropriately.</li>
                        </ul>

                        <p className="font-plus-jakarta text-[#333333] font-normal text-[14px] leading-[160%] tracking-normal mb-10 ">
                            Oxford has a zero tolerance towards sexual harassment, sexual assault and any violence and treats all
                            reports or concerns seriously and sensitively...
                        </p>
                    </div>

                    {/* Accordion Sections */}
                    <div className="space-y-4">
                        {accordionItems.map((item) => (
                            <div key={item.id} className="  overflow-hidden">
                                <button
                                    onClick={() => toggleSection(item.id)}
                                    className={`w-full px-5 py-4 flex justify-between ${openSection === item.id ? 'border border-b-0 border-[#E0D9C8]' : 'border border-[#E0D9C8]'} items-center bg-[#FFFFFF] hover:bg-gray-50 transition-colors text-left`}
                                >
                                    <span className="font-semibold text-lg">{item.title}</span>
                                    <span className="text-2xl text-[#4D97E6]">
                                        {openSection === item.id ? '−' : '+'}
                                    </span>
                                </button>
                                {openSection === item.id && (
                                    <div className="px-8 pb-8 font-plus-jakarta text-[#333333] font-normal text-[14px] leading-[160%] tracking-normal ">
                                        {item.content}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="w-80 flex-shrink-0 space-y-8">
                    {/* Chat Widget */}
                    <div className="bg-[#0a1f3d] text-white p-6 ">
                        <div className="w-14 h-14 mb-6">
                            <Image src="/message-circle.png" alt="Chat Icon" width={56} height={56} />
                        </div>

                        <h3 className="text-2xl font-semibold  font-dm-serif italic leading-tight mb-3">
                            Hi there! Have a<br />question?
                        </h3>

                        <p className=" text-[#FAFAF7] mb-4 text-[1.02em] font-plus-jakarta leading-relaxed">
                            Chat with us here.
                        </p>

                        <button className="w-full bg-[#4D97E6] hover:bg-[#3b7dd8] text-white py-3 px-5  font-semibold transition-all duration-200 flex items-center justify-center gap-2">
                            Start Live Chat →
                        </button>
                    </div>

                    {/* Quick Links */}
                    <div className=' border-[#4D97E6] border-t-2 pt-6'>
                        <h3 className="font-semibold text-[16px] mb-4 text-gray-800">Quick Links</h3>
                        <div className="space-y-3">
                            {[
                                "Student Services & Support",
                                "Career Hub",
                                "Policies & Procedures",
                                "Contact Us"
                            ].map((link) => (
                                <a
                                    key={link}
                                    href="#"
                                    className="block text-[#0B1F4A]  font-normal text-[14px] leading-none tracking-normal underline font-plus-jakarta"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Accreditations />
        </div>
    );
};

export default CampusSafetyPage;
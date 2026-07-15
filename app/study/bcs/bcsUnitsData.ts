import { CourseUnit } from "@/components/CourseUnitsAccordion";

export const bcsCategories = [
  "Core Units",
  "Electives Units"
];

export const bcsUnitsData: Record<string, CourseUnit[]> = {
  "Core Units": [
    { code: "ACC1100", title: "Accounting for Decision Making", description: "Introduces foundational accounting concepts to assist managers in making informed business decisions." },
    { code: "ECO1100", title: "Economic Principles", description: "Explores fundamental microeconomic and macroeconomic principles that drive market behavior and business strategy." },
    { code: "ICT1100", title: "Business Information Systems", description: "Examines how information systems and technologies can be leveraged to achieve business objectives." },
    { code: "ICT2100", title: "Introduction to Computer Networking", description: "Provides a foundational understanding of network topologies, hardware, and data communication principles." },
    { code: "ICT2110", title: "ICT Professional Practice and Communication", description: "Develops the communication, teamwork, and professional skills required for a successful career in ICT." },
    { code: "ICT2200", title: "Database Systems", description: "Covers the design, implementation, and management of relational databases using SQL." },
    { code: "ICT2210", title: "System Analysis and Design", description: "Introduces methodologies and tools for analyzing business requirements and designing effective information systems." },
    { code: "ICT2220", title: "Introduction to Cyber Security", description: "Provides an overview of cyber security principles, common threats, and fundamental defensive strategies." },
    { code: "ICT2400", title: "Introduction to Programming", description: "Teaches fundamental programming concepts, logic, and problem-solving using a modern programming language." },
    { code: "ICT2410", title: "Network Security", description: "Explores techniques for securing computer networks, including firewalls, VPNs, and intrusion detection systems." },
    { code: "ICT2420", title: "ICT Crime", description: "Examines the legal, ethical, and sociological aspects of cybercrime and digital offenses." },
    { code: "ICT3100", title: "Security Management and Governance", description: "Focuses on the development and implementation of security policies, risk management, and compliance frameworks." },
    { code: "ICT3300", title: "Network Architecture and Protocols", description: "Delves into advanced network design and the intricate protocols that enable modern internet communication." },
    { code: "ICT3310", title: "Vulnerability Assessment and Penetration Testing", description: "Teaches ethical hacking techniques to identify and exploit security vulnerabilities in systems and networks." },
    { code: "ICT3320", title: "Digital Forensics", description: "Covers the procedures and tools used to collect, analyze, and preserve digital evidence for investigations." },
    { code: "LAW1100", title: "Commercial Law", description: "Provides an introduction to the legal principles that govern commercial transactions and business operations." },
    { code: "MGT1000", title: "Ethics and Corporate Social Responsibility", description: "Explores the ethical dilemmas faced by modern businesses and the importance of social responsibility." },
    { code: "MGT1100", title: "Management Principles", description: "Introduces fundamental management theories and practices for leading organizations effectively." },
    { code: "MGT3100", title: "Project Management", description: "Covers the methodologies and tools required to plan, execute, and monitor projects successfully." },
    { code: "MKT1100", title: "Marketing Principles", description: "Provides an overview of marketing strategies, consumer behavior, and market analysis." },
    { code: "STA1100", title: "Business Statistics", description: "Introduces statistical methods and data analysis techniques applied in a business context." }
  ],
  "Electives Units": [
    { code: "ACC2100", title: "Financial Reporting", description: "Focuses on the preparation and interpretation of comprehensive financial statements in accordance with accounting standards." },
    { code: "ACC2110", title: "Management Accounting", description: "Explores advanced techniques for cost analysis, budgeting, and performance evaluation." },
    { code: "ACC2120", title: "Accounting Principles", description: "Deepens the understanding of accounting theory and practice for complex financial transactions." },
    { code: "ACC3100", title: "Corporate Accounting", description: "Covers the accounting requirements for corporate entities, including consolidations and group structures." },
    { code: "ACC3200", title: "Auditing and Assurance", description: "Introduces the principles and procedures of external auditing and assurance services." },
    { code: "ENT3100", title: "Innovation and Entrepreneurship", description: "Examines the processes of identifying business opportunities and launching innovative ventures." },
    { code: "FIN2100", title: "Corporate Finance", description: "Explores financial decision-making within corporations, including investment analysis and capital structure." },
    { code: "HRM2100", title: "Human Resources Management", description: "Covers strategies for recruiting, developing, and retaining a productive workforce." },
    { code: "HRM2120", title: "Organisational Behaviour", description: "Analyzes how individual and group dynamics impact organizational performance and culture." },
    { code: "ICT3110", title: "System Implementation and Service Management", description: "Focuses on deploying IT systems and managing IT services to ensure business continuity." },
    { code: "LAW2100", title: "Corporations Law", description: "Examines the legal framework governing the formation, operation, and dissolution of corporations." },
    { code: "LAW3100", title: "Taxation Law", description: "Provides an in-depth understanding of the taxation system and its implications for individuals and businesses." },
    { code: "MGT2100", title: "Operations Management", description: "Covers the design, operation, and improvement of systems that create and deliver products and services." },
    { code: "MGT2110", title: "Quality Management", description: "Explores principles and frameworks for ensuring and improving quality in organizational processes." },
    { code: "MGT2120", title: "International Management", description: "Examines the challenges and strategies of managing businesses across global markets." },
    { code: "MGT3100", title: "Project Management", description: "Covers the methodologies and tools required to plan, execute, and monitor projects successfully." },
    { code: "MGT3150", title: "Strategic Management", description: "Focuses on the formulation and implementation of strategies to achieve long-term competitive advantage." },
    { code: "MKT2100", title: "Marketing Research", description: "Introduces techniques for collecting, analyzing, and interpreting data to inform marketing decisions." },
    { code: "MKT2110", title: "Consumer Behaviour", description: "Analyzes the psychological and sociological factors that influence consumer purchasing decisions." },
    { code: "MKT2120", title: "Internet Marketing", description: "Explores digital marketing strategies, including SEO, social media, and online advertising." },
    { code: "MKT2125", title: "Brand Management", description: "Covers strategies for building, maintaining, and leveraging strong brand equity." },
    { code: "MKT2130", title: "Integrated Marketing Communications", description: "Focuses on coordinating various promotional tools to deliver a consistent brand message." },
    { code: "MKT3100", title: "International Marketing", description: "Examines strategies for adapting marketing efforts to diverse global environments and cultures." },
    { code: "MKT3150", title: "Services Marketing", description: "Explores the unique challenges and strategies involved in marketing intangible services." },
    { code: "MKT3200", title: "Strategic Marketing", description: "Focuses on developing comprehensive marketing plans aligned with overall corporate strategy." },
    { code: "WIL3500", title: "Internship", description: "Provides practical, work-integrated learning experience within a professional business or IT environment." }
  ]
};

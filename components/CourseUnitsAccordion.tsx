'use client';

import React, { useState } from 'react';

const categories = [
  "Core Units",
  "Cyber Security Specialisation Units",
  "Data Analytics Specialisation Units",
  "Software Development Specialisation Units",
  "Elective Units"
];

const unitsData: Record<string, { code: string; title: string; description: string }[]> = {
  "Core Units": [
  {
    code: "COM5981",
    title: "Professional Communications",
    description: "Professional Communications is designed to give students the skills to effectively communicate clearly and coherently to engage and interact with a range of stakeholders in a business environment using appropriate language and communication strategies. Through class presentations, role-play and interactions in the class, students will develop skills and knowledge for technology based effective oral and written presentation and articulate the most appropriate communication style that pays due attention to contextual, social, health and safety, ethical and cultural considerations."
  },
  {
    code: "ICT5000",
    title: "Data Communication and Networks",
    description: "Computer Networking involves the integration and application of software and hardware to enable communication within the same proximity or across wider geographic area. In ICT5000 Data Communication and Network, students will learn about the fundamentals of data communication and computer networks. They will develop an understanding of different types of computer networks and how data is transmitted over a computer network. After completing this unit, students will have a comprehensive understanding of computer networking concepts, risk and security compliance requirements, cyber security, network design, network management, and principles of cloud computing and of other emerging technologies to be able to develop practical real-world computer networking solutions."
  },
  {
    code: "ICT5010",
    title: "Database Design and Management",
    description: "Database Design and Management enables student to critically analyse database design concepts and development of applications that meet business requirements. Students will be able to understand and apply the advance database modelling techniques using Entity Relationship Diagrams (ERDs) and how the design can be optimised using Normalisation techniques. The unit also challenges students to reinforce these theoretical concepts and implement the solution using Structured Query Language (SQL) which is widely used in developing online E-commerce applications and ERP systems."
  },
  {
    code: "ICT5020",
    title: "Programming and Algorithms",
    description: "Programming and Algorithms provides an introduction to programming and algorithms. This unit will equip students with foundational programming knowledge and develop their conceptual understanding of algorithms. This unit covers the fundamentals of programming and algorithms, including program design, variables, data types, control structures, object-oriented programming, data structure, algorithm complexity, Big-O notation, and different search & sorting algorithms.\n\nAfter completing this unit, students will gain an understanding of communicating with computers through a programming language. In addition, students will be able to employ their programming knowledge to solve various business problems. Moreover, understanding algorithms will enable students to write efficient programs in terms of run-time and memory."
  },
  {
    code: "ICT5030",
    title: "Computer Architecture",
    description: "Computer Architecture aims to provide students an introduction to computing hardware and software. it will provide detailed overview of data representation and architecture to support complex computing. It will also cover topics such as instruction set architecture, pipelining, input/output devices, virtual memory management, and memory system design. After completing this unit, students will be able to understand how these microprocessors and architecture support complex business applications and apply techniques used for data representation, pipelining and memory management in the distributed and parallel processing computing environment."
  },
  {
    code: "ICT5100",
    title: "Cyber Security Fundamentals",
    description: "Cyber security is an essential element for any enterprise that operates in the digital world. There have been increasing trends of cyber incidents and fraud that have compromised the confidentiality, integrity, and availability of information which is essential for decision making. ICT5100 Cyber Security Fundamentals introduces students to the risks, threats, and vulnerabilities associated with cyber security. In this unit, students will develop an understanding of different cyber security incidents and how to prepare and implement a cyber security incident response plan."
  },
  {
    code: "ICT5110",
    title: "Applied Statistics and Data Analytics",
    description: "Applied Statistics and Data Analytics covers the application of statistical and data analytic techniques, such as classification, association, clustering, and regression in solving business problems. In this unit, students will learn how to define business issue as an analytical problem, build analytical models and draw useful inferences from them. The concepts of data mining, supervised and unsupervised machine learning, predictive modelling, and introduction to big data analytics will also be covered."
  },
  {
    code: "ICT5120",
    title: "Software and Systems Development",
    description: "Software and Systems Development introduces the concepts and methodologies required for the development of software and software systems. The unit covers different software life cycle models and development methodologies used in contemporary software development. It emphasises the key aspects of requirements determination, process modelling, architectural, interface and database design. Additionally, the unit concentrates on formal techniques to enable the building of reliable, robust and secure software solutions with quality integration. A focus of the unit will be on group work, which allows the students to develop their interpersonal, conflict resolution and management skills in a realistic project environment. Students will also be given the opportunity to research into a specific current aspect of software development at deeper level through an individual research report."
  },
  {
    code: "ICT6020",
    title: "ICT Governance and Professional Issues",
    description: "ICT Governance and Professional Issues is designed to develop students’ insights into ICT governance, compliance, risk, and security issues facing contemporary organisations. The unit will also examine the role of ICT in business and additionally identify emerging ICT trends and the potential impact associated with the introduction of these technologies. Students will critically evaluate the application of governance and risk standards and frameworks to these emerging technologies. This will enable students to develop a deeper knowledge of the frameworks and policies ICT executives utilise to support the delivery of business value with ICT through ICT-Business alignment in the contemporary business environment. This unit will utilise both individual and group work. The individual work will provide the student the opportunity to research into a specific emerging technology at a deeper level through a research report. The group work will help to further develop their interpersonal, conflict resolution and management skills in a simulated project environment."
  },
  {
    code: "ICT6110",
    title: "ICT Capstone Project",
    description: "ICT Capstone Project is designed as a project-based work-integrated learning activity and capstone experience for postgraduate ICT students. The unit aims to ensure that all students not only have contemporary industry-related experiences but are also engaged in higher-order work-related learning and competency development, particularly in the areas of project development, project analysis, project management, interpersonal negotiation as well as oral and written communication skills.\n\nIt is expected that students undertaking this unit will perceive themselves as creative problem solvers who can transform information into innovative solutions and strategies with sound ethical and moral and scholarly foundations. It is also expected that students in meeting the requirements of this unit, students will comply with all legal and regulatory requirements and promote sustainable business practices.\n\nThe unit is clearly designed to provide an overarching reflection, demonstration and application of the knowledge and skills gained from previously studied units.\n\nStudents will normally be assigned to a project team prior to placement. Some team members may be part of the workplace and not involved in enrolled in the course or undertaking the unit.\n\nThe unit will be under the academic supervision of WIL coordinators, informed by agreed workplace supervisors, to provide the intellectual and scholarly base necessary to successfully complete the project."
  }
  ],
  "Cyber Security Specialisation Units": [
    {
      code: "ICT6200",
      title: "Network Security",
      description: "Network Security, students will learn advanced concepts on network security and on operational and organisational security, risk management, wireless security, physical security, forensics, and network attacks. They will learn how to evaluate different vulnerabilities and threats and develop the capability to design a secure network using the appropriate tools. Students will also develop a practical understanding of networking, the importance of network segmentation and segregation, how to setup a virtual area networks (VLANs), and of the importance of cryptography to safeguard data from unauthorised access. After completing this unit, students will be able to identify different network threats and vulnerabilities, they will have a strong understanding of the legal and ethical issues related to network security, they will be able to recommend solutions considering the latest trends and to be able to communicate their solutions to different stakeholders within a business or organisation context."
    },
    {
      code: "ICT6210",
      title: "Penetration Testing",
      description: "Penetration Testing aims at developing students’ understanding of penetration testing concepts and methodologies. They will develop hacking skills as well as an understanding of the hacker’s mindset. Students will develop practical knowledge of penetration testing methodologies, threat modelling, vulnerability analysis, vulnerability scanning, social engineering and of the different types of penetration testing techniques. After completing this unit, students will have a comprehensive understanding of penetration testing concepts, tools, and techniques, as well as the ability to undertake a vulnerability assessment and to recommend real-world solutions to a diverse group of stakeholders."
    },
    {
      code: "ICT6220",
      title: "Digital Forensics and Analysis",
      description: "Digital Forensics and Analysis aims at developing students’ understanding of digital forensics concepts and ability to investigate ICT incidents. In this unit, students will study different digital forensic methodologies and the phases of digital forensics. Students will use appropriate tools and techniques to determine the cause of an incident and generate an incident report. They will also learn how to document their analyses and synthesise the information in a way that it can be easily understood by different stakeholders. After completing this unit, students will have a comprehensive understanding of digital forensics concepts, tools and techniques and they should be able to apply their knowledge to analyse real-world problems and propose viable practical solutions."
    }
  ],
  "Data Analytics Specialisation Units": [
    {
      code: "ICT6300",
      title: "Big Data Management",
      description: "Big Data Management covers the theoretical and practical aspects of big data analytics and management, the use of big data in the enterprise, and key considerations for big data mining initiatives – from planning to implement or upgrade of an organisation’s big data and/or data science platform. The unit focuses on the three key areas in big data: (i) Practical knowledge in data mining on large-scale datasets; (ii) Machine learning and predictive analytics using R and machine learning packages in R, including random forest, support vector machines, neural networks, stochastic gradient boosting, and decision trees; and (iii) Application of big data mining in the enterprise, including key requirements for a successful big data initiative."
    },
    {
      code: "ICT6310",
      title: "Data Mining",
      description: "Data Mining covers both theoretical concepts and practical aspects and methods of data mining – from visualising data, data dimension deduction, evaluation of model predictive performance and the many data mining methods. The unit focuses on hands-on and application of these methods – (i) predictive and classification methods including Multi Linear Regression, k-Nearest Neighbors, Naive Bayes Classifier, Logistic Regression, Neural Nets, Discriminated Analysis, and Model Ensembles; (ii) advanced methods in mining relationship across records; (iii) time series forecasting and smoothing; (iv) advanced methods in social network analysis and text mining."
    },
    {
      code: "ICT6320",
      title: "Data Visualisation",
      description: "Data Visualisation covers the key principles, methods, concepts and best practice in data visualisation. It explores and discuss commonly encountered problem in data visualisation and methods of designing informative figures, including the various visualisation types, and their fit for purpose – amounts, distributions, proportions, nested proportions, associations of quantitative variables, time series, trends, geospatial data, and uncertainty. It also explores the application of dashboards for big data and big data visualisation for operational intelligence with specialised data visualisation tools."
    }
  ],
  "Software Development Specialisation Units": [
    {
      code: "ICT6400",
      title: "Web and Mobile Application Development",
      description: "Web and Mobile Application Development provides an in-depth coverage of mobile and web application development including the recent developments in responsive web design. Students will learn about the client-side and server-side programming concepts and how they are applied to build dynamic web and mobile applications using HTML5, JavaScript and Extensible Markup Language (XML). It also covers theoretical and practical knowledge required for creating responsive user Interfaces for web and mobile applications development toolkits, techniques, and frameworks."
    },
    {
      code: "ICT6410",
      title: "User Experience Design",
      description: "User Experience Design covers the process, principles and guidelines that are universal and applicable to design any kind of interaction between human and non-human systems. This unit will equip students with the best practices, principles, and proven methods to ensure a quality User Experience (UX) design based on the UX lifecycle. The basic UX lifecycle activities that will be covered include Understand Needs, Design Solutions, Prototype Candidates, and Evaluate UX. After completing this unit, students will understand that UX design is an ongoing process throughout the product or system life cycle. In addition, student will be able to evaluate and design UX by considering usability, usefulness, emotional impact, and meaningfulness."
    },
    {
      code: "ICT6420",
      title: "Software Analysis and Testing",
      description: "Software Analysis and Testing provides an understanding of software analysis and testing principles and practices. This unit will equip students with the required techniques to analyse and test modern software, including object-oriented, web applications and embedded systems. This unit will cover different testing levels, activities and how to choose them correctly during the various stages of the software development life cycle. Students will learn how to design tests, write test cases, execute the tests and interpret the results. In addition, this unit also covers an open-source test automation framework, JUnit.\n\nAfter completing this unit, student should be able to perform both manual and automated testing to analyse and verify real-world software, interpret the outcomes from the tests and provide recommendations."
    }
  ],
  "Elective Units": [
    {
      code: "ICT6500",
      title: "Artificial Intelligence and Machine Learning",
      description: "ICT6500 Artificial Intelligence (AI) and Machine Learning (ML) will enable students to gain the fundamental and practical knowledge on AI/ML. It provides an understanding of how intelligent systems are designed to perceive, learn, and make decisions in complex environments. Students will explore topics such as logic and reasoning, data representation, supervised and unsupervised learning, neural networks, and reinforcement learning. The unit also introduces practical tools and programming libraries commonly used in AI and ML, such as Python, Scikit-learn, and TensorFlow, enabling students to implement and evaluate simple intelligent models. Through a combination of lectures, hands-on laboratory sessions, and a team-based project, students will develop the ability to apply AI and ML techniques to solve real-world problems. By the end of this unit, students will have developed foundational skills to design, implement, and critically evaluate AI and ML systems, preparing them for more advanced study or careers in data science, software development, and intelligent systems design."
    },
    {
      code: "ICT6510",
      title: "Natural Language Processing",
      description: "ICT6510 Natural Language Processing (NLP) introduces students to the principles, techniques, and applications of NLP, enabling computers to understand, interpret, and generate human language. The unit covers foundational topics such as text processing, feature extraction, statistical language models, and logistic regression, providing essential skills for analyzing textual data. It then progresses to advanced machine learning and deep learning methods, including word embeddings, neural networks, recurrent neural networks (RNNs), Long Short-Term Memory networks (LSTMs), Transformers, and Large Language Models (e.g., BERT, GPT), as well as Masked Language Models, machine translation, and text summarization. Students also examine ethical, social, and safety issues in NLP, including bias, fairness, and responsible AI. Through lectures, tutorials, and hands-on programming with Python frameworks such as Natural Language Toolkit (NLTK), spaCy, and Hugging Face Transformers, students gain the knowledge and skills to design, implement, and evaluate NLP applications."
    },
    {
      code: "ICT6520",
      title: "Deep Learning",
      description: "ICT6520 Deep Learning provides a comprehensive introduction to deep learning, covering the theoretical foundations, architectures, and practical applications of neural networks. Students will explore the progression from shallow networks to advanced models, learning how to design, train, and evaluate deep learning systems. The unit also introduces cutting-edge architecture such as convolutional neural networks (CNNs), recurrent neural networks (RNNs), and graph neural networks (GNNs), along with generative models including Graph neural networks (GANs) and diffusion models. Emphasis is placed on understanding model behaviour, optimization, performance metrics, and regularisation in AI applications. By the end of the unit, students will have both conceptual understanding and practical skills to implement and critically evaluate deep learning models for real-world problems."
    },
    { code: "ICT6010", title: "Cloud Computing", description: "Course description to be provided." },
    { code: "ICT6100", title: "ICT Research Methods", description: "Course description to be provided." },
    { code: "MGT6923", title: "Global Project Management", description: "Course description to be provided." },
    {
      code: "ICT6200",
      title: "Network Security",
      description: "Network Security, students will learn advanced concepts on network security and on operational and organisational security, risk management, wireless security, physical security, forensics, and network attacks. They will learn how to evaluate different vulnerabilities and threats and develop the capability to design a secure network using the appropriate tools. Students will also develop a practical understanding of networking, the importance of network segmentation and segregation, how to setup a virtual area networks (VLANs), and of the importance of cryptography to safeguard data from unauthorised access. After completing this unit, students will be able to identify different network threats and vulnerabilities, they will have a strong understanding of the legal and ethical issues related to network security, they will be able to recommend solutions considering the latest trends and to be able to communicate their solutions to different stakeholders within a business or organisation context."
    },
    {
      code: "ICT6210",
      title: "Penetration Testing",
      description: "Penetration Testing aims at developing students’ understanding of penetration testing concepts and methodologies. They will develop hacking skills as well as an understanding of the hacker’s mindset. Students will develop practical knowledge of penetration testing methodologies, threat modelling, vulnerability analysis, vulnerability scanning, social engineering and of the different types of penetration testing techniques. After completing this unit, students will have a comprehensive understanding of penetration testing concepts, tools, and techniques, as well as the ability to undertake a vulnerability assessment and to recommend real-world solutions to a diverse group of stakeholders."
    },
    {
      code: "ICT6220",
      title: "Digital Forensics and Analysis",
      description: "Digital Forensics and Analysis aims at developing students’ understanding of digital forensics concepts and ability to investigate ICT incidents. In this unit, students will study different digital forensic methodologies and the phases of digital forensics. Students will use appropriate tools and techniques to determine the cause of an incident and generate an incident report. They will also learn how to document their analyses and synthesise the information in a way that it can be easily understood by different stakeholders. After completing this unit, students will have a comprehensive understanding of digital forensics concepts, tools and techniques and they should be able to apply their knowledge to analyse real-world problems and propose viable practical solutions."
    },
    {
      code: "ICT6300",
      title: "Big Data Management",
      description: "Big Data Management covers the theoretical and practical aspects of big data analytics and management, the use of big data in the enterprise, and key considerations for big data mining initiatives – from planning to implement or upgrade of an organisation’s big data and/or data science platform. The unit focuses on the three key areas in big data: (i) Practical knowledge in data mining on large-scale datasets; (ii) Machine learning and predictive analytics using R and machine learning packages in R, including random forest, support vector machines, neural networks, stochastic gradient boosting, and decision trees; and (iii) Application of big data mining in the enterprise, including key requirements for a successful big data initiative."
    },
    {
      code: "ICT6310",
      title: "Data Mining",
      description: "Data Mining covers both theoretical concepts and practical aspects and methods of data mining – from visualising data, data dimension deduction, evaluation of model predictive performance and the many data mining methods. The unit focuses on hands-on and application of these methods – (i) predictive and classification methods including Multi Linear Regression, k-Nearest Neighbors, Naive Bayes Classifier, Logistic Regression, Neural Nets, Discriminated Analysis, and Model Ensembles; (ii) advanced methods in mining relationship across records; (iii) time series forecasting and smoothing; (iv) advanced methods in social network analysis and text mining."
    },
    {
      code: "ICT6320",
      title: "Data Visualisation",
      description: "Data Visualisation covers the key principles, methods, concepts and best practice in data visualisation. It explores and discuss commonly encountered problem in data visualisation and methods of designing informative figures, including the various visualisation types, and their fit for purpose – amounts, distributions, proportions, nested proportions, associations of quantitative variables, time series, trends, geospatial data, and uncertainty. It also explores the application of dashboards for big data and big data visualisation for operational intelligence with specialised data visualisation tools."
    },
    {
      code: "ICT6400",
      title: "Web and Mobile Application Development",
      description: "Web and Mobile Application Development provides an in-depth coverage of mobile and web application development including the recent developments in responsive web design. Students will learn about the client-side and server-side programming concepts and how they are applied to build dynamic web and mobile applications using HTML5, JavaScript and Extensible Markup Language (XML). It also covers theoretical and practical knowledge required for creating responsive user Interfaces for web and mobile applications development toolkits, techniques, and frameworks."
    },
    {
      code: "ICT6410",
      title: "User Experience Design",
      description: "User Experience Design covers the process, principles and guidelines that are universal and applicable to design any kind of interaction between human and non-human systems. This unit will equip students with the best practices, principles, and proven methods to ensure a quality User Experience (UX) design based on the UX lifecycle. The basic UX lifecycle activities that will be covered include Understand Needs, Design Solutions, Prototype Candidates, and Evaluate UX. After completing this unit, students will understand that UX design is an ongoing process throughout the product or system life cycle. In addition, student will be able to evaluate and design UX by considering usability, usefulness, emotional impact, and meaningfulness."
    },
    {
      code: "ICT6420",
      title: "Software Analysis and Testing",
      description: "Software Analysis and Testing provides an understanding of software analysis and testing principles and practices. This unit will equip students with the required techniques to analyse and test modern software, including object-oriented, web applications and embedded systems. This unit will cover different testing levels, activities and how to choose them correctly during the various stages of the software development life cycle. Students will learn how to design tests, write test cases, execute the tests and interpret the results. In addition, this unit also covers an open-source test automation framework, JUnit.\n\nAfter completing this unit, student should be able to perform both manual and automated testing to analyse and verify real-world software, interpret the outcomes from the tests and provide recommendations."
    }
  ]
};

export default function CourseUnitsAccordion() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [expandedUnit, setExpandedUnit] = useState<string | null>("COM5981");

  return (
    <section className="w-full bg-[#F8F9FA] py-16">
      <div className="max-w-[1440px] mx-auto px-4 xl:px-[100px]">

        {/* Categories (Pills) */}
        <div className="flex overflow-x-auto hide-scrollbar gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-[12px] md:text-[13px] font-bold whitespace-nowrap flex-shrink-0 transition-colors cursor-pointer ${isActive
                  ? 'bg-[#4D97E6] text-white border border-[#4D97E6]'
                  : 'bg-transparent text-[#0B1F4A] border border-[#0B1F4A]'
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Accordion List */}
        <div className="flex flex-col">
          {(unitsData[activeCategory] || []).map((unit) => {
            const isExpanded = expandedUnit === unit.code;
            return (
              <div
                key={unit.code}
                className={`border-b ${isExpanded ? 'border-b-2 border-[#4D97E6]' : 'border-gray-200'}`}
              >
                <button
                  onClick={() => setExpandedUnit(isExpanded ? null : unit.code)}
                  className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
                >
                  <span className={` ${isExpanded ? 'font-bold text-[#0B1F4A] text-[15px]' : 'font-normal text-[14px] text-[#0B1F4A]'}`}>
                    <span className="mr-2">{unit.code}</span>
                    <span>{unit.title}</span>
                  </span>
                  <span className="text-[#4D97E6] text-2xl font-light leading-none ml-4">
                    {isExpanded ? '−' : '+'}
                  </span>
                </button>

                {isExpanded && (
                  <div className="pb-8 pr-4 md:pr-12">
                    <p className="text-[#0B1F4A]/80 text-[14px] leading-relaxed font-light whitespace-pre-line">
                      {unit.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

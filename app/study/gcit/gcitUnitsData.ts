import { CourseUnit } from "@/components/CourseUnitsAccordion";

export const gcitCategories = [
  "Core Units"
];

export const gcitUnitsData: Record<string, CourseUnit[]> = {
  "Core Units": [
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
    }
  ]
};

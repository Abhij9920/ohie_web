"use client";

import React, { useState } from 'react';
import Image from 'next/image';

type Testimonial = {
  id: number;
  name: string;
  country: string;
  course: string;
  image: string;
  content?: string[];
};

const testimonialsData: Testimonial[] = [
  {
    "id": 1,
    "name": "Mr Devlin Venedict",
    "country": "Indonesia",
    "course": "Bachelor of Business",
    "image": "/testimonials/img1.webp",
    "content": [
      "This college has been a great place for me to start my journey and work towards my future goals. From the moment I joined, I felt welcomed and supported by the lecturers and staff. Everyone is approachable, friendly, and always willing to help whenever students need guidance or assistance. The positive environment makes it easier to learn, grow, and gain confidence throughout the journey.",
      "One thing I truly appreciate about this college is the supportive community that encourages students to do their best. The lecturers are patient and dedicated to helping students understand and improve. They not only teach academic knowledge but also motivate students to become more confident and responsible individuals. They also provide us with useful hints and practical advise for upcoming challenges especially for real-life job scenarios. The staff members are also kind and helpful, making the overall experience more comfortable and enjoyable.",
      "This has been a wonderful experience for me so far, and I am grateful for the opportunities and experiences I have gained while studying here. I have learned many valuable skills and met many amazing people along the way. Being part of this college community has helped me grow both personally and academically.",
      "I look forward to continuing my journey here and participating more in the community while creating more memorable experiences for my futures. I truly hope that the college will continue to grow and succeed, and I am happy to be part of its journey as well."
    ]
  },
  {
    "id": 2,
    "name": "Thuc Quy Bui",
    "country": "Vietnam",
    "course": "ELICOS and High School",
    "image": "/testimonials/img2.webp",
    "content": [
      "I am an international student from Vietnam. I have been studying at Ozford College for about three and a half years, including both the ELICOS program and three years of high school.",
      "When I first arrived in Australia, my English was quite limited, but through the ELICOS program and the support of my teachers, I have improved a lot. My confidence in speaking, writing, and understanding English has grown, and now I can express my ideas clearly in both academic and everyday situations.",
      "Ozford has provided a positive and supportive learning environment. The teachers are passionate, friendly, and always willing to help. I have developed strong skills in subjects such as English, Business, and Mathematics, and learned how to study more independently and think critically.",
      "Outside the classroom, Ozford also organises fun and educational excursions. I really enjoyed visiting the Melbourne Zoo, the museum, and the waterpark with my classmates. These experiences helped me learn more about Australian culture and created great memories with my friends.",
      "Overall, studying at Ozford has been a wonderful journey that has helped me grow academically, personally, and culturally. I am truly grateful for this experience."
    ]
  },
  {
    "id": 3,
    "name": "Nick Nguyen",
    "country": "Vietnam",
    "course": "ELICOS and High School",
    "image": "/testimonials/img3.webp",
    "content": [
      "Studying at OZFORD has been an incredible journey of growth and discovery. The learning experience at Ozford goes far beyond textbooks — it encourages critical thinking, collaboration, and real-world application of knowledge. The lecturers are not only experts in their fields but also genuinely care about each student’s progress and success.",
      "Ozford’s diverse and inclusive environment has given me the opportunity to connect with students from around the world, exchange ideas, and learn from different perspectives. This has helped me become more adaptable, confident, and globally minded.",
      "The institute’s focus on career readiness and professional development has been especially valuable. Through practical projects and industry-based learning, I’ve gained the skills and experience that will support me throughout my career.",
      "Looking ahead, I feel well-prepared to take the next steps toward achieving my goals. Ozford has shaped not only my academic abilities but also my outlook on life — inspiring me to keep learning, growing, and making a positive impact wherever I go."
    ]
  },
  {
    "id": 4,
    "name": "Ridhima Shokeen",
    "country": "India",
    "course": "BBA",
    "image": "/testimonials/img4.webp",
    "content": [
      "Studying at Ozford Institute of Higher Education has been an incredibly rewarding journey. The academic environment at Ozford is both inspiring and empowering, offering the perfect blend of theoretical knowledge and practical learning. The lecturers are highly qualified and approachable, always encouraging students to think critically and apply concepts to real-world scenarios.",
      "Beyond academics, Ozford’s inclusive and multicultural community has helped me develop strong communication and leadership skills while forming lasting friendships with students from diverse backgrounds. The institute’s focus on employability, internship opportunities, and professional development has given me the confidence and experience to step into the workforce with a clear sense of direction and purpose.",
      "I am truly grateful to Ozford for its continuous guidance, student support, and dedication to excellence. My time here has shaped me both personally and professionally, and I’m excited to apply the skills and knowledge I’ve gained to achieve success in my future career."
    ]
  },
  {
    "id": 5,
    "name": "Ms. Ratna GT",
    "country": "Nepal",
    "course": "Master of Professional Accounting",
    "image": "/testimonials/img5.webp",
    "content": [
      "I am one of the graduates from the Ozford Institute of Higher Education. Being in the whole different country, when there is not any similarities in the cultures, weather and the people it will be hard for anyone to survive. To be here holding that dream to be extra from anyone else was quite difficult. However, I survived it. Somehow, I am living my dream right now. However, when you achieve something, you will be excited to get more, do more. As we know that human beings are never satisfied. And I am working hard to get more, to achieve more. Right now, I am working in Ozford as a full time Accounts Officer. It was one of the dreams that I have ever wished for. Working in a foreign country in a white colour job. I think I am one of the luckiest people who has completed their course in the same college and got a job offered in the same institute just after graduation. I would like to thank all the people who never left my side, who believe that I can be the one for the job and who chose me by seeing something in me. While studying in Ozford, it was so much fun. Back then, the teachers were so co-operative, we can say they are more like a friend. Not only they teach us the necessary knowledge, they always motivate us by sharing the life lessons they have learned. We can discuss our personal experience and problems as well after class. Every class was so fun to be in. They always engage one of us to be part of the class activity. I remember one day we were giving the presentation and we were allowed to ask cross check questions with the opponent. That time it was so fun, the whole class was engaged in the activity. It is sometime rare to see. If I have to say about the tuition fees, it is quite less than the other institute. I have done the internship program which Ozford provides to the student where we will be working for professional companies which taught me the real life experience of workplace. It was totally different from what we have learnt. Ozford has its leisure area where we can take rest, play piano, play the foosball tabletop soccer, watch TV, take nap as well. There used to be job-orientation program as well (workshop for job interview, resume, reference writing). If someone wants to really achieve their career in the accounting or business field with reasonable tuition fees then Ozford can be one of the stepping stone. It has added the post graduate program as well in Master of Professional Accounting and Master of Business Administration, which gives the student the chance to get their desired degree. I am proud to be at Ozford!"
    ]
  },
  {
    "id": 6,
    "name": "Enzo",
    "country": "France",
    "course": "VCE",
    "image": "/testimonials/img6.webp",
    "content": [
      "My journey with Ozford started back in 2018, when I first arrived in Melbourne from France. Originally from a small city, the sudden jump into an active and dynamic city was made easier through my learning of the English language and the Australian way of life at the very cosmopolitan campus of Ozford. After studying and graduating from VCE at Ozford with an ATAR of 95.25, I am now studying a double degree of Engineering and Computer science at the University of Swinburne while concurrently embracing my responsibilities as a Marketing & Student Recruitment Officer back here, in Ozford. Reminiscing over my days at Ozford brought back many happy memories: with a dynamic and quirky teaching team, I really established a bond with those who were looking after us and our academic success. Talk about soccer to Keith, and you might very well find that you support the same teams! Moreover, this institution provides the right facilities to bring people closer together, with many versatile common areas, it is the ideal place to study with other students… Or more realistically socialise and hang out. If you see me on campus, don’t hesitate to stop me: I’m always available to provide support and assistance throughout your journey here."
    ]
  },
  {
    "id": 7,
    "name": "Ms. Yuma Ale Magar",
    "country": "Nepal",
    "course": "Bachelor of Business",
    "image": "/testimonials/img7.webp",
    "content": [
      "Students of Bachelor of Business, Ms Yuma Ale Magar achieved fantastic success with Ozford Institute of Higher Education in their outstanding academic performance of block A units of Trimester 1 in 2019. With the fantastic support provided by Ozford and her hard work, Ms Yuma Ale Magar performed exceedingly well in her Business Statistics Unit, upon which was presented with a letter of appreciation by Professor Sheikh Rahman the Academic Dean here at Ozford Institute of Higher Education. A huge congratulations from everyone here at Ozford Melbourne!"
    ]
  },
  {
    "id": 8,
    "name": "Martin",
    "country": "Colombia",
    "course": "Ozford's English Language Centre",
    "image": "/testimonials/img8.webp",
    "content": [
      "This is Martin who studied in Ozford’s English Language Centre for four months. He was able to improve his English and made lifelong friends during his time here. Through his experience living abroad he was able to adapt to the different lifestyle of living in Melbourne and meet a vast range of people from all different countries, backgrounds and cultures! Thanks to Ozford’s English Language Centre he was able to have an unforgettable experience and not only learn English, but also learn about himself and how to get to know people based on who they are."
    ]
  },
  {
    "id": 9,
    "name": "Natalia Zarate",
    "country": "Colombia",
    "course": "Diploma of Business",
    "image": "/testimonials/img9.webp",
    "content": [
      "I have chosen to study at Ozford because of its great campus and well equipped facilities; also its friendly staff are always there to help with whatever is needed; as well as they have great academic methodologies and provide different learning strategies for international students.",
      "Currently I’m doing a Higher Education Diploma of Business that will lead me to the second year of the Bachelor of Business, and I’m planning to focus my studies in marketing as one of my specializations."
    ]
  },
  {
    "id": 10,
    "name": "Yuk Yin Chan",
    "country": "Hong Kong",
    "course": "Bachelor of Business (Accounting)",
    "image": "/testimonials/img10.webp",
    "content": [
      "Hello, I am Yuki and I come from Hong Kong. I have been in Australia for more than 2 years. I like the Australia’s lifestyle. My agent suggested Ozford to me. I have been studying at Ozford for 6 months and I am very happy and enjoying study atmosphere and facilities, such as free Wifi, Library and computers at Ozford. When you have a question, the lecturers and staff will always help you to solve the problem. They are so friendly, kindly and helpful. At Ozford, I met lots of friends who came from different countries, and I could get to know different cultures from them.",
      "I know that I can improve my knowledge and skills at Ozford to prepare for my future career. Thanks to everyone at Ozford."
    ]
  },
  {
    "id": 11,
    "name": "HOA Xuan Bach",
    "country": "Vietnam",
    "course": "Bachelor of Business",
    "image": "/testimonials/img11.webp",
    "content": [
      "I have chosen Melbourne because Melbourne has been named the world’s most liveable city as well as best place for international students to study. It was my agent who recommended me to study at Ozford because it is located in the city and it makes travel so much easier. When I started study at Ozford, my first course was ELICOS and that course included many excursions and other activities which I enjoyed the most. Currently, I am studying Bachelor of Business and what I enjoy the most is the teachers. They are so passionate about the lectures and give students the best way to study and gain a deeper knowledge with the subjects. Ozford has a good facility and study environment. Even when the student didn’t have enough time to finish their assignment at home, they can still access to Ozford’s class room to finish it. The library is the place I enjoy the most when I have free time. It has a good range of different resources that a student can ask for. And finally, I want to recommend my friends to study at Ozford."
    ]
  },
  {
    "id": 12,
    "name": "XIA Yu",
    "country": "China",
    "course": "Diploma of Business (Higher Ed)",
    "image": "/testimonials/img12.webp",
    "content": [
      "I love Melbourne because it is a multicultural city and people here are very nice and friendly. Living here feel relaxed, no pressure and makes me feel like home. I am studying Bachelor of Business at Ozford. I met a lot of new friends and it helped me to improve my English faster. Teachers are very patient and help me a lot on my study. I am glad that I chose Ozford. This is my best memory in Australia and I will never forget."
    ]
  },
  {
    "id": 13,
    "name": "Shuang (Sunny) CHEN",
    "country": "China",
    "course": "Bachelor of Business (Accounting)",
    "image": "/testimonials/img13.webp",
    "content": [
      "My name is Sunny from China. I’m studying at Ozford for several months and this is my second semester here. I’m glad to study at Ozford because there are many professional teachers on the subjects and staff are helpful and nice. I met a lot of new friends came from different countries. At Ozford I feel like I am part of multi-culture society and Ozford is a pretty good school for student to learn knowledge and skills. Of course, Ozford help International student to improve their level of English. I have learnt more knowledge and skills at Ozford and I am enjoying my study time at Ozford. I am sure that after graduating I will improve my professional knowledge in my job."
    ]
  },
  {
    "id": 14,
    "name": "Vinh Phu (Ricky) BUI",
    "country": "Vietnam",
    "course": "Bachelor of Business",
    "image": "/testimonials/img14.webp",
    "content": [
      "I am Bui Vinh Phu (Ricky) from Vietnam. I have been living in Melbourne for few years now. Melbourne is one of the best cities in the world. At the moment, I have been studying at Ozford where we can share information about study and also our life styles with our friends from different countries. Ozford College is great school to study. It is good to study here and do my best in the Bachelor of Business course for my future career. Thank you Ozford."
    ]
  },
  {
    "id": 15,
    "name": "LI Xiang",
    "country": "China",
    "course": "Bachelor of Business",
    "image": "/testimonials/img15.webp",
    "content": [
      "I have been in Melbourne for the past 2 years, and I study Bachelor of Business at Ozford. I was afraid to talk with teachers and other students at first but teachers' patience and kindness helped me to improve my learning skills. I made many friends in Ozford and I am very happy to study here. This will be the most important experience in my life."
    ]
  },
  {
    "id": 16,
    "name": "Lilla Laura VIG",
    "country": "Hungary",
    "course": "Advanced Diploma of Leadership and Management",
    "image": "/testimonials/img16.webp",
    "content": [
      "I’m Lilla from Budapest, Hungary. I chose to come to Melbourne because I felt like the city is the closest to my lifestyle and the way I think about life. People here are open, easy to talk to and hold the same value as me. One of my friend recommended to study at Ozford because he thought the teaching methods are really practical and he could implement everything he learned at Ozford at his current job. I’m in the Advanced Diploma of Leadership and Management course which gives me all the knowledge to maybe one day open my own business. Until then manage and lead any business I choose to. Teachers are really helpful and always try to find the best way to explain every point in the lesson. The labs are well equipped and bright with natural lights thought the big window where I always enjoy the view to the beautiful city."
    ]
  },
  {
    "id": 17,
    "name": "Tristan Robertson",
    "country": "Australia",
    "course": "TESOL",
    "image": "/testimonials/img17.webp",
    "content": [
      "I’m an Australian who has returned to Melbourne after a couple of years abroad. Certificate IV in TESOL seemed like a great opportunity to enhance my skills and gain valuable qualifications. Throughout the course I garnered invaluable skills and insights into the teaching industry. I come into the course as an experienced teacher, having taught for two years abroad. The TESOL course gave me the opportunity to develop my skills and broaden my understanding, using cutting edge techniques and methodologies. The practical element of the course was also extremely industry relevant. Teaching real students in real classroom environments is a huge bonus. I highly recommend the TESOL course to anyone interested in this fantastic career path."
    ]
  },
  {
    "id": 18,
    "name": "Manon MORENO",
    "country": "France",
    "course": "EAP",
    "image": "/testimonials/img18.webp",
    "content": [
      "Hi, I’m Manon from France I came to Australia with the idea to learn English and a little bit more about the country and people. I’m doing EAP and I was recommended by people to come and join Ozford College. I’m glad to say that it was the best decision. I’ve met a lot of people and I’m very happy with all the teachers and staff. They are always in a good and positive attitude which make experiences enjoyable. On the other hand, I would like to talk about my experience in Melbourne. I’m sharing a house with a lot of people which bring opportunity to meet different people from different countries and culture. I’m absolutely sure that, this experience has changed my life! I will never forget all the good things that has happened to me in Australia!"
    ]
  },
  {
    "id": 19,
    "name": "Angie K",
    "country": "Malaysia",
    "course": "Diploma of Accounting",
    "image": "/testimonials/img19.webp",
    "content": [
      "I have experienced many new things while interning at Ozford College. because I was fairly new in Melbourne, everything seems unfamiliar to me. Having no basic knowledge in Accounting, I knew I needed more than just attend classes. When I heard about the internship at Ozford Accounts department I applied straightaway. I really enjoyed my time at Ozford. They have great facilities and friendly staff. I know it is hard being away from familiar faces back home, but I assure you Ozford will make you feel welcomed. As an intern in Ozford, they have provided and directed me with real work and real clients giving me the advantage of real representation of how a career in accounts receivable would look like. The internship program at Ozford College is a great opportunity because the real knowledge comes from real work experience. Thus giving me the knowledge and confidence to pursue a career in the finance industry."
    ]
  },
  {
    "id": 20,
    "name": "Andrea BONETTI",
    "country": "Italy",
    "course": "General English",
    "image": "/testimonials/img20.webp",
    "content": [
      "My name is Andrea and I’m from Italy. I came to Australia with the purpose of finding a job relating to my profession which is engineering. Meanwhile, I’m working as a bartender and attending English classes here at Ozford. Facilities and services are great. Everyone is kind and helpful. There are a lot of excursions and activities which I have enjoyed very much. Teachers are well prepared and they help you to improve your language skills continuously, even when you are chatting during a break. I’ve lived in Melbourne for 2 months and it’s a very safe city. There are a lot of bars and restaurants so it’s also enjoyable. However, it’s quite expensive (for me at least!) so you need to work hard (but pays are good!) People come to Melbourne from all over the world so you can find lots of accents which can be really difficult to understand. I think this is the main obstacle you can find. I don’t have a real plan for the future, I will stay in Melbourne for a couple of months and then we will see!"
    ]
  },
  {
    "id": 21,
    "name": "Avazbek RUSTAMBEKOV",
    "country": "Russia",
    "course": "ESSP",
    "image": "/testimonials/img21.webp",
    "content": [
      "My name is Yan and I arrived 3 weeks ago to study an English course. When I graduate I will continue my study at Secondary School. I heard about Ozford from my grandparents when I arrived in Melbourne and I chose this school because it’s easy to travel form home, also there are a lot of beautiful places near the school. I really like the teachers and staff members at Ozford. They are very kind to students and always offer help, if you don’t understand something. When I finish my Secondary School, I would like to continue my study at medical school because I want to start a doctor’s career in Australia."
    ]
  },
  {
    "id": 22,
    "name": "Zahra Noroozi",
    "country": "Iran",
    "course": "ESSP",
    "image": "/testimonials/img22.webp",
    "content": [
      "My name is Zahra. I am from Iran. I am an international student in Ozford. I enrolled in ESSP course in Ozford because Ozford is near my home and also I heard about it from my relative. I really like teachers and staff because they are so kind with students and always help students if we don’t understand clearly. I would like to continue my study at design school because I want to be a jewellery designer in the future."
    ]
  },
  {
    "id": 23,
    "name": "Juan Sebastian FERREIRA DIAZ",
    "country": "Colombia",
    "course": "EAP",
    "image": "/testimonials/img23.webp",
    "content": [
      "I don’t know why but coming to Australia has been a dream come true. Since I was a child I was interested in this country, especially its major sporting events such as Australian Open and Australian F1 Grand Prix. Then in 2011 I felt like I wanted to come here to improve my English. At that time, I didn’t have money to come to Australia so I started to work hard and save money for my trip and my English course. Last year I didn’t have a job and I had some debts. I have given my CV to different companies but I couldn’t find a job, with some money that I saved and with my parents support I decided to get out of my comfort zone and start planning my life, my future and try to do what I really want to do. I was scared because I would start a new life in a different culture and completely alone. Now, I enjoy the experience of doing everything myself. I had never cooked, washed, swept, mopped, bought meals and now I really love doing it all. Studying at Ozford has made me more confident with my English and teachers have impelled me to keep on improving it. I have experienced lovely moments at Ozford and I’ve met friendly people here. God bless you all Ozford staff."
    ]
  },
  {
    "id": 24,
    "name": "Mickael Alexandre Nicolas REYNAUD",
    "country": "France",
    "course": "General English",
    "image": "/testimonials/img24.webp",
    "content": [
      "My name is Mickael and I come from France. I would like to say thank you to everyone that I met at Ozford during my studie. I am happy to have chosen Ozford and I have learned very good English while my study here. I have improved a lot in understanding and speaking. When I first arrived in Australia and I could not understand people around me, especially when I speak to them, but now can interact with other people very easy. It is pleasure to come to school every day and learn with people that don’t speak the same language. It is interesting to develop understanding skills. I have met friendly people at school, I think it’s important to create a good atmosphere when we are all together and I’ve found that at Ozford from the first day. For my future, I would like to find a job in hospitality and catering, because I have studied this a long time ago in France and I think it is time to give it a go in Australia. I would like to speak fluent English, because in the future, I would like to open a company in foreign countries Enjoy your life and see you soon friends. Mickael"
    ]
  },
  {
    "id": 25,
    "name": "Takafumi Bote",
    "country": "Japan",
    "course": "TESOL",
    "image": "/testimonials/img25.webp",
    "content": []
  },
  {
    "id": 26,
    "name": "Zuyu ZHANG (Henrich)",
    "country": "China",
    "course": "VCE Year 10",
    "image": "/testimonials/img26.webp",
    "content": [
      "Hi, I’m Henrich. I am from China and I chose Melbourne because I love Australia. I am enjoying the multi-cultural life and also Melbourne is a beautiful city. I’ve made a lot of friends. When I came to Australia, my agent recommended me to study at Ozford. I like studying in Melbourne City and I get a lot of free time to enjoy my life. At Ozford, the teachers are all responsible, when I have questions or problems, the teacher will help me to deal with it as best as they can. The equipment and facility are complete and have advanced technology for students. For me, I like the library on level 10. It’s quiet and nice, you can find a lot of books to help with study. I am very happy to be one of the students at Ozford College. If you would like to study in Melbourne City, do not miss Ozford!"
    ]
  },
  {
    "id": 27,
    "name": "Ana Paula Costa da Silva",
    "country": "Brazil",
    "course": "General English",
    "image": "/testimonials/img27.webp",
    "content": [
      "My name is Ana Paula and I come from Brazil. I have decided to study English because I want new opportunities in my career and travel. When I renewed my visa, I was looking for a new school where I could learn more and with quality. Then I heard about Ozford and so I made an appointment to visit the college. I chose Ozford because I like the skill classes, I can practice different skills every day, such as speaking, writing, listening and reading. In addition, I have exams every week so I know how my progress is going. The campus is clean and organized, these aspects were important for my choice. The teachers are very professional and the contents are very well organized. The students are receptive and every Friday we have extra activities in new places, which is very good because you can have a relaxing time and make new friends. When I am finished my course, I am convinced that my skills would be better than when I arrived at Ozford, I believe it will be possible because the school is good and the teachers help you to achieve your goals."
    ]
  },
  {
    "id": 28,
    "name": "Jason Zhang",
    "country": "China",
    "course": "Bachelor of Business",
    "image": "/testimonials/img28.webp",
    "content": [
      "My name is Jason, and I’m from China. I have been in Melbourne for almost six months and I have been studying in Ozford for four months. Studying at Ozford is a great experience because I met a lot of new friends. Teachers are friendly and responsible. I get help not only from teachers but also from school staff. I believe I will learn the skills I need to enhance my performance in my future career."
    ]
  },
  {
    "id": 29,
    "name": "Maki Nemoto",
    "country": "Japan",
    "course": "ESSP",
    "image": "/testimonials/img29.webp",
    "content": [
      "I’m from Japan and I’m studying ESSP course at Ozford. My reasons for coming to Australia are to improve my English skills in a native country and to get many experiences. At Ozford, I gained many friends from different countries such as China, Vietnam, Cambodia and Russia. This is a very great thing that people from different countries are learning English together. I’m happy with this environment and I am able to learn about their countries. Ozford teachers are wonderful and friendly. Their teaching styles are not just talking and writing. They ask students to answer a lot, to exchange their opinions in groups and then the teacher begins to explain the topic. My experience of living in Melbourne is good. This is because transport is very comfortable, with many tram routes. I love riding in the city circle trams. It’s very useful and easy to travel around the city. My dreams for the future are to improve my Chinese skills, learn French or Korean and then I want to join the Tokyo Olympics in 2020 as an interpreter."
    ]
  },
  {
    "id": 30,
    "name": "Thi Ngoc Tram Nguyen",
    "country": "Vietnam",
    "course": "HE Diploma of Business",
    "image": "/testimonials/img30.webp",
    "content": [
      "I feel very happy when I am studying at Ozford. The online Moodle system is extremely easy to use, with lectures and tutorials which are updated every week. Ozford has small class sizes which makes me feel comfortable, and I am guided enthusiastically by my teachers. (Especially Peter) All of the teachers and staff at Ozford are very nice, friendly and kind. Most of my problems are solved quickly and efficiently. One more thing that is satisfying is the good equipment to support your study, such as the computers and library which is a perfect place to do assignments and prepare for final exams."
    ]
  },
  {
    "id": 31,
    "name": "Olivier Franck",
    "country": "France",
    "course": "General English",
    "image": "/testimonials/img31.webp",
    "content": [
      "My name is Olivier. I am 23 years old and I am from France. My hometown is Paris. I’ve been studying in Ozford for seven weeks. I study to improve my English and to meet some new people. I’ve been in Australia since the end of January. I live with a host family in West Footscray. I work for this family on weekdays and I have to look after the only child who is 8 years old. So I drop him off the school and pick him up every day. I enjoy spending time with the family and I think it’s the best way to learn English. Unfortunately I have to go back to France in June, so I will leave the school in few weeks. Teachers are very competent and they can help you for any situation that’s why I recommend you Ozford."
    ]
  },
  {
    "id": 32,
    "name": "Yoko Cheng",
    "country": "Cambodia",
    "course": "High School",
    "image": "/testimonials/img32.webp",
    "content": []
  },
  {
    "id": 33,
    "name": "Jing Wen ONG",
    "country": "Malaysia",
    "course": "High School Year 10",
    "image": "/testimonials/img33.webp",
    "content": [
      "Hi! I am Jing Wen and I was born in Malaysia. I found Ozford College over the internet and I choose Ozford because the teachers are great and so do friends. I am currently studying in year 10. I would rate the teacher equally because they are all awesome and friendly. The admissions took me around a week to get into the school which is quick. The services are great, we use lift instead of stairs. It is easier to get around. Ozford has great facilities for example we get free wifi and many computers available to use. I would recommend my friends to Ozford."
    ]
  },
  {
    "id": 34,
    "name": "Rene Rojas Parra",
    "country": "Colombia",
    "course": "ELICOS",
    "image": "/testimonials/img34.webp",
    "content": [
      "Hi, my name is Rene Rojas, I’m from Colombia I decided to come to Melbourne because this city have good opportunities and schools like Ozford where any person of any country can come to learn and improve their lives. One of my best friends recommended me this school and I chose Ozford because I saw the brochure and I liked it. I took the ELICOS course and I learned a lot of things here. I love this school because the teachers and staff are wonderful and always want to help and solve all the problems of each student. The admissions process is easy and the courses are interesting. The building have all that a student would need – library, Wi-Fi, computers to study and good classrooms with good technology. I have not doubt that I would recommend this school to all people I know because here I learned many things and I always feel Ozford like my home."
    ]
  },
  {
    "id": 35,
    "name": "Heru Tany",
    "country": "Indonesia",
    "course": "Hospitality",
    "image": "/testimonials/img35.webp",
    "content": [
      "Hi, my name is Rene Rojas, I’m from Colombia I decided to come to Melbourne because this city have good opportunities and schools like Ozford where any person of any country can come to learn and improve their lives. One of my best friends recommended me this school and I chose Ozford because I saw the brochure and I liked it. I took the ELICOS course and I learned a lot of things here. I love this school because the teachers and staff are wonderful and always want to help and solve all the problems of each student. The admissions process is easy and the courses are interesting. The building have all that a student would need – library, Wi-Fi, computers to study and good classrooms with good technology. I have not doubt that I would recommend this school to all people I know because here I learned many things and I always feel Ozford like my home."
    ]
  },
  {
    "id": 36,
    "name": "Santiago Alarcon Jaramillo",
    "country": "Colombia",
    "course": "IELTS",
    "image": "/testimonials/img36.webp",
    "content": []
  },
  {
    "id": 37,
    "name": "Celia Bui",
    "country": "Vietnam",
    "course": "ESSP",
    "image": "/testimonials/img37.webp",
    "content": [
      "Hello, My name is Celia and I’m from Vietnam. I have been in Melbourne for 2 months already. It’s not a long time than anyone else has been here before. But it is enough for me to say that Ozford College is a wonderful and a remarkable place to stay and to make friends from all around the world. I’m studying ESSP and next month I’m going to study high school at Ozford College. The greatest thing about Ozford College is you always feel welcoming, and also teachers are very supportive and it makes me feel extremely comfortable to learn. Furthermore, Ozford composed of many countries including lots of different nationalities, culture, religion and languages. Moreover, Ozford’s Services has definitely made me satisfied by how they feel about students and willing to do their best to help us with our problems. I really have a great time and lots of experiences since I got here. I would love to create more beautiful memories in Ozford College."
    ]
  },
  {
    "id": 38,
    "name": "Sam Fenner",
    "country": "Australia",
    "course": "High School Year 10",
    "image": "/testimonials/img38.webp",
    "content": [
      "My name is Sam and I was born in Australia. I moved to Melbourne with my mum, she always liked Melbourne as a city. I looked at different schools throughout Melbourne. Ozford stood out mainly because of its location in the city. I am currently in year 10. I like the most about Ozford is the timetable and staff, they are very friendly and easy to talk to. The admissions process was really quick and easy. Ozford was the first school where they use elevators, I think that’s pretty awesome. There are lots of room where you can study and the library is a great spot as well. I would definitely recommend Ozford to my friends who might have moved to Melbourne. Great school!"
    ]
  }
];

export default function TestimonialsGrid() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  return (
    <section className="w-full bg-[#FAFAF7] py-10 md:py-16 relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px] xl:px-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              onClick={() => setSelectedTestimonial(testimonial)}
              className="bg-white rounded-[12px] w-full max-w-[286px] h-[220px] flex flex-col items-center justify-center p-6 text-center shadow-[0_4px_16px_rgba(0,0,0,0.0392)] hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="w-[72px] h-[72px] rounded-full overflow-hidden mb-4 bg-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=' + testimonial.name + '&background=random';
                  }}
                />
              </div>
              <h3 className="text-[#2463A7] text-[15px] font-bold mb-1">
                {testimonial.name}
              </h3>
              <p className="text-[#71717A] text-[12px] font-normal mb-2 italic">
                {testimonial.country}
              </p>
              <p className="text-[#18181B] text-[11px] leading-tight">
                {testimonial.course}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedTestimonial(null)}>
          <div className="bg-white w-full max-w-[800px] max-h-[90vh] overflow-y-auto rounded shadow-2xl relative border-t-[4px] border-[#4D97E6]" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer" onClick={() => setSelectedTestimonial(null)}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M1 1l12 12M1 13L13 1"></path>
              </svg>
            </button>

            <div className="p-8 md:p-10">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden flex-shrink-0 bg-gray-200 shadow-md">
                  <img src={selectedTestimonial.image} alt={selectedTestimonial.name} className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=' + selectedTestimonial.name + '&background=random';
                    }}
                  />
                </div>
                <div className="text-center sm:text-left pt-2">
                  <h2 className="text-[#2463A7] text-[28px] md:text-[32px] font-medium italic mb-2 leading-none" style={{ fontFamily: 'var(--font-dm-serif)' }}>{selectedTestimonial.name}</h2>
                  <div className="text-[13px] text-[#2D3732] space-y-1">
                    <p><strong className="text-[#2463A7] font-semibold">Course:</strong> {selectedTestimonial.course}</p>
                    <p><strong className="text-[#2463A7] font-semibold">Country:</strong> {selectedTestimonial.country}</p>
                  </div>
                </div>
              </div>

              <hr className="border-[#E8E8E4] mb-8" />

              {/* Testimonial Content */}
              <div className="text-[#2D3732] text-[14px] leading-[1.8] space-y-4">
                {selectedTestimonial.content ? (
                  selectedTestimonial.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))
                ) : (
                  <>
                    <p>I am an international student from {selectedTestimonial.country}. I have been studying at Ozford College for about three and a half years...</p>
                    <p>When I first arrived in Australia, my English was quite limited, but through the {selectedTestimonial.course} program and the support of my teachers, I have improved a lot. My confidence in speaking, writing, and understanding English has grown, and now I can express my ideas clearly in both academic and everyday situations.</p>
                    <p>Ozford has provided a positive and supportive learning environment. The teachers are passionate, friendly, and always willing to help. I have developed strong skills in subjects such as English, Business, and Mathematics, and learned how to study more independently and think critically.</p>
                    <p>Outside the classroom, Ozford also organises fun and educational excursions. I really enjoyed visiting the Melbourne Zoo, the museum, and the waterpark with my classmates. These experiences helped me learn more about Australian culture and created great memories with my friends.</p>
                    <p>Overall, studying at Ozford has been a wonderful journey that has helped me grow academically, personally, and culturally. I am truly grateful for this experience.</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// Event data that can be replaced with CMS data in the future
export interface EventType {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  capacity: number;
  registrationLink?: string;
  description: string;
  longDescription?: string;
  speakers: string[];
  isFeatured: boolean;
  image?: string;
  agenda?: {
    time: string;
    title: string;
    description: string;
  }[];
  requirements?: string[];
  organizers?: string[];
  sponsors?: string[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

const events: EventType[] = [
  {
    id: "healthcare-innovation-summit",
    title: "Healthcare Innovation Summit",
    date: "Mar 15, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Carleton University, River Building",
    category: "Conference",
    capacity: 150,
    description:
      "Join us for a day of inspiring talks and discussions about the future of healthcare technology. Industry leaders will share insights on emerging trends and innovations.",
    longDescription: `The Healthcare Innovation Summit brings together industry leaders, researchers, healthcare professionals, and students to explore cutting-edge advancements in healthcare technology.

This full-day conference features keynote presentations, panel discussions, and networking opportunities focused on the intersection of technology and healthcare. Attendees will gain insights into emerging trends, discover new approaches to healthcare challenges, and connect with others passionate about healthcare innovation.

Topics covered will include artificial intelligence in diagnosis, telehealth solutions, personalized medicine, wearable technology, and the future of healthcare delivery models.`,
    speakers: ["Dr. Emily Chen", "Mark Johnson", "Sarah Williams"],
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    agenda: [
      {
        time: "9:00 AM - 9:30 AM",
        title: "Registration and Breakfast",
        description: "Check-in and enjoy a light breakfast"
      },
      {
        time: "9:30 AM - 10:30 AM",
        title: "Keynote: The Future of Healthcare Technology",
        description: "Dr. Emily Chen discusses emerging trends and predictions for healthcare innovation"
      },
      {
        time: "10:45 AM - 12:00 PM",
        title: "Panel Discussion: AI in Healthcare",
        description: "Industry experts discuss applications and challenges of AI in medical settings"
      },
      {
        time: "12:00 PM - 1:00 PM",
        title: "Lunch Break",
        description: "Networking lunch provided for all attendees"
      },
      {
        time: "1:00 PM - 2:30 PM",
        title: "Workshop Sessions",
        description: "Choose from three concurrent workshops on different healthcare technology topics"
      },
      {
        time: "2:45 PM - 3:45 PM",
        title: "The Patient Perspective",
        description: "How technology is transforming the patient experience"
      },
      {
        time: "4:00 PM - 5:00 PM",
        title: "Closing Keynote and Networking",
        description: "Final thoughts and opportunity to connect with speakers and attendees"
      }
    ],
    faqs: [
      {
        question: "Is this event open to all students?",
        answer: "Yes, all students are welcome to attend, regardless of program or field of study."
      },
      {
        question: "Do I need prior knowledge of healthcare technology?",
        answer: "No prior knowledge is required. This event is suitable for both beginners and those with experience in the field."
      },
      {
        question: "Will food be provided?",
        answer: "Yes, breakfast, lunch, and refreshments throughout the day are included with registration."
      }
    ]
  },
  {
    id: "digital-health-workshop",
    title: "Digital Health Workshop",
    date: "Mar 28, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Carleton University, STEM Complex",
    category: "Workshop",
    capacity: 30,
    description:
      "Learn hands-on skills in digital health technologies and their practical applications. This workshop is perfect for beginners looking to get started in health tech.",
    longDescription: `This interactive workshop will introduce participants to fundamental concepts and practical applications of digital health technologies. Designed for beginners and those new to health technology, this session provides a solid foundation for understanding how digital tools are transforming healthcare delivery.

Participants will engage in hands-on activities, including basic programming for health applications, exploring health data analysis, and examining user interface design for healthcare tools. The workshop emphasizes practical skills that can be applied to real-world health technology challenges.

Led by Professor David Smith, an expert in digital health innovation with extensive experience in both academic and industry settings, this workshop offers valuable insights for students interested in pursuing careers in health technology.`,
    speakers: ["Prof. David Smith"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    requirements: [
      "Laptop (required)",
      "Basic computer skills",
      "No prior programming experience needed"
    ],
    faqs: [
      {
        question: "Do I need to bring my own laptop?",
        answer: "Yes, participants should bring their own laptops for the hands-on activities."
      },
      {
        question: "Is any software installation required beforehand?",
        answer: "We recommend installing Python and Jupyter Notebook before the workshop. Installation instructions will be sent to registered participants."
      }
    ]
  },
  {
    id: "medtech-networking-event",
    title: "MedTech Networking Event",
    date: "Apr 10, 2024",
    time: "6:00 PM - 8:30 PM",
    location: "Carleton University, Innovation Lab",
    category: "Networking",
    capacity: 50,
    description:
      "Connect with fellow healthcare tech enthusiasts and industry professionals. A great opportunity to expand your network and explore potential collaborations.",
    longDescription: `The MedTech Networking Event offers a valuable opportunity for students, professionals, and industry representatives to connect in an informal setting. This evening gathering is designed to facilitate meaningful conversations and potential collaborations among individuals interested in healthcare technology innovation.

Attendees will have the chance to meet like-minded peers, learn about current industry trends, and discover possible career and research opportunities in the growing field of medical technology. The event will feature a structured networking activity to help break the ice, followed by open networking time.

Light refreshments will be provided, and representatives from various healthcare technology companies and research groups will be present. Whether you're looking for mentorship, job opportunities, or simply wanting to expand your professional network, this event provides a welcoming environment to make valuable connections.`,
    speakers: [],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    agenda: [
      {
        time: "6:00 PM - 6:30 PM",
        title: "Check-in and Welcome Refreshments",
        description: "Arrive, get your name tag, and enjoy light refreshments"
      },
      {
        time: "6:30 PM - 7:00 PM",
        title: "Structured Networking Activity",
        description: "Interactive activity designed to help attendees meet and connect"
      },
      {
        time: "7:00 PM - 8:30 PM",
        title: "Open Networking",
        description: "Connect freely with other attendees and industry representatives"
      }
    ],
    organizers: [
      "Health Tech Innovators Club",
      "Carleton University Biomedical Engineering Society"
    ]
  },
  {
    id: "health-tech-hackathon",
    title: "Health Tech Hackathon",
    date: "Apr 22-24, 2024",
    time: "48-hour event",
    location: "Carleton University, Nicol Building",
    category: "Hackathon",
    capacity: 100,
    description:
      "Put your skills to the test in this intensive 48-hour hackathon. Create innovative solutions to real-world healthcare challenges and compete for prizes.",
    longDescription: `The Health Tech Hackathon is an intensive 48-hour event where participants work in teams to develop innovative technological solutions addressing real-world healthcare challenges. This immersive experience brings together students from various disciplines—including engineering, computer science, health sciences, design, and business—to collaborate on projects with potential real-world impact.

Throughout the weekend, teams will conceptualize, design, and prototype their solutions, with access to mentorship from industry professionals and healthcare experts. The event culminates in a demo session where teams present their projects to a panel of judges from healthcare organizations, tech companies, and academic institutions.

Prizes will be awarded in several categories, including Most Innovative Solution, Best Technical Implementation, and Greatest Potential Impact. Beyond the competition aspect, this hackathon provides an excellent opportunity to apply theoretical knowledge to practical problems, build teamwork skills, and develop a project for your portfolio.

No prior hackathon experience is required, and beginners are welcome. Teams can be formed in advance or at the event. All meals and refreshments will be provided throughout the weekend.`,
    speakers: ["Multiple Mentors Available"],
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    agenda: [
      {
        time: "Day 1 - 9:00 AM",
        title: "Opening Ceremony and Team Formation",
        description: "Introduction to the hackathon, challenge presentations, and team formation"
      },
      {
        time: "Day 1 - 11:00 AM",
        title: "Hacking Begins",
        description: "Teams start working on their projects"
      },
      {
        time: "Day 1 - 3:00 PM",
        title: "Workshop: Design Thinking for Healthcare",
        description: "Optional workshop to help teams refine their concepts"
      },
      {
        time: "Day 2 - 10:00 AM",
        title: "Mentor Sessions",
        description: "One-on-one consultations with industry mentors"
      },
      {
        time: "Day 2 - 7:00 PM",
        title: "Progress Check-In",
        description: "Teams share their progress and receive feedback"
      },
      {
        time: "Day 3 - 12:00 PM",
        title: "Hacking Ends",
        description: "Teams finalize their projects"
      },
      {
        time: "Day 3 - 1:00 PM",
        title: "Project Presentations",
        description: "Teams present their solutions to judges and attendees"
      },
      {
        time: "Day 3 - 4:00 PM",
        title: "Awards Ceremony",
        description: "Winners announced and prizes awarded"
      }
    ],
    sponsors: [
      "Carleton University",
      "Ottawa Hospital Research Institute",
      "MedTech Innovation Partners",
      "HealthSolutions Inc."
    ],
    requirements: [
      "Laptop and charger",
      "Student ID",
      "Enthusiasm and creativity"
    ],
    faqs: [
      {
        question: "Do I need coding experience to participate?",
        answer: "Not necessarily. Teams need members with various skills, including design, business analysis, and healthcare knowledge. No-code tools will also be available."
      },
      {
        question: "Can I participate if I don't have a team?",
        answer: "Absolutely! We'll have a team formation session at the beginning of the event where you can join a team."
      },
      {
        question: "Is there a fee to participate?",
        answer: "No, participation is free for all students."
      }
    ]
  },
  {
    id: "ai-in-healthcare-seminar",
    title: "AI in Healthcare Seminar",
    date: "May 5, 2024",
    time: "3:00 PM - 5:00 PM",
    location: "Online (Zoom)",
    category: "Seminar",
    capacity: 200,
    description:
      "Explore the revolutionary impact of artificial intelligence on healthcare delivery and outcomes. Learn about current applications and future possibilities.",
    longDescription: `This virtual seminar explores the transformative role of artificial intelligence in modern healthcare systems. Featuring expert speakers Dr. Rachel Kim and Alex Thompson, the session will cover both current applications of AI in healthcare settings and potential future developments.

Participants will gain insights into how AI technologies are being used to improve diagnostic accuracy, personalize treatment plans, enhance administrative efficiency, and predict health outcomes. The seminar will also address ethical considerations, implementation challenges, and the evolving regulatory landscape surrounding AI in healthcare.

This online event is designed to be accessible to attendees with various levels of technical knowledge. Whether you're a student considering a career in health technology, a healthcare professional interested in technological innovations, or simply curious about how AI is reshaping healthcare, this seminar offers valuable information and perspectives.

The session will conclude with a Q&A period, allowing participants to engage directly with the speakers and delve deeper into topics of interest.`,
    speakers: ["Dr. Rachel Kim", "Alex Thompson"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1587691592099-24045742c181?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
    agenda: [
      {
        time: "3:00 PM - 3:10 PM",
        title: "Welcome and Introduction",
        description: "Overview of the seminar and introduction of speakers"
      },
      {
        time: "3:10 PM - 3:40 PM",
        title: "Current Applications of AI in Healthcare",
        description: "Dr. Rachel Kim discusses existing AI implementations in clinical settings"
      },
      {
        time: "3:40 PM - 4:10 PM",
        title: "The Future of AI in Healthcare",
        description: "Alex Thompson explores emerging technologies and future possibilities"
      },
      {
        time: "4:10 PM - 4:30 PM",
        title: "Ethical Considerations and Challenges",
        description: "Panel discussion on navigating complexities of AI implementation"
      },
      {
        time: "4:30 PM - 5:00 PM",
        title: "Q&A Session",
        description: "Interactive discussion with attendees"
      }
    ],
    faqs: [
      {
        question: "Do I need a Zoom account to attend?",
        answer: "While having a Zoom account is recommended, you can join as a guest without an account."
      },
      {
        question: "Will the seminar be recorded?",
        answer: "Yes, the recording will be available to registered participants after the event."
      }
    ]
  },
  {
    id: "medical-device-design-workshop",
    title: "Medical Device Design Workshop",
    date: "May 18, 2024",
    time: "10:00 AM - 3:00 PM",
    location: "Carleton University, Engineering Labs",
    category: "Workshop",
    capacity: 25,
    description:
      "A hands-on workshop focused on the design and prototyping of medical devices. Participants will work in teams to develop solutions for specific healthcare challenges.",
    longDescription: `This intensive hands-on workshop focuses on the principles and practices of medical device design, offering participants practical experience in developing healthcare solutions. Led by Prof. Michael Lee and Dr. Jessica Patel, experts in biomedical engineering and medical device development, this workshop provides valuable insights into the complexities of creating effective and safe medical devices.

Throughout the day, participants will work in small teams to address specific healthcare challenges, following a structured design process from problem identification to prototype development. The workshop emphasizes human-centered design approaches, regulatory considerations, and the interdisciplinary nature of medical device creation.

The session combines theoretical presentations with hands-on activities, including concept sketching, materials selection, basic prototyping, and usability testing. Participants will gain experience with design tools and methods while developing a deeper understanding of the unique constraints and opportunities in healthcare technology design.

All necessary materials and tools will be provided, and teams will have access to the engineering lab facilities. This workshop is especially valuable for students interested in careers in biomedical engineering, medical device development, or healthcare innovation.`,
    speakers: ["Prof. Michael Lee", "Dr. Jessica Patel"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    agenda: [
      {
        time: "10:00 AM - 10:30 AM",
        title: "Introduction to Medical Device Design",
        description: "Overview of design process and regulatory considerations"
      },
      {
        time: "10:30 AM - 11:15 AM",
        title: "Challenge Briefing and Team Formation",
        description: "Introduction to healthcare challenges and team assignments"
      },
      {
        time: "11:15 AM - 12:15 PM",
        title: "Concept Development",
        description: "Teams work on ideation and initial design concepts"
      },
      {
        time: "12:15 PM - 12:45 PM",
        title: "Lunch Break",
        description: "Lunch provided for all participants"
      },
      {
        time: "12:45 PM - 2:15 PM",
        title: "Prototyping Session",
        description: "Teams develop basic prototypes of their concepts"
      },
      {
        time: "2:15 PM - 3:00 PM",
        title: "Presentations and Feedback",
        description: "Teams present their solutions and receive expert feedback"
      }
    ],
    requirements: [
      "No prior experience required",
      "Notebook and pencil recommended",
      "Creative thinking"
    ],
    faqs: [
      {
        question: "Do I need engineering knowledge to participate?",
        answer: "No, this workshop is designed for participants from various backgrounds. Teams will be balanced to include different skills and perspectives."
      },
      {
        question: "What should I wear?",
        answer: "Comfortable clothing suitable for a lab environment. Closed-toe shoes are required."
      }
    ]
  }
];

export default events; 
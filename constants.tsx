
import { Project, Experience, Education, Achievement } from './types';

export const PERSONAL_INFO = {
  name: "Manoj Kumar",
  title: "B.S.(Hons.) in PHYSICS | IIT Kharagpur",
  email: "mkp4744@gmail.com",
  linkedin: "https://www.linkedin.com/in/manoj-kumar-723b56272",
  github: "https://github.com/ManojKumar1526",
  location: "Kharagpur, West Bengal",
  id: "22PH10029"
};

export const SKILLS = {
  languages: ["C++", "C", "JavaScript", "Python", "DSA"],
  webDev: ["HTML5", "CSS3", "Tailwind CSS", "DaisyUI", "Bootstrap", "React.js", "Node.js", "JWT", "Axios", "Express.js", "MongoDB", "Socket.io"],
  libraries: ["NumPy", "Matplotlib", "TanStack Query", "Zustand"],
  tools: ["VS Code", "Postman", "TinkerCAD", "Arduino", "Git & Github", "AutoCAD(Basics)"]
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Frontend Developer Intern",
    company: "ZeTheta",
    period: "May 2025 - Jul 2025",
    description: [
      "Built responsive frontends for a job simulation platform, creating student and admin dashboards from design to deploy.",
      "Implemented dynamic search and filters for simulations, allowing sorting by type, industry, duration, and difficulty.",
      "Built fast, responsive React frontends with Tailwind CSS, enabling smooth navigation and load times under 1.5s.",
      "Developed modular, reusable UI components, cutting development time by ~30% and improving project maintainability."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Ayurvedic Consultations Platform",
    category: "Full-Stack",
    period: "May 2025 - Present",
    tags: ["MERN", "JWT", "MongoDB", "REST API"],
    description: [
      "Developed e-health platform using MERN, linking patients & doctors for consults with integrated medicine marketplace.",
      "Engineered secure multi-user system with JWT & bcrypt role-based access for patients, doctors & retailers.",
      "Implemented booking, diet & yoga plans with React, REST APIs & MongoDB schemas.",
      "Built a secure RESTful API using Node.js & Express for efficient data handling."
    ],
    githubUrl: "https://github.com/ManojKumar1526/ayurvedic-app"
  },
  {
    title: "Full-Stack User Authentication System",
    category: "Full-Stack",
    period: "Jan 2025 - Feb 2025",
    tags: ["React 18", "Vite", "JWT", "Bcrypt", "Nodemailer"],
    description: [
      "Automated accounts via cron jobs & built React 18 + Vite frontend, cutting load time to ~1.5s.",
      "Built MERN auth with JWT, bcrypt (10 rounds), HTTP-only cookies & protected routes.",
      "Secure multi-modal verification via Nodemailer & Twilio with rate limits and OTP expiry.",
      "Engineered secure password reset with cryptographic tokens and 15-min expiry links."
    ],
    githubUrl: "https://github.com/ManojKumar1526/Complete_MERN_Authentication"
  },
  {
    title: "Real-Time Communication Platform",
    category: "Full-Stack",
    period: "Oct 2024 - Nov 2024",
    tags: ["Stream.io", "TanStack Query", "Zustand", "React 19"],
    description: [
      "Built real-time platform with instant messaging & social features using Stream.io for low-latency chat.",
      "Optimized React 19 UX using TanStack Query & Zustand for seamless state sync.",
      "Developed secure RESTful API with JWT auth & full social layer including friend management."
    ],
    githubUrl: "https://github.com/ManojKumar1526/streamify-video-calls-master"
  },
  {
    title: "Arduino-Based Accident Prevention Gadget",
    category: "Embedded",
    period: "Mar 2022 - Jun 2022",
    tags: ["C++", "Arduino Nano", "IR Proximity Sensor"],
    description: [
      "Developed a low cost accident prevention device using IR sensors to detect eye closure over 3 seconds.",
      "Triggering a buzzer alert for driver notification to prevent drowsiness-related accidents.",
      "Implemented a C++ program utilizing Arduino Nano for prolonged eye closure detection."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "4YRS B.S (Hons.) in Physics",
    institution: "IIT Kharagpur",
    period: "2022 - 2026 (Expected)",
    result: "7.47 / 10 CGPA"
  },
  {
    degree: "Class XII, RBSE",
    institution: "Saint Victoria Memorial Convent Sr Sec Sch",
    period: "2021",
    result: "96.80%"
  },
  {
    degree: "Class X, RBSE",
    institution: "Brilliant Public S S Sec Sch",
    period: "2019",
    result: "86.83%"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Gold Medal",
    event: "Deloitte GC OpenSoft 25",
    period: "Mar 2025 - Apr 2025",
    description: [
      "Developed multi-stage AI pipeline automating employee well-being tracking via mood scores.",
      "Engineered role-based access control securing counseling sessions and HR dashboards.",
      "Integrated Socket.io for real-time updates and chatbot conversations."
    ]
  },
  {
    title: "Silver Medal",
    event: "Inter-Hall Championship Hockey",
    period: "2024 - 2025",
    description: ["Key player on the Rajendra Prasad Hall Hockey Team."]
  },
  {
    title: "Silver Medal",
    event: "Illumination & Rangoli Making",
    period: "2024",
    description: ["Played a crucial role in securing silver medal for RP Hall."]
  }
];

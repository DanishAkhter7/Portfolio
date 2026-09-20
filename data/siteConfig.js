// 🔧 Ye file edit karo apni info dalne ke liye — sara portfolio yahan se control hota he

export const profile = {
  name: "Danish Akhter",
  role: "Full-Stack JavaScript Developer",
  tagline: "Building fast, scalable & beautiful web experiences with the MERN stack & Next.js.",
  location: "Karachi, Pakistan",
  email: "ds7493085@gmail.com",
  phone: "+92 3142820350",
  avatar: "/profile.jpg", // apni picture 'public/profile.jpg' pe daal do
  resumeUrl: "/resume.pdf", // apna resume PDF 'public/resume.pdf' pe daal do
  about: `I'm a passionate JavaScript developer who builds modern, performant
  and user-friendly web applications. From frontend to backend, I deliver
  end-to-end products using React, Next.js and Node.js. Clean code,
  scalable architecture and pixel-perfect UI are always my top priority.`,
  yearsExperience: 2,
  projectsCompleted: 15,
  happyClients: 10,
};

export const socials = {
  github: "https://github.com/DanishAkhter7",
  linkedin: "https://www.linkedin.com/in/danish-akhter-9b7939337/",
  twitter: "https://twitter.com/yourusername",
  instagram: "https://instagram.com/yourusername",
  whatsapp: "https://wa.me/923XXXXXXXXX",
};

export const skills = [
  { name: "JavaScript (ES6+)", level: 95 },
  { name: "React.js", level: 90 },
  { name: "React Native", level: 90 },
  { name: "Next.js", level: 88 },
  { name: "Node.js / Express", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "Tailwind CSS", level: 92 },
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "Git & GitHub", level: 90 },
  { name: "Meta Advertising", level: 90 },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-featured online store with cart, payments, admin dashboard aur real-time order tracking.",
    image: "/projects/project1.PNG",
    tags: ["React.js", "MongoDB", "Stripe", "Tailwind"],
    liveUrl: "https://ecommerce-project-beta-one.vercel.app/",
    githubUrl: "https://github.com/DanishAkhter7/Ecommerce-Project",
    featured: true,
  },
  {
    id: 2,
    title: "ResumeForge — AI Resume Builder",
    description:
       "AI-powered resume builder with 3 templates, smart content suggestions, and one-click PDF export.",
    image: "/projects/resumeforge.PNG",
    tags: ["React.js", "Vite", "html2canvas", "jsPDF", "OpenAI API"],
    liveUrl: "https://ai-resume-builder-project-dusky.vercel.app/",
    githubUrl: "https://github.com/DanishAkhter7/AI_Resume_Builder-Project",
    featured: true,
  },
  {
  id: 3,
  title: "Expense Tracker",
  description:
    "Full-stack expense tracking app with authentication, category tagging, and an interactive pie-chart dashboard for spending analytics. Note: not deployed live — requires running the Node.js/Express backend locally alongside the frontend for login, signup, and expense management to work.",
  image: "/projects/expense-tracker.PNG",
  tags: ["React.js", "Vite", "Tailwind CSS", "Recharts", "Node.js / Express"],
  liveUrl: "https://expence-tracker-app-frontend-git-main-bug-free.vercel.app/",
  githubUrl: "https://github.com/DanishAkhter7/Expence_Tracker-App-Frontend",
  featured: true,
},
  {
  id: 4,
  title: "AI Interview Prep — Mock Interview Generator",
  description:
    "AI-powered interview practice app that generates role-specific technical questions using the Gemini API, with bookmarking, notes, and PDF export.",
  image: "/projects/interview-prep.PNG",
  tags: ["React.js", "Vite", "Tailwind CSS", "Gemini API", "jsPDF"],
  liveUrl: "https://ai-interview-preparation-project-lemon.vercel.app/",
  githubUrl: "https://github.com/DanishAkhter7/AI_Interview_Preparation-Project",
  featured: true,
},
];

export const certificates = [
  {
    id: 1,
    title: "Front-End Web Development",
    issuer: "Meta / Coursera",
    date: "5-4-2026",
    file: "/certificates/Cert1.pdf", // apna certificate PDF yahan daal do
    credentialUrl: "", // verify link ho to daal do, warna khali chhod do
  },
  {
    id: 2,
    title: "Programming with JavaScript",
    issuer: "Meta / Coursera",
    date: "25-6-2026",
    file: "/certificates/Cert2.pdf",
    credentialUrl: "",
  },
  {
    id: 3,
    title: "React.js Developer Certification",
    issuer: "Udemy",
    date: "14-7-2026",
    file: "/certificates/Cert3.pdf",
    credentialUrl: "",
  },
    {
    id: 4,
    title: "Version Control with Git",
    issuer: "Meta / Coursera",
    date: "20-8-2026",
    file: "/certificates/Cert4.pdf", 
    credentialUrl: "", 
  },
  {
    id: 5,
    title: "Advertising with Meta",
    issuer: "Meta / Coursera",
    date: "18-9-2026",
    file: "/certificates/Cert5.pdf",
    credentialUrl: "",
  },
];

export const experience = [
  {
    role: "Frontend Developer",
    company: "Freelance / Remote",
    period: "2023 — Present",
    description:
      "Building responsive, performant web apps for clients using React, Next.js and Tailwind CSS.",
  },
  {
    role: "JavaScript Developer",
    company: "Self-Learning & Open Source",
    period: "2022 — 2023",
    description:
      "Deep-dived into modern JS, React ecosystem aur backend development with Node.js & Express.",
  },
];
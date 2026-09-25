// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import yuvaLogo from './assets/company_logo/yuva.png';
import amigosLogo from './assets/company_logo/amigos.png';

// Education Section Logo's
import sirtLogo from './assets/education_logo/sirt.png';
import lbpsLogo from './assets/education_logo/lbps.png';

// Project Section Logo's
import interviewLogo from './assets/work_logo/interview.png';
import agentMindLogo from './assets/work_logo/chatgpt.png'



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },

      { name: 'Redux', logo: reduxLogo },

      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: yuvaLogo,
    role: "Fullstack Developer",
    company: "Yuva Intern",
    date: "Sep 2026 - Oct 2026",
    desc: "Worked on web development projects during the YUVA Internship, contributing to project planning, system architecture, frontend development, implementation, testing, and documentation. Developed and improved web application components, worked with APIs and Git/GitHub, and gained practical experience in debugging, problem-solving, and the software development lifecycle.",

    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "MongoDB",
      "Git",
      "GitHub",
      "REST APIs"
    ],

  },
  {
    id: 1,
    img: amigosLogo,
    role: "Web Development Intern",

    company: "InAmigos Foundation",

    date: "OnGoing",

    desc: "Contributed to web development projects during the internship, working on project planning, system architecture, frontend development, implementation, testing, and documentation. Developed and improved web application components, worked with APIs and Git/GitHub, and gained practical experience in debugging, problem-solving, and the software development lifecycle.",

    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Git",
      "GitHub",
      "REST APIs"
    ],
  },
  
];

export const education = [
  {
    id: 0,
    img: sirtLogo,
    school: "SIRT, Bhopal",
    date: "Aug 2023 - On-Going",
    grade: "8.48 CGPA",
    desc: "I am currently pursuing a B.Tech in Computer Science and Engineering from Sagar Institute of Research and Technology, Bhopal. During my degree, I have developed a strong foundation in programming, software development, databases, and web technologies. I have worked with Java, JavaScript, React.js, Node.js, Express.js, MongoDB, PostgreSQL, and REST APIs. I have built projects including an AI Interview Agent, AgentMind – Agentic AI Assistant, and an Event Management System, gaining practical experience in full-stack development, backend APIs, authentication, database management, and Generative AI. I have also completed technical training and certifications in MERN Stack, Java & DSA, Generative AI, and Agentic AI.",

    degree: "Bachelor of Technology - B.Tech in Computer Science and Engineering",
  },

  {
    id: 1,
    img: lbpsLogo,
    school: "Lord Buddha Public School, Aurangabad Bihar",
    date: "Apr 2021 - March 2023",
    grade: "67.2%",
    desc: "I completed my class 12 education from Lord Buddha Public School, Aurangabad, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: lbpsLogo,
    school: "Lord Buddha Public School, Aurangabad Bihar",
    date: "Apr 2020 - March 2021",
    grade: "84%",
    desc: "I completed my class 10th education from Lord Buddha Public School, Aurangabad, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X) - Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Interview Agent",
    description:
      "Interview Agent is an AI-powered interview preparation platform that helps users practice technical and HR interviews through personalized AI-generated questions and feedback. Users can provide their profile and resume, and the system uses this information to generate relevant interview questions and evaluate responses.",
    image: interviewLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "Nodejs", "Mongodb", "Express.js", "LLM Api"],
    github: "https://github.com/manishkumar179/Ai_InterView_Agent/tree/main/InterviewIQ",
    webapp: "https://ai-interview-agent-client-hb8r.onrender.com",
  },


  {
  id: 1,
  title: "AgentMind – Agentic AI Assistant",
  description:
    "AgentMind is a full-stack Agentic AI assistant built using the MERN Stack that interprets user queries, reasons over context, selects appropriate tools, and executes multi-step actions. It integrates custom tool functions, weather APIs, persistent user memory, and LLM-based interactions to provide personalized, context-aware responses.",
  image: agentMindLogo,
  tags: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "Generative AI",
    "LLMs",
    "Agentic AI",
    "Prompt Engineering",
    "REST APIs"
  ],
  github: "https://github.com/manishkumar179/AGENTIC_AI/tree/main/chatgpt",
  webapp: "Not available right now..",
},

];









import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { ExperienceType, projectType, socialType } from "./type";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },

  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Blog",
    hash: "#blog",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const socialLinks: socialType[] = [
  {
    text: "Email",
    link: "mailto:abhinishere@gmail.com",
    icon: FiMail,
  },
  {
    text: "GitHub",
    link: "https://github.com/abhinishere",
    icon: FiGithub,
  },
  {
    text: "Twitter",
    link: "https://twitter.com/abhinishere",
    icon: FiTwitter,
  },
  {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/abhinishere/",
    icon: FiLinkedin,
  },
];

export const projectsData: projectType[] = [
  {
    title: "Challo",
    description:
      "Challo is a full-fledged social media app with a primary focus on live video-based discussions. Tech stack includes Flutter, Python, Firebase, AWS, and Agora SDK.",
    // tags: ["Flutter", "Python", "Firebase", "AWS", "Agora SDK"],
    source: "https://github.com/abhinishere/challo",
    image: "/challo-preview.png",
  },
  {
    title: "next-gallery-modal",
    description:
      "A WordPress-like image upload gallery modal built with Next.js, TailwindCSS, Typescript, shadcn-ui, and Supabase.",
    // tags: ["Next.js", "Tailwind", "Typescript", "Supabase", "shadcn-ui"],
    source: "https://github.com/abhinishere/next-gallery-modal",
    image: "/next-gallery-modal-preview.png",
  },
  {
    title: "varthaCMS",
    description:
      "An open-source news-focused CMS project I'm building with Next.js, Tailwind, Typescript, and Supabase.",
    // tags: [
    //   "Next.js",
    //   "Tailwind",
    //   "Typescript",
    //   "Supabase",
    //   "PostgreSQL",
    //   "shadcn-ui",
    // ],
    source: "https://github.com/varthaCMS/varthaCMS",
    image: "/varthacms-preview.png",
  },
  {
    title: "blog",
    description:
      "Blog/portfolio website built with Next.js, Tailwind, Typescript & Framer Motion.",
    // tags: [
    //   "Next.js",
    //   "Tailwind",
    //   "Typescript",
    //   "Framer-Motion",
    // ],
    source: "https://github.com/abhinishere/blog",
    image: "/blog3-preview.png",
  },
  {
    title: "nextjs-news-template",
    description:
      "Next.js template for static news, magazine, and blog websites.",
    // tags: [
    //   "Next.js",
    //   "Tailwind",
    //   "Typescript",
    // ],
    source: "https://github.com/abhinishere/nextjs-news-template",
    image: "/nextjs-news-preview.png",
  },
];

export const experiencesData: ExperienceType[] = [
  {
    title: "Full Stack Developer @ Mixedware",
    location: "Bengaluru, Karnataka",
    description:
      "I was hired as a full stack developer at Mixedware after freelancing for them for two months. I was responsible for building an AR mobile app with Flutter, ARKit, ARCore & Firebase, and a revamped web app with e-commerce functionality using TypeScript, Next/React, Node, Express, MongoDB (MERN) stack.",
    icon: CgWorkAlt,
    date: "2022 - 2023",
  },
  {
    title: "Freelance Full Stack Developer & Marketer",
    location: "Remote",
    description:
      "I freelanced as a full stack web & app developer and marketer for 2+ years with clients of all sizes, including a top price comparison site and a VR startup.",
    icon: CgWorkAlt,
    date: "2020 - 2022",
  },
  {
    title: "Developer Intern",
    location: "Calicut, Kerala",
    description:
      "Interned at Niveosys and familiarized development tools, best coding practices, and project management methodologies.",
    icon: CgWorkAlt,
    date: "2018 Jul-Aug",
  },
  {
    title: "Completed BTech in CSE",
    location: "Ernakulam, Kerala",
    description:
      "🧑‍🎓 I studied Computer Science & Engineering at SCMS School of Engineering & Technology.",
    icon: LuGraduationCap,
    date: "2015 - 2019",
  },
];

export const skillsData = [
  "HTML5/CSS3",
  "JavaScript",
  "TypeScript",
  "Python",
  "Flutter",
  "React",
  "Next.js",
  "TailwindCSS",
  "Redux",
  "Material UI",
  "Radix UI",
  "Bootstrap",
  "Contentlayer",
  "Prisma",
  "Strapi",
  "Express.js",
  "AWS",
  "Supabase",
  "Firebase",
  "MongoDB",
  "Heroku",
  "Figma",
  "Docker",
  "Git",
  "SEO",
  "PostgreSQL",
  "REST APIs",
] as const;

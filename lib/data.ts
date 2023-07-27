import React from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import challoImg from "@/public/challo-preview.png";
import modalImg from "@/public/next-gallery-modal-preview.png";
import varthacmsImg from "@/public/varthacms-preview.png";
import newsImg from "@/public/nextjs-news-preview.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Completed BTech in CSE",
    location: "Kerala, India",
    description:
      "I studied Computer Science & Engineering at SCMS School of Engineering & Technology. I was freelancing part-time while doing college, and decided to take on full-time after graduation.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Freelancer",
    location: "Kerala, India",
    description:
      "I have been working as a freelance full-stack web-and-app developer and marketer for more than three years. The tech stack I currently use includes Flutter, React, Next.js, Typescript, Tailwind, Python, Supabase, and Firebase.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Challo",
    description:
      "Built with Flutter and Firebase, Challo is a full-fledged social media app with a primary focus on live video-based discussions.",
    tags: ["Flutter", "Python", "Firebase", "AWS", "Agora SDK"],
    imageUrl: challoImg,
  },
  {
    title: "next-gallery-modal",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["Next.js", "Tailwind", "Typescript", "Supabase", "shadcn-ui"],
    imageUrl: modalImg,
  },
  {
    title: "varthaCMS",
    description:
      "An open-source news-focused CMS project I'm building with Next.Js, Tailwind, Typescript, and Supabase.",
    tags: [
      "Next.js",
      "Tailwind",
      "Typescript",
      "Supabase",
      "PostgreSQL",
      "shadcn-ui",
    ],
    imageUrl: varthacmsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

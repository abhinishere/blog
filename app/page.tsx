"use client";

import Hero from "@/components/hero-profile";
import HeroText from "@/components/hero-text";
import Projects from "@/components/projects";
import { motion } from "framer-motion";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main
      className="mx-auto  max-w-2xl px-20 space-y-10 sm:space-y-14"
      // className="flex flex-col items-center px-4 "
    >
      <Hero />
      <motion.div
        className="space-y-10 sm:space-y-14"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        <HeroText />
        <hr className="h-px border-0 dark:bg-[#878787]" />
        <Projects />
        <hr className="h-px border-0 dark:bg-[#878787]" />
        <Skills />
        <hr className="h-px border-0 dark:bg-[#878787]" />
        <Experience />
        <hr className="h-px border-0 dark:bg-[#878787]" />
        <Blog />
        <hr className="h-px border-0 dark:bg-[#878787]" />
        <Contact />
        <hr className="h-px border-0 dark:bg-[#878787]" />
        <Footer />
      </motion.div>
    </main>
  );
}

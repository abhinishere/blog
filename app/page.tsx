"use client";

import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="mx-auto  max-w-2xl px-20"
      // className="flex flex-col items-center px-4 "
    >
      <Hero />
    </main>
  );
}

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      key="home"
      className="ml:space-y-10 space-y-14 scroll-mt-[100rem]"
    >
      <div className="flex items-center space-x-5">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            src="/abhin-profile.jpg"
            alt=""
            height={200}
            width={200}
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[0.30rem] border-[#8B5FBF] shadow-xl"
          />
        </motion.div>
        <motion.div
          initial={{ x: 25, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold">
            Abhin Mahipal
          </h2>
          <p className="lg:text-lg md:text-base sm:text-sm font-light">
            Freelance Developer
          </p>
        </motion.div>
      </div>
    </section>
  );
}

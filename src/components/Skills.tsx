"use client";

import { SKILLS } from "@/config/constants";
import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";

export const Skills = () => (
  <section id="skills">
    <AnimatedText text="Skills" className="lg:!text-8xl md:!text-7xl !text-6xl my-20" />
    <div className="flex flex-wrap justify-center gap-4">
      {SKILLS.map((skill, index) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.04 }}
          className="rounded-full border border-dark/20 dark:border-light/30 bg-light dark:bg-dark px-5 py-3 text-sm sm:text-base font-semibold shadow-md"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </section>
);

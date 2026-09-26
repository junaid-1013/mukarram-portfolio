"use client";

import { AnimatedText, Layout } from "@/components";
import { DESIGN_PROJECTS, VIDEO_PROJECTS, WEB_PROJECTS } from "@/config/constants";
import { motion } from "framer-motion";
import { LuArrowUpRight, LuFilm, LuLayoutTemplate, LuMonitor } from "react-icons/lu";

const cardMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
};

const coverColors = [
  "from-violet-800 to-fuchsia-600",
  "from-sky-800 to-cyan-600",
  "from-rose-800 to-orange-600",
  "from-emerald-800 to-teal-500",
  "from-indigo-800 to-blue-600",
  "from-amber-800 to-yellow-600",
];

const ProjectCard = ({ title, link, type, index }: { title: string; link: string; type: "design" | "web"; index: number }) => (
  <motion.a
    {...cardMotion}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Open ${title} ${type === "design" ? "design in Figma" : "website"}`}
    className="group flex flex-col overflow-hidden rounded-3xl border border-dark/10 bg-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl dark:border-light/15 dark:bg-[#242424]"
  >
    <div className={`relative flex h-44 items-start justify-between overflow-hidden bg-gradient-to-br p-6 text-white ${coverColors[index % coverColors.length]}`}>
      <span className="rounded-full border border-white/35 bg-black/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
        {type === "design" ? "UI/UX Design" : "Web Development"}
      </span>
      <LuArrowUpRight className="text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
      <span aria-hidden="true" className="absolute -bottom-16 right-2 select-none text-[11rem] font-black leading-none opacity-20">
        {title.slice(0, 1).toUpperCase()}
      </span>
    </div>
    <div className="flex min-h-36 flex-col justify-between p-6">
      <span className="mb-3 block text-sm font-medium opacity-50">{String(index + 1).padStart(2, "0")}</span>
      <h3 className="text-xl font-bold sm:text-2xl">{title}</h3>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4">
        {type === "design" ? "View in Figma" : "Visit website"}
        {type === "design" ? <LuLayoutTemplate aria-hidden="true" /> : <LuMonitor aria-hidden="true" />}
      </span>
    </div>
  </motion.a>
);

export const Projects = () => (
  <div className="mb-24 dark:text-light">
    <section id="design" className="scroll-mt-16">
      <Layout>
        <AnimatedText text="UI/UX Design" className="mb-5 lg:!text-8xl md:!text-7xl !text-5xl" />
        <p className="mb-12 text-center text-base text-dark/70 dark:text-light/70 sm:text-lg">
          Interfaces and digital experiences. Open each project to explore the design in Figma.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {DESIGN_PROJECTS.map((project, index) => (
            <ProjectCard key={project.link} {...project} type="design" index={index} />
          ))}
        </div>
      </Layout>
    </section>

    <section id="web" className="scroll-mt-16">
      <Layout>
        <AnimatedText text="Web Development" className="mb-5 lg:!text-8xl md:!text-7xl !text-5xl" />
        <p className="mb-12 text-center text-base text-dark/70 dark:text-light/70 sm:text-lg">
          Selected live websites.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {WEB_PROJECTS.map((project, index) => (
            <ProjectCard key={project.link} {...project} type="web" index={index} />
          ))}
        </div>
      </Layout>
    </section>

    <section id="video" className="scroll-mt-16">
      <Layout>
        <AnimatedText text="Videography" className="mb-5 lg:!text-8xl md:!text-7xl !text-5xl" />
        <p className="mb-12 text-center text-base text-dark/70 dark:text-light/70 sm:text-lg">
          A selection of video and editing projects.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {VIDEO_PROJECTS.map(({ title, src }) => (
            <motion.article
              key={src}
              {...cardMotion}
              className="overflow-hidden rounded-3xl border border-dark/10 bg-white shadow-lg dark:border-light/15 dark:bg-[#242424]"
            >
              <video
                controls
                preload="metadata"
                playsInline
                className="aspect-video w-full bg-black object-contain"
                aria-label={title}
              >
                <source src={src} type="video/mp4" />
                Your browser does not support video playback.
              </video>
              <div className="flex items-center gap-3 p-5 sm:p-6">
                <LuFilm className="text-xl" aria-hidden="true" />
                <h3 className="text-xl font-bold">{title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </Layout>
    </section>
  </div>
);

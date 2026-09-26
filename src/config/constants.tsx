import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { ExperienceProps } from "./types";

export const NAV_LINKS = [
  { title: "Home", link: "/" },
  { title: "UI/UX", link: "#design" },
  { title: "Web", link: "#web" },
  { title: "Video", link: "#video" },
  { title: "About", link: "#about" },
];

export const DESIGN_PROJECTS = [
  { title: "Blockspy", link: "https://www.figma.com/design/dd7h9MMlsQ6udE795czkAz/Blockspy" },
  { title: "Gmap Content Shots", link: "https://www.figma.com/design/rU2GuDTyN2bKjhOYo1DQjn/Gmap-content-shots" },
  { title: "Bubble.io Eng", link: "https://www.figma.com/design/rYiHH5okdHwXhbLwDVGt1x/Bubble.io-Eng" },
  { title: "Backdoor Alert", link: "https://www.figma.com/design/vvE6FJT58Ymz8SEvlqvGUo/Backdoor-Alert?node-id=28031-4999" },
  { title: "Strodle Delivery", link: "https://www.figma.com/file/hs95b28osu9pNN9aJF3ntg/Strodle-Delivery" },
  { title: "Hedgehog Mobile App", link: "https://www.figma.com/file/kzxp7HaAhvhOImU14UwNn3/Hedgehog-Mobile-App" },
  { title: "Catalina Whale", link: "https://www.figma.com/file/nT8MqAlOxizlTFOZiGc8eG/Catalina-Whale" },
  { title: "Creatorset", link: "https://www.figma.com/file/o9Ece8lJfAq4SkQKaFbdVi/creatorset.com" },
  { title: "Zorgpartner", link: "https://www.figma.com/design/zUadjViT2iNCQU499nUCVn/Zorgpartner" },
];

export const WEB_PROJECTS = [
  { title: "All You Need", link: "https://all-you-need-pink.vercel.app/" },
  { title: "Vintage Studio", link: "https://vintage-studio-two.vercel.app/" },
  { title: "Sample Websites", link: "https://new-sample-webistes-xdnw.vercel.app/" },
];

export const VIDEO_PROJECTS = [
  { title: "AEN Edit", src: "/videos/aen-edit.mp4" },
  { title: "Cutout Edit", src: "/videos/cutout-edit.mp4" },
  { title: "Real Estate Edit", src: "/videos/real-estate-edit.mp4" },
  { title: "Video Edit", src: "/videos/video-edit.mp4" },
];

export const SKILLS = [
  "UI/UX Design",
  "Figma",
  "Canva",
  "Video Editing",
  "Adobe Premiere Pro",
  "WordPress",
  "HTML",
  "CSS / Sass",
  "Vue.js",
  "PHP / Laravel",
  "MySQL",
];

export const EDUCATION_DATA = [
  {
    title: "Bachelor of Science in Computer Science",
    date: "2020–2024",
    location: "COMSATS University Islamabad, Lahore Campus",
    icon: React.createElement(LuGraduationCap),
    info: "Computer Science graduate with a focus on web development and design.",
  },
];

export const EXPERIENCE_DATA: ExperienceProps[] = [
  {
    id: "rex",
    title: "Website Developer",
    company: "Rex Technologies",
    label: "Rex Technologies",
    period: "September 2024 – Present",
    details: ["Website development, including WordPress and PHP work."],
    certificate: "/certificates/rex-technologies-experience.pdf",
  },
  {
    id: "fiverr",
    title: "UI/UX Designer & Video Editor",
    company: "Fiverr",
    label: "Freelance",
    period: "2022 – Present",
    details: ["Level 1 seller creating user-focused designs and edited video content for clients."],
  },
  {
    id: "naubahar",
    title: "Sales & Marketing Intern",
    company: "NauBahar Bottling Company",
    label: "NauBahar",
    period: "Completed August 2024",
    details: ["Completed an internship in the sales and marketing department."],
    certificate: "/certificates/naubahar-internship.pdf",
  },
];

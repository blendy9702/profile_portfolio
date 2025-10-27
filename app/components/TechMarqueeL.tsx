"use client";

import { motion } from "framer-motion";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Row = () => {
  return (
    <motion.div
      className="flex w-max shrink-0 items-center gap-6 whitespace-nowrap will-change-transform"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
    >
      {/* sequence A */}
      <div className="flex items-center gap-2">
        <SiHtml5 color="#E34F26" size={24} />
        <span>HTML</span>
      </div>
      <div className="flex items-center gap-2">
        <SiCss3 color="#1572B6" size={24} />
        <span>CSS</span>
      </div>
      <div className="flex items-center gap-2">
        <SiNodedotjs color="#339933" size={24} />
        <span>Node.js</span>
      </div>
      <div className="flex items-center gap-2">
        <SiJavascript color="#F7DF1E" size={24} />
        <span>JavaScript</span>
      </div>
      <div className="flex items-center gap-2">
        <SiTypescript color="#3178C6" size={24} />
        <span>TypeScript</span>
      </div>
      <div className="flex items-center gap-2">
        <SiReact color="#61DAFB" size={24} />
        <span>React</span>
      </div>
      <div className="flex items-center gap-2">
        <SiNextdotjs color="#000000" size={24} />
        <span>Next.js</span>
      </div>
      <div className="flex items-center gap-2">
        <SiTailwindcss color="#06B6D4" size={24} />
        <span>Tailwind CSS</span>
      </div>
      <div className="flex items-center gap-2">
        <SiStyledcomponents color="#DB7093" size={24} />
        <span>Styled Components</span>
      </div>
      {/* sequence B (duplicate) */}
      <div className="flex items-center gap-2">
        <SiHtml5 color="#E34F26" size={24} />
        <span>HTML</span>
      </div>
      <div className="flex items-center gap-2">
        <SiCss3 color="#1572B6" size={24} />
        <span>CSS</span>
      </div>
      <div className="flex items-center gap-2">
        <SiNodedotjs color="#339933" size={24} />
        <span>Node.js</span>
      </div>
      <div className="flex items-center gap-2">
        <SiJavascript color="#F7DF1E" size={24} />
        <span>JavaScript</span>
      </div>
      <div className="flex items-center gap-2">
        <SiTypescript color="#3178C6" size={24} />
        <span>TypeScript</span>
      </div>
      <div className="flex items-center gap-2">
        <SiReact color="#61DAFB" size={24} />
        <span>React</span>
      </div>
      <div className="flex items-center gap-2">
        <SiNextdotjs color="#000000" size={24} />
        <span>Next.js</span>
      </div>
      <div className="flex items-center gap-2">
        <SiTailwindcss color="#06B6D4" size={24} />
        <span>Tailwind CSS</span>
      </div>
      <div className="flex items-center gap-2">
        <SiStyledcomponents color="#DB7093" size={24} />
        <span>Styled Components</span>
      </div>
    </motion.div>
  );
};

export default function TechMarquee() {
  return (
    <div className="relative w-full max-w-[1000px]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-transparent to-transparent"
      ></div>
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-transparent to-transparent"
      ></div>
      <div className="flex flex-col gap-6 overflow-hidden text-2xl">
        <Row />
      </div>
    </div>
  );
}

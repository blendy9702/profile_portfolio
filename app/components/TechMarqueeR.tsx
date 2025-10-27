"use client";

import { motion } from "framer-motion";
import {
  SiAdobephotoshop,
  SiBlender,
  SiFigma,
  SiGithub,
  SiNotion,
  SiRedux,
  SiSlack,
  SiSupabase,
  SiThreedotjs,
  SiVercel,
} from "react-icons/si";

const Row = () => {
  return (
    <motion.div
      className="flex w-max shrink-0 items-center gap-6 whitespace-nowrap will-change-transform"
      animate={{ x: ["-50%", "0%"] }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
    >
      {/* sequence A */}
      <div className="flex items-center gap-2">
        <SiThreedotjs color="#000000" size={24} />
        <span>Three.js</span>
      </div>
      <div className="flex items-center gap-2">
        <SiRedux color="#764ABC" size={24} />
        <span>Redux</span>
      </div>
      <div className="flex items-center gap-2">
        <SiSupabase color="#3ECF8E" size={24} />
        <span>Supabase</span>
      </div>
      <div className="flex items-center gap-2">
        <SiGithub color="#181717" size={24} />
        <span>GitHub</span>
      </div>
      <div className="flex items-center gap-2">
        <SiSlack color="#4A154B" size={24} />
        <span>Slack</span>
      </div>
      <div className="flex items-center gap-2">
        <SiNotion color="#000000" size={24} />
        <span>Notion</span>
      </div>
      <div className="flex items-center gap-2">
        <SiFigma color="#F24E1E" size={24} />
        <span>Figma</span>
      </div>
      <div className="flex items-center gap-2">
        <SiVercel color="#000000" size={24} />
        <span>Vercel</span>
      </div>
      <div className="flex items-center gap-2">
        <SiAdobephotoshop color="#31A8FF" size={24} />
        <span>Adobe Photoshop</span>
      </div>
      <div className="flex items-center gap-2">
        <SiBlender color="#F5792A" size={24} />
        <span>Blender</span>
      </div>
      {/* sequence B (duplicate) */}
      <div className="flex items-center gap-2">
        <SiThreedotjs color="#000000" size={24} />
        <span>Three.js</span>
      </div>
      <div className="flex items-center gap-2">
        <SiRedux color="#764ABC" size={24} />
        <span>Redux</span>
      </div>
      <div className="flex items-center gap-2">
        <SiSupabase color="#3ECF8E" size={24} />
        <span>Supabase</span>
      </div>
      <div className="flex items-center gap-2">
        <SiGithub color="#181717" size={24} />
        <span>GitHub</span>
      </div>
      <div className="flex items-center gap-2">
        <SiSlack color="#4A154B" size={24} />
        <span>Slack</span>
      </div>
      <div className="flex items-center gap-2">
        <SiNotion color="#000000" size={24} />
        <span>Notion</span>
      </div>
      <div className="flex items-center gap-2">
        <SiFigma color="#F24E1E" size={24} />
        <span>Figma</span>
      </div>
      <div className="flex items-center gap-2">
        <SiVercel color="#000000" size={24} />
        <span>Vercel</span>
      </div>
      <div className="flex items-center gap-2">
        <SiAdobephotoshop color="#31A8FF" size={24} />
        <span>Adobe Photoshop</span>
      </div>
      <div className="flex items-center gap-2">
        <SiBlender color="#F5792A" size={24} />
        <span>Blender</span>
      </div>
    </motion.div>
  );
};

export default function TechMarquee() {
  return (
    <div className="relative w-full max-w-[1000px]">
      {/* <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-background to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-background to-transparent"
      /> */}
      <div className="flex flex-col gap-6 overflow-hidden text-2xl">
        <Row />
      </div>
    </div>
  );
}

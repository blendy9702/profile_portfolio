import { SiCss3, SiHtml5, SiRedux, SiThreedotjs } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiSlack } from "react-icons/si";
import { SiNotion } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiBlender } from "react-icons/si";

export default function Skills() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="flex items-center justify-center gap-4">
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
      </div>
      <div className="flex items-center justify-center gap-3">
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
      </div>
    </div>
  );
}

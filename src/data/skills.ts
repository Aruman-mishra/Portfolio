import {
  SiC,
  SiCplusplus,
  SiFigma,
  SiGithub,
  SiAutodesk,
  SiMicrosoftexcel,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiOpenai,
  SiJupyter,
  SiVisualstudiocode,
  SiAnaconda,
} from "react-icons/si";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";
import {
  GeminiIcon,
  DeepSeekIcon,
  HuggingFaceIcon,
  ChatbotIcon,
  AiIntegrationIcon,
  OpenAiApiIcon,
} from "@/components/icons";

// Languages SVG
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import PythonSvg from "@/public/icons/python.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";
import GitSvg from "@/public/icons/git.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Programming Languages",
    skills: [
      {
        name: "C++",
        icon: SiCplusplus,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "JavaScript",
        icon: JavascriptSvg,
      },
      {
        name: "C Programming",
        icon: SiC,
      },
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
    ],
  },
  {
    sectionName: "AI Services",
    skills: [
      {
        name: "OpenAI API",
        icon: OpenAiApiIcon,
      },
      {
        name: "DeepSeek",
        icon: DeepSeekIcon,
      },
      {
        name: "Gemini",
        icon: GeminiIcon,
      },
      {
        name: "Chatbot Development",
        icon: ChatbotIcon,
      },
      {
        name: "AI Integration",
        icon: AiIntegrationIcon,
      },
    ],
  },
  {
    sectionName: "Tools & Platforms",
    skills: [
      {
        name: "GitHub",
        icon: SiGithub,
      },
      {
        name: "Jupyter",
        icon: SiJupyter,
      },
      {
        name: "VS Code",
        icon: SiVisualstudiocode,
      },
      {
        name: "Hugging Face",
        icon: HuggingFaceIcon,
      },
      {
        name: "OpenAI",
        icon: SiOpenai,
      },
      {
        name: "Anaconda",
        icon: SiAnaconda,
      },
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Figma",
        icon: SiFigma,
      },
      {
        name: "AutoCAD",
        icon: SiAutodesk,
      },
      {
        name: "MS Excel",
        icon: SiMicrosoftexcel,
      },
    ],
  },
  {
    sectionName: "Web Technologies & Databases",
    skills: [
      {
        name: "React.js",
        icon: SiReact,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "PostgreSQL",
        icon: PostgressSvg,
      },
    ],
  },
];

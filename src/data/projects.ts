import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "ClauseClear — AI Legal Explainer",
    href: "/projects",
    tags: ["Next.js", "TypeScript", "Google Gemini AI", "Tailwind CSS"],
    image: {
      LIGHT: "",
      DARK: "",
    },
  },
  {
    index: 1,
    title: "Assemble — AI Portfolio Builder",
    href: "/projects",
    tags: ["Next.js", "TypeScript", "Turso DB", "JWT Auth", "Serverless"],
    image: {
      LIGHT: "",
      DARK: "",
    },
  },
  {
    index: 2,
    title: "Personal Portfolio Website",
    href: "/projects",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: {
      LIGHT: "",
      DARK: "",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "ClauseClear (Explain The Decision)",
    favicon: "/favicon.ico",
    description:
      "An AI-powered legal and contract explainer tool that analyzes confusing legal clauses, terms of service, and app permission requests to deliver plain-English explanations, structured risk scores, and key watchouts using Next.js, TypeScript, and Google Gemini API.",
    sourceCodeHref: "https://github.com/Aruman-mishra/Explain-the-decision",
    liveWebsiteHref: "https://explainthedecision.vercel.app/",
    tags: [
      "Next.js",
      "TypeScript",
      "Google Gemini API",
      "Tailwind CSS",
      "Vercel",
    ],
  },
  {
    name: "Assemble",
    favicon: "/favicon.ico",
    description:
      "A full-stack, serverless AI portfolio builder application. Built with Next.js serverless API routes, JWT authentication, and Turso cloud-hosted SQLite database for instant, modern developer portfolio creation and hosting.",
    sourceCodeHref: "https://github.com/Aruman-mishra/Assemble",
    liveWebsiteHref: "https://assemble-two.vercel.app/",
    tags: [
      "Next.js",
      "TypeScript",
      "Turso DB",
      "SQLite",
      "JWT Auth",
      "Serverless",
    ],
  },
  {
    name: "Personal Portfolio Website",
    favicon: "/favicon.ico",
    description:
      "A responsive, modern personal developer portfolio website designed to showcase projects, technical skillset, certifications, and academic background with animated interactions and theme support.",
    sourceCodeHref: "https://github.com/Aruman-mishra",
    liveWebsiteHref: siteMetadata.siteUrl,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];

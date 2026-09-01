import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { FiMail, FiPhone, FiMapPin, FiDownload } from "react-icons/fi";
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiInstagram,
  SiLeetcode,
  SiGeeksforgeeks,
  SiReddit,
} from "react-icons/si";

import FadeUp from "@/animation/fade-up";
import heroProfileImg from "@/public/images/heroProfile.png";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const allSocialLinks = [
    {
      name: "GitHub",
      href: siteMetadata.github,
      icon: SiGithub,
      bg: "bg-[#24292e] hover:bg-[#181717]",
      color: "text-white",
    },
    {
      name: "LinkedIn",
      href: siteMetadata.linkedin,
      icon: SiLinkedin,
      bg: "bg-[#0A66C2] hover:bg-[#004182]",
      color: "text-white",
    },
    {
      name: "X (Twitter)",
      href: siteMetadata.twitter,
      icon: SiX,
      bg: "bg-black hover:bg-zinc-900 border border-zinc-700/50",
      color: "text-white",
    },
    {
      name: "Instagram",
      href: siteMetadata.instagram,
      icon: SiInstagram,
      bg: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90",
      color: "text-white",
    },
    {
      name: "LeetCode",
      href: siteMetadata.leetcode,
      icon: SiLeetcode,
      bg: "bg-[#FFA116] hover:bg-[#e08b0b]",
      color: "text-white",
    },
    {
      name: "GeeksforGeeks",
      href: siteMetadata.geeksforgeeks,
      icon: SiGeeksforgeeks,
      bg: "bg-[#2F8D46] hover:bg-[#236b35]",
      color: "text-white",
    },
    {
      name: "Reddit",
      href: siteMetadata.reddit,
      icon: SiReddit,
      bg: "bg-[#FF4500] hover:bg-[#d93a00]",
      color: "text-white",
    },
  ];

  const activeSocialLinks = allSocialLinks.filter((item) =>
    Boolean(item.href && item.href.trim() !== ""),
  );

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="flex min-h-[calc(100vh-120px)] items-center px-4 py-12 sm:px-8 md:px-12 lg:px-16"
    >
      <div className="w-full">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-10 lg:flex-row lg:gap-16">
          {/* Left Text Content */}
          <div className="w-full text-center lg:w-3/5 lg:text-left">
            <AnimatePresence>
              <FadeUp key="title-main" duration={0.6}>
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent backdrop-blur-sm sm:text-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent"></span>
                  </span>
                  Available for Projects & Learning Opportunities
                </div>
                <h1 className="mt-4 bg-accent bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                  Aruman Mishra
                </h1>
                <h2 className="mt-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl md:text-3xl">
                  Aspiring Software Developer
                </h2>
              </FadeUp>

              <FadeUp key="description" duration={0.6} delay={0.2}>
                <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg">
                  To build a strong career in{" "}
                  <span className="font-semibold text-accent">
                    Computer Science
                  </span>{" "}
                  and <span className="font-semibold text-accent">AI</span> by
                  applying my programming skills in{" "}
                  <span className="font-semibold text-accent">Python</span>,{" "}
                  <span className="font-semibold text-accent">C</span>,{" "}
                  <span className="font-semibold text-accent">PostgreSQL</span>,
                  and{" "}
                  <span className="font-semibold text-accent">
                    Web Development
                  </span>
                  . Continuously improving through hands-on projects and aimed
                  at driving value in a growth-oriented tech environment.
                </p>
              </FadeUp>

              {/* Social and Quick Links */}
              <FadeUp key="quick-links" duration={0.6} delay={0.4}>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <a
                    href="mailto:arumanmishra887@gmail.com"
                    className="inline-flex items-center gap-2 rounded-2xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-transform duration-200 hover:scale-105 dark:text-background"
                  >
                    <FiMail className="h-4 w-4" />
                    Get in Touch
                  </a>

                  <a
                    href="https://drive.google.com/file/d/1UTmeZ2j4OtRJHgZGugFA3kNKZV_ZO2cG/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border-2 border-accent bg-white/90 px-6 py-3 text-sm font-semibold text-accent shadow-sm transition-transform duration-200 hover:scale-105 hover:bg-white dark:bg-zinc-800/80 dark:text-accent"
                  >
                    <FiDownload className="h-4 w-4 text-accent" />
                    Download CV
                  </a>

                  <div className="flex flex-wrap items-center gap-3">
                    {activeSocialLinks.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`link to ${item.name}`}
                          className={`flex h-11 w-11 items-center justify-center rounded-full ${item.bg} ${item.color} shadow-md transition-transform duration-200 hover:scale-110 active:scale-95`}
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-600 dark:text-zinc-400 sm:text-sm lg:justify-start">
                  <span className="flex items-center gap-1.5">
                    <FiMapPin className="h-4 w-4 text-accent" />
                    Prayagraj, Uttar Pradesh
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiPhone className="h-4 w-4 text-accent" />
                    +91 9140267520
                  </span>
                </div>
              </FadeUp>
            </AnimatePresence>
          </div>

          {/* Right Profile Photo */}
          <div className="flex w-full justify-center lg:w-2/5 lg:justify-end">
            <AnimatePresence>
              <FadeUp key="hero-image" duration={0.6} delay={0.2}>
                <div className="group relative">
                  {/* Glowing background ring */}
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-accent via-blue-500 to-indigo-600 opacity-70 blur-lg transition duration-500 group-hover:opacity-100"></div>

                  {/* Avatar Container */}
                  <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-accent/40 bg-zinc-900 shadow-2xl sm:h-80 sm:w-80 md:h-96 md:w-96">
                    <Image
                      src={heroProfileImg}
                      alt="Aruman Mishra Profile"
                      quality={100}
                      priority
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </FadeUp>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

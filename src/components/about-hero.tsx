import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";
import heroProfileImg from "@/public/images/heroProfile.png";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-10 px-4 pt-12 text-center sm:px-8 md:mt-16 md:px-12 lg:mt-0 lg:flex-row lg:px-16 lg:text-left">
      <div className="flex w-full justify-center sm:w-2/3 md:w-1/2 lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="hero-image" duration={0.6}>
            <div className="group relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-accent via-blue-500 to-indigo-600 opacity-60 blur-xl transition duration-500 group-hover:opacity-90"></div>
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-accent/40 bg-zinc-900 shadow-2xl sm:h-80 sm:w-80 md:h-96 md:w-96">
                <Image
                  src={heroProfileImg}
                  alt="Aruman Mishra"
                  quality={100}
                  priority
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </FadeUp>
        </AnimatePresence>
      </div>

      <div className="w-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="text-5xl font-bold text-accent sm:text-6xl md:text-5xl lg:text-5xl xl:text-6xl">
              Hi, I&apos;m Aruman Mishra
            </h1>
          </FadeUp>

          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-6 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg">
              I am an aspiring Software Developer currently pursuing B.Tech in
              Computer Science and Engineering at Lovely Professional
              University. I am passionate about computer science, artificial
              intelligence, and building efficient digital applications.
            </p>
          </FadeUp>

          <FadeUp key="description-2" duration={0.6} delay={0.4}>
            <p className="mt-4 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg">
              My technical expertise spans{" "}
              <span className="font-semibold text-accent">Python</span>,{" "}
              <span className="font-semibold text-accent">JavaScript</span>,{" "}
              <span className="font-semibold text-accent">C Programming</span>,{" "}
              <span className="font-semibold text-accent">PostgreSQL</span>, and
              web technologies like{" "}
              <span className="font-semibold text-accent">
                HTML, CSS, React, and Next.js
              </span>
              .
            </p>
          </FadeUp>

          <FadeUp key="description-3" duration={0.6} delay={0.5}>
            <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-left text-sm text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-200">
              <div>
                <strong className="text-accent">Languages:</strong> Hindi,
                English
              </div>
              <div>
                <strong className="text-accent">Interests:</strong> Coding &
                Problem Solving, Playing Cricket, Volleyball, Chess, Video
                Editing, Exploring New Technologies
              </div>
            </div>
          </FadeUp>

          <FadeRight
            key="hero-location"
            duration={0.6}
            delay={0.8}
            className="mr-0 mt-8 flex items-center justify-center gap-4 lg:justify-start"
          >
            <div className="relative flex w-10 overflow-hidden rounded-md shadow">
              <Image
                className="h-full w-full bg-cover bg-no-repeat"
                alt="Indian flag"
                src="https://flagcdn.com/in.svg"
                width={30}
                height={20}
              />
            </div>
            <span className="text-lg font-medium text-foreground">
              Prayagraj, Uttar Pradesh, India
            </span>
          </FadeRight>
        </AnimatePresence>
      </div>
    </div>
  );
}

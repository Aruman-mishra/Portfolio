import Link from "next/link";

import { ArrowTopRight } from "@/components/icons";
import ProjectCard, {
  type ProjectCardProps,
} from "@/components/projects/project-card";

interface ProjectShowcaseProps {
  projects: ProjectCardProps[];
}

export default function ProjectShowcase(props: ProjectShowcaseProps) {
  return (
    <section className="overflow-hidden px-4 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-16">
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-xl font-semibold text-accent sm:text-3xl">
              Featured Projects
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Here are some of the projects I&apos;ve built with modern
              technologies
            </p>
          </div>
          <Link
            href="/projects"
            className="group relative flex items-center gap-2 text-base font-semibold sm:text-lg"
          >
            <span className="text-accent">View all projects</span>
            <div className="h-6 w-6">
              <ArrowTopRight className="rotate-45 text-accent transition-transform duration-300 group-hover:rotate-0 group-hover:scale-110" />
            </div>
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {props.projects.map((card, index) => (
            <ProjectCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

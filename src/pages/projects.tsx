import { NextSeo } from "next-seo";

import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Projects() {
  return (
    <>
      <NextSeo
        title="Projects | Aruman Mishra"
        description="Explore projects developed by Aruman Mishra, including ClauseClear (AI Legal Explainer), Assemble (AI Portfolio Builder), and modern web applications."
        canonical={`${siteMetadata.siteUrl}/projects`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/projects`,
          title: "Projects by Aruman Mishra",
          description:
            "Explore projects built by Aruman Mishra. AI solutions, full-stack applications, and interactive web tools.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.image}`,
              alt: "Aruman Mishra - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Aruman Mishra Projects, ClauseClear, Assemble, Next.js Projects, AI Projects, Full Stack Development, Portfolio",
          },
        ]}
      />
      <section className="mx-auto mb-36 mt-6 w-full px-4 sm:mt-12 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
            Projects
          </h1>
          <div className="my-2">
            <span className="text-sm text-muted-foreground">
              Here are some of the projects I&apos;d like to share
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
            <span className="text-xl font-bold md:text-2xl">
              I am actively building new projects in Python, AI, and Full Stack
              Web Development to expand my skillset.
            </span>
            <p className="mt-10 text-base md:text-xl">
              Visit my GitHub to explore all repositories{" "}
              <a
                href={`${siteMetadata.github}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
              >
                GitHub Profile
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

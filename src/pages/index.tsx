import Head from "next/head";
import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { PROJECTS_CARD } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { EDUCATION } from "@/data/education";
import { EXPERIENCE } from "@/data/experience";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Aruman Mishra | Aspiring Software Developer"
        description="Explore the personal portfolio of Aruman Mishra, an Aspiring Software Developer specializing in Computer Science, Python, C, PostgreSQL, and modern Web Technologies."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Aruman Mishra - Aspiring Software Developer",
          description:
            "Portfolio of Aruman Mishra. Computer Science student passionate about building real-world software, AI solutions, and responsive web applications.",
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
              "Aruman Mishra, Software Developer, Python Developer, Computer Science, AI, Web Developer, HTML, CSS, JavaScript, Portfolio",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECTS_CARD} />
      <ExperienceShowcaseList
        title="Certificates & Training"
        details={EXPERIENCE}
      />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}

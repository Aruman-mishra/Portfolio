import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Aruman Mishra | Aspiring Software Developer"
        description="Learn more about Aruman Mishra, an Aspiring Software Developer. Discover his academic journey, skills in Python & Web Development, certificates, and passion for AI."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "About Aruman Mishra - Aspiring Software Developer",
          description:
            "Uncover the academic journey, technical skills, and certifications of Aruman Mishra.",
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
              "Aruman Mishra, Computer Science Student, Education, Certificates, Python, C Programming, Web Development",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList
        title="Certificates & Training"
        details={EXPERIENCE}
      />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}

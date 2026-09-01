import Image from "next/image";
import { useRouter } from "next/router";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

import Corosel from "@/components/utility/corosel";
import { GithubIcon } from "@/components/icons";

export interface ProjectCardProps {
  name: string;
  favicon?: string;
  imageUrl?: string[];
  description: string;
  sourceCodeHref: string;
  liveWebsiteHref?: string;
  tags?: string[];
}

export default function ProjectCard(props: ProjectCardProps) {
  const router = useRouter();
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        duration: 0.5,
      }}
      className="flex w-full flex-col justify-between overflow-hidden rounded-xl border border-accent/20 bg-background/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-accent/40 hover:shadow-md hover:shadow-accent/10 dark:bg-zinc-800/80 dark:hover:shadow-lg"
    >
      {props.imageUrl &&
        props.imageUrl.length > 0 &&
        props.imageUrl[0] !== "" && (
          <div className="-mx-5 -mt-5 mb-4 overflow-hidden rounded-t-xl">
            <Corosel images={props.imageUrl} aspectRatio={2.1} />
          </div>
        )}
      <div className="flex flex-1 flex-col">
        <div className="flex items-center gap-3">
          {props.favicon && (
            <span className="relative h-6 w-6 shrink-0">
              <Image src={`${router.basePath}${props.favicon}`} alt="logo" fill className="rounded" />
            </span>
          )}
          <h3 className="text-lg font-semibold text-accent">{props.name}</h3>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {props.description}
        </p>
        {props.tags && props.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {props.tags.map((tag, idx) => (
              <span
                key={idx}
                className="rounded-md bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="mt-6 flex items-center justify-end gap-5 border-t border-accent/10 pt-4">
        <a
          href={props.sourceCodeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-medium underline underline-offset-4 transition-colors hover:text-accent md:text-sm"
        >
          <GithubIcon className="h-4 w-4 md:h-5 md:w-5" /> Source Code
        </a>
        {props.liveWebsiteHref && (
          <a
            href={props.liveWebsiteHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium underline underline-offset-4 transition-colors hover:text-accent md:text-sm"
          >
            <FiExternalLink className="h-4 w-4 md:h-5 md:w-5" /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

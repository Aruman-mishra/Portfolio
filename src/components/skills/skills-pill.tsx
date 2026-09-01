import { FC, SVGProps } from "react";

export type SkillPillProps = {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>>;
};

export default function SkillPill(props: SkillPillProps) {
  const { name, icon: Icon } = props;
  return (
    <div className="flex w-max items-center gap-2.5 overflow-hidden rounded-xl border border-zinc-300/80 bg-white/90 px-4 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-accent hover:shadow-md dark:border-zinc-700/80 dark:bg-zinc-800/80 dark:text-zinc-100 sm:text-base md:px-5 md:py-3">
      <Icon className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
      <span>{name}</span>
    </div>
  );
}

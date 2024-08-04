import { FC } from "react";
import { AtmosIllustration } from "../../../public/illustrations/atmos";
import { FigStatsIllustration } from "../../../public/illustrations/fig-stats";
import { FlowsIllustration } from "../../../public/illustrations/flows";
import { Project } from "./project";

const sharedStyles = "h-full w-full";

const projectsContent = [
  {
    title: "Flows",
    description: "Onboarding platform for modern SaaS",
    illustration: <FlowsIllustration className={sharedStyles} />,
    link: "https://flows.sh/",
  },
  {
    title: "Atmos",
    description: "Everything you need to create color palettes.",
    illustration: <AtmosIllustration className={sharedStyles} />,
    link: "https://atmos.style",
  },
  {
    title: "Fig-stats",
    description: "Figma plugin and widget analytics.",
    illustration: <FigStatsIllustration className={sharedStyles} />,
    link: "https://fig-stats.com/",
  },
];

export const ProjectList: FC = () => {
  return (
    <section className="mb-24">
      <h2 className="mb-4 text-sm font-semibold uppercase text-neutral-700 dark:text-neutral-400">
        Projects
      </h2>
      <ul className="flex flex-col gap-8 sm:flex-row">
        {projectsContent.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </ul>
    </section>
  );
};

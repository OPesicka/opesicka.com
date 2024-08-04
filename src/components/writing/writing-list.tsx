import { FC } from "react";
import { ListItem } from "../list-item";

const writingContent = [
  {
    title: "LCH is the best",
    description: "Exploring the benefits of LCH for UI design.",
    link: "https://atmos.style/blog/lch-color-space",
  },
  {
    title: "LCH vs OKLCH",
    description: "The differences between LCH and OKLCH.",
    link: "https://atmos.style/blog/lch-vs-oklch",
  },
];

export const WritingList: FC = () => {
  return (
    <section className="mb-24">
      <h2 className="mb-4 text-sm font-semibold uppercase text-neutral-700 dark:text-neutral-400">
        Writing
      </h2>
      <ul className="flex flex-col items-start gap-8">
        {writingContent.map((article) => (
          <ListItem key={article.title} icon {...article} />
        ))}
      </ul>
    </section>
  );
};

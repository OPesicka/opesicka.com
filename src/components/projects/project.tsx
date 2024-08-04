import React, { FC } from "react";

type Props = {
  title: string;
  description: string;
  illustration: React.ReactNode;
  link: string;
};

export const Project: FC<Props> = ({ title, description, illustration, link }) => {
  return (
    <a href={link} target="_blank" className="group flex flex-1 flex-col">
      <div className="mb-3 aspect-[187/120] h-full w-full overflow-hidden rounded-xl border border-neutral-300 bg-white transition-shadow group-hover:shadow-l2 dark:border-neutral-700 dark:bg-neutral-850">
        {illustration}
      </div>
      <h3 className="mb-1 font-bold transition-colors group-hover:text-primary-default">{title}</h3>
      <p className="text-sm text-neutral-700 dark:text-neutral-400">{description}</p>
    </a>
  );
};

import { FC } from "react";
import { ArticleIcon } from "./icons";

type Props = {
  title: string;
  description: string;
  link: string;
  icon?: boolean;
  oppositeLine?: string;
};

export const ListItem: FC<Props> = ({ title, description, link, icon, oppositeLine }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="group flex flex-col content-between gap-4 sm:flex-row"
    >
      <div className="w-full">
        <div className="mb-1 flex items-center gap-2">
          {icon && <ArticleIcon className="text-neutral-500" />}
          <h3 className="font-bold transition-colors group-hover:text-primary-default">{title}</h3>
        </div>
        <p className="text-sm text-neutral-700 dark:text-neutral-400">{description}</p>
      </div>
      {oppositeLine && (
        <p className="text-nowrap text-sm text-neutral-700 transition-colors group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white">
          {oppositeLine}
        </p>
      )}
    </a>
  );
};

import { email, links, socials } from "@/consts";
import { FC, Fragment } from "react";
import { ThemeSwitch } from "./theme-switch";

export const Footer: FC = () => {
  return (
    <footer className="my-6 flex items-center justify-between">
      <div className="flex gap-4">
        {socials.map((social, index) => (
          <Fragment key={social.name}>
            <a href={social.link} className="text-sm hover:underline" target="_blank">
              {social.name}
            </a>
            {index < socials.length - 1 && <span className="text-sm text-neutral-500">/</span>}
          </Fragment>
        ))}
      </div>
      <ThemeSwitch />
    </footer>
  );
};

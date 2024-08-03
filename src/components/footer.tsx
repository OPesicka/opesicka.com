import { email } from "@/consts";
import { FC } from "react";
import { ThemeSwitch } from "./theme-switch";

export const Footer: FC = () => {
  return (
    <footer className="flex justify-between">
      <p>{email}</p>
      <p>TODO / TODO / TODO</p>
      <ThemeSwitch />
    </footer>
  );
};

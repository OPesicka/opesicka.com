"use client";

import { DarkModeProvider } from "@rbnd/react-dark-mode";
import type { FC, ReactNode } from "react";
import { Flows } from "./flows";

type Props = {
  children: ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
  return (
    <DarkModeProvider>
      <Flows />
      {children}
    </DarkModeProvider>
  );
};

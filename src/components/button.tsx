import { Slot } from "@radix-ui/react-slot";
import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
  asChild?: boolean;
};

export const Button: FC<Props> = ({ children, asChild }) => {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      type={!asChild ? "button" : undefined}
      className="flex w-fit rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2 font-semibold leading-6 transition-all hover:bg-white hover:shadow-l1 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-750"
    >
      {children}
    </Component>
  );
};

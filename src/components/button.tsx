import { Slot } from "@radix-ui/react-slot";
import { FC } from "react";

type Props = {
  children: React.ReactNode;
  asChild?: boolean;
};

export const Button: FC<Props> = ({ children, asChild }) => {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      type={!asChild ? "button" : undefined}
      className="dark:hover:bg-neutral-750 hover:shadow-l1 rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2 font-semibold leading-6 transition-all hover:bg-white dark:border-neutral-700 dark:bg-neutral-800"
    >
      {children}
    </Component>
  );
};

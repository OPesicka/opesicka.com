"use client";

import { useFirstRender } from "@/hooks";
import type { Mode } from "@rbnd/react-dark-mode";
import { useDarkMode } from "@rbnd/react-dark-mode";
import React, { type FC, useId } from "react";

const options: {
  value: Mode;
  label: string;
}[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
];

const sharedStyles =
  "w-[80px] rounded-lg border border-neutral-300 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 ";

export const ThemeSwitch: FC = () => {
  const id = useId();
  const firstRender = useFirstRender();
  const { mode, setMode } = useDarkMode();
  const handleModeChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedMode = event.target.value;
    setMode(selectedMode as Mode);
  };

  if (firstRender) return <div className={`${sharedStyles} h-[29px]`} />;

  return (
    <>
      <label className="sr-only" htmlFor={id}>
        Theme switch
      </label>
      <select
        className={`${sharedStyles} px-1 py-1 text-sm font-semibold leading-6 transition-all hover:bg-white hover:shadow-l1 focus:border-blue-500 focus:shadow-l1 focus:outline-none dark:hover:bg-neutral-750`}
        id={id}
        onChange={handleModeChange}
        value={mode}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

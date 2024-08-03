import { links, routes } from "@/consts";
import { FC } from "react";
import { Button } from "./button";
import Link from "next/link";

export const Hero: FC = () => {
  return (
    <section className="mb-24">
      <h1 className="mb-4 text-4xl font-bold">Ondřej Pešička</h1>
      <p className="mb-4">
        Co-founder of{" "}
        <a
          href={links.rbnd}
          target="_blank"
          className="hover:text-primary-default font-semibold underline transition-colors"
        >
          RBND
        </a>
        , building tools for product people. I also ride mountain bikes and hack Figma.
      </p>
      <Button asChild>
        <Link href={routes.about}>About</Link>
      </Button>
    </section>
  );
};

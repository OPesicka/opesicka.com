import { links, routes } from "@/consts";
import { FC } from "react";
import { Button } from "./button";
import Link from "next/link";

export const Hero: FC = () => {
  return (
    <section className="mb-24">
      <h1 className="mb-4 text-3xl font-bold md:text-4xl">Ondřej Pešička</h1>
      <p className="mb-4">
        Co-founder of{" "}
        <a
          href={links.rbnd}
          target="_blank"
          className="font-semibold text-primary-default hover:underline"
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

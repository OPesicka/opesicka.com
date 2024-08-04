import { ArrowRight, Button } from "@/components";
import { links, routes, socials } from "@/consts";
import Link from "next/link";
import { FC } from "react";

export const AboutHero: FC = () => {
  return (
    <section className="mb-24">
      <div className="-ml-6 mb-4 flex items-center gap-2">
        <Link href={routes.home} className="group" aria-label="Back">
          <ArrowRight className="rotate-180 text-neutral-500 group-hover:text-primary-default" />
        </Link>
        <h1 className="text-3xl font-bold md:text-4xl">About</h1>
      </div>
      <p className="mb-4">
        Hey, I&apos;m Ondra. I&apos;m a designer and (sometimes) software engineer. I&apos;m
        currently building at{" "}
        <a className="text-primary-default hover:underline" href={links.rbnd} target="_blank">
          RBND
        </a>
        , where we&apos;re creating tools for product people.
      </p>
      <p className="mb-4">
        Before RBND, I spent three and a half years at{" "}
        <a className="text-primary-default hover:underline" href={links.apify} target="_blank">
          Apify
        </a>
        , where I worked on setting up their design system and designing the{" "}
        <a
          className="text-primary-default hover:underline"
          href={links.apifyConsole}
          target="_blank"
        >
          Console
        </a>
        .
      </p>

      <p className="mb-6">
        Before Apify, I designed workspace experiences and lead the design team at{" "}
        <a className="text-primary-default hover:underline" href={links.spaceti} target="_blank">
          Spaceti
        </a>
        .
      </p>

      <div className="flex gap-2">
        {socials.map((social) => (
          <Button key={social.link} asChild>
            <Link href={social.link} target="_blank">
              {social.name}
            </Link>
          </Button>
        ))}
      </div>
    </section>
  );
};

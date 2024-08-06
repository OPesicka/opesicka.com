import { links } from "@/consts";
import { AboutHero } from "./hero";
import { ListItem } from "@/components/list-item";
import { Metadata } from "next";

const experience = [
  {
    company: "RBND",
    role: "Co-founder",
    duration: "March 2024 – Current",
    link: links.rbnd,
    rel: "noopener",
  },
  {
    company: "Apify",
    role: "Staff Product Designer",
    duration: "Feb 2021 – July 2024",
    link: links.apify,
    rel: "noopener",
  },
  {
    company: "Spaceti",
    role: "Product design, Design lead",
    duration: "Jan 2020 – Apr 2021",
    link: links.spaceti,
    rel: "noopener",
  },
  {
    company: "EMU: EmployeeMoodUp",
    role: "UI/UX designer",
    duration: "Feb 2019 - Jul 2019",
    link: "https://sj.news/rozhovor-michal-bako-emu/",
    rel: "noopener noreferrer",
  },
  {
    company: "YourFleet",
    role: "UI/UX designer",
    duration: "Jul 2018 - Jan 2019",
    link: "https://yourfleet.cz/",
    rel: "noopener noreferrer",
  },
  {
    company: "MallGroup",
    role: "Intern, UI design",
    duration: "May 2017",
    link: "https://www.mallgroup.com/",
    rel: "noopener noreferrer",
  },
];

const eductaion = [
  {
    degree: "Computer animation and multimedia",
    school: "Střední odborná škola multimediální a propagační tvorby s.r.o. (EDUSO)",
    duration: "2014 - 2018",
    link: "https://www.eduso.cz/",
    rel: "noopener noreferrer",
  },
];

export const metadata: Metadata = {
  metadataBase: new URL("https://opesicka.com"),
  title: "About – Ondřej Pešička",
  description: "Designer and (sometimes) software engineer, currently building at RBND.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "About – Ondřej Pešička",
    images: "/og/about.png",
  },
  twitter: {
    creator: "@opesicka",
    card: "summary_large_image",
    description: "Designer and (sometimes) software engineer, currently building at RBND.",
    title: "About – Ondřej Pešička",
    images: "/og/about.png",
  },
};

export default function About() {
  return (
    <main className="">
      <AboutHero />
      <section className="mb-24">
        <h2 className="mb-4 text-sm font-semibold uppercase text-neutral-700 dark:text-neutral-400">
          Experience
        </h2>
        <ul>
          {experience.map((job) => (
            <li key={job.company} className="mb-8">
              <ListItem
                title={job.company}
                description={job.role}
                link={job.link}
                oppositeLine={job.duration}
              />
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-24">
        <h2 className="mb-4 text-sm font-semibold uppercase text-neutral-700 dark:text-neutral-400">
          Education
        </h2>
        <ul>
          {eductaion.map((school) => (
            <li key={school.degree} className="mb-8">
              <ListItem
                title={school.degree}
                description={school.school}
                link={school.link}
                oppositeLine={school.duration}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

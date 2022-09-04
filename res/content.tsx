import { ReactElement } from "react";
import { StyledLink } from "../components/styled-link";
import { Text } from "../theme/theme";

export type FeaturedType = {
  description: ReactElement;
  type: string;
};

export const featuredWork: FeaturedType[] = [
  {
    type: "active",
    description: (
      <Text variant="text">
        Working at{" "}
        <StyledLink variant="primary" href="https://apify.com/" rel="nofollow noopener" target="_blank">
          Apify
        </StyledLink>{" "}
        the most powerful web scraping and automation platform.
      </Text>
    ),
  },
  {
    type: "active",
    description: (
      <Text variant="text">
        Co-founded{" "}
        <StyledLink variant="primary" href="https://atmos.style/" rel="noopener" target="_blank">
          Atmos
        </StyledLink>{" "}
        everything you need to create color palettes.
      </Text>
    ),
  },
  {
    type: "dead",
    description: (
      <Text variant="text">
        Worked on{" "}
        <StyledLink variant="primary" href="https://www.behance.net/gallery/107464717/Alfaoptima-Case-study" rel="nofollow noopener" target="_blank">
          Alfaoptima
        </StyledLink>{" "}
        smart shift planning for healthcare workers.
      </Text>
    ),
  },
  {
    type: "dead",
    description: (
      <Text variant="text">
        Lead a design team at{" "}
        <StyledLink variant="primary" href="https://spaceti.com/" rel="nofollow noopener" target="_blank">
          Spaceti
        </StyledLink>{" "}
        an IoT platform making workplaces efficient.
      </Text>
    ),
  },
];

export const featuredWriting: FeaturedType[] = [
  {
    type: "article",
    description: (
      <Text variant="text">
        LCH is the best color space for UI design{" "}
        <StyledLink variant="primary" href="https://atmos.style/blog/lch-color-space" rel=" noopener" target="_blank">
          →
        </StyledLink>
      </Text>
    ),
  },
];

export const about =
  "I’m Ondřej Pešička, a product designer based in Prague, Czechia. \n I'm passionate about creating accessible experiences that leave a positive impact on people. \n While having experience in visual design and 3D/2D animation my main focus is Product design and UI/UX. I believe that good design is essential for creating products people will love.";

export const aboutData = [
  {
    type: "Experience",
    color: "primary.400",
    data: [
      {
        name: "Atmos",
        description: "Co-founder",
        date: "Mar 2021 - Current",
        icon: "/atmos.svg",
        link: "https://atmos.style/",
        color: "primary",
      },
      {
        name: "Apify",
        description: "Product designer",
        date: "Feb 2021 - Current",
        icon: "/apify.svg",
        link: "https://apify.com/",
        color: "primary",
      },
      {
        name: "Alfaoptima",
        description: "Product designer",
        date: "Jan 2020 - Apr 2021",
        icon: "/alfaoptima.svg",
        link: "https://alfaoptima.cz/",
        color: "primary",
      },
      {
        name: "Spaceti",
        description: "UI/UX design, Design lead",
        date: "Jul 2019 - Jan 2021",
        icon: "/spaceti.svg",
        link: "https://www.spaceti.com/",
        color: "primary",
      },
      {
        name: "EMU: EmployeeMoodUp",
        description: "UI/UX design",
        date: "Feb 2019 - Jul 2019",
        icon: "/emu.svg",
        link: "https://tyinternety.cz/startupy-a-byznysy/startup-emu-meri-naladu-v-ceskych-firmach-od-investoru-uz-ziskal-20-milionu/",
        color: "primary",
      },

      {
        name: "MallGroup",
        description: "Intern, UI design",
        date: "May 2017",
        icon: "/mall.svg",
        link: "https://www.mallgroup.com/",
        color: "primary",
      },
    ],
  },
  {
    type: "Projects",
    color: "success.400",
    data: [
      {
        name: "rbnd studio",
        description: "Design & Development studio",
        date: "May 2022 - Current",
        icon: null,
        link: "https://www.rbnd.studio/",
        color: "success",
      },
      {
        name: "Yourfleet",
        description: "Web app",
        date: "Jul 2018 - Jan 2019",
        icon: null,
        link: "https://yourfleet.cz/",
        color: "success",
      },
      {
        name: "Sapport",
        description: "Company website",
        date: "Jun 2018 - Jul 2018",
        icon: null,
        link: null,
      },
      {
        name: "Fleet consulting",
        description: "Company website",
        date: "Nov 2016 - Jan 2016",
        icon: null,
        link: null,
      },
      {
        name: "Pereny",
        description: "Company website",
        date: "Feb 2016 - Mar 2016",
        icon: null,
        link: null,
      },
    ],
  },
  {
    type: "Education",
    color: "danger.400",
    data: [
      {
        name: "Computer animation and multimedia",
        description: "Střední odborná škola multimediální a propagační tvorby s.r.o. (EDUSO)",
        date: "2014 - 2018",
        icon: null,
        link: "https://www.eduso.cz/",
        color: "danger",
      },
    ],
  },
];

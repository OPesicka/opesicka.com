import { join } from "path";
import styled from "styled-components";
import { Text } from "../theme/theme";
import { Card } from "./card";

export const AboutContent = () => {
  return (
    <Container>
      <Text variant="h1" color="primary.500">
        About
      </Text>
      <Section>
        <Text variant="text">
          I’m Ondřej Pešička a multidisciplinary digital designer based in
          Prague, Czech Republic, experienced in visual design, user experience
          and creating design systems. I’m passionate about designing
          experiences that leave a positive impact on people.
          <br />
          <br /> While having experience in visual design, 3D, animation, print
          and video editing, my main focus is Product design and UI/UX.
        </Text>
      </Section>
      <Section>
        <Text variant="h2" color="primary.500" m={{ b: 40 }}>
          Experience
        </Text>
        {jobs.map((job) => (
          <Box key={job.company}>
            <Text variant="h3" m={{ b: 4 }}>
              {job.company}
            </Text>
            <Text variant="text">{job.position}</Text>
            <Text variant="footnote" color="neutral.400">
              {job.date}
            </Text>
          </Box>
        ))}
      </Section>
      <Section>
        <Text variant="h2" color="primary.500" m={{ b: 40 }}>
          Projects
        </Text>
        {projects.map((project) => (
          <Box key={project.name}>
            <Text variant="h3" m={{ b: 4 }}>
              {project.name}
            </Text>
            <Text variant="text">{project.type}</Text>
            <Text variant="footnote" color="neutral.400">
              {project.date}
            </Text>
          </Box>
        ))}
      </Section>
      <Section>
        <Text variant="h2" color="primary.500" m={{ b: 40 }}>
          Education
        </Text>
        {education.map((education) => (
          <Box key={education.name}>
            <Text variant="h3" m={{ b: 4 }}>
              {education.name}
            </Text>
            <Text variant="text">{education.description}</Text>
            <Text variant="footnote" color="neutral.400">
              {education.date}
            </Text>
          </Box>
        ))}
      </Section>
    </Container>
  );
};

const Container = styled.div`
  max-width: 480px;
  margin: auto;
`;
const Section = styled.div`
  margin-top: 40px;
  margin-bottom: 120px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const jobs = [
  {
    company: "Apify",
    position: "Product designer",
    date: "Feb 2021 - Current",
  },
  {
    company: "Alfaoptima",
    position: "Product designer",
    date: "Jan 2020 - Current",
  },
  {
    company: "Spaceti",
    position: "UI/UX design, Design lead",
    date: "Jul 2019 - Jan 2021",
  },
  {
    company: "EMU: EmployeeMoodUp",
    position: "UI/UX design",
    date: "Feb 2019 - Jul 2019",
  },
  {
    company: "Garpen",
    position: "Webdesign, Graphic design",
    date: "Mar 2017 - Jul 2018 (part-time / contract based)",
  },
  {
    company: "MallGroup",
    position: "Intern, UI design",
    date: "May 2017 - May 2017",
  },
];

const projects = [
  {
    name: "Yourfleet",
    type: "Web app",
    date: "Jul 2018 - Jan 2019",
  },
  {
    name: "Sapport",
    type: "Company website",
    date: "Jun 2018 - Jul 2018",
  },
  {
    name: "Fleet consulting",
    type: "Company website",
    date: "Nov 2016 - Jan 2016",
  },
  {
    name: "Pereny",
    type: "Company website",
    Fdate: "eb 2016 - Mar 2016",
  },
];

const education = [
  {
    name: "Computer animation and multimedia",
    description:
      "Střední odborná škola multimediální a propagační tvorby s.r.o. (EDUSO)",
    date: "2014 - 2018",
  },
];

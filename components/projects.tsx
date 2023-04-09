import styled from "styled-components";
import { semanticColor, Text } from "../theme/theme";

type Props = {
  title: string;
  description: string;
};

export const Projects = () => {
  return (
    <Container>
      <Text variant="eyebrow" as="h2" color="neutral.textSubtle">
        PROJECTS
      </Text>
      <Wrapper>
        {ProjectContent.map((item) => (
          <Project key={item.title.toString()} title={item.title} description={item.description} />
        ))}
      </Wrapper>
    </Container>
  );
};

const Project = (item: Props) => {
  return (
    <ProjectWrapper>
      <ProjectImage />
      <ContentWrapper>
        <Text variant="h4" as="h3">
          {item.title}
        </Text>
        <Text variant="footnote" color="neutral.textSubtle">
          {item.description}
        </Text>
      </ContentWrapper>
    </ProjectWrapper>
  );
};

const ProjectContent = [
  {
    title: "Atmos",
    description: "Everything you need to create color palettes.",
  },
  {
    title: "Fig-stats",
    description: "Figma plugin and widget analytics.",
  },
  {
    title: "RBND sutdio",
    description: "Software studio making stuff on the internet.",
  },
];

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ProjectImage = styled.div`
  width: 187px;
  height: 120px;
  background-color: ${semanticColor("neutral.background")};
  border: 1px solid ${semanticColor("neutral.border")};
  border-radius: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 40px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

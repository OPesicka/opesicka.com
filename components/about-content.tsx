import Image from "next/image";
import styled, { css } from "styled-components";
import { about, education, jobs, projects } from "../res/content";
import { breakpoint, color, shadow, Text } from "../theme/theme";

export const AboutContent = () => {
  return (
    <Container>
      <Text variant="h1" color="primary.500" as="h1" m={{ b: 24 }}>
        About
      </Text>

      <Text variant="text">{about}</Text>
      <Section>
        <Text variant="h3" color="primary.400" as="h2" p={{ all: 24 }}>
          Experience
        </Text>
        {jobs.map((item) => (
          <Item key={item.company}>
            <MainContainer>
              <Image src={item.icon} width="36px" height="36px" />
              <TextContainer>
                <Text variant="h4" as="h3">
                  {item.company}
                </Text>
                <Text variant="footnote">{item.position}</Text>
              </TextContainer>
            </MainContainer>
            <DateContainer>
              <Text variant="footnote" color="neutral.400">
                {item.date}
              </Text>
            </DateContainer>
          </Item>
        ))}
      </Section>
      <Section>
        <Text variant="h3" color="success.400" as="h2" p={{ all: 24 }}>
          Projects
        </Text>
        {projects.map((item) => (
          <Item key={item.name}>
            <TextContainer>
              <Text variant="h4" as="h3">
                {item.name}
              </Text>
              <Text variant="footnote">{item.type}</Text>
            </TextContainer>
            <Text variant="footnote" color="neutral.400">
              {item.date}
            </Text>
          </Item>
        ))}
      </Section>
      <Section>
        <Text variant="h3" color="danger.400" as="h2" p={{ all: 24 }}>
          Education
        </Text>
        {education.map((item) => (
          <Item key={item.name}>
            <TextContainer>
              <Text variant="h4" as="h3">
                {item.name}
              </Text>
              <Text variant="footnote">{item.description}</Text>
            </TextContainer>
            <Text variant="footnote" color="neutral.400">
              {item.date}
            </Text>
          </Item>
        ))}
      </Section>
    </Container>
  );
};

const Container = styled.div`
  max-width: 640px;
  margin: auto;
`;
const Section = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;
  background: linear-gradient(
    163.1deg,
    ${color("neutral.850")} -74.91%,
    ${color("neutral.900")} 92.81%
  );
  border: 1px solid ${color("neutral.800")};
  border-radius: 16px;
  ${shadow("l2")};
  ${breakpoint(
    "mobile",
    "down",
    css`
      margin-top: 40px;
      margin-bottom: 40px;
    `
  )}
`;
const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-top: 1px solid ${color("neutral.800")};
  border-bottom: none;
  :hover {
    background-color: ${color("neutral.850")};
    color: red;
  }
  ${breakpoint(
    "mobile",
    "down",
    css`
      flex-direction: column;
      align-items: flex-start;
    `
  )}
`;
const DateContainer = styled.div`
  ${breakpoint(
    "mobile",
    "down",
    css`
      margin-left: 60px;
    `
  )}
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

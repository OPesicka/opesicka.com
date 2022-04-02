import Image from "next/image";
import styled, { css } from "styled-components";
import { about, aboutData } from "../res/content";
import { breakpoint, color, shadow, Text } from "../theme/theme";

export const AboutContent = () => {
  return (
    <Container>
      <Text variant="h1" color="primary.500" as="h1" m={{ b: 24 }}>
        About
      </Text>

      <Text variant="text">{about}</Text>

      {aboutData.map((item, key) => (
        <Section key={item.type}>
          {/* @ts-ignore */}
          <Text variant="h3" color={item.color} as="h2" p={{ all: 24 }}>
            {item.type}
          </Text>
          {aboutData[key].data.map((item: any) => (
            <Item
              href={item.link}
              target="_blank"
              key={item.name}
              data-var={item.color}
              rel="nofollow noopener"
            >
              <MainContainer>
                {GetIcon(item.icon)}
                <TextContainer>
                  <Text variant="h4" as="h3" color="inherit.0">
                    {item.name}
                  </Text>
                  <Text variant="footnote">{item.description}</Text>
                </TextContainer>
              </MainContainer>
              {GetSpacing(item.icon, item.date)}
            </Item>
          ))}
        </Section>
      ))}
    </Container>
  );
};

const GetIcon = (p: any) => {
  if (p !== null) {
    return <Image src={p} width="36px" height="36px" alt="logo" />;
  } else {
    return;
  }
};

const GetSpacing = (p: any, date: string) => {
  if (p !== null) {
    return (
      <DateContainer>
        <Text variant="footnote" color="neutral.400">
          {date}
        </Text>
      </DateContainer>
    );
  } else {
    return (
      <Text variant="footnote" color="neutral.400">
        {date}
      </Text>
    );
  }
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
const Item = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-top: 1px solid ${color("neutral.800")};
  border-bottom: none;
  color: ${color("neutral.50")};
  text-decoration: none;
  transition: 120ms;
  &[data-var="primary"]:hover {
    background-color: ${color("neutral.850")};
    cursor: pointer;
    color: ${color("primary.400")};
  }
  &[data-var="success"]:hover {
    color: ${color("success.400")};
    background-color: ${color("neutral.850")};
    cursor: pointer;
  }
  &[data-var="danger"]:hover {
    color: ${color("danger.400")};
    background-color: ${color("neutral.850")};
    cursor: pointer;
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
  max-width: 400px;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

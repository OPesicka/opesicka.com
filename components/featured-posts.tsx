import Image from "next/image";
import styled, { css } from "styled-components";
import { featured } from "../res/content";
import { breakpoint, color, shadow, Text } from "../theme/theme";
import { Button } from "./button";

export const FeaturedPosts = () => {
  return (
    <Conatiner>
      <Text variant="h2" as="h2">
        Featured work
      </Text>
      <SGrid>
        {featured.map((item) => (
          <Post key={item.name}>
            <Icon>
              <Image
                src={item.icon}
                width="56px"
                height="56px"
                alt={item.alt}
              />
            </Icon>
            <Text variant="h3" as="h3">
              {item.name}
            </Text>
            <Text variant="footnote" m={{ t: 8 }} color="neutral.300">
              {item.description}
            </Text>
            <Button href={item.link} rel={item.rel} target="_blank">
              {item.button}
            </Button>
          </Post>
        ))}
      </SGrid>
    </Conatiner>
  );
};

const Post = styled.div`
  ${shadow("l2")};
  border-radius: 12px;
  width: auto;
  transition: 160ms;
  // background: ${color("neutral.900")};
  border: 1px solid ${color("neutral.800")};
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: linear-gradient(
    163.1deg,
    ${color("neutral.850")} -74.91%,
    ${color("neutral.900")} 92.81%
  );
`;

const Icon = styled.div`
  margin-bottom: 40px;
`;

const SGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 24px;
  ${breakpoint(
    "mobile",
    "down",
    css`
      grid-template-columns: 1fr;
      gap: 32px;
    `
  )}
`;

const Conatiner = styled.div`
  margin-top: 140px;
`;

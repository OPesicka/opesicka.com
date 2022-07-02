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
          <SDiv key={item.name}>
            <SImage src={item.image} width="340px" height="220px" layout="responsive" objectFit="fill" alt="s" />
            <Post>
              <Text variant="h3" as="h3" color="primary.400">
                {item.name}
              </Text>
              <Text variant="footnote" color="neutral.300">
                {item.description}
              </Text>
              <Button href={item.link} rel={item.rel} target="_blank">
                {item.button}
              </Button>
            </Post>
          </SDiv>
        ))}
      </SGrid>
    </Conatiner>
  );
};
const SDiv = styled.div`
  display: block;
`;

const SImage = styled(Image)`
  border-radius: 12px;
`;

const Post = styled.div`
  width: auto;
  transition: 160ms;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const SGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
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

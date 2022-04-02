import styled, { css } from "styled-components";
import { breakpoint, Text } from "../theme/theme";
import { Blobs } from "./blobs";
import { SocialLinks } from "./social-links";
import { StyledLink } from "./styled-link";

export const Hero = () => {
  return (
    <Container>
      <ContentContainer>
        <Text variant="textStrong" color="neutral.100" m={{ t: 0 }}>
          Hi there, I&apos;m
        </Text>
        <Text variant="display" as="h1" m={{ b: 24 }}>
          Ondřej Pešička
        </Text>
        <Text variant="text" m={{ b: 24 }}>
          Product designer at{" "}
          <StyledLink variant="white" href="/">
            Apify
          </StyledLink>
          , and Co&#8209;founder of{" "}
          <StyledLink variant="white" href="/">
            Atmos
          </StyledLink>{" "}
          helping designers create better color palettes. I also ride mountain
          bikes and hack Figma.
        </Text>
        <SocialLinks variant="white" />
      </ContentContainer>
      <Animation>
        <Blobs />
      </Animation>
    </Container>
  );
};

const ContentContainer = styled.div`
  max-width: 640px;
  margin: auto;
  margin-top: 80px;
  margin-bottom: 80px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${breakpoint(
    "mobile",
    "down",
    css`
      margin-top: 40px;
      margin-bottom: 0px;
    `
  )}
`;

const Animation = styled.div`
  z-index: -1000;
  position: absolute;
  left: calc(50vw - 480px);
  width: 100%;
  max-width: 960px;
  ${breakpoint(
    "mobile",
    "down",
    css`
      left: calc(50vw - 160px);
      max-width: 320px;
    `
  )}
`;

const Container = styled.div`
  display: flex;
  gap: 120px;
`;

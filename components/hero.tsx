import Link from "next/link";
import styled, { css } from "styled-components";
import { breakpoint, Text } from "../theme/theme";
import { SocialLinks } from "./social-links";
import { StyledLink } from "./styled-link";

export const Hero = () => {
  return (
    <Container>
      <ContentContainer>
        <Text variant="textStrong" color="neutral.100" m={{ t: 0 }}>
          Hi there, I&apos;m
        </Text>
        <Text variant="display" as="h1" color="primary.500" m={{ b: 24 }}>
          Ondřej Pešička
        </Text>

        <Text variant="text" m={{ b: 24 }}>
          Product designer at{" "}
          <StyledLink variant="primary" href="https://apify.com/" target="_blank" rel="noopener">
            Apify
          </StyledLink>
          , and Co&#8209;founder of{" "}
          <StyledLink variant="primary" href="https://atmos.style/" target="_blank" rel="noopener">
            Atmos
          </StyledLink>{" "}
          helping designers create better color palettes. I also ride mountain bikes and hack Figma.{" "}
          <Link href="/about" passHref>
            <StyledLink variant="primary">Read more</StyledLink>
          </Link>
        </Text>
        <SocialLinks />
      </ContentContainer>
    </Container>
  );
};

const ContentContainer = styled.div`
  margin: auto;

  display: flex;
  flex-direction: column;
  ${breakpoint(
    "mobile",
    "down",
    css`
      margin-top: 40px;
      margin-bottom: 0px;
    `
  )}
`;

const Container = styled.div`
  display: flex;
  gap: 120px;
`;

import Image from "next/image";
import styled, { css } from "styled-components";
import { breakpoint, Text } from "../theme/theme";
import { SocialLinks } from "./social-links";
import { StyledLink } from "./styled-link";

export const Hero = () => {
  return (
    <>
      <SBox>
        <SDiv>
          <Text variant="text" color="primary.500">
            HI THERE,{" "}
          </Text>
          <Text variant="h1">I&apos;m Ondřej Pešička</Text>
          <Text variant="text" color="neutral.200">
            Product designer at <StyledLink href="/">Apify</StyledLink>, and
            Co-founder of <StyledLink href="/">Atmos</StyledLink> helping
            designers create better palettes. I also ride bikes and hack Figma.
          </Text>

          <SocialLinks />
          <RedDiv>
            <Image
              src="/red-blob.png"
              width="549px"
              height="597px"
              alt="blob"
            />
          </RedDiv>
          <PurpleDiv>
            <Image
              src="/purple-blob.png"
              width="509px"
              height="535px"
              alt="blob"
            />
          </PurpleDiv>
        </SDiv>
        <SHeroImage>
          <Image
            src="/hero.png"
            height="360"
            width="360"
            alt="illustration"
            layout="fixed"
          />
        </SHeroImage>
      </SBox>
    </>
  );
};

const SDiv = styled.div`
  max-width: 480px;
`;

const RedDiv = styled.div`
  position: absolute;
  left: 85%;
  width: 100%;
  z-index: -1000;
  ${breakpoint(
    "mobile",
    "down",
    css`
      display: none;
    `
  )}
`;

const SHeroImage = styled.div`
  z-index: -1000;
  ${breakpoint(
    "mobile",
    "down",
    css`
      display: none;
    `
  )}
`;

const PurpleDiv = styled.div`
  position: absolute;
  left: -16%;
  top: 80px;
  width: 100%;
  z-index: -1000;
  ${breakpoint(
    "mobile",
    "down",
    css`
      display: none;
    `
  )}
`;
const SBox = styled.div`
  display: flex;
  gap: 120px;
`;

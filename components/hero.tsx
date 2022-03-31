import Image from "next/image";
import styled, { css } from "styled-components";
import { breakpoint, Text } from "../theme/theme";
import { Blobs } from "./blobs";
import { SocialLinks } from "./social-links";
import { StyledLink } from "./styled-link";

export const Hero = () => {
  return (
    <>
      <SBox>
        <SDiv>
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
            , and Co-founder of{" "}
            <StyledLink variant="white" href="/">
              Atmos
            </StyledLink>{" "}
            helping designers create better color palettes. I also ride mountain
            bikes and hack Figma.
          </Text>
          <SocialLinks variant="white" />
        </SDiv>
        <Animation>
          <Blobs />
        </Animation>
        {/* <RedDiv>
          <Image src="/red-blob.png" width="549px" height="597px" alt="blob" />
        </RedDiv>
        <PurpleDiv>
          <Image
            src="/purple-blob.png"
            width="509px"
            height="535px"
            alt="blob"
          />
        </PurpleDiv> */}
      </SBox>
    </>
  );
};

const SDiv = styled.div`
  max-width: 640px;
  margin: auto;
  margin-bottom: 80px;
  margin-top: 80px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Animation = styled.div`
  z-index: -1000;
  position: absolute;
  left: calc(50vw - 480px);
  ${breakpoint(
    "mobile",
    "down",
    css`
      width: 100%;
      left: calc(50vw - 240px);
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

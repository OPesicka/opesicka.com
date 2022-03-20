import Image from "next/image";
import styled from "styled-components";
import { Text } from "../theme/theme";
import { SocialLinks } from "./social-links";

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
            Product designer at{" "}
            <Text variant="textStrong" color="primary.500" as="a" href="/">
              Apify
            </Text>
            , and Co-founder of{" "}
            <Text variant="textStrong" color="primary.500" as="a" href="/">
              Atmos
            </Text>{" "}
            helping designers create better palettes. I also ride bikes and hack
            Figma.
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
        <Image src="/hero.png" height="360" width="360" z-index="-1000" />
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
`;

const PurpleDiv = styled.div`
  position: absolute;
  left: -13%;
  top: 80px;
  width: 100%;
  z-index: -1000;
`;
const SBox = styled.div`
  display: flex;
  gap: 120px;
`;

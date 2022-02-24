import styled from "styled-components";
import { palette } from "../theme/palette";
import { color, text, Text } from "../theme/theme";

export const Hero = () => {
  return (
    <>
      <SDiv>
        <Text variant="text" color="primary.500">
          HI THERE,{" "}
        </Text>
        <Text variant="h1">I&apos;m Ondřej Pešička</Text>
        <Text variant="text">
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

        <SUl>
          <li>
            <SLink href="">Linkedin</SLink>
          </li>
          <li>
            <SLink href="">Behance</SLink>
          </li>
          <li>
            <SLink href="">Dribbble</SLink>
          </li>
        </SUl>
      </SDiv>
    </>
  );
};

const SLink = styled.a`
  ${text("text")}
  color: ${color("primary.500")}
`;

const SUl = styled.ul`
  display: flex;
  gap: 24px;
  list-style-type: none;
  padding: 0;
`;

const SDiv = styled.div`
  max-width: 480px;
  //background-color: ${palette.primary[100]};
`;

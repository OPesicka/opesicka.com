import styled from "styled-components";
import { shadow, text, Text } from "../theme/theme";

export const Hero = () => {
  return (
    <>
      <SDiv>
        <Text variant="text">HI THERE, </Text>
        <Text variant="h1">I'm Ondřej Pešička</Text>
        <Text variant="text">
          Product designer at <strong>Apify</strong>, and Co-founder of{" "}
          <strong>Atmos</strong> helping designers create better palettes. I
          also ride bikes and hack Figma.
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
`;

const SUl = styled.ul`
  display: flex;
  gap: 24px;
  list-style-type: none;
  padding: 0;
`;

const SDiv = styled.div`
  max-width: 480px;
`;

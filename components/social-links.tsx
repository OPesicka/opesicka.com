import styled from "styled-components";
import { color, text, Text } from "../theme/theme";

export const SocialLinks = () => {
  return (
    <>
      <SUl>
        <li>
          <SLink href="">Linkedin</SLink>
        </li>
        <li>
          <SText>/</SText>
        </li>
        <li>
          <SLink href="">Behance</SLink>
        </li>
        <li>
          <SText>/</SText>
        </li>
        <li>
          <SLink href="/">Dribbble</SLink>
        </li>
      </SUl>
    </>
  );
};

const SLink = styled.a`
  ${text("footnote")};
  color: ${color("neutral.400")};
  text-decoration: none;
  transition: all 120ms;
  :hover {
    color: ${color("primary.500")};
  }
`;

const SUl = styled.ul`
  display: flex;
  gap: 24px;
  list-style-type: none;
  padding: 0;
`;

const SText = styled.p`
  ${text("footnote")};
  color: ${color("primary.500")};
  margin: 0;
`;

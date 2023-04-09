import Link from "next/link";
import styled from "styled-components";
import { color, semanticColor, Text, text } from "../theme/theme";

export const Header = () => {
  return (
    <SHeader>
      <Link href="/" passHref>
        <SLink>Home</SLink>
      </Link>
      <Text variant="footnote" color="neutral.textSubtle">
        /
      </Text>
      <Text variant="footnote">About</Text>
    </SHeader>
  );
};

const SHeader = styled.header`
  display: flex;
  padding-bottom: 24px;
  align-items: center;
  gap: 8px;
  margin: auto;
`;

const SLink = styled.a`
  ${text("footnoteStrong")};
  color: ${semanticColor("neutral.text")};
  text-decoration: none;
  transition: all 160ms;
  :hover {
    color: ${color("primary.500")};
  }
`;

import Link from "next/link";
import styled from "styled-components";
import { color, Text, text } from "../theme/theme";

export const Header = () => {
  return (
    <SHeader>
      <Link href="/" passHref>
        <SLink>Home</SLink>
      </Link>
      <Text variant="footnote" color="neutral.400">
        /
      </Text>
      <Text variant="footnote" color="neutral.400">
        About
      </Text>
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
  color: ${color("neutral.400")};
  text-decoration: none;
  transition: all 160ms;
  :hover {
    color: ${color("primary.500")};
  }
`;

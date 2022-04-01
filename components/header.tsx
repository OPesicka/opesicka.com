import Link from "next/link";
import styled from "styled-components";
import { color, text } from "../theme/theme";

export const Header = () => {
  return (
    <SHeader>
      <Link href="/" passHref>
        <Logo>OPESICKA</Logo>
      </Link>
      <SUl>
        {/* <li>
          <SLink href="">Work</SLink>
        </li>
        <li>
          <SLink href="">Playground</SLink>
        </li> */}
        <li>
          <Link href="/about" passHref>
            <SLink>About</SLink>
          </Link>
        </li>
      </SUl>
    </SHeader>
  );
};

const SHeader = styled.header`
  display: flex;
  padding: 24px 0;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

const SUl = styled.ul`
  display: flex;
  gap: 24px;
  list-style-type: none;
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

const Logo = styled.p`
  color: ${color("neutral.50")};
  ${text("h3")};
  letter-spacing: 12px;
  cursor: pointer;
  transition: all 160ms;
  :hover {
    color: ${color("primary.500")};
  }
`;

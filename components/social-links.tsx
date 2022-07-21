import styled from "styled-components";
import { color, text } from "../theme/theme";

type Props = {
  variant?: "white";
};

export const SocialLinks = (props: Props) => {
  return (
    <>
      <SUl>
        <li>
          <SLink variant={props.variant} href="https://www.linkedin.com/in/opesicka/" rel="nofollow noopener">
            Linkedin
          </SLink>
        </li>
        <li>
          <SText variant={props.variant}>/</SText>
        </li>
        <li>
          <SLink variant={props.variant} href="https://dribbble.com/OPesicka" rel="nofollow noopener">
            Dribbble
          </SLink>
        </li>
        <li>
          <SText variant={props.variant}>/</SText>
        </li>
        <li>
          <SLink variant={props.variant} href="https://www.behance.net/OPesicka" rel="nofollow noopener">
            Behance
          </SLink>
        </li>
      </SUl>
    </>
  );
};

const SLink = styled.a<Props>`
  ${text("footnote")};
  color: ${(props) => color(props.variant === "white" ? "neutral.50" : "neutral.400")};
  text-decoration: none;
  transition: all 160ms;
  :hover {
    color: ${(props) => color(props.variant === "white" ? "neutral.200" : "primary.500")};
  }
`;

const SUl = styled.ul`
  display: flex;
  gap: 24px;
  list-style-type: none;
  padding: 0;
`;

const SText = styled.p<Props>`
  ${text("footnote")};
  color: ${(props) => color(props.variant === "white" ? "neutral.300" : "primary.400")};
  margin: 0;
`;

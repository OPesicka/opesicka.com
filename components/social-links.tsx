import styled from "styled-components";
import { color, text, Text } from "../theme/theme";

type Props = {
  variant?: "white";
};

export const SocialLinks = (props: Props) => {
  return (
    <>
      <SUl>
        <li>
          <SLink variant={props.variant} href="">
            Linkedin
          </SLink>
        </li>
        <li>
          <SText variant={props.variant}>/</SText>
        </li>
        <li>
          <SLink variant={props.variant} href="">
            Behance
          </SLink>
        </li>
        <li>
          <SText variant={props.variant}>/</SText>
        </li>
        <li>
          <SLink variant={props.variant} href="/">
            Dribbble
          </SLink>
        </li>
      </SUl>
    </>
  );
};

const SLink = styled.a<Props>`
  ${text("footnote")};
  color: ${(props) =>
    color(props.variant === "white" ? "neutral.0" : "neutral.400")};
  text-decoration: none;
  transition: all 120ms;
  :hover {
    color: ${(props) =>
      color(props.variant === "white" ? "neutral.200" : "primary.500")};
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
  color: ${(props) =>
    color(props.variant === "white" ? "neutral.300" : "primary.500")};
  margin: 0;
`;

import styled from "styled-components";
import { color, text, Text } from "../theme/theme";
import { SocialLinks } from "./social-links";
import { Title } from "./title";

export const Footer = () => {
  return (
    <>
      <SDiv>
        <Text variant="h2">Want to get in touch?</Text>
        <Text variant="text" color="neutral.400">
          I’m always open to new adventures and interesting projects.
        </Text>
        <SBox>
          <SEmail>hello@opesicka.com</SEmail>

          <SocialLinks />
        </SBox>
      </SDiv>
    </>
  );
};

const SDiv = styled.div`
  max-width: 960px;
  margin: auto;
  margin-top: 160px;
`;

const SBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 64px;
  margin-bottom: 80px;
`;

const SEmail = styled.p`
  ${text("footnote")};
  margin: 0;
  color: ${color("neutral.50")};
`;

import styled, { css } from "styled-components";
import { breakpoint, color, text, Text } from "../theme/theme";
import { SocialLinks } from "./social-links";

export const Footer = () => {
  return (
    <Container>
      <Text variant="h2" as="h2">
        Want to get in touch?
      </Text>
      <Text variant="text" color="neutral.400">
        I’m always open to new adventures and interesting projects.
      </Text>
      <SBox>
        <SEmail>hello@opesicka.com</SEmail>

        <SocialLinks />
      </SBox>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 160px;
`;

const SBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 64px;
  margin-bottom: 40px;
  ${breakpoint(
    "mobile",
    "down",
    css`
      flex-direction: column;
      align-items: flex-start;
      gap: 1žpx;
    `
  )}
`;

const SEmail = styled.p`
  ${text("footnote")};
  margin: 0;
  color: ${color("neutral.50")};
`;

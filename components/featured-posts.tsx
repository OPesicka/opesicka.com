import styled, { css } from "styled-components";
import { breakpoint, color, shadow, text, Text } from "../theme/theme";

export const FeaturedPosts = () => {
  return (
    <>
      <SDiv>
        <Text variant="h2" as="h2">
          Featured work
        </Text>
        <SGrid>
          <SBox>
            <SText variant="h3">Atmos</SText>
          </SBox>
          <SBox>
            <SText variant="h3">Alfaoptima</SText>
          </SBox>
          <SBox>
            <SText variant="h3">Spaceti</SText>
          </SBox>
        </SGrid>
      </SDiv>
    </>
  );
};

const SBox = styled.div`
  ${shadow("l2")};
  background-image: url(/placeholder.png);
  background-position: center center;
  border-radius: 12px;
  width: auto;
  height: 312px;
  display: flex;
  transition: 160ms;
  border: solid 1px ${color("neutral.800")};
  padding: 24px;
  :hover {
    ${shadow("l3")};
  }
  ${breakpoint(
    "mobile",
    "down",
    css`
      height: 280px;
    `
  )}
`;

const SText = styled(Text)`
  align-self: flex-end;
  margin: 0;
`;

const SGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 24px;
  ${breakpoint(
    "mobile",
    "down",
    css`
      grid-template-columns: 1fr;
      gap: 32px;
    `
  )}
`;

const SDiv = styled.div`
  margin-top: 140px;
`;

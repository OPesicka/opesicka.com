import styled from "styled-components";
import { shadow, text, Text } from "../theme/theme";

export const FeaturedPosts = () => {
  return (
    <>
      <SDiv>
        <Text variant="h2" as="h2">
          Featured work
        </Text>
        <SGrid>
          <SBox>
            <SText>Atmos</SText>
          </SBox>
          <SBox>
            <SText>Alfaoptima</SText>
          </SBox>
          <SBox>
            <SText>Spaceti</SText>
          </SBox>
        </SGrid>
      </SDiv>
    </>
  );
};

const SBox = styled.div`
  ${shadow("l2")};
  background: #26252c;
  border-radius: 12px;
  width: auto;
  height: 312px;
  display: flex;
  transition: 160ms;
  border: solid 1px #312f38;
  padding: 24px;
  :hover {
    ${shadow("l3")};
  }
`;

const SText = styled.h3`
  ${text("h3")}
  align-self: flex-end;
  margin: 0;
`;

const SGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 24px;
`;

const SDiv = styled.div`
  margin-top: 140px;
`;

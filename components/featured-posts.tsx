import Image from "next/image";
import styled, { css } from "styled-components";
import { breakpoint, color, shadow, Text } from "../theme/theme";

export const FeaturedPosts = () => {
  return (
    <>
      <SDiv>
        <Text variant="h2" as="h2">
          Featured work
        </Text>
        <SGrid>
          <Post>
            <Icon />
            <Text variant="h3">Apify</Text>
            <Text variant="footnote" m={{ t: 8 }} color="neutral.200">
              Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
            </Text>
          </Post>
          <Post>
            <Icon />
            <Text variant="h3">Alfaoptima</Text>
            <Text variant="footnote" m={{ t: 8 }} color="neutral.200">
              Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
            </Text>
          </Post>
          <Post>
            <Icon />
            <Text variant="h3">Spaceti</Text>
            <Text variant="footnote" m={{ t: 8 }} color="neutral.200">
              Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
            </Text>
          </Post>
        </SGrid>
      </SDiv>
    </>
  );
};

const Post = styled.div`
  ${shadow("l2")};
  border-radius: 12px;
  width: auto;
  transition: 160ms;
  background-color: ${color("neutral.900")};
  border: 1px solid ${color("neutral.850")};
  padding: 32px;

  :hover {
    ${shadow("l3")};
  }
`;

const Icon = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 40px;
  border-radius: 100%;
  background-color: ${color("primary.400")};
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

const CoverImage = styled(Image)`
  border-radius: 12px;
  border: solid 1px ${color("neutral.800")} !important;
`;

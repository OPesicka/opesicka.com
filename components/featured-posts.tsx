import Image from "next/image";
import styled, { css } from "styled-components";
import { breakpoint, color, shadow, Text } from "../theme/theme";
import { Button } from "./button";

export const FeaturedPosts = () => {
  return (
    <>
      <SDiv>
        <Text variant="h2" as="h2">
          Featured work
        </Text>
        <SGrid>
          <Post>
            <Icon>
              <Image src="/apify.svg" width="56px" height="56px" />
            </Icon>
            <Text variant="h3">Apify</Text>
            <Text variant="footnote" m={{ t: 8 }} color="neutral.200">
              Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
            </Text>
            <Button href="https://apify.com/">Visit</Button>
          </Post>
          <Post>
            <Icon>
              <Image src="/alfaoptima.svg" width="56px" height="56px" />
            </Icon>
            <Text variant="h3">Alfaoptima</Text>
            <Text variant="footnote" m={{ t: 8 }} color="neutral.200">
              Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
            </Text>
            <Button
              href="https://www.behance.net/gallery/107464717/Alfaoptima-Case-study"
              rel="nofollow noopener"
            >
              Behance project
            </Button>
          </Post>
          <Post>
            <Icon>
              <Image src="/spaceti.svg" width="56px" height="56px" />
            </Icon>
            <Text variant="h3">Spaceti</Text>
            <Text variant="footnote" m={{ t: 8 }} color="neutral.200">
              Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
            </Text>
            <Button href="https://www.spaceti.com/" rel="nofollow noopener">
              Visit
            </Button>
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
  background: ${color("neutral.900")};
  border: 1px solid ${color("neutral.850")};
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  :hover {
    ${shadow("l3")};
    border-color: ${color("neutral.800")};
  }
`;

const Icon = styled.div`
  margin-bottom: 40px;
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

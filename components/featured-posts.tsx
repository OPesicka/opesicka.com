import Image from "next/image";
import styled, { css } from "styled-components";
import { featuredWork } from "../res/content";
import { breakpoint, color, Text } from "../theme/theme";
import { StyledLink } from "./styled-link";

export const FeaturedWork = () => {
  return (
    <Conatiner>
      <Text variant="h2" as="h2">
        Work
      </Text>
      <SGrid>
        {featuredWork.map((item) => (
          <Post key={item.name}>
            <BulletContainer>
              <SBullet />
              <SLine />
            </BulletContainer>
            <Text variant="text" color="neutral.200">
              {item.adjective}{" "}
              <StyledLink variant="primary" href={item.link} rel={item.rel} target="_blank">
                {item.name}
              </StyledLink>{" "}
              {item.description}
            </Text>
          </Post>
        ))}
      </SGrid>
    </Conatiner>
  );
};
const BulletContainer = styled.div`
  height: 100%;
  width: 18px;
`;

const SLine = styled.div`
  height: calc(100% - 10px);
  width: 3px;
  background-color: ${color("neutral.700")};
  position: relative;
  left: 7px;
  top: 0px;
  border-radius: 1.5px;
`;

const SBullet = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 100%;
  border: 3px solid ${color("neutral.500")};
  margin-top: 7px;
  margin-bottom: 7px;
  background-color: ${color("neutral.850")};
`;

const SImage = styled(Image)`
  border-radius: 12px;
`;

const Post = styled.div`
  width: auto;
  transition: 160ms;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  :last-of-type > div:nth-child(1) > div:nth-child(2) {
    display: none;
  }
`;

const SGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
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

const Conatiner = styled.div`
  margin-top: 140px;
`;

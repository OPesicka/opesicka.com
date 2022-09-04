import styled, { css } from "styled-components";
import ArticleIcon from "../assets/article";
import WorkIcon from "../assets/work";
import ActiveWorkIcon from "../assets/workActive";
import { FeaturedType } from "../res/content";
import { breakpoint, Text } from "../theme/theme";

type Props = {
  title: string;
  content: FeaturedType[];
};

export const FeaturedWork = (props: Props) => {
  return (
    <div>
      <Text variant="h2" as="h2">
        {props.title}
      </Text>
      <SGrid>
        {props.content.map((item) => (
          <Post key={item.description.toString()}>
            <BulletContainer>{GetIcon(item.type)}</BulletContainer>
            {item.description}
          </Post>
        ))}
      </SGrid>
    </div>
  );
};

const GetIcon = (type: any) => {
  if (type === "active") {
    return <ActiveWorkIcon />;
  } else if (type === "dead") {
    return <WorkIcon />;
  } else if (type === "article") {
    return <ArticleIcon />;
  }
};

const BulletContainer = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
  height: 16px;
`;

const Post = styled.div`
  width: auto;
  transition: 160ms;
  display: flex;
  align-items: flex-start;
  gap: 12px;
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

import styled from "styled-components";
import { semanticColor, Text } from "../../theme/theme";
import Arrow from "../../icons/arrow";
import ArticleIcon from "../../icons/article";
import { writingContent } from "./content";

type Props = {
  title: string;
  description: string;
};

export const Writing = () => {
  return (
    <Container>
      <Text variant="eyebrow" as="h2" color="neutral.textSubtle">
        WRITING
      </Text>
      <Wrapper>
        {writingContent.map((item) => (
          <Post key={item.title.toString()} title={item.title} description={item.description} />
        ))}
      </Wrapper>
    </Container>
  );
};

const Post = (item: Props) => {
  return (
    <ProjectWrapper>
      <ContentWrapper>
        <TitleWrapper>
          <ArticleIcon />
          <Text variant="h4" as="h3">
            {item.title}
          </Text>
          <Arrow />
        </TitleWrapper>
        <Text variant="footnote" color="neutral.textSubtle">
          {item.description}
        </Text>
      </ContentWrapper>
    </ProjectWrapper>
  );
};

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ProjectImage = styled.div`
  width: 187px;
  height: 120px;
  background-color: ${semanticColor("neutral.background")};
  border: 1px solid ${semanticColor("neutral.border")};
  border-radius: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

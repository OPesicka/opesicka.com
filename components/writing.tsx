import styled from "styled-components";
import { semanticColor, Text } from "../theme/theme";
import Arrow from "../icons/arrow";

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
        {ProjectContent.map((item) => (
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

const ProjectContent = [
  {
    title: "LCH is the best",
    description: "Exploring the benefits of LCH for UI design.",
  },
  {
    title: "Dark mode practices",
    description: "How to go about designing the famed dark mode.",
  },
];

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

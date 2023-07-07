import * as React from 'react'
import styled from 'styled-components'
import { semanticColor, Text } from '../../theme/theme'
import Arrow from '../../icons/arrow'
import ArticleIcon from '../../icons/article'
import { writingContent, type WritingProps } from './content'

export const Writing: React.FC = () => {
  return (
    <Container>
      <Text variant="eyebrow" component="h2" color="neutral.textSubtle">
        WRITING
      </Text>
      <Wrapper>
        {writingContent.map((item) => (
          <Post
            key={item.title.toString()}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </Wrapper>
    </Container>
  )
}

const Post: React.FC<WritingProps> = (item) => {
  return (
    <ProjectWrapper href={item.link} target="_blank" rel="noopener">
      <ContentWrapper>
        <TitleWrapper>
          <ArticleIcon />
          <Text variant="h4" component="h3">
            {item.title}
          </Text>
          <Arrow />
        </TitleWrapper>
        <Text variant="footnote" color="neutral.textSubtle">
          {item.description}
        </Text>
      </ContentWrapper>
    </ProjectWrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`

const ProjectWrapper = styled.a`
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-decoration: none;

  &:hover {
    ${ContentWrapper} {
      h3 {
        color: ${semanticColor('primary.text')};
      }
    }
  }
`

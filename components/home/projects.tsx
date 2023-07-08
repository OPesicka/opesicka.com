import * as React from 'react'
import styled from 'styled-components'
import { semanticColor, Text } from '../../theme/theme'
import { type ProjectProps, projectsContent } from '../../content/home-content'

export const Projects: React.FC = () => {
  return (
    <Container>
      <Text variant="eyebrow" component="h2" color="neutral.textSubtle">
        PROJECTS
      </Text>
      <Wrapper>
        {projectsContent.map((item) => (
          <Project
            key={item.title.toString()}
            title={item.title}
            description={item.description}
            illustration={item.illustration}
            link={item.link}
          />
        ))}
      </Wrapper>
    </Container>
  )
}

const Project: React.FC<ProjectProps> = (item) => {
  return (
    <ProjectWrapper href={item.link} target="_blank" rel="noopener">
      <ProjectImage>{item.illustration}</ProjectImage>
      <ContentWrapper>
        <Text variant="h4" component="h3">
          {item.title}
        </Text>
        <Text variant="footnote" color="neutral.textSubtle">
          {item.description}
        </Text>
      </ContentWrapper>
    </ProjectWrapper>
  )
}

const ProjectImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${semanticColor('neutral.background')};
  border: 1px solid ${semanticColor('neutral.border')};
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 187 / 120;
  transition: all 120ms;

  svg {
    width: 100%;
    height: 100%;
  }
`

const Wrapper = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
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
  h3 {
    transition: all 120ms;
  }
`

const ProjectWrapper = styled.a`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  text-decoration: none;

  &:hover {
    ${ProjectImage} {
      box-shadow: var(--shadow-l2);
    }
    ${ContentWrapper} {
      h3 {
        color: ${semanticColor('primary.text')};
      }
    }
  }
`

import * as React from 'react'
import styled, { css } from 'styled-components'
import { breakpoint, semanticColor, Text } from '../../theme/theme'
import { experienceContent } from '../../content/about-content'
import Arrow from '../../public/icons/arrow'

export const AboutCards: React.FC = () => {
  return (
    <>
      {experienceContent.map((item, key) => (
        <Section key={item.type}>
          <Text variant="eyebrow" component="h2" color="neutral.textSubtle">
            {item.type}
          </Text>

          <ItemsWrapper>
            {experienceContent[key].data.map((item: any) => (
              <Item key={item.name}>
                <MainContainer>
                  {item.link ? (
                    <LinktContainer
                      href={item.link}
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      <HeadingContainer>
                        <Text variant="h4" component="h3">
                          {item.name}
                        </Text>
                        <Arrow />
                      </HeadingContainer>
                      <Text variant="footnote" color="neutral.textSubtle">
                        {item.description}
                      </Text>
                    </LinktContainer>
                  ) : (
                    <TextContainer>
                      <HeadingContainer>
                        <Text variant="h4" component="h3">
                          {item.name}
                        </Text>
                      </HeadingContainer>
                      <Text variant="footnote" color="neutral.textSubtle">
                        {item.description}
                      </Text>
                    </TextContainer>
                  )}
                </MainContainer>
                <Text variant="footnote">{item.date}</Text>
              </Item>
            ))}
          </ItemsWrapper>
        </Section>
      ))}
    </>
  )
}

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
const Section = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${breakpoint(
    'mobile',
    'down',
    css`
      flex-direction: column;
      align-items: flex-start;
    `
  )}
`

const LinktContainer = styled.a`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  text-decoration: none;
  transition: all 120ms;

  :hover {
    h3 {
      color: ${semanticColor('primary.text')};
    }
  }
`
const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  text-decoration: none;
  transition: all 120ms;
`

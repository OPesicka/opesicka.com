import * as React from 'react'
import Image from 'next/image'
import styled, { css } from 'styled-components'
import { experienceContent } from './content'
import {
  breakpoint,
  color,
  semanticColor,
  shadow,
  Text
} from '../../theme/theme'

export const AboutCards: React.FC = () => {
  return (
    <>
      {experienceContent.map((item, key) => (
        <Section key={item.type}>
          <Text
            variant="h3"
            // color={item.color}
            component="h2"
            p={{ all: 24 }}
          >
            {item.type}
          </Text>

          {experienceContent[key].data.map((item: any) => (
            <Item
              href={item.link}
              target="_blank"
              key={item.name}
              data-var={item.color}
              rel="nofollow noopener"
            >
              <MainContainer>
                {GetIcon(item.icon)}
                <TextContainer>
                  <HeadingContainer>
                    <Text variant="h4" component="h3">
                      {item.name}
                    </Text>
                    {GetArrow(item.link)}
                  </HeadingContainer>
                  <Text variant="footnote">{item.description}</Text>
                </TextContainer>
              </MainContainer>
              {GetSpacing(item.icon, item.date)}
            </Item>
          ))}
        </Section>
      ))}
    </>
  )
}

const GetArrow: any = (p: string) => {
  if (p !== null) {
    return <Image src="/arrow.svg" width="16" height="16" alt="arrow right" />
  }
}

const GetIcon: any = (p: string) => {
  if (p !== null) {
    return <Image src={p} width="36" height="36" alt="logo" />
  }
}

const GetSpacing: any = (p: string, date: string) => {
  if (p !== null) {
    return (
      <DateContainer>
        <Text variant="footnote">{date}</Text>
      </DateContainer>
    )
  } else {
    return <Text variant="footnote">{date}</Text>
  }
}
const HeadingContainer = styled.div`
  display: flex;
  gap: 8px;
`
const Section = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;
  background: linear-gradient(
    163.1deg,
    ${semanticColor('neutral.backgroundSubtle')} -74.91%,
    ${semanticColor('neutral.background')} 92.81%
  );
  border: 1px solid ${color('neutral.800')};
  border-radius: 16px;
  overflow: hidden;
  ${shadow('l2')};
  ${breakpoint(
    'mobile',
    'down',
    css`
      margin-top: 40px;
      margin-bottom: 40px;
    `
  )}
`
const Item = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-top: 1px solid ${color('neutral.800')};
  border-bottom: none;
  color: ${color('neutral.50')};
  text-decoration: none;
  transition: 120ms;
  &[data-var='primary']:hover {
    background-color: ${semanticColor('neutral.backgroundSubtle')};
    cursor: pointer;
    /* color: ${color('primary.400')}; */
  }
  &[data-var='success']:hover {
    /* color: ${color('success.400')}; */
    background-color: ${semanticColor('neutral.backgroundSubtle')};
    cursor: pointer;
  }
  &[data-var='danger']:hover {
    /* color: ${color('danger.400')}; */
    background-color: ${semanticColor('neutral.backgroundSubtle')};
    cursor: pointer;
  }
  ${breakpoint(
    'mobile',
    'down',
    css`
      flex-direction: column;
      align-items: flex-start;
    `
  )}
`
const DateContainer = styled.div`
  ${breakpoint(
    'mobile',
    'down',
    css`
      margin-left: 60px;
    `
  )}
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`
const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`

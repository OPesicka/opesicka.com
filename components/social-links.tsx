import * as React from 'react'
import styled from 'styled-components'
import { Text, semanticColor, text } from '../theme/theme'
import { links } from '../content/links'

interface Props {
  variant?: 'white'
}

export const SocialLinks: React.FC<Props> = (props) => {
  return (
    <>
      <SUl>
        <li>
          <SLink href={links.linkedIn} rel="nofollow noopener">
            Linkedin
          </SLink>
        </li>
        <li>
          <Text variant="footnote" color="neutral.textSubtle">
            /
          </Text>
        </li>
        <li>
          <SLink href={links.github} rel="nofollow noopener">
            Github
          </SLink>
        </li>
        <li>
          <Text variant="footnote" color="neutral.textSubtle">
            /
          </Text>
        </li>
        <li>
          <SLink href={links.twitter} rel="nofollow noopener">
            Twitter
          </SLink>
        </li>
      </SUl>
    </>
  )
}

const SLink = styled.a`
  ${text('footnote')};
  color: ${semanticColor('neutral.text')};
  text-decoration: none;
  transition: all 160ms;
  :hover {
    color: ${semanticColor('neutral.textSubtle')};
    text-decoration: underline;
  }
`

const SUl = styled.ul`
  display: flex;
  gap: 24px;
  list-style-type: none;
  padding: 0;
`

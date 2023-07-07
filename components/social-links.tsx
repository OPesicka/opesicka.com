import * as React from 'react'
import styled from 'styled-components'
import { semanticColor, text } from '../theme/theme'

interface Props {
  variant?: 'white'
}

export const SocialLinks: React.FC<Props> = (props) => {
  return (
    <>
      <SUl>
        <li>
          <SLink
            variant={props.variant}
            href="https://www.linkedin.com/in/opesicka/"
            rel="nofollow noopener"
          >
            Linkedin
          </SLink>
        </li>
        <li>
          <SText variant={props.variant}>/</SText>
        </li>
        <li>
          <SLink
            variant={props.variant}
            href="https://dribbble.com/OPesicka"
            rel="nofollow noopener"
          >
            Dribbble
          </SLink>
        </li>
      </SUl>
    </>
  )
}

const SLink = styled.a<Props>`
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

const SText = styled.p<Props>`
  ${text('footnote')};
  color: ${semanticColor('neutral.textSubtle')};
  margin: 0;
`

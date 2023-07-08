import * as React from 'react'
import { type ReactNode } from 'react'
import styled from 'styled-components'
import { semanticColor, text } from '../theme/theme'
import Link from 'next/link'

interface Props {
  href: string
  children: ReactNode
  rel?: string
  target?: string
}

export const Button: React.FC<Props> = (props) => {
  if (props.target === '_blank') {
    return (
      <SLink href={props.href} rel={props.rel} target={props.target}>
        <SButton>{props.children}</SButton>
      </SLink>
    )
  } else {
    return (
      <SButtonLink href={props.href} passHref>
        <SButton>{props.children}</SButton>
      </SButtonLink>
    )
  }
}

const SButton = styled.div`
  background: ${semanticColor('neutral.backgroundSubtle')};
  border: 1px solid ${semanticColor('neutral.border')};
  padding: 7px 11px;
  box-sizing: border-box;
  border-radius: 8px;
  transition: all 160ms;
  cursor: pointer;
  width: auto;

  :hover {
    background: ${semanticColor('neutral.hover')};
    box-shadow: var(--shadow-l1);
  }
`

const SLink = styled.a`
  ${text('textStrong')}
  color: ${semanticColor('neutral.text')};
  text-decoration: none;
  line-height: 24px;
`
const SButtonLink = styled(Link)`
  ${text('textStrong')}
  color: ${semanticColor('neutral.text')};
  text-decoration: none;
  line-height: 24px;
`

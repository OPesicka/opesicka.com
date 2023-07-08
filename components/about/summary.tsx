import * as React from 'react'
import { Text, breakpoint } from '../../theme/theme'
import { Button } from '../button'
import styled, { css } from 'styled-components'
import { links } from '../../content/links'
import Arrow from '../../public/icons/arrow'
import Link from 'next/link'

export const Summary: React.FC = () => {
  return (
    <>
      <HeadingWrapper>
        <Link href="/" passHref>
          <SArrow />
        </Link>
        <Text variant="h1" component="h1">
          About
        </Text>
      </HeadingWrapper>

      <Text variant="text" m={{ b: 16 }}>
        Hey, I&apos;m Ondřej Pešička, a product designer based in Prague,
        Czechia.
      </Text>
      <Text variant="text" m={{ b: 16 }}>
        I&apos;m passionate about creating accessible experiences that leave a
        positive impact on people.
      </Text>
      <Text variant="text">
        While having experience in visual design and 3D/2D animation my main
        focus is Product design and UI/UX. I believe that good design is
        essential for creating products people will love.
      </Text>

      <Wrapper>
        <Button href={links.github} target="_blank" rel="noopener noreferrer">
          Github
        </Button>
        <Button href={links.twitter} target="_blank" rel="noopener noreferrer">
          Twitter
        </Button>
        <Button href={links.linkedIn} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </Button>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 24px;
`

const SArrow = styled(Arrow)`
  transform: rotate(180deg);
`

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  margin-left: -24px;

  ${breakpoint(
    'mobile',
    'down',
    css`
      margin-top: 40px;
      margin-left: -16px;
    `
  )}
`

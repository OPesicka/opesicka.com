import * as React from 'react'
import styled, { css } from 'styled-components'
import { breakpoint, Text } from '../../theme/theme'
import { StyledLink } from '../styled-link'
import { Button } from '../button'

export const Hero: React.FC = () => {
  return (
    <Container>
      <Text variant="h1" component="h1" color="neutral.text">
        Ondřej Pešička
      </Text>

      <Text variant="text">
        Staff product designer at{' '}
        <StyledLink href="https://apify.com/" target="_blank" rel="noopener">
          Apify
        </StyledLink>{' '}
        and designer behind{' '}
        <StyledLink href="https://atmos.style/" target="_blank" rel="noopener">
          Atmos
        </StyledLink>{' '}
        helping designers create better color palettes. I also ride mountain
        bikes and hack Figma.{' '}
      </Text>

      <ButtonWrapper>
        <Button href="/about">About</Button>
      </ButtonWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 16px;

  ${breakpoint(
    'mobile',
    'down',
    css`
      margin-top: 40px;
      margin-bottom: 0px;
    `
  )}
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`

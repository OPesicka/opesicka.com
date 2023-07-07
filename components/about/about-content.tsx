import * as React from 'react'
import styled from 'styled-components'
import { Text } from '../../theme/theme'
import { AboutCards } from './about-cards'

export const AboutContent: React.FC = () => {
  return (
    <Container>
      <Text variant="h1" component="h1" m={{ b: 24 }}>
        About
      </Text>

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

      <AboutCards />
    </Container>
  )
}

const Container = styled.div`
  margin: auto;
`

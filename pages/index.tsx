import * as React from 'react'
import type { NextPage } from 'next'
import styled from 'styled-components'

import { Hero } from '../components/home/hero'
import { Projects } from '../components/home/projects'
import { Writing } from '../components/home/writing'

const Home: NextPage = () => {
  return (
    <>
      <link rel="icon" href="/favicon.ico" />

      <Hero />
      <Container>
        <Projects />
        <Writing />
      </Container>
    </>
  )
}

export default Home

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
  padding-top: 120px;
`

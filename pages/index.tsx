import * as React from 'react'
import type { NextPage } from 'next'
import styled from 'styled-components'

import { Hero } from '../components/home/hero'
import { Layout } from '../components/layout'
import { Projects } from '../components/home/projects'
import { Writing } from '../components/home/writing'

const Home: NextPage = () => {
  return (
    <>
      <link rel="icon" href="/favicon.ico" />

      <Layout>
        <Hero />
        <Container>
          <Projects />
          <Writing />
        </Container>
      </Layout>
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

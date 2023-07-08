import * as React from 'react'
import { type NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { Summary } from '../components/about/summary'
import { Layout } from '../components/layout'
import { AboutCards } from '../components/about/about-cards'

const About: NextPage = () => {
  return (
    <>
      <NextSeo title="About | Ondřej Pešička" />
      <link rel="icon" href="/favicon.ico" />

      <Layout>
        <Summary />
        <AboutCards />
      </Layout>
    </>
  )
}

export default About

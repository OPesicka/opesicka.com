import * as React from 'react'
import styled, { css } from 'styled-components'
import { breakpoint } from '../theme/theme'
import { Footer } from './footer'
import { ModeSwitch } from './mode-switch'

interface Props {
  children: React.ReactNode
}

export const Layout = (props: Props) => {
  return (
    <>
      <SLayout>
        <ModeSwitch />
        <Container>{props.children}</Container>
        <Footer />
      </SLayout>
    </>
  )
}

const Container = styled.main`
  margin-bottom: 40px;
`

const SLayout = styled.div`
  max-width: 640px;
  padding: 0 64px;
  padding-top: 64px;
  margin: auto;
  ${breakpoint(
    'mobile',
    'down',
    css`
      padding: 0 32px;
    `
  )}
`

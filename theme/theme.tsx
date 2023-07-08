import * as React from 'react'
import { type ReactNode } from 'react'
import styled, { css, type ThemedCssFunction } from 'styled-components'
import { type RecursiveKeyOf } from '../types/RecursiveKeyOf'
import { palette, semanticPalette } from './palette'
import {
  margin,
  type MarginOptions,
  padding,
  type PaddingOptions
} from './utils'

interface Props {
  variant: FontVariant
  component?: keyof JSX.IntrinsicElements
  children: ReactNode
  color?: SemanticColorKey
  href?: string
  m?: MarginOptions
  p?: PaddingOptions
}

export const Text = (props: Props) => {
  return (
    <SText as={props.component} {...props}>
      {props.children}
    </SText>
  )
}

type FontVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'text'
  | 'textStrong'
  | 'footnote'
  | 'footnoteStrong'
  | 'eyebrow'

const fontDefinition: Record<
  FontVariant,
  {
    fontSize: number
    lineHeight: number
    weight: number
    mobileFontSize: number
    mobileLineHeight: number
  }
> = {
  h1: {
    fontSize: 40,
    lineHeight: 48,
    weight: 700,
    mobileFontSize: 32,
    mobileLineHeight: 40
  },
  h2: {
    fontSize: 28,
    lineHeight: 32,
    weight: 700,
    mobileFontSize: 30,
    mobileLineHeight: 36
  },
  h3: {
    fontSize: 24,
    lineHeight: 36,
    weight: 600,
    mobileFontSize: 24,
    mobileLineHeight: 36
  },
  h4: {
    fontSize: 16,
    lineHeight: 24,
    weight: 600,
    mobileFontSize: 18,
    mobileLineHeight: 26
  },
  text: {
    fontSize: 16,
    lineHeight: 28,
    weight: 400,
    mobileFontSize: 16,
    mobileLineHeight: 28
  },
  textStrong: {
    fontSize: 16,
    lineHeight: 28,
    weight: 600,
    mobileFontSize: 16,
    mobileLineHeight: 28
  },
  footnote: {
    fontSize: 14,
    lineHeight: 22,
    weight: 400,
    mobileFontSize: 14,
    mobileLineHeight: 22
  },
  footnoteStrong: {
    fontSize: 16,
    lineHeight: 24,
    weight: 700,
    mobileFontSize: 14,
    mobileLineHeight: 22
  },
  eyebrow: {
    fontSize: 14,
    lineHeight: 22,
    weight: 700,
    mobileFontSize: 14,
    mobileLineHeight: 22
  }
}

export const text = (variant: FontVariant) => {
  const definition = fontDefinition[variant]
  return css`
    font-size: ${definition.fontSize}px;
    line-height: ${definition.lineHeight}px;
    font-weight: ${definition.weight};
    font-family: 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      'sans-serif';
    ${breakpoint(
      'mobile',
      'down',
      css`
        font-size: ${definition.mobileFontSize}px;
        line-height: ${definition.mobileLineHeight}px;
      `
    )}
  `
}

const SText = styled.p.withConfig<Props>({
  shouldForwardProp: (propName) =>
    !['color', 'variant', 'm', 'p'].includes(propName)
})`
  margin: 0;
  ${(props) => margin(props.m)};
  ${(props) => padding(props.p)};
  color: ${(props) => semanticColor(props.color ?? 'neutral.text')};
  ${(props) => {
    return text(props.variant)
  }}
`

type ColorKey = RecursiveKeyOf<typeof palette>

export const color = (key: ColorKey) => {
  return key.split('.').reduce((acc, key) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return acc[key]
  }, palette)
}

export type SemanticColorKey = RecursiveKeyOf<typeof semanticPalette>

export const semanticColor = (key: SemanticColorKey) => {
  return key.split('.').reduce((acc, key) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return acc[key]
  }, semanticPalette)
}

export const breakpoint = (
  breakpoint: keyof Breakpoints,
  when: 'up' | 'down',
  styles: ReturnType<ThemedCssFunction<Props>>
) => {
  const condition = `${when === 'down' ? 'max-width' : 'min-width'}: ${
    breakpoints[breakpoint] - (when === 'down' ? 1 : 0)
  }px`
  return css`
    @media (${condition}) {
      ${styles}
    }
  `
}

interface Breakpoints {
  mobile: number
  tablet: number
  desktop: number
  xl: number
}

const breakpoints: Breakpoints = {
  mobile: 768,
  tablet: 990,
  desktop: 1440,
  xl: 2048
}

type Shadows = 'l1' | 'l2'

export const shadow = (variant: Shadows) => {
  return css`
    box-shadow: ${shadowDefinition[variant]};
  `
}

const shadowDefinition: Record<Shadows, string> = {
  l1: 'var(--shadow-l1)',
  l2: 'var(--shadow-l2)'
}

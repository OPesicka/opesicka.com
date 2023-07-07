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
  as?: string | React.ComponentType<unknown>
  children: ReactNode
  color?: SemanticColorKey
  href?: string
  m?: MarginOptions
  p?: PaddingOptions
}

export const Text: React.FC<Props> = (props) => {
  return <SText {...props}>{props.children}</SText>
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
    mobileFontSize: 18,
    mobileLineHeight: 32
  },
  textStrong: {
    fontSize: 16,
    lineHeight: 28,
    weight: 600,
    mobileFontSize: 18,
    mobileLineHeight: 32
  },
  footnote: {
    fontSize: 14,
    lineHeight: 22,
    weight: 400,
    mobileFontSize: 16,
    mobileLineHeight: 24
  },
  footnoteStrong: {
    fontSize: 16,
    lineHeight: 24,
    weight: 700,
    mobileFontSize: 16,
    mobileLineHeight: 24
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

type Shadows = 'l1' | 'l2' | 'l3'

// const shadowDefinition: Record<Shadows, string> = {
//   l1: "0.5px 1px 1px #000000;",
//   l2: "1px 2px 2px rgba(0, 0, 0, 0.4), 2px 4px 4px rgba(0, 0, 0, 0.4), 3px 6px 6px rgba(0, 0, 0, 0.4);",
//   l3: "1px 2px 2px rgba(0, 0, 0, 0.3), 2px 4px 4px rgba(0, 0, 0, 0.3), 4px 8px 8px rgba(0, 0, 0, 0.3), 8px 16px 16px rgba(0, 0, 0, 0.3), 16px 32px 32px rgba(0, 0, 0, 0.3);",
// };

export const shadow = (variant: Shadows) => {
  return css`
    box-shadow: ${shadowDefinition[variant]};
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

type SemanticColorKey = RecursiveKeyOf<typeof semanticPalette>

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

const shadowDefinition: Record<Shadows, string> = {
  l1: '0.3px 0.5px 0.5px hsla(253deg, 14%, 1, 0.83), 0.4px 0.8px 0.8px -2px hsla(253deg, 14%, 1%, 0.63), 1.3px 2.5px 2.5px -4px hsla(253deg, 14%, 1%, 0.42);',
  l2: '0.3px 0.5px 0.5px hsla(253deg, 14%, 1%, 0.7), 0.5px 1px 1px -1px hsla(253deg, 14%, 1%, 0.6), 1.2px 2.4px 2.4px -2px hsla(253deg, 14%, 1%, 0.49), 3px 5.9px 6px -3px hsla(253deg, 14%, 1%, 0.39), 6.3px 12.5px 12.6px -4px hsla(253deg, 14%, 1%, 0.28);',
  l3: '0.3px 0.5px 0.5px hsla(253deg, 14%, 1%, 0.65), 0.9px 1.7px 1.7px -0.4px hsla(253deg, 14%, 1%, 0.6), 1.6px 3.2px 3.2px -0.9px hsla(253deg, 14%, 1%, 0.55), 2.9px 5.7px 5.8px -1.3px hsla(253deg, 14%, 1%, 0.5), 4.9px 9.8px 9.9px -1.8px hsla(253deg, 14%, 1%, 0.46), 8px 16px 16.1px -2.2px hsla(253deg, 14%, 1%, 0.41), 12.5px 25.1px 25.2px -2.7px hsla(253deg, 14%, 1%, 0.36), 18.7px 37.5px 37.7px -3.1px hsla(253deg, 14%, 1%, 0.31), 27px 53.9px 54.3px -3.6px hsla(253deg, 14%, 1%, 0.26), 37.5px 75px 75.5px -4px hsla(253deg, 14%, 1%, 0.21);'
}

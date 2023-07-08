import * as React from 'react'
import { AtmosIllustration } from '../public/illustrations/atmos'
import { FigStatsIllustration } from '../public/illustrations/figstats'
import { RbndIllustration } from '../public/illustrations/rbnd'

export interface WritingProps {
  title: string
  description: string
  link: string
}

export const writingContent: WritingProps[] = [
  {
    title: 'LCH is the best',
    description: 'Exploring the benefits of LCH for UI design.',
    link: 'https://atmos.style/blog/lch-color-space'
  },
  {
    title: 'Dark mode practices',
    description: 'How to go about designing the famed dark mode.',
    link: 'https://atmos.style/blog/dark-mode-ui-best-practices'
  },
  {
    title: 'LCH vs OKLCH',
    description: 'The differences between LCH and OKLCH.',
    link: 'https://atmos.style/blog/lch-vs-oklch'
  }
]

export interface ProjectProps {
  title: string
  description: string
  illustration: React.ReactNode
  link: string
}

export const projectsContent: ProjectProps[] = [
  {
    title: 'Atmos',
    description: 'Everything you need to create color palettes.',
    illustration: <AtmosIllustration />,
    link: 'https://atmos.style'
  },
  {
    title: 'Fig-stats',
    description: 'Figma plugin and widget analytics.',
    illustration: <FigStatsIllustration />,
    link: 'https://fig-stats.com/'
  },
  {
    title: 'RBND sutdio',
    description: 'Software studio making stuff on the internet.',
    illustration: <RbndIllustration />,
    link: 'https://rbnd.studio/'
  }
]

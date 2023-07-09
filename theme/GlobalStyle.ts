import { createGlobalStyle } from 'styled-components'
import { color, text } from './theme'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('https://rsms.me/inter/font-files/Inter-Regular.woff2?v=3.19')
        format('woff2'),
      url('https://rsms.me/inter/font-files/Inter-Regular.woff?v=3.19')
        format('woff');
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('https://rsms.me/inter/font-files/Inter-Bold.woff2?v=3.19')
        format('woff2'),
      url('https://rsms.me/inter/font-files/Inter-Bold.woff?v=3.19')
        format('woff');
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url('https://rsms.me/inter/font-files/Inter-ExtraBold.woff2?v=3.19')
        format('woff2'),
      url('https://rsms.me/inter/font-files/Inter-ExtraBold.woff?v=3.19')
        format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url('https://rsms.me/inter/font-files/Inter-Black.woff2?v=3.19')
        format('woff2'),
      url('https://rsms.me/inter/font-files/Inter-Black.woff?v=3.19')
        format('woff');
  }

  .light-mode {
    background-color: ${color('neutral.50')};
    color-scheme: 'light';

    body {
      --color-neutral-text: ${color('neutral.900')};
      --color-neutral-text-subtle: ${color('neutral.700')};
      --color-neutral-background: ${color('neutral.0')};
      --color-neutral-background-subtle: ${color('neutral.50')};
      --color-neutral-border: ${color('neutral.150')};
      --color-neutral-hover: ${color('neutral.0')};
      --color-neutral-illustration: ${color('neutral.600')};
      --color-neutral-illustration-subtle: ${color('neutral.500')};
      --color-primary-text: ${color('primary.600')};

      --shadow-color: 0deg 0% 59%;

      --shadow-l1: 0.3px 0.5px 0.4px hsl(var(--shadow-color) / 0.48),
        0.4px 0.8px 0.7px -1.7px hsl(var(--shadow-color) / 0.36),
        1.4px 2.8px 2.3px -3.3px hsl(var(--shadow-color) / 0.24),
        4.2px 8.4px 7px -5px hsl(var(--shadow-color) / 0.12);

      --shadow-l2: 0.3px 0.5px 0.4px hsl(var(--shadow-color) / 0.72),
        0.4px 0.9px 0.7px -1.7px hsl(var(--shadow-color) / 0.54),
        1.7px 3.3px 2.8px -3.3px hsl(var(--shadow-color) / 0.36),
        5px 10px 8.4px -5px hsl(var(--shadow-color) / 0.18);

      :before {
        opacity: 0.05;
      }
    }
  }
  .dark-mode {
    background-color: ${color('neutral.900')};
    color-scheme: 'dark';

    body {
      --color-neutral-text: ${color('neutral.100')};
      --color-neutral-text-subtle: ${color('neutral.200')};
      --color-neutral-background: ${color('neutral.900')};
      --color-neutral-background-subtle: ${color('neutral.800')};
      --color-neutral-border: ${color('neutral.700')};
      --color-neutral-hover: ${color('neutral.750')};
      --color-neutral-illustration: ${color('neutral.0')};
      --color-neutral-illustration-subtle: ${color('neutral.50')};
      --color-primary-text: ${color('primary.400')};

      --shadow-color: 0deg 0% 4%;

      --shadow-l1: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.36),
        0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.36),
        2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.36),
        5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.36);

      --shadow-l2: 0.3px 0.5px 0.8px hsl(var(--shadow-color) / 0.18),
        1.2px 2.3px 3.5px -0.3px hsl(var(--shadow-color) / 0.32),
        2.6px 5.1px 7.7px -0.7px hsl(var(--shadow-color) / 0.45),
        5.6px 11.3px 17px -1px hsl(var(--shadow-color) / 0.59);

      :before {
        opacity: 0.25;
      }
    }
  }

  body {
    ${text('text')};
    overflow-x: hidden;
    margin: 0;
    :before {
      background-image: url(/noise.png);
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    h1 {
      ${text('h1')};
    }

    h2 {
      ${text('h2')};
    }

    h3 {
      ${text('h3')};
    }
  }
`

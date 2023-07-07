import * as React from 'react'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { Fragment } from 'react'
import { GlobalStyle } from '../styles/GlobalStyle'
import { DarkModeProvider } from '@rbnd/react-dark-mode'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <DarkModeProvider>
      <Fragment>
        <DefaultSeo
          title="Ondřej Pešička"
          description="Ondřej Pešička is a professional product designer based in Prague, Czechia"
          openGraph={{
            type: 'website',
            title: 'Ondřej Pešička',
            url: 'https://opesicka.com/',
            description:
              'Ondřej Pešička is a professional product designer based in Prague, Czechia',
            images: [{ url: 'https://opesicka.com/og.png' }]
          }}
          twitter={{ cardType: 'summary_large_image', handle: '@opesicka' }}
          additionalMetaTags={[
            { name: 'author', content: 'Ondřej Pešička' },
            {
              name: 'keywords',
              content:
                'product desgin, ux, ui, design, digital design, startups'
            }
          ]}
        />

        <Script
          strategy="afterInteractive"
          data-domain="opesicka.com"
          src="https://plausible.io/js/plausible.js"
        />
        <Script strategy="beforeInteractive" src="/noflash.min.js" />

        <GlobalStyle />
        <Component {...pageProps} />
      </Fragment>
    </DarkModeProvider>
  )
}

export default MyApp

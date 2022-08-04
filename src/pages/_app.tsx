import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import NextNProgress from 'nextjs-progressbar'

import { dark, light } from 'styles/theme'
import GlobalStyle from 'styles/global.styles'

import usePersistedState from 'hook/usePersistedState'
import { LoadScreen } from 'components/LoadScreen'

const App = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.addEventListener('load', () => {
      setLoading(false)
    })
  })

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
      </Head>
      <NextSeo
        title="Henrique Teixeira Dev"
        description="Desenvoldevor Front-End ReactJS"
        canonical="https://henriqueteixeira.dev.br/"
        openGraph={{
          url: 'https://henriqueteixeira.dev.br/',
          title: 'Henrique Teixeira Dev',
          description: 'Desenvoldevor Front-End ReactJS',
          images: [
            {
              url: '/img/cover.png'
            }
          ],
          site_name: 'Título',
          locale: 'pt_BR'
        }}
        twitter={{
          handle: '@henriqueteixeira.dev',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <GlobalStyle />
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      {!loading ? <Component {...pageProps} /> : <LoadScreen />}
    </ThemeProvider>
  )
}

export default App

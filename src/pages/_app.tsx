import React, { useState } from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import { dark, light } from 'styles/theme'
import GlobalStyle from 'styles/global.styles'
import TopHeader from 'components/TopHeader'

import usePersistedState from 'hook/usePersistedState'

const App = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark)

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
      <TopHeader toggleTheme={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App

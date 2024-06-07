import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'


export default {
  head: () => {
    return (
      <>
        <meta property="og:url" content='https://kuts.club' />
        <meta property="og:title" content={'Kuts' || 'Kuts.club'} />
        <meta
          property="og:description"
          content={'Kuts' || 'The best URL Shortener out there.'}
        />
      </>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Kuts.club'
    }
  },
  logo: <span>Kuts.club</span>,
  project: {
    link: 'https://github.com/Naainz/Kuts',
  },
  docsRepositoryBase: 'https://github.com/Naainz/Kuts/tree/main/',
  footer: {
    text: '2024 © Kuts.club  |  Built with Nextra Documentation',
  },
}

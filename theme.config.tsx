import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'


export default {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Kuts.club" />
      <meta property="og:description" content="The best URL Shortener out there." />
    </>
  )
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

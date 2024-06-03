import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'


export default {
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
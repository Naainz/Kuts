import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/Naainz/Kuts',
  },
  docsRepositoryBase: 'https://github.com/Naainz/Kuts',
  footer: {
    text: '2024 © Kuts.club  |  Built with Nextra Documentation',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Kuts.club'
    }
  }
}
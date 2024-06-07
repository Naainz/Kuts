import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'


export default {
  head: () => {
    const { frontMatter } = useConfig()
    const url =
      'https://kuts.club' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Kuts.club'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'The best URL Shortener out there.'}
        />
      </>
    )
  }
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

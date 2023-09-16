import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Uberrimae Fidei</span>,
  project: {
    link: 'https://github.com/indemnifi',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/indemnifi',
  footer: {
    text: 'Uberrimae Fidei Insurance Documents',
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://localhost:3001' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'inDemniFi'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'The next site builder'}
        />
      </>
    )
  },
}

export default config

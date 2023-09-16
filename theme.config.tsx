import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
    head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="UF" />
      <meta property="og:description" content="The next site builder" />
    </>
  )
  logo: <span>Uberrimae Fidei</span>,
  project: {
    link: 'https://github.com/indemnifi',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Uberrimae Fidei Documents',
  },
}

export default config

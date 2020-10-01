import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Child } from '@khai-personal-website/utility-types'

export interface LicenseFooterAttr {
  readonly year: Child
  readonly name: Child
  readonly href: string
  readonly holder: Child
}

const useStyles = makeStyles(() => ({
  footer: {
    display: 'block',
    textAlign: 'center',
    fontSize: '0.8rem',
  },
}))

export function LicenseFooter(attr: LicenseFooterAttr) {
  const { footer } = useStyles()
  return <footer className={footer}>
    <p>Released under <a href={attr.href}>{attr.name}</a>.</p>
    <p>
      Copyright © {attr.year}
      {' '}
      {attr.holder}
    </p>
  </footer>
}

export default LicenseFooter

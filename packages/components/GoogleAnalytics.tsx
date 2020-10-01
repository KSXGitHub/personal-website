import React from 'react'
import { initialize, pageview } from 'react-ga'

export interface GoogleAnalyticsAttr {
  readonly trackerId: string
}

export function GoogleAnalytics(attr: GoogleAnalyticsAttr) {
  React.useEffect(() => {
    if (typeof window === 'undefined') return
    initialize(attr.trackerId)
    pageview(window.location.href)
  })

  return <></>
}

export default GoogleAnalytics

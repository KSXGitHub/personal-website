import React from 'react'

export interface GoogleAnalyticsAttr {
  readonly trackerId: string
}

export function GoogleAnalytics(attr: GoogleAnalyticsAttr) {
  React.useEffect(() => {
    if (typeof document === 'undefined') return

    type ScriptInitializer = (script: HTMLScriptElement) => void

    const scriptInitializers: readonly ScriptInitializer[] = [
      script => {
        script.async = true
        script.src = `https://www.googletagmanager.com/gtag/js?id=${attr.trackerId}`
      },

      script => {
        script.text = `
          window.dataLayer = window.dataLayer || [];
          function gTag(){dataLayer.push(arguments);}
          gTag('js', new Date());
          gTag('config', ${JSON.stringify(attr.trackerId)});
        `
      },
    ]

    for (const initScript of scriptInitializers) {
      const script = document.createElement('script')
      initScript(script)
      script.addEventListener('load', () => {
        document.body.removeChild(script)
      })
      document.body.appendChild(script)
    }
  })

  return <></>
}

export default GoogleAnalytics

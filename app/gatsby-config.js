exports.plugins = [
  {
    resolve: 'gatsby-plugin-typescript',
    isTSX: true,
    allExtensions: true,
  },

  'gatsby-plugin-react-helmet',
  'gatsby-plugin-material-ui',

  {
    resolve: 'gatsby-plugin-google-tagmanager',
    options: {
      id: 'UA-179378718-1',
    },
  },

  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-179378718-1',
      respectDNT: true,
    },
  },
]

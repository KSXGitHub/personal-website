import React from 'react'
import { Helmet } from 'react-helmet'

const title = "Khải's Profile"

const Home = () =>
  <>
    <Helmet>
      <meta charSet='UTF-8' />
      <title>{title}</title>
    </Helmet>
    <main>
      <h1>{title}</h1>
    </main>
  </>

export default Home

import React from 'react'
import { Helmet } from 'react-helmet'
import Main from '@khai-personal-website/components/Main'

const title = "Khải's Profile"

const Home = () =>
  <>
    <Helmet>
      <meta charSet='UTF-8' />
      <title>{title}</title>
    </Helmet>
    <Main title={title} github='https://github.com/KSXGitHub/' />
  </>

export default Home

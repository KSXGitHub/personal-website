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
    <Main
      title={title}
      repository='https://github.com/KSXGitHub/personal-website.git'
      avatarAlt='Khải'
      avatarSrc='https://avatars3.githubusercontent.com/u/11488886?s=460&u=76f47499f89ba390e2322a5ebef112fb9e5ad9ef&v=4'
      fullName='Hoàng Văn Khải'
      bioDescription='In the date of my birth, the last spark of light extinguished, darkness swallowed everything, it was... evening.'
    />
  </>

export default Home

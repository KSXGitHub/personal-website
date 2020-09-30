import React from 'react'
import { Helmet } from 'react-helmet'
import Main from '@khai-personal-website/components/Main'
import Rust from '@khai-personal-website/icons/Rust'
import TypeScript from '@khai-personal-website/icons/TypeScript'
import JavaScript from '@khai-personal-website/icons/JavaScript'
import Shell from '@khai-personal-website/icons/Shell'

const title = "Khải's Profile"

const Home = () =>
  <>
    <Helmet>
      <meta charSet='UTF-8' />
      <title>{title}</title>
      <html lang='en' />
      <meta
        name='description'
        content='This is a profile page made by me for myself. It contains my personal information, profession, hobbies, etc.'
      />
    </Helmet>
    <Main
      title={title}
      repository='https://github.com/KSXGitHub/personal-website.git'
      avatarAlt='Khải'
      avatarSrc='https://avatars3.githubusercontent.com/u/11488886?s=460&u=76f47499f89ba390e2322a5ebef112fb9e5ad9ef&v=4'
      fullName={<span lang='vi'>Hoàng Văn Khải</span>}
      bioDescription={<span lang='en'>
        In the date of my birth, the last spark of light extinguished, darkness swallowed everything, it was... evening.
      </span>}
      githubUserHandle='KSXGitHub'
      twitterUserHandle='hvksmr1996'
      emailAddress='hvksmr1996@gmail.com'
      programmingLanguages={[
        { Icon: Rust, langName: 'Rust' },
        { Icon: TypeScript, langName: 'TypeScript' },
        { Icon: JavaScript, langName: 'JavaScript' },
        { Icon: Shell, langName: 'Shell' },
      ]}
      birthDay='1996.07.05'
      birthPlace='Earth, Solar System'
      expertise='Programming'
    />
  </>

export default Home

import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'
import { Child } from '@khai-personal-website/utility-types'
import Profile from './Profile'
import { ProgrammingLanguageListData } from './ProgrammingLanguageList'

export interface MainAttr {
  readonly title: string
  readonly repository: string
  readonly avatarSrc: string
  readonly avatarAlt: string
  readonly fullName: Child
  readonly bioDescription: Child
  readonly githubUserHandle: string
  readonly twitterUserHandle: string
  readonly emailAddress: string
  readonly programmingLanguages: readonly ProgrammingLanguageListData[]
  readonly birthDay: string
  readonly birthPlace: string
  readonly expertise: string
  readonly additionalPersonalInformation?: Record<string, Child>
  readonly patreonUserHandle: string
}

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      marginRight: theme.spacing(2),
    },
  })
)

export function Main(attr: MainAttr) {
  const classes = useStyles()

  return <main className={classes.root}>
    <AppBar position='static'>
      <Toolbar>
        <Typography className={classes.title} variant='h3'>{attr.title}</Typography>
        <IconButton
          color='inherit'
          target='_blank'
          title='Source Code'
          href={attr.repository}
          rel='noopener'
        >
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    <Profile
      avatarAlt={attr.avatarAlt}
      avatarSrc={attr.avatarSrc}
      fullName={attr.fullName}
      bioDescription={attr.bioDescription}
      githubUserHandle={attr.githubUserHandle}
      twitterUserHandle={attr.twitterUserHandle}
      emailAddress={attr.emailAddress}
      programmingLanguages={attr.programmingLanguages}
      birthDay={attr.birthDay}
      birthPlace={attr.birthPlace}
      expertise={attr.expertise}
      additionalPersonalInformation={attr.additionalPersonalInformation}
      patreonUserHandle={attr.patreonUserHandle}
    />
  </main>
}

export default Main

import { Child } from '@khai-personal-website/utility-types'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import React from 'react'
import LicenseFooter from './LicenseFooter'
import MainAppBar from './MainAppBar'
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
  readonly facebookUserID: string
  readonly emailAddress: string
  readonly programmingLanguages: readonly ProgrammingLanguageListData[]
  readonly birthDay: string
  readonly birthPlace: string
  readonly expertise: string
  readonly additionalPersonalInformation?: Record<string, Child>
  readonly patreonUserHandle: string
  readonly licenseYear: Child
  readonly licenseName: Child
  readonly licenseRef: string
  readonly licenseHolderName: Child
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
    footer: {
      display: 'block',
      textAlign: 'center',
      fontSize: '0.8rem',
    },
  })
)

export function Main(attr: MainAttr) {
  const classes = useStyles()

  return <main className={classes.root}>
    <MainAppBar
      title={attr.title}
      repository={attr.repository}
    />
    <Profile
      avatarAlt={attr.avatarAlt}
      avatarSrc={attr.avatarSrc}
      fullName={attr.fullName}
      bioDescription={attr.bioDescription}
      githubUserHandle={attr.githubUserHandle}
      twitterUserHandle={attr.twitterUserHandle}
      facebookUserID={attr.facebookUserID}
      emailAddress={attr.emailAddress}
      programmingLanguages={attr.programmingLanguages}
      birthDay={attr.birthDay}
      birthPlace={attr.birthPlace}
      expertise={attr.expertise}
      additionalPersonalInformation={attr.additionalPersonalInformation}
      patreonUserHandle={attr.patreonUserHandle}
    />
    <LicenseFooter
      year={attr.licenseYear}
      name={attr.licenseName}
      href={attr.licenseRef}
      holder={attr.licenseName}
    />
  </main>
}

export default Main

import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Link from '@material-ui/core/Link'
import GitHub from '@material-ui/icons/GitHub'
import Twitter from '@material-ui/icons/Twitter'
import Facebook from '@material-ui/icons/Facebook'
import Mail from '@material-ui/icons/Mail'
import { Child } from '@khai-personal-website/utility-types'
import { ProgrammingLanguageList, ProgrammingLanguageListData } from './ProgrammingLanguageList'
import VerticalHeadingTable from './VerticalHeadingTable'

export interface ProfileAttr {
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
}

const useStyles = makeStyles(theme =>
  createStyles({
    personalInformation: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    avatar: {
      width: theme.spacing(25),
      height: theme.spacing(25),
    },
    listItem: {
      display: 'flex',
      flexGrow: theme.spacing(1),
    },
  })
)

export function Profile(attr: ProfileAttr) {
  const classes = useStyles()

  const ExContactLink = ({
    Icon,
    ariaLabel,
    href,
  }: {
    readonly Icon: React.FunctionComponent
    readonly ariaLabel: string
    readonly href: string
  }) =>
    <IconButton
      color='secondary'
      aria-label={ariaLabel}
      href={href}
      target='_blank'
      rel='noopener'
    >
      <Icon />
    </IconButton>

  const Expandable = ({
    title,
    idPrefix,
    children,
  }: {
    readonly title: string
    readonly idPrefix: string
    readonly children?: Child
  }) =>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={`${idPrefix}-content`}
        id={`${idPrefix}-content`}
      >
        <Typography
          variant='h5'
          style={{ cursor: 'pointer' }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>

  return <>
    <Card>
      <CardContent>
        <Grid className={classes.personalInformation} direction='column' container>
          <Grid direction='row' container alignItems='flex-end'>
            <Avatar
              className={classes.avatar}
              alt={attr.avatarAlt}
              src={attr.avatarSrc}
            />
            <Grid>
              <Typography variant='h4'>{attr.fullName}</Typography>
              <ButtonGroup>
                <ExContactLink
                  Icon={GitHub}
                  ariaLabel='github profile'
                  href={`https://github.com/${attr.githubUserHandle}`}
                />
                <ExContactLink
                  Icon={Twitter}
                  ariaLabel='twitter profile'
                  href={`https://twitter.com/${attr.twitterUserHandle}`}
                />
                <ExContactLink
                  Icon={Facebook}
                  ariaLabel='facebook page'
                  href={`https://facebook.com/${attr.facebookUserID}`}
                />
                <ExContactLink
                  Icon={Mail}
                  ariaLabel='e-mail'
                  href={`mailto:hvksmr1996@gmail.com`}
                />
              </ButtonGroup>
            </Grid>
          </Grid>
          <Typography>{attr.bioDescription}</Typography>
        </Grid>
      </CardContent>
    </Card>
    <>
      <Expandable title='Personal information' idPrefix='personal-information'>
        <VerticalHeadingTable
          data={{
            'Date of Birth': attr.birthDay,
            'Place of Birth': attr.birthPlace,
            'Expertise': attr.expertise,
            ...attr.additionalPersonalInformation,
          }}
        />
      </Expandable>
      <Expandable title='Most used programming languages' idPrefix='programming-languages'>
        <ProgrammingLanguageList
          githubUserHandle={attr.githubUserHandle}
          data={attr.programmingLanguages}
        />
      </Expandable>
      <Expandable title='GitHub profile statistics' idPrefix='github-profile-statistics'>
        <img
          alt='GitHub profile statistics'
          src={`https://github-readme-stats.vercel.app/api?username=${attr.githubUserHandle}&show_icons=true`}
        />
      </Expandable>
      <Expandable title='Donate me!' idPrefix='donation'>
        <Link href={`https://patreon.com/${attr.patreonUserHandle}`}>
          <img
            alt='Patreon'
            src='https://upload.wikimedia.org/wikipedia/commons/8/82/Patreon_logo_with_wordmark.svg'
            width={256}
            height={128}
          />
        </Link>
      </Expandable>
    </>
  </>
}

export default Profile

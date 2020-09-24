import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import IconButton from '@material-ui/core/IconButton'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMore from '@material-ui/icons/ExpandMore'
import GitHub from '@material-ui/icons/GitHub'
import Twitter from '@material-ui/icons/Twitter'
import Mail from '@material-ui/icons/Mail'
import { Child } from '@khai-personal-website/utility-types'
import { ProgrammingLanguageList, ProgrammingLanguageListData } from './ProgrammingLanguageList'

export interface ProfileAttr {
  readonly avatarSrc: string
  readonly avatarAlt: string
  readonly fullName: Child
  readonly bioDescription: Child
  readonly githubUserHandle: string
  readonly twitterUserHandle: string
  readonly emailAddress: string
  readonly programmingLanguages: readonly ProgrammingLanguageListData[]
}

const useStyles = makeStyles(theme =>
  createStyles({
    personalInformation: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: theme.spacing(2),
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
        <Typography variant='h5'>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>

  return <>
    <Container className={classes.personalInformation}>
      <Avatar
        className={classes.avatar}
        alt={attr.avatarAlt}
        src={attr.avatarSrc}
      />
      <Card>
        <CardContent>
          <Typography variant='h4'>{attr.fullName}</Typography>
          <Typography>{attr.bioDescription}</Typography>
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
              Icon={Mail}
              ariaLabel='e-mail'
              href={`mailto:hvksmr1996@gmail.com`}
            />
          </ButtonGroup>
        </CardContent>
      </Card>
    </Container>
    <Container>
      <Expandable title='Programming Languages' idPrefix='programming-languages'>
        <ProgrammingLanguageList githubUserHandle={attr.githubUserHandle}>
          {attr.programmingLanguages}
        </ProgrammingLanguageList>
      </Expandable>
    </Container>
  </>
}

export default Profile

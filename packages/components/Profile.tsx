import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
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

  return <Grid direction='column'>
    <Card>
      <CardContent>
        <Grid className={classes.personalInformation} direction='column' container>
          <Grid direction='row' container alignItems='flex-end'>
            <Avatar
              className={classes.avatar}
              alt={attr.avatarAlt}
              src={attr.avatarSrc}
            />
            <Grid direction='column'>
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
    <Container>
      <Grid
        direction='column'
        justify='center'
        alignItems='center'
        spacing={2}
      >
        <Expandable title='Most used programming languages' idPrefix='programming-languages'>
          <ProgrammingLanguageList
            githubUserHandle={attr.githubUserHandle}
            data={attr.programmingLanguages}
          />
        </Expandable>
      </Grid>
    </Container>
  </Grid>
}

export default Profile

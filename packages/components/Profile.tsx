import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import IconButton from '@material-ui/core/IconButton'
import GitHub from '@material-ui/icons/GitHub'
import Twitter from '@material-ui/icons/Twitter'
import Mail from '@material-ui/icons/Mail'

export interface ProfileAttr {
  readonly avatarSrc: string
  readonly avatarAlt: string
  readonly fullName: string
  readonly bioDescription: string
  readonly githubUserHandle: string
  readonly twitterUserHandle: string
  readonly emailAddress: string
}

const useStyles = makeStyles(theme =>
  createStyles({
    personalInformation: {
      display: 'flex',
      marginTop: theme.spacing(2),
    },
    avatar: {
      width: theme.spacing(25),
      height: theme.spacing(25),
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
    readonly Icon: (props: {}) => JSX.Element
    readonly ariaLabel: string
    readonly href: string
  }) =>
    <IconButton
      color='secondary'
      aria-label={ariaLabel}
      href={href}
      target='_blank'
    >
      <Icon />
    </IconButton>

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
  </>
}

export default Profile

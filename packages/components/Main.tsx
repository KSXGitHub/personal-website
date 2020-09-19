import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import GitHubIcon from '@material-ui/icons/GitHub'
import { Profile } from './Profile'

export interface MainAttr {
  readonly title: string
  readonly repository: string
  readonly avatarSrc: string
  readonly avatarAlt: string
  readonly fullName: string
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
        <Button
          color='inherit'
          target='_blank'
          title='Source Code'
          href={attr.repository}
        >
          <GitHubIcon />
        </Button>
      </Toolbar>
    </AppBar>
    <Container>
      <Profile
        avatarAlt={attr.avatarAlt}
        avatarSrc={attr.avatarSrc}
        fullName={attr.fullName}
      />
    </Container>
  </main>
}

export default Main

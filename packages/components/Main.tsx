import React from 'react'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import GitHubIcon from '@material-ui/icons/GitHub'

export interface MainAttr {
  readonly title: string
}

export const Main = (attr: MainAttr) =>
  <main>
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h3'>{attr.title}</Typography>
        <GitHubIcon />
      </Toolbar>
    </AppBar>
    <Container>
    </Container>
  </main>

export default Main

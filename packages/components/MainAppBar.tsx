import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'
import PrintIcon from '@material-ui/icons/Print'
import { Child } from '@khai-personal-website/utility-types'

export interface MainAppBarAttr {
  readonly title: Child
  readonly repository: string
}

const useStyles = makeStyles(theme =>
  createStyles({
    title: {
      flexGrow: 1,
      marginRight: theme.spacing(2),
    },
  })
)

export function MainAppBar(attr: MainAppBarAttr) {
  const classes = useStyles()
  return <AppBar position='static'>
    <Toolbar>
      <Typography className={classes.title} variant='h3'>{attr.title}</Typography>
      <IconButton
        color='inherit'
        title='Print'
        onClick={() => window.print()}
      >
        <PrintIcon />
      </IconButton>
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
}

export default MainAppBar

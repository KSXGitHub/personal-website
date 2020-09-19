import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

export interface ProfileAttr {
  readonly avatarSrc: string
  readonly avatarAlt: string
}

const useStyles = makeStyles(theme =>
  createStyles({
    avatar: {
      marginTop: theme.spacing(2),
      width: theme.spacing(25),
      height: theme.spacing(25),
    },
  })
)

export function Profile(attr: ProfileAttr) {
  const classes = useStyles()

  return <>
    <Avatar
      className={classes.avatar}
      alt={attr.avatarAlt}
      src={attr.avatarSrc}
    />
  </>
}

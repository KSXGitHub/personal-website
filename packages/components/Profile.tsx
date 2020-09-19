import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

export interface ProfileAttr {
  readonly avatarSrc: string
  readonly avatarAlt: string
  readonly fullName: string
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
    <Card>
      <CardContent>
        <Typography variant='h4'>{attr.fullName}</Typography>
      </CardContent>
    </Card>
  </>
}

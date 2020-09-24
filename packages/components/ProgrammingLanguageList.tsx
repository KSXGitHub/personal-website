import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Link from '@material-ui/core/Link'
import Icon from '@material-ui/core/Icon'

export interface ProgrammingLanguageListData {
  readonly Icon: () => JSX.Element
  readonly langName: string
  readonly langId?: string
}

export interface ProgrammingLanguageListAttr {
  readonly githubUserHandle: string
  readonly data: readonly ProgrammingLanguageListData[]
}

const useStyles = makeStyles(theme =>
  createStyles({
    listItem: {
      display: 'flex',
      flexGrow: theme.spacing(1),
    },
  })
)

export function ProgrammingLanguageList(attr: ProgrammingLanguageListAttr) {
  const classes = useStyles()

  const GhLangLink = ({
    Icon: IconContent,
    langName,
    langId = langName.toLowerCase(),
  }: {
    Icon: () => JSX.Element
    langName: string
    langId?: string
  }) =>
    <ListItem>
      <Link
        href={`https://github.com/${attr.githubUserHandle}?tab=repositories&q=&type=source&language=${langId}`}
        target='_blank'
        rel='noopener'
        className={classes.listItem}
      >
        <ListItemIcon><Icon><IconContent /></Icon></ListItemIcon>
        <Typography>{langName}</Typography>
      </Link>
    </ListItem>

  const children = attr.data.map((attr, index) => <GhLangLink key={index} {...attr} />)

  return <List>{children}</List>
}

export default ProgrammingLanguageList

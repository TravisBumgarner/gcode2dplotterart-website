/** @jsxImportSource @emotion/react */

import { Box, ListItemButton, ListSubheader, css } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import examples from './examples'
import tutorials from './tutorials'

const Menu = () => {
  return (
    <Box css={menuCSS}>
      <List
        subheader={
          <ListSubheader>
            Examples
          </ListSubheader>
        }
      >
        {
          Object.values(examples).sort((a, b) => a.title > b.title ? 1 : -1).map((example, i) => (
            <ListItem disablePadding key={example.title}>
              <ListItemButton href={`/examples/${example.id}`}>
                <ListItemText primary={example.title} />
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
      <List
        subheader={
          <ListSubheader>
            Tutorials
          </ListSubheader>
        }
      >
        {
          Object.values(tutorials).sort((a, b) => a.title > b.title ? 1 : -1).map((tutorial, i) => (
            <ListItem disablePadding key={tutorial.title}>
              <ListItemButton href={`/tutorials/${tutorial.id}`}>
                <ListItemText primary={tutorial.title} />
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
    </Box >
  )
}

const menuCSS = css`
  flex-basis: 200px;
  flex-shrink: 0;
`

export default Menu

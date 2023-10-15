/** @jsxImportSource @emotion/react */

import { Box, ListItemButton, ListSubheader, css } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import examples from './examples'

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
          examples.sort((a, b) => a.title > b.title ? 1 : -1).map((art, i) => (
            <ListItem disablePadding key={art.title}>
              <ListItemButton href={`/examples/${art.id}`}>
                <ListItemText primary={art.title} />
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
          examples.sort((a, b) => a.title > b.title ? 1 : -1).map((art, i) => (
            <ListItem disablePadding key={art.title}>
              <ListItemButton href={`/examples/${art.id}`}>
                <ListItemText primary={art.title} />
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

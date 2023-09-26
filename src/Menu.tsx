/** @jsxImportSource @emotion/react */

import { Box, ListItemButton, css } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import plotterArt from './content'

export const MENU_WIDTH = 250

const Menu = () => {
  return (
    <Box css={menuCSS}>
      <List>
        {
          plotterArt.sort((a, b) => a.title > b.title ? 1 : -1).map((art, i) => (
            <ListItem disablePadding key={art.title}>
              <ListItemButton href={art.id}>
                <ListItemText primary={art.title} secondary={art.description} />
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
    </Box>
  )
}

const menuCSS = css`
  width: ${MENU_WIDTH}px;
`

export default Menu

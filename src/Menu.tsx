/** @jsxImportSource @emotion/react */

import { Box, Divider, ListItemButton, ListItemIcon, css } from '@mui/material'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import HomeIcon from '@mui/icons-material/Home'
import ColorLensIcon from '@mui/icons-material/ColorLens'

import plotterArt from './content'

interface Props {
  isOpen: boolean
  toggleMenu: () => void
}

const Menu = ({ isOpen, toggleMenu }: Props) => {
  return (
    <Drawer
      open={isOpen}
      onClose={toggleMenu}
    >
      <Box css={menuCSS}>
        <List>
          <ListItem disablePadding>
            <ListItemButton href="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <Divider />
          {
            plotterArt.sort((a, b) => a.title > b.title ? 1 : -1).map((art, i) => (
              <ListItem disablePadding key={art.title}>
                <ListItemButton href={art.id}>
                  <ListItemIcon>
                    <ColorLensIcon />
                  </ListItemIcon>
                  <ListItemText primary={art.title} secondary={art.description} />
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Box>
    </Drawer>
  )
}

const menuCSS = css`
  width: 300px;
`

export default Menu

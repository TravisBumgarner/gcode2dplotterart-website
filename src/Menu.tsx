/** @jsxImportSource @emotion/react */

import { Box, IconButton, ListItemButton, ListItemIcon, Tooltip, Typography, css } from '@mui/material'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
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
        <Box css={headerCSS}>
          <Tooltip title="Open Menu">
            <IconButton onClick={toggleMenu}>
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <Typography variant="h1">Menu</Typography>
        </Box>
        <List>
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

const headerCSS = css`
  display: flex;
  flex-direction: row;
`

const menuCSS = css`
  width: 300px;
  border: 2px solid red;
`

export default Menu

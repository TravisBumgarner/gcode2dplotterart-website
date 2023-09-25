import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

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
      <List>
        <ListItem>
          <ListItemText primary="Menu Item 1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Menu Item 2" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Menu Item 3" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Menu

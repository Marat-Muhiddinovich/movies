import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { CalendarMonthRounded, LibraryBooksRounded, LiveHelpRounded, LocalLibraryRounded, MenuOpenOutlined } from '@mui/icons-material';

export default function SideBar() {

  const items = [
    {id: 1, text: "Courses Selection", courseIcon: <LibraryBooksRounded /> },
    {id: 2, text: "My courses", courseIcon: <LocalLibraryRounded /> },
    {id: 3, text: "Schedule", courseIcon: <CalendarMonthRounded /> },
    {id: 4, text: "Finals", courseIcon: <LiveHelpRounded /> }
  ]

  const [open, setOpen] = React.useState(false);
  
  const toggleDrawer = (newOpen: Boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250, height: '100%', background: 'rgb(29, 45, 91)', padding: 1, color: 'white' }} role="presentation" onClick={toggleDrawer(false)}>
      <div style={{ padding: 10 }}>
          <a href="/" style={{    fontFamily: 'Ubuntu, sans-serif', textDecoration: 'none', display: 'flex', alignItems: 'center', color: '#1d2d5b', fontWeight: 600, textTransform: 'uppercase' }}>
              <img src="https://lms.tuit.uz/assets/images/logo-md.png" height={40} alt="Logo" />
              <span style={{  width: 170, marginLeft: 10, display: 'block', fontWeight: 600, textTransform: 'uppercase', fontSize: 8, lineHeight: 1.8, color: 'white' }}>Muhammad al-Xorazmiy nomidagi Toshkent Axborot Texnologiyalari Universiteti</span>
          </a>
      </div>
      <List>
        {items.map((item) => (
          <div>
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item?.courseIcon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
          </div>
        ))}
      </List>
      <Divider sx={{background: 'white'}}  />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button sx={{marginTop: 80}} onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

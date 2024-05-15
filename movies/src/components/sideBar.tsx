import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {  CalendarMonthRounded, ContentPasteSearchRounded, InsertDriveFileRounded, LibraryBooksRounded, LiveHelpRounded, LocalLibraryRounded, InfoRounded, BarChartRounded, EmojiEventsRounded, SchoolRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';

interface SideBarProps {
  open: Boolean
  toggleDrawer: any
}

export default function SideBar({open, toggleDrawer}: SideBarProps) {

  const items = [
    {id: 1, text: "Courses Selection", link: "table", courseIcon: <LibraryBooksRounded /> },
    {id: 2, text: "My courses", courseIcon: <LocalLibraryRounded /> },
    {id: 3, text: "Schedule", courseIcon: <CalendarMonthRounded /> },
    {id: 4, text: "Retake", courseIcon: <ContentPasteSearchRounded /> },
    {id: 5, text: "Finals", courseIcon: <LiveHelpRounded /> },
    {id: 6, text: "Individual study plan", courseIcon: <InsertDriveFileRounded /> },
    {id: 7, text: "Information", courseIcon: <InfoRounded /> },
    {id: 8, text: "Survey", courseIcon: <BarChartRounded /> },
    {id: 9, text: "Tests", courseIcon: <EmojiEventsRounded /> },
    {id: 10, text: "Graduation work", courseIcon: <SchoolRounded /> }
  ]

  const DrawerList = (
    <Box sx={{ width: 250, height: '100%', background: 'rgb(29, 45, 91)', padding: 1, color: 'white' }} role="presentation" onClick={toggleDrawer(false)}>
      <div style={{ padding: 10 }}>
          <a href="/" style={{    fontFamily: 'Ubuntu, sans-serif', textDecoration: 'none', display: 'flex', alignItems: 'center', color: '#1d2d5b', fontWeight: 600, textTransform: 'uppercase' }}>
              <img src="https://lms.tuit.uz/assets/images/logo-md.png" height={40} alt="Logo" />
              <span style={{  width: 170, marginLeft: 10, display: 'block', fontWeight: 600, textTransform: 'uppercase', fontSize: 8, lineHeight: 1.8, color: 'white' }}>Muhammad al-Xorazmiy nomidagi Toshkent Axborot Texnologiyalari Universiteti</span>
          </a>
      </div>
      <List>

      <Divider sx={{background: 'white'}}  />
        {items.map((item) => (
          <div>
          <Link style={{textDecorationColor: 'rgb(29, 45, 91)'}} to={`/${item.link}`}>
            <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{color: 'white'}}>
                    {item?.courseIcon}
                  </ListItemIcon>
                  <ListItemText style={{color: 'white'}} primary={item.text} />
                </ListItemButton>
            </ListItem>
          </Link>
          </div>
        ))}
      </List>
     
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

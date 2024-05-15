
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import { MenuOpenOutlined, VideoCameraFrontOutlined } from '@mui/icons-material';
import AccountMenu from './AccountMenu';

interface HeaderProps {
  toggleDrawer: any;
}

export default function Header({toggleDrawer}: HeaderProps) {
    
        const [currentDate, setCurrentDate] = React.useState('');
    
        React.useEffect(() => {
          const interval = setInterval(() => {
            const dateObj = new Date();
            const day = dateObj.getDate();
            const month = dateObj.getMonth() + 1;
            const year = dateObj.getFullYear();
      
            const formattedDay = String(day).padStart(2, '0');
            const formattedMonth = String(month).padStart(2, '0');
      
            const formattedDate = `${formattedDay}.${formattedMonth}.${year}`;
            setCurrentDate(formattedDate);
          }, 1000); 
      
          return () => clearInterval(interval);
        }, []); 
        const [currentTime, setCurrentTime] = React.useState(new Date());
    
      React.useEffect(() => {
        const interval = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
    
        return () => clearInterval(interval);
      }, []); 

  return (
    <Box>
      <AppBar position="fixed" sx={{ zIndex: 1000, height: 83, p: 1, background: '#ececf1', display: 'flex', justifyContent: 'space-between', alignItems: 'center', pl: 2, pr: 2 }}>
        <Toolbar sx={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
          <Link to="/" style={{    fontFamily: 'Ubuntu, sans-serif', textDecoration: 'none', display: 'flex', alignItems: 'center', color: '#1d2d5b', fontWeight: 600, textTransform: 'uppercase' }}>
            <img src="https://lms.tuit.uz/assets/images/logo-md.png" height={40} alt="Logo" />
              <span style={{  width: 170, marginLeft: 10, display: 'block', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', lineHeight: 1.5, color: 'rgba(29, 45, 91' }}>Muhammad al-Xorazmiy nomidagi Toshkent Axborot Texnologiyalari Universiteti</span>
              <MenuOpenOutlined onClick={toggleDrawer(true)} sx={{ marginLeft: 10 }} />
          </Link>
          <ul style={{ color: 'rgba(29, 45, 91', listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 40 }}>
                <li style={{ marginLeft: 20 }}>
                    <p>
                         <span>Server vaqti</span>
                         <br />
                         <strong>{currentDate} | {currentTime.toLocaleTimeString()}</strong>
                    </p>
                 </li>

                 <li>
                     <Link to="/video-instruction" style={{ textDecoration: 'none' }} > <VideoCameraFrontOutlined sx={{ color: 'rgba(29, 45, 91)' }} fontSize="large" height={40} width={40} /></Link>
                 </li>
               

                 <li>
                     <a href="#" style={{ textDecoration: 'none' }} >                         <AccountMenu />
                     </a>                 </li>
             </ul>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
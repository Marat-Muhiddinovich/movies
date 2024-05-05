import * as React from 'react';
import Box from '@mui/material/Box';
import { MenuOpenOutlined, VideoCameraFrontOutlined } from '@mui/icons-material';
import AccountMenu from './AccountMenu';

export default function Header() {

    const [currentDate, setCurrentDate] = React.useState('');

    React.useEffect(() => {
      const interval = setInterval(() => {
        const dateObj = new Date();
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1; // Note: month is 0-indexed
        const year = dateObj.getFullYear();
  
        // Pad single digits with leading zeros
        const formattedDay = String(day).padStart(2, '0');
        const formattedMonth = String(month).padStart(2, '0');
  
        const formattedDate = `${formattedDay}.${formattedMonth}.${year}`;
        setCurrentDate(formattedDate);
      }, 1000); // Update every second
  
      return () => clearInterval(interval);
    }, []); // Runs once on component mount

    const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    // Update current time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run effect only once
  


  return (
    <Box component="section" sx={{ height: 63, p: 1, background: '#ececf1', display: 'flex', alignItems: 'center' }}>
        <div>
            <a href="/" style={{    fontFamily: 'Ubuntu, sans-serif', textDecoration: 'none', display: 'flex', alignItems: 'center', color: '#1d2d5b', fontWeight: 600, textTransform: 'uppercase' }}>
                <img src="https://lms.tuit.uz/assets/images/logo-md.png" height={40} alt="Logo" />
                <span style={{  width: 170, height: 58, marginLeft: 10, display: 'block', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', lineHeight: 1.5, color: 'rgba(29, 45, 91', }}>Muhammad al-Xorazmiy nomidagi Toshkent Axborot Texnologiyalari Universiteti</span>
                <MenuOpenOutlined sx={{ marginLeft: 10 }} />
            </a>
        </div>

        <div style={{ flex: 1 }}>
            <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 40 }}>
                <li style={{ marginLeft: 20 }}>
                   <p>
                        <span>Server vaqti</span>
                        <br />
                        <strong>{currentDate} | {currentTime.toLocaleTimeString()}</strong>
                   </p>
                </li>

                <li>
                    <a href="https://tuit.uz" style={{ textDecoration: 'none' }} >
                        <VideoCameraFrontOutlined sx={{ color: 'rgba(29, 45, 91)' }} fontSize="large" height={40} width={40} />
                    </a>
                </li>

                <li>
                    <a href="https://tuit.uz" style={{ textDecoration: 'none' }} >
                        <AccountMenu />
                    </a>
                </li>
            </ul>
        </div>
    </Box>
  );
}
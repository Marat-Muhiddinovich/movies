import {  Route, Routes,  } from 'react-router-dom';
import './App.css';
import SideBar from './components/sideBar';
import Header from './components/header';
import React from 'react';
import CourseSelection from './pages/CourseSelection';
function App() {
  
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  }

  return (
    <div className="App" >
      <Header toggleDrawer={toggleDrawer} />
      <SideBar open={open} toggleDrawer={toggleDrawer} />
        <Routes>
          <Route path="/student/subject" Component={CourseSelection} />
        </Routes>
    </div>
  );
}


export default App;

import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import './App.css';
import SideBar from './components/sideBar';
import EnhancedTable from './pages/table';
import Header from './components/header';
import React from 'react';
function App() {
  
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: Boolean) => () => {
    setOpen(newOpen);
  }

  return (
    <div className="App" style={{ background: '#f1f5f8'}}>
      <Header toggleDrawer={toggleDrawer} />
      <SideBar open={open} toggleDrawer={toggleDrawer} />
        <Routes>
          <Route path="/table" Component={EnhancedTable} />
        </Routes>
    </div>
  );
}


export default App;

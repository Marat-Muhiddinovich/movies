import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import './App.css';
import SideBar from './components/sideBar';
import EnhancedTable from './pages/table';
import Header from './components/header';
import { useState } from 'react';

function App() {

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <div className="App" style={{ background: '#f1f5f8'}}>
      <Header  />
      <SideBar />
        <Routes>
          <Route path="/table" Component={EnhancedTable} />
        </Routes>
    </div>
  );
}


export default App;

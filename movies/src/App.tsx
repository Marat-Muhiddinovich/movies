import { Route, Routes } from 'react-router-dom';
import './App.css';
import SideBar from './components/sideBar';
import { VideoInstruction } from './pages/videoInstruction';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/video-instruction" Component={VideoInstruction} />
      </Routes>
    </div>
  );
}


export default App;

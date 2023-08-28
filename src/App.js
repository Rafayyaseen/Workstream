import './App.css';
import Login from './login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Organogram from './pages/Organogram';
import Projectlogs from './pages/Porjectlogs';
import Sidebar from './sidebar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/*" 
          element={
            <Sidebar>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/organogram" element={<Organogram />} />
                <Route path="/projectlogs" element={<Projectlogs />} />
              </Routes>
            </Sidebar>
          } 
        />
        <Route path="*" element={<div><h1>This page does not exist</h1></div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

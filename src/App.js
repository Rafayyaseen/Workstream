import './App.css';
import Login from './login';
import CustomNavbar from './navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Organogram from './pages/Organogram';
import Projectlogs from './pages/Porjectlogs';
import Sidebar from './sidebar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* This is your Login Route that is separate from Sidebar */}
        <Route path="/login" element={<Login />} />

        {/* These Routes are inside Sidebar */}
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;

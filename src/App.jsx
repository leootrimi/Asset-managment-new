import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import NewUser from './pages/NewUser';
import Profile from './pages/Profile';
import Employers from './pages/Employers';
import Appbar from './components/Appbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';

// Create a custom theme with a monospace font
const theme = createTheme({
  typography: {
    fontFamily: '"Funnel Sans", sans-serif',  
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}> {/* Apply the custom theme */}
      <Router>
        <div className="flex h-full">
          <Sidebar />
          <div className="flex-1">
            <Appbar />
            <div className="h rounded-lg bg-[#f3f4f6]">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/user/add" element={<NewUser />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/employers" element={<Employers />} />
                <Route path="/analytics" element={<h1>Analytics Page</h1>} />
                <Route path="/settings" element={<h1>Settings Page</h1>} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

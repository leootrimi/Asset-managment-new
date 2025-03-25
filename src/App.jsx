import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import NewUser from './pages/NewUser';
import Profile from './pages/Profile';
import Employers from './pages/Employers';
import Appbar from './components/Appbar';
import Login from './pages/Login';
import Landing from './pages/Landing';
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
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* All other routes with Sidebar */}
          <Route path="/*" element={<MainLayout />} />
          <Route path="/" element={<Landing />} />
        </Routes> </Router> </ThemeProvider>);
}

function MainLayout() {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex-1">
        <Appbar />
        <div className="h rounded-lg bg-[#f3f4f6]">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user/add" element={<NewUser />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/employers" element={<Employers />} />
            <Route path="/settings" element={<h1>Settings Page</h1>} />
          </Routes>
        </div>
      </div>
    </div>);
}
export default App;

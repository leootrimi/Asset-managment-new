import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';

import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import NewUser from './pages/NewUser';
import Profile from './pages/Profile';
import Employers from './pages/Employers';
import Appbar from './components/Appbar';
import Login from './pages/Login';
import Landing from './pages/Landing';
import Equipment from './pages/Equipment';
import EquipmentProfile from './pages/EquipmentProfile';

import './App.css';

const theme = createTheme({
  typography: {
    fontFamily: '"Funnel Sans", sans-serif',
  },
});

// Layout component that wraps Sidebar and renders nested routes
function MainLayout() {
  return (
    <div className="h-full">
      <Sidebar />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Landing />} />

          {/* Protected routes inside Sidebar layout */}
          <Route path="/" element={<MainLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="user/add" element={<NewUser />} />
            <Route path="profile/:id" element={<Profile />} />
            <Route path="employers" element={<Employers />} />
            <Route path="equipment" element={<Equipment />} />
            <Route path="equipment/:id" element={<EquipmentProfile />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

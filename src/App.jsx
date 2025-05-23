import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import NewUser from './pages/Add New User/NewUser';
import Profile from './pages/Profile'
import Employers from './pages/Employers List/Employers';
import LoginPage from './pages/Login/Login';
import Landing from './pages/Landing Page/Landing';
import Equipment from './pages/Equipment List/Equipment';
import EquipmentProfile from './pages/Equipment Profile/EquipmentProfile';
import EmployersProfile from './pages/Employer Profile/EmployersProfile'
import CalendarEvents from './pages/Calendar Events/CalendarEvents'
import Documents from './pages/Documents/Documents';
import NewEquipment from './pages/Add New Equipment/NewEquipment';
import AuthenticationGuard from './Auth0 Protected Route/AuthenticationGuard';
import RequestBoard from './pages/Requests Made/Request-board';
import ReportsPage from './pages/Reports/ReportsPage';
import EmployerDashboard from './pages/Employer Dashboard/EmployerDashboard';
import YourWork from './pages/your-work/Your-work';

import './App.css';

const theme = createTheme({
  typography: {
    fontFamily: '"Funnel Sans", sans-serif',
  },
});

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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Landing />} />
          <Route path='/your-work' element={<YourWork />}/>

          {/* Protected routes inside Sidebar layout */}
          <Route path="/" element={<MainLayout />}>
            <Route element={<AuthenticationGuard />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path='/dashboard/employer' element={<EmployerDashboard />}/>
            <Route path="user/add" element={<NewUser />} />
            <Route path="profile/:id" element={<Profile />} />
            <Route path='employers/:id' element={<EmployersProfile />} />
            <Route path="employers" element={<Employers />} />
            <Route path="equipment" element={<Equipment />} />
            <Route path="equipment/:id" element={<EquipmentProfile />} />
            <Route path="events" element={<CalendarEvents />} />
            <Route path="documents" element={<Documents />} />
            <Route path="equpiment/add" element={<NewEquipment />} />
            <Route path="requests" element={<RequestBoard />} />
            <Route path="reports" element={<ReportsPage />} />
          </Route>
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

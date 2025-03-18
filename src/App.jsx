import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
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
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}> {/* Apply the custom theme */}
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Appbar />
            <div className="h rounded-lg bg-[#f3f4f6] h-full">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/orders" element={<h1>Orders Page</h1>} />
                <Route path="/products" element={<h1>Products Page</h1>} />
                <Route path="/customers" element={<h1>Customers Page</h1>} />
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

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Appbar from './components/Appbar';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ">
          <Appbar />
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
    </Router>
  );
}

export default App;

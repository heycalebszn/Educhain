// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Overview from './components/Overview';
import Wallet from './components/Wallet';
import Scholarship from './components/Scholarship';
import Lending from './components/Lending';
import Staking from './components/Staking';
import Trading from './components/Trading';
import Dashboard from "./components/Dashboard"

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <div className="flex-1 overflow-y-auto bg-gray-100">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/scholarship" element={<Scholarship />} />
              <Route path="/lending" element={<Lending />} />
              <Route path="/staking" element={<Staking />} />
              <Route path="/trading" element={<Trading />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

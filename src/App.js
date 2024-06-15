// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StockPrice from './components/StockPrice';
import CompanyProfile from './components/CompanyProfile';
import HistoricalData from './components/HistoricalData';
import MarketNews from './components/MarketNews';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/stock-price">Stock Price</Link></li>
            <li><Link to="/company-profile">Company Profile</Link></li>
            <li><Link to="/historical-data">Historical Data</Link></li>
            <li><Link to="/market-news">Market News</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/stock-price" element={<StockPrice />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/historical-data" element={<HistoricalData />} />
          <Route path="/market-news" element={<MarketNews />} />
          <Route path="/" element={<h1>Welcome to the FMP API Interface</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



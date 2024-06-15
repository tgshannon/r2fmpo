// src/components/HistoricalData.js

import React, { useState } from 'react';
import axios from 'axios';

const HistoricalData = () => {
  const [symbol, setSymbol] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [data, setData] = useState(null);

  const fetchHistoricalData = async () => {
    try {
      const response = await axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?from=${from}&to=${to}&apikey=${process.env.REACT_APP_FMP_API_KEY}`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching historical data:", error);
    }
  };

  return (
    <div>
      <h2>Historical Data</h2>
      <input
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Enter stock symbol"
      />
      <input
        type="text"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        placeholder="From (YYYY-MM-DD)"
      />
      <input
        type="text"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        placeholder="To (YYYY-MM-DD)"
      />
      <button onClick={fetchHistoricalData}>Fetch Historical Data</button>
      {data && (
        <div>
          <h3>Historical Data</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default HistoricalData;




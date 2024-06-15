// src/components/StockPrice.js

import React, { useState } from 'react';
import axios from 'axios';

const StockPrice = () => {
  const [symbol, setSymbol] = useState('');
  const [data, setData] = useState(null);

  const fetchStockPrice = async () => {
    try {
      const response = await axios.get(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${process.env.REACT_APP_FMP_API_KEY}`);
      setData(response.data[0]);
    } catch (error) {
      console.error("Error fetching stock price:", error);
    }
  };

  return (
    <div>
      <h2>Stock Price</h2>
      <input
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Enter stock symbol"
      />
      <button onClick={fetchStockPrice}>Fetch Stock Price</button>
      {data && (
        <div>
          <h3>Symbol: {data.symbol}</h3>
          <h3>Price: {data.price}</h3>
        </div>
      )}
    </div>
  );
};

export default StockPrice;




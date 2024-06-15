// src/components/MarketNews.js

import React, { useState } from 'react';
import axios from 'axios';

const MarketNews = () => {
  const [category, setCategory] = useState('');
  const [data, setData] = useState(null);

  const fetchMarketNews = async () => {
    try {
      const response = await axios.get(`https://financialmodelingprep.com/api/v3/stock_news?category=${category}&apikey=${process.env.REACT_APP_FMP_API_KEY}`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching market news:", error);
    }
  };

  return (
    <div>
      <h2>Market News</h2>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter news category"
      />
      <button onClick={fetchMarketNews}>Fetch Market News</button>
      {data && (
        <div>
          <h3>News Articles</h3>
          <ul>
            {data.map((article, index) => (
              <li key={index}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MarketNews;




// src/components/CompanyProfile.js

import React, { useState } from 'react';
import axios from 'axios';

const CompanyProfile = () => {
  const [symbol, setSymbol] = useState('');
  const [data, setData] = useState(null);

  const fetchCompanyProfile = async () => {
    try {
      const response = await axios.get(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${process.env.REACT_APP_FMP_API_KEY}`);
      setData(response.data[0]);
    } catch (error) {
      console.error("Error fetching company profile:", error);
    }
  };

  return (
    <div>
      <h2>Company Profile</h2>
      <input
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Enter stock symbol"
      />
      <button onClick={fetchCompanyProfile}>Fetch Company Profile</button>
      {data && (
        <div>
          <h3>Company: {data.companyName}</h3>
          <p>Industry: {data.industry}</p>
          <p>CEO: {data.ceo}</p>
          <p>Website: <a href={data.website} target="_blank" rel="noopener noreferrer">{data.website}</a></p>
        </div>
      )}
    </div>
  );
};

export default CompanyProfile;



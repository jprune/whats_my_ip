
import { useState, useEffect } from 'react';
import './App.css';

const axios = require('axios').default;

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://geo.ipify.org/api/v2/country,city?apiKey=');
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      App
    </div>
  );
};

export default App;

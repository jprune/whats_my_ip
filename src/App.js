import { useState, useEffect } from 'react';

import { Header, IpAddress, Footer, Map, Flag, TimeZone } from './components/index';
import './App.css';

const axios = require('axios').default;

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://geo.ipify.org/api/v2/country,city?apiKey=');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      <Header />
      <div>
        <div>
          <IpAddress />
          <TimeZone />
          <Flag />
        </div>
        <div>
          <Map />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;

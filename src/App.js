import { useState, useEffect } from 'react';

import { Header, IpAddress, Footer, MapComp, Flag, TimeZone } from './components/index';
import './App.css';

const axios = require('axios').default;

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}`);
        const secondResponse = await axios.get(`https://restcountries.com/v3.1/alpha/${response.data.location.country}`);

        setData({
          ipData: response.data,
          fullCountryName: secondResponse.data[0].altSpellings[1],
          flagURL: secondResponse.data[0].flags.png,
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Header />

      <div className="flex flex-row items-center  bg-blue-100">
        <div className="flex flex-col justify-center items-left w-full ml-20">

          <IpAddress data={data} />
          <TimeZone timeZone={data?.ipData.location.timezone} />
          <Flag url={data?.flagURL} />
        </div>

        
          <div className="flex w-3/4 h-[500px] mr-20 ">
            <MapComp lat={data?.ipData.location.lat} lng={data?.ipData.location.lng} />
          </div>        

      </div>
      <Footer />
    </div>
  );
};

export default App;

import React from 'react';

const IpAddress = ({ data }) => (
  <div className="flex flex-col bg-indigo-200 px-10 py-5 rounded-lg">
    <div className="flex justify-center flex-wrap mb-10">
      <h2 className="text-xl font-semibold w-full text-center mb-4">What&apos;s your IP-Address?</h2>
      <p className="text-4xl font-bold">{data?.ipData.ip}</p>
    </div>
    <div className="flex flex-col items-center">
      <h5 className="text-xl font-semibold">The location of you IP-Address:</h5>
      <p>Country: {data?.fullCountryName}</p>
      <p>City: {data?.ipData.location.city}</p>
      <p>Region: {data?.ipData.location.region}</p>
      <h5>Provider: {data?.ipData.isp}</h5>
    </div>
  </div>
);

export default IpAddress;

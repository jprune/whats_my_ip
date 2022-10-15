import React from 'react';

const IpAddress = ({ data }) => (
  <div className="flex flex-col px-10 py-5 rounded-lg m-3 ]">
    <div className="flex  flex-wrap mb-10 text-left">
      <h2 className="text-xl font-semibold w-full text-left mb-4">What&apos;s your IP-Address?</h2>
      <p className="text-4xl font-bold text-red-400 text-left">{data?.ipData.ip}</p>
    </div>
    <div className="flex flex-col  text-left">
      <h5 className="text-xl font-semibold text-left">The location of you IP-Address:</h5>
      <p><span className='font-bold'>Country:</span>  {data?.fullCountryName}</p>
      <p><span className='font-bold'>City: </span> {data?.ipData.location.city}</p>
      <p><span className='font-bold'>Region: </span>{data?.ipData.location.region}</p>
      <h5><span className='font-bold'>Provider: </span> {data?.ipData.isp}</h5>
    </div>
  </div>
);

export default IpAddress;

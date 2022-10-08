import React, { useEffect, useState } from 'react';
import { Map, Marker } from 'pigeon-maps';

const MapComp = ({ lat, lng }) => {
  console.log(lat, lng);
  const [center, setCenter] = useState([51.507359, -0.136439]);
  useEffect(() => {
    setCenter([lat, lng]);
  }, [lat]);

  return (
    <Map center={center} defaultZoom={7}>
      <Marker width={50} anchor={center} />
    </Map>
  );
};

export default MapComp;

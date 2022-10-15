import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

const TimeZone = ({ timeZone }) => {
  const [timeZoneComp, setTimeZoneComp] = useState('');
  useEffect(() => {
    setTimeZoneComp(timeZone);
  }, [timeZone]);

  const date = DateTime.now().setLocale('en').toLocaleString(DateTime.DATE_MED);

  return (
    <div>
      <p className='m-5 ml-12'>Today is: {date}</p>
    </div>
  );
};

export default TimeZone;

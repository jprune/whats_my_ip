import React from 'react';
 import FacebookIcon from '@mui/icons-material/Facebook';
 import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => (
  <div className="bg-blue-600 h-[200px] flex flex-row items-center justify-center gap-[15px]">
  <FacebookIcon className='fill-white'/>
  <InstagramIcon />
    <div className='ml-2'>
      <p className='font-bold'>Join Our Community</p>
      <input type="text" placeholder='E-mail' className='p-2 rounded-md'/>
    </div>

  </div>
);

export default Footer;

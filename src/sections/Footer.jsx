import { socialImgs } from '@/app/constants';
import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='flex flex-col justify-center items-center md:items-start'>
          <a href="/">Visit my blog</a>
        </div>
        <div className='socials'>
          {socialImgs.map((img) => (
            <img key={img.name} src={img.imgPath} alt={img.name} />
          ))}
        </div>
        <div className='flex flex-col justify-center'>
          <p className='text-center md:text-end'>
            ©{new Date().getFullYear()} Asad | Frontend Developer . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';

const Footer = () => (
  <div className="flex flex-col gap-3 w-full items-center justify-center py-8 bg-[#ac4b00] text-white mt-3">
    <span>Contact Us At: 08060340700</span>
    <span>WhatsApp Us At: 09066711277</span>
    <span>FaceBook: Fuel-Economizer</span>
    <span>Support@fueleconomizer.com.ng</span>
    <span className=" font-bold text-teal-600">
      <a href="/policy">
        Privacy Policy | Disclaimer
      </a>
    </span>
  </div>
);

export default Footer;

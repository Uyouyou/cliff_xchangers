import React from "react";

import logo from "../../images/type.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
      <p className="text-white text-base text-center mx-2 cursor-pointer">About</p>
      <p className="text-white text-base text-center mx-2 cursor-pointer">Card</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Market</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Tutorials</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Affiliates</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Vendors</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Careers</p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Come join us and change the crypto world!</p>
      <p className="text-white text-sm text-center font-medium mt-2">info@cliff_changers.com</p>
      <p className="text-white text-sm text-center font-medium mt-2">Blog</p>
      <p className="text-white text-sm text-center font-medium mt-2">Facebook</p>
      <p className="text-white text-sm text-center font-medium mt-2">Twitter</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@Cliff_Xchangers 2022</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;

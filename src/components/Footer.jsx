import React from "react";
import { menu, quickLinks, settingMenu } from "../utils/Constants";

const Footer = () => {
  return (
    <div className="bg-[#f2f2f2]">
      <div className="flex border-b-2 p-2 md:px-7">
        <span className="text-[#70767a] text-[15px] leading-none ">india</span>
      </div>
      <div className="flex  flex-col md:flex-row justify-between py-3 md:py-0 md:px-[15px] ">
        <div className="flex justify-center ">
          {quickLinks.map((manu, i) => {
            return (
              <React.Fragment key={i}>
                <span className="text-[#70767a] text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px] cursor-pointer hover:underline">
                  {manu}
                </span>
              </React.Fragment>
            );
          })}
        </div>
        <div className="flex justify-center ">
          {settingMenu.map((manu, index) => {
            return (
              <React.Fragment key={index}>
                <span className="text-[#70767a] text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px] cursor-pointer hover:underline">
                  {manu}
                </span>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;

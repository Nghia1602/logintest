import React from "react";

const HeaderLayout = () => {
  return (
    <div className="w-[100%] h-full flex items-center ">
      <div className="flex flex-2 font-bold text-[25px] uppercase text-[#4589b6ff] pl-4  flex items-center">
        <div className="border-r-[3px] border-[#4589b6ff] h-[28px] flex items-center pr-2">
          Phần mềm quản lý
          <span></span>
        </div>
      </div>
      <div className="flex flex-1"></div>
    </div>
  );
};
export default HeaderLayout;

import React from "react";
import  { Button, Input } from "antd";

const Login = () => {
    
  return (
    <div className="w-[700px] h-[400px] flex justify-center items-center rounded-[25px]    overflow-hidden">
      <div className="w-[700px] h-[400px]  flex justify-center items-center bg-[#c6c6c677] ">
        <div className="flex flex-col gap-2 flex-1 justify-center items-center">
          <Input type="text" placeholder="Nhập tài khoản" style={{width:"200px"}}/>
          <Input type="password" placeholder="Nhập mật khẩu" style={{width:"200px"}} />
          <Button type="primary" className="w-[200px]">Đăng nhập</Button>
        </div>
        <div className="flex-1  h-full flex justify-center items-center" style={{background:"#59abeeff"}}>
          <span className="text-white">Trang đăng nhập</span>
        </div>
      </div>
    </div>
  );
};
export default Login;











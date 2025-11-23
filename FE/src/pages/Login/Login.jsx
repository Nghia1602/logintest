import React, { useState } from "react";
import { Button, Input, notification } from "antd";
import { Authlogin } from "../../api/auth";
import { Navigate, replace } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    if (!username || !password) {
      notification.error({
        message: "Vui lòng nhập đầy đủ thông tin đăng nhập",
      });
      return;
    }
    try {
      const respone = await Authlogin(username, password);
      notification.success({ message: respone.data.message });
      localStorage.setItem("token", respone.data.token);
      console.log("token", respone.data.token);
      // window.location.href = "/";
      navigate("/home", { replace: true });
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
      notification.error({ message: "Đăng nhập thất bại" });
    }
  };
  return (
    <div className="w-[700px] h-[400px] flex justify-center items-center rounded-[25px] overflow-hidden shadow">
      <div className="w-[700px] h-[400px]  flex flex-col justify-center items-center bg-[white] flex-1">
        <div className="flex flex-col flex-2 justify-center items-center gap-2">
          <span className="text-[30px]">Đăng nhập</span>
          <span>Sử dụng tên đăng nhâp hoặc email để đăng nhập</span>
        </div>
        <div className="flex flex-col gap-5 flex-3  items-center ">
          <Input
            type="text"
            placeholder="Nhập tài khoản"
            style={{ width: "300px" }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Nhập mật khẩu"
            style={{ width: "300px" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="primary"
            className="w-[300px]"
            onClick={(e) => handleLogin(username, password)}
          >
            Đăng nhập
          </Button>
        </div>
      </div>
      <div
        className="flex-1  h-full flex justify-center items-center"
        style={{ background: "#59abeeff" }}
      >
        <span className="text-white">Trang đăng nhập</span>
      </div>
    </div>
  );
};
export default Login;

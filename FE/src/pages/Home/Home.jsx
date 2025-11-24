// src/pages/Home.jsx
import React from "react";

const Home = () => {
  const token = localStorage.getItem("token");

  return (
    <div style={{ backgroundColor: "#ffffffff", height: "100%",  display: "flex",flexDirection:"column", justifyContent: "center", alignItems: "center" }}>
      <h1 className="text-[30px] text-[#4589b6ff] font-bold">Trang chủ</h1>
      <h2>Chào tôi đi!</h2>
    </div>
  );
};

export default Home;

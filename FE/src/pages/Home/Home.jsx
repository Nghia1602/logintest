// src/pages/Home.jsx
import React from "react";

const Home = () => {
  const token = localStorage.getItem("token");

  return (
    <div style={{ backgroundColor: "#c9c6c6ff", height: "100%" }}>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;

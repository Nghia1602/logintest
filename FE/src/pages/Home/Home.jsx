// src/pages/Home.jsx
import React from "react";

const Home = () => {
  const token = localStorage.getItem("token");

  return (
    <div style={{ padding: 20 }}>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;

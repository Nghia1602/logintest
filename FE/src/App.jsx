import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="w-full h-[900px] flex justify-center items-center">
      <Login></Login>
    </div>
  );
};

export default App;

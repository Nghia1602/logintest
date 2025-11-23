import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/Login/Login.jsx";
import AppRouter from "./router/app.router.jsx";
import LayoutComponent from "./components/layout/Layout.jsx";
const App = () => {
  return (
    <div className="w-[100vw] h-[100vh] ">
      <AppRouter />
    </div>
  );
};

export default App;

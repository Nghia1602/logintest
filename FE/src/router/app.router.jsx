import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import LayoutComponent from "../components/layout/Layout";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<PrivateRoute page={<LayoutComponent />} />}>
        <Route path="home" element={<Home />} />
        <Route path="list-students" element={<Outlet />} />
        <Route path="list-subjects" element={<Outlet />} />
        <Route path="list-teachers" element={<Outlet />} />
        {/* <Route path="profile" element={<PrivateRoute page={<Profile />} />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRouter;

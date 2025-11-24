import React from "react";
import AppRouter from "../../router/app.router";
import { Outlet } from "react-router-dom";
const ContentLayout = ()=> {
    return <div  className="flex-1  bg-gray-500 rounded-t-[10px] overflow-hidden"><Outlet/></div>
}
export default ContentLayout;

import React from "react";
import AppRouter from "../../router/app.router";
import { Outlet } from "react-router-dom";
const ContentLayout = ()=> {
    return <div className="w-[99%] h-[800px] bg-gray-500 "><Outlet/></div>
}
export default ContentLayout;

import React from "react";
import { Layout } from "antd";
import Home from "../../pages/Home/Home";
import HeaderLayout from "../Header/Header";
import SiderLayout from "../Sider/Sider";
import ContentLayout from "../Content/Content";
const { Header, Content, Sider } = Layout;

const LayoutComponent = () => (
  <Layout
    style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
    
      borderRadius: 8,
      overflow: "hidden",
      fontFamily:"Public Sans, sans-serif"
    }}
  >
    <SiderLayout/>
    
    <Layout style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Header
      style={{ height: "75px", width: "100%", backgroundColor: "#ffffffff", padding:0, boxShadow: "0 2px 8px 0 #f0f1f2" }}
    >
      <HeaderLayout/>
    </Header>
      <Content style={{ backgroundColor: "#f4f4f4ff", flex: 1, justifyContent: "center",  display: "flex",padding: '10px' }}>
        <ContentLayout/>
      </Content>
    </Layout>
  </Layout>
);
export default LayoutComponent;

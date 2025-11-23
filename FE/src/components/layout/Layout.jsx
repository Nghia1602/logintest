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
      flexDirection: "column",
      borderRadius: 8,
      overflow: "hidden",
    }}
  >
    <Header
      style={{ height: "10%", width: "100%", backgroundColor: "#4096ff" }}
    >
      Header
    </Header>
    <Layout style={{ flex: 1, display: "flex", flexDirection: "row" }}>
      <Sider width="15%" style={{ backgroundColor: "#ffffffff" }}></Sider>
      <Content style={{ backgroundColor: "#f4f4f4ff", flex: 1, justifyContent: "center",  display: "flex" }}>
        <ContentLayout/>
      </Content>
    </Layout>
  </Layout>
);
export default LayoutComponent;

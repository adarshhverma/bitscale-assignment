// src/App.js
import React, { useState } from "react";
import { Layout } from "antd";
import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

const { Content, Sider } = Layout;

function App() {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <Layout>
      {/* Header */}
      <Navbar onSwitchChange={onChange} />
      {/* Main Layout */}
      <Layout style={{ border: "1px solid #E5E5E5", height: "90vh" }}>
        {/* Sidebar */}
        <Sider width={75} style={{ background: "#fff", padding: "1rem 0", borderRight: "1px solid #E5E5E5" }}>
          <Sidebar />
        </Sider>

        {/* Main Content */}
        <Layout>
          <Content style={{ background: "#fff", padding: "1rem", margin: 0, height: "70vh", overflowY: "scroll" }}>
            <MainContent />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;

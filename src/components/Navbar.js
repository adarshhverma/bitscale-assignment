// src/components/Header.js
import React from "react";
import { Row, Col, Space, Typography, Switch } from "antd";

import "../App.css";

import { UserOutlined } from "@ant-design/icons";
import { ReactComponent as LeftIcon } from "../assets/arrow-left.svg";

const { Text } = Typography;

const Navbar = ({ onSwitchChange }) => {
  return (
    <div className="header" style={{ padding: "0 1rem",background:"#fff", padding:" 0.5rem" }}>
      <Row justify="space-between" align="middle" style={{ width: "100%" }}>
        <Col xs={12} sm={16}>
          <Space>
            <LeftIcon />
            <Text type="secondary">File 01</Text>
          </Space>
        </Col>
        <Col xs={12} sm={8} style={{ textAlign: "right" }}>
          <Space>
            <Switch defaultChecked onChange={onSwitchChange} />
            <Text style={{ color: "#0E9F6E" }}>Auto Save</Text>
            <Space
              style={{
                background: "#FEECDC",
                width: "40px",
                height: "40px",
                borderRadius: "20px",
                marginLeft: "1rem",
              }}
            >
              <UserOutlined
                style={{
                  padding: "1rem 0.8rem",
                  color: "#D03801",
                  fontWeight: "bold",
                }}
              />
            </Space>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;

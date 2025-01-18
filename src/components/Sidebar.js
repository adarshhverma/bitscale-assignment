// src/components/Sidebar.js
import React from "react";
import { Space, Menu } from "antd";

import { ReactComponent as TableIcon } from "../assets/table.svg";
import { ReactComponent as PuzzleIcon } from "../assets/puzzle-piece-01.svg";
import { ReactComponent as IntersectionIcon } from "../assets/intersect-circle.svg";
import { ReactComponent as CardIcon } from "../assets/card.svg";
import { ReactComponent as DBIcon } from "../assets/db.svg";

const Sidebar = () => {
  return (
    <div style={{  background: "#fff", borderRight: "1px solid #E5E5E5" }}>
      <Space direction="vertical" align="center" style={{ height: "85vh", justifyContent: "space-between" }}>
        {/* Top Menu */}
        <Menu mode="inline" defaultSelectedKeys={["1"]} style={{ height: "100%", borderRight: 0 }}>
          <Menu.Item key="1">
            <TableIcon />
          </Menu.Item>
          <Menu.Item key="2">
            <PuzzleIcon />
          </Menu.Item>
          <Menu.Item key="3">
            <IntersectionIcon />
          </Menu.Item>
        </Menu>

        {/* Bottom Menu */}
        <Menu mode="inline" defaultSelectedKeys={["1"]} style={{ height: "100%", borderRight: 0 }}>
          <Menu.Item key="1">
            <CardIcon />
          </Menu.Item>
          <Menu.Item key="2">
            <DBIcon />
          </Menu.Item>
        </Menu>
      </Space>
    </div>
  );
};

export default Sidebar;

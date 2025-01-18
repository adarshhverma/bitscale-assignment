// src/components/MainContent.js
import React from "react";
import { Row, Col, Input, Space, Button,Typography } from "antd";

import { ReactComponent as VerticalIcon } from "../assets/verticalIcon.svg";
import { ReactComponent as HorizontalIcon } from "../assets/horizontalIcon.svg";
import { ReactComponent as FilterIcon } from "../assets/filterIcon.svg";
import { ReactComponent as SortIcon } from "../assets/sortIcon.svg";
import { ReactComponent as AiIcon } from "../assets/aiIcon.svg";
import { ReactComponent as ShareIcon } from "../assets/shareIcon.svg";
import { ReactComponent as DownloadIcon } from "../assets/downloadIcon.svg";
import { ReactComponent as DeleteIcon } from "../assets/deleteIcon.svg";
import { ReactComponent as SearchIcon } from "../assets/search.svg";

import EditableTable from "./Grid";

const { Text } = Typography;
const MainContent = () => {
  return (
    <div style={{ padding: "1rem", margin: 0, height: "70vh", overflowY: "scroll" }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={8}>
          <Input
            placeholder="Search"
            prefix={<SearchIcon />}
            style={{ width: "100%", margin: "0 0" }}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={10}>
          <Space style={{ margin: "0 auto",  flexWrap: "wrap", justifyContent: "center" }}>
            <Space style={{ margin: "0 0.5rem", cursor: "pointer", minWidth: "80px" }}>
              <VerticalIcon />
              <Text>1/1 Row</Text>
            </Space>
            <Space style={{ margin: "0 0.5rem", cursor: "pointer", minWidth: "100px" }}>
              <HorizontalIcon />
              <Text>3/3 Column</Text>
            </Space>
            <Space style={{ margin: "0 0.5rem", cursor: "pointer", minWidth: "80px" }}>
              <FilterIcon />
              <Text>Filter</Text>
            </Space>
            <Space style={{ margin: "0 0.5rem", cursor: "pointer", minWidth: "80px" }}>
              <SortIcon />
              <Text>Sort</Text>
            </Space>
          </Space>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6}>
          <Space style={{ margin: "0 0", padding: "0 0.5rem", width: "100%", justifyContent: "end" }}>
            <Button style={{ background: "#000", color: "#fff", borderRadius: "8px" }}>
              <AiIcon /> Enrich
            </Button>
            <Space style={{ margin: "0 0.5rem", cursor: "pointer" }}>
              <ShareIcon />
            </Space>
            <Space style={{ margin: "0 0.5rem", cursor: "pointer" }}>
              <DownloadIcon />
            </Space>
            <Space style={{ margin: "0 0.5rem", cursor: "pointer" }}>
              <DeleteIcon />
            </Space>
          </Space>
        </Col>
        <Col xs={24}>
          <EditableTable />
        </Col>
      </Row>
    </div>
  );
};

export default MainContent;

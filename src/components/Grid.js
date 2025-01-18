import React, { useState } from 'react';
import { Table, Typography, Space } from 'antd';

import 'antd/dist/reset.css';
import { ReactComponent as AddIcon } from "../assets/addIcon.svg";
import { ReactComponent as AlphabetIcon } from "../assets/alphabetIcon.svg";
import { ReactComponent as GptIcon } from "../assets/gptIcon.svg";
import { ReactComponent as EnrichIcon } from "../assets/enrichIcon.svg";
import { ReactComponent as PlayIcon } from "../assets/playIcon.svg";

const EditableTable = () => {
    const { Text } = Typography;

    const [columns, setColumns] = useState([
        {
            dataIndex: 'key',
            key: 'key',
            responsive: ["lg"], // Hide this column on small screens
        },
        {
            dataIndex: 'play',
            key: 'play',
            render: () => <PlayIcon />,
            width: 50, // Fix width for icon
        },
        {
            title: () => <Space><AlphabetIcon />Input Column</Space>,
            dataIndex: 'inputColumn',
            key: 'inputColumn',
            ellipsis: true, // Enable ellipsis for long content
        },
        {
            title: <Space><GptIcon />Action Column</Space>,
            dataIndex: 'actionColumn',
            key: 'actionColumn',
            ellipsis: true, // Enable ellipsis for long content
        },
        {
            title: <Space><EnrichIcon />Enrich Column</Space>,
            dataIndex: 'enrichCompany',
            key: 'enrichCompany',
            ellipsis: true, // Enable ellipsis for long content
        },
    ]);

    const [data, setData] = useState([
        {
            key: '1',
            inputColumn: 'Oct 12, 2024 at 14:08 PM',
            actionColumn: 'Bitscale Evaluation - Account relevance',
            enrichCompany: 'Bitscale Evaluation - Account relevance',
            play: "PlayIcon",
        },
        {
            key: '2',
            inputColumn: 'Oct 12, 2024 at 14:08 PM',
            actionColumn: 'Cell data size exceeds limit',
            enrichCompany: 'BMW Evaluation - Relevancy check',
            play: "PlayIcon",
        },
        {
            key: '3',
            inputColumn: 'Oct 12, 2024 at 14:08 PM',
            actionColumn: 'https://www.linkedin.com/bit...',
            enrichCompany: 'Google Evaluation - Lifvancy check',
            play: "PlayIcon",
        },
    ]);

    // Function to add a new column
    const addColumn = () => {
        const newColumnKey = `column${columns.length + 1}`;
        const newColumn = {
            title: `Column ${columns.length + 1}`,
            dataIndex: newColumnKey,
            key: newColumnKey,
        };
        setColumns([...columns, newColumn]);
        setData(data.map(row => ({ ...row, [newColumnKey]: 'Loading data, Please wait' })));
    };

    // Function to add a new row
    const addRow = () => {
        const newRow = {
            key: (data.length + 1).toString(), // Assign a unique key
            play: "PlayIcon", // Default value for play field
        };

        // Initialize all dynamic fields (columns) for the new row
        columns.forEach(col => {
            if (col.dataIndex && col.dataIndex !== 'key' && col.dataIndex !== 'play') {
                newRow[col.dataIndex] = 'Loading data, Please wait';
            }
        });

        setData([...data, newRow]);
    };

    const Footer = () => (
        <Space onClick={addRow} style={{ cursor: "pointer" }}>
            <AddIcon />
            <Text style={{ color: "#1C1B1F" }}>
                Add Row
            </Text>
        </Space>
    );

    return (
        <Table
            dataSource={data}
            columns={[
                ...columns,
                {
                    title: () => (
                        <Space onClick={addColumn} style={{ cursor: "pointer" }}>
                            <AddIcon />
                            <Text style={{ color: "#1C1B1F" }}>
                                Add Column
                            </Text>
                        </Space>
                    ),
                },
            ]}
            pagination={false}
            footer={Footer}
            bordered
            scroll={{ x: 'max-content' }} // Enable horizontal scrolling
        />
    );
};

export default EditableTable;

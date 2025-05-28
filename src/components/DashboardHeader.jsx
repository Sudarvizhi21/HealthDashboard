import React from 'react';
import { Input, Badge } from 'antd';
import { BellOutlined, SearchOutlined } from '@ant-design/icons';
import './DashboardHeader.css';

const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <h2 className="dashboard-title">Dashboard</h2>

      <div className="dashboard-search-bar">
        <Input
          className="search-input"
          placeholder="Search"
          prefix={<SearchOutlined />}
        />

        <Badge count={3} offset={[-2, 2]}>
          <BellOutlined className="bell-icon" />
        </Badge>
      </div>
    </div>
  );
};

export default DashboardHeader;

import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import {
  AppstoreOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
  ScheduleOutlined,
  BarChartOutlined,
  ToolOutlined,
  MessageOutlined,
  CustomerServiceOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { Title } = Typography;

const Sidebar = () => {
  return (
    <Sider
      width={220}
      style={{
        background: '#f8f9fc',
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <div style={{ padding: '24px', marginBottom: 20 }}>
        <Title level={4} style={{ margin: 0, color: 'cyan' }}>
          Health<span style={{ color: 'black' }}>care.</span>
        </Title>
      </div>

      <div style={{ padding: '0 16px', fontSize: 12, color: '#888' }}>General</div>
      <Menu mode="inline" defaultSelectedKeys={['dashboard']} style={{ borderRight: 0, background: 'transparent' }}>
        <Menu.Item key="dashboard" icon={<AppstoreOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="history" icon={<ClockCircleOutlined />}>
          History
        </Menu.Item>
        <Menu.Item key="calendar" icon={<CalendarOutlined />}>
          Calendar
        </Menu.Item>
        <Menu.Item key="appointments" icon={<ScheduleOutlined />}>
          Appointments
        </Menu.Item>
        <Menu.Item key="statistics" icon={<BarChartOutlined />}>
          Statistics
        </Menu.Item>
      </Menu>

      <div style={{ padding: '16px', fontSize: 12, color: '#888' }}>Tools</div>
      <Menu mode="inline" style={{ borderRight: 0, background: 'transparent' }}>
        <Menu.Item key="tools" icon={<ToolOutlined />}>
          Tools
        </Menu.Item>
        <Menu.Item key="chat" icon={<MessageOutlined />}>
          Chat
        </Menu.Item>
        <Menu.Item key="support" icon={<CustomerServiceOutlined />}>
          Support
        </Menu.Item>
        <Menu.Item key="setting" icon={<SettingOutlined />}>
          Setting
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;

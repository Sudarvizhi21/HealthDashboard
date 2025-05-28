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

const generalItems = [
  {
    key: 'dashboard',
    icon: <AppstoreOutlined />,
    label: 'Dashboard',
  },
  {
    key: 'history',
    icon: <ClockCircleOutlined />,
    label: 'History',
  },
  {
    key: 'calendar',
    icon: <CalendarOutlined />,
    label: 'Calendar',
  },
  {
    key: 'appointments',
    icon: <ScheduleOutlined />,
    label: 'Appointments',
  },
  {
    key: 'statistics',
    icon: <BarChartOutlined />,
    label: 'Statistics',
  },
];

const toolsItems = [
  {
    key: 'tools',
    icon: <ToolOutlined />,
    label: 'Tools',
  },
  {
    key: 'chat',
    icon: <MessageOutlined />,
    label: 'Chat',
  },
  {
    key: 'support',
    icon: <CustomerServiceOutlined />,
    label: 'Support',
  },
  {
    key: 'setting',
    icon: <SettingOutlined />,
    label: 'Setting',
  },
];

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
      <Menu
        mode="inline"
        defaultSelectedKeys={['dashboard']}
        style={{ borderRight: 0, background: 'transparent' }}
        items={generalItems}
      />

      <div style={{ padding: '16px', fontSize: 12, color: '#888' }}>Tools</div>
      <Menu
        mode="inline"
        style={{ borderRight: 0, background: 'transparent' }}
        items={toolsItems}
      />
    </Sider>
  );
};

export default Sidebar;

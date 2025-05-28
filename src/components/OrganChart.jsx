// src/components/OrganChart.jsx
import React from 'react';
import { Typography } from 'antd'; // Import Typography for "This Week" and "Details"
import OrganInfoCard from './OrganInfoCard'; // Import the row-level card component

const { Text } = Typography;

const OrganChart = () => {
  return (
    <div
      style={{
        backgroundColor: '#ffffff', // White background for the whole section
        borderRadius: '16px',
        padding: '20px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px', // Space between each organ info row
        width: 'auto', // Let parent control width or be dynamic
      }}
    >
      {/* Header for "This Week" and "Details" */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <Text style={{ fontWeight: 'bold', fontSize: '18px' }}>This Week</Text>
        <Text type="secondary" style={{ color: '#888', cursor: 'pointer' }}>Details →</Text>
      </div>

      {/* Organ Information Cards (now just rows) */}
      <OrganInfoCard
        icon="❤️"
        title="Heart"
        date="30 June 2025"
        percent={75}
        status="exception"
        strokeColor="#ff4d4f" // Red
        
      />
      <OrganInfoCard
        icon="👂"
        title="Ear"
        date="28 June 2025"
        percent={80}
        status="active"
        strokeColor="#52c41a" // Green
      />
      <OrganInfoCard
        icon="🦴"
        title="Bone"
        date="30 June  2025"
        percent={60}
        status="active"
        strokeColor="#fadb14" // Yellow
      />
      <OrganInfoCard
        icon="🧠"
        title="Brain"
        date="27 June  2025"
        percent={90}
        status="success"
        strokeColor="#1890ff" // Blue
      />
    </div>
  );
};

export default OrganChart;
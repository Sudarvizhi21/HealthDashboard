// src/components/OrganInfoCard.jsx
import React from 'react';
import { Progress } from 'antd';

const OrganInfoCard = ({ icon, title, date, percent, status, strokeColor }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center', // Align items to the center vertically
        gap: '10px',
        backgroundColor: '#F0F2F5', // Card background is white as per image
        borderRadius: '8px',
        padding: '10px', // Padding inside the card
        width: '250px', // Consistent width for all cards
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)', // Subtle shadow
      }}
    >
      <span style={{ fontSize: '24px', flexShrink: 0 }}>{icon}</span> {/* Icon */}
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}> {/* Container for title, date, progress */}
        <div style={{ fontWeight: 'bold' }}>{title}</div> {/* Title text, no background color */}
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Date: {date}</div> {/* Date */}
        <Progress percent={percent} showInfo={false} size="small" status={status} strokeColor={strokeColor} /> {/* Progress bar */}
      </div>
    </div>
  );
};

export default OrganInfoCard;
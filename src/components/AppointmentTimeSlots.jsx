import React from 'react';
import { Card, Typography, Space } from 'antd';
import { UserOutlined, ClockCircleOutlined } from '@ant-design/icons'; // Example icons

const { Text } = Typography;

const AppointmentTimeSlots = ({ appointments }) => {
    return (
        <div style={{ marginTop: 20 }}>
            {appointments.map((appointment) => (
                <Card
                    key={appointment.id}
                    style={{
                        marginBottom: 10,
                        backgroundColor: appointment.color || '#fff', // Use color from data
                        borderRadius: 8,
                        border: 'none', // Remove card border
                        boxShadow: '0 2px 8px rgba(0,0,0,0.0)',
                        cursor: 'pointer',
                    }}
                    bodyStyle={{ padding: '12px 16px' }} // Adjust padding
                >
                    <Space direction="vertical" size={2} style={{ width: '100%' }}>
                        <Text strong style={{ color: appointment.textColor || '#333' }}>
                            {appointment.title}
                        </Text>
                        <Space size={4}>
                            <ClockCircleOutlined style={{ fontSize: 12, color: appointment.textColor || '#555' }} />
                            <Text type="secondary" style={{ fontSize: 12, color: appointment.textColor || '#555' }}>
                                {appointment.time}
                            </Text>
                            <UserOutlined style={{ fontSize: 12, color: appointment.textColor || '#555' }} />
                            <Text type="secondary" style={{ fontSize: 12, color: appointment.textColor || '#555' }}>
                                {appointment.doctor}
                            </Text>
                        </Space>
                    </Space>
                </Card>
            ))}
        </div>
    );
};

export default AppointmentTimeSlots;
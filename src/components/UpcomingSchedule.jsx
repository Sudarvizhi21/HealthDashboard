import React from 'react';
import { Row, Col, Typography } from 'antd';

const { Title, Text } = Typography;

const UpcomingSchedule = () => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "16px",
        padding: "20px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        width: "100%",
        minHeight: '200px',
      }}
    >
      <Title level={5} style={{ marginBottom: "18px" }}>The Upcoming Schedule</Title>

      {/* On Thursday Section */}
      <Text strong style={{ marginTop: "20px", display: "block" }}>On Thursday</Text>
      <Row gutter={[16, 16]} style={{ marginTop: '10px' }}>

        <Col xs={24} sm={12}>
          <div style={{
            background: '#E4E1FB',
            borderRadius: '8px',
            padding: '15px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
            height: '100%',
          }}>
            <div>
              <Text strong style={{ color: 'darkblue' }}>Health checkup complete</Text><br />
              <Text style={{ color: 'darkblue' }}>11:00 AM</Text>
            </div>
            <span style={{ fontSize: '20px', color: '#52c41a' }}>📝</span>
          </div>
        </Col>

        <Col xs={24} sm={12}>
          <div style={{
            background: '#E4E1FB',
            borderRadius: '8px',
            padding: '15px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
            height: '100%',
          }}>
            <div>
              <Text strong style={{ color: 'darkblue' }}>Ophthalmologist</Text><br />
              <Text style={{ color: 'darkblue' }}>14:00 PM</Text>
            </div>
            <span style={{ fontSize: '20px', color: '#722ed1' }}>👁️</span>
          </div>
        </Col>
      </Row>

      {/* On Saturday Section */}
      <Text strong style={{ marginTop: "20px", display: "block" }}>On Saturday</Text>
      <Row gutter={[16, 16]} style={{ marginTop: '10px' }}>
        <Col xs={24} sm={12}>
          <div style={{
            background: '#E4E1FB',
            borderRadius: '8px',
            padding: '15px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
          }}>
            <div>
              <Text strong style={{ color: 'darkblue' }}>Cardiologist</Text><br />
              <Text style={{ color: 'darkblue' }}>12:00 AM</Text>
            </div>
            <span style={{ fontSize: '20px', color: 'darkblue' }}>❤️</span>
          </div>
        </Col>
        <Col xs={24} sm={12}>
          <div style={{
            background: '#E4E1FB',
            borderRadius: '8px',
            padding: '15px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
          }}>
            <div>
              <Text strong style={{ color: 'darkblue' }}>Neurologist</Text><br />
              <Text style={{ color: 'darkblue' }}>16:00 PM</Text>
            </div>
            <span style={{ fontSize: '20px', color: '#2f54eb' }}>🧠</span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UpcomingSchedule;

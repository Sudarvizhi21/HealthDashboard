import React, { useState, useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import Sidebar from './components/Sidebar';
import DashboardHeader from './components/DashboardHeader';
import AnatomyModel from './components/AnatomyModel';
import UpcomingSchedule from './components/UpcomingSchedule';
import ActivityChart from './components/ActivityChart';
import dayjs from 'dayjs';
import mockAppointments from './components/mockAppointments';
import OrganChart from './components/OrganChart';
import MonthlyCalendar from './components/MonthlyCalendar';
import AppointmentTimeSlots from './components/AppointmentTimeSlots';

const { Content } = Layout;

function App() {
  const [selectedDate, setSelectedDate] = useState(dayjs('2025-06-02'));
  const [dailyAppointments, setDailyAppointments] = useState([]);

  useEffect(() => {
    const filtered = mockAppointments.filter(app =>
      dayjs(app.date).isSame(selectedDate, 'day')
    );
    setDailyAppointments(filtered);
  }, [selectedDate]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout style={{ marginLeft: 220 }}>
        <Content style={{ padding: '24px', background: '#f0f2f5' }}>
          <DashboardHeader />

          <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
            <Col xs={24} lg={6}>
              <AnatomyModel />
            </Col>
            <Col xs={24} lg={7}>
              <OrganChart />
            </Col>
            <Col xs={24} lg={9}>
              <MonthlyCalendar onDateSelect={handleDateSelect} />
              <AppointmentTimeSlots appointments={dailyAppointments} />
            </Col>
          </Row>

          <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
            <Col xs={24} lg={12}>
              <ActivityChart />
            </Col>
            <Col xs={24} lg={12}>
              <UpcomingSchedule />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;

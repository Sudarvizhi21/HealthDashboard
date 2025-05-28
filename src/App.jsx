// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Layout, Row, Col, Typography } from 'antd';
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
const { Text } = Typography;

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

                    {/* Top Row: Anatomy Model (left), Organ Charts (middle), Calendar/Appointments (right) */}
                    <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
                        {/* Column for Anatomy Model */}
                        <Col xs={24} lg={6}> {/* Adjust lg span here */}
                            <AnatomyModel />
                        </Col>

                        {/* Column for Organ Charts (This Week section) */}
                        <Col xs={24} lg={7}> {/* Adjust lg span here */}
                            <OrganChart />
                        </Col>

                        {/* Column for MonthlyCalendar and AppointmentTimeSlots */}
                        <Col xs={24} lg={9}> {/* Adjust lg span here */}
                            <MonthlyCalendar onDateSelect={handleDateSelect} />
                            <AppointmentTimeSlots appointments={dailyAppointments} />
                        </Col>
                    </Row>

                    {/* New Row for Bottom Sections: Activity (left) and Upcoming Schedule (right) */}
                    <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
                        {/* Left Column: Activity Chart Component */}
                        <Col xs={24} lg={12}>
                            <ActivityChart />
                        </Col>

                        {/* Right Column: Upcoming Schedule Component */}
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
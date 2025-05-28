import React, { useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Typography } from 'antd';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const { Text } = Typography;

const ActivityChart = () => {
  const chartRef = useRef();

  const labels = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const dataValues = [4, 1, 3, 1, 3, 1, 2];

  // Create gradients dynamically using canvas context
  const getBarGradients = (ctx, chartArea) => {
    if (!chartArea) return;

    return labels.map((label, index) => {
      const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
      // Use two colors per bar for double shading effect
      if (index % 2 === 0) {
        // lavender gradient for even bars
        gradient.addColorStop(0, '#E6E6FA');  // light lavender
        gradient.addColorStop(1, 'cyan');  // dark indigo
      } else {
        // light yellow gradient for odd bars
        gradient.addColorStop(0, '#FFF9C4');  // light yellow
        gradient.addColorStop(1, '#827717');  // dark olive
      }
      return gradient;
    });
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Appointments',
        data: dataValues,
        backgroundColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          if (!chartArea) {
            // This case happens on initial render
            return null;
          }
          const gradients = getBarGradients(ctx, chartArea);
          return gradients[context.dataIndex];
        },
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 8,
        barThickness: 25,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000,
    },
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: ctx => `${ctx.dataset.label}: ${ctx.parsed.y} appointments`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: 'black', font: { size: 14 } },
        border: { display: false },
      },
      y: {
        beginAtZero: true,
        grid: { display: false },
        ticks: { display: false },
        border: { display: false },
      },
    },
  };

  const totalAppointments = dataValues.reduce((a, b) => a + b, 0);

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "16px",
        padding: "20px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        height: '280px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Text strong style={{ marginBottom: '10px' }}>Activity</Text>
      <div style={{ flexGrow: 1, position: 'relative' }}>
        <Bar ref={chartRef} data={data} options={options} />
      </div>
      <Text type="secondary" style={{ fontSize: '12px', marginTop: '10px', display: 'block', textAlign: 'left' }}>
        {totalAppointments} appointments this week
      </Text>
    </div>
  );
};

export default ActivityChart;

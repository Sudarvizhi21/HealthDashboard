import React, { useState } from "react";
import { Typography } from "antd";
import dayjs from "dayjs";
import "./MonthlyCalendar.css";

const { Title } = Typography;

const weekStart = dayjs("2025-06-02");
const timeSlots = ["09:00", "12:00", "15:00"];

const days = Array.from({ length: 7 }, (_, i) => {
  const date = weekStart.add(i, "day");
  return {
    date,
    label: date.format("DD MMM"),
    dayName: date.format("ddd"),
  };
});

// Define the pre-highlighted appointment times
const highlightedSlots = [
  {
    date: "2025-06-02",
    time: "12:00",
    color: "#E0F7FA",
  },
  {
    date: "2025-06-02",
    time: "15:00",
    color: "#D8BFD8", 
  },
];

export default function MonthlyCalendar({ onDateSelect }) {
  const [selected, setSelected] = useState({ date: null, time: null });

  const handleSelect = (day, time) => {
    setSelected({ date: day.date.format("YYYY-MM-DD"), time });
    if (onDateSelect) onDateSelect(day.date);
  };

  return (
    <div className="calendar-container">
      <Title level={4}>Weekly Calendar</Title>

      <div className="calendar-header">
        {days.map((day) => (
          <div key={day.date} className="calendar-day-header">
            <div className="date-label">{day.label}</div>
            <div className="day-label">{day.dayName}</div>
          </div>
        ))}
      </div>

      {timeSlots.map((time) => (
        <div key={time} className="calendar-row">
          {days.map((day) => {
            const dateStr = day.date.format("YYYY-MM-DD");

            // Check if this cell is a highlighted slot
            const highlight = highlightedSlots.find(
              (s) => s.date === dateStr && s.time === time
            );

            const isSelected =
              selected.date === dateStr && selected.time === time;

            return (
              <div
                key={`${dateStr}-${time}`}
                className={`calendar-slot ${isSelected ? "selected" : ""}`}
                style={{
                  backgroundColor: isSelected
                    ? "#1890ff"
                    : highlight
                    ? highlight.color
                    : "#f9f9f9",
                  color: isSelected ? "white" : "#444",
                  fontWeight: highlight ? "bold" : "normal",
                }}
                onClick={() => handleSelect(day, time)}
              >
                {time}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

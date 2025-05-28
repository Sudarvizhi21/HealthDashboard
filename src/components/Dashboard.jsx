import React from "react";
import DashboardHeader from "./components/DashboardHeader";
import AnatomyModel from "./components/AnatomyModel";

const Dashboard = () => {
  return (
    <div style={{ padding: 24 }}>
      <DashboardHeader />
      <AnatomyModel />
    </div>
  );   
};

export default Dashboard;

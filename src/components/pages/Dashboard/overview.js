import React from "react";
import Sidebar from "./Sidebar";
import ProfileSection from "./ProfileSection";
import MainContent from "./MainContent";
import "../../styles/overview.css";

const Overview = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <ProfileSection />
      <MainContent />
    </div>
  );
};

export default Overview;

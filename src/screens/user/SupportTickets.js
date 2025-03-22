import React from "react";
import UserDashboardLeftSection from "../../components/UserDashboardLeftSection";
import Footer from "../../components/Footer";
import "../../styles/user/dashboard.css";
import "../../styles/styles.css";

const SupportTickets = () => {
  return (
    <div className="user-dashboard-container">
      <div className="container-max-width user-dashboard-wrapper">
        <UserDashboardLeftSection />
        <div className="dashboard-right-section hidden-scrollbar">
          <h5>Support Tickets</h5>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SupportTickets;

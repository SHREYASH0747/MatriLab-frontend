import React from "react";
import UserDashboardLeftSection from "../../components/UserDashboardLeftSection";
import Footer from "../../components/Footer";
import "../../styles/user/dashboard.css";
import "../../styles/styles.css";

const InterestRequest = () => {
  const interestRequestData = [
    {
      id: 1,
      name: "siva s",
      age: "44 Years",
      religion: "Hindu",
      country: "India",
      status: "Pending",
    },
    {
      id: 2,
      name: "test test",
      age: "N/A",
      religion: "N/A",
      country: "N/A",
      status: "Accepted",
      
    },
  ];

  const renderStatusBadge = (status) => {
    if (status === "Pending")
      return <span className="status pending">Pending</span>;
    if (status === "Accepted")
      return <span className="status accepted">Accepted</span>;
  };

  const renderActionButton = (status) => {
    return (
      <button
        className={`action-button ${status === "Accepted" ? "blue" : "pink"}`}
        title="Action"
      >
        {status === "Accepted" ? "✉" : "📧"}
      </button>
    );
  };

  
  return (
    <div className="user-dashboard-container">
      <div className="container-max-width user-dashboard-wrapper">
        <UserDashboardLeftSection />
        <div className="dashboard-right-section hidden-scrollbar">
          <h5>Interest Requests</h5>
          <div className="table-container ">
           
            <table className="custom-table">
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Religion</th>
                  <th>Country</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {interestRequestData.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td className="name-cell">
                      <span className="avatar">👤</span>
                      {item.name}
                    </td>
                    <td>{item.age}</td>
                    <td>{item.religion}</td>
                    <td>{item.country}</td>
                    <td>{renderStatusBadge(item.status)}</td>
                    <td>{renderActionButton(item.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InterestRequest;

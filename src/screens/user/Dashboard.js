import React, { useEffect, useState } from "react";
import "../../styles/user/dashboard.css";
import "../../styles/styles.css";
import ContactImg from "../../assets/ContactImg.png";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import UserDashboardLeftSection from "../../components/UserDashboardLeftSection";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the stored user data from localStorage
    const storedUserData = localStorage.getItem("userData");
    console.log("user data on dashboard", storedUserData);
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    } else {
      // Redirect to login if no user data is found
      navigate("/matrilab/login");
    }
  }, [navigate]);

  const interestData = [
    {
      id: 1,
      name: "siva s",
      age: "44 Years",
      religion: "Hindu",
      status: "Pending",
    },
    {
      id: 2,
      name: "test test",
      age: "N/A",
      religion: "N/A",
      status: "Pending",
    },
    {
      id: 3,
      name: "rgbr rbbrb",
      age: "57 Years",
      religion: "Islam",
      status: "Pending",
    },
    {
      id: 4,
      name: "Vijay Anthony",
      age: "31 Years",
      religion: "Islam",
      status: "Pending",
    },
    {
      id: 5,
      name: "asdlk asdljk",
      age: "N/A",
      religion: "N/A",
      status: "Pending",
    },
    { id: 6, name: "ali ali", age: "N/A", religion: "N/A", status: "Pending" },
    {
      id: 7,
      name: "fgfdgfdg gfdgdfg",
      age: "N/A",
      religion: "N/A",
      status: "Pending",
    },
    {
      id: 8,
      name: "akash sali",
      age: "N/A",
      religion: "N/A",
      status: "Pending",
    },
    {
      id: 9,
      name: "Violet Cain",
      age: "1 Years",
      religion: "Christian",
      status: "Accepted",
    },
    {
      id: 10,
      name: "alhusam alhusam",
      age: "N/A",
      religion: "N/A",
      status: "Accepted",
    },
  ];

  const interestRequestData = [
    {
      id: 1,
      name: "siva s",
      age: "44 Years",
      religion: "Hindu",
      status: "Pending",
    },
    {
      id: 2,
      name: "test test",
      age: "N/A",
      religion: "N/A",
      status: "Pending",
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
        
        < UserDashboardLeftSection/>
        <div className="dashboard-right-section hidden-scrollbar">
          <h5>Dashboard</h5>
          <div className="dashboard-counter-boxes-container">
            <div className="counter-box rosso-bg-with-border">
              <div className="counter-box-icon rosso-bg">
                <i class="fa-regular fa-heart" aria-hidden="true"></i>
              </div>
              <div className="counter-box-content">
                <h4>Unlimited</h4>
                <span>Remaining Interests</span>
              </div>
            </div>

            <div className="counter-box goldenrod-bg-with-border">
              <div className="counter-box-icon goldenrod-bg">
                <i class="fa-regular fa-heart" aria-hidden="true"></i>
              </div>
              <div className="counter-box-content">
                <h4>Unlimited</h4>
                <span>Remaining Interests</span>
              </div>
            </div>
            <div className="counter-box emerald-bg-with-border">
              <div className="counter-box-icon emerald-bg">
                <i class="fa-regular fa-heart" aria-hidden="true"></i>
              </div>
              <div className="counter-box-content">
                <h4>Unlimited</h4>
                <span>Remaining Interests</span>
              </div>
            </div>
            <div className="counter-box lavender-bg-with-border">
              <div className="counter-box-icon lavender-bg">
                <i class="fa-regular fa-heart" aria-hidden="true"></i>
              </div>
              <div className="counter-box-content">
                <h4>Unlimited</h4>
                <span>Remaining Interests</span>
              </div>
            </div>
            <div className="counter-box rosso-bg-with-border">
              <div className="counter-box-icon rosso-bg">
                <i class="fa-regular fa-heart" aria-hidden="true"></i>
              </div>
              <div className="counter-box-content">
                <h4>Unlimited</h4>
                <span>Remaining Interests</span>
              </div>
            </div>
            <div className="counter-box goldenrod-bg-with-border">
              <div className="counter-box-icon goldenrod-bg">
                <i class="fa-regular fa-heart" aria-hidden="true"></i>
              </div>
              <div className="counter-box-content">
                <h4>Unlimited</h4>
                <span>Remaining Interests</span>
              </div>
            </div>
          </div>

          <div className="pacakage-detail-container">
            <div className="current-pkg-container">
              <h5>Current Package</h5>
            </div>

            <div className="current-pkg-wrapper">
              <h5>All Unlimited</h5>
              <div className="pacakage-detail-content-wrapper">
                <span className="pacakage-detail-content">
                  <i class="fa fa-check" aria-hidden="true"></i>Unlimited
                  Express Interests
                </span>
                <span className="pacakage-detail-content">
                  <i class="fa fa-check" aria-hidden="true"></i>Unlimited
                  Contact View
                </span>
                <span className="pacakage-detail-content">
                  <i class="fa fa-check" aria-hidden="true"></i>Unlimited Image
                  Upload
                </span>
              </div>
              <div className="pkg">
                <p>Package expriy date : 21 oct 2024 </p>
              </div>
              <div className="upgrade-package-button-container">
                <Link
                  to="/matrilab/packages"
                  className="upgrade-package-button"
                >
                  Upgrade Package
                </Link>
              </div>
            </div>
          </div>
          <div className="table-container">
            <h5>Latest Interests</h5>
            <table className="custom-table">
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Religion</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {interestData.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td className="name-cell">
                      <span className="avatar">👤</span>
                      {item.name}
                    </td>
                    <td>{item.age}</td>
                    <td>{item.religion}</td>
                    <td>{renderStatusBadge(item.status)}</td>
                    <td>{renderActionButton(item.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="table-container interest-request-table">
            <h5>Latest Interest Requests</h5>
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

export default Dashboard;

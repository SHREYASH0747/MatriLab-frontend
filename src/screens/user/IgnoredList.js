import React, { useState, useEffect } from "react";
import UserDashboardLeftSection from "../../components/UserDashboardLeftSection";
import Footer from "../../components/Footer";
import "../../styles/user/dashboard.css";
import "../../styles/styles.css";
import { fetchAllIgnored } from "../../services/ApiService";
import { toast } from "react-toastify";  
import 'react-toastify/dist/ReactToastify.css';  

const IgnoredList = () => {

   const [ignoredData, setIgnoredData] = useState([]);


   useEffect(() => {
    const fetchIgnoredData = async () => {
      try {
        const data = await fetchAllIgnored(); // Fetching ignored profiles
        setIgnoredData(data); // Set the fetched data in state
        toast.success("Ignored profiles loaded successfully!");  // Success toast notification
      } catch (error) {
        console.error("Error fetching ignored data:", error);
        toast.error("Error fetching ignored profiles!");  // Error toast notification
      }
    };

    fetchIgnoredData();
  }, []); // Empty dependency array, runs only once when the component mounts
 


  
// Function to render the status badge
const renderStatusBadge = (status) => {
  // If no status is provided, default to "Pending"
  if (!status) {
    return <span className="status pending">Pending</span>;
  }

  // Check for specific status values
  if (status === "Pending") {
    return <span className="status pending">Pending</span>;
  }
  if (status === "Accepted") {
    return <span className="status accepted">Accepted</span>;
  }

  // For any other status, display the value provided
  return <span className="status other">{status}</span>;
};



  const renderActionButton = (status) => {
    return (
      <button className="action-button pink " title="Action">
        {"✉"}
      </button>
    );
  };

  return (
    <div className="user-dashboard-container">
      <div className="container-max-width user-dashboard-wrapper">
        <UserDashboardLeftSection />
        <div className="dashboard-right-section hidden-scrollbar">
          <h5>Ignored Profile</h5>
          <div className="table-container ">
          <table className="custom-table">
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Name</th>
                  <th>Religion</th>
                  {/* <th>Height</th> */}
                  <th>Profession</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {ignoredData.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td className="name-cell">
                      <span className="avatar">👤</span>
                     
                      {item.firstName} {item.lastName}
                    </td>
                    <td>{item.religion}</td>
                    {/* <td>{item.height}</td> */}
                    <td>{item.profession}</td>
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

export default IgnoredList;

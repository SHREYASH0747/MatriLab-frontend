import React from "react";
import UserDashboardLeftSection from "../../components/UserDashboardLeftSection";
import "../../styles/user/dashboard.css";
import "../../styles/styles.css";
import Footer from "../../components/Footer";

function PurchaseHistory() {
  const historyData = [
    {
      id: 1,
      package: "All Unlimited",
      validityPeriod: "Unlimited Days",
      price: "3000",
      purchaseDate: "22 Oct, 2024",
      status: "Purchased",
    },
    {
      id: 2,
      package: "Premium Gold",
      validityPeriod: "365 Days",
      price: "2000",
      purchaseDate: "15 Oct, 2024",
      status: "Payment Pending",
    },
    {
      id: 3,
      package: "Silver Plan",
      validityPeriod: "180 Days",
      price: "1500",
      purchaseDate: "10 Oct, 2024",
      status: "Purchased",
    },
    {
      id: 4,
      package: "Standard Plus",
      validityPeriod: "90 Days",
      price: "1200",
      purchaseDate: "5 Oct, 2024",
      status: "Payment Pending",
    },
    {
      id: 5,
      package: "Basic Starter",
      validityPeriod: "30 Days",
      price: "500",
      purchaseDate: "1 Oct, 2024",
      status: "Purchased",
    },
  ];
  
    

  const renderStatusBadge = (status) => {
    if (status === "Payment Pending")
      return <span className="status pending">Payment Pending</span>;
    if (status === "Purchased")
      return <span className="status accepted">Purchased</span>;
  };

  const renderActionButton = (status) => {
    return (
      <button
        className={`action-button ${status === "Purchased" ? "blue" : "pink"}`}
        title="Action"
      >
        {status === "Purchased" ? "✉" : "📧"}
      </button>
    );
  };

  return (
    <>
      <div className="user-dashboard-container">
        <div className="container-max-width user-dashboard-wrapper">
          <UserDashboardLeftSection />
          <div className="dashboard-right-section hidden-scrollbar">
            

            <div className="table-container">
            <h5>Package Purchase History</h5>
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Package</th>
                    <th>Validity Period</th>
                    <th>Price</th>
                    <th>Purchase Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {historyData.map((item, index) => (
                    <tr key={item.id}>
                      
                      <td>{item.package}</td>
                      <td>{item.validityPeriod}</td>
                      <td>{item.price}</td>
                      <td>{item.purchaseDate}</td>
                      <td>{renderStatusBadge(item.status)}</td>
                      <td>{renderActionButton(item.status)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
         
        </div>
      </div>
      < Footer/>
    </>
  );
}

export default PurchaseHistory;

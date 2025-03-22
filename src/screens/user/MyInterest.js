// import React,{useState, useEffect} from "react";
// import UserDashboardLeftSection from "../../components/UserDashboardLeftSection";
// import Footer from "../../components/Footer";
// import "../../styles/user/dashboard.css";
// import "../../styles/styles.css";
// import { fetchAllInterests,
//   fetchUserInterestById } from "../../services/ApiService";


// const MyInterest = () => {
//   const [interestData, setInterestData] = useState([]);
  
//   useEffect(() => {
//     const fetchInterestData = async () => {
//       try {
//         const response = await fetchAllInterests(); 
//         if (response.ok) {
//           const data = await response.json();
//           setInterestData(data);
//         } else {
//           console.error("Failed to fetch interest data");
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchInterestData();
//   }, []);

//   const renderStatusBadge = (status) => {
//     if (status === "Pending")
//       return <span className="status pending">Pending</span>;
//     if (status === "Accepted")
//       return <span className="status accepted">Accepted</span>;
//   };

//   const renderActionButton = (status) => {
//     return (
//       <button
//         className={`action-button ${status === "Accepted" ? "blue" : "pink"}`}
//         title="Action"
//       >
//         {status === "Accepted" ? "✉" : "📧"}
//       </button>
//     );
//   };

//   return (
//     <div className="user-dashboard-container">
//       <div className="container-max-width user-dashboard-wrapper">
//         <UserDashboardLeftSection />
//         <div className="dashboard-right-section hidden-scrollbar">
//           <h5>My Interest</h5>
//           <div className="table-container">
//             <h5>Latest Interests</h5>
//             <table className="custom-table">
//               <thead>
//                 <tr>
//                   <th>S.N</th>
//                   <th>Name</th>
                 
//                   <th>Religion</th>
//                   <th>Height</th> 
//                   <th>Status</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {interestData.map((item, index) => (
//                   <tr key={item.id}>
//                     <td>{index + 1}</td>
//                     <td className="name-cell">
//                       <span className="avatar">👤</span>
//                       {item.name}
//                     </td>
                    
//                     <td>{item.religion}</td>
//                     <td>{item.height}</td>
//                     <td>{renderStatusBadge(item.status)}</td>
//                     <td>{renderActionButton(item.status)}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default MyInterest;



import React, { useState, useEffect } from "react";
import UserDashboardLeftSection from "../../components/UserDashboardLeftSection";
import Footer from "../../components/Footer";
import "../../styles/user/dashboard.css";
import "../../styles/styles.css";
import { fetchAllInterests } from "../../services/ApiService"; // Ensure correct import

const MyInterest = () => {
  const [interestData, setInterestData] = useState([]);

  // Fetching the interest data from the backend when the component mounts
  useEffect(() => {
    const fetchInterestData = async () => {
      try {
        const data = await fetchAllInterests(); // Fetching interest data
        setInterestData(data);  // Set the fetched data in state
      } catch (error) {
        console.error("Error fetching interest data:", error);  // Handling errors
      }
    };

    fetchInterestData();
  }, []);  // Empty dependency array, runs only once when the component mounts

  
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

  // Function to render action buttons
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
          <h5>My Interest</h5>
          <div className="table-container">
            <h5>Latest Interests</h5>
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
                {interestData.map((item, index) => (
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

export default MyInterest;

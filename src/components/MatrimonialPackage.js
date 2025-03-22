import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import ApiService from "../services/ApiService"; // Import ApiService
import "../styles/styles.css";
import "../styles/matrimonialPackage.css";

const MatrimonialPackage = () => {
  const [showAlert, setShowAlert] = useState(false); // State for showing confirmation alert
  const [packages, setPackages] = useState([]); // State for storing the list of packages
  const [selectedPackage, setSelectedPackage] = useState(null); // State for storing the selected package
  const navigate = useNavigate(); // Hook for navigation

  // Fetch all packages when the component loads

  
  // useEffect(() => {
  //   fetchPackages();
  // }, []);

  // // Fetch all packages from the API
  // const fetchPackages = async () => {
  //   try {
  //     const data = await ApiService.getAllPKGs(); // Get all packages from the API
  //     setPackages(data); // Set the packages in state
  //   } catch (error) {
  //     console.error("Error fetching packages:", error);
  //   }
  // };

  // const fetchPackages = async () => {
  //   try {
  //     const data = await ApiService.getAllPKGs(); // Call the API to get testimonials
  //     setPackages(data); // Set testimonials to state
  //   } catch (error) {
  //     console.error("Error fetching packages:", error);
  //   }
  // };

  // Handle Buy Now button click (show confirmation alert)
  const handleBuyNowClick = (packageData) => {
    setSelectedPackage(packageData); // Set the selected package for confirmation
    setShowAlert(true); // Show the confirmation alert
  };

  // Handle closing the confirmation alert
  const handleAlertClose = () => {
    setShowAlert(false); // Close the alert
  };

  // Handle confirmation of the purchase (navigate to login page)
  const handleConfirmYes = () => {
    setShowAlert(false); // Close the alert
    navigate("/matrilab/login"); // Navigate to the login page
  };

  return (
    <>
      <div className="matrimonial-package-container">
        <div className="matrimonial-package-header">
          <h2 className="matrimonial-package-heading">Matrimonial Package</h2>
          <p className="matrimonial-package-header-content mx-auto">
            Every user has their own package. Anyone can upgrade or buy a
            package through the online payment system.
          </p>
        </div>
        <div className="container-max-width package-grid">
          {packages.map((packageData, index) => (
            <div key={index} className="plan">
              <div className="plan__head">
                <div className="plan__head-content">
                  <h4 className="text--white mt-0 mb-0 text-center">
                    {packageData.name}
                  </h4>
                </div>
              </div>
              <div className="plan__body">
                <div className="text-center">
                  <h5 className="plan__body-price m-0 text-center">
                    {packageData.price}
                  </h5>
                </div>

                <ul className="list list--base">
                  {packageData.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <i className="text--base fas fa-check"></i>
                      <span className="feature-title">
                        {feature.title}:
                      </span>{" "}
                      {feature.value}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 text-center">
                  <button
                    className="buy-now-card-btn"
                    type="button"
                    onClick={() => handleBuyNowClick(packageData)} // Pass the selected package to the handler
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Confirmation Alert */}
        {showAlert && (
          <div className="confirmation-alert">
            <div className="confirmation-dialog">
              <div className="dialog-header">
                <h4>Confirmation Alert!</h4>
                <button className="cross-button" onClick={handleAlertClose}>
                  <i className="bi bi-x cross-icon"></i>
                </button>
              </div>
              <p className="sure-text">
                Are you sure you want to purchase the package "
                {selectedPackage?.name}"?
              </p>
              <div className="alert-actions">
                <button
                  className="alert-button alert-cancel"
                  onClick={handleAlertClose}
                >
                  No
                </button>
                <button
                  className="alert-button alert-confirm"
                  onClick={handleConfirmYes}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MatrimonialPackage;




















// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ApiService from "../services/ApiService"; // Import ApiService
// import "../styles/styles.css";
// import "../styles/matrimonialPackage.css";

// const MatrimonialPackage = () => {
//   const [showAlert, setShowAlert] = useState(false); // State for showing confirmation alert
//   const [packages, setPackages] = useState([]); // State for storing the list of packages
//   const [selectedPackage, setSelectedPackage] = useState(null); // State for storing the selected package
//   const navigate = useNavigate(); // Hook for navigation

//   // Fetch all packages when the component loads
//   useEffect(() => {
//     fetchPackages();
//   }, []);

//   // Fetch all packages from the API
//   const fetchPackages = async () => {
//     try {
//       const data = await ApiService.getAllPKGs(); // API call to fetch packages
//       setPackages(data); // Set the fetched data into the state
//     } catch (error) {
//       console.error("Error fetching packages:", error);
//     }
//   };

//   // Handle Buy Now button click (show confirmation alert)
//   const handleBuyNowClick = (packageData) => {
//     setSelectedPackage(packageData); // Set the selected package for confirmation
//     setShowAlert(true); // Show the confirmation alert
//   };

//   // Handle closing the confirmation alert
//   const handleAlertClose = () => {
//     setShowAlert(false); // Close the alert
//   };

//   // Handle confirmation of the purchase (navigate to login page)
//   const handleConfirmYes = () => {
//     setShowAlert(false); // Close the alert
//     navigate("/matrilab/login"); // Navigate to the login page
//   };

//   return (
//     <>
//       <div className="matrimonial-package-container">
//         <div className="matrimonial-package-header">
//           <h2 className="matrimonial-package-heading">Matrimonial Package</h2>
//           <p className="matrimonial-package-header-content mx-auto">
//             Every user has their own package. Anyone can upgrade or buy a
//             package through the online payment system.
//           </p>
//         </div>
//         <div className="container-max-width package-grid">
//           {packages.map((packageData, index) => (
//             <div key={index} className="plan">
//               <div className="plan__head">
//                 <div className="plan__head-content">
//                   <h4 className="text--white mt-0 mb-0 text-center">
//                     {packageData.name}
//                   </h4>
//                 </div>
//               </div>
//               <div className="plan__body">
//                 <div className="text-center">
//                   <h5 className="plan__body-price m-0 text-center">
//                     ₹{packageData.sellingPrice}
//                   </h5>
//                   <p className="retail-price text-center">
//                     <s>₹{packageData.retailPrice}</s>
//                   </p>
//                 </div>

//                 <ul className="list list--base">
//                   {packageData.features.map((feature, featureIndex) => (
//                     <li key={featureIndex}>
//                       <i className="text--base fas fa-check"></i>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="mt-3 text-center">
//                   <button
//                     className="buy-now-card-btn"
//                     type="button"
//                     onClick={() => handleBuyNowClick(packageData)} // Pass the selected package to the handler
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Confirmation Alert */}
//         {showAlert && (
//           <div className="confirmation-alert">
//             <div className="confirmation-dialog">
//               <div className="dialog-header">
//                 <h4>Confirmation Alert!</h4>
//                 <button className="cross-button" onClick={handleAlertClose}>
//                   <i className="bi bi-x cross-icon"></i>
//                 </button>
//               </div>
//               <p className="sure-text">
//                 Are you sure you want to purchase the package "
//                 {selectedPackage?.name}"?
//               </p>
//               <div className="alert-actions">
//                 <button
//                   className="alert-button alert-cancel"
//                   onClick={handleAlertClose}
//                 >
//                   No
//                 </button>
//                 <button
//                   className="alert-button alert-confirm"
//                   onClick={handleConfirmYes}
//                 >
//                   Yes
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default MatrimonialPackage;

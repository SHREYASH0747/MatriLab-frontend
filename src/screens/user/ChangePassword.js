// import React from "react";
// import Footer from "../../components/Footer";
// import UserDashboardLeftSection from "../../components/UserDashboardLeftSection";
// import "../../styles/user/dashboard.css";
// import "../../styles/styles.css";

// const ChangePassword = () => {
//   return (
//     <div className="user-dashboard-container">
//       <div className="container-max-width user-dashboard-wrapper">
//         <UserDashboardLeftSection />
//         <div className="dashboard-right-section hidden-scrollbar">
//           <h5>Change Password</h5>
//             </div>
//               <form className="basic-information-form">
//                 <div className="section personal-details">
//                   <div className="form-group">
//                     <input type="text" placeholder="Current Password*" required />
//                   </div>
//                 </div>

//                 <div className="section personal-details">
//                   <div className="form-group">
//                     <input type="text" placeholder="Password*" required />
//                   </div>
//                 </div>

//                 <div className="section personal-details">
//                   <div className="form-group">
//                     <input type="text" placeholder="Confirm Password*"/>
//                   </div>
//                 </div>

//                 <div className="form-actions">
//                   <button type="submit" className="btn-submit">
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//       <Footer />
//     </div>
//   );
// };

// export default ChangePassword;

import React from "react";
import Footer from "../../components/Footer";
import UserDashboardLeftSection from "../../components/UserDashboardLeftSection";
import "../../styles/user/dashboard.css";
import "../../styles/styles.css";
import "../../styles/user/profileSetting.css";

const ChangePassword = () => {
  return (
    <div className="user-dashboard-container">
      <div className="container-max-width user-dashboard-wrapper">
        <UserDashboardLeftSection />
        <div className="dashboard-right-section hidden-scrollbar">
          <h5>Change Password</h5>
          <div className="collapsible-section">
            <form className="basic-information-form">
              <div className="section personal-details">
                <div className="form-group">
                  <input type="text" placeholder="Current Password*" required />
                </div>
              </div>

              <div className="section personal-details">
                <div className="form-group">
                  <input type="text" placeholder="Password*" required />
                </div>
              </div>

              <div className="section personal-details">
                <div className="form-group">
                  <input type="text" placeholder="Confirm Password*" />
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChangePassword;

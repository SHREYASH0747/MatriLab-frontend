// import React, { useState } from "react";
// import UserDashboardLeftSection from "../../components/UserDashboardLeftSection";
// import TalukaDivision from "../../components/data/talukaDivisionData";
// import Footer from "../../components/Footer";
// import "../../styles/user/dashboard.css";
// import "../../styles/styles.css";
// import "../../styles/user/profileSetting.css";

// const ProfileSetting = () => {
//   const [selectedDistrict, setSelectedDistrict] = useState("");
//   const [selectedDivision, setSelectedDivision] = useState("");
//   const [divisions, setDivisions] = useState([]);
//   const [taluks, setTaluks] = useState([]);
//   const [sections, setSections] = useState({
//     basicInformation: false,
//     partnerExpectation: false,
//     physicalAttributes: false,
//     familyInformation: false,
//     careerInformation: false,
//     educationInformation: false,
//   });

//   const toggleSection = (section) => {
//     setSections((prevState) => ({
//       ...prevState,
//       [section]: !prevState[section],
//     }));
//   };
//   const handleDistrictChange = (e) => {
//     const district = e.target.value;
//     setSelectedDistrict(district);
//     setDivisions(Object.keys(TalukaDivision[district] || {}));
//     setSelectedDivision("");
//     setTaluks([]);
//   };

//   const handleDivisionChange = (e) => {
//     const division = e.target.value;
//     setSelectedDivision(division);
//     setTaluks(TalukaDivision[selectedDistrict][division] || []);
//   };

//   return (
//     <div className="user-dashboard-container">
//       <div className="container-max-width user-dashboard-wrapper">
//         <UserDashboardLeftSection />
//         <div className="dashboard-right-section hidden-scrollbar">
//           <h5>Profile Setting</h5>

//           {/* Basic Information Section */}
//           <div className="collapsible-section">
//             <div
//               className="section-header"
//               onClick={() => toggleSection("basicInformation")}
//             >
//               <h5
//                 className={`section-title ${
//                   sections.basicInformation ? "open" : "closed"
//                 }`}
//               >
//                 Basic Information
//               </h5>
//               <span>
//                 {sections.basicInformation ? (
//                   <i class="fa-solid fa-angle-up"></i>
//                 ) : (
//                   <i class="fa-solid fa-angle-down"></i>
//                 )}
//               </span>
//             </div>
//             {sections.basicInformation && (
//               <form className="basic-information-form">
//                 <div className="section personal-details">
//                   <div className="form-group">
//                     <label>First Name *</label>
//                     <input type="text" />
//                   </div>
//                   <div className="form-group">
//                     <label>Last Name *</label>
//                     <input type="text" />
//                   </div>
//                 </div>

//                 <div className="section personal-details">
//                   <div className="form-group">
//                     <label>Date of Birth *</label>
//                     <input type="date" required />
//                   </div>
//                   <div className="form-group">
//                     <label>Religion *</label>
//                     <select required className="property-select">
//                       <option value="Select">Select</option>
//                       <option value="Hindu">Hindu</option>
//                       <option value="Muslim">Muslim</option>
//                       <option value="Christian">Christian</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="section personal-details">
//                   <div className="form-group">
//                     <label>Gender</label>
//                     <select required className="property-select">
//                       <option value="Select">Select</option>
//                       <option value="Male">Male</option>
//                       <option value="Female">Female</option>
//                     </select>
//                   </div>
//                   <div className="form-group">
//                     <label>Marital Status *</label>
//                     <select required className="property-select">
//                       <option value="Select">Select</option>
//                       <option value="Unmarried">Unmarried</option>
//                       <option value="Married">Married</option>
//                       <option value="Divorced">Divorced</option>
//                       <option value="Widow">Widow</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="section personal-details">
//                   <div className="form-group">
//                     <label>Language *</label>
//                     <input type="text" />
//                   </div>
//                   <div className="form-group">
//                     <label>Profession *</label>
//                     <input type="text" />
//                   </div>
//                 </div>

//                 <div className="section personal-details">
//                   <div className="form-group">
//                     <label>Present Address *</label>
//                     <input type="text" />
//                   </div>
//                   <div className="form-group">
//                     <label>Financial Condition *</label>
//                     <input type="text" />
//                   </div>
//                 </div>
//                 <div className="section personal-details">
//                   <div className="form-group">
//                     <label>Smoking Habits *</label>
//                     <select required className="property-select">
//                       <option value="Select">Select</option>
//                       <option value="non-smoker">Non-Smoker</option>
//                       <option value="ocassional">Occasional</option>
//                       <option value="regular">Regular</option>
//                     </select>
//                   </div>
//                   <div className="form-group">
//                     <label>Drinking Status *</label>
//                     <select required className="property-select">
//                       <option value="Select">Select</option>
//                       <option value="non-drinker">Non-Drinker</option>
//                       <option value="ocassional">Occasional</option>
//                       <option value="regular">Regular</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="section personal-details">
//                   <div className="form-group">
//                     <label>District</label>
//                     <select
//                       onChange={handleDistrictChange}
//                       value={selectedDistrict}
//                       className="property-select"
//                     >
//                       <option value="">Select District</option>
//                       {Object.keys(TalukaDivision).map((district) => (
//                         <option key={district} value={district}>
//                           {district}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <div className="form-group">
//                     <label>Division</label>
//                     <select
//                       onChange={handleDivisionChange}
//                       value={selectedDivision}
//                       className="property-select"
//                     >
//                       <option value="">Select Division</option>
//                       {divisions.map((division) => (
//                         <option key={division} value={division}>
//                           {division}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>

//                 <div className="section contact-details">
//                   <div className="form-group">
//                     <label>Taluk</label>
//                     <select className="property-select">
//                       <option value="">Select Taluk</option>
//                       {taluks.map((taluk) => (
//                         <option key={taluk} value={taluk}>
//                           {taluk}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <div className="form-group">
//                     <label>Zip Code *</label>
//                     <input type="text" />
//                   </div>
//                 </div>

//                 <div className="form-actions">
//                   <button type="submit" className="btn-submit">
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             )}
//           </div>

//           {/* Partner Expectations */}
//           <div className="collapsible-section">
//             <div
//               className="section-header"
//               onClick={() => toggleSection("partnerExpectation")}
//             >
//               <h5>Basic Information</h5>
//               <span>
//                 {sections.partnerExpectation ? (
//                   <i class="fa-solid fa-angle-up"></i>
//                 ) : (
//                   <i class="fa-solid fa-angle-down"></i>
//                 )}
//               </span>
//             </div>
//             {sections.partnerExpectation && <div>Partner Expectations</div>}
//           </div>

//           {/* Physical Attributes */}
//           <div className="collapsible-section">
//             <div
//               className="section-header"
//               onClick={() => toggleSection("physicalAttributes")}
//             >
//               <h5>Physical Attributes</h5>
//               <span>
//                 {sections.physicalAttributes ? (
//                   <i class="fa-solid fa-angle-up"></i>
//                 ) : (
//                   <i class="fa-solid fa-angle-down"></i>
//                 )}
//               </span>
//             </div>
//             {sections.physicalAttributes && <div>Partner Expectations</div>}
//           </div>

//           {/* Family Information*/}
//           <div className="collapsible-section">
//             <div
//               className="section-header"
//               onClick={() => toggleSection("familyInformation")}
//             >
//               <h5>Family Information</h5>
//               <span>
//                 {sections.familyInformation ? (
//                   <i class="fa-solid fa-angle-up"></i>
//                 ) : (
//                   <i class="fa-solid fa-angle-down"></i>
//                 )}
//               </span>
//             </div>
//             {sections.familyInformation && <div>Partner Expectations</div>}
//           </div>

//           {/* Career Information*/}
//           <div className="collapsible-section">
//             <div
//               className="section-header"
//               onClick={() => toggleSection("careerInformation")}
//             >
//               <h5>Family Information</h5>
//               <span>
//                 {sections.careerInformation ? (
//                   <i class="fa-solid fa-angle-up"></i>
//                 ) : (
//                   <i class="fa-solid fa-angle-down"></i>
//                 )}
//               </span>
//             </div>
//             {sections.careerInformation && <div>Partner Expectations</div>}
//           </div>

//           {/* Education Information*/}
//           <div className="collapsible-section">
//             <div
//               className="section-header"
//               onClick={() => toggleSection("educationInformation")}
//             >
//               <h5>Family Information</h5>
//               <span>
//                 {sections.educationInformation ? (
//                   <i class="fa-solid fa-angle-up"></i>
//                 ) : (
//                   <i class="fa-solid fa-angle-down"></i>
//                 )}
//               </span>
//             </div>
//             {sections.educationInformation && <div>Education Information</div>}
//           </div>

//           <button type="submit" className="submit-btn">
//             Submit
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ProfileSetting;





import React, { useState } from "react";
import UserDashboardLeftSection from "../../components/UserDashboardLeftSection";
import TalukaDivision from "../../components/data/talukaDivisionData";
import Footer from "../../components/Footer";
import "../../styles/user/dashboard.css";
import "../../styles/styles.css";
import "../../styles/user/profileSetting.css";
import PhysicalAttributes from "./PhysicalAttributes";

import PartnerExpectations from "./PartnerExpectations";
import BasicInformation from "./BasicInformation";
import EducationInformation from "./EducationInformation";
import FamilyInformation from "./FamilyInformation";
import CareerInformation from "./CareerInformation";


const ProfileSetting = () => {
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const [divisions, setDivisions] = useState([]);
  const [taluks, setTaluks] = useState([]);
  const [sections, setSections] = useState({
    basicInformation: false,
    partnerExpectation: false,
    physicalAttributes: false,
    familyInformation: false,
    careerInformation: false,
    educationInformation: false,
  });

  const toggleSection = (section) => {
    setSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };
  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    setDivisions(Object.keys(TalukaDivision[district] || {}));
    setSelectedDivision("");
    setTaluks([]);
  };

  const handleDivisionChange = (e) => {
    const division = e.target.value;
    setSelectedDivision(division);
    setTaluks(TalukaDivision[selectedDistrict][division] || []);
  };

  return (
    <div className="user-dashboard-container">
      <div className="container-max-width user-dashboard-wrapper">
        <UserDashboardLeftSection />
        <div className="dashboard-right-section hidden-scrollbar">
          <h5>Profile Setting</h5>

          {/* Basic Information Section */}
          {/* <div className="collapsible-section">
            <div
              className="section-header"
              onClick={() => toggleSection("basicInformation")}
            >
              <h5
                className={`section-title ${sections.basicInformation ? "open" : "closed"
                  }`}
              >
                Basic Information
              </h5>
              <span>
                {sections.basicInformation ? (
                  <i class="fa-solid fa-angle-up"></i>
                ) : (
                  <i class="fa-solid fa-angle-down"></i>
                )}
              </span>
            </div>
            {sections.basicInformation && (
              <form className="basic-information-form">
                <div className="section personal-details">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input type="text" />
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input type="text" />
                  </div>
                </div>

                <div className="section personal-details">
                  <div className="form-group">
                    <label>Date of Birth *</label>
                    <input type="date" required />
                  </div>
                  <div className="form-group">
                    <label>Religion *</label>
                    <select required className="property-select">
                      <option value="Select">Select</option>
                      <option value="Hindu">Hindu</option>
                      <option value="Muslim">Muslim</option>
                      <option value="Christian">Christian</option>
                    </select>
                  </div>
                </div>

                <div className="section personal-details">
                  <div className="form-group">
                    <label>Gender</label>
                    <select required className="property-select">
                      <option value="Select">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Marital Status *</label>
                    <select required className="property-select">
                      <option value="Select">Select</option>
                      <option value="Unmarried">Unmarried</option>
                      <option value="Married">Married</option>
                      <option value="Divorced">Divorced</option>
                      <option value="Widow">Widow</option>
                    </select>
                  </div>
                </div>

                <div className="section personal-details">
                  <div className="form-group">
                    <label>Language *</label>
                    <input type="text" />
                  </div>
                  <div className="form-group">
                    <label>Profession *</label>
                    <input type="text" />
                  </div>
                </div>

                <div className="section personal-details">
                  <div className="form-group">
                    <label>Present Address *</label>
                    <input type="text" />
                  </div>
                  <div className="form-group">
                    <label>Financial Condition *</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="section personal-details">
                  <div className="form-group">
                    <label>Smoking Habits *</label>
                    <select required className="property-select">
                      <option value="Select">Select</option>
                      <option value="non-smoker">Non-Smoker</option>
                      <option value="ocassional">Occasional</option>
                      <option value="regular">Regular</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Drinking Status *</label>
                    <select required className="property-select">
                      <option value="Select">Select</option>
                      <option value="non-drinker">Non-Drinker</option>
                      <option value="ocassional">Occasional</option>
                      <option value="regular">Regular</option>
                    </select>
                  </div>
                </div>

                <div className="section personal-details">
                  <div className="form-group">
                    <label>District</label>
                    <select
                      onChange={handleDistrictChange}
                      value={selectedDistrict}
                      className="property-select"
                    >
                      <option value="">Select District</option>
                      {Object.keys(TalukaDivision).map((district) => (
                        <option key={district} value={district}>
                          {district}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Division</label>
                    <select
                      onChange={handleDivisionChange}
                      value={selectedDivision}
                      className="property-select"
                    >
                      <option value="">Select Division</option>
                      {divisions.map((division) => (
                        <option key={division} value={division}>
                          {division}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="section contact-details">
                  <div className="form-group">
                    <label>Taluk</label>
                    <select className="property-select">
                      <option value="">Select Taluk</option>
                      {taluks.map((taluk) => (
                        <option key={taluk} value={taluk}>
                          {taluk}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Zip Code *</label>
                    <input type="text" />
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn-submit">
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div> */}
         < BasicInformation />

          {/* Partner Expectations */}
          {/* <div className="collapsible-section">
            <div
              className="section-header"
              onClick={() => toggleSection("partnerExpectation")}
            >
              <h5
                className={`section-title ${sections.partnerExpectation ? "open" : "closed"
                  }`}
              >
                Partner Expectations
              </h5>
              <span>
                {sections.partnerExpectation ? (
                  <i className="fa-solid fa-angle-up"></i>
                ) : (
                  <i class="fa-solid fa-angle-down"></i>
                )}
              </span>
            </div>
            {sections.partnerExpectation && (
              <form className="basic-information-form">
              <div className="section personal-details">
                <div className="form-group">
                  <textarea type="text" placeholder="General Requirement " />
                </div>
              </div>

              <div className="section personal-details">
                <div className="form-group">
                  <label>Minimum Age</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label> Maximum Age</label>
                  <input type="text" />
                </div>
              </div>
              <div className="section personal-details">
            <div className="form-group">
              <label>Minimum Height</label>
              <input
                type="text"
                name="minHeight"
                
              />
            </div>
            <div className="form-group">
              <label>Maximum Height</label>
              <input
                type="text"
                name="maxHeight"
                
              />
            </div>
          </div>

              <div className="section personal-details">
                <div className="form-group">
                  <label>Maximum Weight</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Marital Status</label>
                  <select className="property-select">
                    <option value="Select">Select</option>
                    <option value="Unmarried">Unmarried</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widow">Widow</option>
                  </select>
                </div>
              </div>

              <div className="section personal-details">
                <div className="form-group">
                  <label>Religion *</label>
                  <select required className="property-select">
                    <option value="Select">Select</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Christian">Christian</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Completion</label>
                  <input type="text" />
                </div>
              </div>
              <div className="section personal-details">
                <div className="form-group">
                  <label>Smoking Habits *</label>
                  <select required className="property-select">
                    <option value="Select">Select</option>
                    <option value="non-smoker">Non-Smoker</option>
                    <option value="ocassional">Occasional</option>
                    <option value="regular">Regular</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Drinking Status *</label>
                  <select required className="property-select">
                    <option value="Select">Select</option>
                    <option value="non-drinker">Non-Drinker</option>
                    <option value="ocassional">Occasional</option>
                    <option value="regular">Regular</option>
                  </select>
                </div>
              </div>
              <div className="section personal-details">
                <div className="form-group">
                  <label>Minimum Degree</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Profession</label>
                  <input type="text" />
                </div>
              </div>
              <div className="section personal-details">
                <div className="form-group">
                  <label>Languages</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Personality</label>
                  <input type="text" />
                </div>
              </div>
              <div className="section personal-details">
                <div className="form-group">
                  <label>Financial Condition</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Family Position</label>
                  <input type="text" />
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-submit">
                  Submit
                </button>
              </div>
            </form>
            )}
          </div> */}
          < PartnerExpectations />

          {/* Physical Attributes */}
          {/* <div className="collapsible-section">
            <div
              className="section-header"
              onClick={() => toggleSection("physicalAttributes")}
            >
              <h5
                className={`section-title ${sections.physicalAttributes ? "open" : "closed"
                  }`}
              >
                Physical Attributes
              </h5>
              <span>
                {sections.physicalAttributes ? (
                  <i class="fa-solid fa-angle-up"></i>
                ) : (
                  <i class="fa-solid fa-angle-down"></i>
                )}
              </span>
            </div>
            {sections.physicalAttributes && (
              <form className="basic-information-form">
              <div className="section personal-details">
                <div className="form-group">
                  <label>Complexion*</label>
                  <input type="text" />
                </div>
              </div>

              <div className="section personal-details">
                <div className="form-group">
                  <label>Height*</label>
                  <input type="text" />
                </div>
              </div>

              <div className="section personal-details">
                <div className="form-group">
                  <label>Weight*</label>
                  <input type="text" />
                </div>
              </div>

              <div className="section personal-details">
                <div className="form-group">
                  <label>Religion *</label>
                  <select className="property-select">
                    <option value="AB+">AB+</option>
                    <option value="O+">O+</option>
                    <option value="AB">AB</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>
              <div className="section personal-details">
                <div className="form-group">
                  <label>Eye Color*</label>
                  <input type="text" />
                </div>
              </div>
              <div className="section personal-details">
                <div className="form-group">
                  <label>Hair Color*</label>
                  <input type="text" />
                </div>
              </div>
              <div className="section personal-details">
                <div className="form-group">
                  <label>Disability</label>
                  <input type="text" />
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-submit">
                  Submit
                </button>
              </div>
            </form>
            )}
          </div> */}
          < PhysicalAttributes />

          {/* Family Information*/}
          {/* <div className="collapsible-section">
            <div
              className="section-header"
              onClick={() => toggleSection("familyInformation")}
            >
              <h5
                className={`section-title ${sections.familyInformation ? "open" : "closed"
                  }`}
              >
                Family Information
              </h5>
              <span>
                {sections.familyInformation ? (
                  <i class="fa-solid fa-angle-up"></i>
                ) : (
                  <i class="fa-solid fa-angle-down"></i>
                )}
              </span>
            </div>
            {sections.familyInformation && (
              <form className="basic-information-form">
              <div className="section personal-details">
                <div className="form-group">
                  <label>Father's Name*</label>
                  <input type="text" />
                </div>
              </div>

              <div className="section personal-details">
                <div className="form-group">
                  <label>Father's Profession</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label> Father's Contact</label>
                  <input type="text" />
                </div>
              </div>

              <div className="section personal-details">
                <div className="form-group">
                  <label>Mother's Name</label>
                  <input type="text" />
                </div>
              </div>

              <div className="section personal-details">
                <div className="form-group">
                  <label>Mother's Profession</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label> Mother's Contact</label>
                  <input type="text" />
                </div>
              </div>
              <div className="section personal-details">
                <div className="form-group">
                  <label>Total Brother</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Total Sister</label>
                  <input type="text" />
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-submit">
                  Submit
                </button>
              </div>
            </form>
            )}
          </div> */}

          <FamilyInformation/>

          {/* Career Information*/}
          {/* <div className="collapsible-section">
            <div
              className="section-header"
              onClick={() => toggleSection("careerInformation")}
            >
              <h5
                className={`section-title ${sections.careerInformation ? "open" : "closed"
                  }`}
              >
                Career Information
              </h5>
              <span>
                {sections.careerInformation ? (
                  <i class="fa-solid fa-angle-up"></i>
                ) : (
                  <i class="fa-solid fa-angle-down"></i>
                )}
              </span>
            </div>
            {sections.careerInformation && <div>Partner Expectations</div>}
          </div> */}

          < CareerInformation/>
          
          {/* Education Information*/}
          {/* <div className="collapsible-section">
            <div
              className="section-header"
              onClick={() => toggleSection("educationInformation")}
            >
              <h5
                className={`section-title ${sections.educationInformation ? "open" : "closed"
                  }`}
              >
                Education Information
              </h5>
              <span>
                {sections.educationInformation ? (
                  <i class="fa-solid fa-angle-up"></i>
                ) : (
                  <i class="fa-solid fa-angle-down"></i>
                )}
              </span>
            </div>
            {sections.educationInformation && <div>Education Information</div>}
          </div> */}
          <EducationInformation />
         
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileSetting;
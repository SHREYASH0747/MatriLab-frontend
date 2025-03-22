// import React, { useState, useEffect } from "react";
// import TalukaDivision from "../../components/data/talukaDivisionData";
// import "../../styles/user/dashboard.css";
// import "../../styles/styles.css";
// import "../../styles/user/profileSetting.css";
// import { useNavigate } from "react-router-dom";
// import MyApiService from "../../services/MyApiService";

// const BasicInformation = ({ id }) => {
//   const [isSectionOpen, setIsSectionOpen] = useState(false);
//   const [selectedDistrict, setSelectedDistrict] = useState("");
//   const [selectedDivision, setSelectedDivision] = useState("");
//   const [selectedTaluk, setSelectedTaluk] = useState("");
//   const [divisions, setDivisions] = useState([]);
//   const [taluks, setTaluks] = useState([]);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     dob: "",
//     religion: "",
//     gender: "",
//     maritalStatus: "",
//     language: "",
//     profession: "",
//     bloodGroup: "",
//     address: "",
//     financialCondition: "",
//     smokingHabits: "",
//     drinkingStatus: "",
//     district: "",
//     division: "",
//     taluk: "",
//     zipCode: "",
//   });

//   const [userData, setUserData] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Retrieve the stored user data from localStorage
//     const storedUserData = localStorage.getItem("userData");
//     console.log("user data", storedUserData);

//     if (storedUserData) {
//       // Parse the stored data
//       const parsedData = JSON.parse(storedUserData);

//       // Make sure user data exists and set formData accordingly
//       if (parsedData.user) {
//         setUserData(parsedData);
//         const { district, division, taluk } = parsedData.user;

//         console.log("Smoking:", parsedData.user.smokingHabits);
//         console.log("Drinking:", parsedData.user.drinkingStatus);

//         // Prefill formData with values from userData
//         setFormData((prevFormData) => ({
//           ...prevFormData,
//           firstName: parsedData.user.firstName || "",
//           lastName: parsedData.user.lastName || "",
//           dob: parsedData.user.dob || "",
//           religion: parsedData.user.religion || "",
//           gender: parsedData.user.gender || "",
//           maritalStatus: parsedData.user.maritalStatus || "",
//           language: parsedData.user.language || "",
//           profession: parsedData.user.profession || "",
//           bloodGroup: parsedData.user.bloodGroup || "",
//           address: parsedData.user.presentAddress || "",
//           financialCondition: parsedData.user.financialCondition || "",
//           smokingHabits: parsedData.user.smokingHabits || "N/A",
//           drinkingStatus: parsedData.user.drinkingStatus || "N/A",
//           district: parsedData.user.district || "",
//           division: parsedData.user.division || "",
//           taluk: parsedData.user.taluk || "",
//           zipCode: parsedData.user.zipCode || "",
//         }));
//         setSelectedDistrict(district || "");
//         setDivisions(Object.keys(TalukaDivision[district] || {}));
//         setSelectedDivision(division || "");
//         setTaluks(TalukaDivision[district]?.[division] || []);
//       }
//     } else {
//       // Redirect to login if no user data is found
//       navigate("/matrilab/login");
//     }
//   }, [navigate]);

//   const toggleSection = () => {
//     setIsSectionOpen(!isSectionOpen);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleDistrictChange = (e) => {
//     const district = e.target.value;
//     setSelectedDistrict(district);
//     setDivisions(Object.keys(TalukaDivision[district] || {}));
//     setSelectedDivision("");
//     setTaluks([]);
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       district,
//       division: "",
//       taluk: "",
//     }));
//   };

//   const handleDivisionChange = (e) => {
//     const division = e.target.value;
//     setSelectedDivision(division);
//     setTaluks(TalukaDivision[selectedDistrict][division] || []);
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       division,
//       taluk: "",
//     }));
//   };

//   const handleTalukChange = (e) => {
//     const taluk = e.target.value;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       taluk: taluk, // Add taluk to formData
//     }));
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await MyApiService.submitBasicDetails(formData);
//       console.log("Form submitted successfully:", response);
//       alert("Physical Attributes submitted successfully!"); // Display success message
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Failed to submit Physical Attributes."); // Display error message
//     }
//   };

//   return (
//     <div className="collapsible-section">
//       <div className="section-header" onClick={toggleSection}>
//         <h5 className={`section-title ${isSectionOpen ? "open" : "closed"}`}>
//           Basic Information
//         </h5>
//         <span>
//           {isSectionOpen ? (
//             <i className="fa-solid fa-angle-up"></i>
//           ) : (
//             <i className="fa-solid fa-angle-down"></i>
//           )}
//         </span>
//       </div>
//       {isSectionOpen && (
//         <form className="basic-information-form" onSubmit={handleFormSubmit}>
//           <div className="section personal-details">
//             <div className="form-group">
//               <label>First Name *</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Last Name *</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//           </div>
//           <div className="section personal-details">
//             <div className="form-group">
//               <label>Date of Birth *</label>
//               <input
//                 type="date"
//                 name="dob"
//                 value={formData.dob}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Religion *</label>
//               <select
//                 className="property-select"
//                 name="religion"
//                 value={formData.religion}
//                 onChange={handleInputChange}
//                 required
//               >
//                 <option value="">Select</option>
//                 <option value="Hindu">Hindu</option>
//                 <option value="Muslim">Muslim</option>
//                 <option value="Christian">Christian</option>
//               </select>
//             </div>
//           </div>
//           <div className="section personal-details">
//             <div className="form-group">
//               <label>Gender *</label>
//               <select
//                 className="property-select"
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleInputChange}
//                 required
//               >
//                 <option value="">Select</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label>Marital Status *</label>
//               <select
//                 className="property-select"
//                 name="maritalStatus"
//                 value={formData.maritalStatus}
//                 onChange={handleInputChange}
//                 required
//               >
//                 <option value="">Select</option>
//                 <option value="Unmarried">Unmarried</option>
//                 <option value="Married">Married</option>
//                 <option value="Divorced">Divorced</option>
//                 <option value="Widow">Widow</option>
//               </select>
//             </div>
//           </div>
//           <div className="section personal-details">
//             <div className="form-group">
//               <label>Language *</label>
//               <input
//                 type="text"
//                 name="language"
//                 value={formData.language}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Profession *</label>
//               <input
//                 type="text"
//                 name="profession"
//                 value={formData.profession}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//           </div>
//           <div className="section personal-details">
//             <div className="form-group">
//               <label>Smoking Habits *</label>
//               <select
//                 className="property-select"
//                 name="smokingHabits"
//                 value={formData.smokingHabits}
//                 onChange={handleInputChange}
//                 required
//               >
//                 <option value="">Select</option>
//                 <option value="non-smoker">Non-Smoker</option>
//                 <option value="occasional">Occasional</option>
//                 <option value="regular">Regular</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label>Drinking Status *</label>
//               <select
//                 className="property-select"
//                 name="drinkingStatus"
//                 value={formData.drinkingStatus}
//                 onChange={handleInputChange}
//                 required
//               >
//                 <option value="">Select</option>
//                 <option value="non-drinker">Non-Drinker</option>
//                 <option value="occasional">Occasional</option>
//                 <option value="regular">Regular</option>
//               </select>
//             </div>
//           </div>
//           <div className="section personal-details">
//             <div className="form-group">
//               <label>Financial Condition *</label>
//               <input
//                 type="text"
//                 name="financialCondition"
//                 value={formData.financialCondition}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Blood Group *</label>
//               <select
//                 className="property-select"
//                 name="bloodGroup"
//                 value={formData.bloodGroup}
//                 onChange={handleInputChange}
//                 required
//               >
//                 <option value="">Select</option>
//                 <option value="A+">A+</option>
//                 <option value="A-">A-</option>
//                 <option value="B+">B+</option>
//                 <option value="B-">B-</option>
//                 <option value="AB+">AB+</option>
//                 <option value="AB-">AB-</option>
//                 <option value="O+">O+</option>
//                 <option value="O-">O-</option>

//               </select>
//             </div>
//           </div>
//           <div className="section personal-details">
//             <div className="form-group">
//               <label>Address *</label>
//               <input
//                 type="text"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//           </div>
//           <div className="section personal-details">
//             <div className="form-group">
//               <label>District</label>
//               <select
//                 name="district"
//                 value={selectedDistrict}
//                 onChange={handleDistrictChange}
//                 className="property-select"
//               >
//                 <option value="">Select District</option>
//                 {Object.keys(TalukaDivision).map((district) => (
//                   <option key={district} value={district}>
//                     {district}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="form-group">
//               <label>Division</label>
//               <select
//                 name="division"
//                 value={selectedDivision}
//                 onChange={handleDivisionChange}
//                 className="property-select"
//               >
//                 <option value="">Select Division</option>
//                 {divisions.map((division) => (
//                   <option key={division} value={division}>
//                     {division}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//           <div className="section contact-details">
//             <div className="form-group">
//               <label>Taluk</label>
//               <select
//                 name="taluk"
//                 value={formData.taluk}
//                 onChange={handleTalukChange}
//                 className="property-select"
//               >
//                 <option value="">Select Taluk</option>
//                 {taluks.map((taluk) => (
//                   <option key={taluk} value={taluk}>
//                     {taluk}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="form-group">
//               <label>Zip Code *</label>
//               <input
//                 type="text"
//                 name="zipCode"
//                 value={formData.zipCode}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>

//           <div className="form-actions">
//             <button type="submit" className="btn-submit">
//               Submit
//             </button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// };

// export default BasicInformation;

import React, { useState, useEffect } from "react";
import TalukaDivision from "../../components/data/talukaDivisionData";
import "../../styles/user/dashboard.css";
import "../../styles/styles.css";
import "../../styles/user/profileSetting.css";
import { useNavigate } from "react-router-dom";
import {
  getBasicInformationByUserId,
  fetchUserInformation,
  postBasicInformation,
  updateBasicInformation,
  fetchBasicInformation,
} from "../../services/ApiService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const BasicInformation = ({ id }) => {
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  // const [selectedTaluk, setSelectedTaluk] = useState("");
  const [divisions, setDivisions] = useState([]);
  const [taluks, setTaluks] = useState([]);
  const [basicInfo, setBasicInfo] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    religion: "",
    gender: "",
    maritalStatus: "",
    language: "",
    profession: "",
    bloodGroup: "",
    presentAddress: "",
    financialCondition: "",
    smokingHabits: "",
    drinkingStatus: "",
    district: "",
    division: "",
    taluk: "",
    zipCode: "",
  });
  

  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null); // To track editing ID
  const navigate = useNavigate();
  

  useEffect(() => {
    const fetchBasicData = async () => {
      const storedUserData = localStorage.getItem("userData");
      if (!storedUserData) {
        navigate("/matrilab/login");
        return;
      }

      const userId = JSON.parse(storedUserData).user.id;
      try {
        const response = await fetchUserInformation(userId);
        if (response && response.statusCode === 200 && response.user) {
          const user = response.user;
          const basicData = user.basicInformation || {};

          setFormData({
            firstName: user.firstName || "",
            lastName: user.lastName || "",
            dateOfBirth: user.dob || "",
            religion: user.religion || "",
            gender: user.gender || "",
            maritalStatus: user.maritalStatus || "",
            language: user.language || "",
            profession: user.profession || "",
            bloodGroup: basicData.bloodGroup || "",
            presentAddress: user.presentAddress || "",
            financialCondition: user.financialCondition || "",
            smokingHabits: user.smokingHabits || "N/A",
            drinkingStatus: user.drinkingStatus || "N/A",
            district: user.district || "",
            division: user.division || "",
            taluk: user.taluk || "",
            zipCode: user.zipCode || "",
          });
          
          setBasicInfo(basicData);
          setSelectedDistrict(user.district || "");
          setDivisions(Object.keys(TalukaDivision[user.district] || {}));
          setSelectedDivision(user.division || "");
          setTaluks(TalukaDivision[user.district]?.[user.division] || []);
        } else {
          console.log("No valid user data found or API response error.");
        }
      } catch (error) {
        console.error("Error fetching basic information:", error);
        toast.error("Error fetching basic information.");
      }
    };

    fetchBasicData();
  }, [navigate]);
  

 
const toggleSection = () => {
    setIsSectionOpen(!isSectionOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    setDivisions(Object.keys(TalukaDivision[district] || {}));
    setSelectedDivision("");
    setTaluks([]);
    setFormData((prevFormData) => ({
      ...prevFormData,
      district,
      division: "",
      taluk: "",
    }));
  };

  const handleDivisionChange = (e) => {
    const division = e.target.value;
    setSelectedDivision(division);
    setTaluks(TalukaDivision[selectedDistrict][division] || []);
    setFormData((prevFormData) => ({
      ...prevFormData,
      division,
      taluk: "",
    }));
  };

  const handleTalukChange = (e) => {
    const taluk = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      taluk: taluk, // Add taluk to formData
    }));
  };

  // Handle form submission (POST or PUT)
  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();

  //   // Ensure user ID is available
  //   const storedUserData = localStorage.getItem("userData");
  //   const userId = storedUserData ? JSON.parse(storedUserData).user.id : null;

  //   if (!userId) {
  //     toast.error("User ID is missing. Please log in again.");
  //     return;
  //   }

  //   // Data to be submitted (Including userId)
  //   const dataToSubmit = { ...formData, userId }; 

  //   try {
  //     let response;

  //     if (isEditing) {
  //       // When editing, update the existing record (PUT)
  //       response = await updateBasicInformation(editId, dataToSubmit); // Change API function name for updating basic info
  //       toast.success("Basic Information updated successfully!"); // Show success toast
  //     } else {
  //       // When creating new, post the data (POST)
  //       response = await postBasicInformation(dataToSubmit); // Change API function name for posting basic info
  //       toast.success("Basic Information added successfully!"); // Show success toast
  //     }

  //     // Reset the form after submission
  //     setFormData({
  //       firstName: "",
  //       lastName: "",
  //       dateOfBirth: "",
  //       religion: "",
  //       gender: "",
  //       maritalStatus: "",
  //       language: "",
  //       profession: "",
  //       bloodGroup: "",
  //       presentAddress: "",
  //       financialCondition: "",
  //       smokingHabits: "",
  //       drinkingStatus: "",
  //       district: "",
  //       division: "",
  //       taluk: "",
  //       zipCode: "",
  //     });

  //     setIsEditing(false);
  //     setEditId(null); // Reset edit ID
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     toast.error("Failed to submit basic information."); // Show error toast
  //   }
  // };

  // Handle form submission (POST or PUT)
// const handleFormSubmit = async (e) => {
//   e.preventDefault();

//   // Ensure user ID is available
//   const storedUserData = localStorage.getItem("userData");
//   const userId = storedUserData ? JSON.parse(storedUserData).user.id : null;

//   if (!userId) {
//     toast.error("User ID is missing. Please log in again.");
//     return;
//   }

//   // Data to be submitted (Including userId)
//   const dataToSubmit = { ...formData, userId };

//   try {
//     let response;

//     if (isEditing) {
//       // When editing, update the existing record (PUT)
//       response = await updateBasicInformation(editId, dataToSubmit); // Change API function name for updating basic info
//       toast.success("Basic Information updated successfully!"); // Show success toast
//     } else {
//       // When creating new, post the data (POST)
//       response = await postBasicInformation(dataToSubmit); // Change API function name for posting basic info
//       toast.success("Basic Information added successfully!"); // Show success toast
//     }

//     // Reset the form after submission
//     setFormData({
//       firstName: "",
//       lastName: "",
//       dateOfBirth: "",
//       religion: "",
//       gender: "",
//       maritalStatus: "",
//       language: "",
//       profession: "",
//       bloodGroup: "",
//       presentAddress: "",
//       financialCondition: "",
//       smokingHabits: "",
//       drinkingStatus: "",
//       district: "",
//       division: "",
//       taluk: "",
//       zipCode: "",
//     });

//     // Reset the editing state
//     setIsEditing(false); // Reset to false after submission (for new record)

//     setEditId(null); // Reset edit ID

//   } catch (error) {
//     console.error("Error submitting form:", error);
//     toast.error("Failed to submit basic information."); // Show error toast
//   }
// };


const handleFormSubmit = async (e) => {
  e.preventDefault();

  // Ensure user ID is available
  const storedUserData = localStorage.getItem("userData");
  const userId = storedUserData ? JSON.parse(storedUserData).user.id : null;

  if (!userId) {
    toast.error("User ID is missing. Please log in again.");
    return;
  }

  // Data to be submitted (Including userId)
  const dataToSubmit = { ...formData, userId };

  try {
    let response;

    // Check if the user already has data in the basic table (by userId)
    const existingUserResponse = await getBasicInformationByUserId(userId);
    console.log("existingUserResponse:", existingUserResponse);

    // if (existingUserResponse && existingUserResponse.statusCode === 200 && existingUserResponse.user) {
    if (existingUserResponse && existingUserResponse.user) {
      // If the user data exists, update the record (PUT)
      response = await updateBasicInformation(existingUserResponse.user.id, dataToSubmit);
      toast.success("Basic Information updated successfully!");
    } else {
      // If no data exists, create a new entry (POST)
      response = await postBasicInformation(dataToSubmit);
      toast.success("Basic Information added successfully!");
    }

    // ✅ Ensure response has valid data before updating state
    if (response) {
      setFormData(response);   // Update form with latest data
      setBasicInfo(response);  // Update UI state with latest data
    }

    // Reset the form after submission
    // setFormData({
    //   firstName: "",
    //   lastName: "",
    //   dateOfBirth: "",
    //   religion: "",
    //   gender: "",
    //   maritalStatus: "",
    //   language: "",
    //   profession: "",
    //   bloodGroup: "",
    //   presentAddress: "",
    //   financialCondition: "",
    //   smokingHabits: "",
    //   drinkingStatus: "",
    //   district: "",
    //   division: "",
    //   taluk: "",
    //   zipCode: "",
    // });

    // Reset the editing state
    setIsEditing(false); // Reset to false after submission (for new record)
    setEditId(null); // Reset edit ID

  } catch (error) {
    console.error("Error submitting form:", error);
    toast.error("Failed to submit basic information.");
  }
};


  return (
    <>
      <div className="collapsible-section">
        <div className="section-header" onClick={toggleSection}>
          <h5 className={`section-title ${isSectionOpen ? "open" : "closed"}`}>
            Basic Information
          </h5>
          <span>
            {isSectionOpen ? (
              <i className="fa-solid fa-angle-up"></i>
            ) : (
              <i className="fa-solid fa-angle-down"></i>
            )}
          </span>
        </div>
        {isSectionOpen && (
          <form className="basic-information-form" onSubmit={handleFormSubmit}>
            <div className="section personal-details">
              <div className="form-group">
                <label>First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="section personal-details">
              <div className="form-group">
                <label>Date of Birth *</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Religion *</label>
                <select
                  className="property-select"
                  name="religion"
                  value={formData.religion}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Christian">Christian</option>
                </select>
              </div>
            </div>
            <div className="section personal-details">
              <div className="form-group">
                <label>Gender *</label>
                <select
                  className="property-select"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="form-group">
                <label>Marital Status *</label>
                <select
                  className="property-select"
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
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
                <input
                  type="text"
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Profession *</label>
                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="section personal-details">
              <div className="form-group">
                <label>Smoking Habits *</label>
                <select
                  className="property-select"
                  name="smokingHabits"
                  value={formData.smokingHabits}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="non-smoker">Non-Smoker</option>
                  <option value="occasional">Occasional</option>
                  <option value="regular">Regular</option>
                </select>
              </div>
              <div className="form-group">
                <label>Drinking Status *</label>
                <select
                  className="property-select"
                  name="drinkingStatus"
                  value={formData.drinkingStatus}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="non-drinker">Non-Drinker</option>
                  <option value="occasional">Occasional</option>
                  <option value="regular">Regular</option>
                </select>
              </div>
            </div>
            <div className="section personal-details">
              <div className="form-group">
                <label>Financial Condition *</label>
                <input
                  type="text"
                  name="financialCondition"
                  value={formData.financialCondition}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Blood Group *</label>
                <select
                  className="property-select"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
            </div>
            <div className="section personal-details">
              <div className="form-group">
                <label>Address *</label>
                <input
                  type="text"
                  name="presentAddress"
                  value={formData.presentAddress}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="section personal-details">
              <div className="form-group">
                <label>District</label>
                <select
                  name="district"
                  value={selectedDistrict}
                  onChange={handleDistrictChange}
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
                  name="division"
                  value={selectedDivision}
                  onChange={handleDivisionChange}
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
                <select
                  name="taluk"
                  value={formData.taluk}
                  onChange={handleTalukChange}
                  className="property-select"
                >
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
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-submit">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </>
  );
};

export default BasicInformation;

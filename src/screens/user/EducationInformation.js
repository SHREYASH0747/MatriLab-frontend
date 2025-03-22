// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "../../styles/user/dashboard.css";
// import "../../styles/styles.css";
// import "../../styles/user/profileSetting.css";
// import {
//   educationInformationForm,
//   fetchEducationData,
//   deleteEducationInformation,
// } from "../../services/ApiService";

// const EducationInformation = () => {
//   const [isSectionOpen, setIsSectionOpen] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);
//   const [educationData, setEducationData] = useState([]);
//   const [formData, setFormData] = useState({
//     institute: "",
//     degree: "",
//     rollNumber: "",
//     registrationNumber: "",
//     fieldOfStudy: "",
//     result: "",
//     startYear: "",
//     endYear: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null); // To track editing ID
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetchEducationData();
//         if (response && response.data) {
//           setEducationData(response.data); // Set the career data only if it's valid
//         } else {
//           alert("No data available or response is malformed.");
//         }
//       } catch (error) {
//         console.error("Error fetching education data:", error);
//         alert("Failed to fetch education data. Please try again later.");
//       }
//     };

//     fetchData();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Ensure user ID is available
//     const storedUserData = localStorage.getItem("userData");
//     const userId = storedUserData ? JSON.parse(storedUserData).user.id : null;

//     if (!userId) {
//       alert("User ID is missing. Please log in again.");
//       return;
//     }

//     const dataToSubmit = { ...formData, userId };

//     try {
//       let response;

//       if (isEditing) {
//         // When editing, send the ID to the backend for updating the record
//         response = await educationInformationForm(
//           { ...dataToSubmit, id: editId },
//           "PUT"
//         );
//       } else {
//         // When creating new, no ID is sent
//         response = await educationInformationForm(dataToSubmit, "POST");
//       }

//       alert("Education Information submitted successfully!");
//       setShowAlert(false);

//       // Update local state based on whether we are editing or adding a new record
//       const updatedData = isEditing
//         ? educationData.map((item) =>
//             item.id === editId ? response.data : item
//           ) // Update the specific record
//         : [...educationData, response.data]; // Add new data if not editing

//       setEducationData(updatedData);

//       // Reset the form
//       setFormData({
//         institute: "",
//         degree: "",
//         rollNumber: "",
//         registrationNumber: "",
//         fieldOfStudy: "",
//         result: "",
//         startYear: "",
//         endYear: "",
//       });
//       setIsEditing(false);
//       setEditId(null);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Failed to submit education information.");
//     }
//   };

//   const handleEdit = (id) => {
//     // Find the career information item based on the ID
//     const itemToEdit = educationData.find((item) => item.id === id);

//     if (itemToEdit) {
//       setFormData({
//         institute: itemToEdit?.institute,
//         degree: itemToEdit?.degree,
//         rollNumber: itemToEdit?.rollNumber,
//         registrationNumber: itemToEdit?.registrationNumber,
//         fieldOfStudy: itemToEdit?.fieldOfStudy,
//         result: itemToEdit?.result,
//         startYear: itemToEdit?.startYear,
//         endYear: itemToEdit?.endYear,
//       });
//       setIsEditing(true); // Set editing state to true
//       setEditId(id); // Set the ID of the item being edited
//       setShowAlert(true); // Optionally show the alert for editing
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       // Call the API to delete the record
//       await deleteEducationInformation(id);

//       // Update the UI by removing the deleted item from the state
//       setEducationData((prevData) => prevData.filter((item) => item.id !== id));

//       alert("Record deleted successfully.");
//     } catch (error) {
//       console.error("Error deleting record:", error);
//       alert("Failed to delete record.");
//     }
//   };

//   const handleAlertClose = () => {
//     setShowAlert(false); // Close the alert
//   };

//   const handleAddNewClick = () => {
//     setShowAlert(true); // Show the confirmation alert
//   };

//   const toggleSection = () => {
//     setIsSectionOpen(!isSectionOpen);
//   };
//   return (
//     <>
//       <div className="collapsible-section">
//         <div
//           className="section-header"
//           onClick={() => toggleSection("educationInformation")}
//         >
//           <h5 className={`section-title ${isSectionOpen ? "open" : "closed"}`}>
//             Education Information
//           </h5>
//           <span>
//             {isSectionOpen ? (
//               <i className="fa-solid fa-angle-up"></i>
//             ) : (
//               <i className="fa-solid fa-angle-down"></i>
//             )}
//           </span>
//         </div>

//         {isSectionOpen && (
//           <div className="">
//             <button
//               type="submit"
//               className="add-new-button"
//               onClick={handleAddNewClick}
//             >
//               <i
//                 style={{ marginRight: "5px" }}
//                 className="fa fa-plus"
//                 aria-hidden="true"
//               ></i>{" "}
//               Add New
//             </button>

//             <table className="education-table">
//               <thead>
//                 <tr>
//                   <th>S.N</th>
//                   <th>Degree</th>
//                   <th>Institute</th>
//                   <th>Field</th>
//                   <th>Result</th>
//                   <th>Start</th>
//                   <th>End</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {educationData
//                   ?.filter((item) => item != null) // Ensure no undefined or null items
//                   .map((item, index) => {
//                     return (
//                       <tr key={item.id}>
//                         <td>{index + 1}</td>
//                         <td>{item.degree || "N/A"}</td>
//                         <td>{item.institute || "N/A"}</td>
//                         <td>{item.fieldOfStudy || "N/A"}</td>
//                         <td>{item.result || "N/A"}</td>
//                         <td>{item.startYear || "N/A"}</td>
//                         <td>{item.endYear || "N/A"}</td>
//                         <td>
//                           <button
//                             className="action-button edit-button"
//                             onClick={() => handleEdit(item.id)}
//                           >
//                             ✏️
//                           </button>
//                           <button
//                             className="action-button delete-button"
//                             onClick={() => handleDelete(item.id)}
//                           >
//                             🗑️
//                           </button>
//                         </td>
//                       </tr>
//                     );
//                   })}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {/* Confirmation Alert */}
//         {showAlert && (
//           <div className="confirmation-alert">
//             <div className="education-information-dialog">
//               <div className="dialog-header">
//                 <h4>Add Education Information</h4>
//                 <button className="cross-button" onClick={handleAlertClose}>
//                   <i className="bi bi-x cross-icon"></i>
//                 </button>
//               </div>

//               <form className="education-form" onSubmit={handleSubmit}>
//                 <h2>{isEditing ? "Edit Education" : "Add Education"}</h2>
//                 <div className="section personal-details">
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       name="institute"
//                       value={formData.institute}
//                       placeholder="Institute *"
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       name="degree"
//                       value={formData.degree}
//                       placeholder="Degree *"
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="section personal-details">
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       name="rollNumber"
//                       value={formData.rollNumber}
//                       placeholder="Roll Number *"
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <input
//                       type="number"
//                       name="registrationNumber"
//                       value={formData.registrationNumber}
//                       placeholder="Registration Number"
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="section personal-details">
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       name="fieldOfStudy"
//                       value={formData.fieldOfStudy}
//                       placeholder="Field Of Study *"
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <input
//                       type="number"
//                       name="result"
//                       value={formData.result}
//                       placeholder="Result"
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="section personal-details">
//                   <div className="form-group">
//                     <input
//                       type="date"
//                       name="startYear"
//                       placeholder="Starting Year"
//                       value={formData.startYear}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <input
//                       type="date"
//                       name="endYear"
//                       value={formData.endYear}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <button type="submit" className="submit-button">
//                   {isEditing ? "Update" : "Submit"}
//                 </button>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default EducationInformation;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "../../styles/user/dashboard.css";
// import "../../styles/styles.css";
// import "../../styles/user/profileSetting.css";
// import {
//   educationInformationForm,
//   fetchEducationData,
//   deleteEducationInformation,
// } from "../../services/ApiService";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const EducationInformation = () => {
//   const [isSectionOpen, setIsSectionOpen] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);
//   const [educationData, setEducationData] = useState([]);
//   const [formData, setFormData] = useState({
//     institute: "",
//     degree: "",
//     rollNumber: "",
//     registrationNumber: "",
//     fieldOfStudy: "",
//     result: "",
//     startYear: "",
//     endYear: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null); // To track editing ID
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       // Retrieve userId from localStorage
//       const storedUserData = localStorage.getItem("userData");
//       const userId = storedUserData ? JSON.parse(storedUserData).user.id : null;

//       if (!userId) {
//         toast.error("User ID is missing. Please log in again.");
//         return;
//       }

//       try {
//         console.log("Fetching education data for userId:", userId); // Debugging log

//         const response = await fetchEducationData(userId);
//         if (response && response.data) {
//           setEducationData(response.data); // Set the career data only if it's valid
//         } else {
//           toast.error("No data available or response is malformed.");
//         }
//       } catch (error) {
//         console.error("Error fetching education data:", error);
//         toast.error("Failed to fetch education data. Please try again later.");
//       }
//     };

//     fetchData();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Ensure user ID is available
//     const storedUserData = localStorage.getItem("userData");
//     const userId = storedUserData ? JSON.parse(storedUserData).user.id : null;

//     if (!userId) {
//       toast.error("User ID is missing. Please log in again.");
//       return;
//     }

//     const dataToSubmit = { ...formData, userId };

//     try {
//       let response;

//       if (isEditing) {
//         // When editing, send the ID to the backend for updating the record
//         response = await educationInformationForm(
//           { ...dataToSubmit, id: editId },
//           "PUT"
//         );
//         toast.success("Education Information updated successfully!");
//       } else {
//         // When creating new, no ID is sent
//         response = await educationInformationForm(dataToSubmit, "POST");
//         toast.success("Education Information added successfully!");
//       }

//       // Update local state based on whether we are editing or adding a new record
//       const updatedData = isEditing
//         ? educationData.map((item) =>
//             item.id === editId ? response.data : item
//           ) // Update the specific record
//         : [...educationData, response.data]; // Add new data if not editing

//       setEducationData(updatedData);

//       // Reset the form and state
//       setFormData({
//         institute: "",
//         degree: "",
//         rollNumber: "",
//         registrationNumber: "",
//         fieldOfStudy: "",
//         result: "",
//         startYear: "",
//         endYear: "",
//       });
//       setIsEditing(false);
//       setEditId(null);
//       setShowAlert(false);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       toast.error("Failed to submit education information.");
//     }
//   };

//   const handleEdit = (id) => {
//     // Find the education information item based on the ID
//     const itemToEdit = educationData.find((item) => item.id === id);

//     if (itemToEdit) {
//       setFormData({
//         institute: itemToEdit?.institute,
//         degree: itemToEdit?.degree,
//         rollNumber: itemToEdit?.rollNumber,
//         registrationNumber: itemToEdit?.registrationNumber,
//         fieldOfStudy: itemToEdit?.fieldOfStudy,
//         result: itemToEdit?.result,
//         startYear: itemToEdit?.startYear,
//         endYear: itemToEdit?.endYear,
//       });
//       setIsEditing(true); // Set editing state to true
//       setEditId(id); // Set the ID of the item being edited
//       setShowAlert(true); // Optionally show the alert for editing
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       // Call the API to delete the record
//       await deleteEducationInformation(id);

//       // Update the UI by removing the deleted item from the state
//       setEducationData((prevData) => prevData.filter((item) => item.id !== id));

//       toast.success("Record deleted successfully.");
//     } catch (error) {
//       console.error("Error deleting record:", error);
//       toast.error("Failed to delete record.");
//     }
//   };

//   const handleAlertClose = () => {
//     setShowAlert(false); // Close the alert
//   };

//   const handleAddNewClick = () => {
//     setShowAlert(true); // Show the confirmation alert
//   };

//   const toggleSection = () => {
//     setIsSectionOpen(!isSectionOpen);
//   };

//   return (
//     <>
//       <div className="collapsible-section">
//         <div
//           className="section-header"
//           onClick={() => toggleSection("educationInformation")}
//         >
//           <h5 className={`section-title ${isSectionOpen ? "open" : "closed"}`}>
//             Education Information
//           </h5>
//           <span>
//             {isSectionOpen ? (
//               <i className="fa-solid fa-angle-up"></i>
//             ) : (
//               <i className="fa-solid fa-angle-down"></i>
//             )}
//           </span>
//         </div>

//         {isSectionOpen && (
//           <div className="">
//             <button
//               type="submit"
//               className="add-new-button"
//               onClick={handleAddNewClick}
//             >
//               <i
//                 style={{ marginRight: "5px" }}
//                 className="fa fa-plus"
//                 aria-hidden="true"
//               ></i>{" "}
//               Add New
//             </button>

//             <table className="education-table">
//               <thead>
//                 <tr>
//                   <th>S.N</th>
//                   <th>Degree</th>
//                   <th>Institute</th>
//                   <th>Field</th>
//                   <th>Result</th>
//                   <th>Start</th>
//                   <th>End</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {educationData
//                   ?.filter((item) => item != null) // Ensure no undefined or null items
//                   .map((item, index) => {
//                     return (
//                       <tr key={item.id}>
//                         <td>{index + 1}</td>
//                         <td>{item.degree || "N/A"}</td>
//                         <td>{item.institute || "N/A"}</td>
//                         <td>{item.fieldOfStudy || "N/A"}</td>
//                         <td>{item.result || "N/A"}</td>
//                         <td>{item.startYear || "N/A"}</td>
//                         <td>{item.endYear || "N/A"}</td>
//                         <td>
//                           <button
//                             className="action-button edit-button"
//                             onClick={() => handleEdit(item.id)}
//                           >
//                             ✏️
//                           </button>
//                           <button
//                             className="action-button delete-button"
//                             onClick={() => handleDelete(item.id)}
//                           >
//                             🗑️
//                           </button>
//                         </td>
//                       </tr>
//                     );
//                   })}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {/* Confirmation Alert */}
//         {showAlert && (
//           <div className="confirmation-alert">
//             <div className="education-information-dialog">
//               <div className="dialog-header">
//                 <h4>Add Education Information</h4>
//                 <button className="cross-button" onClick={handleAlertClose}>
//                   <i className="bi bi-x cross-icon"></i>
//                 </button>
//               </div>

//               <form className="education-form" onSubmit={handleSubmit}>
//                 <h2>{isEditing ? "Edit Education" : "Add Education"}</h2>
//                 <div className="section personal-details">
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       name="institute"
//                       value={formData.institute}
//                       placeholder="Institute *"
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       name="degree"
//                       value={formData.degree}
//                       placeholder="Degree *"
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="section personal-details">
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       name="rollNumber"
//                       value={formData.rollNumber}
//                       placeholder="Roll Number *"
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <input
//                       type="number"
//                       name="registrationNumber"
//                       value={formData.registrationNumber}
//                       placeholder="Registration Number"
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="section personal-details">
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       name="fieldOfStudy"
//                       value={formData.fieldOfStudy}
//                       placeholder="Field Of Study *"
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <input
//                       type="number"
//                       name="result"
//                       value={formData.result}
//                       placeholder="Result"
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="section personal-details">
//                   <div className="form-group">
//                     <input
//                       type="date"
//                       name="startYear"
//                       placeholder="Starting Year"
//                       value={formData.startYear}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <input
//                       type="date"
//                       name="endYear"
//                       value={formData.endYear}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <button type="submit" className="submit-button">
//                   {isEditing ? "Update" : "Submit"}
//                 </button>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Toast Notifications */}
//       <ToastContainer />
//     </>
//   );
// };

// export default EducationInformation;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/user/dashboard.css";
import "../../styles/styles.css";
import "../../styles/user/profileSetting.css";
import {
  educationInformationForm,
  fetchEducationData,
  deleteEducationInformation,
} from "../../services/ApiService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EducationInformation = () => {
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [educationData, setEducationData] = useState([]); // Ensure it's always an array
  const [formData, setFormData] = useState({
    institute: "",
    degree: "",
    rollNumber: "",
    registrationNumber: "",
    fieldOfStudy: "",
    result: "",
    startYear: "",
    endYear: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null); // Track editing ID
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const storedUserData = localStorage.getItem("userData");
      const userId = storedUserData ? JSON.parse(storedUserData).user.id : null;

      if (!userId) {
        toast.error("User ID is missing. Please log in again.");
        return;
      }

      try {
        console.log("Fetching education data for userId:", userId);

        const response = await fetchEducationData(userId);
        if (response?.data?.length > 0) {
          console.log("Education data received:", response.data);
          setEducationData(response.data);
        
          // Ensuring state updates correctly
        setEducationData([...response.data]); // Spread operator to force re-render
        
      } else {
          console.log("No education data found for user.");
          setEducationData([]); // Prevent errors
        }
      } catch (error) {
        console.error("Error fetching education data:", error);
        setEducationData([]); // Prevent crashing
      }
    };

    fetchData();
  }, [educationData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const storedUserData = localStorage.getItem("userData");
    const userId = storedUserData ? JSON.parse(storedUserData).user.id : null;

    if (!userId) {
      toast.error("User ID is missing. Please log in again.");
      return;
    }

    const dataToSubmit = { ...formData, userId };

    try {
      let response;

      if (isEditing) {
        response = await educationInformationForm(
          { ...dataToSubmit, id: editId },
          "PUT"
        );
        toast.success("Education Information updated successfully!");
        
        setEducationData((prevData) =>
          prevData.map((item) => (item.id === editId ? response.data : item))
        );
      } else {
        response = await educationInformationForm(dataToSubmit, "POST");
        toast.success("Education Information added successfully!");
        setEducationData((prevData) => [...prevData, response.data]); // 👈 Add new entry to state immediately
      }

      setFormData({
        institute: "",
        degree: "",
        rollNumber: "",
        registrationNumber: "",
        fieldOfStudy: "",
        result: "",
        startYear: "",
        endYear: "",
      });
      setIsEditing(false);
      setEditId(null);
      setShowAlert(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit education information.");
    }
  };

  const handleEdit = (id) => {
    const itemToEdit = educationData.find((item) => item.id === id);

    if (itemToEdit) {
      setFormData({
        institute: itemToEdit?.institute,
        degree: itemToEdit?.degree,
        rollNumber: itemToEdit?.rollNumber,
        registrationNumber: itemToEdit?.registrationNumber,
        fieldOfStudy: itemToEdit?.fieldOfStudy,
        result: itemToEdit?.result,
        startYear: itemToEdit?.startYear,
        endYear: itemToEdit?.endYear,
      });
      setIsEditing(true);
      setEditId(id);
      setShowAlert(true);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEducationInformation(id);
      setEducationData((prevData) => prevData.filter((item) => item.id !== id));
      toast.success("Record deleted successfully.");
    } catch (error) {
      console.error("Error deleting record:", error);
      toast.error("Failed to delete record.");
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const handleAddNewClick = () => {
    setShowAlert(true);
  };

  const toggleSection = () => {
    setIsSectionOpen(!isSectionOpen);
  };

  return (
    <>
      <div className="collapsible-section">
        <div className="section-header" onClick={toggleSection}>
          <h5 className={`section-title ${isSectionOpen ? "open" : "closed"}`}>
            Education Information
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
          <div className="">
            <button className="add-new-button" onClick={handleAddNewClick}>
              <i className="fa fa-plus" aria-hidden="true"></i> Add New
            </button>

            <table className="education-table">
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Degree</th>
                  <th>Institute</th>
                  <th>Field</th>
                  <th>Result</th>
                  <th>Start</th>
                  <th>End</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {(Array.isArray(educationData) ? educationData : [])
                  .filter((item) => item)
                  .map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.degree || "N/A"}</td>
                      <td>{item.institute || "N/A"}</td>
                      <td>{item.fieldOfStudy || "N/A"}</td>
                      <td>{item.result || "N/A"}</td>
                      <td>{item.startYear || "N/A"}</td>
                      <td>{item.endYear || "N/A"}</td>
                      <td>
                        <button
                          className="action-button edit-button"
                          onClick={() => handleEdit(item.id)}
                        >
                          ✏️
                        </button>
                        <button
                          className="action-button delete-button"
                          onClick={() => handleDelete(item.id)}
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
        {/* Confirmation Alert */}
        {showAlert && (
          <div className="confirmation-alert">
            <div className="education-information-dialog">
              <div className="dialog-header">
                <h4>Add Education Information</h4>
                <button className="cross-button" onClick={handleAlertClose}>
                  <i className="bi bi-x cross-icon"></i>
                </button>
              </div>

              <form className="education-form" onSubmit={handleSubmit}>
                <h2>{isEditing ? "Edit Education" : "Add Education"}</h2>
                <div className="section personal-details">
                  <div className="form-group">
                    <input
                      type="text"
                      name="institute"
                      value={formData.institute}
                      placeholder="Institute *"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="degree"
                      value={formData.degree}
                      placeholder="Degree *"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="section personal-details">
                  <div className="form-group">
                    <input
                      type="text"
                      name="rollNumber"
                      value={formData.rollNumber}
                      placeholder="Roll Number *"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      name="registrationNumber"
                      value={formData.registrationNumber}
                      placeholder="Registration Number"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="section personal-details">
                  <div className="form-group">
                    <input
                      type="text"
                      name="fieldOfStudy"
                      value={formData.fieldOfStudy}
                      placeholder="Field Of Study *"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      name="result"
                      value={formData.result}
                      placeholder="Result"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="section personal-details">
                  <div className="form-group">
                    <input
                      type="date"
                      name="startYear"
                      placeholder="Starting Year"
                      value={formData.startYear}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="date"
                      name="endYear"
                      value={formData.endYear}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button type="submit" className="submit-button">
                  {isEditing ? "Update" : "Submit"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      <ToastContainer />
    </>
  );
};

export default EducationInformation;

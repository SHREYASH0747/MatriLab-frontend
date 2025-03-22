// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "../../styles/user/dashboard.css";
// import "../../styles/styles.css";
// import "../../styles/user/profileSetting.css";
// import {
//   careerInformationForm,
//   fetchCareerData,
//   deleteCareerInformation,
// } from "../../services/ApiService";

// const CareerInformation = () => {
//   const [isSectionOpen, setIsSectionOpen] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);
//   const [careerData, setCareerData] = useState([]); // Stores data fetched from the backend
//   const [formData, setFormData] = useState({
//     company: "",
//     designation: "",
//     startYear: "",
//     endYear: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null); // To track editing ID
//   const navigate = useNavigate();

//   // Fetch career data from the backend when the component loads
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetchCareerData();
//         if (response && response.data) {
//           setCareerData(response.data); // Set the career data only if it's valid
//         } else {
//           alert("No data available or response is malformed.");
//         }
//       } catch (error) {
//         console.error("Error fetching career data:", error);
//         alert("Failed to fetch career data. Please try again later.");
//       }
//     };

//     fetchData();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   // Ensure user ID is available
//   //   const storedUserData = localStorage.getItem("userData");
//   //   const userId = storedUserData ? JSON.parse(storedUserData).user.id : null;

//   //   if (!userId) {
//   //     alert("User ID is missing. Please log in again.");
//   //     return;
//   //   }

//   //   const dataToSubmit = { ...formData, userId };

//   //   try {
//   //     let response;

//   //     if (isEditing) {
//   //       // When editing, send the ID to the backend for updating the record
//   //       response = await careerInformationForm(
//   //         { ...dataToSubmit, id: editId },
//   //         "PUT"
//   //       );
//   //     } else {
//   //       // When creating new, no ID is sent
//   //       response = await careerInformationForm(dataToSubmit, "POST");
//   //     }

//   //     alert("Career Information submitted successfully!");
//   //     setShowAlert(false);

//   //     // Update local state based on whether we are editing or adding a new record
//   //     const updatedData = isEditing
//   //       ? careerData.map((item) => (item.id === editId ? response.data : item)) // Update the specific record
//   //       : [...careerData, response.data]; // Add new data if not editing

//   //     setCareerData(updatedData); // Update state with the new data

//   //     // Reset form and editing state
//   //     setFormData({
//   //       company: "",
//   //       designation: "",
//   //       startYear: "",
//   //       endYear: "",
//   //     });
//   //     setIsEditing(false);
//   //     setEditId(null);
//   //   } catch (error) {
//   //     console.error("Error submitting form:", error);
//   //     alert("Failed to submit career information.");
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   // Ensure user ID is available
//   const storedUserData = localStorage.getItem("userData");
//   const userId = storedUserData ? JSON.parse(storedUserData).user.id : null;

//   if (!userId) {
//     alert("User ID is missing. Please log in again.");
//     return;
//   }

//   const dataToSubmit = { ...formData, userId };

//   try {
//     let response;

//     if (isEditing) {
//       // When editing, send the ID to the backend for updating the record
//       response = await careerInformationForm(
//         { ...dataToSubmit, id: editId },
//         "PUT"
//       );
//       // Update the state immediately with the updated data
//       setCareerData(careerData.map((item) =>
//         item.id === editId ? response.data : item
//       ));
//     } else {
//       // When creating new, no ID is sent
//       response = await careerInformationForm(dataToSubmit, "POST");
//       // Update the state by adding the new data
//       setCareerData((prevData) => [...prevData, response.data]);
//     }

//     alert("Career Information submitted successfully!");
//     setShowAlert(false);

//     // Reset the form and editing state
//     setFormData({
//       company: "",
//       designation: "",
//       startYear: "",
//       endYear: "",
//     });
//     setIsEditing(false);
//     setEditId(null);
//   } catch (error) {
//     console.error("Error submitting form:", error);
//     alert("Failed to submit career information.");
//   }
// };

//   const handleEdit = (id) => {
//     // Find the career information item based on the ID
//     const itemToEdit = careerData.find((item) => item.id === id);

//     if (itemToEdit) {
//       setFormData({
//         company: itemToEdit?.company,
//         designation: itemToEdit?.designation,
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
//       await deleteCareerInformation(id);

//       // Update the UI by removing the deleted item from the state
//       setCareerData((prevData) => prevData.filter((item) => item.id !== id));

//       alert("Record deleted successfully.");
//     } catch (error) {
//       console.error("Error deleting record:", error);
//       alert("Failed to delete record.");
//     }
//   };

//   const handleAlertClose = () => {
//     setShowAlert(false);
//   };

//   const toggleSection = () => {
//     setIsSectionOpen(!isSectionOpen);
//   };

//   return (
//     <>
//       <div className="collapsible-section">
//         <div className="section-header" onClick={toggleSection}>
//           <h5 className={`section-title ${isSectionOpen ? "open" : "closed"}`}>
//             Career Information
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
//           <div>
//             <button
//               type="submit"
//               className="add-new-button"
//               onClick={() => setShowAlert(true)}
//             >
//               <i
//                 style={{ marginRight: "5px" }}
//                 className="fa fa-plus"
//                 aria-hidden="true"
//               ></i>
//               Add New
//             </button>

//             <table className="education-table">
//               <thead>
//                 <tr>
//                   <th>S.N</th>
//                   <th>Company</th>
//                   <th>Designation</th>
//                   <th>Start Year</th>
//                   <th>End Year</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {careerData
//                   ?.filter((item) => item != null)
//                   .map((item, index) => (
//                     <tr key={item?.id}>
//                       <td>{index + 1}</td>
//                       <td>{item?.company || "N/A"}</td>
//                       <td>{item?.designation || "N/A"}</td>
//                       <td>{item?.startYear || "N/A"}</td>
//                       <td>{item?.endYear || "N/A"}</td>
//                       <td>
//                         <button
//                           className="action-button edit-button"
//                           onClick={() => handleEdit(item?.id)}
//                         >
//                           ✏️
//                         </button>
//                         <button
//                           className="action-button delete-button"
//                           onClick={() => handleDelete(item?.id)}
//                         >
//                           🗑️
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {showAlert && (
//           <div className="confirmation-alert">
//             <div className="education-information-dialog">
//               <div className="dialog-header">
//                 <h4>
//                   {isEditing
//                     ? "Edit Career Information"
//                     : "Add Career Information"}
//                 </h4>
//                 <button className="cross-button" onClick={handleAlertClose}>
//                   <i className="bi bi-x cross-icon"></i>
//                 </button>
//               </div>
//               <form className="education-form" onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     name="company"
//                     value={formData.company}
//                     placeholder="Company *"
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     name="designation"
//                     value={formData.designation}
//                     placeholder="Designation *"
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="date"
//                     name="startYear"
//                     value={formData.startYear}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="date"
//                     name="endYear"
//                     value={formData.endYear}
//                     onChange={handleChange}
//                   />
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

// export default CareerInformation;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "../../styles/user/dashboard.css";
// import "../../styles/styles.css";
// import "../../styles/user/profileSetting.css";
// import {
//   careerInformationForm,
//   fetchCareerData,
//   deleteCareerInformation,
// } from "../../services/ApiService";

// // Import Toastify
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const CareerInformation = () => {
//   const [isSectionOpen, setIsSectionOpen] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);
//   const [careerData, setCareerData] = useState([]); // Stores data fetched from the backend
//   const [formData, setFormData] = useState({
//     company: "",
//     designation: "",
//     startYear: "",
//     endYear: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null); // To track editing ID
//   const navigate = useNavigate();

  // const fetchData = async () => {
  //   try {
  //     const storedUserData = localStorage.getItem("userData");
  //     const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
  //     const userId = parsedUserData?.user?.id;

  //     if (!userId) {
  //       toast.error("User ID is missing. Please log in again.");
  //       return;
  //     }
  //     console.log("Fetching career data for userId:", userId); // Debugging log

  //     const response = await fetchCareerData(userId);
  //     if (response && response.data) {
  //       setCareerData(response.data); // Set the career data only if it's valid
  //     } else {
  //       toast.error("No data available or response is malformed.");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching career data:", error);
  //     toast.error("Failed to fetch career data. Please try again later.");
  //   }
  // };

//   const fetchData = async () => {
//     try {
//       const storedUserData = localStorage.getItem("userData");
//       const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
//       const userId = parsedUserData?.user?.id;
  
//       if (!userId) {
//         toast.error("User ID is missing. Please log in again.");
//         return;
//       }
  
//       console.log("Fetching career data for userId:", userId); // Debugging log
  
//       const response = await fetchCareerData(userId);
  
//       if (response && response.data) {
//         setCareerData(response.data); // Set the career data only if it's valid
//       } else {
//         console.warn("No career data found. Setting empty array.");
//         setCareerData([]); // Ensure careerData is an empty array to avoid .filter() errors
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 404) {
//         console.warn("No career data found for user. Setting empty array.");
//         setCareerData([]); // Set empty array if no data found (404)
//       } else {
//         console.error("Error fetching career data:", error);
//         toast.error("Failed to fetch career data. Please try again later.");
//       }
//     }
//   };
  
//   // Fetch career data from the backend when the component loads
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Ensure user ID is available
//     // const storedUserData = localStorage.getItem("userData");
//     // const userId = storedUserData ? JSON.parse(storedUserData).user.id : null;

//     // if (!userId) {
//     //   toast.error("User ID is missing. Please log in again.");
//     //   return;
//     // }
//     const storedUserData = localStorage.getItem("userData");
//     const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
//     const userId = parsedUserData?.user?.id;

//     if (!userId) {
//       toast.error("User ID is missing. Please log in again.");
//       return;
//     }

//     const dataToSubmit = { ...formData, userId };

//     try {
//       let response;

//       if (isEditing) {
//         // When editing, send the ID to the backend for updating the record
//         response = await careerInformationForm(
//           { ...dataToSubmit, id: editId },
//           "PUT"
//         );
//         // Update the state immediately with the updated data
//         setCareerData(
//           careerData.map((item) => (item.id === editId ? response.data : item))
//         );
//       } else {
//         // When creating new, no ID is sent
//         response = await careerInformationForm(dataToSubmit, "POST");
//         // Update the state by adding the new data
//         setCareerData((prevData) => [...prevData, response.data]);
//       }

//       toast.success("Career Information submitted successfully!");

//       // Reset the form and editing state
//       setFormData({
//         company: "",
//         designation: "",
//         startYear: "",
//         endYear: "",
//       });
//       setIsEditing(false);
//       setEditId(null);
//       setShowAlert(false);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       toast.error("Failed to submit career information.");
//     }
//   };

//   const handleEdit = (id) => {
//     // Find the career information item based on the ID
//     const itemToEdit = careerData.find((item) => item.id === id);

//     if (itemToEdit) {
//       setFormData({
//         company: itemToEdit?.company,
//         designation: itemToEdit?.designation,
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
//       await deleteCareerInformation(id);

//       // Update the UI by removing the deleted item from the state
//       // setCareerData((prevData) => prevData.filter((item) => item.id !== id));
//       setCareerData((prevData) => Array.isArray(prevData) ? prevData.filter((item) => item.id !== id) : []);

      
//       toast.success("Record deleted successfully.");
//     } catch (error) {
//       console.error("Error deleting record:", error);
//       toast.error("Failed to delete record.");
//     }
//   };

//   const handleAlertClose = () => {
//     setShowAlert(false);
//   };

//   const toggleSection = () => {
//     setIsSectionOpen(!isSectionOpen);
//   };

//   return (
//     <>
//       <div className="collapsible-section">
//         <div className="section-header" onClick={toggleSection}>
//           <h5 className={`section-title ${isSectionOpen ? "open" : "closed"}`}>
//             Career Information
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
//           <div>
//             <button
//               type="submit"
//               className="add-new-button"
//               onClick={() => setShowAlert(true)}
//             >
//               <i
//                 style={{ marginRight: "5px" }}
//                 className="fa fa-plus"
//                 aria-hidden="true"
//               ></i>
//               Add New
//             </button>

//             <table className="education-table">
//               <thead>
//                 <tr>
//                   <th>S.N</th>
//                   <th>Company</th>
//                   <th>Designation</th>
//                   <th>Start Year</th>
//                   <th>End Year</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {(Array.isArray(careerData) ? careerData : [])
//                 .filter((item) => item != null)
//                 .map((item, index) => (
//                    <tr key={item.id}>
//                       <td>{index + 1}</td>
//                       <td>{item.company || "N/A"}</td>
//                       <td>{item.designation || "N/A"}</td>
//                       <td>{item.startYear || "N/A"}</td>
//                       <td>{item.endYear || "N/A"}</td>
//                       <td>
//                         <button
//                           className="action-button edit-button"
//                           onClick={() => handleEdit(item?.id)}
//                         >
//                           ✏️
//                         </button>
//                         <button
//                           className="action-button delete-button"
//                           onClick={() => handleDelete(item?.id)}
//                         >
//                           🗑️
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {showAlert && (
//           <div className="confirmation-alert">
//             <div className="education-information-dialog">
//               <div className="dialog-header">
//                 <h4>
//                   {isEditing
//                     ? "Edit Career Information"
//                     : "Add Career Information"}
//                 </h4>
//                 <button className="cross-button" onClick={handleAlertClose}>
//                   <i className="bi bi-x cross-icon"></i>
//                 </button>
//               </div>
//               <form className="education-form" onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     name="company"
//                     value={formData.company}
//                     placeholder="Company *"
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     name="designation"
//                     value={formData.designation}
//                     placeholder="Designation *"
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="date"
//                     name="startYear"
//                     value={formData.startYear}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="date"
//                     name="endYear"
//                     value={formData.endYear}
//                     onChange={handleChange}
//                   />
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

// export default CareerInformation;


import React, { useState, useEffect } from "react";
import "../../styles/user/dashboard.css";
import "../../styles/styles.css";
import "../../styles/user/profileSetting.css";
import {
  careerInformationForm,
  fetchCareerData,
  deleteCareerInformation,
} from "../../services/ApiService";

// Import Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CareerInformation = () => {
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [careerData, setCareerData] = useState([]); // Stores data fetched from the backend
  const [formData, setFormData] = useState({
    company: "",
    designation: "",
    startYear: "",
    endYear: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null); // To track editing ID

  // Fetch Career Data
  const fetchData = async () => {
    try {
      const storedUserData = localStorage.getItem("userData");
      const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
      const userId = parsedUserData?.user?.id;

      if (!userId) {
        toast.error("User ID is missing. Please log in again.");
        return;
      }

      console.log("Fetching career data for userId:", userId);

      const response = await fetchCareerData(userId);

      if (response && response.data) {
        console.log("Career data response:", response.data);
        setCareerData(Array.isArray(response.data) ? response.data : [response.data]);
      } else {
        console.warn("No career data found. Setting empty array.");
        setCareerData([]);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.warn("No career data found for user. Setting empty array.");
        setCareerData([]);
      } else {
        console.error("Error fetching career data:", error);
        toast.error("Failed to fetch career data. Please try again later.");
      }
    }
  };

  // Fetch career data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const storedUserData = localStorage.getItem("userData");
    const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
    const userId = parsedUserData?.user?.id;

    if (!userId) {
      toast.error("User ID is missing. Please log in again.");
      return;
    }

    const dataToSubmit = { ...formData, userId };

    try {
      let response;

      if (isEditing) {
        response = await careerInformationForm({ ...dataToSubmit, id: editId }, "PUT");
        setCareerData((prevData) =>
          prevData.map((item) => (item.id === editId ? response.data : item))
        );
      } else {
        response = await careerInformationForm(dataToSubmit, "POST");
        setCareerData((prevData) => [...prevData, response.data]);
      }

      toast.success("Career Information submitted successfully!");
      fetchData(); // Refresh UI after saving

      // Reset Form
      setFormData({
        company: "",
        designation: "",
        startYear: "",
        endYear: "",
      });
      setIsEditing(false);
      setEditId(null);
      setShowAlert(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit career information.");
    }
  };

  // Handle Edit
  const handleEdit = (id) => {
    const itemToEdit = careerData.find((item) => item.id === id);
    if (itemToEdit) {
      setFormData({
        company: itemToEdit?.company || "",
        designation: itemToEdit?.designation || "",
        startYear: itemToEdit?.startYear || "",
        endYear: itemToEdit?.endYear || "",
      });
      setIsEditing(true);
      setEditId(id);
      setShowAlert(true);
    }
  };

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      await deleteCareerInformation(id);
      setCareerData((prevData) => (Array.isArray(prevData) ? prevData.filter((item) => item.id !== id) : []));
      toast.success("Record deleted successfully.");
    } catch (error) {
      console.error("Error deleting record:", error);
      toast.error("Failed to delete record.");
    }
  };

  // Close Modal
  const handleAlertClose = () => {
    setShowAlert(false);
  };

  // Toggle Section
  const toggleSection = () => {
    setIsSectionOpen(!isSectionOpen);
  };

  return (
    <>
      <div className="collapsible-section">
        <div className="section-header" onClick={toggleSection}>
          <h5 className={`section-title ${isSectionOpen ? "open" : "closed"}`}>Career Information</h5>
          <span>{isSectionOpen ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</span>
        </div>
        {isSectionOpen && (
          <div>
            <button type="submit" className="add-new-button" onClick={() => setShowAlert(true)}>
              <i style={{ marginRight: "5px" }} className="fa fa-plus" aria-hidden="true"></i>Add New
            </button>

            <table className="education-table">
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Company</th>
                  <th>Designation</th>
                  <th>Start Year</th>
                  <th>End Year</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {(Array.isArray(careerData) ? careerData : [])
                  .filter((item) => item != null)
                  .map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.company || "N/A"}</td>
                      <td>{item.designation || "N/A"}</td>
                      <td>{item.startYear || "N/A"}</td>
                      <td>{item.endYear || "N/A"}</td>
                      <td>
                        <button className="action-button edit-button" onClick={() => handleEdit(item?.id)}>✏️</button>
                        <button className="action-button delete-button" onClick={() => handleDelete(item?.id)}>🗑️</button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}

        {showAlert && (
          <div className="confirmation-alert">
            <div className="education-information-dialog">
              <div className="dialog-header">
                <h4>{isEditing ? "Edit Career Information" : "Add Career Information"}</h4>
                <button className="cross-button" onClick={handleAlertClose}><i className="bi bi-x cross-icon"></i></button>
              </div>
              <form className="education-form" onSubmit={handleSubmit}>
                <input type="text" name="company" value={formData.company} placeholder="Company *" onChange={handleChange} required />
                <input type="text" name="designation" value={formData.designation} placeholder="Designation *" onChange={handleChange} required />
                <input type="date" name="startYear" value={formData.startYear} onChange={handleChange} required />
                <input type="date" name="endYear" value={formData.endYear} onChange={handleChange} />
                <button type="submit">{isEditing ? "Update" : "Submit"}</button>
              </form>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default CareerInformation;

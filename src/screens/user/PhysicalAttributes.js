import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {postPhysicalAttributes, updatePhysicalAttributes, fetchPhysicalAttributesData} from "../../services/ApiService";
import "../../styles/user/dashboard.css";
import "../../styles/styles.css";
import "../../styles/user/profileSetting.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PhysicalAttributes = () => {
  const [isOpen, setIsOpen] = useState(false); // Manage collapsible section
  const [formData, setFormData] = useState({
    complexion: "",
    height: "",
    weight: "",
    religion: "",
    eyeColor: "",
    hairColor: "",
    disability: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null); // To track editing ID

  const navigate = useNavigate();

  const fetchPhysicalData = async (userId) => {
    try {
      const response = await fetchPhysicalAttributesData(userId); 
      console.log("Fetched Physical Attributes Data:", response); // Debugging
  
      if (response && Object.keys(response).length > 0) {
        setFormData({
          complexion: response.complexion || "",
          height: response.height || "",
          weight: response.weight || "",
          religion: response.religion || "",
          eyeColor: response.eyeColor || "",
          hairColor: response.hairColor || "",
          disability: response.disability || "",
        });
        setIsEditing(true);
        setEditId(response.id); 
      } else {
        console.log("No physical attributes found for user, setting empty form.");
        setFormData({
          complexion: "",
          height: "",
          weight: "",
          religion: "",
          eyeColor: "",
          hairColor: "",
          disability: "",
        });
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Error fetching physical attributes:", error);
      // Show toast only if it's an unexpected error
      if (error.response && error.response.status !== 404) {
        toast.error("Error fetching physical attributes.");
      }
    }
  };
  

  // useEffect(() => {
  //   // Retrieve the stored user data from localStorage
  //   const storedUserData = localStorage.getItem("userData");
  //   if (storedUserData) {
  //     const parsedUserData = JSON.parse(storedUserData);
  //     const userId = parsedUserData.user.id;

  //     // Fetch physical data if available
  //     const fetchPhysicalData = async () => {
  //       try {
  //         const response = await fetchPhysicalAttributesData(userId); // Fetch data from the API
  //         if (response && response.data && response.data.length > 0) {
  //           const latestPhysicalData = response.data[0]; // Assuming the data is an array, take the first item
  //           setFormData({
  //             complexion: latestPhysicalData.complexion || "",
  //             height: latestPhysicalData.height || "",
  //             weight: latestPhysicalData.weight || "",
  //             religion: latestPhysicalData.religion || "",
  //             eyeColor: latestPhysicalData.eyeColor || "",
  //             hairColor: latestPhysicalData.hairColor || "",
  //             disability: latestPhysicalData.disability || "",
  //           });
  //           setIsEditing(true);
  //           setEditId(latestPhysicalData.id); // Set ID for update
  //         }
  //       } catch (error) {
  //         console.error("Error fetching physical attributes:", error);
  //         toast.error("Error fetching physical attributes.");
  //       }
  //     };

  //     fetchPhysicalData();
  //   } else {
  //     // Redirect to login if no user data is found
  //     navigate("/matrilab/login");
  //   }
  // }, [navigate]);

  // Handle input changes
  

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      const userId = parsedUserData.user.id;
      console.log("meri id ky hai", userId);

      if (userId) {
        console.log("Fetching data for user ID:", userId); // Debugging
        fetchPhysicalData(userId);
      }
    } else {
      navigate("/matrilab/login"); // Redirect if no user data found
    }
  }, [navigate]);  
  
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission (POST or PUT)
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Ensure user ID is available
    const storedUserData = localStorage.getItem("userData");
    const userId = storedUserData ? JSON.parse(storedUserData).user.id : null;

    if (!userId) {
      toast.error("User ID is missing. Please log in again.");
      return;
    }

    const dataToSubmit = { ...formData, userId }; // Include userId in the form data

    try {
      let response;
      if (isEditing) {
        // When editing, update the existing record (PUT)
        response = await updatePhysicalAttributes(editId, dataToSubmit);
        toast.success("Physical Attributes updated successfully!");
      } else {
        // When creating new, post the data (POST)
        response = await postPhysicalAttributes(dataToSubmit);
        toast.success("Physical Attributes added successfully!");
      }

      setTimeout(() => fetchPhysicalData(userId), 500);

      // Reset the form after submission
      setFormData({
        complexion: "",
        height: "",
        weight: "",
        religion: "",
        eyeColor: "",
        hairColor: "",
        disability: "",
      });

      setIsEditing(false);
      setEditId(null); // Reset edit ID

    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit physical attributes.");
    }
  };


  // Toggle the collapsible section
  const toggleSection = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

 
  return (
    <>
      <div className="collapsible-section">
        {/* Collapsible Header */}
        <div className="section-header" onClick={toggleSection}>
          <h5 className={`section-title ${isOpen ? "open" : "closed"}`}>
            Physical Attributes
          </h5>
          <span>
            {isOpen ? (
              <i className="fa-solid fa-angle-up"></i>
            ) : (
              <i className="fa-solid fa-angle-down"></i>
            )}
          </span>
        </div>

        {/* Collapsible Content */}
        {isOpen && (
          <form className="basic-information-form" onSubmit={handleFormSubmit}>
            <div className="section personal-details">
              <div className="form-group">
                <label>Complexion*</label>
                <input
                  type="text"
                  name="complexion"
                  value={formData.complexion}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="section personal-details">
              <div className="form-group">
                <label>Height*</label>
                <input
                  type="text"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="section personal-details">
              <div className="form-group">
                <label>Weight*</label>
                <input
                  type="text"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="section personal-details">
              <div className="form-group">
                <label>Religion*</label>
                <select
                  className="property-select"
                  name="religion"
                  value={formData.religion}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Religion</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Christian">Christian</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="section personal-details">
              <div className="form-group">
                <label>Eye Color*</label>
                <input
                  type="text"
                  name="eyeColor"
                  value={formData.eyeColor}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="section personal-details">
              <div className="form-group">
                <label>Hair Color*</label>
                <input
                  type="text"
                  name="hairColor"
                  value={formData.hairColor}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="section personal-details">
              <div className="form-group">
                <label>Disability</label>
                <input
                  type="text"
                  name="disability"
                  value={formData.disability}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-submit">
                {isEditing ? "Update" : "Submit"}
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

export default PhysicalAttributes;









































// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {postPhysicalAttributes, updatePhysicalAttributes, fetchPhysicalAttributesData} from "../../services/ApiService"; // Import post function
// // import updatePhysicalAttributes from "../../services/updatePhysicalAttributes"; // Import update function
// // import fetchPhysicalAttributesData from "../../services/fetchPhysicalAttributes"; // Import fetch function
// import "../../styles/user/dashboard.css";
// import "../../styles/styles.css";
// import "../../styles/user/profileSetting.css";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const PhysicalAttributes = () => {
//   const [formData, setFormData] = useState({
//     complexion: "",
//     height: "",
//     weight: "",
//     religion: "",
//     eyeColor: "",
//     hairColor: "",
//     disability: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null); // To track editing ID

//   const navigate = useNavigate();

//   useEffect(() => {
//     // Retrieve the stored user data from localStorage
//     const storedUserData = localStorage.getItem("userData");
//     if (storedUserData) {
//       const parsedUserData = JSON.parse(storedUserData);
//       const userId = parsedUserData.user.id;

//       // Fetch physical data if available
//       const fetchPhysicalData = async () => {
//         try {
//           const response = await fetchPhysicalAttributesData(userId); // Fetch data from the API
//           if (response && response.data && response.data.length > 0) {
//             const latestPhysicalData = response.data[0]; // Assuming the data is an array, take the first item
//             setFormData({
//               complexion: latestPhysicalData.complexion || "",
//               height: latestPhysicalData.height || "",
//               weight: latestPhysicalData.weight || "",
//               religion: latestPhysicalData.religion || "",
//               eyeColor: latestPhysicalData.eyeColor || "",
//               hairColor: latestPhysicalData.hairColor || "",
//               disability: latestPhysicalData.disability || "",
//             });
//             setIsEditing(true);
//             setEditId(latestPhysicalData.id); // Set ID for update
//           }
//         } catch (error) {
//           console.error("Error fetching physical attributes:", error);
//           toast.error("Error fetching physical attributes.");
//         }
//       };

//       fetchPhysicalData();
//     } else {
//       // Redirect to login if no user data is found
//       navigate("/matrilab/login");
//     }
//   }, [navigate]);

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission (POST or PUT)
//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     // Ensure user ID is available
//     const storedUserData = localStorage.getItem("userData");
//     const userId = storedUserData ? JSON.parse(storedUserData).user.id : null;

//     if (!userId) {
//       toast.error("User ID is missing. Please log in again.");
//       return;
//     }

//     const dataToSubmit = { ...formData, userId }; // Include userId in the form data

//     try {
//       let response;

//       if (isEditing) {
//         // When editing, update the existing record (PUT)
//         response = await updatePhysicalAttributes(editId, dataToSubmit);
//         toast.success("Physical Attributes updated successfully!");
//       } else {
//         // When creating new, post the data (POST)
//         response = await postPhysicalAttributes(dataToSubmit);
//         toast.success("Physical Attributes added successfully!");
//       }

//       // Reset the form after submission
//       setFormData({
//         complexion: "",
//         height: "",
//         weight: "",
//         religion: "",
//         eyeColor: "",
//         hairColor: "",
//         disability: "",
//       });

//       setIsEditing(false);
//       setEditId(null); // Reset edit ID

//     } catch (error) {
//       console.error("Error submitting form:", error);
//       toast.error("Failed to submit physical attributes.");
//     }
//   };

//   return (
//     <div className="physical-attributes-container">
//       {/* Form for adding or editing physical attributes */}
//       <form onSubmit={handleFormSubmit}>
//         <div>
//           <label>Complexion</label>
//           <input
//             type="text"
//             name="complexion"
//             value={formData.complexion}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Height</label>
//           <input
//             type="text"
//             name="height"
//             value={formData.height}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Weight</label>
//           <input
//             type="text"
//             name="weight"
//             value={formData.weight}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Religion</label>
//           <input
//             type="text"
//             name="religion"
//             value={formData.religion}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Eye Color</label>
//           <input
//             type="text"
//             name="eyeColor"
//             value={formData.eyeColor}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Hair Color</label>
//           <input
//             type="text"
//             name="hairColor"
//             value={formData.hairColor}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Disability</label>
//           <input
//             type="text"
//             name="disability"
//             value={formData.disability}
//             onChange={handleInputChange}
//           />
//         </div>

//         <button type="submit">
//           {isEditing ? "Update" : "Add"} Physical Attributes
//         </button>
//       </form>

//       <ToastContainer />
//     </div>
//   );
// };

// export default PhysicalAttributes;







import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  postFamilyInformation,
  updateFamilyInformation,
  fetchFamilyInformation,
} from "../../services/ApiService";
import "../../styles/user/dashboard.css";
import "../../styles/styles.css";
import "../../styles/user/profileSetting.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FamilyInformation = () => {
  // State for the collapsible section and form data
  const [isOpen, setIsOpen] = useState(false); // To toggle the collapsible section
  const [formData, setFormData] = useState({
    fathersName: "",
    fathersProfession: "",
    fathersContact: "",
    mothersName: "",
    mothersProfession: "",
    mothersContact: "",
    totalBrother: "",
    totalSister: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null); // To track editing ID

  const navigate = useNavigate();

  // // ✅ Extracted fetchFamilyData function to reuse
  // const fetchFamilyData = async (userId) => {
  //   try {
  //     const response = await fetchFamilyInformation(userId);
  //     if (response && response.data && response.data.length > 0) {
  //       const latestFamilyData = response.data[0];
  //       setFormData({
  //         fathersName: latestFamilyData.fathersName || "",
  //         fathersProfession: latestFamilyData.fathersProfession || "",
  //         fathersContact: latestFamilyData.fathersContact || "",
  //         mothersName: latestFamilyData.mothersName || "",
  //         mothersProfession: latestFamilyData.mothersProfession || "",
  //         mothersContact: latestFamilyData.mothersContact || "",
  //         totalBrother: latestFamilyData.totalBrother || 0,
  //         totalSister: latestFamilyData.totalSister || 0,
  //       });
  //       console.log("Updated Form Data:", formData); // 🚀 Debugging

  //       setIsEditing(true);
  //       setEditId(latestFamilyData.id);
  //     } else {
  //       console.log("No family data found for this user.");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching family information:", error);
  //     toast.error("Error fetching family information.");
  //   }
  // };
  // useEffect(() => {
  //   const storedUserData = localStorage.getItem("userData");
  //   if (storedUserData) {
  //     const parsedUserData = JSON.parse(storedUserData);
  //     const userId = parsedUserData.user.id;

  //     // Fetch family data if available
  //     const fetchFamilyData = async () => {
  //       try {
  //         const response = await fetchFamilyInformation(userId); // Fetch data from the API
  //         if (response && response.data && response.data.length > 0) {
  //           const latestFamilyData = response.data[0]; // Assuming the data is an array, take the first item
  //           setFormData({
  //             fathersName: latestFamilyData.fathersName || "",
  //             fathersProfession: latestFamilyData.fathersProfession || "",
  //             fathersContact: latestFamilyData.fathersContact || "",
  //             mothersName: latestFamilyData.mothersName || "",
  //             mothersProfession: latestFamilyData.mothersProfession || "",
  //             mothersContact: latestFamilyData.mothersContact || "",
  //             totalBrother: latestFamilyData.totalBrother || "",
  //             totalSister: latestFamilyData.totalSister || "",
  //           });
  //           setIsEditing(true);
  //           setEditId(latestFamilyData.id); // Set ID for update
  //         }
  //       } catch (error) {
  //         console.error("Error fetching family information:", error);
  //         toast.error("Error fetching family information."); // Show error toast
  //       }
  //     };

  //     fetchFamilyData();
  //   } else {
  //     // Redirect to login if no user data is found
  //     navigate("/matrilab/login");
  //   }
  // }, [navigate]);

  // Handle input changes
  
  const fetchFamilyData = async (userId) => {
    try {
      console.log("Fetching family data for userId:", userId); // ✅ Log userId
  
      const response = await fetchFamilyInformation(userId);
  
      console.log("API Response:", response); // ✅ Log full API response
  
      if (response && response.id) {
        console.log("Fetched Family Data:", response); // ✅ Check correct data
  
        setFormData({
          fathersName: response.fathersName || "",
          fathersProfession: response.fathersProfession || "",
          fathersContact: response.fathersContact || "",
          mothersName: response.mothersName || "",
          mothersProfession: response.mothersProfession || "",
          mothersContact: response.mothersContact || "",
          totalBrother: response.totalBrother || 0,
          totalSister: response.totalSister || 0,
        });
  
        setIsEditing(true);
        setEditId(response.id);
      } else {
        console.log("No valid family data found.");
      }
    } catch (error) {
      console.error("Error fetching family information:", error);
      toast.error("Error fetching family information.");
    }
  };
  
  

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
    
    if (parsedUserData) {
      console.log("Stored User ID:", parsedUserData.user.id); // ✅ Log correct userId
    }
    
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      const userId = parsedUserData.user.id;        
      
      if(userId) {
        fetchFamilyData(userId);
      }
    } else {
      // Redirect to login if no user data is found in localStorage
      navigate("/matrilab/login");
    }
  }, []);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Toggle the collapsible section
  const toggleSection = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
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

    // Data to be submitted (Including userId)
    const dataToSubmit = { ...formData, userId }; // Add userId to formData

    try {
      let response;

      if (isEditing) {
        // When editing, update the existing record (PUT)
        response = await updateFamilyInformation(editId, dataToSubmit);
        toast.success("Family Information updated successfully!"); // Show success toast
      } else {
        // When creating new, post the data (POST)
        response = await postFamilyInformation(dataToSubmit);
        toast.success("Family Information added successfully!"); // Show success toast
      }

      console.log("Saved Family Data:", response.data);

      setTimeout(() => fetchFamilyData(userId), 500);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit family information."); // Show error toast
    }
  };

  return (
    <>
      <div className="collapsible-section">
        <div className="section-header" onClick={toggleSection}>
          <h5 className={`section-title ${isOpen ? "open" : "closed"}`}>
            Family Information
          </h5>
          <span>
            {isOpen ? (
              <i className="fa-solid fa-angle-up"></i>
            ) : (
              <i className="fa-solid fa-angle-down"></i>
            )}
          </span>
        </div>

        {isOpen && (
          <form className="basic-information-form" onSubmit={handleFormSubmit}>
            <div className="section personal-details">
              <div className="form-group">
                <label>Father's Name*</label>
                <input
                  type="text"
                  name="fathersName"
                  value={formData.fathersName}
                  onChange={handleInputChange}
                 required
                />
              </div>
            </div>

            <div className="section personal-details">
              <div className="form-group">
                <label>Father's Profession</label>
                <input
                  type="text"
                  name="fathersProfession"
                  value={formData.fathersProfession}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Father's Contact</label>
                <input
                  type="number"
                  name="fathersContact"
                  value={formData.fathersContact}
                  onChange={handleInputChange}
                required
                />
              </div>
            </div>

            <div className="section personal-details">
              <div className="form-group">
                <label>Mother's Name</label>
                <input
                  type="text"
                  name="mothersName"
                  value={formData.mothersName}
                  onChange={handleInputChange}
                 required
                />
              </div>
            </div>

            <div className="section personal-details">
              <div className="form-group">
                <label>Mother's Profession</label>
                <input
                  type="text"
                  name="mothersProfession"
                  value={formData.mothersProfession}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Mother's Contact</label>
                <input
                  type="number"
                  name="mothersContact"
                  value={formData.mothersContact}
                  onChange={handleInputChange}
                 required
                />
              </div>
            </div>

            <div className="section personal-details">
              <div className="form-group">
                <label>Total Brothers</label>
                <input
                  type="text"
                  name="totalBrother"
                  value={formData.totalBrother}
                  onChange={handleInputChange}
                 required
                />
              </div>
              <div className="form-group">
                <label>Total Sisters</label>
                <input
                  type="text"
                  name="totalSister"
                  value={formData.totalSister}
                  onChange={handleInputChange}
                 required

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

      <ToastContainer /> {/* Ensure that ToastContainer is rendered */}
    </>
  );
};

export default FamilyInformation;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/user/dashboard.css";
import "../../styles/styles.css";
import "../../styles/user/profileSetting.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  postPartnerExpectations,
  updatePartnerExpectations,
  fetchPartnerExpectations,
} from "../../services/ApiService";

const PartnerExpectations = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    generalRequirement: "",
    minimumAge: "",
    maximumAge: "",
    minimumHeight: "",
    maximumHeight: "",
    maximumWeight: "",
    maritalStatus: "",
    religion: "",
    complexion: "",
    smokingHabits: "",
    drinkingStatus: "",
    minimumDegree: "",
    profession: "",
    languages: "",
    personality: "",
    financialCondition: "",
    familyPosition: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null); // To track editing ID
  const navigate = useNavigate();

  // ✅ Moved fetchPartnerExpectationsData outside useEffect
  const fetchPartnerExpectationsData = async (userId) => {
    try {
      const response = await fetchPartnerExpectations(userId);
      if (response && response.data && response.data.length > 0) {
        const latestPartnerExpectationsData = response.data[0];
        setFormData({
          generalRequirement: latestPartnerExpectationsData.generalRequirement || "",
          minimumAge: latestPartnerExpectationsData.minimumAge || "",
          maximumAge: latestPartnerExpectationsData.maximumAge || "",
          minimumHeight: latestPartnerExpectationsData.minimumHeight || "",
          maximumHeight: latestPartnerExpectationsData.maximumHeight || "",
          maximumWeight: latestPartnerExpectationsData.maximumWeight || "",
          maritalStatus: latestPartnerExpectationsData.maritalStatus || "",
          religion: latestPartnerExpectationsData.religion || "",
          complexion: latestPartnerExpectationsData.complexion || "",
          smokingHabits: latestPartnerExpectationsData.smokingHabits || "",
          drinkingStatus: latestPartnerExpectationsData.drinkingStatus || "",
          minimumDegree: latestPartnerExpectationsData.minimumDegree || "",
          profession: latestPartnerExpectationsData.profession || "",
          languages: latestPartnerExpectationsData.languages || "",
          personality: latestPartnerExpectationsData.personality || "",
          financialCondition: latestPartnerExpectationsData.financialCondition || "",
          familyPosition: latestPartnerExpectationsData.familyPosition || "",
        });
        setIsEditing(true);
        setEditId(latestPartnerExpectationsData.id);
      }
    } catch (error) {
      console.error("Error fetching partner expectations:", error);
      toast.error("Error fetching partner expectations.");
    }
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      const userId = parsedUserData.user.id;
      fetchPartnerExpectationsData(userId);
    } else {
      // Redirect to login if no user data is found
      navigate("/matrilab/login");
    }
  }, [navigate]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Ensure numbers are properly formatted
    const formattedValue = ["minimumAge", "maximumAge", "maximumWeight"].includes(name)
        ? value.replace(/\D/g, "") // Allow only digits
        : ["minimumHeight", "maximumHeight"].includes(name)
        ? value.replace(/[^0-9.]/g, "") // Allow numbers and a single dot
        : value; // Leave other fields unchanged

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

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
    const dataToSubmit = { 
      ...formData, 
      userId,
      minimumAge: formData.minimumAge ? parseInt(formData.minimumAge, 10): null,
      maximumAge: formData.maximumAge ? parseInt(formData.maximumAge, 10) : null,
      minimumHeight: formData.minimumHeight ? parseFloat(formData.minimumHeight) : null,
      maximumHeight: formData.maximumHeight ? parseFloat(formData.maximumHeight) : null,
      maximumWeight: formData.maximumWeight ? parseInt(formData.maximumWeight, 10) : null
    }; // Add userId to formData

    try {
      let response;

      if (isEditing) {
        // When editing, update the existing record (PUT)
        response = await updatePartnerExpectations(editId, dataToSubmit); // Update partner expectations
        toast.success("Partner Expectations updated successfully!"); // Show success toast
      } else {
        // When creating new, post the data (POST)
        response = await postPartnerExpectations(dataToSubmit); // Post new partner expectations
        toast.success("Partner Expectations added successfully!"); // Show success toast
      }

      fetchPartnerExpectationsData(userId);
      

      // Reset the form after submission
      setFormData({
        generalRequirement: "",
        minimumAge: "",
        maximumAge: "",
        minimumHeight: "",
        maximumHeight: "",
        maximumWeight: "",
        maritalStatus: "",
        religion: "",
        complexion: "",
        smokingHabits: "",
        drinkingStatus: "",
        minimumDegree: "",
        profession: "",
        languages: "",
        personality: "",
        financialCondition: "",
        familyPosition: "",
      });

      setIsEditing(false);
      setEditId(null); // Reset edit ID
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit partner expectations."); // Show error toast
    }
  };

  return (
    
    <>
      <div className="collapsible-section">
        <div className="section-header" onClick={toggleSection}>
          <h5 className={`section-title ${isOpen ? "open" : "closed"}`}>
            Partner Expectations
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
            {/* General Requirement */}
            <div className="section personal-details">
              <div className="form-group">
                <textarea
                  name="generalRequirement"
                  placeholder="General Requirement"
                  value={formData.generalRequirement}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Age Section */}
            <div className="section personal-details">
              <div className="form-group">
                <label>Minimum Age</label>
                <input
                  type="number"
                  name="minimumAge"
                  value={formData.minimumAge}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Maximum Age</label>
                <input
                  type="number"
                  name="maximumAge"
                  value={formData.maximumAge}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Height Section */}
            <div className="section personal-details">
              <div className="form-group">
                <label>Minimum Height</label>
                <input
                  type="number"
                  name="minimumHeight"
                  value={formData.minimumHeight}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Maximum Height</label>
                <input
                  type="number"
                  name="maximumHeight"
                  value={formData.maximumHeight}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Weight Section */}
            <div className="section personal-details">
              <div className="form-group">
                <label>Maximum Weight</label>
                <input
                  type="number"
                  name="maximumWeight"
                  value={formData.maximumWeight}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Marital Status</label>
                <select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleInputChange}
                  className="property-select"
                >
                  <option value="">Select</option>
                  <option value="Unmarried">Unmarried</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widow">Widow</option>
                </select>
              </div>
            </div>

            {/* Religion & Complexion Section */}
            <div className="section personal-details">
              <div className="form-group">
                <label>Religion</label>
                <select
                  name="religion"
                  value={formData.religion}
                  onChange={handleInputChange}
                  className="property-select"
                >
                  <option value="">Select</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Christian">Christian</option>
                </select>
              </div>
              <div className="form-group">
                <label>Complexion</label>
                <input
                  type="text"
                  name="complexion"
                  value={formData.complexion}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Smoking and Drinking Habits */}
            <div className="section personal-details">
              <div className="form-group">
                <label>Smoking Habits</label>
                <select
                  name="smokingHabits"
                  value={formData.smokingHabits}
                  onChange={handleInputChange}
                  className="property-select"
                >
                  <option value="">Select</option>
                  <option value="non-smoker">Non-Smoker</option>
                  <option value="occasional">Occasional</option>
                  <option value="regular">Regular</option>
                </select>
              </div>
              <div className="form-group">
                <label>Drinking Status</label>
                <select
                  name="drinkingStatus"
                  value={formData.drinkingStatus}
                  onChange={handleInputChange}
                  className="property-select"
                >
                  <option value="">Select</option>
                  <option value="non-drinker">Non-Drinker</option>
                  <option value="occasional">Occasional</option>
                  <option value="regular">Regular</option>
                </select>
              </div>
            </div>

            {/* Degree and Profession */}
            <div className="section personal-details">
              <div className="form-group">
                <label>Minimum Degree</label>
                <input
                  type="text"
                  name="minimumDegree"
                  value={formData.minimumDegree}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Profession</label>
                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Languages and Personality */}
            <div className="section personal-details">
              <div className="form-group">
                <label>Languages</label>
                <input
                  type="text"
                  name="languages"
                  value={formData.languages}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Personality</label>
                <input
                  type="text"
                  name="personality"
                  value={formData.personality}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Financial Condition and Family Position */}
            <div className="section personal-details">
              <div className="form-group">
                <label>Financial Condition</label>
                <input
                  type="text"
                  name="financialCondition" // Ensure this matches formData key
                  value={formData.financialCondition}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Family Position</label>
                <input
                  type="text"
                  name="familyPosition" // Ensure this matches formData key
                  value={formData.familyPosition}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-submit">
                Save Partner Expectations
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

export default PartnerExpectations;

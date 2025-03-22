import React, { useState } from "react";
import "../styles/registrationForm.css";
import "../styles/styles.css";
import TalukaDivision from "../components/data/talukaDivisionData";
// import { submitRegistrationForm } from "../services/MyApiService";
import MyApiService from "../services/MyApiService";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import CSS for toast notifications


function RegistrationForm() {
  const navigate = useNavigate(); // Initialize useNavigate

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedTaluk, setSelectedTaluk] = useState("");
  const [divisions, setDivisions] = useState([]);
  const [taluks, setTaluks] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    religion: "",
    gender: "",
    maritalStatus: "",
    language: "",
    profession: "",
    financialCondition: "",
    smokingHabits: "",
    drinkingStatus: "",
    presentAddress: "",
    district: "",
    division: "",
    taluk: "",
    zipCode: "",
    phoneNumber1: "",
    phoneNumber2: "",
    email: "",
    password: "",
    confirmPassword: "",
    photo: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      photo: e.target.files[0],
    }));
  };

  // Handle district change and update related divisions
  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    setDivisions(Object.keys(TalukaDivision[district] || {}));
    setSelectedDivision("");
    setTaluks([]);
    setFormData((prevData) => ({ ...prevData, district }));
  };

  // Handle division change and update related taluks
  const handleDivisionChange = (e) => {
    const division = e.target.value;
    setSelectedDivision(division);
    setTaluks(TalukaDivision[selectedDistrict][division] || []);
    setFormData((prevData) => ({ ...prevData, division }));
  };

  const handleTalukChange = (e) => {
    const taluk = e.target.value;
    setSelectedTaluk(taluk);
    setFormData((prevFormData) => ({
      ...prevFormData,
      taluk,
    }));
  };


const handleSubmit = async (e) => {
  e.preventDefault();

  // Ensure formData is valid before submitting
  if (!formData.email || !formData.password || !formData.confirmPassword) {
    toast.error("Please fill in all fields."); // Show error toast
    return;
  }

  // Check if passwords match
  if (formData.password !== formData.confirmPassword) {
    toast.error("Passwords do not match. Please try again."); // Show error toast
    return;
  }

  try {
    // Submit the registration form using the API service
    const response = await MyApiService.submitRegistrationForm(formData);

    console.log("Form submitted successfully:", response);
    toast.success("Registration successful!"); // Show success toast

    // Navigate to the login page after successful registration
    navigate("/matrilab/login");
  } catch (error) {
    console.error("Error submitting form:", error);

    // Handle error and display appropriate message
    toast.error(error.response?.data?.message || "Failed to submit the form."); // Show error toast
  }
};


  return (
    <>
    <div className="registration-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h2>Registration Form</h2>
        <div className="section personal-details">
          <div className="form-group">
            <label>First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Date of Birth *</label>
            <input
              type="date"
              name="dob"
              required
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="section personal-details">
          <div className="form-group">
            <label>Religion *</label>
            <select
              name="religion"
              required
              className="property-select"
              value={formData.religion}
              onChange={handleChange}
            >
              <option value="Select">Select</option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Christian">Christian</option>
            </select>
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select
              name="gender"
              required
              className="property-select"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="Select">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label>Marital Status *</label>
            <select
              name="maritalStatus"
              required
              className="property-select"
              value={formData.maritalStatus}
              onChange={handleChange}
            >
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
            <input
              type="text"
              name="language"
              value={formData.language}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Profession *</label>
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Financial Condition *</label>
            <input
              type="text"
              name="financialCondition"
              value={formData.financialCondition}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="section personal-details">
          <div className="form-group">
            <label>Smoking Habits *</label>
            <select
              name="smokingHabits"
              required
              className="property-select"
              value={formData.smokingHabits}
              onChange={handleChange}
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
              name="drinkingStatus"
              required
              className="property-select"
              value={formData.drinkingStatus}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="non-drinker">Non-Drinker</option>
              <option value="occasional">Occasional</option>
              <option value="regular">Regular</option>
            </select>
          </div>
          <div className="form-group">
            <label>Present Address *</label>
            <input
              type="text"
              name="presentAddress"
              value={formData.presentAddress}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="section personal-details">
          <div className="form-group">
            <label>District</label>
            <select
              name="district"
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
              name="division"
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
          <div className="form-group">
            <label>Taluk</label>
            <select name="taluk"
              onChange={handleTalukChange}
              value={selectedTaluk}
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
        </div>

        <div className="section contact-details">
          <div className="form-group">
            <label>Zip Code *</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Phone Number 1 *</label>
            <input
              type="tel"
              name="phoneNumber1"
              value={formData.phoneNumber1}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number 2 </label>
            <input
              type="tel"
              name="phoneNumber2"
              value={formData.phoneNumber2}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="section contact-details">
          <div className="form-group">
            <label>Email ID</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              minLength={6}
            />
            {formData.password.length > 0 && formData.password.length < 6 && (
              <span style={{ color: 'red' }}>
                Password must be at least 6 characters
              </span>
            )}
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              minLength={6}
            />
            {formData.password.length > 0 && formData.password.length < 6 && (
              <span style={{ color: 'red' }}>
                Password must be at least 6 characters
              </span>
            )}
          </div>
        </div>

        {/* <div className="section photo-upload">
          <label>Upload Photo</label>
          <input type="file" name="photo" onChange={handleFileChange} />
        </div> */}
        <div className="form-group">
          <label>Photo</label>
          <input type="file" name="photo" onChange={handleFileChange} />
        </div>

        <div className="accept-terms">
          <div>
            <input type="checkbox" required className="accept-terms-checkbox" />
          </div>
          <p>I accept the Terms and Conditions</p>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
    < ToastContainer/>
    </>
  );
}

export default RegistrationForm;

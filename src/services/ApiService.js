import axios from "axios";
import { data } from "react-router-dom";

// Function to get headers with Authorization and User ID
const getHeader = () => {
  const token = localStorage.getItem("token");
  console.log(token);

  if (!token) {
    alert("Authentication token is missing. Please log in again.");
    throw new Error("Token not found");
  }

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

// Function to submit career information (both POST and PUT)
const careerInformationForm = async (formData, method = "POST") => {
  try {
    const url = "http://localhost:8080/api/career";
    const headers = getHeader();

    if (method === "POST") {
      // Create a new career record
      const response = await axios.post(url, formData, { headers });
      return response.data;
    } else if (method === "PUT") {
      // Update an existing career record
      const response = await axios.put(`${url}/update/${formData.id}`, formData, {
        headers,
      });
      return response.data;
    }
  } catch (error) {
    console.error("Error submitting Career Information :", error);
    throw new Error("Error submitting Career Information Form");
  }
};

const deleteCareerInformation = async (id) => {
  try {
    const url = `http://localhost:8080/api/career/${id}`;
    const headers = getHeader(); // Ensure you send the token in the request

    const response = await axios.delete(url, { headers }); // Make DELETE request
    return response.data; // Assuming the backend sends a success message or status
  } catch (error) {
    console.error("Error deleting career information:", error);
    throw new Error("Error deleting Career Information");
  }
};

const fetchCareerData = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/career/user/${userId}`);
    return response;
  } catch (error) {
    console.error("Error fetching career data:", error);
    throw error;
  }
};

// Function to submit education information (both POST and PUT)
const educationInformationForm = async (formData, method = "POST") => {
  try {
    const url = "http://localhost:8080/api/education";
    const headers = getHeader();

    if (method === "POST") {
      // Create a new career record
      const response = await axios.post(url, formData);
      return response.data;
    } else if (method === "PUT") {
      // Update an existing career record
      const response = await axios.put(`${url}/update/${formData.id}`, formData, {
        headers,
      });
      return response.data;
    }
  } catch (error) {
    console.error("Error submitting Education Information :", error);
    throw new Error("Error submitting Education Information Form");
  }
};

// Function to fetch education data
const fetchEducationData = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/education/user/${userId}`);
    console.log("Education data received:", response.data);

    return response.data ? response : { data: [] };
  } catch (error) {
    console.error("Error fetching career data:", error);
    throw { data: [] };
  }
};

const deleteEducationInformation = async (id) => {
  try {
    const url = `http://localhost:8080/api/education/${id}`;
    const headers = getHeader(); // Ensure you send the token in the request

    const response = await axios.delete(url, { headers }); // Make DELETE request
    return response.data; // Assuming the backend sends a success message or status
  } catch (error) {
    console.error("Error deleting Education information:", error);
    throw new Error("Error deleting Education Information");
  }
};

// // Function to submit education information (both POST and PUT)
// const physicalAttributesForm = async (formData, method = "POST") => {
//   try {
//     const url = "http://localhost:8080/api/physical-attributes";
//     const headers = getHeader();

//     if (method === "POST") {
//       // Create a new career record
//       const response = await axios.post(url, formData );
//       return response.data;
//     } else if (method === "PUT") {
//       // Update an existing career record
//       const response = await axios.put(`${url}/${formData.id}`, formData, {
//         headers,
//       });
//       return response.data;
//     }
//   } catch (error) {
//     console.error("Error submitting Education Information :", error);
//     throw new Error("Error submitting Education Information Form");
//   }
// };

// Function to submit a new physical attributes record (POST)
const postPhysicalAttributes = async (formData) => {
  try {
    const url = "http://localhost:8080/api/physical-attributes";
    const headers = getHeader(); // Assuming getHeader sets the necessary authorization headers

    const response = await axios.post(url, formData, { headers });
    return response.data;
  } catch (error) {
    console.error("Error posting physical attributes:", error);
    throw new Error("Error posting physical attributes.");
  }
};

// Function to update an existing physical attributes record (PUT)
const updatePhysicalAttributes = async (id, formData) => {
  try {
    const url = `http://localhost:8080/api/physical-attributes/${id}`;
    const headers = getHeader(); // Assuming getHeader sets the necessary authorization headers

    const response = await axios.put(url, formData, { headers });
    return response.data;
  } catch (error) {
    console.error("Error updating physical attributes:", error);
    throw new Error("Error updating physical attributes.");
  }
};

// Function to fetch education data
const fetchPhysicalAttributesData = async (userId) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/physical-attributes/user/${userId}`
    );
    console.log("Fetched Physical Attributes Data:", response.data); // Debugging
    return response.data;
  } catch (error) {
    console.error("Error fetching career data:", error);
    throw error;
  }
};

const deletePhysicalAttributes = async (id) => {
  try {
    const url = `http://localhost:8080/api/physical-attributes/${id}`;
    const headers = getHeader(); // Ensure you send the token in the request

    const response = await axios.delete(url, { headers }); // Make DELETE request
    return response.data; // Assuming the backend sends a success message or status
  } catch (error) {
    console.error("Error deleting Education information:", error);
    throw new Error("Error deleting Education Information");
  }
};

// Function to submit a new physical attributes record (POST)
const postFamilyInformation = async (formData) => {
  try {
    const url = "http://localhost:8080/api/family-information";
    const headers = getHeader(); // Assuming getHeader sets the necessary authorization headers

    const response = await axios.post(url, formData, { headers });
    return response.data;
  } catch (error) {
    console.error("Error posting Family Information:", error);
    throw new Error("Error posting Family Information.");
  }
};

// Function to update an existing physical attributes record (PUT)
const updateFamilyInformation = async (id, formData) => {
  try {
    const url = `http://localhost:8080/api/family-information/${id}`;
    const headers = getHeader(); // Assuming getHeader sets the necessary authorization headers

    const response = await axios.put(url, formData, { headers });
    return response.data;
  } catch (error) {
    console.error("Error updating Family Information:", error);
    throw new Error("Error updating Family Information.");
  }
};

// Function to fetch education data
const fetchFamilyInformation = async (userId) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/family-information/user/${userId}`
    );
    console.log("Fetched Family Information Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching Family Information:", error);
    throw error;
  }
};

// Function to submit a new physical attributes record (POST)
const postPartnerExpectations = async (formData) => {
  try {
    const url = "http://localhost:8080/api/partner-expectations";
    const headers = getHeader(); // Assuming getHeader sets the necessary authorization headers

    const response = await axios.post(url, formData, { headers });
    return response.data;
  } catch (error) {
    console.error("Error posting Partner Expectations :", error);
    throw new Error("Error posting Partner Expectations.");
  }
};

// Function to update an existing physical attributes record (PUT)
const updatePartnerExpectations = async (id, formData) => {
  try {
    const url = `http://localhost:8080/api/partner-expectations/${id}`;
    const headers = getHeader(); // Assuming getHeader sets the necessary authorization headers

    const response = await axios.put(url, formData, { headers });
    return response.data;
  } catch (error) {
    console.error("Error updating Partner Expectations :", error);
    throw new Error("Error updating Partner Expectations .");
  }
};

// Function to fetch education data
const fetchPartnerExpectations = async (userId) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/partner-expectations/user/${userId}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching Partner Expectations :", error);
    throw error;
  }
};

// const getBasicInformationByUserId = async (userId) => {
//   try {
//     const response = await axios.get(`http://localhost:8080/api/basic-information/${userId}`);
//     return response.data;
//   } catch (error) {
//     if (error.response && error.response.status === 404) {
//       console.warn("No basic information found for userId:", userId);
//       return null;  // Handle gracefully
//     }
//     console.error("Error fetching existing basic information:", error);
//     throw error;
//   }
// };
// const getBasicInformationByUserId = async (userId) => {
//   try {
//     const response = await axios.get(`http://localhost:8080/api/basic-information/user/${userId}`);
//     return response.data;  // Ensure the response is in the expected format
//   } catch (error) {
//     if (error.response && error.response.status === 404) {
//       console.warn("No basic information found for userId:", userId);
//       return null;
//     }
//     console.error("Error fetching existing basic information:", error);
//     throw error;
//   }
// };

const getBasicInformationByUserId = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/basic-information/user/${userId}`);
    if (response.data && Object.keys(response.data).length > 0) {
      return response.data; // Ensure response contains meaningful data
    } else {
      console.warn(`Basic information is empty or undefined for userId: ${userId}`);
      return null;
    }
  } catch (error) {
    if (error.response) {
      // Handle specific HTTP status codes
      if (error.response.status === 404) {
        console.warn(`No basic information found for userId: ${userId}`);
        return null;
      } else if (error.response.status === 500) {
        console.error("Server error while fetching basic information:", error.response.data);
      } else {
        console.error(`Unexpected error (status ${error.response.status}):`, error.response.data);
      }
    } else if (error.request) {
      // Network-related issue
      console.error("No response received from server:", error.request);
    } else {
      // Unknown error
      console.error("Unexpected error fetching basic information:", error.message);
    }
    return null; // Prevents throwing an unhandled error
  }
};



// Function to submit a new physical attributes record (POST)
// const postBasicInformation = async (formData) => {
//   try {
//     const url = "http://localhost:8080/api/basic-information";
//     const headers = getHeader(); // Assuming getHeader sets the necessary authorization headers

//     const response = await axios.post(url, formData, { headers });
//     return response.data;
//   } catch (error) {
//     console.error("Error posting Basic Information:", error);
//     throw new Error("Error posting Basic Information.");
//   }
// };
const postBasicInformation = async (data) => {
  try {
    const response = await axios.post("http://localhost:8080/api/basic-information", data);
    return response.data; // Assuming the response contains the newly created data
  } catch (error) {
    console.error("Error posting basic information:", error);
    throw error;
  }
};


// Function to update an existing physical attributes record (PUT)
// const updateBasicInformation = async (id, formData) => {
//   try {
//     const url = `http://localhost:8080/api/basic-information/${id}`;
//     const headers = getHeader(); // Assuming getHeader sets the necessary authorization headers

//     const response = await axios.put(url, formData, { headers });
//     return response.data;
//   } catch (error) {
//     console.error("Error updating Family Information:", error);
//     throw new Error("Error updating Family Information.");
//   }
// };
// const updateBasicInformation = async (id, data) => {
//   try {
//     const response = await axios.put(`http://localhost:8080/api/basic-information/${id}`, data);
//     return response.data; // Assuming the response contains the updated data
//   } catch (error) {
//     console.error("Error updating basic information:", error);
//     throw error;
//   }
// };

// ✅ Update (PUT) basic information & refresh UI state
const updateBasicInformation = async (id, data, userId, setBasicInfo) => {
  try {
    const response = await axios.put(`http://localhost:8080/api/basic-information/${id}`, data);
    
    // ✅ Immediately update state with the new data
    setBasicInfo(response.data);

    // ✅ Refetch updated data from backend (ensures sync)
    const updatedData = await getBasicInformationByUserId(userId);
    setBasicInfo(updatedData); 

    return response.data;
  } catch (error) {
    console.error("Error updating basic information:", error);
    throw error;
  }
};

// Function to fetch education data
// const fetchBasicInformation = async () => {
//   try {
//     const response = await axios.get(
//       `http://localhost:8080/api/basic-information`
//     );
//     return response;
//   } catch (error) {
//     console.error("Error fetching basic Information:", error);
//     throw error;
//   }
// };


const fetchUserInformation = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:8080/users/get-by-id/${userId}`);
    return response.data;  // Return the actual response data
  } catch (error) {
    console.error("Error fetching User Information:", error);
    throw error;  // Rethrow the error to propagate it
  }
};



// Function to save the interested user to the database
const saveInterest = async (userProfile) => {
  try {
    // Log the userProfile to ensure it's being sent correctly
    console.log("Sending user profile to backend:", userProfile);
    
    const response = await axios.post('http://localhost:8080/api/interest', userProfile);
    
    // Log the response for debugging purposes
    console.log("Response from API:", response);

    // Check if the response is successful
    if (response.status === 201 && response.data) {
      return { success: true, data: response.data };
    } else {
      throw new Error("Failed to save interest, please try again.");
    }
  } catch (error) {
    console.error("Error saving interest:", error);
    return { success: false, message: error.message || "Unable to save interest." };
  }
};


// Function to fetch all interest data
const fetchAllInterests = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/interest');
    console.log("Fetching all interest data", response);
    
    return response.data;  // Return the response data which should be a list of interests
  } catch (error) {
    console.error("Error fetching all user interests:", error);
    throw error;
  }
};


// Function to fetch single interest data
const fetchUserInterestById = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/interest/${userId}`);
    return response.data;  // Return the response data which should be the user's interest
  } catch (error) {
    console.error(`Error fetching interest for user ID ${userId}:`, error);
    throw error;
  }
};

// Function to save the interested user to the database
const saveIgnored = async (userProfile) => {
  try {
    // Log the userProfile to ensure it's being sent correctly
    console.log("Sending user profile to backend:", userProfile);
    
    const response = await axios.post('http://localhost:8080/api/ignored-profile', userProfile);
    
    // Log the response for debugging purposes
    console.log("Response from API:", response);

    // Check if the response is successful
    if (response.status === 201 && response.data) {
      return { success: true, data: response.data };
    } else {
      throw new Error("Failed to save ignored, please try again.");
    }
  } catch (error) {
    console.error("Error saving ignored:", error);
    return { success: false, message: error.message || "Unable to save ignored." };
  }
};


// Function to fetch all interest data
const fetchAllIgnored = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/ignored-profile');
    console.log("Fetching all ignored data", response);
    
    return response.data;  // Return the response data which should be a list of interests
  } catch (error) {
    console.error("Error fetching all user ignored:", error);
    throw error;
  }
};


// Function to save the interested user to the database
const saveShortlist = async (userProfile) => {
  try {
    // Log the userProfile to ensure it's being sent correctly
    console.log("Sending user profile to backend:", userProfile);
    
    const response = await axios.post('http://localhost:8080/api/shortlisted-profile', userProfile);
    
    // Log the response for debugging purposes
    console.log("Response from API:", response);

    // Check if the response is successful
    if (response.status === 201 && response.data) {
      return { success: true, data: response.data };
    } else {
      throw new Error("Failed to save shortlisted, please try again.");
    }
  } catch (error) {
    console.error("Error saving shortlisted:", error);
    return { success: false, message: error.message || "Unable to save shortlisted." };
  }
};


// Function to fetch all interest data
const fetchAllShortlisted = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/api/shortlisted-profile');
    console.log("Fetching all shortlisted data", response);
    
    return response.data;  
  } catch (error) {
    console.error("Error fetching all user shortlisted:", error);
    throw error;
  }
};


// Function to get all users
const getAllUsers = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/users/get-all`, {
      headers: getHeader(), // Include the header with Authorization
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching all users:", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};

export {
  careerInformationForm,
  fetchCareerData,
  deleteCareerInformation,
  educationInformationForm,
  fetchEducationData,
  deleteEducationInformation,
  // physicalAttributesForm,
  postPhysicalAttributes,
  updatePhysicalAttributes,
  fetchPhysicalAttributesData,
  deletePhysicalAttributes,
  postFamilyInformation,
  updateFamilyInformation,
  fetchFamilyInformation,
  postPartnerExpectations,
  updatePartnerExpectations,
  fetchPartnerExpectations,
  getBasicInformationByUserId,
  postBasicInformation,
  updateBasicInformation,
  fetchUserInformation,
  saveInterest,
  fetchAllInterests,
  fetchUserInterestById,
  saveIgnored,
  fetchAllIgnored,
  saveShortlist,
  fetchAllShortlisted,
  getAllUsers,
  getHeader,
};

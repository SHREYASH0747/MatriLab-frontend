// import axios from "axios";

// // Function to get headers with Authorization and User ID
// // Function to get headers with Authorization and User ID
// const getHeader = () => {
//   const token = localStorage.getItem("token");
//   console.log(token);

// if (!token) {
//     alert("Authentication token is missing. Please log in again.");
//     throw new Error("Token not found");
//   }

//  return {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${token}`,
    
//   };
// };

// // Register a new user
// const submitRegistrationForm = async (registration) => {
//   try {
//     const response = await axios.post(
//       `http://localhost:8080/auth/register`,
//       registration
//     );

//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error during registration:",
//       error.response?.data || error.message
//     );
//     throw new Error(
//       error.response?.data?.message || "An error occurred during registration."
//     );
//   }
// };

// const loginUserForm = async (loginDetails) => {
//   try {
//     const response = await axios.post(
//       `http://localhost:8080/auth/login`,
//       loginDetails
//     );
//     console.log("ApiResponse: ", response);

//     // Store the entire response in localStorage
//     if (response.data) {
//       localStorage.setItem("userData", JSON.stringify(response.data));
//     }

//     return response.data;
//   } catch (error) {
//     console.error("Error during login:", error.response?.data || error.message);
//     throw new Error(
//       error.response?.data?.message || "An error occurred during login."
//     );
//   }
// };

// // Submit physical attributes with userId
// // const submitBasicDetails = async (formData) => {
// //   try {
// //     const response = await axios.post(
// //       `http://localhost:8080/api/basic-information`,
// //       formData);
// //     return response.data;
// //   } catch (error) {
// //     console.error("Error submitting Basic Details:", error);
// //     throw new Error("Error submitting Basic Details: ");
// //   }
// // };
// // // Function to get all users
// // const getBasicDetails = async () => {
// //   console.log("log 1 ");

// //   try {
// //     const response = await axios.get(
// //       `http://localhost:8080/api/basic-information`,
// //       {
// //         headers: getHeader(), // Include the header with Authorization
// //       }
// //     );
// //     console.log("basic Details page response : ", response);
// //     return response.data;
// //   } catch (error) {
// //     console.error("Error fetching all Basic Details:", error);
// //     throw error; // Rethrow the error to handle it in the calling function
// //   }
// // };
// // const updateBasicDetails = async (id, updatedData) => {
// //   console.log(`Updating basic details for ID: ${id}`);

// //   try {
// //     const response = await axios.put(
// //       `http://localhost:8080/api/basic-information/${id}`,  // API endpoint with `id`
// //       updatedData,  // The data to update the resource
// //       {
// //         headers: getHeader(), // Include the header with Authorization
// //       }
// //     );
// //     console.log("Update response: ", response);
// //     return response.data; // Return updated data or response
// //   } catch (error) {
// //     console.error("Error updating basic details:", error.message);
// //     // Log error details
// //     if (error.response) {
// //       // Server responded with a status other than 2xx
// //       console.error("Server responded with error:", error.response.data);
// //     } else if (error.request) {
// //       // No response was received from the server
// //       console.error("No response received:", error.request);
// //     } else {
// //       // Other errors
// //       console.error("Unexpected error:", error.message);
// //     }

// //     throw error; // Rethrow the error for the calling function to handle
// //   }
// // };


// // Function to submit basic details (POST request)
// const submitBasicDetails = async (formData) => {
//   try {
//     const response = await axios.post(
//       `http://localhost:8080/api/basic-information`,
//       formData
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error submitting Basic Details:", error);
//     throw new Error("Error submitting Basic Details.");
//   }
// };

// // Function to get all basic details (GET request)
// const getBasicDetails = async () => {
//   console.log("Fetching all basic details");

//   try {
//     const response = await axios.get(
//       `http://localhost:8080/api/basic-information`,
//       {
//         headers: getHeader(), // Include the header with Authorization (if needed)
//       }
//     );
//     console.log("Basic Details response:", response);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching all Basic Details:", error);
//     throw error;
//   }
// };

// // Function to get basic details by ID (GET request)
// const getBasicDetailsById = async (id) => {
//   console.log(`Fetching basic details for ID: ${id}`);

//   try {
//     const response = await axios.get(
//       `http://localhost:8080/api/basic-information/${id}`,
//       {
//         headers: getHeader(), // Include the header with Authorization (if needed)
//       }
//     );
//     console.log("Fetched basic details by ID:", response);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching basic details by ID:", error);
//     throw error;
//   }
// };

// // Function to update basic details (PUT request)
// const updateBasicDetails = async (id, updatedData) => {
//   console.log(`Updating basic details for ID: ${id}`);

//   try {
//     const response = await axios.put(
//       `http://localhost:8080/api/basic-information/${id}`, // API endpoint with `id`
//       updatedData, // The data to update the resource
//       {
//         headers: getHeader(), // Include the header with Authorization (if needed)
//       }
//     );
//     console.log("Update response:", response);
//     return response.data; // Return updated data or response
//   } catch (error) {
//     console.error("Error updating basic details:", error.message);
//     // Log error details
//     if (error.response) {
//       // Server responded with a status other than 2xx
//       console.error("Server responded with error:", error.response.data);
//     } else if (error.request) {
//       // No response was received from the server
//       console.error("No response received:", error.request);
//     } else {
//       // Other errors
//       console.error("Unexpected error:", error.message);
//     }

//     throw error; // Rethrow the error for the calling function to handle
//   }
// };

// // Submit physical attributes with userId
// const submitPhysicalAttributes = async (formData) => {
//   try {
//     const response = await axios.post(
//       `http://localhost:8080/api/physical-attributes`,
//       formData);
//     return response.data;
//   } catch (error) {
//     console.error("Error submitting physical attributes:", error);
//     throw new Error("Error submitting physical attributes");
//   }
// };

// // Submit Family Information with userId
// const submitFamilyInformation = async (formData) => {
//   try {
//     const response = await axios.post(
//       `http://localhost:8080/api/family-attributes`,
//       formData
//       //   {
//       //     headers: getHeader(), // Include the header with Authorization
//       //   }
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error submitting Family Information:", error);
//     throw new Error("Error submitting Family Information");
//   }
// };

// const submitPartnerExpectations = async (formData) => {
//   try {
//     const response = await axios.post(
//       `http://localhost:8080/api/partner-expectations`,
//       formData
//       //   {
//       //     headers: getHeader(), // Include the header with Authorization
//       //   }
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error submitting Partner Expectations:", error);
//     throw new Error("Error submitting Partner Expectations");
//   }
// };

// const careerInformationForm = async (formData) => {
//   try {
//     const response = await axios.post(
//       `http://localhost:8080/api/career`,
//       formData
//       //   {
//       //     headers: getHeader(), // Include the header with Authorization
//       //   }
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error submitting Career Information :", error);
//     throw new Error("Error submitting Career Information Form");
//   }
// };

// // Function to fetch career data
//  const fetchCareerData = async () => {
//   try {
//     const response = await axios.get(`http://localhost:8080/api/career`);
//     return response;
//   } catch (error) {
//     console.error("Error fetching career data:", error);
//     throw error;
//   }
// };
// // Function to fetch career data
// const fetchEducationData = async () => {
//   try {
//     const response = await axios.get(`http://localhost:8080/api/education`);
//     return response;
//   } catch (error) {
//     console.error("Error fetching career data:", error);
//     throw error;
//   }
// };

// const educationInformationForm = async (formData) => {
//   try {
//     const response = await axios.post(
//       `http://localhost:8080/api/education`,
//       formData
//       //   {
//       //     headers: getHeader(), // Include the header with Authorization
//       //   }
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error submitting Education Information :", error);
//     throw new Error("Error submitting Education Information Form");
//   }
// };


// // Function to get all users
// const getAllUsers = async () => {
//   console.log("log 1 ");

//   try {
//     const response = await axios.get(
//       `http://localhost:8080/users/get-all`,
//       {
//         headers: getHeader(), // Include the header with Authorization
//       }
//     );
//     console.log("member page response : ", response);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching all users:", error);
//     throw error; // Rethrow the error to handle it in the calling function
//   }
// };

// export  {
//   submitRegistrationForm,
//   loginUserForm,
//   submitBasicDetails,
//   getBasicDetails,
//   getBasicDetailsById,
//    updateBasicDetails,
//   submitPhysicalAttributes,
//   submitFamilyInformation,
//   submitPartnerExpectations,
//   careerInformationForm,
//   fetchCareerData,
//   fetchEducationData,
//   educationInformationForm,
//   getAllUsers,
  
//   getHeader,
  
// };







// ..........................////  change code from component to class code ............/////////////////..............//////////////////


import axios from "axios";

class MyApiService {
  static BASE_URL = "http://localhost:8080";

  // Function to get headers with Authorization
  static getHeader() {
    const token = localStorage.getItem("token");
    console.log("Token:", token);
    if (!token) {
      alert("Authentication token is missing. Please log in again.");
      throw new Error("Token not found");
    }

    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  }

  /** AUTH **/

  // Register a new user
  static async submitRegistrationForm(registration) {
    try {
      const response = await axios.post(
        `${this.BASE_URL}/auth/register`,
        registration,
        // { headers: this.getHeader() }
      );
      return response.data;
    } catch (error) {
      console.error("Error during registration:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "An error occurred during registration.");
    }
  }

  // Login a user
  static async loginUserForm(loginDetails) {
    try {
      const response = await axios.post(
        `${this.BASE_URL}/auth/login`,
        loginDetails,
        // { headers: this.getHeader() }
      );
      localStorage.setItem("userData", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error("Error during login:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "An error occurred during login.");
    }
  }

  /** BASIC DETAILS **/

  // static async submitBasicDetails(formData) {
  //   try {
  //     const response = await axios.post(
  //       `${this.BASE_URL}/api/basic-information`,
  //       formData,
  //       //  { headers: this.getHeader() }
  //     );

  //     console.log("basic data response received", response);
      
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error submitting Basic Details:", error);
  //     throw new Error("Error submitting Basic Details.");
  //   }
  // }

  // static async getBasicDetails() {
  //   try {
  //     const response = await axios.get(
  //       `${this.BASE_URL}/api/basic-information`,
  //       { headers: this.getHeader() }
  //     );
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error fetching all Basic Details:", error);
  //     throw error;
  //   }
  // }

  // static async getBasicDetailsById(id) {
  //   try {
  //     const response = await axios.get(
  //       `${this.BASE_URL}/api/basic-information/${id}`,
  //       { headers: this.getHeader() }
  //     );
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error fetching basic details by ID:", error);
  //     throw error;
  //   }
  // }

  static async updateBasicDetails(id, updatedData) {
    try {
      const response = await axios.put(
        `${this.BASE_URL}/api/basic-information/${id}`,
        updatedData,
        // { headers: this.getHeader() }
      );
      return response.data;
    } catch (error) {
      console.error("Error updating basic details:", error);
      throw error;
    }
  }

  /** PHYSICAL ATTRIBUTES **/

  static async submitPhysicalAttributes(formData) {
    try {
      const response = await axios.post(
        `${this.BASE_URL}/api/physical-attributes`,
        formData,
         { headers: this.getHeader() }
      );
      return response.data;
    } catch (error) {
      console.error("Error submitting physical attributes:", error);
      throw new Error("Error submitting physical attributes");
    }
  }

  /** FAMILY INFORMATION **/

  static async submitFamilyInformation(formData) {
    try {
      const response = await axios.post(
        `${this.BASE_URL}/api/family-attributes`,
        formData,
        { headers: this.getHeader() }
      );
      return response.data;
    } catch (error) {
      console.error("Error submitting Family Information:", error);
      throw new Error("Error submitting Family Information");
    }
  }

  /** PARTNER EXPECTATIONS **/

  static async submitPartnerExpectations(formData) {
    try {
      const response = await axios.post(
        `${this.BASE_URL}/api/partner-expectations`,
        formData,
        // { headers: this.getHeader() }
      );
      return response.data;
    } catch (error) {
      console.error("Error submitting Partner Expectations:", error);
      throw new Error("Error submitting Partner Expectations");
    }
  }

  /** CAREER INFORMATION **/

  static async careerInformationForm(formData) {
    try {
      const response = await axios.post(
        `${this.BASE_URL}/api/career`,
        formData,
        { headers: this.getHeader() }
      );
      return response.data;
    } catch (error) {
      console.error("Error submitting Career Information:", error);
      throw new Error("Error submitting Career Information Form");
    }
  }

  static async fetchCareerData() {
    try {
      const response = await axios.get(`${this.BASE_URL}/api/career`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching career data:", error);
      throw error;
    }
  }

  /** EDUCATION INFORMATION **/

  static async educationInformationForm(formData) {
    try {
      const response = await axios.post(
        `${this.BASE_URL}/api/education`,
        formData,
        //  { headers: this.getHeader() }
      );
      return response.data;
    } catch (error) {
      console.error("Error submitting Education Information:", error);
      throw new Error("Error submitting Education Information Form");
    }
  }

  static async fetchEducationData() {
    try {
      const response = await axios.get(`${this.BASE_URL}/api/education`, {
        // headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching education data:", error);
      throw error;
    }
  }

  /** USERS **/

  static async getAllUsers() {
    try {
      const response = await axios.get(`${this.BASE_URL}/users/get-all`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching all users:", error);
      throw error;
    }
  }
}

export default MyApiService;

import React, { useState, useEffect, useMemo } from "react";
import "../styles/memberDetails.css";
import ContactImg from "../assets/ContactImg.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";
import "../styles/memberDetails.css";
import { CountryDropdown } from "react-country-region-selector";
import Pagination from "./Pagination";
import { saveInterest, getAllUsers, saveIgnored,saveShortlist} from "../services/ApiService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { getAllUsers } from "../services/MyApiService";
import { useNavigate } from "react-router-dom";

const MemberDetails = () => {
  const [country, setCountry] = useState("");
  const [currentPage, setCurrentPage] = useState(3);
  const navigate = useNavigate();
  const membersPerPage = 2;
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({
    memberId: "",
    gender: "All",
    maritalStatus: "All",
    religion: "All",
    profession: "",
    city: "",
    smokingHabits: "All",
    drinkingStatus: "All",
  });
  const [interestedMembers, setInterestedMembers] = useState([]);
  const [ignoredMembers, setIgnoredMembers] = useState([]);
  const [shortlistedMembers, setShortlistedMembers] = useState([]);
  const [reportedMembers, setReportedMembers] = useState([]);

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data.userList || []); // Ensure fallback if no userList
        setCurrentPage(1); // Reset to the first page when data is fetched
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Filter users based on filter state
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      return (
        (filters.memberId === "" ||
          user.basicInformation.userId
            ?.toString()
            .includes(filters.memberId)) &&
        (filters.gender === "All" || user.gender === filters.gender) &&
        (filters.maritalStatus === "All" ||
          user.maritalStatus === filters.maritalStatus) &&
        (filters.religion === "All" || user.religion === filters.religion) &&
        (filters.profession === "" ||
          user.profession
            ?.toLowerCase()
            .includes(filters.profession.toLowerCase())) &&
        (filters.city === "" ||
          user.presentAddress
            ?.toLowerCase()
            .includes(filters.city.toLowerCase())) &&
        (filters.smokingHabits === "All" ||
          user.smokingHabits === filters.smokingHabits) &&
        (filters.drinkingStatus === "All" ||
          user.drinkingStatus === filters.drinkingStatus) &&
        (country === "" || user.country === country)
      );
    });
  }, [users, filters, country]);

  // Paginate filtered users
  const currentUsers = useMemo(() => {
    const indexOfLastMember = currentPage * membersPerPage;
    const indexOfFirstMember = indexOfLastMember - membersPerPage;
    return filteredUsers.slice(indexOfFirstMember, indexOfLastMember);
  }, [filteredUsers, currentPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleInterestClick = async (user) => {
    try {
      // Check if the user is already in the interested list based on userId
      if (
        !interestedMembers.some(
          (interestedUser) => interestedUser.userId === user.id
        )
      ) {
        // Add user to the interested list if not already added
        setInterestedMembers((prev) => [
          ...prev,
          {
            userId: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            religion: user.religion,
            gender: user.gender,
            maritalStatus: user.maritalStatus,
            language: user.language,
            profession: user.profession,
            financialCondition: user.financialCondition,
            smokingHabits: user.smokingHabits,
            drinkingStatus: user.drinkingStatus,
            presentAddress: user.presentAddress,
            district: user.district,
            division: user.division,
            taluk: user.taluk,
            zipCode: user.zipCode,
          },
        ]);

        // Prepare the user profile data to be saved
        const userProfile = {
          userId: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          religion: user.religion,
          gender: user.gender,
          maritalStatus: user.maritalStatus,
          language: user.language,
          profession: user.profession,
          financialCondition: user.financialCondition,
          smokingHabits: user.smokingHabits,
          drinkingStatus: user.drinkingStatus,
          presentAddress: user.presentAddress,
          district: user.district,
          division: user.division,
          taluk: user.taluk,
          zipCode: user.zipCode,
        };

        // Save the user profile to the database using the API service
        const response = await saveInterest(userProfile); // Call the saveInterest function

        if (response.success) {
          // If the response is successful, show success toast
          toast.success(
            `${user.firstName} ${user.lastName} has been added to your interests.`
          );
        } else {
          // If there was a failure, show error toast
          console.error("Failed to save interest:", response?.message);
          toast.error(
            response?.message ||
              "Failed to save your interest. Please try again."
          );
        }
      } else {
        // If the user has already been added to the interested list
        toast.info("You have already expressed interest in this user.");
      }
    } catch (error) {
      console.error("Error saving interest:", error);
      toast.error(
        "There was an error while saving your interest. Please try again."
      );
    }
  };

  const handleIgnoredClick = async (user) => {
    try {
      // Check if the user is already in the ignored list based on userId
      if (
        !ignoredMembers.some((ignoredUser) => ignoredUser.userId === user.id)
      ) {
        // Add user to the ignored list if not already added
        setIgnoredMembers((prev) => [
          ...prev,
          {
            userId: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            religion: user.religion,
            gender: user.gender,
            maritalStatus: user.maritalStatus,
            language: user.language,
            profession: user.profession,
            financialCondition: user.financialCondition,
            smokingHabits: user.smokingHabits,
            drinkingStatus: user.drinkingStatus,
            presentAddress: user.presentAddress,
            district: user.district,
            division: user.division,
            taluk: user.taluk,
            zipCode: user.zipCode,
          },
        ]);

        // Prepare the user profile data to be saved
        const userProfile = {
          userId: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          religion: user.religion,
          gender: user.gender,
          maritalStatus: user.maritalStatus,
          language: user.language,
          profession: user.profession,
          financialCondition: user.financialCondition,
          smokingHabits: user.smokingHabits,
          drinkingStatus: user.drinkingStatus,
          presentAddress: user.presentAddress,
          district: user.district,
          division: user.division,
          taluk: user.taluk,
          zipCode: user.zipCode,
        };

        // Save the user profile to the database using the API service for ignored profiles
        const response = await saveIgnored(userProfile); // Call the saveIgnored function

        if (response.success) {
          // If the response is successful, show success toast
          toast.success(
            `${user.firstName} ${user.lastName} has been added to your ignored list.`
          );
        } else {
          // If there was a failure, show error toast
          console.error("Failed to save ignored profile:", response?.message);
          toast.error(
            response?.message ||
              "Failed to save the ignored profile. Please try again."
          );
        }
      } else {
        // If the user has already been added to the ignored list
        toast.info("You have already ignored this user.");
      }
    } catch (error) {
      console.error("Error saving ignored profile:", error);
      toast.error(
        "There was an error while saving the ignored profile. Please try again."
      );
    }
  };

  const handleShortlistClick = async (user) => {
    try {
      // Check if the user is already in the shortlisted list based on userId
      if (
        !shortlistedMembers.some(
          (shortlistedUser) => shortlistedUser.userId === user.id
        )
      ) {
        // Add user to the shortlisted list if not already added
        setShortlistedMembers((prev) => [
          ...prev,
          {
            userId: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            religion: user.religion,
            gender: user.gender,
            maritalStatus: user.maritalStatus,
            language: user.language,
            profession: user.profession,
            financialCondition: user.financialCondition,
            smokingHabits: user.smokingHabits,
            drinkingStatus: user.drinkingStatus,
            presentAddress: user.presentAddress,
            district: user.district,
            division: user.division,
            taluk: user.taluk,
            zipCode: user.zipCode,
          },
        ]);

        // Prepare the user profile data to be saved
        const userProfile = {
          userId: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          religion: user.religion,
          gender: user.gender,
          maritalStatus: user.maritalStatus,
          language: user.language,
          profession: user.profession,
          financialCondition: user.financialCondition,
          smokingHabits: user.smokingHabits,
          drinkingStatus: user.drinkingStatus,
          presentAddress: user.presentAddress,
          district: user.district,
          division: user.division,
          taluk: user.taluk,
          zipCode: user.zipCode,
        };

        // Save the user profile to the database using the API service for shortlisted profiles
        const response = await saveShortlist(userProfile); // Call the saveShortlisted function

        if (response.success) {
          // If the response is successful, show success toast
          toast.success(
            `${user.firstName} ${user.lastName} has been added to your shortlisted list.`
          );
        } else {
          // If there was a failure, show error toast
          console.error(
            "Failed to save shortlisted profile:",
            response?.message
          );
          toast.error(
            response?.message ||
              "Failed to save the shortlisted profile. Please try again."
          );
        }
      } else {
        // If the user has already been added to the shortlisted list
        toast.info("You have already shortlisted this user.");
      }
    } catch (error) {
      console.error("Error saving shortlisted profile:", error);
      toast.error(
        "There was an error while saving the shortlisted profile. Please try again."
      );
    }
  };

  // const handleReportClick = async (user) => {
  //   try {
  //     // Check if the user has already been reported based on userId
  //     if (
  //       !reportedMembers.some((reportedUser) => reportedUser.userId === user.id)
  //     ) {
  //       // Add user to the reported list if not already reported
  //       setReportedMembers((prev) => [
  //         ...prev,
  //         {
  //           userId: user.id,
  //           firstName: user.firstName,
  //           lastName: user.lastName,
  //           religion: user.religion,
  //           gender: user.gender,
  //           maritalStatus: user.maritalStatus,
  //           language: user.language,
  //           profession: user.profession,
  //           financialCondition: user.financialCondition,
  //           smokingHabits: user.smokingHabits,
  //           drinkingStatus: user.drinkingStatus,
  //           presentAddress: user.presentAddress,
  //           district: user.district,
  //           division: user.division,
  //           taluk: user.taluk,
  //           zipCode: user.zipCode,
  //         },
  //       ]);

  //       // Prepare the user profile data to be reported
  //       const userProfile = {
  //         userId: user.id,
  //         firstName: user.firstName,
  //         lastName: user.lastName,
  //         religion: user.religion,
  //         gender: user.gender,
  //         maritalStatus: user.maritalStatus,
  //         language: user.language,
  //         profession: user.profession,
  //         financialCondition: user.financialCondition,
  //         smokingHabits: user.smokingHabits,
  //         drinkingStatus: user.drinkingStatus,
  //         presentAddress: user.presentAddress,
  //         district: user.district,
  //         division: user.division,
  //         taluk: user.taluk,
  //         zipCode: user.zipCode,
  //       };

  //       // Save the reported user profile to the database using the API service
  //       const response = await saveReported(userProfile); // Call the saveReported function

  //       if (response.success) {
  //         // If the response is successful, show success toast
  //         toast.success(
  //           `${user.firstName} ${user.lastName} has been reported successfully.`
  //         );
  //       } else {
  //         // If there was a failure, show error toast
  //         console.error("Failed to report user:", response?.message);
  //         toast.error(
  //           response?.message || "Failed to report the user. Please try again."
  //         );
  //       }
  //     } else {
  //       // If the user has already been reported
  //       toast.info("You have already reported this user.");
  //     }
  //   } catch (error) {
  //     console.error("Error reporting user:", error);
  //     toast.error(
  //       "There was an error while reporting the user. Please try again."
  //     );
  //   }
  // };

  return (
    <>
      <div className="member-page-container">
        <div className="container-max-width member-page-wrapper">
          <div className="member-filter-main">
            <h5>Member Filter</h5>
            <div className="form-group ">
              <label htmlFor="memberId">Member ID</label>
              <input
                type="text"
                className="form-control"
                id="memberId"
                placeholder="Member ID"
                value={filters.memberId}
                onChange={handleFilterChange}
              />
            </div>
            <div className="form-group">
              <label>Height:</label>
              <input
                type="range"
                className="form-range"
                min="1"
                max="1000000"
              />
            </div>
            <div className="form-group">
              <label>Looking For</label>
              <select
                className="form-select"
                name="gender"
                value={filters.gender}
                onChange={handleFilterChange}
              >
                <option>All</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            {/* Add more filter fields here  */}

            <div className="form-group">
              <label>Marital Status</label>
              <select
                className="form-select"
                name="maritalStatus"
                value={filters.maritalStatus}
                onChange={handleFilterChange}
              >
                <option>All</option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
                <option>Widow</option>
              </select>
            </div>

            <div className="form-group">
              <label>Religion</label>
              <select
                className="form-select"
                name="religion"
                value={filters.religion}
                onChange={handleFilterChange}
              >
                <option>All</option>
                <option>Hindu</option>
                <option>Islam</option>
                <option>Christian</option>
                <option>Buddhist</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="country">Country</label>
              <CountryDropdown
                className="form-select"
                value={country}
                onChange={(val) => setCountry(val)}
              />
            </div>

            <div className="form-group">
              <label>Profession</label>
              <input
                type="text"
                placeholder="Profession"
                className=" arrow-hide  form-control"
                name="profession"
                value={filters.profession}
                onChange={handleFilterChange}
              />
            </div>

            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                placeholder="City"
                className=" arrow-hide form-control"
                value={filters.city}
                onChange={handleFilterChange}
              />
            </div>

            <div className="form-group">
              <label>Smoking Habits</label>
              <select
                className="form-select"
                name="smokingHabits"
                value={filters.smokingHabits}
                onChange={handleFilterChange}
              >
                <option>All</option>
                <option>Non-Smoker</option>
                <option>Smoker</option>
              </select>
            </div>

            <div className="form-group">
              <label>Drinking Status</label>
              <select
                className="form-select"
                name="drinkingStatus"
                value={filters.drinkingStatus}
                onChange={handleFilterChange}
              >
                <option>All</option>
                <option>Drunker</option>
                <option>Non-runker</option>
              </select>
            </div>
            <div className="form-group">
              <label>Height:</label>
              <input type="number" className="form-range" min="1.0" max="8.0" />
            </div>
          </div>

          {/* Member Card Display */}
          <div className="member-card-container">
            {currentUsers.map((user) => (
              <div key={user.id} className="member-card">
                <div className="profile-picture">
                  <img src={ContactImg} alt="Profile" />
                </div>
                <div className="member-details-with-actions">
                  <div className="member-details">
                    <h2>
                      {user.firstName} {user.lastName}
                    </h2>
                    <p className="member-id">
                      {/* Member ID : <span>{user.basicInformation.userId}</span> */}
                      Member ID : <span>{user.id}</span>
                    </p>
                    <div className="details-grid">
                      {/* <p>
                        <strong>DOB :</strong> {user.dateOfBirth || "N/A"}
                      </p> */}
                      <p>
                        <strong>Gender :</strong> {user.gender || "N/A"}
                      </p>
                      <p>
                        <strong>Religion :</strong> {user.religion || "N/A"}
                      </p>
                      <p>
                        <strong>Marital Status :</strong>{" "}
                        {user.maritalStatus || "N/A"}
                      </p>
                      <p>
                        <strong>Drinking Status :</strong>{" "}
                        {user.drinkingStatus || "N/A"}
                      </p>
                      <p>
                        <strong>Smoking Habits :</strong>{" "}
                        {user.smokingHabits || "N/A"}
                      </p>
                      <p>
                        <strong>Height :</strong>{" "}
                        {user.physicalAttributes.height || "N/A"}
                      </p>
                      <p>
                        <strong>Language :</strong> {user.language || "N/A"}
                      </p>
                      <p>
                        <strong>Present Address :</strong>{" "}
                        {user.presentAddress || "N/A"}
                      </p>
                      <p>
                        <strong>Profession :</strong> {user.profession || "N/A"}
                      </p>
                    </div>
                  </div>
                  <div className="member-actions">
                    <button
                      className="action-button"
                      onClick={() => handleInterestClick(user)}
                    >
                      <i className="fa fa-heart action-icons" />
                      <p className="action-button-text">Interest</p>
                    </button>
                    <button
                      className="action-button"
                      onClick={() => handleIgnoredClick(user)}
                    >
                      <i className="fa fa-user-times action-icons" />
                      <p className="action-button-text">Ignore</p>
                    </button>
                    <button
                      className="action-button"
                      onClick={() => handleShortlistClick(user)}
                    >
                      <i className="fa fa-star star-icon" aria-hidden="true" />
                      <p className="action-button-text">Shortlist</p>
                    </button>
                    <button
                      className="action-button report-button"
                      // onClick={() => handleReportClick(user)}
                    >
                      <i className="fa fa-exclamation-circle exclamation-icons" />
                      <p className="action-button-text">Report</p>
                    </button>
                  </div>
                </div>
                {user.is_premium && (
                  <div className="premium-badge">Premium</div>
                )}
              </div>
            ))}

            {/* Pagination Component */}
            <Pagination
              membersPerPage={membersPerPage}
              totalMembers={filteredUsers.length}
              currentPage={currentPage}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
      {/* Toast Notifications */}
      <ToastContainer />
    </>
  );
};

export default MemberDetails;

import React,{ useState, useEffect} from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import "../styles/user/dashboard.css";
import "../styles/styles.css";
import ContactImg from "../assets/ContactImg.png";

function UserDashboardLeftSection() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the stored user data from localStorage
    const storedUserData = localStorage.getItem("userData");
    console.log("user data", storedUserData);
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    } else {
      // Redirect to login if no user data is found
      navigate("/login");
    }
  }, [navigate]);

  const location = useLocation(); // Get the current location path

  return (
    <>
      <div className="dashboard-left-section">
        <div className="profile-with-name-and-id">
          <div className="profile-image-container">
            <img src={ContactImg} alt="Profile" />
            <div className="add-image-icon" onClick={() => {}}>
              <i className="fa fa-pencil edit-icon" aria-hidden="true"></i>
            </div>
          </div>
          <div className="name-id-button-container">
          <h5>
              {userData?.user?.firstName} {userData?.user?.lastName}
            </h5>
            <h6>ID: {userData?.user?.id}</h6>
            <Link to="/user-profile" className="public-profile-button">
              Public profile
            </Link>
          </div>
        </div>
        <div>
          <Link
            to="/user/dashboard"
            className={`dashboard-links ${
              location.pathname === "/user/dashboard" ? "link-active" : ""
            }`}
          >
            <div className="dashboard-links-icon-container">
              <i className="fa-solid fa-layer-group" aria-hidden="true"></i>
            </div>
            <p>DashBoard</p>
          </Link>
          <Link
            to="/user/purchase/history"
            className={`dashboard-links ${
              location.pathname === "/user/purchase/history" ? "link-active" : ""
            }`}
          >
            <div className="dashboard-links-icon-container">
              <i className="fa-solid fa-cog" aria-hidden="true"></i>
            </div>
            <p>Purchase History</p>
          </Link>
          <Link
            to="/user/gallery"
            className={`dashboard-links ${
              location.pathname === "/user/gallery" ? "link-active" : ""
            }`}
          >
            <div className="dashboard-links-icon-container">
              <i className="fa-regular fa-image" aria-hidden="true"></i>
            </div>
            <p>Gallery</p>
          </Link>
          <Link
            to="/user/shortlist"
            className={`dashboard-links ${
              location.pathname === "/user/shortlist" ? "link-active" : ""
            }`}
          >
            <div className="dashboard-links-icon-container">
              <i className="fa fa-list-ul" aria-hidden="true"></i>
            </div>
            <p>Shortlist</p>
          </Link>
          <Link
            to="/user/my-interest"
            className={`dashboard-links ${
              location.pathname === "/user/my-interest" ? "link-active" : ""
            }`}
          >
            <div className="dashboard-links-icon-container">
              <i className="fa-regular fa-heart" aria-hidden="true"></i>
            </div>
            <p>My Interest</p>
          </Link>
          <Link
            to="/user/interest-request"
            className={`dashboard-links ${
              location.pathname === "/user/interest-request" ? "link-active" : ""
            }`}
          >
            <div className="dashboard-links-icon-container">
              <i className="fa-regular fa-heart" aria-hidden="true"></i>
            </div>
            <p>Interest Request</p>
          </Link>
          <Link
            to="/user/ignored-lists"
            className={`dashboard-links ${
              location.pathname === "/user/ignored-lists" ? "link-active" : ""
            }`}
          >
            <div className="dashboard-links-icon-container">
              <i className="fa fa-ban" aria-hidden="true"></i>
            </div>
            <p>Ignored Lists</p>
          </Link>
          <Link
            to="/user/messages"
            className={`dashboard-links ${
              location.pathname === "/user/messages" ? "link-active" : ""
            }`}
          >
            <div className="dashboard-links-icon-container">
              <i className="fa-regular fa-envelope" aria-hidden="true"></i>
            </div>
            <p>Message</p>
          </Link>
          <Link
            to="/user/support-tickets"
            className={`dashboard-links ${
              location.pathname === "/user/support-tickets" ? "link-active" : ""
            }`}
          >
            <div className="dashboard-links-icon-container">
              <i className="fa fa-ticket-alt" aria-hidden="true"></i>
            </div>
            <p>Support Tickets</p>
          </Link>
          <Link
            to="/user/profile-settings"
            className={`dashboard-links ${
              location.pathname === "/user/profile-settings" ? "link-active" : ""
            }`}
          >
            <div className="dashboard-links-icon-container">
              <i className="fa-regular fa-user" aria-hidden="true"></i>
            </div>
            <p>Profile Setting</p>
          </Link>
          <Link
            to="/user/change-password"
            className={`dashboard-links ${
              location.pathname === "/user/change-password" ? "link-active" : ""
            }`}
          >
            <div className="dashboard-links-icon-container">
              <i className="fa-solid fa-key" aria-hidden="true"></i>
            </div>
            <p>Change Password</p>
          </Link>
          <Link
            to="/login"
            className={`dashboard-links ${
              location.pathname === "/login" ? "link-active" : ""
            }`}
          >
            <div className="dashboard-links-icon-container">
              <i className="fa fa-sign-out" aria-hidden="true"></i>
            </div>
            <p>Sign Out</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default UserDashboardLeftSection;

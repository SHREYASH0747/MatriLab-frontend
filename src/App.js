// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Packages from "./screens/Packages";
import SuccessStories from "./screens/SuccessStories";
import Contact from "./screens/Contact";
import Login from "./screens/Login";
import Member from "./screens/Member";
import AccountRecovery from "./components/AccountRecovery";
import Register from "./screens/Register";
import StoriesDetailPage from "./screens/StoriesDetailsPage";
import UserDashboard from "./screens/user/Dashboard";
import PurchaseHistory from "./screens/user/PurchaseHistory";
import UserGallery from "./screens/user/UserGallery";
import UserShortList from "./screens/user/ShortList";
import UserMyInterest from "./screens/user/MyInterest";
import UserInterestRequest from "./screens/user/InterestRequest";
import UserIgnoredList from "./screens/user/IgnoredList";
import UserMessage from "./screens/user/Message";
import UserSupportTicket from "./screens/user/SupportTickets";
import UserProfileSetting from "./screens/user/ProfileSetting";
import UserChangePassword from "./screens/user/ChangePassword";
import EducationForm from "./screens/user/profileSetting/EducationForm";

function App() {
  return (
    <Router basename="/rishtaConnect">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/members" element={<Member />} />
        <Route path="/stories" element={<SuccessStories />} />
        <Route
          path="/stories-detail"
          element={<StoriesDetailPage />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<AccountRecovery />} />
        <Route path="/user/purchase/history" element={<PurchaseHistory />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/gallery" element={<UserGallery />} />
        <Route path="/user/shortlist" element={<UserShortList />} />
        <Route path="/user/my-interest" element={<UserMyInterest />} />
        <Route path="/user/interest-request" element={<UserInterestRequest />} />
        <Route path="/user/ignored-lists" element={<UserIgnoredList />} />
        <Route path="/user/messages" element={<UserMessage />} />
        <Route path="/user/support-tickets" element={<UserSupportTicket />} />
        <Route path="/user/profile-settings" element={<UserProfileSetting />} />
        <Route path="/user/change-password" element={<UserChangePassword />} />
        <Route path="/user/profile-settings/education" element={<EducationForm />} />
      </Routes>
    </Router>
  );
}

export default App;

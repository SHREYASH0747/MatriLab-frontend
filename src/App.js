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
    <Router>
      <Navbar />
      <Routes>
        <Route path="/matrilab" element={<Home />} />
        <Route path="/matrilab/packages" element={<Packages />} />
        <Route path="/matrilab/members" element={<Member />} />
        <Route path="/matrilab/stories" element={<SuccessStories />} />
        <Route
          path="/matrilab/stories-detail"
          element={<StoriesDetailPage />}
        />
        <Route path="/matrilab/contact" element={<Contact />} />
        <Route path="/matrilab/login" element={<Login />} />
        <Route path="/matrilab/register" element={<Register />} />
        <Route path="/matrilab/reset" element={<AccountRecovery />} />
        <Route path="/matrilab/user/purchase/history" element={<PurchaseHistory />} />
        <Route path="/matrilab/user/dashboard" element={<UserDashboard />} />
        <Route path="/matrilab/user/gallery" element={<UserGallery />} />
        <Route path="/matrilab/user/shortlist" element={<UserShortList />} />
        <Route path="/matrilab/user/my-interest" element={<UserMyInterest />} />
        <Route path="/matrilab/user/interest-request" element={<UserInterestRequest />} />
        <Route path="/matrilab/user/ignored-lists" element={<UserIgnoredList />} />
        <Route path="/matrilab/user/messages" element={<UserMessage />} />
        <Route path="/matrilab/user/support-tickets" element={<UserSupportTicket />} />
        <Route path="/matrilab/user/profile-settings" element={<UserProfileSetting />} />
        <Route path="/matrilab/user/change-password" element={<UserChangePassword />} />
        <Route path="/matrilab/user/profile-settings/education" element={<EducationForm />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import Stories from "../components/Stories";
import AboutUsSection from "../components/AboutUsSection";
import HowItWorks from "../components/HowItWorks";
import MobileApp from "./MobileApp";
import Achievement from "../components/Achievement";
import Footer from "../components/Footer";

const SuccessStories = () => {
  return (
    <>
      <Stories />
      <AboutUsSection />
      <HowItWorks />
      <MobileApp />
      <Achievement />
      <Footer />
    </>
  );
};

export default SuccessStories;

import React from "react";
import "../styles/styles.css";
import "../styles/aboutUsSection.css";
import AboutImg from "../assets/AboutImg.jpg";

const AboutUsSection = () => {
  return (
    <section className="about-us">
      <div className="container-max-width about-us-container">
        <div className="about-us-image">
          <img src={AboutImg} alt="Couple" />
          <div className="play-button">
            <i className="fa fa-play"></i>
          </div>
        </div>
        <div className="about-us-content">
          <h2>About Us</h2>
          <p>
            Maecenas nec odio et ante tincidunt tempus. Donec vitae aptilbero
            venenatis faucibus. Nullam quis ante, posuere cubilia Curae In ac
            dui quis mi consectetur lacinia. Nam pretium turpis et arcu. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Repellat quaerat
            alias totam fugiat quo harum exercitationem? Temporibus, repudiandae
            et. Sequi.
          </p>

          <div className="about-us-features">
            <div className="feature">
              <div className="icon-container">
                <i className="fa fa-id-card-alt"></i>
              </div>
              <p>Contact genuine profiles</p>
            </div>
            <div className="feature">
              <div className="icon-container">
                <i className="fa fa-comments"></i>
              </div>
              <p>Find perfect match quite easily</p>
            </div>
            <div className="feature">
              <div className="icon-container">
                <i className="fa fa-box-open"></i>
              </div>
              <p>100% security for data and Profile</p>
            </div>
            <div className="feature">
              <div className="icon-container">
                <i className="fa fa-shield-alt"></i>
              </div>
              <p>Trusted Matrimonial agency in the world</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

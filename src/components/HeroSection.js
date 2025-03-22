import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import "../styles/heroSection.css";
import Slider1 from "../assets/Slider1.jpg";
import Slider3 from "../assets/Slider2.jpg";
import Slider4 from "../assets/Slider4.jpg";
import Slider5 from "../assets/Slider5.jpg";

const HeroSection = () => {
  const images = [Slider1, Slider3, Slider4, Slider5];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 1 second
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      >
        <div className="content">
          <h4>
            <span id="content-h4">Welcome</span> To{" "}
            <span id="mang">Mangala Muhurtham</span>
          </h4>

          <p>Find Your Perfect Life Partner With Us</p>
          <button className="success-stories-button">Success Stories</button>
        </div>
        <div className="partner-form">
          <h2>Find Your Partner</h2>

          <form>
            <div class="form-group">
              <label for="country">Country</label>
              <select id="country" class="form-control">
                <option value="" disabled selected>
                  Select One
                </option>
                <option value="india">India</option>
              </select>
            </div>
            <div class="form-row w-100">
              <div class="form-group w-48">
                <input type="text" placeholder="City" class="form-control" />
              </div>
              <div class="form-group w-48">
                <input
                  type="text"
                  placeholder="Profession"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-row w-100">
              <div class="form-group w-48">
                <label for="marital-status">Marital Status</label>
                <select id="marital-status" class="form-control">
                  <option value="" disabled selected>
                    Select One
                  </option>
                  <option value="married">Married</option>
                  <option value="unmarried">Unmarried</option>
                </select>
              </div>
              <div class="form-group w-48">
                <label for="looking-for">Looking For</label>
                <select id="looking-for" class="form-control">
                  <option value="" disabled selected>
                    Select One
                  </option>
                  <option value="friendship">Friendship</option>
                  <option value="relationship">Relationship</option>
                </select>
              </div>
{/* 
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
            </div> */}
            </div>
            <div class="form-row w-100">
              <div class="form-group w-48">
                <label for="smoking-habits">Smoking Habits</label>
                <select id="smoking-habits" class="form-control">
                  <option value="" disabled selected>
                    Select One
                  </option>
                  <option value="non-smoker">Non-Smoker</option>
                  <option value="occasional">Occasional</option>
                  <option value="regular">Regular</option>
                </select>
              </div>
              <div class="form-group w-48">
                <label for="drinking-status">Drinking Status</label>
                <select id="drinking-status" class="form-control">
                  <option value="" disabled selected>
                    Select One
                  </option>
                  <option value="non-drinker">Non-Drinker</option>
                  <option value="occasional">Occasional</option>
                  <option value="regular">Regular</option>
                </select>
              </div>
            </div>
            <div class="form-group col-lg-12 text-center">
              <button type="submit" class="btn btn-primary search-button">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

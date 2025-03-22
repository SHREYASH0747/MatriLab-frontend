import React from "react";
import "../styles/styles.css";
import "../styles/achievements.css";

const Achievement = () => {
  const achievements = [
    {
      icon: "fa-user",
      number: "5,870",
      description: "Latest Profiles",
    },
    {
      icon: "fa-check-circle",
      number: "3,069",
      description: "Successful Stories",
    },
    {
      icon: "fa-smile",
      number: "3,945",
      description: "Happy Users",
    },
    {
      icon: "fa-trophy",
      number: "4,890",
      description: "Our Achievements",
    },
  ];

  return (
    <section className="achievement-section">
      <div className="container-max-width achievement-container">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-icon">
              <i className={`fa ${achievement.icon}`}></i>
            </div>
            <div className="achievement-number">
              {achievement.number}
              <div className="achievement-description">
                {achievement.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievement;

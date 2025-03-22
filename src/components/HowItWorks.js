import React from 'react';
import "../styles/styles.css"
import "../styles/howItWorks.css";

const HowItWorks = () => {
  const steps = [
    {
      title: 'Create Account',
      icon: 'user-circle',
      description: 'Curabitur ligula sapien tincidunod vitae, posuere imperdiet leonas malesuada Praesent congue.',
    },
    {
      title: 'Search Your Partner',
      icon: 'search',
      description: 'Curabitur ligula sapien tincidunod vitae, posuere imperdiet leonas malesuada Praesent congue.',
    },
    {
      title: 'Start Communication',
      icon: 'comments',
      description: 'Start communication with your partner. These options are available here.',
    },
  ];

  return (
    <section className="how-it-works">
      <div className='how-it-works-wrapper'>
        <h2>How It Works</h2>
        <p>
          This site facilitates to find your dream partner. There are some steps to finding your
          best partner. If you wanna be a partner, or want to find your best partner, please
          follow the process as we suggested here.
        </p>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-icon">
                <i className={`fa fa-${step.icon}`}></i>
                <div className="step-number">
                  <p>{index + 1}</p>
                </div>
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
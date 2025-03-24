// import React, { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// import "../styles/styles.css";
// import "../styles/contactForm.css";
// import ContactImg from "../assets/ContactImg.png";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [captchaVerified, setCaptchaVerified] = useState(false);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!captchaVerified) {
//       alert("Please verify the CAPTCHA!");
//       return;
//     }

//     // Submit form logic
//     console.log("Form Submitted:", formData);
//     alert("Your message has been sent successfully!");

//     // Reset form
//     setFormData({
//       name: "",
//       email: "",
//       subject: "",
//       message: "",
//     });
//     setCaptchaVerified(false);
//   };

//   // Handle reCAPTCHA verification
//   const handleCaptcha = (value) => {
//     if (value) {
//       setCaptchaVerified(true);
//     } else {
//       setCaptchaVerified(false);
//     }
//   };

//   // Handle phone click to show alert
//   const handlePhoneClick = () => {
//     alert("Do you want to open the Phone App?");
//   };

//   return (
//     <div className="contact-container">
//       <div className="container-max-width contact-top-container">
//         {/* Contact Info Section */}
//         <div className="contact-info-main">
//           <div className="info-card">
//             <div className="icon pink">
//               <i className="fas fa-map-marker-alt"></i>
//             </div>
//             <div className="info-content-text">
//               <h3>Office Address</h3>
//               <p>4517 Washington Ave. Kentucky</p>
//             </div>
//           </div>
//           <div className="info-card">
//             <div className="icon pink">
//               <i className="fas fa-envelope"></i>
//             </div>
//             <div className="info-content-text">
//               <h3>Email Address</h3>
//               {/* Added mailto functionality */}
//               <p>
//                 <a
//                   href="mailto:mangalamuhurtham2020@gmail.com"
//                   style={{ textDecoration: "none", color: "inherit" }}
//                 >
//                   mangalamuhurtham2020@gmail.com
//                 </a>
//               </p>
//             </div>
//           </div>
//           <div className="info-card">
//             <div className="icon pink">
//               <i className="fas fa-phone-alt"></i>
//             </div>
//             <div className="info-content-text">
//               <h3>Contact Number</h3>

//               <p
//                 style={{ cursor: "pointer", color: "inherit" }}
//                 onClick={handlePhoneClick}
//               >
//                 +917339645053
//               </p>
//             </div>
//           </div>


//         </div>

//         {/* Contact Form Section */}
//         <div className="contact-form-section">
//           <div className="form-container">
//             <h3>Get In Touch With Us</h3>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Name *"
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email Address *"
//                 required
//               />
//               <input
//                 type="text"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 placeholder="Subject *"
//                 required
//               />
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Message *"
//                 required
//               ></textarea>
//               <div className="recaptcha">
//                 <ReCAPTCHA
//                   sitekey={"6LcDC5IqAAAAAEPMK9ko-cBr1-NIuhQhsSE7Mufc"}
//                   onChange={handleCaptcha}
//                 />
//               </div>
//               <button type="submit">Send Message</button>
//             </form>
//           </div>
//           <div className="contact-image">
//             <img src={ContactImg} alt="Contact Team" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;



import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "../styles/styles.css";
import "../styles/contactForm.css";
import ContactImg from "../assets/ContactImg.png";
// import ApiService from "../services/ApiService"; // Import the API service

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Manage form submission state
  const [errorMessage, setErrorMessage] = useState(""); // For handling any error message

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!captchaVerified) {
  //     alert("Please verify the CAPTCHA!");
  //     return;
  //   }

  //   // Set the form submitting state to true
  //   setIsSubmitting(true);
  //   setErrorMessage(""); // Clear any previous error messages

  //   try {
  //     // Submit the form using ApiService
  //     await ApiService.submitContactForm(formData);
  //     alert("Your message has been sent successfully!");

  //     // Reset the form data
  //     setFormData({
  //       name: "",
  //       email: "",
  //       subject: "",
  //       message: "",
  //     });
  //     setCaptchaVerified(false); // Reset CAPTCHA state
  //   } catch (error) {
  //     setErrorMessage("There was an error sending your message. Please try again.");
  //     console.error("Error submitting form:", error);
  //   } finally {
  //     // Reset the submitting state
  //     setIsSubmitting(false);
  //   }
  // };

  // Handle reCAPTCHA verification
  const handleCaptcha = (value) => {
    if (value) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };

  // Handle phone click to show alert
  const handlePhoneClick = () => {
    alert("Do you want to open the Phone App?");
  };

  return (
    <div className="contact-container">
      <div className="container-max-width contact-top-container">
        {/* Contact Info Section */}
        <div className="contact-info-main">
          <div className="info-card">
            <div className="icon pink">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="info-content-text">
              <h3>Office Address</h3>
              <p>Indore, India</p>
            </div>
          </div>
          <div className="info-card">
            <div className="icon pink">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="info-content-text">
              <h3>Email Address</h3>
              {/* Added mailto functionality */}
              <p>
                <a
                  href="mailto:rishtaconnect2025@gmail.com"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  rishtaconnect2025@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="info-card">
            <div className="icon pink">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="info-content-text">
              <h3>Contact Number</h3>

              <p
                style={{ cursor: "pointer", color: "inherit" }}
                onClick={handlePhoneClick}
              >
                +91 123456789</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-section">
          <div className="form-container">
            <h3>Get In Touch With Us</h3>
            {/* Show error message if any */}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <form >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name *"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject *"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message *"
                required
              ></textarea>
              <div className="recaptcha">
                <ReCAPTCHA
                  sitekey={"6LcDC5IqAAAAAEPMK9ko-cBr1-NIuhQhsSE7Mufc"}
                  onChange={handleCaptcha}
                />
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          <div className="contact-image">
            <img src={ContactImg} alt="Contact Team" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

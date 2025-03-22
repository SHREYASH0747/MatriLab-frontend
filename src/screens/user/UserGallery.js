// import React from "react";
// import Footer from "../../components/Footer";
// import UserDashboardLeftSection from "../../components/UserDashboardLeftSection";
// import "../../styles/user/dashboard.css";
// import "../../styles/styles.css";

// function UserGallery() {
//   return (
//     <div className="user-dashboard-container">
//       <div className="container-max-width user-dashboard-wrapper">
//         <UserDashboardLeftSection />
//         <div className="dashboard-right-section hidden-scrollbar">
//           <h5>Gallery</h5>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default UserGallery;



import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Footer from "../../components/Footer";
import UserDashboardLeftSection from "../../components/UserDashboardLeftSection";
import "../../styles/user/UserGallery.css"; // Separate CSS file for styling
import "../../styles/user/dashboard.css";
import "../../styles/styles.css";

function UserGallery() {
  const [images, setImages] = useState([]);

  const onDrop = (acceptedFiles) => {
    const uploadedImages = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setImages([...images, ...uploadedImages]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const handleSubmit = () => {
    alert("Submit clicked!");
  };

  return (
    <div className="user-dashboard-container">
      <div className="container-max-width user-dashboard-wrapper">
        <UserDashboardLeftSection />
        <div className="dashboard-right-section hidden-scrollbar">
          <h5>Gallery</h5>
          <div className="drag-drop-container" {...getRootProps()}>
            <input {...getInputProps()} />
            <div className="drag-drop-content">
              <i className="fas fa-cloud-upload-alt upload-icon"></i>
              <p>Drag & Drop files here or click to browse</p>
            </div>
          </div>
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
          <div className="image-preview-container">
            {images.map((image, index) => (
              <div key={index} className="image-preview-wrapper">
                <img
                  src={image.preview}
                  alt={`uploaded-${index}`}
                  className="image-preview"
                />
                <span className="image-status">Unpublished</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserGallery;

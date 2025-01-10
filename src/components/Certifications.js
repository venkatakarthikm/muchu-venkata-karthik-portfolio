import React from "react";
import "./Certifications.css";

const Certifications = () => {
  const certifications = [
    {
      name: "AUTOMATION ANYWHERE CERTIFIED ESSENTIALS RPA PROFESSIONAL",
      logo: "aacer1.png",
      link: "https://certificates.automationanywhere.com/12ded5a8-2051-4f46-90b3-ce6b94cd64ce#acc.J3vEandY", // Example link
    },
    {
      name: "Red Hat Certified Enterprise Application Developer",
      logo: "rdhat.png",
      link: "https://www.credly.com/badges/2ccddcb8-16f4-4b4e-bd94-e952453dbf72/public_url", // Example link
    },
  ];

  return (
    <section id="certifications" className="certifications-section bg-green">
      <h2 className="animate__animated animate__rotateInUpLeft">
        Certifications
      </h2>
      <div className="certification-cards">
        {certifications.map((cert, index) => (
          <div key={index} className="e-card playing">
            <div className="logo-container">
              <img
                src={cert.logo}
                alt="Certification Logo"
                className="certification-logo"
              />
            </div>
            <div className="image"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="infotop">{cert.name}</div>
            <div className="button-container">
              <bt
                className="continue-application"
                onClick={() => window.open(cert.link, "_blank")} // Open link in a new tab
              >
                <div>
                  <div className="pencil"></div>
                  <div className="folder">
                    <div className="top">
                      <svg viewBox="0 0 24 27">
                        <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                      </svg>
                    </div>
                    <div className="paper"></div>
                  </div>
                </div>
                Verify
              </bt>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

import React from 'react';
import './Certifications.css';

const certificates = [
  {
    id: 1,
    title: "AUTOMATION ANYWHERE CERTIFIED ESSENTIALS RPA PROFESSIONAL",
    issuer: "AUTOMATION ANYWHERE",
    date: "July 25, 2024",
    logo: "aacer1.png",
    verifyUrl: "https://certificates.automationanywhere.com/12ded5a8-2051-4f46-90b3-ce6b94cd64ce#acc.J3vEandY"
  },
  {
    id: 2,
    title: "Red Hat Certified Enterprise Application Developer",
    issuer: "Red Hat",
    date: "Dec 23, 2024",
    logo: "rdhat.png",
    verifyUrl: "https://www.credly.com/badges/2ccddcb8-16f4-4b4e-bd94-e952453dbf72/public_url"
  },
  {
    id: 3,
    title: "Salesforce Certified AI Associate",
    issuer: "Salesforce",
    date: "December 2024",
    logo: "salesforce.png",
    verifyUrl: "https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=GecERbEq0QRu2bG1yV1ihQTRHp/oq8BaTsbTSz0cMjrFHAfzhwLahw2/yO03Bef7"
  }
];

function Certifications() {
  const handleVerify = (url) => {
    if (url) {
      window.open(url, '_blank');
    } else {
      alert('Verification URL not available for this certificate.');
    }
  };

  return (
    <section id="certifications" className="certifications-section bg-green">
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          My Certificates
        </h1>
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="badge-icon">
                <img src={cert.logo} alt={`${cert.title} logo`} className="cert-logo" />
              </div>
              <div className="certificate-content">
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-issuer">Issued by {cert.issuer}</p>
                <p className="certificate-date">{cert.date}</p>
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
      </div>
    </div>
    </section>
  );
}

export default Certifications;
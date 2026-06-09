import alisonLogo from "../assets/images/alison_logo.png";
import ciscoLogo from "../assets/images/cisco_logo.png";
import uomLogo from "../assets/images/uom-logo.png";
import postmanLogo from "../assets/images/postman_logo.png";

import cert1 from "../assets/images/1.png";
import cert2 from "../assets/images/2.png";
import cert3 from "../assets/images/3.png";
import cert4 from "../assets/images/4.PNG";
import cert5 from "../assets/images/5.jfif";
import cert6 from "../assets/images/6.png";

import { FaExternalLinkAlt } from "react-icons/fa";

function Certifications() {

  const certifications = [
    {
      title: "Introduction to Data Science",
      issuer: "Cisco Networking Academy",
      year: "2026",
      logo: ciscoLogo,
      link: cert1,
    },

    {
      title: "Exploring IoT with Cisco Packet Tracer",
      issuer: "Cisco Networking Academy",
      year: "2026",
      logo: ciscoLogo,
      link: cert2,
    },

    {
      title: "Getting Started with Cisco Packet Tracer",
      issuer: "Cisco Networking Academy",
      year: "2026",
      logo: ciscoLogo,
      link: cert3,
    },

    {
      title: "Introduction to UI/UX Design",
      issuer: "Alison",
      year: "2025",
      logo: alisonLogo,
      link: cert4,
    },

    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      year: "2025",
      logo: postmanLogo,
      link: cert6,
    },

    {
      title: "Python for Beginners",
      issuer: "University of Moratuwa",
      year: "2023",
      logo: uomLogo,
      link: cert5,
    },
  ];

  return (
    <section id="certifications">

      <h1>Certifications</h1>

      <p className="section-subtitle">
        Industry-recognized certifications demonstrating continuous learning,
        technical expertise, and professional development.
      </p>

      <div className="cert-grid">

        {certifications.map((cert, index) => (

          <div className="cert-card" key={index}>

            <div className="cert-header">

              <div className="cert-logo-wrapper">
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  className="cert-logo"
                />
              </div>

              <div className="cert-meta">
                <p className="cert-provider">
                  {cert.issuer}
                </p>

                <span className="cert-year">
                  {cert.year}
                </span>
              </div>

            </div>

            <h3>{cert.title}</h3>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn"
            >
              View Certificate
              <FaExternalLinkAlt />
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certifications;
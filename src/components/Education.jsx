import logo from "../assets/images/rajarata_logo.jpg";

function Education() {
  return (
    <section id="education">

      <h1>Education</h1>

      <p className="section-subtitle">
        Academic journey and qualifications
      </p>

      <div className="education-grid">

        {/* Degree */}

        <div className="education-card">

          <div className="edu-header">
            <img
              src={logo}
              alt="Rajarata University"
              className="edu-logo"
            />

            <span className="edu-badge completed">
              completed
            </span>
          </div>

          <h2>
            Bachelor of Science in
            Information Technology
          </h2>

          <p className="edu-university">
            Rajarata University of Sri Lanka
          </p>

          

          <p className="edu-year">
            2023 – 2026
          </p>

        </div>

        {/* Diploma */}

        <div className="education-card">

          <div className="edu-header">
            <img
              src={logo}
              alt="Rajarata University"
              className="edu-logo"
            />

            <span className="edu-badge completed">
              completed
            </span>
          </div>

          <h2>
            Diploma in English
            (Extension)
          </h2>

          <p className="edu-university">
            Rajarata University of Sri Lanka
          </p>

          <p className="edu-status">
            Successfully Completed
          </p>

          <p className="edu-year">
            2023 – 2024
          </p>

        </div>

      </div>

    </section>
  );
}

export default Education;
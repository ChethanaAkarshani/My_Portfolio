import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact">

      <h1>Let's Connect</h1>

      <p className="contact-subtitle">
        Currently seeking internships, graduate opportunities,
        Data Analytics, UI/UX Design, Quality Assurance and
        Software Development roles.
      </p>

      <div className="contact-container">

        <div className="contact-card">

          <FaEnvelope className="contact-icon" />

          <h3>Email</h3>

          <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=wawegedarachethana3@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              Send Email
            </a>

          <p>
            Feel free to reach out regarding internships,
            collaborations, projects or professional opportunities.
          </p>

        </div>

        <div className="contact-card">

          <FaPhone className="contact-icon" />

          <h3>Phone</h3>

          <a
            href="tel:+94779390235"
            className="contact-link"
          >
            +94 77 939 0235
          </a>

          <p>
            Available for internship opportunities,
            graduate programs and freelance projects.
          </p>

        </div>

      </div>

      <div className="contact-socials">

        <a
          href="https://github.com/ChethanaAkarshani"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/chethana-akarshani-863579368"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>

      </div>

    </section>
  );
}

export default Contact;
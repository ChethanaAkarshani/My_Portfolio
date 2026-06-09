import {
  FaGithub,
  FaLinkedin,
  FaArrowUp
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-brand">
        <h2>Chethana</h2>
        <p>
          Aspiring Data Analyst • UI/UX Designer • Quality Assurance Enthusiast
        </p>
      </div>

      <div className="footer-socials">

        <a
          href="https://github.com/ChethanaAkarshani"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/chethana-akarshani-863579368"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Chethana Akarshani | Portfolio
        </p>

        <a href="#top" className="back-top">
          <FaArrowUp />
        </a>

      </div>

    </footer>
  );
}

export default Footer;
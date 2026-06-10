import profileImage from "../assets/images/Profile.png";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <motion.section
      id="hero"
      className="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-content">

        <span className="hero-greeting">
          👋 Hello, I'm
        </span>

        <h1>
          Chethana
          <span>Akarshani</span>
        </h1>

        <div className="hero-badge">
          Final-Year IT Undergraduate
        </div>

        <p>
          Passionate about Data Analytics, Quality Assurance,
          Machine Learning and UI/UX Design. I enjoy building
          intelligent, user-focused solutions that solve
          real-world problems.
        </p>

        <div className="hero-buttons">
         <a
  href={`${import.meta.env.BASE_URL}CV/Chethana_CV.pdf`}
  download="Chethana_CV.pdf"
  className="btn"
>
  <FaDownload />
  Download CV
</a>
        </div>

      </div>

      <div className="hero-image">
        <img
          src={profileImage}
          alt="Chethana Akarshani"
        />
      </div>
    </motion.section>
  );
}

export default Hero;
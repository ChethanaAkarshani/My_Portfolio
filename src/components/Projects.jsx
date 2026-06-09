import {
  FaBrain,
  FaLaptopCode,
  FaChartPie,
  FaBug,
  FaFish,
  FaFileCode
} from "react-icons/fa";

function Projects() {

  const projects = [
    {
      title: "Mango Ripeness Classification",
      icon: <FaBrain />,
      tech: "Python • TensorFlow • Flutter • ESP32",
      description:
        "AI-powered system to classify mango ripeness and provide health recommendations using machine learning and IoT integration.",
      github: "https://github.com/ChethanaAkarshani/AI-Based-IoT-System-for-Non-Destructive-Ripeness-Detection"
    },

    {
      title: "Diabetes Risk Prediction",
      icon: <FaBrain />,
      tech: "Python • Machine Learning",
      description:
        "Intelligent prediction system to estimate diabetes risk using lifestyle and health-related factors.",
      github:
        "https://github.com/ChethanaAkarshani/Diabetes-risk-prediction"
    },

    {
      title: "Customer Segmentation",
      icon: <FaChartPie />,
      tech: "Python • K-Means • Scikit-Learn",
      description:
        "Customer clustering system using machine learning to analyze purchasing behavior and spending patterns.",
      github:
        "https://github.com/ChethanaAkarshani/customer-segmentation-ml"
    },

    {
      title: "Fungi Colony Detection",
      icon: <FaBug />,
      tech: "Python • Image Processing",
      description:
        "Machine learning model to detect and classify fungi colonies from image datasets.",
      github:
        "https://github.com/ChethanaAkarshani/Fungi-colony-detection-using-image-processing"
    },

    {
      title: "Ceylon Sea Food Heaven",
      icon: <FaFish />,
      tech: "HTML • CSS • JavaScript",
      description:
        "Responsive business website developed to showcase Sri Lankan seafood products.",
      github:
        "https://github.com/ChethanaAkarshani/ceylon-seafood-heaven-website"
    },

    {
      title: "Design Text Editor",
      icon: <FaFileCode />,
      tech: "Qt Framework • C++",
      description:
        "Desktop text editor with a clean user interface and modern editing features.",
      github: "https://github.com/ChethanaAkarshani/Qt-based-Text-Editor-Application"
    }
  ];

  return (
    <section id="projects">

      <h1>Projects</h1>

      <p className="section-subtitle">
        Academic and personal projects showcasing software development,
        machine learning, UI/UX and data analytics skills.
      </p>

      <div className="project-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-icon">
              {project.icon}
            </div>

            <h3>{project.title}</h3>

            <h4>{project.tech}</h4>

            <p>{project.description}</p>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              View Project
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;
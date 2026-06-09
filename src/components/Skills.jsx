import {
  FaPython,
  FaJava,
  FaReact,
  FaBrain,
  FaPalette,
  FaServer
} from "react-icons/fa";

import {
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiMysql,
  SiTensorflow,
  SiPostman,
  SiFigma,
  SiCanva,
  SiSelenium,
  SiFlutter,
  SiAndroidstudio,
  SiAnaconda
} from "react-icons/si";

import { TbBrandGoogle } from "react-icons/tb";

function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "C++", icon: <SiCplusplus /> },

    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss /> },

    { name: "React.js", icon: <FaReact /> },

    { name: "Flutter", icon: <SiFlutter /> },
    { name: "Android Studio", icon: <SiAndroidstudio /> },

    { name: "Qt Creator", icon: <FaServer /> },

    { name: "MySQL", icon: <SiMysql /> },

    { name: "TensorFlow", icon: <SiTensorflow /> },
    { name: "Anaconda", icon: <SiAnaconda /> },

    { name: "Google Colab", icon: <TbBrandGoogle /> },

    { name: "Postman", icon: <SiPostman /> },
    { name: "Selenium", icon: <SiSelenium /> },

    { name: "Figma", icon: <SiFigma /> },
    { name: "Canva", icon: <SiCanva /> },

    { name: "Machine Learning", icon: <FaBrain /> },
    { name: "UI/UX Design", icon: <FaPalette /> },
    { name: "REST APIs", icon: <FaServer /> }
  ];

  return (
    <section id="skills">
      <h1>Technical Skills</h1>

      <p className="section-subtitle">
        A collection of technologies, programming languages,
        frameworks, and tools
        <br />
        I use to design, develop, and deploy efficient software
        solutions.
      </p>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-box" key={skill.name}>
            <div className="skill-box-icon">
              {skill.icon}
            </div>

            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
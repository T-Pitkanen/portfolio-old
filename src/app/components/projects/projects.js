import Image from "next/image";
import styles from "./projects.module.css";
import projectData from "@/data/projectData";

const Projects = () => {
  return (
    <div className={styles.container} id="projects">
      <div className={styles.projects}>
        <div className={styles.projectsIntro}>
          {" "}
          <h2>PROJECTS</h2>
          <p>
            Here are some of the projects I've worked on during my studies.     Click on the project title to see the webpage.
          </p>
        </div>

        <hr className={styles.projectHr} />
        {projectData.map((project, index) => (
          <div key={index}>
            <div
              className={`${styles.project} ${
                index % 2 === 0 ? styles.row : styles.rowReverse
              }`}
            >
              <div className={styles.projectImgContainer}>
                <Image
                  className={styles.projectImage}
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={400}
                />
              </div>
              <div className={styles.infoContainer}>
              <a href={project.link}><h3>{project.title}</h3></a>
                <div className={styles.projectInfo}>
                  <h4>goal</h4>
                  <p>{project.goal}</p>
                  <h4>design</h4>
                  <p>{project.design}</p>
                  <h4>code</h4>
                  <p>{project.code}  </p>
                  
                </div>
              </div>
            </div>
            {index !== projectData.length - 1 && (
              <hr className={styles.projectHr} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

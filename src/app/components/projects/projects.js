"use client";

import Image from "next/image";
import styles from "./projects.module.css";
import projectData from "@/data/projectData";
import { useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Modal from "react-modal";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { RiCloseLine } from "react-icons/ri";

const Projects = () => {
  useEffect(() => {
    register();
  }, []);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalProject, setModalProject] = useState(null);

  return (
    <div className={styles.container} id="projects">
      <div className={styles.projects}>
        <div className={styles.projectsIntro}>
          {" "}
          <h2>PROJECTS</h2>
          <p>
            Here are some of the projects I&apos;ve worked on during my studies.
            Click on the project title to see the webpage.
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
              {/* <div className={styles.projectImgContainer}>
                <Image
                  className={styles.projectImage}
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={400}
                />
              </div> */}
              <div className={`${styles.slider}`}>
                <swiper-container slides-per-view={1} loop autoplay>
                  {project.image.map((image, index) => (
                    <swiper-slide key={index}>
                      <div className={styles.projectImage}>
                        <Image
                          className={styles.projectImg}
                          src={image}
                          alt={`project image ${index + 1}`}
                          width={800}
                          height={800}
                          onClick={() => {
                            setModalIsOpen(true);
                            setModalProject(project);
                            setCurrentImageIndex(index);
                          }}
                        />
                      </div>
                    </swiper-slide>
                  ))}
                </swiper-container>
              </div>
              <div className={styles.infoContainer}>
                <a href={project.link}>
                  <h3>{project.title}</h3>
                </a>
                <div className={styles.projectInfo}>
                  <h4>goal</h4>
                  <p>{project.goal}</p>
                  <h4>design</h4>
                  <p>{project.design}</p>
                  <h4>code</h4>
                  <p>{project.code} </p>
                </div>
              </div>
            </div>
            {index !== projectData.length - 1 && (
              <hr className={styles.projectHr} />
            )}
          </div>
        ))}

        <Modal className={styles.modal}
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              zIndex: 10000,
            },
            content: {
              color: "black",
              width: "80%",
              height: "95%",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 10000,
            },
          }}
        >
          <div className={styles.closeButton}>
            {" "}
            <button
              onClick={() => setModalIsOpen(false)}
              style={{
                marginBottom: "1em",
               
              }}
            >
              <RiCloseLine />
            </button>
          </div>

          <Image
            src={modalProject?.image[currentImageIndex]}
            alt="Modal"
            width={1900}
            height={1900}
            style={{
              objectFit: "cover",
              maxWidth: "100%",
              maxHeight: "100%",
              zIndex: 10000,
            }}
          />
          <div className={styles.modalButtons}>
            {" "}
            <button
              onClick={() =>
                setCurrentImageIndex(
                  (currentImageIndex - 1 + modalProject?.image.length) %
                    modalProject?.image.length
                )
              }
            >
              <FaAngleLeft />
            </button>
            <button
              onClick={() =>
                setCurrentImageIndex(
                  (currentImageIndex + 1) % modalProject?.image.length
                )
              }
            >
              <FaAngleRight />
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Projects;

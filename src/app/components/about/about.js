import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutText}>
        <h2>ABOUT ME</h2>
        <p>I'm Tiia, a freshly graduated web developer and Business Information Technology student in Vaasa University of Applied Sciences.</p>
        <p>
          I graduated with a web development degree at Media College Denmark in
          April 2024. Currently, I'm living in Finland and I'm studying Business
          Information Technology at Vaasa University of Applied Sciences. I will
          graduate around christmas time in 2028.
        </p>{" "}
        <p>
          {" "}
          I'm competent in HTML and CSS, and I'm also familiar with JavaScript,
          particularly React and Next.js. Working with React and Next.js is what I'm
          currently most interested in, but I'm always willing to learn about
          new systems and technologies.<br></br><br></br>I have some
          experience with SCSS, Tailwind, Node.js and MongoDB, having
          used them in a couple of my projects.
        </p>{" "}
        <p>
          {" "}
          I'm excited to work on actual projects and improve my knowledge.
        </p>
      </div>
    </div>
  );
};

export default About;

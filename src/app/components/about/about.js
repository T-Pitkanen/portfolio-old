import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutText}>
        <h2>ABOUT ME</h2>
        <p>
          {" "}
          Hey! I'm Tiia — a Business Information Technology student at Vaasa
          University of Applied Sciences in Finland. I graduated from Media
          College Denmark in April 2024 with a degree in Web Development, and
          now I'm continuing to grow my skills in both tech and business. I
          started my second year of studies this year, and I’m really enjoying
          exploring different areas, especially within IT.{" "}
        </p>{" "}
        <p>
          {" "}
          I'm really into everything technical and lately I've been getting more
          interested in data analytics and Python. I've worked a lot with Excel
          and SQL, and I’m excited to keep learning more about databases and
          cybersecurity too.{" "}
        </p>{" "}
        <p>
          {" "}
          Alongside the technical side, my Business IT studies have also given
          me experience in marketing, entrepreneurship, and other
          business-related topics, which I think balance things out nicely.{" "}
        </p>{" "}
        <p>
          {" "}
          I’m comfortable with HTML and CSS, and I enjoy working with JavaScript
          — especially React and Next.js. I’ve also used SCSS, Tailwind,
          Node.js, and MongoDB in a few of my projects.{" "}
        </p>{" "}
        <p>
          {" "}
          I love learning new things and working on projects that help me grow.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;

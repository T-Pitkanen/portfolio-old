import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutText}>
        <h2>ABOUT ME</h2>
        <p>
          I’m Tiia, a Business Information Technology student at
          <strong> Vaasa University of Applied Sciences</strong> in Finland.
        </p>

        <p>
          I finished my Web Development degree at{" "}
          <strong>Media College Denmark</strong> in April 2024, and now I’m in
          my second year at VAMK. I wanted to learn more about tech in general,
          but I’ve also always enjoyed the business side of things, so I chose
          Business IT. It’s been a really interesting mix so far.
        </p>

        <p>
          I’ve always liked figuring out how things on the internet work —
          that’s what got me into web development in the first place. I enjoy
          building projects where I can actually see the results and turn ideas
          into something real and functional. I’ve worked with{" "}
          <strong>HTML, CSS, JavaScript, React, and Next.js</strong>, and I like
          experimenting with tools like{" "}
          <strong>Tailwind</strong>, <strong>SCSS</strong>,{" "}
          <strong>MongoDB</strong>, and lately I’ve started learning{" "}
          <strong>PostgreSQL</strong>.
        </p>

        <p>
          Recently, I’ve gotten more interested in{" "}
          <strong>data science and analytics</strong>, as well as{" "}
          <strong>cybersecurity</strong> and <strong>cloud services</strong>.
          These are something I want to learn later on more, but not just yet.
        </p>

        <p>
          My studies also include <strong>marketing</strong>,{" "}
          <strong>entrepreneurship</strong>, and different types of
          <strong>sales management</strong>, which I think are great complements
          to the technical side. We also cover{" "}
          <strong>project management</strong> and <strong>leadership</strong>,
          both of which are important skills for working life.
        </p>

        <p>
          I like learning new things as much as I can, improving little by
          little, and building projects that challenge me. Everything on my site
          reflects what I’ve been learning so far and what I want to keep
          getting better at.
        </p>
      </div>
    </div>
  );
};

export default About;

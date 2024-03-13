import styles from './about.module.css';

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.aboutText}>
				<h2>ABOUT ME</h2>
				<p>
					I'm Tiia, a web development student from Finland. I'm passionate about
					creating beautiful, user-friendly websites and web applications.
				</p>
				<p>
					Currently, I'm studying web development at Media College Denmark and
					am set to graduate in April 2024.
				</p>{' '}
				<p>
					{' '}
					I have advanced skills in HTML and CSS, and I'm also familiar with
					JavaScript, particularly React. Additionally, I have some experience
					with SCSS, Tailwind, Node.js, Next.js, and MongoDB, having used them
					in a couple of my projects.
				</p>{' '}
				<p>
					{' '}
					I'm eager to further expand my knowledge in web development and work
					on real-world projects.
				</p>
			</div>
		</div>
	);
};

export default About;

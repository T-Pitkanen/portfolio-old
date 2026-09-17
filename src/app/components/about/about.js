'use client';

import styles from './about.module.css';

const BIRTH_DATE = '1998-04-05';

const calculateAge = (birthDate) => {
	const today = new Date();
	const birthday = new Date(`${birthDate}T00:00:00`);
	let age = today.getFullYear() - birthday.getFullYear();
	const birthdayHasNotPassed =
		today.getMonth() < birthday.getMonth() ||
		(today.getMonth() === birthday.getMonth() &&
			today.getDate() < birthday.getDate());

	if (birthdayHasNotPassed) age -= 1;
	return age;
};

const About = () => {
	return (
		<section className={styles.container} aria-labelledby="about-heading">
			<div className={styles.aboutText}>
				<h2 id="about-heading">ABOUT ME</h2>
				<p>
					Hey, I&apos;m Tiia — a Business IT student at VAMK in Vaasa. I finished my
					Web Development degree at Media College Denmark in April 2024, and I&apos;m
					now in my second year at VAMK.
				</p>
				<div className={styles.ageCalculator}>
					<p>I&apos;m {calculateAge(BIRTH_DATE)}, born on April 5, 1998.</p>
				</div>
				<p>
					Lately I&apos;ve been getting really into data analytics and Python. I use
					Excel and SQL a lot, and I want to keep digging into databases and
					cybersecurity too.
				</p>
				<p>
					I&apos;ve also studied marketing, entrepreneurship and other business topics.
					That side of things is useful when thinking about what people actually
					need from a product.
				</p>
				<p>
					Most of the time I&apos;m building with HTML, CSS and JavaScript — especially
					React and Next.js. I&apos;ve also used SCSS, Tailwind and MongoDB in a few
					projects. I like learning by making things and figuring stuff out as I go.
				</p>
			</div>
		</section>
	);
};

export default About;

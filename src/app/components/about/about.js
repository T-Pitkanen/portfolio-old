'use client';

import { useState } from 'react';
import styles from './about.module.css';

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
	const [birthDate, setBirthDate] = useState('');

	return (
		<section className={styles.container} aria-labelledby="about-heading">
			<div className={styles.aboutText}>
				<h2 id="about-heading">ABOUT ME</h2>
				<p>
					{' '}
					Hey! I&#39;m Tiia — a Business Information Technology student at Vaasa
					University of Applied Sciences in Finland. I graduated from Media
					College Denmark in April 2024 with a degree in Web Development. I
					started my second year of studies this year and I&#39;m really
					enjoying it!{' '}
				</p>{' '}
				<p>
					{' '}
					I&#39;m really into everything technical and lately I&#39;ve been
					getting more interested in data analytics and Python. I&#39;ve worked
					a lot with Excel and SQL and I’m excited to keep learning more about
					databases and cybersecurity too.{' '}
				</p>{' '}
				<p>
					{' '}
					My studies have also given me experience in marketing,
					entrepreneurship and other business-related topics. I think this
					knowledge is very useful and the combination of tech and business is
					valuable.{' '}
				</p>{' '}
				<p>
					{' '}
					I’m comfortable with HTML and CSS and I enjoy working with JavaScript,
					especially React and Next.js. I’ve also used SCSS, Tailwind and
					MongoDB in a few of my projects.{' '}
				</p>{' '}
				<p>
					{' '}
					I love learning new things and working on projects that help me
					grow.{' '}
				</p>
				<div className={styles.ageCalculator}>
					<label htmlFor="birth-date">When is your birthday?</label>
					<input
						id="birth-date"
						type="date"
						value={birthDate}
						onChange={(event) => setBirthDate(event.target.value)}
						max={new Date().toISOString().split('T')[0]}
					/>
					{birthDate && (
						<p aria-live="polite">
							I am {calculateAge(birthDate)} years old student.
						</p>
					)}
				</div>
			</div>
		</section>
	);
};

export default About;

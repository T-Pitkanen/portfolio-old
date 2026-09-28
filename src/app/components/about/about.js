import styles from './about.module.css';

const timeline = [
	{
		date: '2022',
		place: 'Denmark',
		title: 'Web development degree',
		text: 'Moved to Denmark and completed a web development degree. This is where I built my first real projects and realised this is what I like to do.',
	},
	{
		date: '2024',
		place: 'VAMK, Finland',
		title: 'Business IT',
		text: 'Returned to Finland to study Business IT, where software development meets business systems.',
	},
	{
		date: 'Now',
		place: 'VAMK, Vaasa',
		title: 'Trainee, RDI project',
		text: 'Building a web app powered by generative AI, including LLM integration and testing, backend work, a full frontend UI restyle, and piloting with real users.',
	},
];

const About = () => (
	<section className={styles.container} aria-labelledby="about-heading">
		<div className={styles.aboutText}>
			<div className={styles.details}>
				<h3>About</h3>
				<p>
					I have a web development degree from Denmark and am in my third year
					of Business IT at VAMK.
				</p>
				<p>
					I’m currently a trainee on an RDI project at VAMK, building a
					generative AI-powered web application. My work includes LLM
					integration and testing, backend development, a full frontend UI
					restyle, and piloting the app with its target users.
				</p>
			</div>

			<ol className={styles.timeline} aria-label="Education and experience">
				{timeline.map((item) => (
					<li
						key={`${item.date}-${item.title}`}
						className={styles.timelineItem}
					>
						<div className={styles.timelineMeta}>
							<span>{item.date}</span>
							<span>{item.place}</span>
						</div>
						<div>
							<h3>{item.title}</h3>
							<p>{item.text}</p>
						</div>
					</li>
				))}
			</ol>
		</div>
	</section>
);

export default About;

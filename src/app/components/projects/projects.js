import Image from 'next/image';
import styles from './projects.module.css';
import projectData from '@/data/projectData';

const Projects = () => {
	return (
		<div className={styles.container}>
			<div className={styles.projects}>
				<h2>PROJECTS</h2>
				<p>
					Here are some of the projects I've worked on during my studies.{' '}
					<br></br>Click on the project to see more.
				</p>
				{projectData.map((project, index) => (
					<div key={index}>
						<div
							className={`${styles.project} ${
								index % 2 === 0 ? styles.row : styles.rowReverse
							}`}
						>
							<div className={styles.projectImg}>
								<Image
									src={project.image}
									alt={project.title}
									width={300}
									height={200}
								/>
							</div>
							<div className={styles.infoContainer}>
								<h3>{project.title}</h3>
								<div className={styles.projectInfo}>
									<h4>goal</h4>
									<p>{project.goal}</p>
									<h4>design</h4>
									<p>{project.design}</p>
									<h4>code</h4>
									<p>{project.code}</p>
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

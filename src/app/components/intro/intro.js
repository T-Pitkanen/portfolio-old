import styles from './intro.module.css';
import { FaCaretDown } from 'react-icons/fa';

const Intro = () => {
	return (
		<div className={styles.container}>
			<div className={styles.introText}>
				<h1>HI!</h1>
				<h2>I'M TIIA</h2>
				<p>JUNIOR WEB DEVELOPER</p>
				<div className={styles.introProjects}>
					<hr />
					<p>
						SEE MY PROJECTS
						<a href="#projects"><FaCaretDown className={styles.faIcon} /></a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Intro;

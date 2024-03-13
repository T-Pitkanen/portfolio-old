import styles from './intro.module.css';
import { FaCaretDown } from 'react-icons/fa';

const Intro = () => {
	return (
		<div className={styles.container}>
			<div className={styles.introText}>
				<h1>HI!</h1>
				<p>I'M TIIA</p>
				<p>A WEB DEVELOPER STUDENT</p>
				<div className={styles.introProjects}>
					<hr />
					<p>
						SEE MY PROJECTS
						<FaCaretDown className={styles.faIcon} />
					</p>
				</div>
			</div>
		</div>
	);
};

export default Intro;

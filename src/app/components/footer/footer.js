import styles from './footer.module.css';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.footer}>
				<div className={styles.footerIcon}>
					<FaGithub className={styles.faIcon} />
				</div>
				<div className={styles.footerEmail}>
					<p>tiia1.pitkanen@gmail.com</p>
				</div>
			</div>
			<div className={styles.copyright}>
				<span>© 2025 Tiia Pitkänen. All rights reserved.</span>
			</div>
		</div>
	);
};

export default Footer;

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import styles from './footer.module.css';

const Footer = () => (
	<footer className={styles.container}>
		<div className={styles.footer}>
			<Link
				href="https://github.com/T-Pitkanen"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Tiia Pitkänen on GitHub"
			>
				<div className={styles.footerIcon}>
					<FaGithub className={styles.faIcon} />
				</div>
			</Link>
			<div className={styles.footerEmail}>
				<p>tiia1.pitkanen@gmail.com</p>
			</div>
		</div>
		<div className={styles.copyright}>
			<span>© 2025 Tiia Pitkänen. All rights reserved.</span>
		</div>
	</footer>
);

export default Footer;

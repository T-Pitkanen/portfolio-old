import styles from './footer.module.css';
import { FaGithub, FaDownload } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.footer}>
				  <div className={styles.cv}>
                    <a
                        href="/Tiia_Pitkanen_CV.pdf"
                        download
                        className={styles.cvLink}
                        aria-label="Download CV"
                    >
                        <FaDownload className={styles.faIconDownload} />
                        <span className={styles.cvText}>Download my CV</span>
                    </a>
                </div>
				<Link href="https://github.com/T-Pitkanen" target="_blank" rel="noopener noreferrer">
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
		</div>
	);
};

export default Footer;

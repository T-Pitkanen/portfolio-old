import styles from './footer.module.css';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className={styles.container}>
			<div className={styles.footer}>
<<<<<<< HEAD
				<Link
					href="https://github.com/T-Pitkanen"
					target="_blank"
					rel="noopener noreferrer"
				>
=======
				  {/* <div className={styles.cv}>
                    <a
                        href="/Tiia_Pitkanen_CV.pdf"
                        download
                        className={styles.cvLink}
                        aria-label="Download CV"
                    >
                        <FaDownload className={styles.faIconDownload} />
                        <span className={styles.cvText}>Download my CV</span>
                    </a>
                </div> */}
				{/* <Link href="https://github.com/T-Pitkanen" target="_blank" rel="noopener noreferrer">
>>>>>>> 10f2f26985e73f4c2aa100e03545150d0c07ed16
					<div className={styles.footerIcon}>
						<FaGithub className={styles.faIcon} />
					</div>
				</Link>
				<div className={styles.footerEmail}>
					<p>tiia1.pitkanen@gmail.com</p>
<<<<<<< HEAD
				</div>
			</div>
			<div className={styles.copyright}>
				<span>© 2024 Tiia Pitkänen. All rights reserved.</span>
			</div>
		</footer>
=======
				</div> */}
					<div className={styles.copyright}>
				<span>© 2025 Tiia Pitkänen. All rights reserved.</span>
			</div>
			</div>
		
		</div>
>>>>>>> 10f2f26985e73f4c2aa100e03545150d0c07ed16
	);
};

export default Footer;

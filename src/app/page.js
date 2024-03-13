import Image from 'next/image';
import styles from './page.module.css';
import Intro from './components/intro/intro';
import About from './components/about/about';
import Projects from './components/projects/projects';


export default function Home() {
	return (
		<main className={styles.main}>
			<Intro />
			<About />
			<Projects />
		</main>
	);
}

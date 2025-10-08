import Image from 'next/image';
import styles from './page.module.css';
import Intro from './components/intro/intro';
import About from './components/about/about';
import Projects from './components/projects/projects';
import TopicsPage from './components/topics/topics';


export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.pageContainer}>
			<Intro />
		
			<About />
			<TopicsPage limit={3} />
			<Projects />
			</div>
		</main>
	);
}

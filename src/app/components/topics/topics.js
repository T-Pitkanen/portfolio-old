import Link from "next/link";
import styles from "./topics.module.css";
import topics from "@/data/topicsData";
import { IoIosArrowForward } from "react-icons/io";

export default function TopicsPage({ limit }) {
  const display = typeof limit === "number" ? topics.slice(0, limit) : topics;

  return (
    <main className={styles.container}>
      <h1>RECENT TOPICS</h1>
    
      <p>
        {" "}
        This space is where I post short articles and reflections on what I’m
        currently studying or experimenting with.
      </p>
      <p>Currently still in progress. </p>
      <ul className={styles.list}>
        {display.map((t) => (
          <li key={t.slug} className={styles.card}>
            <Link href={`/topics/${t.slug}`} className={styles.link}>
              <h2>{t.title}</h2>
              <p>{t.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.buttonContainer}>
        <Link href="/topics">
          <button type="button" className={styles.allButton}>
            See All <IoIosArrowForward className={styles.arrowIcon} />
          </button>
        </Link>
      </div>
    </main>
  );
}

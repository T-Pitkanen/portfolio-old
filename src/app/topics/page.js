import Link from "next/link";
import topics from "@/data/topicsData";
import styles from "./topics.module.css";

export default function TopicsIndex() {
  return (
    <main className={styles.container}>
      <h1>ALL TOPICS</h1>
      <p className={styles.intro}>Click a topic to read more.</p>
      <ul className={styles.list}>
        
        {topics.map((t) => (
          <li key={t.slug} className={styles.card}>
            <Link href={`/topics/${t.slug}`} className={styles.link}>
              <h2>{t.title}</h2>
              <p>{t.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
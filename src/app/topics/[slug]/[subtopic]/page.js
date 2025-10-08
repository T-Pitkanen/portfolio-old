import Link from "next/link";
import topics from "@/data/topicsData";
import styles from "./subtopic.module.css";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return topics.flatMap((t) =>
    (t.subtopics || []).map((s) => ({ slug: t.slug, subtopic: s.slug }))
  );
}

export default function SubtopicPage({ params }) {
  const { slug, subtopic } = params;
  const topic = topics.find((t) => t.slug === slug);
  const item = topic?.subtopics?.find((s) => s.slug === subtopic);
  if (!topic || !item) return notFound();

  return (
    <main className={styles.topicContainer}>
      <nav style={{ marginBottom: 12 }}>
        <Link href="/topics" className={styles.link}>All topics</Link>{" "}
        › <Link href={`/topics/${topic.slug}`} className={styles.link}>{topic.title}</Link>{" "}
        › <span aria-current="page">{item.title}</span>
      </nav>

      <h1>{item.title}</h1>
      {item.content?.map((p, i) => (
        <p key={i}>{p}</p>
      ))}

      <div style={{ marginTop: 16 }}>
        <Link href={`/topics/${topic.slug}`} className={styles.link}>← Back to {topic.title}</Link>
      </div>
    </main>
  );
}
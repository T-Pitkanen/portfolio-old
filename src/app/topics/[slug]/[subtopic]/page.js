import Link from "next/link";
import Image from "next/image";
import topics from "@/data/topicsData";
import styles from "./subtopic.module.css";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return topics.flatMap((t) =>
    (t.subtopics || []).map((s) => ({ slug: t.slug, subtopic: s.slug }))
  );
}

function RenderBlock({ block }) {
  if (!block) return null;

  // plain string -> paragraph
  if (typeof block === "string") {
    return <p className={styles.blockParagraph}>{block}</p>;
  }

  switch (block.type) {
    case "header":
      return <h2 className={styles.blockHeader}>{block.text}</h2>;

    case "paragraph":
      return <p className={styles.blockParagraph}>{block.text}</p>;

    case "image":
      return (
        <figure className={styles.figure}>
          <Image
            src={block.src}
            alt={block.alt || ""}
            width={1200}
            height={800}
            className={styles.blockImage}
          />
          {block.caption && <figcaption className={styles.caption}>{block.caption}</figcaption>}
        </figure>
      );

    case "section":
      return (
        <section className={styles.section}>
          {block.title && <h3 className={styles.sectionTitle}>{block.title}</h3>}
          {Array.isArray(block.children) &&
            block.children.map((child, i) => <RenderBlock key={i} block={child} />)}
        </section>
      );

    default:
      return null;
  }
}

export default function SubtopicPage({ params }) {
  const { slug, subtopic } = params;
  const topic = topics.find((t) => t.slug === slug);
  const item = topic?.subtopics?.find((s) => s.slug === subtopic);
  if (!topic || !item) return notFound();

  return (
    <main className={styles.topicContainer}>
      <nav style={{ marginBottom: 30 }}>
        <Link href="/topics" className={styles.link}>All topics</Link>{" "}
        › <Link href={`/topics/${topic.slug}`} className={styles.link}>{topic.title}</Link>{" "}
        › <span aria-current="page">{item.title}</span>
      </nav>

      <h1 className={styles.title}>{item.title}</h1>

      {/* render block content (supports objects and plain strings) */}
      {Array.isArray(item.content) &&
        item.content.map((block, i) => <RenderBlock key={i} block={block} />)}
    </main>
  );
}
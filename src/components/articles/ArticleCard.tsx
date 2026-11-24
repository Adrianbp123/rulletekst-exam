import type { Article } from "@/payload-types";
import Image from "next/image";
import styles from "./ArticleCard.module.css";
import Link from "next/link";

type ArticleCardProps = {
  article: Article;
};

/**
 * Viser et artikkelkort med informasjon fra Payload CMS.
 * 
 * @param props.article Artikkelen som skal vises.
 * @returns JSX for artikkelkortet.
 */
export default function ArticleCard({ article }: ArticleCardProps) {
  const coverImage = article.coverImage;

  return (
    <article className={styles.card}>
        <Link href={`/articles/${article.id}`} className={styles.link}>
      {typeof coverImage === "object" && coverImage?.url && (
        <Image
          className={styles.image}
          src={coverImage.url}
          alt={coverImage.alt || article.title}
          width={600}
          height={400}
        />
      )}

      <div className={styles.content}>
        <h2 className={styles.title}>{article.title}</h2>
        <p className={styles.subtitle}>{article.subtitle}</p>
      </div>
      </Link>
    </article>
  );
}

import type { Review } from "@/payload-types";
import Image from "next/image";
import styles from "./ReviewCard.module.css";
import Link from "next/link";

type ReviewCardProps = {
    review: Review;
}


/**
 * Viser et anmeldelseskort med filmbilde, tittel og terningkast.
 * 
 * @param props.review Filmanmeldelsen som skal vises.
 * @returns JSX for anmeldelseskortet.
 */

export default function ReviewCard({ review }: ReviewCardProps) {
    const coverImage = review.coverImage;

    return (
        <article className={styles.card}>
            <Link href={`/reviews/${review.id}`} className={styles.link}>
            {typeof coverImage === "object" && coverImage?.url && (
                <Image
                   className={styles.image}
                   src={coverImage.url}
                   alt={coverImage.alt || review.title}
                   width={600}
                   height={400}
                />
            )}

            <div className={styles.content}>
                <h2 className={styles.title}>{review.title}</h2>
                <p className={styles.rating}>Terningkast: {review.rating}/6</p>
            </div>
            </Link>
        </article>
    )
}
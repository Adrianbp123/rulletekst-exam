import type { Event } from "@/payload-types";
import Image from "next/image";
import styles from "./EventCard.module.css";

type EventCardProps = {
    event: Event;
};

/**
 * Viser et filmkveldkort med bilde, tittel, dato og sted.
 * 
 * @param props.event Filmkvelden som skal vises.
 * @returns JSX for filmkveldkortet.
 */

export default function EventCard({ event }: EventCardProps) {
    const coverImage = event.coverImage;
    const eventDate = event.eventDate;
    const formattedDate = new Date(eventDate).toLocaleString("no", {
        dateStyle: "long",
        timeStyle: "short",
    });

    return (
        <article className={styles.card}>
            {typeof coverImage === "object" && coverImage?.url && (
                <Image 
                    className={styles.image}
                    src={coverImage.url}
                    alt={coverImage.alt || event.title}
                    width={600}
                    height={400}
                />
            )}

            <div className={styles.content}>
                <h2 className={styles.title}>{event.title}</h2>
                <time dateTime={eventDate}>{formattedDate}</time>
                <p>{event.location}</p>
            </div>

        </article>
    )
}
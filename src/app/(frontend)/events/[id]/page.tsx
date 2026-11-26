import { getPayload } from "payload";
import config from "@payload-config";
import { notFound } from "next/navigation";
import Image from "next/image";
import { RichText } from "@payloadcms/richtext-lexical/react";
import RegistrationForm from "@/components/events/RegistrationForm";

type EventPageProps = {
    params: Promise<{ id: string }>;
};


/**
 * Henter og viser informasjon om en bestemt filmkveld.
 * 
 * @param props.params URL-parametere som inneholder filmkveldens ID.
 * @returns JSX for detaljsiden til filmkvelden.
 */

export default async function EventPage({ params }: EventPageProps) {
    const { id } = await params;
    const eventId = Number(id);

    if (!Number.isInteger(eventId) || eventId <= 0) {
        notFound();
    }

    const payload = await getPayload({ config });

    const event = await payload.findByID({
        collection: "events",
        id: eventId,
        disableErrors: true,
    });

    if (!event) {
        notFound();
    }

    const coverImage = event.coverImage;
    const organizer = event.organizer;
    const eventDate = event.eventDate;
    const formattedDate = new Date(eventDate).toLocaleString("no", {
        dateStyle: "long",
        timeStyle: "short",
    });
    const description = event.description;
    const location = event.location;

    return (
        <main className="container">
            <h1>{event.title}</h1>

            <div>
                <time dateTime={eventDate}>{formattedDate}</time>
                <p>Sted: {location}</p>

                {typeof organizer === "object" && organizer?.name && (
                    <p>Arrangør: {organizer.name}</p>
                )}
            </div>

            {typeof coverImage === "object" && coverImage?.url && (
                <Image
                   src={coverImage.url}
                   alt={coverImage.alt || event.title}
                   width={1200}
                   height={675}
                />
            )}
            <RichText data={description} />
            <RegistrationForm eventId={event.id} eventTitle={event.title}/>
        </main>
    )
}

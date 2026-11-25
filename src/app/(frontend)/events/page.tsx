import { getPayload } from "payload";
import config from "@payload-config";
import ContentGrid from "@/components/shared/ContentGrid";
import EventCard from "@/components/events/EventCard";

/**
 * Henter og viser en oversikt over filmkveldene.
 * 
 * @returns JSX for filmkveldoversikten.
 */

export default async function EventsPage() {
    const payload = await getPayload({ config });

    const events = await payload.find({
        collection: "events",
    });

    return (
        <main className="container">
            <h1>Filmkvelder</h1>

            {events.docs.length === 0 ? (
                <p>Ingen filmkvelder er opprettet enda.</p>
            ) : (
                <ContentGrid>
                    {events.docs.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </ContentGrid>
            )}
        </main>
    )
}
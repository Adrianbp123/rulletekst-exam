import { getPayload } from "payload";
import config from "@payload-config"

/**
 * Henter og viser en oversikt over filmanmeldelsene fra Payload CMS.
 * 
 * @returns JSX for anmeldelsesoversikten.
 */
export default async function ReviewsPage() {
    const payload = await getPayload({ config });

    const reviews = await payload.find({
        collection: "reviews",
    });

    return (
        <main className="container">
        <h1>Filmanmeldelser</h1>

        {reviews.docs.length === 0 ? (
            <p>Ingen filmanmeldelser er opprettet enda.</p>
        ) : (
            reviews.docs.map((review) => (
                <h2 key={review.id}>{review.title}</h2>
            ))
        )}

        </main>
    )
}
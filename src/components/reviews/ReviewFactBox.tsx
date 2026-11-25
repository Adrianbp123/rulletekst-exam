import type { Review } from "@/payload-types";

type ReviewFactBoxProps = {
    review: Review;
};

/**
 * Viser en faktaboks med informasjon om filmen.
 * 
 * @param props.review Filmanmeldelsen som inneholder filminformasjonen.
 * @returns JSX for faktaboksen.
 */
export default function ReviewFactBox({ review }: ReviewFactBoxProps) {
    return (
        <section>
            <h2>Fakta om filmen</h2>

            <dl>
                <dt>Filmtittel</dt>
                <dd>{review.title}</dd>

                <dt>Terningkast</dt>
                <dd>{review.rating}</dd>

                <dt>Regissør</dt>
                <dd>{review.director}</dd>

                <dt>Spilletid</dt>
                <dd>{review.runtime} minutter</dd>

                <dt>Aldersgrense</dt>
                <dd>
                    {review.ageRating === "A" ? "Tillatt for alle"
                    : `${review.ageRating} år`}
                </dd>

                <dt>Hovedrolleinnehavere</dt>
                <dd>
                    <ul>
                        {review.cast.map((actor, index) => (
                            <li key={actor.id ?? index}>{actor.name}</li>
                        ))}
                    </ul>
                </dd>
            </dl>
            
        </section>
    )
}
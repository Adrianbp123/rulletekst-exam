import { getPayload } from "payload";
import config from "@payload-config";
import { notFound } from "next/navigation";
import Image from "next/image";
import { RichText } from "@payloadcms/richtext-lexical/react";
import ReviewFactBox from "@/components/reviews/ReviewFactBox";

type ReviewPageProps = {
    params: Promise<{ id: string }>;
};


/**
 * Henter og viser informasjon om en bestemt filmanmeldelse.
 * 
 * @param props.params URL-parametere som inneholder anmeldelsens ID.
 * @returns JSX for detaljsiden til filmanmeldelsen.
 */

export default async function ReviewPage({ params }: ReviewPageProps) {
    const { id } = await params;
    const reviewId = Number(id);

    if (!Number.isInteger(reviewId) || reviewId <= 0) {
        notFound();
    }

    const payload = await getPayload({ config });

    const review = await payload.findByID({
        collection: "reviews",
        id: reviewId,
        disableErrors: true,
    });

    if (!review) {
        notFound();
    }

    const coverImage = review.coverImage;
    const author = review.author;
    const publishedAt = review.publishedAt;
    const formattedDate = new Date(publishedAt).toLocaleDateString("no");
    const content = review.content;

    return (
        <main className="container">
            <h1>{review.title}</h1>
            <div>
                {typeof author === "object" && author?.name && (
                    <p>Skrevet av {author.name}</p>
                )}
            </div>

            {typeof coverImage === "object" && coverImage?.url && (
                <Image
                   src={coverImage.url}
                   alt={coverImage.alt || review.title}
                   width={1200}
                   height={675}
                />
            )}
            
            <ReviewFactBox review={review} />

            <RichText data={content} />

            <time dateTime={publishedAt}>{formattedDate}</time>
        </main>
    )
}

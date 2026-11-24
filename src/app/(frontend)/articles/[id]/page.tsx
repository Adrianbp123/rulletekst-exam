import { getPayload } from "payload";
import config from "@payload-config";
import { notFound } from "next/navigation";
import Image from "next/image";
import { RichText } from "@payloadcms/richtext-lexical/react";

type ArticlePageProps = {
    params: Promise<{ id: string }>;
};


/**
 * Henter og viser informasjon om en bestemt artikkel.
 * 
 * @param props.params URL-parametere som inneholder artikkelens ID.
 * @returns JSX for detaljsiden til artikkelen.
 */

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { id } = await params;
    const articleId = Number(id);

    if (!Number.isInteger(articleId) || articleId <= 0) {
        notFound();
    }

    const payload = await getPayload({ config });

    const article = await payload.findByID({
        collection: "articles",
        id: articleId,
        disableErrors: true,
    });

    if (!article) {
        notFound();
    }

    const coverImage = article.coverImage;
    const author = article.author;
    const publishedAt = article.publishedAt;
    const formattedDate = new Date(publishedAt).toLocaleDateString("no");
    const content = article.content;

    return (
        <main className="container">
            <h1>{article.title}</h1>
            <p>{article.subtitle}</p>
            <div>
                {typeof author === "object" && author?.name && (
                    <p>Skrevet av {author.name}</p>
                )}
            </div>

            {typeof coverImage === "object" && coverImage?.url && (
                <Image
                   src={coverImage.url}
                   alt={coverImage.alt || article.title}
                   width={1200}
                   height={675}
                />
            )}

            <RichText data={content} />
            <time dateTime={publishedAt}>{formattedDate}</time>
        </main>
    )
}

import { getPayload } from "payload";
import config from "@payload-config";
import { notFound } from "next/navigation";

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

    return (
        <main className="container">
            <h1>{article.title}</h1>
            <p>{article.subtitle}</p>
        </main>
    )
}

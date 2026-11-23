import { getPayload } from "payload";
import config from "@payload-config";


/**
 * Viser en oversikt over artikler fra Payload CMS.
 * Henter artiklene og viser en melding dersom ingen finnes.
 */
export default async function ArticlesPage() {
    const payload = await getPayload({ config });

    const articles = await payload.find({
        collection: "articles"
    });

    return (
        <main className="container">
            <h1>Artikler</h1>

            {articles.docs.length === 0 ? (
                <p>Ingen artikler er opprettet enda.</p>
            ) : (
            articles.docs.map((article) => (
                <article key={article.id}>
                    <h2>{article.title}</h2>
                    <p>{article.subtitle}</p>
                </article>
            ))
        )}
        </main>
    );
}
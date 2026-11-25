import { getPayload } from "payload";
import config from "@payload-config";
import ContentGrid from "@/components/shared/ContentGrid";
import ArticleCard from "@/components/articles/ArticleCard";


/**
 * Viser en oversikt over artikler fra Payload CMS.
 * Henter artiklene og viser en melding dersom ingen finnes.
 * 
 * @returns JSX for artikkeloversikten.
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
                <ContentGrid>
                    {articles.docs.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </ContentGrid>
        )}
        </main>
    );
}
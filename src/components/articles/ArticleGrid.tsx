import type { Article } from "@/payload-types"
import ArticleCard from "./ArticleCard"
import styles from "./ArticleGrid.module.css"

type ArticleGridProps = {
    articles: Article[];
};

/**
 * Viser en liste med artikkelkort i et responsivt grid.
 * 
 * @param props.articles Listen med artikler som skal vises.
 * @returns JSX for artikkelgridden.
 */
export default function ArticleGrid({ articles }: ArticleGridProps) {
    return (
        <div className={styles.grid}>
            {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
    
    );
}
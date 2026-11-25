import type { ReactNode } from "react";
import styles from "./ContentGrid.module.css"

type ContentGridProps = {
    children: ReactNode;
};

/**
 * Viser innhold i en gjenbrukbar grid.
 * 
 * @param props.children Innholdet som skal vises i gridden.
 * @returns JSX for gridden.
 */
export default function ContentGrid({ children}: ContentGridProps) {
    return (
        <div className={styles.grid}>
            {children}
        </div>
    
    );
}
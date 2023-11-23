import Footer from "../footer";
import Navbar from "../navbar";
import styles from "./page.module.scss";

export default function BaseLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className={styles.base}>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
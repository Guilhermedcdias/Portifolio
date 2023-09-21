import styles from './page.module.scss';

export default function Footer() {
    return (
        <section className={styles.footer}>
            <div className={styles.column1}>
                <h3>Guilherme Duarte</h3>
                <p>Desenvolvedor Front-End</p>
            </div>
            <div className={styles.column2}>
                <h3>Contato</h3>
            </div>
            <div className={styles.column3}>
                <h3>Redes Sociais</h3>
            </div>
        </section>

    )
}
import styles from './page.module.scss';
import Image from 'next/image'

export default function Footer() {
    return (
        <section className={styles.footer}>
            <div className={styles.column1}>
                <div className={styles.cima}>
                    <h3>Guilherme Duarte</h3>
                    <p>Desenvolvedor de software</p>
                    <div className={styles.logos}>
                        <i>
                            <Image src="https://img.icons8.com/fluency/48/node-js.png" alt="nodeJS" width={48} height={48} />
                        </i>
                        <i>
                            <Image src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" alt="java" width={48} height={48} />
                        </i>
                        <i>
                            <Image src="https://img.icons8.com/nolan/64/react-native.png" alt="react" width={48} height={48} />
                        </i>
                        <i>
                            <Image src="https://img.icons8.com/color/48/vue-js.png" alt='vue' width={48} height={48} />
                        </i>
                        <i>
                            <Image src="https://img.icons8.com/fluency/48/typescript--v2.png" alt="typescript" width={48} height={48} />
                        </i>
                        <i>
                            <Image src="https://img.icons8.com/fluency/48/python.png" alt="python" width={48} height={48} />
                        </i>


                    </div>
                </div>

                <div className={styles.baixo}>
                    <div className={styles.logos}>
                        <h3>Contatos</h3>
                        <i>
                            <Image src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram" width={48} height={48} />
                        </i>
                        <i>
                            <Image src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp" width={48} height={48} />
                        </i>
                        <i>
                            <Image src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin" width={47} height={47} />
                        </i>
                        <i>
                            <Image src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/ffffff/external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo.png" alt='github' width={48} height={48} />
                        </i>
                    </div>
                </div>
            </div>
            <div className={styles.column3}>
                <div className={styles.linksMobile}>
                    <a href="/">Curriculo</a>
                    <a href="/sobre">Sobre</a>
                    <a href="/portifolio">Projetos</a>
                    <a href="/experiencia">Experiencia</a>
                    <a href="/certificacoes">Certificados</a>
                    <a href="/contato">Contato</a>
                </div>
            </div>
            <div className={styles.column4a}>
                <div className={styles.baixo}>
                    <div className={styles.logos}>
                        <h3>Contatos</h3>
                        <p>Entre em contato comigo!</p>
                        <i>
                            <Image src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram" width={48} height={48} />
                        </i>
                        <i>
                            <Image src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp" width={48} height={48} />
                        </i>
                        <i>
                            <Image src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin" width={47} height={47} />
                        </i>
                        <i>
                            <Image src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/ffffff/external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo.png" alt='github' width={48} height={48} />
                        </i>
                    </div>
                </div>
            </div>
            <div className={styles.column4}>
                <div className={styles.baixo}>
                    <div className={styles.logos}>
                        <h3>Contatos</h3>
                        <p>Entre em contato comigo!</p>
                        <i>
                            <Image src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram" width={48} height={48} />
                        </i>
                        <i>
                            <Image src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp" width={48} height={48} />
                        </i>
                        <i>
                            <Image src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin" width={47} height={47} />
                        </i>
                        <i>
                            <Image src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/ffffff/external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo.png" alt='github' width={48} height={48} />
                        </i>
                    </div>
                </div>
            </div>
            <div className={styles.column3a}>
                <div className={styles.linksMobile}>
                    <a href="/">Curriculo</a>
                    <a href="/sobre">Sobre</a>
                    <a href="/portifolio">Projetos</a>
                    <a href="/experiencia">Experiencia</a>
                    <a href="/certificacoes">Certificados</a>
                    <a href="/contato">Contato</a>
                </div>
            </div>
            <div className={styles.column5}>
                <div className={styles.esquerda}>
                    <div className={styles.linksMobile}>
                        <a href="/">Curriculo</a>
                        <a href="/sobre">Sobre</a>
                        <a href="/portifolio">Projetos</a>
                    </div>
                </div>
                <div className={styles.direita}>
                    <div className={styles.linksMobile}>
                        <a href="/experiencia">Experiencia</a>
                        <a href="/certificacoes">Certificados</a>
                        <a href="/contato">Contato</a>
                    </div>
                </div>
            </div>
        </section>

    )
}
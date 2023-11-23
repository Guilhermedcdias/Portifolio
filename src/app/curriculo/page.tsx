import BaseLayout from '../components/BaseLayout';
import styles from './page.module.scss';

export default function Curriculo() {
    return (
        <BaseLayout>
            <section className={styles.main}>
                <div className={styles.divPrincipal}>
                    <div className={styles.div}>
                        <div className={styles.parte1}>
                            <h1>Guilherme Duarte Cenzi Dias</h1>
                            <h3>Desenvolvedor De Software</h3>
                            <h5>guilhermedcdias.2023@gmail.com</h5>
                            <h5>(12) 97407-7685</h5>
                        </div>
                        <div className={styles.parte2}>
                            <h3 className={`${styles.textoPreto} ${styles.bold}`}>Resumo Profissional</h3>
                            <h5 className={`${styles.justificar} ${styles.textoPreto}`}>
                                <p>Sou um desenvolvedor de software com formação técnica em Desenvolvimento de Sistemas e atualmente cursando o quarto semestre de Desenvolvimento de Software Multiplataforma. Minha expertise abrange uma gama diversificada de linguagens de programação, incluindo TypeScript, JavaScript, Java, Python, MySQL, PHP, HTML, CSS, além de ter conhecimentos básicos em C aplicado em Arduino e ESP32.</p>
                                <p>No âmbito profissional, destaco minhas experiências na Performa Comunicação e na Vmarket, onde desenvolvi habilidades práticas e aprofundei meu conhecimento em tecnologias como Vue.js, React (incluindo React TypeScript), Express, Spring Boot, Bootstrap, Flask, Laravel, Serverless e Next.js. Participei ativamente no desenvolvimento de projetos significativos, como o site do aplicativo Web BeeIC, o site da empresa Vmarket, a plataforma de compras VmarketCompras, além de um crawler para extração de informações do Diário Oficial da União e um sistema de gerenciamento para equipamentos meteorológicos.</p>
                                <p>Meu interesse em resolver problemas complexos é demonstrado pelo desenvolvimento de soluções inovadoras, como o crawler para auxiliar empresários a obterem informações relevantes sobre funcionários. No aspecto de trabalho em equipe, sou eficiente e comunicativo, aplicando práticas de desenvolvimento ágil, especialmente Scrum, para garantir uma execução de projeto eficaz e colaborativa.</p>
                                <p>Estou sempre em busca de novos aprendizados para manter-me atualizado com as tendências e tecnologias emergentes na programação. Meus interesses se estendem ao desenvolvimento full stack, robótica com sistemas embarcados, e desenvolvimento de aplicativos web e mobile, incluindo experiência com React Native.</p>
                                <p>Minhas habilidades interpessoais, como comunicação eficaz, resolução de conflitos, criatividade e proatividade, complementam minha competência técnica, tornando-me um profissional versátil e preparado para desafios diversos. Minhas metas profissionais envolvem estabilidade em uma posição CLT, com aspirações futuras de realizar freelances e possivelmente oportunidades internacionais.</p></h5>

                        </div>
                        <div className={styles.parte3}>
                            <h3 className={`${styles.textoPreto} ${styles.bold}`}>Habilidades Técnicas</h3>
                            <div className={styles.row}>
                                <div className={styles.direita}>
                                    <div className={styles.item}>
                                        <div className={styles.tecnologia}>
                                            <h5><p className={styles.esquerda}>PHP</p><p className={styles.direita}>Conhecimento Médio</p></h5>
                                            <div className={styles.barra}>
                                                <div className={styles.php}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.item}>
                                        <div className={styles.tecnologia}>
                                            <h5><p className={styles.esquerda}>PHP</p><p className={styles.direita}>Conhecimento Médio</p></h5>
                                            <div className={styles.barra}>
                                                <div className={styles.php}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.item}>
                                        <div className={styles.tecnologia}>
                                            <h5><p className={styles.esquerda}>PHP</p><p className={styles.direita}>Conhecimento Médio</p></h5>
                                            <div className={styles.barra}>
                                                <div className={styles.php}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.item}>
                                        <div className={styles.tecnologia}>
                                            <h5><p className={styles.esquerda}>PHP</p><p className={styles.direita}>Conhecimento Médio</p></h5>
                                            <div className={styles.barra}>
                                                <div className={styles.php}></div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                </div>
                                <div className={styles.esquerda}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </BaseLayout >
    )
}
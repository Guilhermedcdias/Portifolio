import styles from './page.module.scss';
import Image from 'next/image'

export default function Footer() {
    return (
        <section className={styles.footer}>
            <div className={styles.column1}>
                <h3>Guilherme Duarte</h3>
                <p>Desenvolvedor de software</p>
                {/* <p>NodeJS | Java | React | Vue | Python | Typescript</p> */}
                {/* icones das tecnologias de repositórios online coloridos */}
                <div className={styles.logos}>
                    {/* colocando links do imgur das tecnologias de imagem respectivamente em cada i */}
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
            {/* <div className={styles.column2}>
                <h3>Fale Comigo!</h3>
                <div className={styles.contatosInfos}>
                    <i>
                        <a href="https://api.whatsapp.com/send/?phone=5512974077685&text=Oi+Guilherme%2C+Tudo+bem%3F+Quero+te+contratar%21&type=phone_number&app_absent=0" target='_blank'>
                            <Image src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp" width={48} height={48} />
                        </a>
                    </i>
                    <i>
                        <a href="https://api.whatsapp.com/send/?phone=5512974077685&text=Oi+Guilherme%2C+Tudo+bem%3F+Quero+te+contratar%21&type=phone_number&app_absent=0" target='_blank'>
                            <Image src="https://img.icons8.com/color/48/smartphone.png" alt="telefone" width={48} height={48} />
                        </a>
                    </i>
                    <i>
                        <a href="https://api.whatsapp.com/send/?phone=5512974077685&text=Oi+Guilherme%2C+Tudo+bem%3F+Quero+te+contratar%21&type=phone_number&app_absent=0" target='_blank'>
                            <Image src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp" width={48} height={48} />
                        </a>
                    </i>
                </div>
            </div> */}
            <div className={styles.column3}>
            </div>
        </section>

    )
}
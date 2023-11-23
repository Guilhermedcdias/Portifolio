import Image from "next/image";
import BaseLayout from "../components/BaseLayout";
import SwiperCoverflow from "../components/swiper";
import styles from './page.module.scss'

export default function Portifolio() {
    const slides = [
        <Image src="/images/foto2.png" alt="Imagem 2" width={500} height={300} />,
        <Image src="/images/foto1.png" alt="Imagem 1" width={500} height={300} />,
        <Image src="/images/foto3.png" alt="Imagem 3" width={500} height={300} />,
    ]
    return (
        <BaseLayout>
            <div className={styles.main}>
                <h3>Meus Projetos</h3>
                <SwiperCoverflow slides={slides} />
            </div>
        </BaseLayout>
    )
}
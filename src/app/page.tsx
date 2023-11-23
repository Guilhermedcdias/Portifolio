import Image from 'next/image'
import SwiperCoverflow from './components/swiper'
import styles from './page.module.scss'
import TextPageInicial from './components/textPageInicial'
import { HiDocument } from 'react-icons/hi'
import { BsWhatsapp } from 'react-icons/bs'
import FadeImageSlider from './components/swiperFadeEffect'
import Navbar from './components/navbar'
import Footer from './components/footer'
import BaseLayout from './components/BaseLayout'


export default function Home() {
  const slides = [
    <Image src="/images/foto2.png" alt="Imagem 2" width={500} height={300} />,
    <Image src="/images/foto1.png" alt="Imagem 1" width={500} height={300} />,
    <Image src="/images/foto3.png" alt="Imagem 3" width={500} height={300} />,
  ]

  return (
    <BaseLayout>
      <main className={styles.main}>
        <div className={styles.carousel}>

          <div className={styles.BieneVeindo}>
            <div className={styles.l1}>
              <div className={styles.img}>
                {/* <Image src={"/images/pf1.png"} alt='Foto' width={1280} height={1440} /> */}
                <FadeImageSlider />
              </div>
            </div>
            <div className={styles.l2}>
              <h1>Seja Bem Vindo ao meu <span>portifólio</span></h1>
              <p className={styles.p1}>Meu nome é Guilherme e eu sou um</p>
              <p className={styles.p2} id='mudaTexto'><span>
                <TextPageInicial time={10000} />
              </span></p>
              {/* botão pequeno a direita */}
              <div className={styles.btn}>
                <button><HiDocument />Curriculum</button>
                <button><BsWhatsapp />Entrar em Contato</button>
              </div>
              <p className={styles.p3}></p>
            </div>
          </div>

          <p>Meus Ultimos Projetos</p>
          <SwiperCoverflow slides={slides} />
        </div>
      </main>
    </BaseLayout>

  )
}

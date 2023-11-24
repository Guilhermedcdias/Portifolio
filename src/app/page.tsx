'use client'
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
import { useEffect, useState } from 'react'
import projetos from '../data/projetos.json';
import Card from "./components/card";
import ModalComponent from './components/modal'

interface cardProps {
  title: string;
  Projeto: string;
  Descricao: string;
  Participacao: string;
  url: string;
}


export default function Home() {
  const [title, setTitle] = useState('');
  const [Projeto, setProjeto] = useState('');
  const [Descricao, setDescricao] = useState('');
  const [Participacao, setParticipacao] = useState('');
  const [url, setUrl] = useState('');
  const [show, setShow] = useState(false);

  const [slides, setSlides] = useState<React.ReactNode[]>([]);

  const handleShowModal = ({ title, Projeto, Descricao, Participacao, url }: cardProps) => {
    setTitle(title);
    setProjeto(Projeto);
    setDescricao(Descricao);
    setParticipacao(Participacao);
    setUrl(url);
    setShow(true);
  }

  const handleClose = () => setShow(false);

  useEffect(() => {
    const slidesArray = Object.values(projetos).map((projeto, index) => (
      <Card
        Descricao={projeto.Descricao}
        Participacao={projeto.Participacao}
        Projeto={projeto.Projeto}
        handleShowModal={handleShowModal}
        title={projeto.title}
        url={projeto.url}
        key={index}
      />
    ));
    setSlides(slidesArray);
  }, []);

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

      <ModalComponent Descricao={Descricao} Participação={Participacao} Projeto={Projeto} show={show} handleClose={handleClose} title={title} url={url} />

    </BaseLayout>

  )
}

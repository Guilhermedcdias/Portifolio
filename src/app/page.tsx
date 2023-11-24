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
// import projetos from '../data/projetos.json';
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

  const projetos = {
    "1": {
      "title": "API - 1º Semestre",
      "Projeto": "Flask, MySQL, HTML, CSS, JavaScript, Figma, Slack.",
      "Descricao": "Sistema de Helpdesk para gerenciar ocorrências em um prédio. Permite registro e acompanhamento de problemas, atribuição automática de executores, aceitação/rejeição de solicitações, resolução de problemas com atualização de status, avaliação de serviços e relatórios para administração.",
      "Participacao": "Como Product Owner neste projeto, minha principal responsabilidade foi atuar como um elo entre o cliente e a equipe de desenvolvimento. Meu papel envolveu entender as necessidades do cliente e traduzi-las em requisitos claros e alcançáveis para a equipe. Colaborei ativamente no planejamento, definição de prioridades e garantia de que as entregas estavam alinhadas às expectativas do cliente. Eu também desempenhei um papel fundamental na facilitação da comunicação entre todas as partes envolvidas, garantindo que a visão do projeto fosse claramente compreendida e executada com sucesso. Meu envolvimento no desenvolvimento do site incluiu a supervisão de aspectos técnicos, garantindo que o uso de Python (Flask), HTML, CSS e JS estivesse em linha com os objetivos do projeto.",
      "url": "https://github.com/404-BIS/Sistema-Gestao-Servicos"
    },
    "2": {
      "title": "API - 2º Semestre",
      "Projeto": "JavaScript, CSS, HTML, React, TypeScript, Python.",
      "Descricao": "Crawler com sistema de gerenciamento de associados para busca, leitura e distinção de conteúdo relacionado aos Professores Associados em diferentes fontes de dados. Automatiza o processo de registro de processos publicados e emite relatórios diários.",
      "Participacao": "No papel de Scrum Master, tive a responsabilidade de orientar e facilitar a aplicação do framework Scrum dentro da equipe. Minha atuação foi essencial para assegurar que a equipe compreendesse e seguisse os princípios e práticas do Scrum. Fiz isso removendo obstáculos, facilitando a comunicação e colaboração entre os membros da equipe e promovendo melhorias contínuas ao longo do processo. Além disso, contribuí ativamente para o desenvolvimento do projeto, trabalhando tanto no backend, em TypeScript, quanto no desenvolvimento de um bot em Python e JavaScript, responsável por baixar e classificar arquivos PDF. Essa experiência foi particularmente desafiadora e gratificante, permitindo-me aprimorar minhas habilidades técnicas e de liderança.",
      "url": "https://github.com/MidNight-Tecnology/API-MidAll-2022.2"
    },
    "3": {
      "title": "API - 3º Semestre",
      "Projeto": "React, TypeScript, JavaScript, Java, Node, MySQL, Spring Boot.",
      "Descricao": "Sistema para cadastro de clientes e gestão de títulos com parcelas, integrando-se à API dos correios. Inclui automação de processamento de parcelas, criação de títulos, relatórios de clientes adimplentes e inadimplentes, e segmentação de usuários por funções empresariais.",
      "Participacao": "Como Product Owner neste projeto, meu papel foi semelhante ao exercido no primeiro semestre, mas com desafios e aprendizados adicionais. Liderei a comunicação entre o cliente e a equipe de desenvolvimento, garantindo que as necessidades e expectativas fossem claramente entendidas e atendidas. Além disso, participei ativamente no desenvolvimento do backend, utilizando Java para criar todos os CRUDs e relacionamentos, além de contribuir para a integração com o front-end. Essa experiência me permitiu aprofundar meu conhecimento em Java e TypeScript, enfrentando desafios técnicos e contribuindo significativamente para o sucesso do projeto.",
      "url": "https://github.com/orgs/CopiloTTeam/repositories"
    }
  };

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

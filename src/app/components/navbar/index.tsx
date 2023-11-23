'use client'
import React, { useState } from "react";
import styles from './page.module.scss';
import TypeIt from "typeit-react";
import { motion } from "framer-motion";
import { BsList } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Stint_Ultra_Condensed } from "next/font/google";


export default function Navbar() {

    const [isActive, setIsActive] = useState(true);

    // monitorando o useState para adicionar a classe none ao navbar quando ele estiver ativo
    const mudanavbar = () => {
        setIsActive(!isActive);
        const navbar = document.getElementsByClassName(styles.navbar)[0] as HTMLElement;
        const conteudo = document.getElementsByClassName(styles.conteudo)[0] as HTMLElement;
        if (isActive) {
            navbar.style.height = "100vh";
            navbar.style.borderBottomLeftRadius = "0px";
            navbar.style.borderBottomRightRadius = "0px";
            conteudo.style.position = "fixed";
            conteudo.style.backgroundColor = "black";
        } else {
            navbar.style.height = "70vh";
            navbar.style.borderBottomLeftRadius = "50% 40px";
            navbar.style.borderBottomRightRadius = "50% 40px";
            conteudo.style.position = "absolute";
            conteudo.style.backgroundColor = "transparent";
        }
    }


    const beforeInit = (instance: any) => {
        instance
            .type("Guilherme Duaret")
            .pause(250)
            .delete(2)
            .pause(200)
            .type("te.")
            .pause(5000);


        return instance;
    };

    return (
        <section className={styles.navbar}>
            <div className={styles.conteudo}>
                <div className={isActive ? styles.logo : styles.none}>
                    <a href="/" className="text-decoration-none">
                        <TypeIt options={{ loop: true, speed: 150 }} getBeforeInit={(instance) => beforeInit(instance)} />
                    </a>
                </div>
                <div className={styles.menu} onClick={() => mudanavbar()}>
                    <div className={styles.menuIcon}>
                        {/* se estiver ativo o icone sera diferente do inativo */}
                        <div className={isActive ? styles.menuIconActive : styles.menuIconInactive}>
                            <i>
                                <BsList />
                            </i>
                        </div>
                        <div className={isActive ? styles.menuIconInactive : styles.menuIconActive}>
                            <i>
                                <AiOutlineClose />
                            </i>
                        </div>
                    </div>
                </div>
                <div className={isActive ? styles.none : styles.linksMobile}>
                    <a href="/curriculo">Curriculo</a>
                    {/* <a href="/sobre">Sobre</a> */}
                    <a href="/portifolio">Projetos</a>
                    {/* <a href="/experiencia">Experiencia</a> */}
                    {/* <a href="/certificacoes">Certificados</a> */}
                    <a href="/contato">Contato</a>
                </div>
                <div className={isActive ? styles.links : styles.none}>
                    <a href="/curriculo">Curriculo</a>
                    {/* <a href="/sobre">Sobre</a> */}
                    <a href="/portifolio">Projetos</a>
                    {/* <a href="/experiencia">Experiencia</a> */}
                    {/* <a href="/certificacoes">Certificados</a> */}
                    <a href="/contato">Contato</a>
                </div>
            </div>
            <div className={isActive ? styles.background : styles.none}>
                <div className="custom-animated-circles">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>

                <div className={styles.imagem1}>
                    <motion.div
                        className="box"
                        initial={{ opacity: 1 }}
                        animate={{
                            rotate: [0, 20, 0, -20, 0],
                            x: [0, 5, 5, 0, 0]
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 2,
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 1
                        }}

                    >
                        <img src="/images/1.svg" alt="" />
                    </motion.div>
                </div>
                <div className={styles.imagem2}>
                    <motion.div
                        className="box"
                        initial={{ opacity: 1 }}
                        animate={{
                            rotate: [0, 60, 120, 180, 240, 300, 360]
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 2,
                            times: [0.2, 0.4, 0.6, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 1
                        }}

                    >
                        <img src="/images/2.svg" alt="" />
                    </motion.div>

                </div>
                <div className={styles.imagem3}>
                    <motion.div
                        className="box"
                        initial={{ opacity: 1 }}
                        animate={{
                            y: [0, 5, 5, 0, 0],
                            opacity: [1, 0.5, 0.5, 1, 1]
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 2,
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 1
                        }}

                    >
                        <img src="/images/3.svg" alt="" />
                    </motion.div>

                </div>
                <div className={styles.imagem4}>
                    <motion.div
                        className="box"
                        initial={{ opacity: 1 }}
                        animate={{
                            scale: [0.8, 1.2, 0.8]
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 2,
                            times: [0, 1, 2],
                            repeat: Infinity,
                            repeatDelay: 1
                        }}

                    >
                        <img src="/images/4.svg" alt="" />
                    </motion.div>

                </div>
                <div className={styles.imagem5}>
                    <img src="/images/5.svg" alt="" />

                </div>

                <div className={styles.imagem6}>
                    <motion.div
                        className="box"
                        initial={{ opacity: 1 }}
                        animate={{
                            rotate: [0, 20, 0, -20, 0],
                            x: [0, 5, 5, 0, 0]
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 2,
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 1
                        }}

                    >
                        <img src="/images/1.svg" alt="" />
                    </motion.div>
                </div>

                <div className={styles.imagem7}>
                    <motion.div
                        className="box"
                        initial={{ opacity: 1 }}
                        animate={{
                            rotate: [0, 60, 120, 180, 240, 300, 360]
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 2,
                            times: [0.2, 0.4, 0.6, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 1
                        }}

                    >
                        <img src="/images/2.svg" alt="" />
                    </motion.div>

                </div>

                <div className={styles.imagem8}>
                    <img src="/images/5.svg" alt="" />

                </div>
            </div>
        </section>
    )
}

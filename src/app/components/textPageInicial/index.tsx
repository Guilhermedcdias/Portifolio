'use client'
import React, { useState, useEffect } from 'react';
import styles from './page.module.scss';
import TypeIt from "typeit-react";

interface TextPageInicialProps {
    time: number;
}

export default function TextPageInicial({ time }: TextPageInicialProps) {
    const [texto, setTexto] = useState('Desenvolvedor de Software');
    const [key, setKey] = useState(0); // chave para forçar a recriação do componente

    const textos = [
        'Desenvolvedor de Software',
        'Desenvolvedor Web',
        'Desenvolvedor Mobile',
        'Desenvolvedor FullStack',
        'Desenvolvedor BackEnd',
        'Desenvolvedor FrontEnd',
        'Desenvolvedor Java',
        'Desenvolvedor JavaScript',
        'Desenvolvedor React',
        'Desenvolvedor React Native',
        'Desenvolvedor NodeJs',
        'Desenvolvedor PHP',
        'Desenvolvedor Python',
        'Desenvolvedor C',
        'Desenvolvedor TypeScript',
        'Designer Gráfico',
        'Designer Web',
        'Designer Mobile',
    ]

    // Função para atualizar o texto
    const atualizarTexto = () => {
        const textoAleatorio = textos[Math.floor(Math.random() * textos.length)];
        setTexto(textoAleatorio);
        setKey(prevKey => prevKey + 1); // incrementa a chave para recriar o componente TypeIt
    };

    useEffect(() => {
        const intervalId = setInterval(atualizarTexto, 6000); // Atualiza o texto a cada 5 segundos

        // Limpeza do intervalo ao desmontar o componente
        return () => clearInterval(intervalId);
    }, []);

    const beforeInit = (instance: any) => {
        instance.type(texto).pause(time);
        return instance;
    };

    return (
        <TypeIt key={key} className={styles.text} options={{ loop: true, speed: 150 }} getBeforeInit={(instance) => beforeInit(instance)} />
    );
}

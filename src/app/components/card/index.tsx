import { Button } from "react-bootstrap";
import styles from './page.module.scss';

interface Props {
    title: string;
    Projeto: string;
    Descricao: string;
    Participacao: string;
    url: string;
}

interface CardProps {
    title: string;
    Projeto: string;
    Descricao: string;
    Participacao: string;
    url: string;
    handleShowModal: ({ title, Projeto, Descricao, Participacao, url }: Props) => void;
}
export default function Card({ handleShowModal, title, Projeto, Descricao, Participacao, url }: CardProps) {
    return (
        <div className={styles.fundo}>
            <div className={styles.title}>
                <h1>{title}</h1>
            </div>
            <div className={styles.btn}>
                <Button color="primary" onClick={() => handleShowModal({title, Projeto, Descricao, Participacao, url})}>Detalhes</Button>
            </div>
        </div>
    )
}
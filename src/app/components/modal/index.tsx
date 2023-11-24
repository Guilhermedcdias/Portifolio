import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './page.module.scss';
interface IModalProps {
    title: string;
    Projeto: string;
    Descricao: string;
    Participação: string;
    url: string;
    show: boolean;
    handleClose: () => void;
}

export default function ModalComponent(props: IModalProps) {
    return (
        <Modal show={props.show} size='xl'>
            <Modal.Header>
                <Modal.Title className={styles.dark}>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h2 className={styles.dark}>{props.Descricao}</h2>
                <h5 className={styles.dark}>Tecnologias: {props.Projeto}</h5>
                <p className={styles.dark}>{props.Participação}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>

                <a href={props.url} target='_blank'>
                    <Button variant="primary">
                        Ver Mais
                    </Button>
                </a>
            </Modal.Footer>
        </Modal>
    );
}
import { Button, Modal } from 'flowbite-react';
import React from 'react';
import SpinerUtil from '../spinner/SpinerUtil';

function VentanaModal({ titulo, size, children, openModal, cerrarModal, hanleSubmit, loading }) {

    return (
        <Modal dismissible size={size} show={openModal} onClose={cerrarModal}>
            <Modal.Header>{titulo}</Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={hanleSubmit}>{loading ? <SpinerUtil size={5} /> : 'Guardar'}</Button>
                <Button color="red" onClick={cerrarModal}>
                    Cancelar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default VentanaModal;
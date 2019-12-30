import React from 'react';
import { Modal, Icon, Form, Button, Message } from 'semantic-ui-react';

const UserFormComponent = ({
    children,
    open,
    id,
    firstName,
    lastName,
    msgError,
    onChange,
    onOpen,
    onClose,
    onSave,
    onDelete,
}) => (
        <Modal
            open={open}
            trigger={children}
            onOpen={onOpen}
            size='small'
        >
            <Icon link size='large' name='cancel' style={{ float: 'right', margin: '10px' }} onClick={onClose} />
            <Modal.Header>Usuário</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Form onSubmit={onSave}>
                        <Form.Input label="Nome" name="firstName" value={firstName} onChange={onChange} />
                        <Form.Input label="Sobrenome" name="lastName" value={lastName} onChange={onChange} />
                    </Form>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                {msgError && (
                    <Message warning compact>{msgError}</Message>
                )}
                {id && (
                    <Button danger onClick={onDelete}>
                        <Icon name='trash' /> Excluir
                    </Button>
                )}
                <Button primary onClick={onSave}>
                    <Icon name='save' /> Salvar
                </Button>
            </Modal.Actions>
        </Modal>
    );

export default UserFormComponent;
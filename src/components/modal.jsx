import { useState } from 'react';
import { TextField, Modal, Typography, Box, Stack, Button } from '@mui/material';
import { addUser, deleteUser } from '../../services/users';


export const ModalView = ({ open, setOpen, isDeleteUser }) => {
    const [nombre, setNombre] = useState('')
    const [description, setDescripcion] = useState('')

    const handleClose = () => {
        setOpen(false);
        setNombre('')
        setDescripcion('')
    }

    const onChangeInputhandler = ({ target }) => {
        if (target.id == 'deletionReason')
            setDescripcion(target.value)
        else
            setNombre(target.value)
    }

    const makeServiceCall = () => {
        if (isDeleteUser) {
            if (!description || !nombre)
                alert('Hay campos faltantes para continuar con el proceso!')
            else {
                deleteUser(nombre)
                handleClose()
            }
        } else {
            if (!nombre)
                alert('Hay campos faltantes para continuar con el proceso!')
            else {
                addUser(nombre)
                handleClose()
            }

        }
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {isDeleteUser ? "Eliminar Usuario" : "Registrar Usuario"}
                    </Typography>
                    <Stack>
                        <TextField id="username" label="Nombre del usuario" variant="standard" onChange={onChangeInputhandler} value={nombre} />
                        {isDeleteUser && <TextField id="deletionReason" label="Razon de eliminar usuario" variant="standard" onChange={onChangeInputhandler} value={description} />}
                    </Stack>
                    <Stack spacing={2} direction="row" justifyContent={"center"} marginTop={3}>
                        <Button variant="contained" color='error' onClick={handleClose}>Cancelar</Button>
                        {isDeleteUser ? <Button variant="contained" onClick={makeServiceCall}>Eliminar</Button>
                            : <Button variant="contained" onClick={makeServiceCall}>Agregar</Button>}
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}
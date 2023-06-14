import { TextField, Modal, Typography, Box, Stack, Button } from '@mui/material';


const ModalView = ({ open, setOpen, isDeleteUser }) => {
    const handleClose = () => setOpen(false);

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
                        <TextField id="standard-basic2" label="Nombre del usuario" variant="standard" />
                        {isDeleteUser && <TextField id="standard-basic3" label="Razon de eliminar usuario" variant="standard" />}
                    </Stack>
                    <Stack spacing={2} direction="row" justifyContent={"center"} marginTop={3}>
                        <Button variant="contained" color='error' onClick={handleClose}>Cancelar</Button>
                        <Button variant="contained">Confirmar</Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}



export default ModalView;
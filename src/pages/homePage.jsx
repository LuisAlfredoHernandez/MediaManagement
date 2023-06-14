import ImagesGrid from '../components/imagesGrid'
import PaginationRounded from '../components/pagination'
import DropDown from '../components/dropDown';
import ModalView from '../components/modal'
import { TextField, Stack, Box, Button } from '@mui/material';
import { useState } from 'react'


const Homepage = ({ data }) => {
    const searchImageByArr = ['Nombre', 'Usuario', 'Tipo']
    const imageLimitValuesArr = [10, 20, 50, 100]
    const [open, setOpen] = useState(false);
    const [deleteUser, setDeleteUser] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleAddUser = () => {
        setDeleteUser(false)
        handleOpen()
    };

    const handleDeleteUser = () => {
        setDeleteUser(true)
        handleOpen();
    }

    return (
        <>
            <Box>
                <Stack spacing={4} direction="row" justifyContent={"center"} >
                    <Button variant="contained" onClick={handleAddUser}>Agregar Usuario</Button>
                    <Button variant="contained" color='error' onClick={handleDeleteUser}>Eliminar Usuario</Button>
                </Stack>
                <Stack spacing={4} direction="row" m={5} justifyContent={"center"}>
                    <TextField id="standard-basic" label="Buscar imagen..." variant="standard" />
                    <DropDown width={150} height={50} arr={searchImageByArr} />
                </Stack>
                <Stack direction="row" >
                    <ImagesGrid itemData={data} />
                </Stack>
                <Stack direction="row" m={5} spacing={4} justifyContent={"center"}>
                    <PaginationRounded />
                    <DropDown width={75} height={50} arr={imageLimitValuesArr} />
                </Stack>

                <ModalView open={open} setOpen={setOpen} isDeleteUser={deleteUser} />
            </Box>
        </>
    );
}

export default Homepage
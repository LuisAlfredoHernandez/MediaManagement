import ImagesGrid from '../components/imagesGrid'
import PaginationRounded from '../components/pagination'
import DropDown from '../components/dropDown';
import ModalView from '../components/modal'
import { TextField, Stack, Box, Button } from '@mui/material';
import { useState } from 'react'
import { getResourcesByDropDown } from '../../services/images';


const Homepage = ({ data, setData }) => {
    const searchImageByArr = ['Nombre', 'Usuario', 'Tipo']
    const imageLimitValuesArr = [10, 20, 50, 100]
    const [open, setOpen] = useState(false);
    const [deleteUser, setDeleteUser] = useState(false);
    const [dropDownValue, setDropDownValue] = useState(searchImageByArr[0])
    const [dropDownPaginationValue, setdropDownPaginationValue] = useState(imageLimitValuesArr[0])
    const [inputImageText, setinputImageText] = useState('')
    const [paginationValue, setPaginationValue] = useState(1)

    const handleOpen = () => setOpen(true)

    const handleAddUser = () => {
        setDeleteUser(false)
        handleOpen()
    }

    const handleDeleteUser = () => {
        setDeleteUser(true)
        handleOpen()
    }

    const onInputChange = async ({ target }) => {
        const imageInputValue = target.value
        setinputImageText(imageInputValue)
        const { data } = await getResourcesByDropDown(dropDownValue.toLocaleLowerCase(), imageInputValue)
        setData(data.resources)
    }


    return (
        <>
            <Box>
                <Stack spacing={4} marginBottom={8} direction="row" justifyContent={"center"} >
                    <Button variant="contained" onClick={handleAddUser}>Agregar Usuario</Button>
                    <Button variant="contained" color='error' onClick={handleDeleteUser}>Eliminar Usuario</Button>
                </Stack>
                <Stack spacing={4} direction="row" marginTop={5} justifyContent={"center"}>
                    <TextField id="standard-basic" label="Buscar imagen por..." variant="standard" onChange={onInputChange} value={inputImageText} />
                    <DropDown width={150} height={50} arr={searchImageByArr} setDropDownValue={setDropDownValue}
                        inputImageText={inputImageText} setinputImageText={setinputImageText}
                    />
                </Stack>
                <Stack direction="row" >
                    <ImagesGrid itemData={data} />
                </Stack>
                <Stack direction="row" m={5} spacing={4} justifyContent={"center"}>
                    <PaginationRounded setPaginationValue={setPaginationValue} dropDownPaginationValue={dropDownPaginationValue}
                        setData={setData} setinputImageText = {setinputImageText}
                    />
                    <DropDown width={75} height={50} arr={imageLimitValuesArr} paginationValue={paginationValue}
                        setdropDownPaginationValue={setdropDownPaginationValue} setData={setData} setinputImageText={setinputImageText}
                    />
                </Stack>
                <ModalView open={open} setOpen={setOpen} isDeleteUser={deleteUser} />
            </Box>
        </>
    );
}

export default Homepage
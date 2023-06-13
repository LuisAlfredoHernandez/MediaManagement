import ImagesGrid from '../components/imagesGrid'
import PaginationRounded from '../components/pagination'
import Button from '@mui/material/Button';
import { TextField, Stack, Box } from '@mui/material';
import DropDown from '../components/dropDown';


const Homepage = ({ data }) => {
    const searchImageByArr = ['Nombre', 'Usuario', 'Tipo']
    const imageLimitValuesArr = [10, 20, 50, 100]
    return (
        <>
            <Box>
                <Stack spacing={4} direction="row" justifyContent={"center"} >
                    <Button variant="contained">Agregar Usuario</Button>
                    <Button variant="contained" color='error'>Eliminar Usuario</Button>
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
                    <DropDown width={75} height={50} arr={imageLimitValuesArr}/>
                </Stack>
            </Box>
        </>
    );
}

export default Homepage
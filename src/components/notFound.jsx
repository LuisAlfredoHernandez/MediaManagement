import { Stack } from '@mui/material'
import img1 from '../assets/276.png'


const NotFound = () => {
    return (
        <Stack width={'90%'} justifyContent={"center"}>
            <img className='center' src={img1}/>
             <h3>No se encontraron resultados</h3>                
        </Stack>
    );
}

export default NotFound;
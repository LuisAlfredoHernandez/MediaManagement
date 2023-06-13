import ImagesGrid from '../components/imagesGrid'
import PaginationRounded from '../components/pagination'
import Button from '@mui/material/Button';
import {TextField} from '@mui/material';
import RadioButtonsGroup from '../components/radioButton';
import DropDown from '../components/dropDown';

const Homepage = ({ data }) => {
    return (
        <>
            <TextField id="standard-basic" label="Standard" variant="standard" />
            <DropDown/>
            <Button variant="contained">Agregar Usuario</Button>
            <Button variant="contained" color='error'>Eliminar Usuario</Button>
            <ImagesGrid itemData={data} />
            <PaginationRounded />
        </>
    );
}

export default Homepage
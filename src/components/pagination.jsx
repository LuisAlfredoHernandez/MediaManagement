import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { getResources } from '../../services/images';
import { calculatePagination } from '../helpers';


const PaginationRounded = ({ setPaginationValue, dropDownPaginationValue, setData }) => {

    const handleChange = async (event, value) => {
        const pagination = value
        setPaginationValue(pagination)
        const paginationValue = calculatePagination(pagination)
        const { data } = await getResources(paginationValue, dropDownPaginationValue)
        setData(data.resources)
    }


    return (
        <Stack spacing={2} justifyContent={"center"}>
            <Pagination count={10} shape="rounded" onChange={handleChange} />
        </Stack>
    );
}


export default PaginationRounded
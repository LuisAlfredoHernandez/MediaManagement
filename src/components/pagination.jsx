import { Stack, Pagination } from '@mui/material';
import { getResources } from '../../services/images';
import { calculatePagination } from '../helpers';


export const PaginationRounded = ({ setPaginationValue, paginationValue ,dropDownPaginationValue, setData, setinputImageText }) => {

    const handleChange = async (event, value) => {
        const pagination = value
        setinputImageText('')
        setPaginationValue(pagination)
        const paginationValue = calculatePagination(pagination)
        const { data } = await getResources(paginationValue, dropDownPaginationValue)
        setData(data.resources)
    }

    return (
        <Stack spacing={2} justifyContent={"center"}>
            <Pagination count={10} page={paginationValue} shape="rounded" onChange={handleChange} />
        </Stack>
    );
}
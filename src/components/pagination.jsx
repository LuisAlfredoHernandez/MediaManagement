import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


 const PaginationRounded = () => {
    return (
        <Stack spacing={2} justifyContent={"center"}>
            <Pagination count={10} shape="rounded" />
        </Stack>
    );
}


export default PaginationRounded
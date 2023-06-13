import { FormControl, TextField, Select, MenuItem } from "@mui/material";


const DropDown = () => {
    return(
    <Select
        sx={{
            marginTop: 35,
            width: 150,
            height: 50,
        }}
    >
        <MenuItem value={1}>Nombre</MenuItem>
        <MenuItem value={2}>Usuario</MenuItem>
        <MenuItem value={3}>Tipo</MenuItem>
    </Select>
)}

export default DropDown;
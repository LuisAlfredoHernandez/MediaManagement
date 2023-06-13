import { Select, MenuItem } from "@mui/material";


const DropDown = ({ width, height, arr }) => {
    return (
        <Select
            defaultValue={1}
            sx={{
                width: width,
                height: height,
            }}
        >
            {
                arr.map((element, index) => {
                    return <MenuItem key={index} value={index + 1}>{element}</MenuItem>
                })
            }
        </Select>
    )
}

export default DropDown;
import { Select, MenuItem } from "@mui/material";


const DropDown = ({ width, height, arr, imagesServiceCall }) => {
    const handleChange = ({target}) => {
        imagesServiceCall(target.value)
    }

    return (
        <Select
            defaultValue={arr[0]}
            onChange={handleChange}
            sx={{
                width: width,
                height: height,
            }}
        >
            {
                arr.map((element, index) => {
                    return <MenuItem key={index} value={element}>{element}</MenuItem>
                })
            }
        </Select>
    )
}

export default DropDown;
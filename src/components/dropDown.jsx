import { Select, MenuItem } from "@mui/material";
import { getResources, getResourcesByDropDown } from "../../services/images";


const DropDown = ({ width, height, arr, setDropDownValue, setdropDownPaginationValue, inputImageText, paginationValue, setData, setinputImageText }) => {

    const handleChange = ({ target }) => {
        const dropDownValue = target.value
        if (setDropDownValue)
            setRoadByParamCall(dropDownValue)
        else
            setRoadGetResourcesCall(dropDownValue)
    }

    const setRoadByParamCall = (dropDownValue) => {
        setDropDownValue(dropDownValue.toLowerCase())
        setinputImageText('')
        if (inputImageText)
            getResourcesByDropDown(dropDownValue, inputImageText)
    }

    const setRoadGetResourcesCall = async (dropDownValue) => {
        setdropDownPaginationValue(dropDownValue)
        setinputImageText('')
        const { data } = await getResources(paginationValue, dropDownValue)
        setData(data.resources)
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
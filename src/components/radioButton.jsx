import { FormLabel, FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material';


const RadioButtonsGroup = () => {
    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Busqueda</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="female" control={<Radio />} label="Nombre" />
                <FormControlLabel value="male" control={<Radio />} label="Usuario" />
                <FormControlLabel value="other" control={<Radio />} label="Tipo" />
            </RadioGroup>
        </FormControl>
    );
}


export default RadioButtonsGroup
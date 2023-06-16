import { TextField, Typography, Box, Stack, Button } from '@mui/material';
import { useState } from 'react';
import { addImage, deleteImage, getResources } from '../../services/images';


const FormPage = ({ isDeleteImage, setRoute, setData }) => {
    const [nombreImagen, setNombreImagen] = useState('')
    const [descriptionImage, setDescripcionImagen] = useState('')
    const [username, setUsername] = useState('')
    const [url, setUrl] = useState('')
    const [tipo, setTipo] = useState('')


    const handleClose = () => {
        setRoute('homePage')
        setNombreImagen('')
        setDescripcionImagen('')
        setUsername('')
        setUrl('')
        setTipo('')
    }

    const makeServiceCall = () => {
        if (!isDeleteImage) {
            if (!descriptionImage || !nombreImagen || username || url || tipo)
                alert('Hay campos faltantes para continuar con el proceso!')
            else
                addImage(descriptionImage, nombreImagen, username, url, tipo)
        } else {
            if (!nombreImagen)
                alert('Hay campos faltantes para continuar con el proceso!')
            else
                deleteImage(nombreImagen)
        }
        handleClose()
        callImagesService();
    }

    const callImagesService = async () => {
        const { data } = await getResources()
        setData(data.resources)
    }

    const onChangeInputhandler = ({ target }) => {
        if (target.id == 'nombreImagen')
            setNombreImagen(target.value)
        else if (target.id == 'username')
            setUsername(target.value)
        else if (target.id == 'descriptionImage')
            setDescripcionImagen(target.value)
        else if (target.id == 'url')
            setUrl(target.value)
        else if (target.id == 'imageType')
            setTipo(target.value)
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {isDeleteImage ? "Eliminar Imagen" : "Registrar Imagen"}
                </Typography>
                <Stack>
                    <TextField id="nombreImagen" label="Nombre de la imagen" variant="standard"
                        onChange={onChangeInputhandler} value={nombreImagen} />

                    {!isDeleteImage && <TextField id="descriptionImage" label="Descripcion"
                        variant="standard" onChange={onChangeInputhandler} value={descriptionImage} />
                    }
                    {!isDeleteImage && <TextField id="imageType" label="Tipo"
                        variant="standard" onChange={onChangeInputhandler} value={tipo} />
                    }
                    {!isDeleteImage && <TextField id="username" label="Nombre de usuario"
                        variant="standard" onChange={onChangeInputhandler} value={username} />
                    }
                    {!isDeleteImage && <TextField id="url" label="URL"
                        variant="standard" onChange={onChangeInputhandler} value={url} />
                    }

                </Stack>
                <Stack spacing={2} direction="row" justifyContent={"center"} marginTop={3}>
                    <Button variant="contained" color='error' onClick={handleClose}>Cancelar</Button>
                    {isDeleteImage ? <Button variant="contained" onClick={makeServiceCall}>Eliminar</Button>
                        : <Button variant="contained" onClick={makeServiceCall}>Agregar</Button>}
                </Stack>
            </Box>
        </div>
    );
}



export default FormPage;
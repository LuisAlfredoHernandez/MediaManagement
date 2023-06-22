import { TextField, Typography, Box, Stack, Button } from '@mui/material';
import { useState } from 'react';
import { addImage, deleteImage } from '../../services/images';


const FormPage = ({ isDeleteImage, setRoute, setData, data }) => {
    const [nombreImagen, setNombreImagen] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [nombre, setNombre] = useState('')
    const [src, setSrc] = useState('')
    const [tipo, setTipo] = useState('')


    const handleClose = () => {
        setRoute('homePage')
        setNombreImagen('')
        setDescripcion('')
        setNombre('')
        setSrc('')
        setTipo('')
    }

    const identifyActionType = () => {
        if (!isDeleteImage) {
            addImageImageFlow()
        } else
            deleteImageFlow()
        handleClose()
    }

    const addImageImageFlow = async () => {
        if (!descripcion || !nombreImagen || !nombre || !src || !tipo)
            alert('Hay campos faltantes para continuar con el proceso!')
        else {
            const newResource = await addImage(descripcion, nombreImagen, nombre, src, tipo)
            if (newResource.data) {
                alert("El recurso fue agregado exitosamente!")
                data.push(newResource.data)
                data = [...data]
                setData(data)
            }
        }
    }

    const deleteImageFlow = async () => {
        if (!nombreImagen)
            alert('Hay campos faltantes para continuar con el proceso!')
        else {
            const response = await deleteImage(nombreImagen)
            const recursoEliminado = response?.data?.recursoEliminado;
            if (recursoEliminado) {
                alert('El recurso fue eliminado exitosamente!')
                let newData = data.filter(val => val._id != recursoEliminado._id)
                newData = [...newData]
                console.log(newData, recursoEliminado)
                setData(newData)
            }
        }
    }

    const onChangeInputhandler = ({ target }) => {
        if (target.id == 'nombreImagen')
            setNombreImagen(target.value)
        else if (target.id == 'username')
            setNombre(target.value)
        else if (target.id == 'descriptionImage')
            setDescripcion(target.value)
        else if (target.id == 'url')
            setSrc(target.value)
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
                        variant="standard" onChange={onChangeInputhandler} value={descripcion} />
                    }
                    {!isDeleteImage && <TextField id="imageType" label="Tipo"
                        variant="standard" onChange={onChangeInputhandler} value={tipo} />
                    }
                    {!isDeleteImage && <TextField id="username" label="Nombre de usuario"
                        variant="standard" onChange={onChangeInputhandler} value={nombre} />
                    }
                    {!isDeleteImage && <TextField id="url" label="URL"
                        variant="standard" onChange={onChangeInputhandler} value={src} />
                    }
                </Stack>
                <Stack spacing={2} direction="row" justifyContent={"center"} marginTop={3}>
                    <Button variant="contained" color='error' onClick={handleClose}>Cancelar</Button>
                    {isDeleteImage ? <Button variant="contained" onClick={identifyActionType}>Eliminar</Button>
                        : <Button variant="contained" onClick={identifyActionType}>Agregar</Button>}
                </Stack>
            </Box>
        </div>
    );
}



export default FormPage;
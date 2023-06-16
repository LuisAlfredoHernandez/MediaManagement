import axios from "axios";


const deleteUser = async (nombre) => {
    try {
        const response = await axios.delete(`http://localhost:8080/api/user/${nombre}`);
        if (response.status === 200)
            alert('El usuario fue eliminado exitosamente!')
    } catch (error) {
        if (error.response.status === 404) {
            alert(`El usuario "${nombre}" no se encuentra registrado`)
        }
        console.log(error);
    }
}

const addUser = async (nombre) => {
    try {
        const response = await axios.post(`http://localhost:8080/api/user`, { nombre });
        if (response.status === 201)
            alert('El usuario fue creado exitosamente!')
    } catch (error) {
        if (error.response.status === 400) {
            alert(`El usuario "${nombre}" ya se encuentra registrado en la base de datos!`)
        }
        console.log(error);
    }
}



export {
    deleteUser,
    addUser
}
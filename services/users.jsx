import axios from "axios";


const deleteUser = async(nombre) => {
    try {
        const response = await axios.delete(`https://mmrestfullapi-production.up.railway.app/api/user`, nombre);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

const addUser = async (nombre) => {
    try {
        const response = await axios.post(`https://mmrestfullapi-production.up.railway.app/api/user`, nombre);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}






export {
    deleteUser,
    addUser
}
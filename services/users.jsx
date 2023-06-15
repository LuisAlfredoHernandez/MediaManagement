import axios from "axios";


const deleteUser = (nombre) => {
    axios.delete(`https://mmrestfullapi-production.up.railway.app/api/user`, {
        headers: {
            'content-type': 'text/json'
        },
        data: {
            nombre
        }
    });
}

const addUser = (nombre) => {
    axios.post(`https://mmrestfullapi-production.up.railway.app/api/user`, {
        headers: {
            'content-type': 'text/json'
        },
        data: {
            nombre
        }
    });
}



export {
    deleteUser,
    addUser
}
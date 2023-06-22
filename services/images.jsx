import axios from "axios"


const getResources = async (desde = 1, limite = 10) => {
  try {
    const response = await axios.get(`https://mmrestfullapi-production.up.railway.app/api/resource`, {
      params: {
        desde,
        limite
      }
    })
    return response
  } catch (error) {
    return error
  }
}


const getResourcesByDropDown = async (dropDownValue, inputValue) => {
  try {
    const response = await axios.get(`https://mmrestfullapi-production.up.railway.app/api/resource/${dropDownValue}/${inputValue}`)
    return response
  } catch (error) {
    return error
  }
}


const addImage = async (descripcion, nombreImagen, nombre, src, tipo) => {
  try {
    const response = await axios.post(`https://mmrestfullapi-production.up.railway.app/api/resource`, {
      descripcion, nombreImagen, nombre, src, tipo
    });
    return response
  } catch (error) {
    return error
  }
}


const deleteImage = async (nombre) => {
  try {
    const response = await axios.delete(`https://mmrestfullapi-production.up.railway.app/api/resource/${nombre}`);
    if (response.status === 200)
      alert('El recurso fue eliminado exitosamente!')
    return response
  } catch (error) {
    return error
  }
}


export {
  getResources,
  getResourcesByDropDown,
  addImage,
  deleteImage
}
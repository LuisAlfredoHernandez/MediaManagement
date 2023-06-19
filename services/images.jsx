import axios from "axios"


const getResources = async (desde = 1, limite = 10) => {
  try {
    const response = await axios.get(`https://mmrestfullapi-production.up.railway.app/api/resource`, {
      params: {
        desde,
        limite
      }
    })
    if (response.status === 200)
      return response
  } catch (error) {
    console.log(error)
  }
}


const getResourcesByDropDown = async (dropDownValue, inputValue) => {
  try {
    const response = await axios.get(`https://mmrestfullapi-production.up.railway.app/api/resource/${dropDownValue}/${inputValue}`)
    if (response.status === 200 && response.data.resources.length)
      return response
      else if(response.status === 404)
      alert("No se encontro la imagen!")
  } catch (error) {
    console.log(error)
    return error
  }
}


const addImage = async (descripcion, nombreImagen, nombre, src, tipo) => {
  try {
    const response = await axios.post(`https://mmrestfullapi-production.up.railway.app/api/resource`,{ 
      descripcion, nombreImagen, nombre, src, tipo });
    if (response.status === 201)
      alert('La imagen fue guardada exitosamente!')
      return response
  } catch (error) {
    if (error.response.status === 400) {
      alert(`Hubo un problema guardando la imagen, intente mas tade`)
    }
    console.log(error);
  }
}


const deleteImage = async (nombre) => {
  try {
    const response = await axios.delete(`https://mmrestfullapi-production.up.railway.app/api/resource/${nombre}`);
    if (response.status === 200)
      alert('El recurso fue eliminado exitosamente!')
      return response
  } catch (error) {
    if (error.response.status === 404) {
      alert(`El recurso "${nombre}" no se encuentra registrado`)
    }
    console.log(error);
  }
}


export {
  getResources,
  getResourcesByDropDown,
  addImage,
  deleteImage
}
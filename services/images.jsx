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
  } catch (error) {
    console.log(error)
    return error
  }
}



export {
  getResources,
  getResourcesByDropDown
}
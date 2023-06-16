import axios from "axios"


const getResources = async (desde = 1, limite = 10) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/resource`, {
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


const getResourcesByDropDown = async (inputValue, DropDownValue) => {
  // try {
  //   const response = await axios.get(`http://localhost:8080/api/resource`, {
  //     params: {
  //       desde,
  //       limite
  //     }
  //   })
  //   if (response.status === 200)
  //     console.log(response)
  // } catch (error) {
  //   console.log(error)
  // }
}



export {
  getResources,
  getResourcesByDropDown
}
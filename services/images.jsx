import axios from "axios"

const getResources = () => { 
  
 }


 const getResourcesByParam = (second) => { 
   axios.get(`https://mmrestfullapi-production.up.railway.app/api/user`, {
      headers: {
          'content-type': 'text/json'
      },
      data: {
          nombre
      }
  });
 }


export {
  getResources,
  getResourcesByParam
}
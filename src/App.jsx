import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Homepage from './pages/homePage';
import { getResources } from '../services/images';
import FormPage from './pages/formPage';


function App() {
  const [data, setData] = useState([])
  const [route, setRoute] = useState('homePage')
  const [deleteImage, setDeleteImage] = useState(false)

  const imagesServiceCall = async () => {
    const { data } = await getResources()
    setData(data.resources)
  }

  useEffect(() => {
    imagesServiceCall()
  }, [])


  return (
    <>
      {route === "homePage" && <Homepage data={data} setData={setData} setRoute={setRoute}
        setDeleteImage={setDeleteImage}
      />}
      {route === "formPage" && <FormPage setRoute={setRoute} isDeleteImage={deleteImage} />}
    </>
  )
}

export default App

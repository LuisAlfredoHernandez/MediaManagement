import { useEffect, useState } from 'react'
import { getResources } from '../services/images';
import { FormPage, Homepage } from './pages';
import './App.css'


export const App = () => {
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
      {route === "formPage" && <FormPage data={data} setData={setData} setRoute={setRoute}
        isDeleteImage={deleteImage}
      />}
    </>
  )
}
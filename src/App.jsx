import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Homepage from './pages/homePage';
import { getResources } from '../services/images';


function App() {
  const [data, setData] = useState([])


  const imagesServiceCall = async () => {
    const { data } = await getResources()
    setData(data.resources)
  }

  useEffect(() => {
    imagesServiceCall()
  }, [])


  return (
    <>
      <Homepage data={data} setData={setData} />
    </>
  )
}

export default App

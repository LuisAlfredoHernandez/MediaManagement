import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Homepage from './pages/homePage';
import { createClient } from 'pexels';


function App() {
  const [data, setData] = useState([])

  const imagesServiceCall = (per_page = 10) => {
    const client = createClient('IggwTRSujjNhvmn3qo8TVhEbcXlaJh2xZ4im6ZPen3NdhYOMjvERS6s7');
    client.photos.curated({ per_page }).then(data => setData(data.photos))
  }

  useEffect(() => {
    imagesServiceCall()
  }, [])


  return (
    <>
      <Homepage data={data} imagesServiceCall={imagesServiceCall} />
      {console.log(data)}
    </>
  )
}

export default App

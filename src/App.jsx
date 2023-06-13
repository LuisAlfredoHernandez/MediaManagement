import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { createClient } from 'pexels';
import Homepage from './pages/homePage';


function App() {
  const [data, setData] = useState([])


  const imagesCall = async () => {
    const client = createClient('IggwTRSujjNhvmn3qo8TVhEbcXlaJh2xZ4im6ZPen3NdhYOMjvERS6s7');
    client.photos.curated({ per_page: 10 }).then(data => setData(data.photos));
  }

  useEffect(() => {
    if (true) {
      imagesCall()
    }
  }, [])


  return (
    <>
      <Homepage data={data} />
      {console.log(data)}
    </>
  )
}

export default App

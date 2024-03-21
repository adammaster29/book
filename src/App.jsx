
import { HashRouter, Route, Routes } from 'react-router-dom'
import '../App.css'
import '../libro.css'
import '../detalles.css'
import Home from './componenst/Home'
import Libros from './componenst/Libros'
import libro from '/nameLibro.json';
import DetallesLibros from './componenst/DetallesLibros'
import { useEffect, useState } from 'react'

function App() {
  const [cartilla, setCartilla] = useState([]);
  const [email,setEmail] = useState()
    useEffect(() => {
      setCartilla(libro);
    }, []);
    const traerName = (data)=>{
      setEmail(data)
    }
    console.log(email);
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/'  element={<Home traerName={traerName}/>} />
          <Route path='/libros'  element={<Libros email={email} cartilla={cartilla}/> } />
          <Route path='/detalles/:id' element={<DetallesLibros  email={email} cartilla={cartilla}/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App

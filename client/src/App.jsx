import './App.css'
import './index.css'
import MenuAppBar from './componentes/Navbar.jsx'
import  SimpleContainer from './componentes/Textbox.jsx'
import { Container } from '@mui/material'
import axios from 'axios'

function App() {
  
  const api = axios.create({
    baseURL:('http//:localhost:3240')
  })
  return (
    
    <>
    
      <MenuAppBar/>
      <SimpleContainer/>

     
    </>
  )
}

export default App

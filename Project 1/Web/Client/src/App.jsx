import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CreateUser from './components/createUser'
import DeleteUser from './components/deleteUser'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/update-user' element={<CreateUser/>}></Route>
      <Route path='/delete-user' element={<DeleteUser/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

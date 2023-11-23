import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Header from './Components/Header'
import Caracteristicas from './Components/Caracteristicas'
import StayProductive from './Components/StayProductive'

function App() {

  return (
    <>
      <Nav />
      <Header/>
      <Caracteristicas/>
      <StayProductive/>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Header from './Components/Header'
import Caracteristicas from './Components/Caracteristicas'
import StayProductive from './Components/StayProductive'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'
import GetEarly from './Components/GetEarly'

function App() {

  return (
    <>
      <Nav />
      <Header/>
      <Caracteristicas/>
      <StayProductive/>
      <Testimonials/>
      <GetEarly/>
      <Footer/>
    </>
  )
}

export default App

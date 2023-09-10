import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import styles from './input.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Pages/Home'
import About from './Pages/About'
import Experience from './Pages/Experience'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
// import './App.css'

function App() {
  return (
    <div>
      {/* <div className='flex absolute'>
        <div className='relative naruto run'/>
        <div className='relative naruto-standing stand right-4 bottom-2'/>
      </div> */}
    <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/experience' element={<Experience/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </div>
  )
}

export default App

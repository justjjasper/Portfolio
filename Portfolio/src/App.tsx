import { lazy, Suspense, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import styles from './input.css'
import { Routes, Route } from 'react-router-dom'
const LazyNavBar = lazy(() => import('./NavBar'))
const LazyHome = lazy(() => import('./Pages/Home'))
const LazyAbout = lazy(() => import('./Pages/About'))
const LazyExperience = lazy(() => import('./Pages/Experience'))
const LazyProjects = lazy(() => import('./Pages/Projects'))
const LazyContact = lazy(() => import('./Pages/Contact'))
const LazyFooter = lazy(() => import('./Footer'))
import Experience from './Pages/Experience'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Footer from './Footer'

//Loading fallback is questionable

function App() {
  return (
    <div>
      {/* <div className='flex absolute'>
        <div className='relative naruto run'/>
        <div className='relative naruto-standing stand right-4 bottom-2'/>
      </div> */}
    <Suspense fallback={<div>Loading...</div>}>
      <LazyNavBar/>
    </Suspense>

    <Routes>
      <Route
        path='/'
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyHome/>
          </Suspense>
        }/>
      <Route
        path='/about'
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyAbout/>
          </Suspense>
        }/>
      <Route
        path='/experience'
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyExperience/>
          </Suspense>
        }/>
      <Route
        path='/projects'
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyProjects/>
          </Suspense>
        }/>
      <Route
        path='/contact'
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyContact/>
          </Suspense>
        }/>
    </Routes>

    <Suspense fallback={<div>Loading...</div>}>
      <LazyFooter/>
    </Suspense>
    </div>
  )
}

export default App

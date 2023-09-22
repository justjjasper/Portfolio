import { lazy, Suspense, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
const LazyNavBar = lazy(() => import('./NavBar'))
const LazyHome = lazy(() => import('./Pages/Home'))
const LazyAbout = lazy(() => import('./Pages/About'))
const LazyExperience = lazy(() => import('./Pages/Experience'))
const LazyProjects = lazy(() => import('./Pages/Projects'))
const LazyContact = lazy(() => import('./Pages/Contact'))
const LazyFooter = lazy(() => import('./Footer'))

//Loading fallback is questionable

function App() {
  return (
    <div>
      {/* <div className='flex absolute'>
        <div className='relative naruto run'/>
        <div className='relative naruto-standing stand right-4 bottom-2'/>
      </div> */}
    <Suspense>
      <LazyNavBar/>
    </Suspense>

    <Routes>
      <Route
        path='/'
        element={
          <Suspense>
            <LazyHome/>
          </Suspense>
        }/>
      <Route
        path='/about'
        element={
          <Suspense>
            <LazyAbout/>
          </Suspense>
        }/>
      <Route
        path='/experience'
        element={
          <Suspense>
            <LazyExperience/>
          </Suspense>
        }/>
      <Route
        path='/projects'
        element={
          <Suspense>
            <LazyProjects/>
          </Suspense>
        }/>
      <Route
        path='/contact'
        element={
          <Suspense>
            <LazyContact/>
          </Suspense>
        }/>
    </Routes>

    <Suspense>
      <LazyFooter/>
    </Suspense>
    </div>
  )
}

export default App

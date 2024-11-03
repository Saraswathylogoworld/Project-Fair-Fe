import { useState } from 'react'
import './App.css'

import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import Project from './pages/Project'

function App() {


  return (
    <>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register={"register"} />}/>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/project' element={<Project />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div>
     <Navbar/>
     <Sidebar/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
     </Routes>
    </div>
  )
}

export default App
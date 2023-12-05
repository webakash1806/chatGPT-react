import React from 'react'
import Home from './Pages/Home'
import Image from './Pages/Image'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/chatGPT-react" element={<Home />} />
      <Route path='/chatGPT-react/image' element={<Image />} />
    </Routes>
  )
}

export default App

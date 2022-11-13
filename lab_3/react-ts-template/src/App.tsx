import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Characters from './pages/Characters'
import './index.css'
import Series from './pages/Series'
import Comics from './pages/Comics'
import { Routes, Route } from "react-router-dom";
import Layout from './Layout'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Characters />} />
        <Route path="comics" element={<Comics />} />
        <Route path="series" element={<Series />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  )
}

export default App

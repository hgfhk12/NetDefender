import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Quiz from './pages/Quiz'
import Tips from './pages/Tips'
import Scenarios from './pages/Scenarios'
import Logs from './pages/Logs'
import FAQ from './pages/FAQ'
import PasswordCheck from './pages/PasswordCheck'
import CyberNews from './pages/CyberNews'



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/tips' element={<Tips/>}/>
        <Route path='/scenarios' element={<Scenarios/>}/>
        <Route path='/logs' element={<Logs/>}/>
        <Route path="/faq" element={<FAQ />} />
        <Route path="/password-check" element={<PasswordCheck />} />
        <Route path="/news" element={<CyberNews />} />

      </Routes>
    </BrowserRouter>
  )
}

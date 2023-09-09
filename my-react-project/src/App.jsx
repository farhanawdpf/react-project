import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Channel from './pages/Channel'
import Demo from './pages/Demo'
import Error from './pages/Error'
import UList from './components/unickList/UList'
import Officer from './components/Officer'
import Stat from './components/Stat'

function App() {

  return ( 
     <BrowserRouter>
     <Officer />
     <Stat />
     <UList />
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} >
            <Route path="/chennal" element={<Channel />} />
        </Route> 
        <Route path="/blog" element={<Blog />} > 
           <Route path="demo" element={<Demo />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/channel" element={<Channel />} />
        <Route path="*" element={<Error />} />
      </Routes>
   </BrowserRouter>
  )
}

export default App

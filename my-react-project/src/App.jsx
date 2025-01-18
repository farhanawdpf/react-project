import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Gellry from './pages/Gellry'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Card from './pages/Card'
import Master from './pages/Master'


function App() {

  return ( 
     <BrowserRouter>
    <Navbar />
    <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />   
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/gllry" element={<Gellry />} />
        <Route path="/card" element={<Card />} />
        <Route path="/master" element={<Master />} />
      </Routes>
      <Footer/>
   </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home'
import ProductDetails from './pages/ProductDetails/DetailsPage1'
import Navbar from './components/header/navbar'
import Footer from './components/footer/footer'
import ProductDetails2 from './pages/ProductDetails/DetailsPage2'
import ProductDetails3 from './pages/ProductDetails/DetailsPage3'
import ProductDetails4 from './pages/ProductDetails/DetailsPage4'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        {/* Default route "/" loads Home */}
        <Route path="/" element={<Home />} />
         <Route path="/gym" element={<ProductDetails/>} />
         <Route path="/anime" element={<ProductDetails2></ProductDetails2>} />
         <Route path="/customized" element={<ProductDetails3></ProductDetails3>} />
         <Route path="/oversized" element={<ProductDetails4></ProductDetails4>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>} />
      </Routes>
      <Footer></Footer>


    </Router>
  )
}

export default App

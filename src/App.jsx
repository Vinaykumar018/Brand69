import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        {/* Default route "/" loads Home */}
        <Route path="/" element={<Home />} />
      </Routes>

      {/* Example: your header still shows */}
      <h1 className="text-3xl font-bold underline text-red-600">
        Hello world!
      </h1>
    </Router>
  )
}

export default App

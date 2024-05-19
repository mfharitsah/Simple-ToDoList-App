import { useState } from 'react'
import { Outlet, ScrollRestoration } from "react-router-dom"

import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
    </>
  )
}

export default App

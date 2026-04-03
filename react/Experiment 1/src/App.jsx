import { useState } from 'react'
import './App.css'
import Dashboard from './pages/dashboard.jsx'  
import Logs from './pages/Logs.jsx'
import Header from './components/Header.jsx'
import Dimension from './pages/dimension.jsx'
function App() {
  return (
    <>
<div>
  <Dashboard />
  <Dimension />
  <Logs />
</div>
    </>
  )
}

export default App

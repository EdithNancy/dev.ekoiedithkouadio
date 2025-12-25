import React from 'react'
import './index.css'
import Hero from './sections/Hero'
import Header from './components/Header.jsx'


function App() {
  return (
    <>
    <div
    className="flex min-h-screen bg-black text-white font-sans bg-fixed selection:bg-purple-500/30 relative bg-linear-to-b from-purple-950 via-black to-black">
        <Header />
      <Hero/>
    </div>
        
    </>
  )
}

export default App

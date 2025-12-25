import React from 'react'
import './index.css'
import Hero from './sections/Hero'
import Header from './components/Header.jsx'
import About from './sections/About.jsx'


function App() {
  return (
    <>
      <div
      className="flex min-h-screen bg-black text-white font-sans bg-fixed selection:bg-purple-500/30 relative bg-linear-to-b from-purple-950 via-black to-black">
          <Header />
        <div className="flex flex-col w-full mt-0 gap-20">
          <Hero/>
          <About />
        </div>
      </div>
        
    </>
  )
}

export default App

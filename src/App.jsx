import React from 'react'
import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import Hero from './sections/Hero'
import Button from './components/buttons/Button'

function App() {
  return (
    <>
      <Hero/>
      
      <Header />
      <Button
            label="Télécharger CV"
            onClick={() => {
              // Logique de téléchargement du CV
            }}
          />   
    </>
  )
}

export default App

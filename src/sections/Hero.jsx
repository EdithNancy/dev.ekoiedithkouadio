import React from 'react'
import { Check, Play, Star } from 'lucide-react'
import TransparentCard from '../components/cards/TransparentCard.jsx'
import LinearBar from '../components/LinearBar.jsx'
import IMAGES from '../assets/images.js'
import Button from '../components/buttons/Button.jsx'


const Hero = () => {
return (
    <>

        <div className="flex flex-col md:flex-row min-h-screen pt-10 mx-14">
            
            {/* PARTIE GAUCHE : Texte et contenu */}
            <main className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-start align-middle px-12 md:px-24 mt-16 md:mt-24">
                
                <div className="mb-8 flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                    <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse"></span>
                    <p className="text-xs font-medium text-purple-200 uppercase tracking-widest">
                        KEE : Echouer c'est ne pas tenter.
                    </p>
                </div>

                <div className="mb-6 text-center md:text-left">
                         <h1 className="italic font-light font-serif text-purple-400 text-5xl">Developpeur Fullstack et IA et Big Data</h1>
                </div>

                <div className="max-w-xl text-center md:text-left z-10">
                    {/* Titre Principal */}
                    <h1 className="mb-8 text-6xl md:text-7xl font-serif font-medium tracking-tight bg-linear-to-br from-white via-white to-gray-500 bg-clip-text text-transparent">Kouadio
                         <span className="italic font-light text-purple-400 text-5xl">+</span>
                    </h1>
                    

                    <LinearBar className={"bg-gray-600 "}/>  
                    
                    <p className="mb-10 md:text-xl text-gray-300 leading-relaxed">
                        <p className='mb-4'><span className='text-bold italic font-bold'>Développer - Analyser -Scaler.</span></p> 
                        <p className='text-base'>
                                Développeur logiciel passionnée par l'écosystème Data. <br />
                                Mon letmotiv : bâtir le pont entre le code haute performance et l'exploitation massive de données pour créer des applications intelligentes et scalables.
                        </p>
                    </p>

                    <LinearBar className={"bg-gray-600 "}/> 
                    
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <Button label="Découvrez" variant="white" onClick={() => {}}/>
                        <Button label="CV ↗" variant="transparent" onClick={() => {}} />
                    </div>
                    
                </div>

                {/* Glows repositionnés pour ne pas gêner */}
                <div className="absolute top-1/4 left-20 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] -z-10"></div>
            </main>

            {/* PARTIE DROITE : Image et Cartes transparentes */}
            <div className="relative w-full md:w-1/2 h-125 md:h-screen flex items-center justify-center p-6 md:p-12 overflow-visible ">
                <div className="relative w-full h-full max-h-175">
                    {/* L'image principale */}
                    <img
                        src={IMAGES.photo_Edithekoi}
                        alt="Main showcase"
                        className="w-150 h-150 object-cover rounded-4xl shadow-2xl border border-white/10"
                    />
                    
                    {/* Carte 1: How is the fit? */}
                    <TransparentCard className="absolute top-[15%] -left-10 w-48 py-2 px-3 flex items-center space-x-2">
                        <div className="bg-orange-500 rounded-full p-1">
                            <Check size={16} className="text-white" />
                        </div>
                        <p className="text-gray-200 text-sm">Dev mobile / Web, Backend / Frontend</p>
                    </TransparentCard>

                    {/* Carte 2: Design? */}
                    <TransparentCard className="absolute top-[45%] -left-16 w-56 py-2 px-3 flex items-center space-x-2">
                        <div className="bg-blue-500 rounded-full p-1">
                            <Check size={16} className="text-white" />
                        </div>
                        <p className="text-gray-200 text-sm">IA, ML, Agent IA, Big Data</p>
                    </TransparentCard>

                    {/* Carte 3: 60% */}
                    <TransparentCard className="absolute top-[10%] -right-8 w-44 p-4 text-center">
                        <p className="text-gray-400 text-[10px] uppercase mb-1">— Vous satisfaire à</p>
                        <h2 className="text-white text-4xl font-bold">+95%</h2>
                        <p className="text-gray-400 text-[10px]">Mon objectif</p>
                    </TransparentCard>

                    {/* Carte 4: Nike Shoe */}
                    <TransparentCard className="absolute bottom-[10%] -right-12 w-52 p-4">
                        <h3 className="text-white font-medium text-sm mb-1">Ba</h3>
                        <p className="text-gray-300 text-lg font-bold mb-1">$849.99</p>
                        <div className="flex items-center text-xs text-gray-400">
                            <Star size={12} fill="gold" stroke="gold" className="mr-1" />
                            <span>4.6</span>
                        </div>
                    </TransparentCard>
                </div>
            </div>
        </div>
    </>
)
}

export default Hero

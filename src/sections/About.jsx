import React from 'react'
import Button from '../components/buttons/Button'
import LinearBar from '../components/LinearBar'


const About = () => {
  return (

<div className="relative min-h-screen w-full px-6 md:px-12 mt-8 md:mt-12 flex items-center justify-center py-20">

    <div 
        className="absolute inset-0 bg-cover bg-center opacity-40" 
        style={{ 
            backgroundImage: "url('/images/developper_IA.jpg')", 
            filter: 'brightness(0.7) contrast(1.2)',
            backgroundAttachment: 'fixed' // Pour garder l'effet de profondeur au scroll
        }}
    >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
    </div> 

    {/* Contenu - Augmentation max-w pour plus d'aisance */}
    <div className="relative z-10 text-center max-w-3xl">
        
        {/* Titre - Ajustement des tailles pour éviter l'écrasement */}
        <h1 className="mb-8 tracking-tighter italic font-light font-serif text-purple-400 text-4xl md:text-6xl">
            Découvrez maintenant ! <br className="hidden md:block" /> 
            <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent not-italic font-midd">
                Edith
            </span>
        </h1>

        {/* Corps de texte - Div au lieu de P pour la validité HTML */}
        <div className="mx-auto text-base md:text-lg font-light text-gray-300 leading-relaxed">
            <p className="mb-6">
                Je suis <span className="text-white font-medium">KOUADIO EKOI EDITH</span>, 
                Développeur Fullstack de métier, j'allie la rigueur du code à la puissance de l'IA et du Big Data. Je ne me contente pas de créer des algorithmes : je bâtis les architectures capables de les rendre opérationnels et scalables. Transformons vos données en solutions concrètes et performantes. 
            </p>

            <span className="block italic font-medium text-purple-200 mb-6"> 
                Ce que j'apporte à la table :
            </span>

            {/* Liste optimisée */}
            <ul className="list-none text-left max-w-lg mx-auto space-y-4">
                <li>
                    <p className="mb-2"><span className="text-purple-400 mr-2">✦</span> La rigueur du Dev : Un code optimisé, testé et maintenable.</p>
                    <LinearBar className="bg-gray-600/50" />
                </li>
                <li>
                    <p className="mb-2"><span className="text-purple-400 mr-2">✦</span> La puissance de la Data : Orchestration de pipelines massifs.</p>
                    <LinearBar className="bg-gray-600/50" />
                </li>
                <li>
                    <p className="mb-2"><span className="text-purple-400 mr-2">✦</span> Scalabilité : Architectures pensées pour grandir.</p>
                    <LinearBar className="bg-gray-600/50" />
                </li>
            </ul>

            <div className="mt-12">
                <p className="italic font-medium text-purple-50 mb-6">
                    Besoin de passer de la donnée brute à une intelligence opérationnelle ? <br /> 
                    Parlons de votre prochain défi
                </p>
                <div className="flex justify-center">
                    <Button label="Lancer la discussion" variant="white" onClick={() => {}}/>
                </div>
            </div>
        </div>
    </div>
</div>

//     <div className="bg-[url('/images/developper_IA.jpg')] h-screen bg-cover opacity-100 bg-center flex items-center justify-center align-middle bg-black text-white">
//         <div className=" bg-opacity-60 opacity-100 p-10 rounded-lg ">
//             <h1 className="text-4xl font-bold mb-4">Un depart pourtant non tech</h1>
//             <p className="text-lg">
//                 Qui je suis ? <br />
//                 Je suis KOUADIO EKOI EDITH, une passionnée de technologie et d'innovation.
//                  Mon parcours a débuté dans un domaine totalement différent, mais ma curiosité insatiable pour le monde numérique m'a poussée à explorer l'univers de la programmation et du développement web.
//             </p>

//         </div>
//     </div>
//   
)
}

export default About

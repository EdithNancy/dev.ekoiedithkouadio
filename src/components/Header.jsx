import React from 'react'
import { Home, PieChart, Wallet, Tag, LineChart } from 'lucide-react';
import HeaderButton from './buttons/HeaderButton';
import Button from './buttons/Button';

const Header = () => {
    const menuItems = [
    { icon: Home, label: 'Accueil' },
    { icon: PieChart, label: 'Qui suis-je ?', active: true },
    { icon: Wallet, label: 'Compétences' },
    { icon: Tag, label: 'Projets' },
    { icon: LineChart, label: 'IA & Big Data' },
    { icon: LineChart, label: 'Contact' },

  ];

  return (
    <div className="fixed left-0 top-0 flex h-screen w-20 flex-col items-center border-r border-slate-800 py-8">
      {/* Conteneur des boutons */}
      <div className="flex flex-col space-y-6">
        {menuItems.map((item, index) => (
          <HeaderButton 
            key={index} 
            icon={item.icon} 
            label={item.label} 
            active={item.active} 
          />
        ))}
                   

      </div>
    </div>
  )
}


export default Header;
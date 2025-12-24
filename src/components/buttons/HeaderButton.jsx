import React from 'react'
import {Home, PieChart, Wallet, Tag, LineChart, Menu} from 'lucide-react'

const HeaderButton = ({ icon: Icon, label, active = false, onClick }) => {
    return (
        <div className="group relative flex items-center justify-center">
            <button
                onClick={onClick}
                className={`
            flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300
            ${active
                        ? 'bg-black text-white shadow-lg shadow-purple-800/50'
                        : 'bg-linear-to-b from-black  to-purple-600 shadow-lg shadow-purple-800/50 hover:bg-teal-600 hover:text-white'}
            `}
            >
                {Icon && <Icon size={24} strokeWidth={2} color="white" />}
            </button>
            
            {/*Label au survol) */}
            <div className="absolute left-16 scale-0 rounded-md bg-slate-900 px-3 py-1.5 
                            text-xs font-medium text-white shadow-md transition-all 
                            duration-200 group-hover:scale-100 origin-left whitespace-nowrap z-50">
                {label}
                {/* Petit triangle indicateur */}
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 border-y-4 
                                border-y-transparent border-r-4 border-r-slate-900" />
            </div>
        </div>
    )
}

export default HeaderButton

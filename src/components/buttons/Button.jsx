import React from "react";

const Button = ({ label, variant, className, onClick }) => {

    const baseStyles = "w-full sm:w-auto px-8 py-2 rounded-full font-bold transition-all duration-300 hover:scale-105 active:scale-95 text-base";
  
    const variants = {
        white: "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]",
        transparent: "bg-transparent border border-white/20 text-white hover:bg-white/5"
    }; 
     
  return (
    <button 
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
    >
        {label}

    </button>
    );
};
export default Button;
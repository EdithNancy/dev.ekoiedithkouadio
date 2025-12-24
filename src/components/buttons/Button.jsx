import React from "react";

const Button = ({ label, onClick, disabled }) => {
  return (
    <button 
        onClick={onClick}
        disabled={disabled} 
        className={`
            px-4 py-2 rounded-md text-white font-semibold transition 
            ${disabled
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-black hover:shadow-lg shadow-purple-800/50 hover:bg-purple-700'
            }
        `}
    >
        {label}

    </button>
    );
};
export default Button;
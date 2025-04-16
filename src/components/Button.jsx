import React from 'react'

const Button = ({ onClick, children, className }) => {
    return (
        <button
            onClick={onClick}
            className={` px-6 py-3 rounded-md text-lg font-semibold transition-all ${className}`}
        >
            {children}
        </button>
    )
}

export default Button
import React from 'react'

const Button = ({label, iconURL}) => {
    return (
        <button className="flex justify-center items-center g-2 px-5 py-4 border 
        font-montserrat text-lg leading-none bg-coral-red rounded-full text-white">
            {label}

            <img
            src={iconURL}
            alt="arrow-right"
            className='ml-3 rounded-full w-5 h-5 object-cover '
            />
        </button>
    )
}

export default Button

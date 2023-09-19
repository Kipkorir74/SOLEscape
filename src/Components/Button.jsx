import React from 'react'

const Button = ({ label, iconURL, backgroundColor, borderColor, textColor,fullWidth }) => {
    return (

        // check for the background color. If its is available, apply 
        // the rest of the styles to the class
        <button className={`flex justify-center items-center g-2 px-5 py-4 border 
        font-montserrat text-lg leading-none 
        ${backgroundColor ?
                `${backgroundColor} ${textColor} ${borderColor}` :
                "bg-coral-red text-white border-coral-red"}  rounded-full ${fullWidth && 'w-full'}"`}>
            {label}

            {iconURL && <img
                src={iconURL}
                alt="arrow-right"
                className='ml-3 rounded-full w-5 h-5 object-cover '
            />}
        </button>
    )
}

export default Button

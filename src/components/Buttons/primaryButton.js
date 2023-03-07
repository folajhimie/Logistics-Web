import React from 'react'
// import './ButtonPrimary.css'

const PrimaryButton = ({icon, lineHeight, fontWeight, bgColor, color, bgHoverColor, size, text, borderRadius, width, border,fontSize, small }) => {
    return (
        <button
            type="button"
            // onClick={()=> setIsClicked(initialState)}
            style={{lineHeight, fontWeight, fontSize, backgroundColor: bgColor, color, borderRadius, border, width}}
            className={`  justify-between font-semibold capitalise font-blink text-${size} p-3 lg:w-${width} xl:w-${width} sm:w-${width} xs:w-${small} hover:drop-shadow-xs hover:bg-${bgHoverColor} lg:flex xs:w-44 xs:text-sm xs:flex`}
        >
            {text} <span className='mt-1'>{icon}</span>
        </button>
    )
}

export default PrimaryButton;
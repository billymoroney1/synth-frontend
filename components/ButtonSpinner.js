import React from 'react'

const ButtonSpinner = ({loading, text}) => {
    return (
        <div>
            
            <button className="w-full py-2 px-4 bg-blue-700 rounded-md hover:bg-light-gray-700 rounded-md text-white text-sm disabled:opacity-50 ...">
                {text}
                {loading && (
                    <span>SPINNING</span>
                )}
            </button>
        </div>
    )
}

export default ButtonSpinner
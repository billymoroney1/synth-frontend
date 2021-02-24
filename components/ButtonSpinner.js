import React from 'react'

const ButtonSpinner = ({loading, text}) => {
    return (
        <div>
            
            <button className="w-full py-2 px-4 bg-blue-700 rounded-md hover:bg-light-gray-700 rounded-md text-white text-sm disabled:opacity-50 ...">
                {text}
                {loading && (
                    <div className='flex h-screen justify-center items-center'>
                        <div className='m-auto'>
                            <div className='animate-spin w-18 h-18 border-4 border-black'></div>
                        </div>
                    </div>
                )}
            </button>
        </div>
    )
}

export default ButtonSpinner
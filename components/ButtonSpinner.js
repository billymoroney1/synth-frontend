import React from 'react'

const ButtonSpinner = ({loading, text}) => {
    return (
        <div>
            <button>
                {text}
                {loading && (
                    <span>SPINNING</span>
                )}
            </button>
        </div>
    )
}

export default ButtonSpinner
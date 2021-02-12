import React from 'react'

const FormGroup = ({ children, text }) => {
    return (
        <div>
            <label htmlFor={text}>{text.slice(0, 1).toUpperCase() + text.slice(1, text.length)}</label>
            {children}
        </div>
    )
}

export default FormGroup
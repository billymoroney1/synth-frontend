import React, { useState } from 'react'

//helper functions
import { createPreset } from '../../services/preset.service'

//components
import FormGroup from '../FormGroup.js'

export default function SavePreset(props) {

    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    const onChangeName = (e) => {
        setName(e.target.value)
        setMessage("")
    }

    //need to gather state from Synth.js component
    const handleSubmit = (e) => {
        e.preventDefault()
        if (name === ""){
            setMessage('Must provide a name!')
        } else (
            createPreset(name, props.preset).then(
                (response) => {
                    setMessage(response.data.message)
                }
            )
        )
    }

    //form to input name for preset, submit button to save preset to db

    return (
        <div>
            <form className='flex space-x-6' onSubmit={handleSubmit}>
                <input className='placeholder-blue-500 border rounded border-gray-600 text-4xl' type='text' id='name' name='name' placeholder='Name...' value={name} onChange={onChangeName} />
                <input className='border rounded text-xl' type='submit' value="Create" />
            </form>

            {message && (
                        <div>
                            {message}
                        </div>
                    )}
        </div>
    )
}
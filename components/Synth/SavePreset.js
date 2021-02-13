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
    }

    //need to gather state from Synth.js component
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(props.preset)
        createPreset(name, props.preset).then(
            (response) => {
                setMessage(response.data.message)
            }
        )
    }

    //form to input name for preset, submit button to save preset to db

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for='name'>Name</label>
                <input type='text' id='name' name='name' value={name} onChange={onChangeName} />
                <input type='submit' value="Create" />
            </form>

            {message && (
                        <div>
                            {message}
                        </div>
                    )}
        </div>
    )
}
import React, { useState } from 'react'

//helper functions
import { editPreset } from '../../services/preset.service'


export default function EditPreset(props) {

    const [name, setName] = useState(props.name)
    const [message, setMessage] = useState("")

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    //need to gather state from Synth.js component
    const handleSubmit = (e) => {
        e.preventDefault()
        editPreset(props.id, name, props.preset).then(
            (response) => {
                setMessage(response.data.message)
            }
        )
    }

    return (
        <div>
            <form className='flex space-x-6' onSubmit={handleSubmit}>
                <input className='name-text text-blue-400' type='text' id='name' name='name' value={name} onChange={onChangeName} />
                <input className='name-submit' type='submit' value="Save Changes" />
            </form>

            {message && (
                <div>
                    {message}
                </div>
            )}
        </div>
    )
}